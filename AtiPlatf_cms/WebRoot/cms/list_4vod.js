// JavaScript Document ..

importx("com.attilax/web/req.js");
importx("com.attilax/ui/focus.js");
importx("./cate.js");

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
	$("#cate_menu_div").show();//cate div
	
	$(".searchbox").hide();
	
}

function KEYCODE_BACK_handle()
{

	$("#table2").hide();
	$(".searchbox").hide();
	$("#cate_menu_div").hide();//cate div
	set_first_selected();

}

function KEYCODE_MENU_handle()
{
//	$("#table2").html("");
		alert(" ---menu handle start");	
		var cates="0: 搜索 ,love:爱情类,anim:动画类,act:动作类,cn:港台国产,jyv:剧情类,sci:科幻类,konb:恐怖类,iven:悬疑类,war:战争类,like:喜剧类";
		var cates_search_kewword="0: 搜索 ,love:爱情,anim:动画,act:动作,cn:港台,jyv:剧情,sci:科幻,konb:恐怖,iven:悬疑,war:战争,like:喜剧";
	var map=yaml2jsonV2(cates_search_kewword);

		var a=cates.split(",");
		var r=[];
		 	for(var i=0;i<a.length;i++)
		 	{
		 	var o={};
		 	o.cate=a[i].split(":")[1];
		 	o.cate_id=a[i].split(":")[0];
		 	o.cate_kw=map[o.cate_id];
		 	r.push(o);
		//		
		 }
		 if($("#table2").text().indexOf("搜索")>=0)  //already loaded ok
		{ 

			var cate_ctrl=new CateDiv("cate_menu_div");
			cate_ctrl.show();
		return;
		}
		
		　$("#table2_tmpl").tmpl(r).appendTo('#table2');
		bindEvent();
		   var now_cate_slted=getNowSelectedControl_from_cateblock();
		   if(!now_cate_slted)
				set_first_selected_in_cate();
		$("#table2").show();
}




var objEvtMap={};

