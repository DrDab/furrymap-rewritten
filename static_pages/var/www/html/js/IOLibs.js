function getCookie(cname)
{
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++)
  {
    var c = ca[i];
    while (c.charAt(0) == ' ')
    {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0)
    {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays)
{
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function UrlExists(url)
{
        var http = new XMLHttpRequest();
        http.open('HEAD', url, false);
        http.send();
        if (http.status == 404)
        {
             return false;
        }
        return true;
}

function getDateFormattedString(epoch)
{
  var date = new Date(epoch);

  var dateStr = "[";
  dateStr += date.getFullYear();
  dateStr += "-";
  var month = date.getMonth();
  if (month < 9)
  {
    dateStr += "0"
  }
  dateStr += month + 1;
  dateStr += "-";
  var dayOfMonth = date.getDate();
  if (dayOfMonth < 10)
  {
    dateStr += "0";
  }
  dateStr += dayOfMonth;
  dateStr += "]";
  return dateStr; 
}
