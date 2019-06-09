import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class OwOUwUOwO
{
	public static Connection sqlConnection = null;
	
	public static final String CONNECTION_ADDRESS = "jdbc:mysql://localhost/FurryMapSchema?useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&characterEncoding=UTF-8";
	public static final String USER_TABLE_NAME = "userdatabase";
	public static final String LOCATION_TABLE_NAME = "locationdatabase";
	public static final String SQL_LOGIN = "root";
	public static final String SQL_PASSWORD = "";
	
	public static void main(String[] args) throws SQLException, UnsupportedEncodingException
	{
		initConnection();
		
		String jsonData = getJSONDataFromFile("combined.json");
		ArrayList<Furry> owo = getFurryList(jsonData);
		
		
		String query = "INSERT INTO " + LOCATION_TABLE_NAME + " (locationid, accountid, description, latitude, longitude, opacity, archived) VALUES (?, ?, ?, ?, ?, ?, ?)";
		PreparedStatement stmt = sqlConnection.prepareStatement(query);
		
		String query2 = "INSERT INTO " + USER_TABLE_NAME + " (id, username, email, description, gender, language, countryflag, profilepicid, archived) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
		PreparedStatement stmt2 = sqlConnection.prepareStatement(query2);
		
		stmt.executeQuery("SET NAMES utf8mb4");
		int i = 0;
		for (Furry furry : owo)
		{
			// add the marker.
			stmt.setLong(1, Long.parseLong(furry.getID().substring(1)));
			long userProfileStatus = hasUserProfile(furry.getUserName());
			stmt.setLong(2, userProfileStatus == -1L ? i : userProfileStatus); // add the account id.
			stmt.setString(3, furry.getDescription());
			stmt.setDouble(4, furry.getLatitude());
			stmt.setDouble(5, furry.getLongitude());
			stmt.setInt(6, furry.getOpacityFactor());
			stmt.setInt(7, 1);
			stmt.execute();
			
			// add the user. CHECK IF USER EXISTS FIRST.
			if (userProfileStatus == -1L)
			{
				stmt2.setLong(1, (long)i);
				stmt2.setString(2, furry.getUserName());
				stmt2.setString(3, "archived"); // no email
				stmt2.setString(4, furry.getDescription());
				stmt2.setInt(5, 0); // gender unknown (0 = unknown, 1 = male, 2 = female, 3 = other)
				stmt2.setString(6, "archived"); // language unknown
				stmt2.setString(7, "archived"); // country flag unknown
				stmt2.setString(8, "archived"); // pfp is archived
				stmt2.setInt(9, 1);
				stmt2.execute();
				System.out.println("Creating new account");
			}
			else
			{
				System.out.println("Using existing account " + furry.getUserName());
			}
			
			i++;
			System.out.printf("%d of %d\n", i, owo.size());
		}	
	}
	
	public static long hasUserProfile(String username) throws SQLException
	{
		initConnection();
		String query = "SELECT * FROM userdatabase WHERE username = ?";
		PreparedStatement stmt = sqlConnection.prepareStatement(query);
		stmt.setString(1, username);
		ResultSet rs = stmt.executeQuery();
		return getRowCount(rs) == 0 ? -1L : rs.getLong("id");
	}
	
	private static long getRowCount(ResultSet rs) throws SQLException
	{
		long i = 0L;
		while (rs.next())
		{
			i++;
		}
		rs.first();
		return i;
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
                while((tmp = br.readLine()) != null)
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
