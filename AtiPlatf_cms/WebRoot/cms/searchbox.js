// JavaScript Document

function SearchBox()
{
	
	
}
SearchBox.prototype.show=function()
{

	$(".searchbox ").show();
}
SearchBox.prototype.hide=function()
{

	$(".searchbox ").hide();
}
SearchBox.prototype.removeFocus=function()
{
	var arr=$(".searchbox .key");
	arr.each(function(index, element) {
        $(element).removeClass("hover");
    });
	//var now=$(".hover").get(0);
}
SearchBox.prototype.getFocusControl=function()
{
	var now=$(".hover").get(0);
	return now;
}
SearchBox.prototype.key_up_event=function(curFocusObj)
{
	
	var isMatchTarget=function(curFocusObj,objInFor)
	{
		var span=12;
		var curFocusObj_left= $(curFocusObj).offset().left; 
		var tmp_left= $(objInFor).offset().left; 
	//	objInFor_rit=objInFor_rit+12;
	var lastObjBaseTop= $(objInFor).offset().top+$(objInFor).height()*1.5;
	var curFocusObj__top=$(curFocusObj).offset().top;

		if( isCloseLine(tmp_left,curFocusObj_left,10) && $(objInFor).offset().top<$(curFocusObj).offset().top  &&  lastObjBaseTop>curFocusObj__top)
		 		return true;

		else
			return false;


	};
	this.key_comm_event(curFocusObj,isMatchTarget);
}
SearchBox.prototype.key_down_event=function(curFocusObj)
{	

	var focusObj_top = $(curFocusObj).offset().top; 
	var focusObj_left = $(curFocusObj).offset().left; 
	alert("cur xy:"+focusObj_left+"  "+focusObj_top);
	var isFind=false;
	var arr=$(".searchbox .key");
	arr.each(function(index, element) {
		if( $(element).html()=="J")
			alert("--");
		if(	$(element).attr("id")!=$(curFocusObj).attr("id"))
        		$(element).removeClass("hover");
		if(	$(element).attr("id")==$(curFocusObj).attr("id"))
					return true;  //continue;
		var top_cur= $(element).offset().top; 
		var left_cur= $(element).offset().left;
		if(left_cur+10 >focusObj_left  && left_cur-10<focusObj_left &&  top_cur>focusObj_top) 
		{
			 $(element).addClass("hover");
			 isFind=true;
			 return false; //break;
		}
    });
	if(isFind)
		$(curFocusObj).removeClass("hover");
	
}
SearchBox.prototype.key_left_event=function(curFocusObj)
{

	var isMatchTarget=function(curFocusObj,objInFor)
	{
		var span=12;
		var curFocusObj_left= $(curFocusObj).offset().left; 
		var objInFor_rit=this.getCurFocusObjRight(objInFor);
		objInFor_rit=objInFor_rit+12;

		if( isCloseLine(objInFor_rit,curFocusObj_left,10) && isCloseLine($(objInFor).offset().top,$(curFocusObj).offset().top,10) )
		 		return true;

		else
			return false;


	};
	this.key_comm_event(curFocusObj,isMatchTarget);
	
}

SearchBox.prototype.key_comm_event=function(curFocusObj,isMatchTarget)
{
	var self=this;
	var focusObj_top = $(curFocusObj).offset().top; 
	var focusObj_left = $(curFocusObj).offset().left; 
	alert("cur xy:"+focusObj_left+"  "+focusObj_top);
	var isFind=false;
	var arr=$(".searchbox .key");
	arr.each(function(index, element) {
		if( $(element).html()=="J")
			alert("--");
		if(	$(element).attr("id")!=$(curFocusObj).attr("id"))
        		$(element).removeClass("hover");
		if(	$(element).attr("id")==$(curFocusObj).attr("id"))
					return true;  //continue;
		var top_cur= $(element).offset().top; 
		var left_cur= $(element).offset().left;
		isMatchTarget=isMatchTarget.bind(self);
		if(isMatchTarget(curFocusObj,$(element)  )) 
		{
			 $(element).addClass("hover");
			 isFind=true;
			 return false; //break;
		}
    });
	if(isFind)
		$(curFocusObj).removeClass("hover");

}
function isCloseLine(objInFor_left,curFocusObj_rit ,padding)
{

return	objInFor_left+padding >curFocusObj_rit  && objInFor_left-padding<curFocusObj_rit;

}

SearchBox.prototype.getCurFocusObjRight=function(Obj)
{
	return   $(Obj).offset().left+ $(Obj).width();
}

SearchBox.prototype.key_rit_event=function(curFocusObj)
{
	var isMatchTarget=function(curFocusObj,objInFor)
	{
		var span=12;
		var curFocusObj_rit= $(curFocusObj).offset().left+ $(curFocusObj).width(); 
		var objInFor_left= $(objInFor).offset().left; 
		objInFor_left=objInFor_left-12;

		if( isCloseLine(objInFor_left,curFocusObj_rit,10)   && isCloseLine($(objInFor).offset().top,$(curFocusObj).offset().top,10) )
		 		return true;

		else
			return false;


	};
	this.key_comm_event(curFocusObj,isMatchTarget);
	
}
SearchBox.prototype.key_enter_event=function(curFocusObj)
{
	var value = curFocusObj.html();
        $('.searchbox .textbox').append(value);
}
SearchBox.prototype.bindKeyEvent=function()
{
	
	var arr=$(".searchbox .key");
arr.each(function(index, element) {
   
	var id="key_aid_"+index;
	 $(element).attr("id",id);
	// 
//	 objEvtMap[ id+"--left" ]=function(element)
//	 {
//		 
//		 
//	 }
	 
	  objEvtMap[ id+"--enter" ]=function(element)
	 {
		 this.key_enter_event($(element));
		 
	 }
	objEvtMap[ id ]=function(evt,element)
	{
		if(evt=="down")
			this.key_down_event($(element));
		if(evt=="up")
			this.key_up_event($(element));
		 if(evt=="left")
 		{
			this.key_left_event($(element));
		};
		if(evt=="rit")
		{
				this.key_rit_event($(element));
		}
		
		
	};
	
	
	
	});	
	
	
	
}