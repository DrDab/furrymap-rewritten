package com.openhorizonsolutions;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.UUID;

import org.json.JSONArray;
import org.json.JSONObject;

public class IOUtils 
{
	public static Connection sqlConnection = null;

	private static HashMap<String, Long> apiKeyList;

	public static final String CONNECTION_ADDRESS = "jdbc:mysql://localhost/FurryMapSchema?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&characterEncoding=UTF-8";
	public static final String USER_TABLE_NAME = "userdatabase";
	public static final String LOCATION_TABLE_NAME = "locationdatabase";
	public static final String SQL_LOGIN = "root";
	public static final String SQL_PASSWORD = "";

	// crypto stuff.
	public static final String MD5_SALT_PART_1 = "8hqerroijqoifn8143u213589214t12ojori21j4oije621yifferyifffafojsaofjosaifjosajfdoi";
	public static final String MD5_SALT_PART_2 = "arj18r2rghhworjoafaosjfoh213rf134523512rjafkjroqjr8213ot125!$@@furryfurriesfurriesfurry";

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

	public static String generateAPIKeyForAccount(long id)
	{
		if (apiKeyList == null)
		{
			apiKeyList = new HashMap<String, Long>();
		}

		String token = UUID.randomUUID().toString();

		while (!addAPIKey(token, id))
		{
			token = UUID.randomUUID().toString();
		}

		return token;
	}

	public static boolean addAPIKey(String key, long id)
	{
		if (apiKeyList == null) 
		{
			apiKeyList = new HashMap<String, Long>();
		}

		if (apiKeyList.containsKey(key)) 
		{
			return false;
		} 
		else
		{
			apiKeyList.put(key, id);
			return true;
		}
	}

	public static long getIDFromAPIKey(String key)
	{
		if (apiKeyList == null) 
		{
			apiKeyList = new HashMap<String, Long>();
		}

		if (apiKeyList.containsKey(key))
		{
			return apiKeyList.get(key);
		} 
		else 
		{
			return -1L;
		}
	}

