// JavaScript Document

function SearchBox()
{
	this.searchBtnEvt;
	this.ritIndex={};   // id_rit:obj    or id_rit:next_id 
	this.downIndex={};
	this.leftIndex={};
	this.upIndex={};
	this.keyarr=[];
	this.cacheFinish=false;
	this.ritIndex={"key_aid_0--rit":"key_aid_1","key_aid_1--rit":"key_aid_2","key_aid_2--rit":"key_aid_3","key_aid_3--rit":"key_aid_4","key_aid_4--rit":"key_aid_5","key_aid_5--rit":"key_aid_6","key_aid_6--rit":"key_aid_7","key_aid_7--rit":"key_aid_8","key_aid_8--rit":"key_aid_27","key_aid_9--rit":"key_aid_10","key_aid_10--rit":"key_aid_11","key_aid_11--rit":"key_aid_12","key_aid_12--rit":"key_aid_13","key_aid_13--rit":"key_aid_14","key_aid_14--rit":"key_aid_15","key_aid_15--rit":"key_aid_16","key_aid_16--rit":"key_aid_17","key_aid_17--rit":"key_aid_30","key_aid_18--rit":"key_aid_19","key_aid_19--rit":"key_aid_20","key_aid_20--rit":"key_aid_21","key_aid_21--rit":"key_aid_22","key_aid_22--rit":"key_aid_23","key_aid_23--rit":"key_aid_24","key_aid_24--rit":"key_aid_25","key_aid_25--rit":"key_aid_26","key_aid_26--rit":"key_aid_33","key_aid_27--rit":"key_aid_28","key_aid_28--rit":"key_aid_29","key_aid_29--rit":"key_aid_36","key_aid_30--rit":"key_aid_31","key_aid_31--rit":"key_aid_32","key_aid_32--rit":"key_aid_38","key_aid_33--rit":"key_aid_34","key_aid_34--rit":"key_aid_35","key_aid_36--rit":"key_aid_37"};
	this.leftIndex={"key_aid_1--left":"key_aid_0","key_aid_2--left":"key_aid_1","key_aid_3--left":"key_aid_2","key_aid_4--left":"key_aid_3","key_aid_5--left":"key_aid_4","key_aid_6--left":"key_aid_5","key_aid_7--left":"key_aid_6","key_aid_8--left":"key_aid_7","key_aid_10--left":"key_aid_9","key_aid_11--left":"key_aid_10","key_aid_12--left":"key_aid_11","key_aid_13--left":"key_aid_12","key_aid_14--left":"key_aid_13","key_aid_15--left":"key_aid_14","key_aid_16--left":"key_aid_15","key_aid_17--left":"key_aid_16","key_aid_19--left":"key_aid_18","key_aid_20--left":"key_aid_19","key_aid_21--left":"key_aid_20","key_aid_22--left":"key_aid_21","key_aid_23--left":"key_aid_22","key_aid_24--left":"key_aid_23","key_aid_25--left":"key_aid_24","key_aid_26--left":"key_aid_25","key_aid_27--left":"key_aid_8","key_aid_28--left":"key_aid_27","key_aid_29--left":"key_aid_28","key_aid_30--left":"key_aid_17","key_aid_31--left":"key_aid_30","key_aid_32--left":"key_aid_31","key_aid_33--left":"key_aid_26","key_aid_34--left":"key_aid_33","key_aid_35--left":"key_aid_34","key_aid_36--left":"key_aid_29","key_aid_37--left":"key_aid_36","key_aid_38--left":"key_aid_32"};
	this.upIndex={"key_aid_9--up":"key_aid_0","key_aid_10--up":"key_aid_1","key_aid_11--up":"key_aid_2","key_aid_12--up":"key_aid_3","key_aid_13--up":"key_aid_4","key_aid_14--up":"key_aid_5","key_aid_15--up":"key_aid_6","key_aid_16--up":"key_aid_7","key_aid_17--up":"key_aid_8","key_aid_18--up":"key_aid_9","key_aid_19--up":"key_aid_10","key_aid_20--up":"key_aid_11","key_aid_21--up":"key_aid_12","key_aid_22--up":"key_aid_13","key_aid_23--up":"key_aid_14","key_aid_24--up":"key_aid_15","key_aid_25--up":"key_aid_16","key_aid_26--up":"key_aid_17","key_aid_30--up":"key_aid_27","key_aid_31--up":"key_aid_28","key_aid_32--up":"key_aid_29","key_aid_33--up":"key_aid_30","key_aid_34--up":"key_aid_31","key_aid_35--up":"key_aid_32","key_aid_38--up":"key_aid_36"};
	this.downIndex={"key_aid_0--down":"key_aid_9","key_aid_1--down":"key_aid_10","key_aid_2--down":"key_aid_11","key_aid_3--down":"key_aid_12","key_aid_4--down":"key_aid_13","key_aid_5--down":"key_aid_14","key_aid_6--down":"key_aid_15","key_aid_7--down":"key_aid_16","key_aid_8--down":"key_aid_17","key_aid_9--down":"key_aid_18","key_aid_10--down":"key_aid_19","key_aid_11--down":"key_aid_20","key_aid_12--down":"key_aid_21","key_aid_13--down":"key_aid_22","key_aid_14--down":"key_aid_23","key_aid_15--down":"key_aid_24","key_aid_16--down":"key_aid_25","key_aid_17--down":"key_aid_26","key_aid_27--down":"key_aid_30","key_aid_28--down":"key_aid_31","key_aid_29--down":"key_aid_32","key_aid_30--down":"key_aid_33","key_aid_31--down":"key_aid_34","key_aid_32--down":"key_aid_35","key_aid_36--down":"key_aid_38"};

	
}
SearchBox.prototype.show=function()
{

	$(".searchbox ").show();
}
SearchBox.prototype.hide=function()
{

	$(".searchbox ").hide();
}
SearchBox.prototype.focus=function()
{
	var arr=$(".searchbox .key");
	  $(arr[0]).addClass("hover");
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
	
	var next=this.getObj__frmIdx(curFocusObj,"up");
	  //this.getDownObj(curFocusObj);
	  if(next)
	  {
	  	 $(next).addClass("hover");
		 $(curFocusObj).removeClass("hover");
	  }

return;

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

//getDownObj
SearchBox.prototype.getObj__frmIdx=function(curFocusObj,mode)
{
	var key=curFocusObj.attr("id")+"--"+mode;
if(mode=="down")
   nextObj_id= this.downIndex[  curFocusObj.attr("id")+"--"+mode  ];
if(mode=="up")
     nextObj_id=  this.upIndex[  curFocusObj.attr("id")+"--"+mode  ];
if(mode=="left")
     nextObj_id=  this.leftIndex[  curFocusObj.attr("id")+"--"+mode  ];
if(mode=="rit")
     nextObj_id=  this.ritIndex[ key   ];
 if(nextObj_id)
 return $("#"+nextObj_id);

return null;
}
SearchBox.prototype.getDownObj=function(curFocusObj)
{

	var nextObj;

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
		var padding=30;
		if(  isCloseLine(left_cur, focusObj_left, padding)     &&  top_cur>focusObj_top) 
		{
			
			 nextObj=$(element);
			 isFind=true;
			 return false; //break;
		}
    });
	if(isFind)
		return nextObj;
	return nextObj;


}
SearchBox.prototype.key_down_event=function(curFocusObj)
{	

	  var next=this.getObj__frmIdx(curFocusObj,"down");
	  //this.getDownObj(curFocusObj);
	  if(next)
	  {
	  	 $(next).addClass("hover");
		 $(curFocusObj).removeClass("hover");
	  }
	
}
SearchBox.prototype.key_left_event=function(curFocusObj)
{

	var next=this.getObj__frmIdx(curFocusObj,"left");
	  //this.getDownObj(curFocusObj);
	  if(next)
	  {
	  	 $(next).addClass("hover");
		 $(curFocusObj).removeClass("hover");
	  }

return;

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


SearchBox.prototype.key_rit_event=function(curFocusObj)
{

	  var next=this.getObj__frmIdx(curFocusObj,"rit");
	  //this.getDownObj(curFocusObj);
	  if(next)
	  {
	  	 $(next).addClass("hover");
		 $(curFocusObj).removeClass("hover");
	  }

return;

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



SearchBox.prototype.getNextTagObj=function(curFocusObj,isMatchTarget)
{
	var nextObj;  //q416

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
			// $(element).addClass("hover");
			nextObj=$(element);
			 isFind=true;
			 return false; //break;
		}
    });
	if(isFind)
		return nextObj;
	return nextObj;
	//	$(curFocusObj).removeClass("hover");

}
SearchBox.prototype.key_comm_event=function(curFocusObj,isMatchTarget)
{
	  var next=this.getNextTagObj(curFocusObj,isMatchTarget);
	  if(next)
	  {
	  	 $(next).addClass("hover");
		 $(curFocusObj).removeClass("hover");
	  }

}
function isCloseLine(objInFor_left,curFocusObj_rit ,padding)
{

return	 Math.abs(objInFor_left-curFocusObj_rit)<=padding;

}

