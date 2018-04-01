let n
init()   //初始化
let timer = setInterval(()=>{
  makeLeave(getImage(n))
    .one('transitionend', (e)=>{
      makeEnter($(e.currentTarget))
    })
  makeCurrent(getImage(n+1))
  n += 1
},2000)

document.addEventListener('visibilitychange',function(e){
  // console.log(document.hidden)
  if(document.hidden){
    window.clearInterval(timer)
  }else{
    timer = setInterval(()=>{
      makeLeave(getImage(n))
        .one('transitionend', (e)=>{
          makeEnter($(e.currentTarget))
        })
      makeCurrent(getImage(n+1))
      n += 1
    },2000)
  }
})


// 下面各种函数封装，可以不看
function getImage(n){
  return $(`.images > img:nth-child(${x(n)})`)
}
function x(n){
  if(n>3){
    n = n%3
    if (n===0){
      n =3
    }
  } // n = 1 2 3
  return n
}
function init(){
  n = 1
  $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}
function makeCurrent($node){
  return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
  return $node.removeClass('enter current').addClass('leave')
}
function makeEnter($node){
  return $node.removeClass('leave current').addClass('enter')
}