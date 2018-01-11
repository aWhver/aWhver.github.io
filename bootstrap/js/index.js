/*吸顶盒*/
(function(){
	var $navbar = $('#freeNav');
	$(window).bind('scroll',function(){
		var wHeight = $(window).height()-200;
		var scrollTop = $(window).scrollTop();
		if ( scrollTop > wHeight)
		{
			$navbar.addClass('on');
		}else{
			$navbar.removeClass('on');
		}
	});
})();
/*导航定位*/
(function(){
	var navA = $('a.scroll-nav');
	navA.on('click',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
			//alert(this.hash)
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 40
                }, 900);
                return false;
            }
        }
	});
	$('html,body').scrollspy({
		target:'.navbar-default',
		offset:80
	});
})();
/*web*/
(function(){
	$('#web').owlCarousel({
		items:4,
		itemsDesktop:[1199,3],
		itemsDesktopSmall:[979,3]
	});
})();
/*demo*/
(function(){
	var oWrap = document.getElementById("wrap");
	var oFrame = document.getElementById("frame");
	var oBack = document.getElementById("back");
	var oBox = document.getElementById("box");
	var oUl = oBox.getElementsByTagName("ul")[0];
	var length = 125;
	var aLi = oUl.getElementsByTagName("li");
	var oCover = document.getElementById('cover');
	var oCon = document.getElementById('con');
	//var oCircle = document.getElementById("circle");
	var aP = document.getElementById("btn").getElementsByTagName("p");
	var oBtn = document.getElementById("btn");
	oBtn.onmousedown=function(e){
		e.cancelBubble = true;
	};
	
	aP[0].onclick=table;
	aP[1].onclick=sphere;
	aP[2].onclick=helix;
	aP[3].onclick=startAnimate;
	init();

	//入场动画
	setTimeout(startAnimate,1500);
	function startAnimate(){
		var arr = [];
		for (var i=0;i<length ;i++ )
		{
			arr[i]=i;
		}
		for ( var i=0;i<length ;i++ )
		{
			var a = Math.floor(Math.random()*arr.length);
			var x = i%5;
			var y = parseInt(i/5)%5;
			var z = parseInt(i/25);
			//console.log("translatex("+((x-2)*(300+120))+"px)translatey("+((y-2)*(300+160))+"px)translatez("+((z-2)*200)+"px)");
			aLi[arr[a]].style.transform="translatex("+((x-2)*(300+120))+"px)translatey("+((y-2)*(300+160))+"px)translatez("+((z-2)*600)+"px)";
			arr.splice(a,1);
		}
	};
	//螺旋
	function helix(){
		var Deg = 12;
		var y = 160/30;
		for ( var i=0;i<length ;i++ )
		{
			var x =i%30; //确定一圈有几个盒子
			//var y_ = parseFloat(i/12); 
			aLi[i].style.transform = "rotatey("+ x*Deg +"deg)translatez(1000px)translatey("+((y+3)*(i-60))+"px)";
		}
	};
	//球
	function sphere(){
		var arr = [1,6,10,14,19,25,19,14,10,6,1];
		var Roxlength = 180/(arr.length-1); //每一层绕X旋转的角度
		for (var j=0;j<length ;j++ )
		{
			var sum=0;
			var rows;//行
			var cols;//行的第几个
			for ( var i=0;i<arr.length ;i++ )
			{
				sum +=arr[i];
				if ( j+1<= sum)
				{
					rows=i;
					cols=j-sum+arr[i];
					break;
				}
			}
			var roy=cols*360/arr[rows]+Math.random()*10;
			var rox=90-rows*Roxlength;
			aLi[j].style.transform = "rotatey("+roy+"deg)rotatex("+ rox +"deg)translatez(700px)";
		}
	};
	//元素周期表
	function table(){
		aLi[0].style.transform="translatex("+(-8*130) +"px)translatey("+ (-5*160) +"px)";
		aLi[1].style.transform="translatex("+ 9*130 +"px)translatey("+ (-5*160) +"px)";
		for (var i=2;i<4 ;i++ )
		{
			aLi[i].style.transform="translatex("+ (i-10)*130 +"px)translatey("+ (-4*160) +"px)";
		}
		for (var i=4;i<10 ;i++ )
		{
			aLi[i].style.transform="translatex("+ i*130 +"px)translatey("+ (-4*160) +"px)";
		}
		for (var i=10;i<12 ;i++ )
		{
			aLi[i].style.transform="translatex("+ (i-18)*130 +"px)translatey("+ (-3*160) +"px)";
		}
		for (var i=12;i<18 ;i++ )
		{
			aLi[i].style.transform="translatex("+ (i-8)*130 +"px)translatey("+ (-3*160) +"px)";
		}
		for (var i=18;i<length ;i++ )
		{
			var y = parseInt(i/18)-3;
			var x = i%18;
			aLi[i].style.transform="translatex("+ (x-8)*130 +"px)translatey("+ (y*160) +"px)";
		}
	};
	//初始化
	function init(){
		//随机排列
		for ( var i=0;i<length ;i++ )
		{
			var index=0;
			(function(i){
				var oLi = document.createElement("li");
				var oP1 = document.createElement("p");
					oP1.className = "title";
					oP1.innerHTML = Data[i].type;
				oLi.appendChild(oP1);
				var oP2 = document.createElement("p");
					oP2.className = "name";
					oP2.innerHTML =Data[i].name;
				oLi.appendChild(oP2);
				var oP3 = document.createElement("p");
					oP3.className = "time";
					oP3.innerHTML = Data[i].time;
				oLi.appendChild(oP1);
				oLi.appendChild(oP2);
				oLi.appendChild(oP3);
				oUl.appendChild(oLi);
				
				oLi.style.transform="translatex("+(Math.random()*6000-3000)+"px)translatey("+(Math.random()*6000-3000)+"px)translatez("+(Math.random()*3000-1500)+"px)";
				oLi.onclick=function(e){
					index=i;
					oCover.style.display = "block";
					oCon.children[0].innerHTML = "案例：" + Data[i].title;
					oCon.children[1].style.backgroundImage = "url(demo/"+Data[i].catalog+"/index.png)";
					oCon.children[2].innerHTML = "Author：" + Data[i].author;
					oCon.children[3].innerHTML = "描述：" + Data[i].describe;
					setTimeout(function(){
						oCon.className="show";
					},10);
					e.cancelBubble=true;
				};
				
				oCon.onclick=function(e){
					//console.log(index);
					oWrap.className = "left";
					oFrame.className = "left";
					oFrame.children[0].src= "demo/"+ Data[index].catalog +"/index.html";
					return false;
				};
				oCover.onclick=function(e){
					oCon.className = "hide";
					setTimeout(function(){
						oCover.style.display= "none";
						oCon.className = "";
					},1000);
				};
				oBack.onclick=function(){
					oWrap.className = "";
					oFrame.className = "";
				};
			})(i);
		};
			
			
		//鼠标拖拽
	var boxRox=0,boxRoy=0,dTimer,boxTrz=-1000,wTimer,wDate=0;
	oWrap.onmousedown=function(e){
		clearInterval(dTimer);
		
		e = e || event;
		var xD = e.pageX,yD = e.pageY;
		var xM = e.pageX,yM = e.pageY;
		var xL = e.pageX,yL = e.pageY;
		var xN=0,yN=0;
		var xU=0,yU=0;
		this.onmousemove=function(e){
			e = e || event;
			xM = e.pageX;
			yM = e.pageY;

			xN = (xM - xD)*0.15;
			yN = (yM - yD)*0.15;
			

			xU = xM - xL;//惯性 最后一点和倒数第二点的坐标差
			yU = yM - yL;

			oBox.style.transform="translatez("+boxTrz+"px)rotatex("+(boxRox-yN)+"deg)rotatey("+(boxRoy+xN)+"deg)";
			xL = e.pageX;
			yL = e.pageY;
		};
		this.onmouseup=function(){
			boxRox = boxRox-yN;
			boxRoy = boxRoy+xN;
			oWrap.onmousemove=null;
			dTimer=setInterval(function(){//惯性
				xU *=0.9;
				yU *=0.9;
				boxRox -=yU*0.15;
				boxRoy +=xU*0.15;
				if ( Math.abs(xU)<=0.1 && Math.abs(yU)<=0.1 )
				{
					clearInterval(dTimer);
				}
				oBox.style.transform="translatez("+boxTrz+"px)rotatex("+(boxRox)+"deg)rotatey("+(boxRoy)+"deg)";
			},30);
		};
	};
	//滚轮缩放
	if ( document.onmousewheel!==undefined )
	{
		oWrap.onmousewheel=wheel;
	}else{
		oWrap.addEventListener("DOMMouseScroll" , wheel,false);
	};
	function wheel(e){
		e = e || event;
		if ( new Date - wDate > 300 )
		{
			wDate = new Date;
			var E = e.wheelDelta || -e.detail;
			if ( E<0 )
			{
				zMove(-900);
			}else{
				zMove(900);
			};
		}
		return false;
	};
		
		//z方向的移动函数
		function zMove( number ){
			var startTime=new Date();
			var start = boxTrz;
			wTimer=setInterval(function(){
				var prop = (new Date() - startTime)/200;
				if ( prop>=1 )
				{
					prop=1;
					clearInterval(wTimer);
				}
				boxTrz = start + prop*number;
				boxTrz = Math.max(-8000,boxTrz);
				boxTrz = Math.min(100,boxTrz);
				oBox.style.transform="translatez("+boxTrz+"px)rotatex("+boxRox+"deg)rotatey("+boxRoy+"deg)";
			},13);
		};
	};
})();
/*project*/
(function(){
	var $filter = $('.project-list .type .list-unstyled li a');
	var $container = $('#filter');
	$container.isotope({
		filter:"*",
		animationOptios:{
			duration:1000,
			easing:'linear'
		}
	});
	$filter.click(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
		var selector = $(this).attr('data-filter');
		//alert(data)
		$container.isotope({
			filter:selector,
			animationOptios:{
				duration:1000,
				easing:'linear'
			}
		});
		return false;
	});
})();