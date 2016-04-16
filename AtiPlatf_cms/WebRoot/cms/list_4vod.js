// JavaScript Document ..

importx("com.attilax/web/req.js");
importx("com.attilax/ui/focus.js");
importx("com.attilax/ui/ul.js");
importx("./cate.js");
//importx("com.attilax/ui/searchbox_android.css");
 importx("com.attilax/effect/rotato/css.css");
  importx("com.attilax/effect/rotato/js.js");
 importx("com.attilax/effect/cloudFloat/cloud.css");
  importx("com.attilax/effect/cloudFloat/cloud.js");
      importx("com.attilax/jsbridge/jsb_v8q414.js");
    //   importx("com.attilax/ui/ul.css");
var Ulist2;
var cateBlock; //CateObj

function cancel_all_select()
{
var nows=$(".selected");
nows.each(function(index, element) {
    $(element).removeClass("selected");
});

	
}

function KEYCODE_BACK_handle()
{

	$("#table2").hide();
	$(".searchbox").hide();
	$("#cate_menu_div").hide();//cate div
//	set_first_selected();

	var	Ulist_q412=new Ulist("table1"); 
	var now=Ulist_q412.getNowSelectedControl();

	Ulist_q412.scrollTop(0);
	Ulist_q412.set_first_selected();
	//if（
//	setFocusNSelect(now);


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

		 //for dbg
		 var o={cate_id:"",cate:"menux"}; 	r.push(o);


		 	for(var i=0;i<a.length;i++)
		 	{
		 	var o={};
		 	o.cate=a[i].split(":")[1];
		 	o.cate_id=a[i].split(":")[0];
		 	o.cate_kw=map[o.cate_id];
		 	r.push(o);
		//		
		 }

		
		 
		 if($("#table2").text().indexOf("搜索")>=0)  //already loaded ok   mustbe for menuitem stay..beir ini le ..ma le
		 			{ 
		 				//maybe can use by js var ..then refocus..

			var cate_ctrl=new CateDiv("cate_menu_div");
			cate_ctrl.show();
	
		}else
		{
			  	var cate_ctrl=new CateDiv("cate_menu_div");
	  	cate_ctrl.bindData(r);
	  			bindEvent();
	  				  	cate_ctrl.show();
		}
		 
	
	

		
		


		
		//set cate focus
		   var now_cate_slted=getNowSelectedControl_from_cateblock();
		   if(now_cate_slted)
		  	 setFocusNSelect( now_cate_slted);
		  else
		   {
		 
		   	var first=cate_ctrl.set_first_focus();
			//	set_first_selected_in_cate();
		   }
		
		var	Ulist_q412a=new Ulist("table1"); 
		Ulist_q412a.cancelFocus();
}




var objEvtMap={};

 
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
   // $(element).keypress(function(){
     // 			  alert('keypress');
    //       });
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
		  // cancelFocus(element);
		//	setFocus($(".title_playIcon"));
	};
	objEvtMap[ id+"--rit" ]=function(element)
	{
		 //  var now=getNowFocusControl();
		//   cancelFocus(now);
		//	setFocus($(".title_playIcon"));
	};
	
	
	});	//end foreach


	
	
}

