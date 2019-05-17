import { futimesSync } from "fs";

export const getQueryString = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]); return null;
}

export const randomNum = function(min,max){
    return Math.floor( Math.random()*(max-min)+min);
}
export const randomColor = function (min,max){
    var r = randomNum(min,max);
    var g = randomNum(min,max);
    var b = randomNum(min,max);
    return "rgb("+r+","+g+","+b+")";
}

/**绘制验证码图片**/
export const drawPic=function(canvas){
    var width=canvas.width;
    var height=canvas.height;
    var ctx = canvas.getContext('2d');
    ctx.textBaseline = 'bottom';

    /**绘制背景色**/
    ctx.fillStyle = randomColor(180,240); //颜色若太深可能导致看不清
    ctx.fillRect(0,0,width,height);
    /**绘制文字**/
    var text =''
    var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
    for(var i=0; i<4; i++){
      var txt = str[randomNum(0,str.length)];
      text += txt
      ctx.fillStyle = randomColor(50,160);  //随机生成字体颜色
      ctx.font = randomNum(15,40)+'px SimHei'; //随机生成字体大小
      var x = 10+i*25;
      var y = randomNum(25,45);
      var deg = randomNum(-45, 45);
      //修改坐标原点和旋转角度
      ctx.translate(x,y);
      ctx.rotate(deg*Math.PI/180);
      ctx.fillText(txt, 0,0);
      //恢复坐标原点和旋转角度
      ctx.rotate(-deg*Math.PI/180);
      ctx.translate(-x,-y);
    }
    /**绘制干扰线**/
    for(var i=0; i<8; i++){
      ctx.strokeStyle = randomColor(40,180);
      ctx.beginPath();
      ctx.moveTo( randomNum(0,width), randomNum(0,height) );
      ctx.lineTo( randomNum(0,width), randomNum(0,height) );
      ctx.stroke();
    }
    /**绘制干扰点**/
    for(var i=0; i<20; i++){
      ctx.fillStyle = randomColor(0,255);
      ctx.beginPath();
      ctx.arc(randomNum(0,width),randomNum(0,height), 1, 0, 2*Math.PI);
      ctx.fill();
    }
    return text
  }