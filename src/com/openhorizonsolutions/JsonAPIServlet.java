package com.openhorizonsolutions;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

/**
 * Servlet implementation class TestServlet
 */
@WebServlet("/JsonAPIServlet")
public class JsonAPIServlet extends HttpServlet
{
	private static final long serialVersionUID = 1L;

	public JsonAPIServlet() 
	{
		super();
		// TODO Auto-generated constructor stub
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		// TODO Auto-generated method stub
		response.addHeader("Access-Control-Allow-Origin", "*");
		
		String requestURI = request.getRequestURI();
		String requestURIParts = request.getRequestURI()
				.substring(requestURI.indexOf("FurryMapRewritten/en/marker/list/type"));
		String[] sep = requestURIParts.split("/");
		String type = sep[sep.length - 1];

		String responseJSONString = "";

		JSONObject headNode = new JSONObject();

		if (type.equals("combined")) 
		{
			JSONObject combined = new JSONObject();
			combined.put("id", "combined");

			JSONObject info = new JSONObject();
			info.put("isLayer", "true");
			info.put("addToSearch", "true");
			info.put("addToDistance", "true");
			info.put("layerindex", "10");
			info.put("iconcolor", "blue");
			info.put("updateUrl", "/en/marker/list/type/combined");
			info.put("layername", "Furries (blue)");
			combined.put("info", info);

			JSONObject geojson = new JSONObject();
			geojson.put("type", "FeatureCollection");

			//JSONArray features = new JSONArray();

			// collect furry data and put into an array.
			JSONArray features;
			try 
			{
				features = IOUtils.getJSONArrayOfCombinedFurryLocations();
			}
			catch (SQLException e) 
			{
				// TODO Auto-generated catch block
				e.printStackTrace();
				features = new JSONArray();
			}
			/*
			String archivedata = IOUtils.getJSONDataFromFile(getServletContext().getRealPath("") + "/combined.json");
			JSONObject archiveJsonObject = new JSONObject(archivedata);
			JSONObject combined2 = (JSONObject) archiveJsonObject.get("combined");
			JSONObject geoJSONData2 = combined2.getJSONObject("geojson");
			JSONArray furryList2 = geoJSONData2.getJSONArray("features");
			
			for (int i = 0; i < furryList2.length(); i++)
			{
				JSONArray furryProfile = furryList2.getJSONArray(i);
				features.put(furryProfile);
			}
			*/

			// end algorithmic shit, fuck yeah bitches!

			geojson.put("features", features);
			combined.put("geojson", geojson);

			headNode.put("combined", combined);

			responseJSONString += headNode;
		} 
		else 
		{
			responseJSONString += "What the fuck?";
		}
		response.getWriter().append(responseJSONString);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
