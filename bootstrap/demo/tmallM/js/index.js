document.addEventListener('touchstart',
	function(e){
		e.preventDefault();
	}
);
window.onload=function(){
	//banner
	(function(){
		var oBanner = document.querySelector('.banner');
	
		var oUl = oBanner.querySelector('.pic ul');
		oUl.innerHTML += oUl.innerHTML;
		var aLi = oUl.querySelectorAll('li');
		var dot = document.querySelectorAll('.dot span');
		
		oUl.style.width = aLi.length+'00%';
		for ( var i=0 ;i<aLi.length ; i++)aLi[i].style.width=1/aLi.length*'100'+'%';
		
		var startPoint = 0;
		var startX = 0;
		var index=0,timer=null;
		
		cssStyle(oUl,'left',0);
		oBanner.addEventListener('touchstart',function(e){
			clearInterval(timer);
			oUl.style.transition = "none";
			var left = parseInt(cssStyle(oUl,'left'));
			index = Math.round(-left/oBanner.offsetWidth);
			console.log(index)
			if ( index==0 )
			{
				index = dot.length;
			}
			if ( index==aLi.length-1 )
			{
				index = dot.length-1;
			}
			cssStyle(oUl,'left',-index*oBanner.offsetWidth+'px');
			startPoint = e.changedTouches[0].pageX;
			startX = parseInt(cssStyle(oUl,'left'));
		});

		oBanner.addEventListener('touchmove',function(e){
			var nowPoint = e.changedTouches[0].pageX;
			var left = nowPoint - startPoint + startX ;
			cssStyle(oUl,'left',left+'px');
		});

		oBanner.addEventListener('touchend',function(e){
			var left = parseInt(cssStyle(oUl,'left'));
			index = Math.round(-left/oBanner.offsetWidth);
			change();
			autoPlay();
		});

		autoPlay();
		function autoPlay(){
			clearInterval(timer);
			timer = setInterval(function(){
				if ( index==aLi.length-1 )
				{
					index = dot.length-1;
				}
				oUl.style.transition='none';
				cssStyle( oUl ,'left' , -index*oBanner.offsetWidth+'px' );

				setTimeout(function(){
					index++;
					change();
				},100);
				
			},3000);
		};

		function change(){
			oUl.style.transition = "1s";
			cssStyle(oUl,'left',-index*oBanner.offsetWidth+'px');
			for (var i=0;i<dot.length ;i++ )dot[i].className = "";
			dot[index%dot.length].className = "active";
		};
	})()
	
	//页面滚动
	-function(){
		var oCont = document.querySelector('#container');
		var oCon = oCont.querySelector('.con');
		var header = oCont.querySelector('#header');

		var startPoint = 0,startY = 0;
		var minY = oCont.clientHeight-oCon.offsetHeight;

		var lastY = 0,lastDis = 0;
		var lastT = 0,lastTDis = 0;
		cssStyle(oCon,'top',0);
		oCont.addEventListener('touchstart',function(e){
			oCon.style.transition = 'none';
			startPoint = e.changedTouches[0].pageY;
			startY = parseInt(cssStyle(oCon,'top'));

			lastT = new Date().getTime();
			//lastY = lastY;

			lastDis = 0;    
			lastTDis = 0;

		});

		oCont.addEventListener('touchmove',function(e){
			var nowT = new Date().getTime();
			var nowPoint = e.changedTouches[0].pageY;
			var dixY = nowPoint - startPoint + startY;

			if ( dixY>0 )
			{
				dixY=0; 
				header.style.backgroundColor = '';
			}else{
				header.style.backgroundColor = 'red';
			}
			

			if ( dixY<minY )dixY=minY; 

			lastTDis = nowT - lastT;
			lastDis =  nowPoint - lastY;

			lastY = nowPoint;
			lastT = nowT;

			cssStyle(oCon,'top',dixY+'px');
		});

		oCont.addEventListener('touchend',function(e){
			var speed = (lastDis/lastTDis)*100;
			var top = parseInt(cssStyle(oCon,'top'));

			top += speed;
			top = Math.min(0,top);
			top = Math.max(minY,top);
			oCon.style.transition = '1s';
			cssStyle(oCon,'top',top+'px');
		});
	}();

	//焦点
	(function(){
		var search = document.querySelector('#header .search');

		search.addEventListener('touchstart',function(e){
			this.focus();
		});
	})();
	/*
	oBanner.addEventListener('touchstart',function(e){
		oUl.style.transition = "none";
		startPoint = e.changedTouches[0].pageX;
		startX = oUl.offsetLeft;
	});
	
	oBanner.addEventListener('touchmove',function(e){
		var nowPoint = e.changedTouches[0].pageX;
		oUl.style.left = nowPoint - startPoint + startX + 'px';
	});

	oBanner.addEventListener('touchend',function(e){
		var left = oUl.offsetLeft;
		if ( left > 0 )
		{
			left = 0;
		};
		if ( left < (1-aLi.length)*oBanner.offsetWidth )
		{
			left = (1-aLi.length)*oBanner.offsetWidth
		}
		var index = Math.round(-left/oBanner.offsetWidth);
		oUl.style.transition = "1s";
		oUl.style.left = -index*oBanner.offsetWidth + 'px';
		for (var i=0;i<dot.length ;i++ )dot[i].className = "";
		dot[index].className = "active";
	});
	*/
	function cssStyle(){
		if ( arguments.length==2 )
		{
			return arguments[0].style[arguments[1]];
		}else if ( arguments.length==3 )
		{
			arguments[0].style[arguments[1]]=arguments[2];
		}
	};
};