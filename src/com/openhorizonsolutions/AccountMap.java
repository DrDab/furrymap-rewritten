package com.openhorizonsolutions;

import java.util.HashMap;

public class AccountMap 
{
	private HashMap<Long, AccountInfo> hm;
	
	public AccountMap(HashMap<Long, AccountInfo> hm)
	{
		this.hm = hm;
	}
	
	public AccountMap()
	{
		this.hm = new HashMap<Long, AccountInfo>();
	}
	
	public void addAccount(long id, AccountInfo ai)
	{
		hm.put(id, ai);
	}

	public void addAccount(AccountInfo ai)
	{
		hm.put(ai.getId(), ai);
	}
	
	public void removeAccount(long id)
	{
		hm.remove(id);
	}
	
	public int getSize()
	{
		return hm.size();
	}
	
	public AccountInfo getAccount(long id)
	{
		return hm.get(id);
	}
	
	public boolean acctExists(long id)
	{
		return hm.containsKey(id);
	}
}
