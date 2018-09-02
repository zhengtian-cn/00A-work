export default {
    requestPath: 'http://www.wbest.net.cn/apptest', //请求路径
    getRequest(dataGet){
        $.ajax({
            type: "get",
            url: dataGet.url,
            data: dataGet.data,
            dataType:'json',
            success: function (data) {
                dataGet.fn(data)
            }
        });
    }
}

