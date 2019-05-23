import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class OwOUwUOwO
{
	public static Connection sqlConnection = null;
	
	public static final String CONNECTION_ADDRESS = "jdbc:mysql://localhost/FurryMapSchema?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&characterEncoding=UTF-8";
	public static final String USER_TABLE_NAME = "userdatabase";
	public static final String LOCATION_TABLE_NAME = "locationdatabase";
	public static final String SQL_LOGIN = "root";
	public static final String SQL_PASSWORD = "";
	
	public static void main(String[] args) throws SQLException
	{
		initConnection();
		
		String jsonData = getJSONDataFromFile("combined.json");
		ArrayList<Furry> owo = getFurryList(jsonData);
		PreparedStatement setter = sqlConnection.prepareStatement("SET NAMES utf8");
		setter.execute();
		int i = 0;
		for (Furry furry : owo)
		{
			System.out.println(i + "/"  + owo.size());
			String query = "INSERT INTO " + LOCATION_TABLE_NAME + " (locationid, accountid, username, description, profileurl, latitude, longitude, opacity) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
			PreparedStatement stmt = sqlConnection.prepareStatement(query);
			stmt.setLong(1, Long.parseLong(furry.getID().substring(1)));
			stmt.setLong(2, furry.getAccountId());
			stmt.setString(3, furry.getUserName());
			stmt.setString(4, furry.getDescription());
			stmt.setString(5, furry.getProfile());
			stmt.setDouble(6, furry.getLatitude());
			stmt.setDouble(7, furry.getLongitude());
			stmt.setInt(8, furry.getOpacityFactor());
			stmt.execute();
			i++;
		}	
	}
	
	public static void initConnection() throws SQLException 
	{
		boolean needReinit = false;
		if (sqlConnection == null)
		{
			needReinit = true;
		} 
		else
		{
			if (sqlConnection.isClosed())
			{
				needReinit = true;
			}
		}
		if (needReinit) 
		{
			String connString = CONNECTION_ADDRESS;
			try 
			{
				Class.forName("com.mysql.jdbc.Driver");
			} 
			catch (ClassNotFoundException cnfe)
			{
				cnfe.printStackTrace();
			}

			sqlConnection = DriverManager.getConnection(connString, SQL_LOGIN, SQL_PASSWORD);
		}
	}
	
	public static String getJSONDataFromFile(String location) 
	{
		try 
		{
			BufferedReader br = new BufferedReader(new FileReader(location));
			String s = "";
			String tmp = "";
			try 
			{
				while ((tmp = br.readLine()) != null)
				{
					s += tmp;
				}
			} 
			catch (IOException e) 
			{
				e.printStackTrace();
			}
			return s;
		} 
		catch (FileNotFoundException e) 
		{
			e.printStackTrace();
			return null;
		}
	}

	
	@SuppressWarnings("unused")
    public static ArrayList<Furry> getFurryList(String JSONData)
    {
        try
        {
            ArrayList<Furry> tmpLst = new ArrayList<Furry>();

            JSONObject obj = new JSONObject(JSONData);
            JSONObject combined = (JSONObject) obj.get("combined");
            JSONObject geoJSONData = combined.getJSONObject("geojson");
            JSONArray furryList = geoJSONData.getJSONArray("features");
            for (int i = 0; i < furryList.length(); i++)
            {
                JSONArray furryProfile = furryList.getJSONArray(i);
                double longitude = furryProfile.getDouble(0);
                double latitude = furryProfile.getDouble(1);
                String id = furryProfile.getString(2);
                String description = furryProfile.getString(3);
                int opacityFactor = furryProfile.getInt(4);
                String userName = furryProfile.getString(5);
                String profile = furryProfile.getString(6);
                int accountid = furryProfile.getInt(7);
                tmpLst.add(new Furry(latitude, longitude, id, userName, description, profile, accountid, opacityFactor));
            }
            return tmpLst;
        }
        catch (JSONException e)
        {
            e.printStackTrace();
            return null;
        }
    }


}
