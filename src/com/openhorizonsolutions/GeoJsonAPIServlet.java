package com.openhorizonsolutions;

import java.io.IOException;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
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
public class GeoJsonAPIServlet extends HttpServlet
{
	private static final long serialVersionUID = 1L;

	public GeoJsonAPIServlet() 
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
			// first add in the existing archived markers.
			if (ServerInfo.SHOW_ARCHIVED)
			{
				JSONObject archived = new JSONObject();
				archived.put("id", "archived");

				JSONObject archived_info = new JSONObject();
				archived_info.put("isLayer", "true");
				archived_info.put("addToSearch", "true");
				archived_info.put("addToDistance", "true");
				archived_info.put("layerindex", "10");
				archived_info.put("iconcolor", "cyan");
				archived_info.put("updateUrl", "/en/marker/list/type/combined");
				archived_info.put("layername", "Archived Furries (cyan)");
				archived.put("info", archived_info);

				JSONObject archived_geojson = new JSONObject();
				archived_geojson.put("type", "FeatureCollection");

				JSONArray archived_features;
				try 
				{
					archived_features = IOUtils.markerListToJSONArray(IOUtils.getArchivedMarkers());
				}
				catch (SQLException e) 
				{
					// TODO Auto-generated catch block
					e.printStackTrace();
					archived_features = new JSONArray();
				}
				
				archived_geojson.put("features", archived_features);
				archived.put("geojson", archived_geojson);

				headNode.put("archived", archived);

			}
			// now, add in the new furries.
			
			JSONObject dynamic = new JSONObject();
			dynamic.put("id", "dynamic");

			JSONObject dynamic_info = new JSONObject();
			dynamic_info.put("isLayer", "true");
			dynamic_info.put("addToSearch", "true");
			dynamic_info.put("addToDistance", "true");
			dynamic_info.put("layerindex", "10");
			dynamic_info.put("iconcolor", "blue");
			dynamic_info.put("updateUrl", "/en/marker/list/type/combined");
			dynamic_info.put("layername", "Dynamic Furries (blue)");
			dynamic.put("info", dynamic_info);

			JSONObject dynamic_geojson = new JSONObject();
			dynamic_geojson.put("type", "FeatureCollection");

			JSONArray dynamic_features;
			try 
			{
				dynamic_features = IOUtils.markerListToJSONArray(IOUtils.getDynamicMarkers());
			}
			catch (SQLException e) 
			{
				// TODO Auto-generated catch block
				e.printStackTrace();
				dynamic_features = new JSONArray();
			}
			
			dynamic_geojson.put("features", dynamic_features);
			dynamic.put("geojson", dynamic_geojson);

			headNode.put("dynamic", dynamic);
			
			// add the user's own markers.
			// get the id of the user from UUID access token (to be implemented later)
			
			JSONObject own = new JSONObject();
			own.put("id", "own");

			JSONObject own_info = new JSONObject();
			own_info.put("isLayer", "true");
			own_info.put("addToSearch", "true");
			own_info.put("addToDistance", "true");
			own_info.put("layerindex", "10");
			own_info.put("iconcolor", "red");
			own_info.put("updateUrl", "/en/marker/list/type/combined");
			own_info.put("layername", "My Marker(s) (red)");
			own.put("info", own_info);

			JSONObject own_geojson = new JSONObject();
			own_geojson.put("type", "FeatureCollection");

			JSONArray own_features;			
			
			String token = request.getParameter("token");
			if (token == null)
			{
				// show nothing.
				//System.out.println("No Token");
				own_features = new JSONArray();
			}
			else
			{
				//System.out.println("Token: " + token);
				long userid = IOUtils.getIDFromAPIKey(token);
				try 
				{
					// get user's own markers from userid (resolved from access token)
					own_features = IOUtils.getUsersOwnMarkers(userid);
				} 
				catch (SQLException e) 
				{
					// TODO Auto-generated catch block
					e.printStackTrace();
					own_features = new JSONArray();
				}
			}
			
			own_geojson.put("features", own_features);
			own.put("geojson", own_geojson);

			headNode.put("own", own);
			
			// done.

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
				features = IOUtils.getJSONArrayOfSpecifiedFurryLocations(listSelection, listOrder, toPlug, 50);
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
			responseJSONString += headNode;
		}
		response.getWriter().append(responseJSONString);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
