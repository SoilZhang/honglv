//mui��ʼ��
mui.init();

mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick ����ϵ����ϵ��Խ�󣬹����ٶ�Խ������������ԽС��Ĭ��ֵ0.0006
});

//�ֲ�ͼ
$.ajax({
    url:'http://127.0.0.1:9091/api/getlunbo',
    //dataType:"json",
    success: function (data) {
        $(".swiper-wrapper").append(template("template_banner",data));
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 0, //��ʾ�ֲ�ͼֱ�ӵļ�� �����Ҫ����Ϊ0����ȥ���������
            loop: true, //ѭ�� �޷��ֲ�
            autoplay: 1000, //�ֲ�ͼ�Զ�����
            autoplayDisableOnInteraction: false,
        });
    }
})

//tab��
$.ajax({
    url:'http://127.0.0.1:9091/api/gethometab/1',
    success: function (data) {
        console.log(data);
        $("#home").append(template("template-tab",data));
    }
})

$(".nav").on("touchstart","li", function () {
    var index = $(this).index()+1;
    $(".nav li").removeClass("active");
    $(this).addClass("active");
    $.ajax({
        url:'http://127.0.0.1:9091/api/gethometab/'+index,
        success: function (data) {
            $("#home").html(template("template-tab",data));
        }
    })
})

//���Ͻǲ˵���ť
$(".mui-action-menu").on("tap",function () {
    //console.log(111);
    mui('.mui-off-canvas-wrap').offCanvas().toggle();
})

//�����ת�����ض���
$(".menu-list").on("tap", ".serial", function () {
    mui.openWindow({
        url:'serial-cartoon.html'
    })
})

//�����ת��ר���б�
$(".menu-list").on("tap", ".special", function () {
    mui.openWindow({
        url:'special-list.html'
    })
})

