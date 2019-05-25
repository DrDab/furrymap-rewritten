package com.openhorizonsolutions;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONException;
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
		response.setCharacterEncoding("UTF-8");
		
		String requestURI = request.getRequestURI();
		String requestURIParts = request.getRequestURI()
				.substring(requestURI.indexOf("FurryMapRewritten/en/marker/list/type"));
		String[] sep = requestURIParts.split("/");
		String type = sep[sep.length - 1];

		String responseJSONString = "";

		JSONObject headNode = new JSONObject();

		if (type.equals("combined") || type.equals("all")) 
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
			
			geojson.put("features", features);
			combined.put("geojson", geojson);

			headNode.put("combined", combined);

			responseJSONString += headNode;
		} 
		else if (type.equals("getcount"))
		{
			responseJSONString += headNode;
		}
		else if (type.equals("list_users"))
		{
			String listSelection = request.getParameter("list_selection");
			String listOrder = request.getParameter("list_order");
			
			if (listSelection.equals("user_alpha"))
			{
				// alphabetical ordered users
				if (listOrder.equals("asc"))
				{
					
				}
				else
				{
					
				}
			}
			else if (listSelection.equals("user_date"))
			{
				// date ordered users
				if (listOrder.equals("asc"))
				{
					
				}
				else
				{
					
				}
			}
		}
		else if (type.equals("list_markers"))
		{
			String listSelection = request.getParameter("list_selection");
			String listOrder = request.getParameter("list_order");
			
			JSONObject searchResult = new JSONObject();
			searchResult.put("id", "search_result");

			JSONObject info = new JSONObject();
			info.put("isLayer", "true");
			info.put("addToSearch", "true");
			info.put("addToDistance", "true");
			info.put("layerindex", "10");
			info.put("iconcolor", "blue");
			info.put("updateUrl", "/en/marker/list/type/list_markers");
			info.put("layername", "Furries (blue)");
			searchResult.put("info", info);

			JSONObject geojson = new JSONObject();
			geojson.put("type", "FeatureCollection");

			JSONArray features;
			try 
			{
				String otherParams = request.getParameter("other_params");
				JSONObject toPlug = null;
				if (otherParams != null)
				{
					toPlug = new JSONObject(otherParams);
				}
				features = IOUtils.getJSONArrayOfSpecifiedFurryLocations(listSelection, listOrder, toPlug);
			}
			catch (SQLException e) 
			{
				// TODO Auto-generated catch block
				e.printStackTrace();
				features = new JSONArray();
			}
			catch (NullPointerException e) 
			{
				// TODO Auto-generated catch block
				e.printStackTrace();
				features = new JSONArray();
			}

			geojson.put("features", features);
			searchResult.put("geojson", geojson);

			headNode.put("search_result", searchResult);

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
