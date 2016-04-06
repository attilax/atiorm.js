// JavaScript Document ..
function cate_item_key_down_handler(obj)
{
	//alert("cate_item_key_down_handler"+obj);
	cancel_all_select();
	set_first_selected();

	
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

	
	 next.addClass("selected");	
	   $(obj).removeClass("selected");
	
}

function key_press_hadler_rit(obj)
{
   //  alert(obj);
	
	 var next=$(obj).next();
	 if(next.length==0){return;};
	 
//	 window.setTimeout(function(){set_page_info(next)},10);
	//  ;

	
	 next.addClass("selected");	  $(obj).removeClass("selected");
	
}
function cancel_all_select()
{
var nows=$(".selected");
nows.each(function(index, element) {
    $(element).removeClass("selected");
});

	
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
	$(".searchbox").hide();
	
}

function KEYCODE_BACK_handle()
{

	$("#table2").hide();
	$(".searchbox").hide();
	set_first_selected();

}

function KEYCODE_MENU_handle()
{
	$("#table2").html("");
		alert(" ---menu handle start");	
		var cates="0: 搜索 ,1:爱情类,2:动画类,3:动作类,4:港台国产,5:剧情类,6:科幻类,7:恐怖类,8:悬疑类,9:战争类,10:喜剧类";
		var a=cates.split(",");
		var r=[];
		 	for(var i=0;i<a.length;i++)
		 	{
		 	var o={};
		 	o.cate=a[i].split(":")[1];
		 	r.push(o);
		//		
		 }
		　$("#table2_tmpl").tmpl(r).appendTo('#table2');
		bindEvent();
			set_first_selected_in_cate();
				$("#table2").show();
}

function hide_catebox()
{
$("#table2").hide();

}


var objEvtMap={};

/**
*/
function cate_key_enter_handler(obj)
{
	var v=$(obj).text();

	Cate_click(v);


}
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
				cate_item_key_down_handler($(element));
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

				
				hide_catebox();
				show_searchbox();

			};
		///
		
		});	
	
	
}

function bindEvent_4_dataBlock()
{
var arr=$("#table1 li");
arr.each(function(index, element) {
    $(element).keypress(function(){
      			  alert('keypress');
           });
		   var id="data_aid_"+index;
	 $(element).attr("id","data_aid_"+index);
	objEvtMap[ id ]=function(evt,element)
	{
		if(evt=="down")
			key_press_hadler($(element));
		if(evt=="up")
			key_press_hadler4up($(element));
		 	if(evt=="left")
 	{};
		if(evt=="rit")
			{}
		
		
	};
	
	
	});	
	
	
}
function set_page_info(next)
{
		//alert("bigpic:"+next.attr("bigpic"));
	$("#main_div").css("background-image", "url("+next.attr("bigpic")+")" );
	$("#thumb_img").attr("src",	 next.attr("thumb"));
	$("#title_div").html(	 next.attr("title"));	
	$("#desc_div").html(	 next.attr("desc"));
}

function key_press_hadler(obj)
{
   //  alert(obj);
	
	 var next=$(obj).next();
	 if(next.length==0){return;};
	 
	 window.setTimeout(function(){set_page_info(next)},10);
	//  ;

  //q44  position().top 是相对父元素的 for parent element ,, offset().top  base on win
	  var top=$(next).position().top;
	  var curBaseTop=  $(".listBlock_main").scrollTop()+240;
	  if(top>curBaseTop)   //in hide 
	  {

	  		$(".listBlock_main").scrollTop(curBaseTop);
	  }
	 
	 
	
	 next.addClass("selected");	  $(obj).removeClass("selected");
	
}

