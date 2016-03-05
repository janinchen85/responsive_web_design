// JavaScript Document

// on resize toggle navigationbar

window.onresize = resize;

function resize()
{
 var screen_width  = window.innerWidth;
 var nav1 = document.getElementById('smallnav');
 var nav2 = document.getElementById('bignav');
 
	if(screen_width > 640){
		nav1.hidden = true;  
		nav2.hidden = false; 
	} else {
		nav1.hidden = false;
		nav2.hidden = true;
	}
}