SearchBox.prototype.buildIndex=function()
{
	var self=this;
	var arr=$(".searchbox .key");
	this.keyarr=arr;
	arr.each(function(index, element) {
		console.log(" start bind index for  ele:"+ $(element).attr("id"));
		self.buildIndex4Single($(element));
	//	this.ritIndex[]


	});
	console.log( "ritindex:" +JSON.stringify( self.ritIndex  )) ;
	console.log( "left:" + JSON.stringify( self.leftIndex  )) ;
	console.log( "up index:" +  JSON.stringify( self.upIndex  )) ;
	console.log( "dow index:" + JSON.stringify( self.downIndex  )) ;
	this.cacheFinish=true;
	console.log("  cacheFinish ok....");
	

}
SearchBox.prototype.buildIndex4Single=function(curObj)
{
		var self=this;
		var arr=this.keyarr;
		//$(".searchbox .key");
		 
		 var nextDownObj=self.getDownObj( curObj);
		 if(nextDownObj)
			 	self.downIndex[  curObj.attr("id")+"--down"  ]=nextDownObj.attr("id");



		var nextRitObj=self.getRitObj(curObj);
		if(nextRitObj)
		{
				var key=curObj.attr("id")+"--rit";
			self.ritIndex[  key  ]=nextRitObj.attr("id")  ;//.attr("id");
		}



	var nextLeftObj=self.getLeftObj( curObj);
	if(nextLeftObj)
		self.leftIndex[  curObj.attr("id")+"--left"  ]=nextLeftObj.attr("id");

					var nextUpObj=self.getUpObj( curObj);
						if(nextUpObj)
				self.upIndex[  curObj.attr("id")+"--up"  ]=nextUpObj.attr("id");

				/**/



		 

}
SearchBox.prototype.getCurFocusObjRight=function(Obj)
{
	return   $(Obj).offset().left+ $(Obj).width();
}