function setPicSrc(url,callback)
{

	if (window.navigator.platform=="Linux armv71" || window.navigator.platform.indexOf("Linux")>=0)  //android envi
	{

	//	dePrefix  del maindir
		 url=dePrefix(url);
         alert( " set ic src:"+url);
	// var rzt=	jsBridge.invoke2("com.attilax.img.imgx4android.toDataUriBase64","$sd$/0localimg/"+url);
	var rzt=	jsBridge.invoke2("com.attilax.img.imgx4android.toReplaceSdVar","$sd$/0localimg/"+url);
	
		 alert(" set pic ret:"+rzt.substr(0,200));

		callback(rzt);
	console.log("imgx4android.toDataUriBase64 rzt:"+rzt);

		return;
	}

//windows
	 try{
					var ds=new AtiJsBridge();
						//ds.formid="formx";
					//	alert();
					//	var s="update  `wxb_order` set stat='取消' where user_id=$uid$ and oid="+order_id;
				 var localSavePath="f:\\0localimg";
				 url=dePrefix(url);
				 url=localSavePath+"\\"+url;

				        url=encodeURIComponent(url);
						ds.exe("$method=com.attilax.img.imgx.toDataUriBase64&param1="+url+"&$tbtype=sq&$trigger000=com.attilax.dataService.meta_data_pars_from_txt_trigger&$trigtime=after&order_id=$uuid"+"&user_id=$uid&$member_id=$uid",function(data){
							console.log("--r:"+data);
					///	 $("#thumb_img").attr("src",	data);
							callback(data);
							
						}
						
						
						); 
	}catch(e)
	{

		showErr(e);
			console.log(e);
	}

}


function set_page_info(next)
{
		//alert("bigpic:"+next.attr("bigpic"));  encodeURIComponent
	$("#thumb_img").attr("src",	 "");
   var bigpic=(next.attr("bigpic"));



		setPicSrc(bigpic,function(data){

			 	url="data:image/jpeg;base64,"+data;
				url="file://"+data;
				url="http://127.0.0.1:7788/?$m=com.attilax.readpic&file="+encodeURIComponent(data);
				alert(" set pic:"+url);
				var cssurl= "url('"+url+"')";
				document.getElementById('main_div').style.backgroundImage=cssurl;
			//	$("#main_div").css("background-image", cssurl );
		}) ;



//var cssurl= "url('"+bigpic+"')";
		
//


//	$("#main_div").css("background-image", cssurl );
	$("#thumb_img").attr("src",	 next.attr("thumb"));
	$("#title_div").html(	 next.attr("title"));	
	$("#desc_div").html(	 next.attr("desc"));
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
	
	//alert("keycode:"+e.keyCode);
	
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
		


	//var func;
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

console.log( window.location.host );

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
	//if( !searchboxQ3.cacheFinish)  //cached  
 	//	searchboxQ3.buildIndex();
   searchboxQ3.focus();
	
}

function dePrefix(img_url)
{

   var index_splash=img_url.indexOf("maindir");
            img_url=img_url.substr(index_splash+"maindir".length+1);
            return img_url;

}