/**
*/

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
function setFocus(obj)
{

	$(obj).addClass('selected');
}
function cancelFocus(obj)
{
	$(obj).removeClass('selected');
 

}
function setSelect(obj)
{
$(obj).addClass('sltOnly');

}
function cancelSelect(obj)
{
$(obj).removeClass('sltOnly');
	
}
function setFocusNSelect(obj)
{
	setFocus(obj);
	setSelect(obj);

}
function cancelFocusNSelect(obj)
{
cancelFocus(obj); cancelSelect(obj);
}
function bindEvt_4_playIcon()
{

	objEvtMap[ "title_playIcon--enter" ]=function(element)
	{
		//	cancelFocus($(".title_playIcon"));
		var now=	getNowSelectedControl_from_datablock();
		var url=$(now).attr("url");		
		browExt.play(url);
	//	setFocus(now);

	};


	objEvtMap[ "title_playIcon--up" ]=function(element)
	{
			cancelFocus($(".title_playIcon"));
		var now=	getNowSelectedControl_from_datablock();
		setFocus(now);

	};
		objEvtMap[ "title_playIcon--down" ]=function(element)
	{
		 	cancelFocus($(".title_playIcon"));
		 	var now=	getNowSelectedControl_from_datablock();
		setFocus(now);

	};

	objEvtMap[ "title_playIcon--left" ]=function(element)
	{
			cancelFocus($(".title_playIcon"));
		var now=	getNowSelectedControl_from_datablock();
		setFocus(now);

	};
		objEvtMap[ "title_playIcon--rit" ]=function(element)
	{
		 	cancelFocus($(".title_playIcon"));
		 	var now=	getNowSelectedControl_from_datablock();
		setFocus(now);

	};
	

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

	objEvtMap[ id+"--enter" ]=function(element)
	{
		 	var now=	getNowSelectedControl_from_datablock();
		var url=$(now).attr("url");		
		browExt.play(url);
	};
	objEvtMap[ id+"--left" ]=function(element)
	{
		   cancelFocus(element);
			setFocus($(".title_playIcon"));
	};
	objEvtMap[ id+"--rit" ]=function(element)
	{
		   var now=getNowFocusControl();
		   cancelFocus(now);
			setFocus($(".title_playIcon"));
	};
	
	
	});	//end foreach


	
	
}
function set_page_info(next)
{
		//alert("bigpic:"+next.attr("bigpic"));
	$("#main_div").css("background-image", "url("+next.attr("bigpic")+")" );
	$("#thumb_img").attr("src",	 next.attr("thumb"));
	$("#title_div").html(	 next.attr("title"));	
	$("#desc_div").html(	 next.attr("desc"));
}
//for data item down evt
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
	 
	 
	
	 setFocusNSelect(next);//  next
	 cancelFocusNSelect(obj);//	   $(obj).removeClass("selected");
	
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
	 
	 
	//  $(obj).removeClass("selected");
	// next.addClass("selected");	
	 setFocusNSelect(next);//  next
	 cancelFocusNSelect(obj);//	 


	 
	  window.setTimeout(function(){set_page_info(next)},10);
}
//for data block
function set_first_selected()
{
	 
	var li=$("#table1 li");
	var it=li[0];
	/*
	$(it).addClass("selected");	
	$(it).focus();
	$(it).attr("tabindex","-1");
	*/
	setFocusNSelect($(it));
	
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
	var funcx=objEvtMap[id +"--"+keycodeName]; //q46
	if(funcx)
	{
		funcx(now);return;
	}

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


					var s="13:down,37:left,38:up,39:rit,40:down";
	var map=yaml2jsonV2(s);
	var keycodeName=map[e.keyCode];
	var funcx=objEvtMap[id +"--"+keycodeName]; //q46
	if(funcx)
	{
		funcx(now);return false;
	}
		



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
function getDatablockFirstShowItem()
{
	 var curBaseTop=  $(".listBlock_main").scrollTop();
	 var now;
	 $("#table1 li" ).each(function(index, el) {
	 	   
	 	     var top=$(el).position().top;
	 	     if( top >curBaseTop )
	 	   		return false //break;

	 });
	 return now;
}


function getNowSelectedControl_from_datablock()
{
	
		var now=$(".listBlock_main .sltOnly").get(0);
	    if(!now)
	    {
	    	now=getDatablockFirstShowItem();
	    	//$(".listBlock_main li").get(0);
	    }
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

				//sqlite
				tableStroePath="hitv";
					var maincfg= encodeURIComponent( "aaaCfg.IocX4sqlite");
				where=" shortName like '%"+keyword+"%' limit 200";
				where=encodeURIComponent(where);

					var mp="$method="+meth+"&$callback=get_posts_callback&$table="+tableStroePath+"&rdm="+Math.random()+"&$op=select&$partDefine="+partDefine+"&$tableDefine="+tableDefine+"&$where="+where+"&kw="+keyword+"&$maincfg="+maincfg+"&$trigger=aaaCfg.DataMapper4vod&$triggerPos=after&$triggerTarget=rows";
		
	//		var mp="$method="+meth+"&$callback=get_posts_callback&$table="+tableStroePath+"&rdm="+Math.random()+"&$op=select&$storeEngiee=folderAsRow&$partDefine="+partDefine+"&$tableDefine="+tableDefine+"&$where="+where+"&kw="+keyword;
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
bindEvt_4_playIcon();
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
				//		var mp="$method="+meth+"&$callback=get_posts_callback&$table="+tableStroePath+"&rdm="+Math.random()+"&$op=select"; //&$storeEngiee=folderAsRow";

				//sqlite
				var where=" genre like '%$cate$%' limit 200 ";where=where.replace("$cate$",cate);where=encodeURIComponent(where);
				var maincfg= encodeURIComponent( "aaaCfg.IocX4sqlite");
		var mp="$method="+meth+"&$callback=get_posts_callback&$table="+"hitv"+"&rdm="+Math.random()+"&$op=select&$where="+where+"&$maincfg="+maincfg+"&$trigger=aaaCfg.DataMapper4vod&$triggerPos=after&$triggerTarget=rows";
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
	//	var mp="$method="+meth+"&$callback=get_posts_callback&$table="+tableStroePath+"&rdm="+Math.random()+"&$op=select&$storeEngiee=folderAsRow";

		 Cate_click("动作");

			//for test
	//	var d=	 JSON.stringify(test_data);
		//	get_posts_callback(d);
		//	searchboxQ3.hide();
}



//var r=jsBridge.invoke("com.example.atiplat_vodcp.browExtObj.retStr","testStr..");
//alert(r);