SearchBox.prototype.getRitObj=function(curFocusObj)
{

	var isMatchTarget=function(curFocusObj,objInFor)
	{
		var span=30;
		var curFocusObj_rit= $(curFocusObj).offset().left+ $(curFocusObj).width(); 
		var objInFor_left= $(objInFor).offset().left; 
		objInFor_left=objInFor_left;

		if( isCloseLine(objInFor_left,curFocusObj_rit,span)   && isCloseLine($(objInFor).offset().top,$(curFocusObj).offset().top,20) )
		 		return true;

		else
			return false;


	};

		  var next=this.getNextTagObj(curFocusObj,isMatchTarget);
	  return next;

}
SearchBox.prototype.getLeftObj=function(curFocusObj)
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

	  var next=this.getNextTagObj(curFocusObj,isMatchTarget);
	  return next;
}

SearchBox.prototype.getUpObj=function(curFocusObj)
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

	  var next=this.getNextTagObj(curFocusObj,isMatchTarget);
	  return next;

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
	 //bind search btn evt
	 if("key_search"== $(element).attr("e"))
	 {
		   objEvtMap[ id+"--enter" ]=function(element)
		 {
			 this.searchBtnEvt($('.searchbox .textbox').text());
			 
		 }
		 
	 }
	  //bind search btn evt
	 if("key_backspace"== $(element).attr("e"))
	 {
		   objEvtMap[ id+"--enter" ]=function(element)
		 {
			// this.searchBtnEvt($('.searchbox .textbox').text());
			  var value = $('.searchbox .textbox').text();
       		 $('.searchbox .textbox').html(value.substr(0, value.length-1));
			 
		 }
		 
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
			var o=$(element);
				this.key_rit_event(o);
		}
		
		
	};
	
	
	
	});	
	
	
	
}