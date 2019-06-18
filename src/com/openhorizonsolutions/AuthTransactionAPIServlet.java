package com.openhorizonsolutions;

import java.io.IOException;
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
		
		if (mode == null)
		{
			putStatus(headNode, false, "Mode cannot be empty.");
		}
		else
		{
			if (mode.equals("login"))
			{
				try
				{
					String username = request.getParameter("username");
					String password = request.getParameter("password");
					boolean isOkToPass = true;
					
					if (username == null || password == null)
					{
						putStatus(headNode, false, "Username or password cannot be empty.");
						isOkToPass = false;
					}
					
					if (isOkToPass)
					{
						if (username.trim().equals("") || password.trim().equals(""))
						{
							putStatus(headNode, false, "Username or password cannot be empty.");
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
							putStatus(headNode, false, "Login failed.");
						}
					}
				}
				catch (Exception e)
				{
					putStatus(headNode, false, e.getMessage());
				}
			}
			else if (mode.equals("logout"))
			{
				if (token == null)
				{
					putStatus(headNode, false, "Logout failed. Token is missing.");
				}
				else
				{
					// dispose of the current login token.
					// return a success message.
				}
			}
			else if (mode.equals("create_account"))
			{
				
			}
			else if (mode.equals("update_account"))
			{
				
			}
			else if (mode.equals("delete_account"))
			{
				
			}
			else
			{
				
			}
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
		if (successful)
		{
			head.put("status", "success");
		}
		else
		{
			head.put("status", "failed");
			head.put("reason", reason);
		}
	}

}
