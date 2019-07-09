package com.openhorizonsolutions;

public class AccountInfo 
{
	private long id;
	private String username;
	private String email;
	private String passwordHash; // hashed
	private String description;
	private int gender; // 0 = unknown, 1 = male, 2 = female, 3-... (other, tbd)
	private String language;
	private String countryflag;
	private long profilePicId;
	private boolean archived;
	
	public AccountInfo(long id, String username, String email, String passwordHash, String description, int gender, String language, String countryflag, long profilePicId, boolean archived)
	{
		this.id = id;
		this.username = username;
		this.email = email;
		this.passwordHash = passwordHash;
		this.description = description;
		this.gender = gender;
		this.language = language;
		this.countryflag = countryflag;
		this.profilePicId = profilePicId;
		this.archived = archived;
	}
	
	public long getId()
	{
		return id;
	}
	
	public String getUsername()
	{
		return username;
	}
	
	public String getDescription()
	{
		return description;
	}
	
	public String getEmail()
	{
		return email;
	}
	
	public String getPasswordHash()
	{
		return passwordHash;
	}
	
	public int getGender()
	{
		return gender;
	}
	
	public String getLanguage()
	{
		return language;
	}
	
	public String getCountryflag()
	{
		return countryflag;
	}
	
	public long getProfilePicId()
	{
		return profilePicId;
	}
	
	public boolean isArchived()
	{
		return archived;
	}
}