function key_press_hadler4up(obj)
{
   //  alert(obj);
	
	 var next=$(obj).prev();
	  if(next.length==0){return;};


	   //q44  position().top 是相对父元素的 for parent element ,, offset().top  base on win
	  var top=$(next).position().top;
	  var curBaseTop=  $(".listBlock_main").scrollTop();
	  if(top<curBaseTop)   //in hide 
	  {

	  		$(".listBlock_main").scrollTop(curBaseTop-240);
	  }
	 
	 
	  $(obj).removeClass("selected");
	 next.addClass("selected");	


	 
	  window.setTimeout(function(){set_page_info(next)},10);
}
function set_first_selected()
{
	 
	var li=$("#table1 li");
	var it=li[0];
	$(it).addClass("selected");	
	$(it).focus();
	$(it).attr("tabindex","-1");
	
}
importx("com.attilax/core/yaml.js");
//\com.attilax\core\yaml.js
function keydownHandler_common(keycode)
{
	var s="13:down,37:left,38:up";
	var map=yaml2jsonV2(s);
	var keycodeName=map[keycode];

	var now=getNowFocusControl();
	if(now==undefined)
		throw ("getNowFocusControl is null ");
	var id=$(now).attr("id");
	if(id==undefined)
		throw ("getNowFocusControl get id is null ");;
	var func=	objEvtMap[id ];

	if(id.indexOf("key_aid")==0)
		func=func.bind(searchboxQ3);
	func(keycodeName,now);

}
//left 37  up 38 ,right 39  ,down 40
document.onkeydown=function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	
	alert("keycode:"+e.keyCode);
	
	if(e && e.keyCode==40 ){//下
		//	alert('40=下键，39=右键');
		var now=getNowFocusControl();
 var id=$(now).attr("id");
	var func=	objEvtMap[id ];
	if(id.indexOf("key_aid")==0)
		func=func.bind(searchboxQ3);
	func("down",now);
	//	key_press_hadler(now);
		return false;
	
	}

		/*
	
	if(e && e.keyCode==38 ){//上
		//alert('38=上键，37=左键');
		var now=$(".selected");	
			 var id=$(now).attr("id");
				var func=	objEvtMap[id ];
	func("up",now);
	//	key_press_hadler4up(now);
		return false;
	}


	
	if(e && e.keyCode==37 ) //left
	{
			var now=$(".selected");
			 var id=$(now).attr("id");
				var func=	objEvtMap[id ];
					if(id.indexOf("key_aid")==0)
		func=func.bind(searchboxQ3);
	func("left",now);
		//	key_press_hadler_left(now);
			return false;
		
	}
	*/
	
	if(e && e.keyCode==39 ){  //rit
		
		var now=getNowFocusControl();
			 var id=$(now).attr("id");
				var func=	objEvtMap[id ];

					if(id.indexOf("key_aid")==0)
		func=func.bind(searchboxQ3);
	func("rit",now);
		//	key_press_hadler_rit(now);
			return false;
		
	}
	
	if(e && e.keyCode==13 ){  //enter
		var now=getNowFocusControl();
		 var id=$(now).attr("id");
				var func=	objEvtMap[id+"--enter" ];

				if(func==undefined)
					console.log(" func is null ,id:"+id);

				if(id.indexOf("key_aid")==0)
		func=func.bind(searchboxQ3);
				func(now);
				
				return false;
	
	}

	keydownHandler_common(e.keyCode);
	return false;
	
}; 

//focus not select 
function getNowFocusControl()
{
	
		var now=$(".selected").get(0);
		if(now==null)
			return searchboxQ3.getFocusControl();

		return now;
}
var searchboxQ3=new SearchBox();
function  show_searchbox()
{
	cancel_all_select();
	$(".searchbox").show();
	
	if(searchboxQ3==undefined)
		searchboxQ3=new SearchBox();
		
	searchboxQ3.searchBtnEvt=function(keyword)
	{
		
	       var partDefine="partition_by_hash(cate)";
		var    tableDefine='{"cate":"$sub","moviename","$rowFolderName"}';
		tableDefine=encodeURIComponent(tableDefine);
			var meth="com.attilax.dataService.DataService.exe";
				var tableStroePath=encodeURIComponent('Z:');
				var where="roma(moviename) like '%"+keyword+"%'";
				where=encodeURIComponent(where);
			var mp="$method="+meth+"&$callback=get_posts_callback&$table="+tableStroePath+"&rdm="+Math.random()+"&$op=select&$storeEngiee=folderAsRow&$partDefine="+partDefine+"&$tableDefine="+tableDefine+"&$where="+where+"&kw="+keyword;
				console.log(mp);
			//	alert("get post mp:"+mp);
			 	HRE.exe(mp,get_posts_callback);	
		
	};
	searchboxQ3.bindKeyEvent();
	
}

function get_posts_callback(data)
{
	
	try{
//	alert(data);
$('#table1').html("");
	var li=str2json(data);
	　$("#table1_tmpl").tmpl(li).appendTo('#table1');
 	$("#table1_tmpl").hide();
set_first_selected();
bindEvent_4_dataBlock();
	}catch(e)
	{
		showErr(e);	
	}
}

function Cate_click(cate)
{

	var meth="com.attilax.dataService.DataService.exe";
					meth=encodeURIComponent(meth);
					//sql="+get_posts_sql
					var tableStroePath=encodeURIComponent('Z:\\'+cate);
					
					
					//storeEngiee    folderAsRow   ,,lineAsRow  (csv),( lineAsCol   fileAsRow  )prop file..
		var mp="$method="+meth+"&$callback=get_posts_callback&$table="+tableStroePath+"&rdm="+Math.random()+"&$op=select&$storeEngiee=folderAsRow";
				console.log(mp);
			//	alert("get post mp:"+mp);
			 	HRE.exe(mp,get_posts_callback);	


}
function page_load()
{
	 	var meth="com.attilax.dataService.DataService.exe";
					meth=encodeURIComponent(meth);
					//sql="+get_posts_sql
					var tableStroePath=encodeURIComponent("Z:\\动作类");
					
					
					//storeEngiee    folderAsRow   ,,lineAsRow  (csv),( lineAsCol   fileAsRow  )prop file..
		var mp="$method="+meth+"&$callback=get_posts_callback&$table="+tableStroePath+"&rdm="+Math.random()+"&$op=select&$storeEngiee=folderAsRow";
				console.log(mp);
			//	alert("get post mp:"+mp);
			 	HRE.exe(mp,get_posts_callback);	

			//for test
	//	var d=	 JSON.stringify(test_data);
		//	get_posts_callback(d);
		//	searchboxQ3.hide();
}



//var r=jsBridge.invoke("com.example.atiplat_vodcp.browExtObj.retStr","testStr..");
//alert(r);