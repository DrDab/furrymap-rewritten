package com.openhorizonsolutions;

public class FurryMarkerDistanceHandler implements Comparable<FurryMarkerDistanceHandler>
{
	private FurryMarker furry;
    private double distance;

    public FurryMarkerDistanceHandler(FurryMarker furry, double distance)
    {
        this.furry = furry;
        this.distance = distance;
    }

    public FurryMarker getFurry()
    {
        return furry;
    }

    public double getDistance()
    {
        return distance;
    }

    @Override
    public int compareTo(FurryMarkerDistanceHandler o)
    {
        return ((Double) distance).compareTo((Double) o.getDistance());
    }

}
