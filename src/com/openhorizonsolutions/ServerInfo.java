package com.openhorizonsolutions;

public class ServerInfo 
{
	public static final int START_USER_ID_NUMBER = 100000;
	public static final int START_LOCATION_ID_NUMBER = 100000;
	public static final boolean SHOW_ARCHIVED = false;
	
	public static final String CONNECTION_ADDRESS = "jdbc:mysql://localhost/FurryMapSchema?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC&characterEncoding=UTF-8";
	public static final String USER_TABLE_NAME = "userdatabase";
	public static final String LOCATION_TABLE_NAME = "locationdatabase";
	public static final String SQL_LOGIN = "root";
	public static final String SQL_PASSWORD = "";

	// crypto stuff.
	// CHANGE IN PRODUCTION
	public static final String MD5_SALT_PART_1 = "8hqerroijqoifn8143u213589214t12ojori21j4oije621yifferyifffafojsaofjosaifjosajfdoi";
	public static final String MD5_SALT_PART_2 = "arj18r2rghhworjoafaosjfoh213rf134523512rjafkjroqjr8213ot125!$@@furryfurriesfurriesfurry";
}
