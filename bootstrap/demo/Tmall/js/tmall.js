window.onload=function(){
  var oUl=document.getElementById('button-con');
  var aBtn=oUl.getElementsByTagName('li');

  var oWrap=document.getElementById('bannerWrap');
  var aImg=oWrap.getElementsByTagName('li');
 
  var num = 0;
  var oldBtn = aBtn[num];
  var oldImg = aImg[num];
  var timer;

		oldBtn.className = 'show';
		oldImg.style.display = 'block';
	 
		/*for (var i=0;i<aBtn.length ;i++ )
		{
			aBtn[i].setAttribute('juntong',i);
			aBtn[i].onmouseover=function(){
				for (var j=0;j<aBtn.length ;j++ )
				{
					//oldBtn = aBtn[num]
					//oldBtn.className='';
					aBtn[j].className='';
					aImg[j].style.display='none';
				};
				this.className='show';
				aImg[this.getAttribute('juntong')].style.display='block';
			}
		};*/
	  //alert(aLi.length);    length个数
	  for(var i=0;i<6;i++){//for循环 只有（）里面的条件成立才会执行{}里面内容；
		  aBtn[i].index=i;//自定义属性；索引
		  aBtn[i].onmouseover=function(){
			  //onclick点击事件 onmouseover鼠标滑入

		  //className： class名字
		  //this：是触发了当前函数this就指向谁；
			  //按钮
			  //清除定时器
			  num = this.index;
			  run();      
		  }
	  }
	  function run(){//函数的封装
              oldBtn.className = '';
              oldBtn = aBtn[num];//跟新oldBtn
              aBtn[num].className = 'show';
              //图片
              oldImg.style.display = 'none';
              oldImg = aImg[num];
              aImg[num].style.display ='block';
          }
          //定时器
	 
          autoplay();
          function autoplay(){
              timer = setInterval(function(){
                  run();
                  num++;
                  if(num==6){//if(条件){执行的内容}
                      num = 0;
                  }
           
              },1000)//每隔1000毫秒执行一次fn;        
          }
           
          oUl.onmouseover=function(){
              clearInterval(timer);
           
          }
          oUl.onmouseout=function(){
              autoplay();
          }
		/*头部固定搜索框*/
		var oUl=document.getElementById('research-fixed');
		var oNav = document.getElementById('sidenav');
		window.onscroll=function()//文档发生滚动的时候
		{var scrollTop =  document.body.scrollTop||document.documentElement.scrollTop;//获取浏览器滚动高度
			if(scrollTop>=700){
				oUl.style.top = '0px';
				}
			else{
				oUl.style.top = '-50px';
				}
		

		/*左侧导航*/
			if(scrollTop>=1100){
				oNav.style.display= 'block';
				}
			else{
				oNav.style.display= 'none';
				}
			}
}
		   /* 固定右侧用户功能栏*/
 
 $('#sidestatus .btn').hover(function(){//鼠标移入
      //this当前点击.btn
      //parent父级
      //find在下面查找
      //show 让dispaly:none变成display:block;
      //animate({要修改样式},时间（毫秒）,function(){ 回调函数})
      $(this).parent().siblings().find('.activeTxt').stop(true,true);
      $(this).parent().find('.activeTxt').stop(true,true).show().animate({'right':'35','opacity':'1'},500);//链式操作
 
  },function(){//鼠标移开
      $(this).parent().find('.activeTxt').stop(true,true).animate({'right':'100','opacity':'0'},500,function(){
       
          $(this).parent().find('.activeTxt').hide();
       
       
      });
   
  })