package com.openhorizonsolutions;

import java.util.ArrayList;
import java.util.HashMap;

public class MarkerAccountMapper 
{
	private HashMap<Long, ArrayList<FurryMarker>> markermap;
	
	public MarkerAccountMapper(ArrayList<FurryMarker> markers)
	{
		this.markermap = new HashMap<Long, ArrayList<FurryMarker>>();
		
		for (FurryMarker marker : markers)
		{
			if (markermap.containsKey(marker.getAccountId()))
			{
				markermap.get(marker.getAccountId()).add(marker);
			}
			else
			{
				markermap.put(marker.getAccountId(), new ArrayList<FurryMarker>());
				markermap.get(marker.getAccountId()).add(marker);
			}
		}
	}
	
	public ArrayList<FurryMarker> getFurryMarkersById(long id)
	{
		return markermap.get(id);
	}
}
