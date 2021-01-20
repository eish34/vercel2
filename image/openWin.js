var newWin = null;
 
function openWin(imageURL)
{
	var newWin = null;
	if ( ( newWin == null )
	|| newWin.closed )
	{  }
	else
	{
	newWin.close();
	}
	
	newWin = open( imageURL, "", "height=400,width=600,channelmode=0,dependent=1,directories=0,fullscreen=0,location=0, menubar=0,resizable=1,scrollbars=1,status=0,toolbar=0" );
    newWin.focus();
}
