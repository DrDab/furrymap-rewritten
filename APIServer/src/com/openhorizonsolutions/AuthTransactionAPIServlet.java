package com.openhorizonsolutions;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

/**
 * Servlet implementation class AuthTransactionAPIServlet
 */
@WebServlet("/AuthTransactionAPIServlet")
public class AuthTransactionAPIServlet extends HttpServlet
{
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AuthTransactionAPIServlet() 
    {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		// TODO Auto-generated method stub
		response.addHeader("Access-Control-Allow-Origin", "*");
		response.setCharacterEncoding("UTF-8");

		String responseJSONString = "";
		JSONObject headNode = new JSONObject();
		
		String mode = request.getParameter("mode");
		String token = request.getParameter("token");
		
		try
		{
			if (mode == null)
			{
				putStatus(headNode, false, "ERR_MODE_EMPTY");
			}
			else
			{
				if (mode.equals("login"))
				{
					String username = request.getParameter("username");
					String password = request.getParameter("password");
					boolean isOkToPass = true;
					
					if (username == null || password == null)
					{
						putStatus(headNode, false, "ERR_CREDENTIALS_EMPTY");
						isOkToPass = false;
					}
					
					if (isOkToPass)
					{
						if (username.trim().equals("") || password.trim().equals(""))
						{
							putStatus(headNode, false, "ERR_CREDENTIALS_EMPTY");
							isOkToPass = false;
						}
					}
					
					if (isOkToPass)
					{
						AuthTransactionResult check = IOUtils.doLogin(username, password);
						if (check.isSuccess)
						{
							headNode.put("token", check.loginKey);
							putStatus(headNode, true);
						}
						else
						{
							putStatus(headNode, false, "ERR_LOGIN_FAILED");
						}
					}
				}
				else if (mode.equals("logout"))
				{
					if (token == null)
					{
						putStatus(headNode, false, "ERR_TOKEN_EMPTY");
					}
					else
					{
						// dispose of the current login token.
						// return a success message.
					}
				}
				else if (mode.equals("create_account"))
				{
					// we will need to dynamically generate an ordered ID for this user.
					// we also need to check if userName already exists, email already exists or phone number already exists.
					// if the information is fine, send back an access token.
					String userName = request.getParameter("username");
					String email = request.getParameter("email");
					String password = request.getParameter("password");
					
					boolean isOkToPass = true;
					
					if (userName == null || email == null || password == null)
					{
						putStatus(headNode, false, "ERR_CREDENTIALS_EMPTY");
						isOkToPass = false;
					}
					
					if (isOkToPass)
					{
						if (userName.trim().equals("") || email.trim().equals("") || password.trim().equals(""))
						{
							putStatus(headNode, false, "ERR_CREDENTIALS_EMPTY");
							isOkToPass = false;
						}
						
						if (password.length() < ServerInfo.MINIMUM_PASSWORD_LENGTH)
						{
							putStatus(headNode, false, "ERR_PASSWORD_TOO_SHORT");
							isOkToPass = false;
						}
					}
					
					if (isOkToPass)
					{
						AuthTransactionResult result = IOUtils.createNewAccount(userName.trim(), password, email.trim());
						
						putStatus(headNode, result.isSuccess, result.result);
						
						if (result.isSuccess)
						{
							headNode.put("token", result.loginKey);
						}
					}
				}
				else if (mode.equals("update_account_login"))
				{
					// for changing email, password, username. (REQUIRES A PASSWORD AS WELL AS AUTH KEY)
					if (token == null)
					{
						putStatus(headNode, false, "ERR_TOKEN_EMPTY");
					}
					else
					{
						long userId = IOUtils.getIDFromAPIKey(token);
						if (userId == -1L)
						{
							putStatus(headNode, false, "ERR_TOKEN_INVALID");
						}
						else
						{	
							String errorStatus = null;
							AccountInfo curInfo = IOUtils.getAccountInfoById(userId);
							String curPassword = request.getParameter("curpassword");
							
							if (curPassword == null)
							{
								errorStatus = "ERR_CURRENT_PASSWORD_BLANK";
							}
							else
							{
								if (curPassword.trim().equals(""))
								{
									errorStatus = "ERR_CURRENT_PASSWORD_BLANK";
								}
								else if (!IOUtils.hashMD5(curPassword).equals(curInfo.getPasswordHash()))
								{
									System.out.println(IOUtils.hashMD5(curPassword));
									errorStatus = "ERR_CURRENT_PASSWORD_INVALID";
								}
								else
								{
									String newUsername = request.getParameter("username");
									String newPassword = request.getParameter("password");
									String newEmail = request.getParameter("email");
									
									boolean uOk = false;
									boolean pOk = false;
									boolean eOk = false;
									
									
									// check if account with the same username is blank
									if (newUsername != null)
									{
										if (newUsername.trim().equals(""))
										{
											errorStatus = "ERR_USERNAME_BLANK";
										}
										else
										{
											uOk = true;
										}
									}
									
									
									// check if the password is blank
									if (newPassword != null && errorStatus == null)
									{
										if (newPassword.trim().equals(""))
										{
											errorStatus = "ERR_PASSWORD_BLANK";
										}
										else
										{
											pOk = true;
										}
									}
									
									
									// check if the email is blank.
									if (newEmail != null && errorStatus == null)
									{
										if (newEmail.trim().equals(""))
										{
											errorStatus = "ERR_EMAIL_BLANK";
										}
										else
										{
											eOk = true;
										}
									}
									
									if (errorStatus == null)
									{
										// check if account with the same username is taken.
										// do this first before changing the password or email.
										// change all credentials given that aren't null.
										if (uOk)
										{
											//IOUtils.updateAccountStringInfo(id, parameter, newInfo);
											if (!IOUtils.checkUsernameExists(newUsername))
											{
												IOUtils.updateAccountStringInfo(userId, "username", newUsername);
											}
											else
											{
												if (!curInfo.getUsername().equals(newUsername))
												{
													errorStatus = "ERR_USERNAME_EXISTS";
												}
											}
										}
										
										if (pOk && errorStatus == null)
										{
											IOUtils.updateAccountStringInfo(userId, "password", IOUtils.hashMD5(newPassword));
										}
										
										if (eOk && errorStatus == null)
										{
											if (!IOUtils.checkEmailExists(newEmail))
											{
												IOUtils.updateAccountStringInfo(userId, "email", newEmail);
											}
											else
											{
												if (!curInfo.getEmail().equals(newEmail))
												{
													errorStatus = "ERR_EMAIL_EXISTS";
												}
											}
											
										}
									}
								}
							}
							putStatus(headNode, errorStatus == null, errorStatus);
						}
					}
				}
				else if (mode.equals("update_account_attributes"))
				{
					// for changing description, gender, language, countryflag, profile pic.
					// (REQUIRE ONLY AUTH KEY)
					
				}
				else if (mode.equals("delete_account"))
				{
					
				}
				else if (mode.equals("check_token"))
				{
					if (token == null)
					{
						putStatus(headNode, false, "ERR_TOKEN_EMPTY");
					}
					else
					{
						long userId = IOUtils.getIDFromAPIKey(token);
						if (userId == -1L)
						{
							putStatus(headNode, false, "ERR_TOKEN_INVALID");
						}
						else
						{
							putStatus(headNode, true);
						}
					}
				}
				else if (mode.equals("get_current_account_info"))
				{
					if (token == null)
					{
						putStatus(headNode, false, "ERR_TOKEN_EMPTY");
					}
					else
					{
						long userId = IOUtils.getIDFromAPIKey(token);
						if (userId == -1L)
						{
							putStatus(headNode, false, "ERR_TOKEN_INVALID");
						}
						else
						{
							putStatus(headNode, true);
							AccountInfo acctInfo = IOUtils.getAccountInfoById(userId);
							JSONObject accountObj = new JSONObject();
							accountObj.put("id", acctInfo.getId());
							accountObj.put("username", acctInfo.getUsername());
							accountObj.put("email", acctInfo.getEmail());
							accountObj.put("description", acctInfo.getDescription());
							accountObj.put("gender", acctInfo.getGender());
							accountObj.put("pfpid", acctInfo.getProfilePicId());
							headNode.put("account", accountObj);
						}
					}
				}
				else
				{
					putStatus(headNode, false, "ERR_UNKNOWN_MODE");
				}
			}
		}
		catch (Exception e)
		{
			e.printStackTrace();
			putStatus(headNode, false, "ERR_INTERNAL_EXCEPTION: " + e.getMessage());
		}
		
		
		
		responseJSONString += headNode;
		response.getWriter().append(responseJSONString);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		// TODO Auto-generated method stub
		doGet(request, response);
	}
	
	public void putStatus(JSONObject head, boolean successful)
	{
		putStatus(head, successful, null);
	}
	
	public void putStatus(JSONObject head, boolean successful, String reason)
	{
		JSONObject status = new JSONObject();
		if (successful)
		{
			status.put("status", "success");
		}
		else
		{
			status.put("status", "failed");
			status.put("reason", reason);
		}
		head.put("status", status);
	}

}
