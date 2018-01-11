/*$(function(){
	var _index = 0;
	var timer = null;
	//Բ�㰴ť
	var $aBtn = $("#control ul li");
	//��ť
	var $preBtn = $(".btn .left-btn");
	//�Ұ�ť
	var $nextBtn = $(".btn .right-btn")
	
	$aBtn.hover(function(){
		_index = $(this).index();
		run();
	});
	//���ĺ���
	function run(){
		_index%=4;//ȡ�� ����if(_index > 3){_index = 0;}
		if(_index < 0){_index = 3;}
		$aBtn.eq(_index).addClass("on").siblings().removeClass("on");
		$(".scroll").animate({"left":-980*_index+"px"},1000);
		
	}

	$preBtn.click(function(){	//����
		_index--;
		run()
			
		
	});
	$nextBtn.click(function(){	//�ҵ��
		_index++;
		run();	
	});

	autoplay();
	function autoplay(){		//�Զ��ֲ�
		timer=setInterval(function(){
			_index++;
			run();
		},1500)
	}

	$("#section").hover(function(){
		clearInterval(timer);
	},function(){
		autoplay();				//�����Զ��ֲ�
	})
})
*/
$(function(){
	var _index = 0;
	var timer = null;
	//Բ�㰴ť
	var $aBtn = $("#control ul li");
	//��ť
	var $preBtn = $(".btn .left-btn");
	//�Ұ�ť
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
	//���ĺ���
	function run(){
		var $liindex = _index;
		//_index%=$lilength;//ȡ�� 
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

	$preBtn.click(function(){	//����
		if ( new Date() - nowDate >500 )
		{
			nowDate = new Date();
			_index--;
			run();
		}	
	});
	$nextBtn.click(function(){	//�ҵ��
		if ( new Date() - nowDate >500 )
		{
			nowDate = new Date();
			_index++;
			run();	
		}
	});

	autoplay();
	function autoplay(){		//�Զ��ֲ�
		timer=setInterval(function(){
			_index++;
			run();
		},3000)
	}

	$("#section").hover(function(){
		clearInterval(timer);
	},function(){
		autoplay();				//�����Զ��ֲ�
	})	
});