	public static void updateAccountStringInfo(long id, String parameter, String newInfo) throws SQLException
	{
		if (parameter.equals("id"))
		{
			return;
		}

		synchronized (sqlConnection)
		{
			String query = "UPDATE " + USER_TABLE_NAME + " SET " + parameter + " = ? WHERE id = ?";
			PreparedStatement stmt = sqlConnection.prepareStatement(query);
			stmt.setString(1, newInfo);
			stmt.setLong(2, id);
			stmt.execute();
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

	public static String hashMD5(String input)
	{
		String md5 = null;

		if (input == null) 
		{
			return null;
		}

		String saltedInput = "";
		saltedInput += MD5_SALT_PART_1;
		saltedInput += input;
		saltedInput += MD5_SALT_PART_2;

		try
		{
			MessageDigest digest = MessageDigest.getInstance("MD5");
			digest.update(saltedInput.getBytes(), 0, saltedInput.length());
			md5 = new BigInteger(1, digest.digest()).toString(16);
		}
		catch (NoSuchAlgorithmException e) 
		{
			e.printStackTrace();
		}

		return md5;
	}

	public static long getNextUserId() throws SQLException 
	{
		initConnection();
		String query = "SELECT * FROM " + USER_TABLE_NAME + " ORDER BY id DESC";
		PreparedStatement stmt = sqlConnection.prepareStatement(query);
		ResultSet rs = stmt.executeQuery();
		rs.first();
		long id = rs.getLong("id");
		return (id < ServerInfo.START_USER_ID_NUMBER) ? ServerInfo.START_USER_ID_NUMBER : id + 1;
	}

	public static long getNextLocationId() throws SQLException 
	{
		initConnection();
		String query = "SELECT * FROM " + LOCATION_TABLE_NAME + " ORDER BY locationid DESC";
		PreparedStatement stmt = sqlConnection.prepareStatement(query);
		ResultSet rs = stmt.executeQuery();
		rs.first();
		long id = rs.getLong("id");
		return (id < ServerInfo.START_LOCATION_ID_NUMBER) ? ServerInfo.START_LOCATION_ID_NUMBER : id + 1;
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
	
	public static JSONArray getJSONArrayOfArchivedFurryLocations() throws SQLException
	{
		initConnection();
		String query = "SELECT * FROM " + LOCATION_TABLE_NAME;
		PreparedStatement stmt = sqlConnection.prepareStatement(query);
		stmt.executeQuery("SET NAMES utf8mb4");
		ResultSet rs = stmt.executeQuery();
		JSONArray toReturn = new JSONArray();
		int id = 0;
		while (rs.next())
		{
			JSONArray tmpLoc = new JSONArray();
			long locationId = rs.getLong("locationid");
			long accountId = rs.getLong("accountid");
			String username = rs.getString("username");
			String description = (rs.getString("description"));
			String profileUrl = rs.getString("profileurl");
			double latitude = rs.getDouble("latitude");
			double longitude = rs.getDouble("longitude");
			int opacity = rs.getInt("opacity");
			tmpLoc.put(0, longitude);
			tmpLoc.put(1, latitude);
			tmpLoc.put(2, "m" + locationId);
			tmpLoc.put(3, description);
			tmpLoc.put(4, opacity);
			tmpLoc.put(5, username);
			tmpLoc.put(6, profileUrl);
			tmpLoc.put(7, accountId);
			toReturn.put(id, tmpLoc);
			id++;
		}
		return toReturn;
	}
	
	public static JSONArray getJSONArrayOfDynamicFurryLocations() throws SQLException
	{
		initConnection();
		JSONArray toReturn = new JSONArray();
		return toReturn;
	}
	
	public static JSONArray getUsersOwnMarkers(long uid) throws SQLException
	{
		initConnection();
		JSONArray toReturn = new JSONArray();
		
		// BEGIN PLACEHOLDER CODE
		JSONArray tmpLoc = new JSONArray();
		tmpLoc.put(0, 0.0);
		tmpLoc.put(1, 0.0);
		tmpLoc.put(2, "m" + 14312512);
		tmpLoc.put(3, "TestDescription");
		tmpLoc.put(4, 15);
		tmpLoc.put(5, "TestUsername");
		tmpLoc.put(6, "/");
		tmpLoc.put(7, 44444444);
		toReturn.put(0, tmpLoc);
		// END PLACEHOLDER CODE
		
		return toReturn;
	}
	
	public static JSONArray getJSONArrayOfSpecifiedFurryLocations(String listSelection, String listOrder, JSONObject otherParams, int number) throws SQLException, NullPointerException
	{
		initConnection();
		
		String query = "SELECT * FROM " + LOCATION_TABLE_NAME;
		
		if (listSelection.equals("marker_alpha"))
		{
			// alphabetical ordered markers
			query += " ORDER BY description " + (listOrder.equals("asc") ? "ASC" : "DESC");
			query += ", username " + (listOrder.equals("asc") ? "ASC" : "DESC");
			query += " LIMIT ?";
			PreparedStatement stmt = sqlConnection.prepareStatement(query);
			stmt.executeQuery("SET NAMES utf8mb4");
			stmt.setInt(1, number);
			ResultSet rs = stmt.executeQuery();
			JSONArray toReturn = new JSONArray();
			int id = 0;
			while (rs.next())
			{
				JSONArray tmpLoc = new JSONArray();
				long locationId = rs.getLong("locationid");
				long accountId = rs.getLong("accountid");
				String username = rs.getString("username");
				String description = (rs.getString("description"));
				String profileUrl = rs.getString("profileurl");
				double latitude = rs.getDouble("latitude");
				double longitude = rs.getDouble("longitude");
				int opacity = rs.getInt("opacity");
				tmpLoc.put(0, longitude);
				tmpLoc.put(1, latitude);
				tmpLoc.put(2, "m" + locationId);
				tmpLoc.put(3, description);
				tmpLoc.put(4, opacity);
				tmpLoc.put(5, username);
				tmpLoc.put(6, profileUrl);
				tmpLoc.put(7, accountId);
				toReturn.put(id, tmpLoc);
				id++;
			}
			return toReturn;
		}
		/*
		 * remove ability to sort by date (for now)
		else if (listSelection.equals("marker_date"))
		{
			// date ordered markers
			query += " ORDER BY description " + (listOrder.equals("asc") ? "ASC" : "DESC");
		}
		*/
		else if (listSelection.equals("marker_measure"))
		{
			// radius ordered markers
			query += " LIMIT ?";
			PreparedStatement stmt = sqlConnection.prepareStatement(query);
			stmt.executeQuery("SET NAMES utf8mb4");
			stmt.setInt(1, number);
			ResultSet rs = stmt.executeQuery();
			JSONArray toReturn = new JSONArray();
			ArrayList<FurryMarkerDistanceHandler> al = new ArrayList<FurryMarkerDistanceHandler>();
			while (rs.next())
			{
				long locationId = rs.getLong("locationid");
				long accountId = rs.getLong("accountid");
				String username = rs.getString("username");
				String description = (rs.getString("description"));
				String profileUrl = rs.getString("profileurl");
				double latitude = rs.getDouble("latitude");
				double longitude = rs.getDouble("longitude");
				int opacity = rs.getInt("opacity");
				FurryMarker furre = new FurryMarker(latitude, longitude, locationId, username, description, profileUrl, accountId, opacity);
				
				double searchLat = 0.0;
				double searchLng = 0.0;
				
				if (otherParams != null)
				{
					searchLat = otherParams.getDouble("latitude");
					searchLng = otherParams.getDouble("longitude");
				}
				else
				al.add(new FurryMarkerDistanceHandler(furre, furre.distanceFromCoords(searchLat, searchLng)));
			}
			
			Collections.sort(al);
			if (!listOrder.equals("asc"))
			{
				Collections.reverse(al);
			}
			
			int id = 0;
			for (FurryMarkerDistanceHandler handler : al)
			{
				JSONArray tmpLoc = new JSONArray();
				FurryMarker furre = handler.getFurry();
				tmpLoc.put(0, furre.getLongitude());
				tmpLoc.put(1, furre.getLatitude());
				tmpLoc.put(2, "m" + furre.getLocationID());
				tmpLoc.put(3, furre.getDescription());
				tmpLoc.put(4, furre.getOpacityFactor());
				tmpLoc.put(5, furre.getUserName());
				tmpLoc.put(6, furre.getProfile());
				tmpLoc.put(7, furre.getAccountId());
				toReturn.put(id, tmpLoc);
				id++;
			}
			return toReturn;
		}
		
		return new JSONArray();
	}
}
