window.onload=function(){
obj1();
function obj1(){
	var oBanner=getClass( "banner" , document )[0];
	ele(oBanner,-1349,"left");
};
obj2();
function obj2(){
	var oBanner=getClass( "picNews" , document )[0];
	//alert(oBanner);
	ele(oBanner,-444,"left");
};
obj5();
function obj5(){
	var oBanner=getClass( "footer-add" , document )[0];
	ele1(oBanner,-390,"left");
};
function ele1(obj,width,Attr){
	var oBtn=getClass( "btn" , obj )[0];
	var aLi=oBtn.getElementsByTagName("li");
	var oBanner_ul=obj.getElementsByTagName("ul")[2];
	var _Index=0;
	show(obj,aLi,_Index,oBanner_ul,width,Attr);
};

function ele(obj,width,Attr){
	var oBtn=getClass( "btn" , obj )[0];
	var aLi=oBtn.getElementsByTagName("li");
	var oBanner_ul=obj.getElementsByTagName("ul")[0];
	var _Index=0;
	show(obj,aLi,_Index,oBanner_ul,width,Attr);
};
//函数的封装点按钮
function show(obj,aLi,_Index,oBanner_ul,width,Attr){

	aLi[_Index].className="on";
	for (var i=0;i<aLi.length ;i++ )
	{
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			var This=this;
			var Width =width;
			var attr=Attr;
			run(function(){
				_Index=This.index;
			},Width,attr);
		}
	};

	autoplay(obj,width,Attr);
	function autoplay(obj,W,Attr){//自动轮播
		var w=W;
		var attr=Attr;
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			run(function(){
				_Index++;
				_Index%=aLi.length;
			},w,attr);
		},1500);
	};
	oBanner_ul.onmouseover=function(){
		clearInterval(obj.timer);
	};
	oBanner_ul.onmouseout=function(){
		autoplay(obj,width,Attr);
	};

	function run(fn,w,attr){//w为ul的宽度
		fn();
		for (var j=0;j<aLi.length ;j++ )
		{
			aLi[j].className="";
		}
		aLi[_Index].className="on";
		oBanner_ul.style[attr]=(w*_Index)+"px";
	};
};



//封装的函数左右按钮
obj3();
function obj3(){
	var oBanner_ul=getClass( "house-banner" , document )[0];
	banner(oBanner_ul,-780,"marginLeft");
};
obj4();
function obj4(){
	var oBanner_ul=getClass("house-list" , document )[0];
	banner(oBanner_ul,-393,"marginLeft");
};
function banner(oBanner_ul,width,Attr){
		var aSpan=oBanner_ul.getElementsByTagName("span");
		var oUl=getClass( "ul" , oBanner_ul )[0];
		var aDiv=oUl.getElementsByTagName("div");
		var _Index=0;
		//var timer=null;
		display(oBanner_ul,aSpan,oUl,aDiv,_Index,width,Attr);
	};
		function display(oBanner_ul,aSpan,oUl,aDiv,_Index,width,Attr){
		for ( var i=0; i<aSpan.length ; i++ )
		{
			var w=width;
			var attr=Attr;
			aSpan.index=i;
			aSpan[i].onclick=function(){
				//_index=this.index;
				if (this.index)
				{	
					_Index++;
					_Index%=aDiv.length;
				}else
				{
					_Index--;
					if (_Index<0)
					{
						_Index=aDiv.length-1;
					}
				}
				oUl.style[attr]=_Index*w+"px";
			}
		}

		autoplay(oBanner_ul,width,Attr);
		function autoplay(oBanner_ul,W,Attr){//自动轮播
			var w=W;
			var attr=Attr;
			clearInterval(oBanner_ul.timer);
			oBanner_ul.timer=setInterval(function(){
				run(function(){
					_Index++;
					_Index%=aDiv.length-2;
				},w,attr);
			},1500);
		};
	oUl.onmouseover=function(){
		clearInterval(oBanner_ul.timer);
	};
	oUl.onmouseout=function(){
		autoplay(oBanner_ul,width,Attr);
	};
		
	function run(fn,w,attr){//w为ul的宽度
			fn();
			oUl.style[attr]=(w*_Index)+"px";
		};
	};
};
	//兼容ie678getClassName
function getClass( cName , parent ){
	parent = parent || document;
	if ( document.getElementsByClassName )
	{
		return parent.getElementsByClassName(cName);
	}else{
		var all = parent.getElementsByTagName("*");
		var arr = [];

		for (var i=0;i<all.length;i++ )
		{
			var ClassName = all[i].className;
			var arrClass = ClassName.split(" ");
			for (var j=0;j<arrClass.length;j++ )
			{
				if ( arrClass[j] == cName )
				{
					arr.push( all[i] );
				};
			};
		};
		return arr;
	};
};