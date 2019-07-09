package com.openhorizonsolutions;

public class AuthTransactionResult 
{
	public boolean isSuccess;
	public String loginKey;
	public String result;
	
	public AuthTransactionResult(String result)
	{
		this.isSuccess = false;
		this.result = result;
	}
	
	public AuthTransactionResult(boolean isSuccess, String loginKey)
	{
		this.isSuccess = isSuccess;
		this.loginKey = loginKey;
	}
	
	public AuthTransactionResult(boolean isSuccess, String loginKey, String result)
	{
		this.isSuccess = isSuccess;
		this.loginKey = loginKey;
		this.result = result;
	}
}
