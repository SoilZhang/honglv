/**
 * Created by Aiden on 2017-09-04 .
 */
mui(function () {
    mui.init();
    scroll();
    back();
})

function scroll(){
    //��ק����
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick ����ϵ����ϵ��Խ�󣬹����ٶ�Խ������������ԽС��Ĭ��ֵ0.0006
    });
}

function back(){
    $(".mui-icon-back").on("tap",function () {
        mui.openWindow({
            url:'index.html'
        })
    })
}

//ר���б�
$.ajax({
    url:'http://127.0.0.1:9091/api/gettopics',
    success: function (data) {
        //console.log(data);
        var dataArr = [];
        for(var i = 0 ; i < data.length; i++){
            dataArr.push(
                '<div class="mui-col-xs-12">'+
                    '<a href="'+data[i].url+'">' +
                    '<img src="'+data[i].img+'" alt=""/>'+
                    '<h3>'+data[i].title+'</h3>'+
                    '</a>'+
                '</div>'
            )
        }
        $(".mui-row").html(dataArr.join(""));
    }
})