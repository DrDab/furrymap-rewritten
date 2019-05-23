public class Furry implements Comparable<Furry>
{
    private double latitude;
    private double longitude;
    private String id;
    private String userName;
    private String description;
    private String profile;
    private int accountid;
    private int opacityfactor;

    /**
     * Initializes an instance of a Furry object.
     * A Furry object stores and handles the latitude, longitude, FurryMap information, username, and description of a furry.
     *
     * @param latitude (the latitude of the furry in degrees)
     * @param longitude (the longitude of the furry in degrees)
     * @param id (the FurryMap ID of the furry)
     * @param userName (the FurryMap username of the furry)
     * @param description (the FurryMap description of the furry)
     * @param profile (the FurryMap profile URL of the furry)
     */
    public Furry(double latitude, double longitude, String id, String userName, String description, String profile, int accountid, int opacityfactor)
    {
        this.latitude = latitude;
        this.longitude = longitude;
        this.id = id;
        this.userName = userName;
        this.description = description;
        this.profile = profile;
        this.accountid = accountid;
        this.opacityfactor = opacityfactor;
    }

    public int getOpacityFactor()
    {
    	return opacityfactor;
    }
    
    public int getAccountId()
    {
    	return accountid;
    }
    
    @Override
    public int compareTo(Furry e)
    {
        return userName.compareTo(userName);
    }

    /**
     * A function to return the latitude of the furry in degrees.
     * If north of the equator, this measure will be a positive number between (0, 90].
     * If south of the equator, this measure will be a negative number between (0, -90].
     * @return the latitude of the furry.
     */
    public double getLatitude()
    {
        return latitude;
    }

    /**
     * A function to return the longitude of the furry in degrees.
     * If west of the date line, this measure will be a negative number between (0, -180).
     * If east of the date line, this measure will be a negative number between (0, 180).
     * @return the longitude of the furry.
     */
    public double getLongitude()
    {
        return longitude;
    }

    /**
     * A function to return the ID number of the furry.
     * @return the ID number of the furry.
     */
    public String getID()
    {
        return id;
    }

    /**
     * A function to return the username of the furry.
     * @return the username of the furry.
     */
    public String getUserName()
    {
        return userName;
    }

    /**
     * A function to return the description of the furry.
     * @return the description of the furry.
     */
    public String getDescription()
    {
        return description;
    }

    /**
     * A function to return the profile URL of the furry.
     * @return the profile URL of the furry.
     */
    public String getProfile()
    {
        return profile;
    }

    private double distance(double lat1, double lon1, double lat2, double lon2, char unit)
    {
        double theta = lon1 - lon2;
        double dist = Math.sin(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(theta));
        dist = Math.acos(dist);
        dist = rad2deg(dist);
        dist = dist * 60 * 1.1515;
        if (unit == 'K')
        { // kilometers
            dist = dist * 1.609344;
        }
        else if (unit == 'N')
        { // nautical miles
            dist = dist * 0.8684;
        }
        return dist;
    }

    private double deg2rad(double deg)
    {
        return (deg * Math.PI / 180.0);
    }

    private double rad2deg(double rad)
    {
        return (rad * 180.0 / Math.PI);
    }


    /**
     * A function to return the distance of the furry in miles (in relation to another pair of coordinates).
     *
     * @param lat1 (the latitude of the measured object in degrees)
     * @param lon1 (the longitude of the measured object in degrees)
     * @return the distance in miles between the location of the instance of this Furry class and another pair of coordinates.
     */
    public double distanceFromCoords(double lat1, double lon1)
    {
        return distance(lat1, lon1, latitude, longitude, 'M');
    }

    /**
     * A function to return the distance between the location of this instance of the Furry class and another instance of a Furry class.
     *
     * @param f (an instance of another Furry class)
     * @return the distance in miles between the location this instance of the Furry class and the instance of the other Furry class.
     */
    public double distanceFromFurry(Furry f)
    {
        return distanceFromCoords(f.latitude, f.longitude);
    }

    /**
     * A function to return the distance of the furry in kilometers (in relation to another pair of coordinates).
     *
     * @param lat1 (the latitude of the measured object in degrees)
     * @param lon1 (the longitude of the measured object in degrees)
     * @return the distance in miles between the location of the instance of this Furry class and another pair of coordinates.
     */
    public double distanceFromCoordsMetric(double lat1, double lon1)
    {
        return distance(lat1, lon1, latitude, longitude, 'K');
    }

    /**
     * A function to return the distance between the location of this instance of the Furry class and another instance of a Furry class in kilometers.
     *
     * @param f (an instance of another Furry class)
     * @return the distance in kilometers between the location this instance of the Furry class and the instance of the other Furry class.
     */
    public double distanceFromFurryMetric(Furry f)
    {
        return distanceFromCoordsMetric(f.latitude, f.longitude);
    }

    /**
     * A function to return the compass direction in degrees between a set of coordinates in relation to the furry's coordinates.
     *
     * @param lat1
     * @param lon1
     * @return the compass direction in degrees. [0, 360)
     */
    public double angleFromCoords(double lat1, double lon1)
    {
        double phi1 = Math.toRadians(lat1);
        double phi2 = Math.toRadians(latitude);
        double delta = Math.toRadians(longitude - lon1);
        double y = Math.sin(delta) * Math.cos(phi2);
        double x = Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(delta);
        double theta = Math.atan2(y, x);
        return (Math.toDegrees(theta) + 360.0) % 360.0;
    }

    /**
     * A function to return the compass direction in degrees between a furry in relation to the current furry's coordinates.
     *
     * @param f
     * @return the compass direction in degrees. [0, 360)
     */
    public double angleFromFurry(Furry f)
    {
        return angleFromCoords(f.getLatitude(), f.getLongitude());
    } 
   
}
