/*$(function(){
	var _index = 0;
	var timer = null;
	//圆点按钮
	var $aBtn = $("#control ul li");
	//左按钮
	var $preBtn = $(".btn .left-btn");
	//右按钮
	var $nextBtn = $(".btn .right-btn")
	
	$aBtn.hover(function(){
		_index = $(this).index();
		run();
	});
	//核心函数
	function run(){
		_index%=4;//取摸 等于if(_index > 3){_index = 0;}
		if(_index < 0){_index = 3;}
		$aBtn.eq(_index).addClass("on").siblings().removeClass("on");
		$(".scroll").animate({"left":-980*_index+"px"},1000);
		
	}

	$preBtn.click(function(){	//左点击
		_index--;
		run()
			
		
	});
	$nextBtn.click(function(){	//右点击
		_index++;
		run();	
	});

	autoplay();
	function autoplay(){		//自动轮播
		timer=setInterval(function(){
			_index++;
			run();
		},1500)
	}

	$("#section").hover(function(){
		clearInterval(timer);
	},function(){
		autoplay();				//调用自动轮播
	})
})
*/
$(function(){
	var _index = 0;
	var timer = null;
	//圆点按钮
	var $aBtn = $("#control ul li");
	//左按钮
	var $preBtn = $(".btn .left-btn");
	//右按钮
	var $nextBtn = $(".btn .right-btn")
	var $bannerli = $(".banner ul li");
	var $btnlength =  $aBtn.length;
	var $scroll = $(".scroll");
	var nowDate = new Date();
	//alert($lilength);
	$aBtn.hover(function(){
		if ( new Date() - nowDate >=800 )
		{
			nowDate = new Date();
			_index = $(this).index();
			$(this).addClass('on').siblings().removeClass('on');
			$scroll.animate({
				"left" : (-980*(_index+1)) + 'px'
			},800);
		}
		//run();
	});
	//核心函数
	function run(){
		var $liindex = _index;
		//_index%=$lilength;//取摸 
		//if(_index < 0){_index = $lilength-1;}
		if ( $liindex>=$btnlength )
		{
			$liindex=0;
		}else if ( $liindex<0 )
		{
			$liindex==$btnlength-1;
		}
		$aBtn.eq($liindex).addClass("on").siblings().removeClass("on");
		$scroll.animate({"left":-980*(_index+1)+"px"},800,function(){
			if ( _index>=$btnlength )
			{
				$scroll.css('left','-980px');
				_index=0;
			}else if ( _index<0 ){
				$scroll.css('left',(-980*$btnlength)+"px");
				_index=$btnlength-1;
			};
		});
		
	}

	$preBtn.click(function(){	//左点击
		if ( new Date() - nowDate >500 )
		{
			nowDate = new Date();
			_index--;
			run();
		}	
	});
	$nextBtn.click(function(){	//右点击
		if ( new Date() - nowDate >500 )
		{
			nowDate = new Date();
			_index++;
			run();	
		}
	});

	autoplay();
	function autoplay(){		//自动轮播
		timer=setInterval(function(){
			_index++;
			run();
		},3000)
	}

	$("#section").hover(function(){
		clearInterval(timer);
	},function(){
		autoplay();				//调用自动轮播
	})	
});