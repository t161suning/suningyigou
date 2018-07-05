/**
 * Created by A on 2018/7/2.
 */
$(function () {
    $(".qrcode-main").mouseover(function () {
        $(".qrcode-img").stop().animate({"left":"0"},300,function () {
            $(".qrcode-help").show();
        });
    }).mouseleave(function () {
        $(".qrcode-help").hide();
        $(".qrcode-img").stop().animate({"left":"96"},300);
    });
    //叉号的点击事件
    // $(".deltext").mouseover(function () {
    //     $(this).show();
    // })
    //叉号显示的时机
    $(".login-item input").keyup(function (){
        if (this.value.length>0){
            $(this).next().show();
        }
        if(this.value.length==0){
            $(this).next().hide();
        }
    });
    $(".deltext").click(function () {
        $(this).siblings("input").val("");
        $(this).show();
    });
    $(".title span:eq(0)").click(function () {
        $(".qrcode-main").show();
        $(".app p").show();
        $(".login-box").hide();
        $(this).addClass("current");
        $(".title span:eq(1)").removeClass("current");
    });
    $(".title span:eq(1)").click(function () {
        $(".qrcode-main").hide();
        $(".app p").hide();
        $(".login-box").show();
        $(this).addClass("current");
        $(".title span:eq(0)").removeClass("current");
    });
});