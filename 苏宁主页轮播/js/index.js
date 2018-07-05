/**
 * Created by Jack on 2018/6/21.
 */
$(function () {
    //鼠标移入显示两个按钮
    $("#sc-box").mouseover(function () {
        $(".pre,.next").show();
    }).mouseout(function () {//鼠标移出
        $(".pre,.next").hide();
    });
    //上一个按钮的点击事件
    $(".pre").click(function () {
        //显示的元素的位置
        var index=$(".imgs img").index($(".imgs img:visible"));
        if(--index<0){
            //alert("已经到第一个了，不能再点击了！");
            index=$(".imgs img").size()-1;
        }
        //不为0说明有上一个元素，让上一个元素显示，让其他同辈元素隐藏
        var $now=$(".imgs img").eq(index);
        $now.fadeIn("slow");//让切换后的元素显示
        $now.siblings().hide();//让其他元素隐藏
        //改圆点-对应的圆点设置上背景色，其他同辈元素移除掉背景色样式
        $(".btns li").eq(index).addClass("current")
            .siblings().removeClass("current");
    });

    $(".next").click(function () {
        //显示的元素的位置
        var index=$(".imgs img").index($(".imgs img:visible"));
        if(++index>8){
            //alert("已经到最后一个了，不能再点击了！");
            index=0;
        }
        //不超过长度 说明有下一个元素，让下一个元素显示，让其他同辈元素隐藏
        var $now=$(".imgs img").eq(index);
        $now.show();//让切换后的元素显示
        $now.siblings().hide();//让其他元素隐藏
        //改圆点-对应的圆点设置上背景色，其他同辈元素移除掉背景色样式
        $(".btns li").eq(index).addClass("current")
            .siblings().removeClass("current");
    });
    var isGo=true;//是否执行时钟内的代码
    //定时器，用于切换图片
    setInterval(function(){
        if(!isGo){
            return;
        }
        //显示的元素的位置
        var index=$(".imgs img").index($(".imgs img:visible"));
        if(++index>8){
            //alert("已经到最后一个了，不能再点击了！");
            index=0;
        }
        //不超过长度 说明有下一个元素，让下一个元素显示，让其他同辈元素隐藏
        var $now=$(".imgs img").eq(index);
        $now.show();//让切换后的元素显示
        $now.siblings().hide();//让其他元素隐藏
        //改圆点-对应的圆点设置上背景色，其他同辈元素移除掉背景色样式
        $(".btns li").eq(index).addClass("current")
           .siblings().removeClass("current");
   },3000);

    //悬浮的阴影效果及更换展示图片索引
    $(".btns li").mouseover(function () {
        $(this).addClass("current").siblings().removeClass("current");
        //更换图片
        var index=$(".btns li").index($(this));
        //不超过长度 说明有下一个元素，让下一个元素显示，让其他同辈元素隐藏
        var $now=$(".imgs img").eq(index);
        $now.show();//让切换后的元素显示
        $now.siblings().hide();//让其他元素隐藏
        isGo=false;
    }).mouseout(function () {
        isGo=true;
    });
});