// JavaScript Document
var tmp_cateObj;
function CateDiv(controlId)
{
	this.ctrlId=controlId;
	this.datablock;
	
}
CateDiv.prototype.bindData=function(r)
{
	$("#table2").show();
	$("#"+this.ctrlId).show();
}


CateDiv.prototype.bindData=function(r)
{
	$("#table2").html("");

　$("#table2_tmpl").tmpl(r).appendTo('#table2');
$("#table2_tmpl").hide();
}

CateDiv.prototype.getSelectedItem=function()
{
	
		$("#table2").show();
	
}
CateDiv.prototype.show=function()
{
	
	$("#"+this.ctrlId).show();
		$("#table2").show();
	
}
CateDiv.prototype.focusNowSelectedControl=function()
{
	
	var now= getNowSelectedControl_from_cateblock(); 
	setFocusNSelect(now);
	
}
//only canel focus ,slect stat stay
CateDiv.prototype.cancelFocus=function()
{
	var arr=$("#table2 li");
	arr.each(function(index, element) {
		cancelFocus($(element));
	}
	);
}
//tmp_cateObj.cate_item_key_down_handler
CateDiv.prototype.cate_item_key_down_handler=function(obj)
{
	//alert("cate_item_key_down_handler"+obj);
	this.cancelFocus();
	//cancel_all_select();

	this.datablock.setFocus2nowSelectedItem();
	//set_first_selected();

	
}



function hide_catebox()
{
$("#table2").hide();

}

function cate_key_enter_handler(obj)
{
	var v=$(obj).text();

var cate_kw=$(obj).attr("cate_kw");
	Cate_click(cate_kw);


}


function cate_item_key_down_handler(obj)
{
	//alert("cate_item_key_down_handler"+obj);
//	cancel_all_select();

//	this.datablock.setFocus2nowSelectedItem();
	//set_first_selected();

	
}

// JavaScript Document
function cate_item_key_up_handler(obj)
{
	alert("cate_item_key_up_handler"+obj);
	
}
//for cate
function key_press_hadler_left(obj)
{
   //  alert(obj);
	
	 var next=$(obj).prev();
	 if(next.length==0){return;};
	 
//	 window.setTimeout(function(){set_page_info(next)},10);
	//  ;

	setFocusNSelect(next);cancelFocusNSelect(obj);
 
}
//for cate
function key_press_hadler_rit(obj)
{
   //  alert(obj);
	
	 var next=$(obj).next();
	 if(next.length==0){return;};
	setFocusNSelect(next);
	cancelFocusNSelect(obj)
	
}


function  getNowSelectedControl_from_cateblock()
{
	var now=$("#table2 .sltOnly").get(0);
	    if(!now)
	    {
	    	//now=$("#table2 .li").get(0);
	    	//$(".listBlock_main li").get(0);
	    }
		return now;
}
CateDiv.prototype.set_first_focus=function()
{
	cancel_all_select();
	var li=$("#table2 li");
	var it=li[0];
	$(it).addClass("selected");	
	$(it).focus();
	$(it).attr("tabindex","-1");
	setFocusNSelect(it);
	$("#table2").show();//cate div
	$("#cate_menu_div").show();//cate div
	
	$(".searchbox").hide();
}

function set_first_selected_in_cate()
{
	cancel_all_select();
	var li=$("#table2 li");
	var it=li[0];
	$(it).addClass("selected");	
	$(it).focus();
	$(it).attr("tabindex","-1");

	$("#table2").show();//cate div
	$("#cate_menu_div").show();//cate div
	
	$(".searchbox").hide();
	
}



//for cate 
function bindEvent()
{
	var arr=$("#table2 li");
	arr.each(function(index, element) {
		/*$(element).keypress(function(){
					  alert('keypress');
			   });*/
		  var id="cate_aid_"+index;
		 $(element).attr("id",id);  
		objEvtMap[ id ]=function(evt,element)
		{
			if(evt=="down")
			{
				tmp_cateObj.cate_item_key_down_handler=tmp_cateObj.cate_item_key_down_handler.bind(tmp_cateObj);
				tmp_cateObj.cate_item_key_down_handler($(element));
			}
			if(evt=="up")
				cate_item_key_up_handler($(element));
				if(evt=="left")
				key_press_hadler_left($(element));
			if(evt=="rit")
				key_press_hadler_rit($(element));
			
			
		};

		objEvtMap[ id+"--enter"]=  cate_key_enter_handler;
			objEvtMap[ "cate_aid_0--enter" ]=function(element)
			{

				
			 window.location.reload();

			};

			objEvtMap[ "cate_aid_1--enter" ]=function(element)
			{

				
				hide_catebox();
				show_searchbox();

			};
		///
		
		});	
	
	
}