function pre_save(img_url)
{

//	return;
alert("--pre save:"+img_url);
//return;  //for test
 try{

	if (window.navigator.platform=="Linux armv71" || window.navigator.platform=="Linux i686"    || window.navigator.platform.indexOf("Linux")>=0)  //android envi
		{
			 
					var host=window.location.origin;
					host=host+"/cms"
		var rzt=	jsBridge.invoke4("com.attilax.img.imgx4android.save2localHighPerf",host+"/"+img_url,"$sd$/0localimg","/cms/maindir");
			alert(" pre save rzt:"+rzt.substr(0,150));
			 return;
		
		}

//windows
	
	var ds=new AtiJsBridge();
		//ds.formid="formx";
	//	alert();
	//	var s="update  `wxb_order` set stat='取消' where user_id=$uid$ and oid="+order_id;
        url=encodeURIComponent(img_url);

        var localSavePath="f:\\0localimg";
            localSavePath=encodeURIComponent(localSavePath);
            var index_splash=img_url.indexOf("maindir");
            img_url=img_url.substr(index_splash+"maindir".length+1);
            img_url="z:\\"+img_url;
            img_url=encodeURIComponent(img_url);

			ds.exe("$method=com.attilax.img.imgx.save2local&param1="+img_url+"&param2="+localSavePath+"&$tbtype=sq&$trigger000=com.attilax.dataService.meta_data_pars_from_txt_trigger&$trigtime=after&order_id=$uuid"+"&user_id=$uid&$member_id=$uid",function(data){
				console.log("--r:"+data);
		///	 $("#thumb_img").attr("src",	data);
			//	callback(data);
				
			}
		
		
		); 
	}catch(e)
	{

		showErr(e);
			console.log(e);
	}

}
function pre_img(li)
{


	$.preloadImages = function(li) {
	  for (var i = 0; i < li.length; i++) {

	  			try{
	  	var o=li[i];
	    $("<img />").attr("src",  o.bigpic );

	    pre_save(o.bigpic);
	    pre_save(o.thumb);

	    if(i>20)
	    	break;  //for test dbg
				}catch(e){}
	  }
	
	};  //end fun
	$.preloadImages(li);

	alert( "  pref_img finish");

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

/*
		 window.setTimeout(function(){

 				pre_img(li);

		 },1000);	

*/
		 
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



function addCloud()
{
var s='<img id="cloud_img" class="b2_cloud" src="../com.attilax/effect/cloudFloat/2_cloud.png" alt="">';
 var oScript= document.createElement("img"); 
	
    oScript.src="../com.attilax/effect/cloudFloat/2_cloud.png"; 
    oScript.class="b2_cloud";
    oScript.id="cloud_img";
    oScript.style.display="none";
	 
	 var oHead=document.getElementById('main_div');
    oHead.appendChild( oScript); 

}
function page_load()
{
/*	

try{

			 


			   var  name="V字仇杀队";   //name=encodeURIComponent(name);
				var img_url="cms/maindir/"+name+"/poster.jpg";
				var host=window.location.origin;
				var img_url_final=host+"/"+img_url;
				alert( "----pre save is:"+img_url_final);
		 


			 var rzt_saveic=	jsBridge.invoke4("com.attilax.img.imgx4android.save2local",img_url_final,"$sd$/0localimg","/cms/maindir");
			 	alert("--rzt_saveic::"+rzt_saveic);


			var	 url=dePrefix( "maindir/V字仇杀队/poster.jpg");

				var rzt=	jsBridge.invoke2("com.attilax.img.imgx4android.toDataUriBase64","$sd$/0localimg/"+url);
				alert("--rzt::"+rzt);
				alert("-- .imgx4android.save2local");

		}catch(e)
		{
			//showErr(e);
			var err="msg:"+e.message+"\n"+"  lineNumber:"+e.lineNumber+ "\n err_number:"+e.number+"\n  "+"  desc:"+e.description +"\n columnNumber:"+e.columnNumber
 +"\n fileName:"+e.fileName+"\n stack:"+e.stack;
 		//	$("#textarea").val(err+"\n"+$("#textarea").val());
 		alert(err);
		}
		alert("--end");
	return;

*/

	imgid4rotato="thumb_img";
	 	var meth="com.attilax.dataService.DataService.exe";
					meth=encodeURIComponent(meth);
					//sql="+get_posts_sql
					var tableStroePath=encodeURIComponent("Z:\\动作类");
					
					
					//storeEngiee    folderAsRow   ,,lineAsRow  (csv),( lineAsCol   fileAsRow  )prop file..
	//	var mp="$method="+meth+"&$callback=get_posts_callback&$table="+tableStroePath+"&rdm="+Math.random()+"&$op=select&$storeEngiee=folderAsRow";

		 Cate_click("动作");

			Ulist2=new Ulist("table1"); 
			tmp_Ulist=Ulist2;
			Ulist2.up2end=function()
			{

		//	cateBlock.focusNowSelectedControl();
			};

			 cateBlock=new CateDiv("table2");
			 cateBlock.datablock=Ulist2;
			tmp_cateObj=cateBlock;


   window.setTimeout(function(){
     //  searchboxQ3.show();
     //  searchboxQ3.bindKeyEvent();
	//   searchboxQ3.buildIndex();   //gene index once 


   },2000);

	//		addCloud(); cloud_start();


			//for test
	//	var d=	 JSON.stringify(test_data);
		//	get_posts_callback(d);
		//	searchboxQ3.hide();
}



//var r=jsBridge.invoke("com.example.atiplat_vodcp.browExtObj.retStr","testStr..");
//alert(r);