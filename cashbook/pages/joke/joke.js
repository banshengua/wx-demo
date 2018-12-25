Page({
  onLoad:function(){
    wx.request({
      url: 'http://api.laifudao.com/open/xiaohua.json',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  }

})