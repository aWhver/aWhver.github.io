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
	  //alert(aLi.length);    length����
	  for(var i=0;i<6;i++){//forѭ�� ֻ�У�����������������Ż�ִ��{}�������ݣ�
		  aBtn[i].index=i;//�Զ������ԣ�����
		  aBtn[i].onmouseover=function(){
			  //onclick����¼� onmouseover��껬��

		  //className�� class����
		  //this���Ǵ����˵�ǰ����this��ָ��˭��
			  //��ť
			  //�����ʱ��
			  num = this.index;
			  run();      
		  }
	  }
	  function run(){//�����ķ�װ
              oldBtn.className = '';
              oldBtn = aBtn[num];//����oldBtn
              aBtn[num].className = 'show';
              //ͼƬ
              oldImg.style.display = 'none';
              oldImg = aImg[num];
              aImg[num].style.display ='block';
          }
          //��ʱ��
	 
          autoplay();
          function autoplay(){
              timer = setInterval(function(){
                  run();
                  num++;
                  if(num==6){//if(����){ִ�е�����}
                      num = 0;
                  }
           
              },1000)//ÿ��1000����ִ��һ��fn;        
          }
           
          oUl.onmouseover=function(){
              clearInterval(timer);
           
          }
          oUl.onmouseout=function(){
              autoplay();
          }
		/*ͷ���̶�������*/
		var oUl=document.getElementById('research-fixed');
		var oNav = document.getElementById('sidenav');
		window.onscroll=function()//�ĵ�����������ʱ��
		{var scrollTop =  document.body.scrollTop||document.documentElement.scrollTop;//��ȡ����������߶�
			if(scrollTop>=700){
				oUl.style.top = '0px';
				}
			else{
				oUl.style.top = '-50px';
				}
		

		/*��ർ��*/
			if(scrollTop>=1100){
				oNav.style.display= 'block';
				}
			else{
				oNav.style.display= 'none';
				}
			}
}
		   /* �̶��Ҳ��û�������*/
 
 $('#sidestatus .btn').hover(function(){//�������
      //this��ǰ���.btn
      //parent����
      //find���������
      //show ��dispaly:none���display:block;
      //animate({Ҫ�޸���ʽ},ʱ�䣨���룩,function(){ �ص�����})
      $(this).parent().siblings().find('.activeTxt').stop(true,true);
      $(this).parent().find('.activeTxt').stop(true,true).show().animate({'right':'35','opacity':'1'},500);//��ʽ����
 
  },function(){//����ƿ�
      $(this).parent().find('.activeTxt').stop(true,true).animate({'right':'100','opacity':'0'},500,function(){
       
          $(this).parent().find('.activeTxt').hide();
       
       
      });
   
  })