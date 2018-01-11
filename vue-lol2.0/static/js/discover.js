/**
 * Created by DELL on 2017/4/22.
 */
(function () {
  const oClubBanner = document.querySelector('.clubBanner');
  const oBannerBox = document.querySelector('.bannerBox');

  document.addEventListener('touchstart',function (e) {
    e.preventDefault()
  })

  let disX = 0,
    startTranslateX = 0;
  oClubBanner.addEventListener('touchstart',function (e) {
    disX = e.changedTouches[0].pageX;
    startTranslateX = parseInt(cssStyle(oBannerBox,'transform'))
  })

  oClubBanner.addEventListener('touchmove',function (e) {
    let nowX = e.changedTouches[0].pageX;
    let _X = nowX - disX;
    let nowTranslateX = startTranslateX + _X;
    cssStyle(oBannerBox,'transform',nowTranslateX);
  })

  function cssStyle() {
    if(arguments.length==2){
      return arguments[0].style[arguments[1]]
    }else if(arguments.length==3){
      arguments[0].style[arguments[1]]=arguments[2]
    }
  }
})()
