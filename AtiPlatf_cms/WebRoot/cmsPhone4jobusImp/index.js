// JavaScript Document

var   load_img=function()
{

 
	
	
	
	for(var i=2;i<=4;i++)
	{
		$("#img__"+i).attr("src","images/"+i+".jpg");
		
	}
	
	
	
 
	  var slidey = $('.banner').unslider({
					speed: 500,			   
				  delay: 2000,			
				  complete: function() {}, 
				  keys: true,			 
				  dots: true,			  
				  fluid: false
				});
  	var   data = slidey.data('unslider'); 
	  data.move(1, function() {}); 
 		//end
 

};

$(function()
{
	
	window.setTimeout(load_img,500);

});