(function(){
	var $wrap = $("#wrap");
	var $pic = $('.pic'); 
	var $tab = $('#wrap .tab ul li');
	var loadnum=0;
	var imgArr = [];
	$tab.each(function(i){
		var oImg = new Image();
		oImg.src="img/"+(i+1)+".jpg";
		$(this).append(oImg);
		(function(i){
			oImg.onload=function(){
				loadnum++;
				imgArr[i] = oImg;
				if ( loadnum == $tab.length )init();
			};
		})(i);
		
	});
	function init(){
		$tab.each(function(i){
			var Width,Height;
			if (imgArr[i].clientWidth>imgArr[i].clientHeight  )
			{
				Width = 50;
				Height = 50*imgArr[i].clientHeight/imgArr[i].clientWidth;
			}else{
				Height= 50;
				Width = 50*imgArr[i].clientWidth/imgArr[i].clientHeight;
			};
			$(this).find('img').css({
				width: Width+'px',
				height: Height+'px',
				marginLeft: -Width/2+'px',
				marginTop: -Height/2+'px'
			});
		});
			
		var bigW = $tab.eq(0).find('img').width()*8;
		var bigH = $tab.eq(0).find('img').height()*8; 
		var $big = $('<div class="big" style="width:'+bigW+'px;height:'+ bigH +'px;margin-left:'+(-bigW/2)+'px;margin-top:'+(-bigH/2)+'px"><img src="img/1.jpg"></img></div>');
		$pic.append($big);
		var $bigImg = $('.big img');
		$big.find('img').css({
			width: bigW + "px",
			height: bigH + "px",
		});
		$tab.mouseenter(function(){
			var index = $(this).index(); 
			$(this).addClass("active").siblings().removeClass("active");
			bigW = $(this).find('img').width()*8;
			bigH = $(this).find('img').height()*8; 
			$big.css({
				width: bigW + "px",
				height: bigH + "px",
				marginLeft: -bigW/2+"px",
				marginTop: -bigH/2+"px"
			});
			$big.find('img').css({
				width: bigW + "px",
				height: bigH + "px",
			});
			$bigImg.attr( 'src' , 'img/'+(index+1)+'.jpg' );
		});
		$(".pic").on("mouseenter",".big",function(e){
			var $cover = $("<div class='cover'></div>");
			$big.append($cover);
			
			var coverW= $cover.width(),
				coverH= $cover.height();
			var parentW = $cover.parent().width(),
				parentH = $cover.parent().height();
			var parentL = $cover.parent().offset().left,
				parentT = $cover.parent().offset().top;
			var leftmin = 0,
				leftmax = parentW-coverW;
			var topmin = 0,
				topmax = parentH-coverH;
			var $show = $("<div class='show'></div>");
			var $showImg = $('<img />');
			$showImg.attr("src",$(this).find("img").attr('src'));
			$wrap.append($show);
			$show.append($showImg);
			var showW = $show.width();
			var prop = showW/coverW;
			$showImg.css({
				width: $(this).width()*prop+'px',
				height: $(this).height()*prop+'px'
			});
			moveshow(e);
			$(document).on('mousemove',function(e){
				moveshow(e);
			});
			
			function moveshow(e){
				var left = e.pageX-parentL-coverW/2;
				var top = e.pageY-parentT-coverH/2;;

				left=Math.min(left,leftmax);
				left=Math.max(left,leftmin);
				top=Math.min(top,topmax);
				top=Math.max(top,topmin);
				$cover.css({
					left: left + 'px',
					top: top + 'px'
				});
				$showImg.css({
					left: -left*prop+'px',
					top: -top*prop+'px'
				});
			};
		});
		
		$(".pic").on("mouseleave",".big",function(){
			$("#wrap .show").remove();
			$("#wrap .cover").remove();
		});
	};
})();