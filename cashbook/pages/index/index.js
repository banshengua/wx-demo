//index.js
//获取应用实例
const app = getApp()
var wxchart=require('../image/wxcharts-min.js');
new wxchart({
  canvasId: 'pieCanvas',
  type: 'pie',
  series: [{
    name: '网购700元',
    data: 50,
  }, {
    name: 'cat2',
    data: 100,
  }, {
    name: 'cat3',
    data: 1,
  }, {
    name: 'cat4',
    data: 1,
  }, {
    name: 'cat5',
    data: 46,
  }],
  width: 360,
  height: 300,
  dataLabel: true

});
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    array: ['美国', '中国', '巴西', '日本'],
    oldDate: '2017-03-01',
    newDate:"2018-03-20"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  bindPickerChange:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  oldDate: function (e) {
    this.setData({
      oldDate: e.detail.value
    })
  },
  newDate: function (e) {
    this.setData({
      newDate: e.detail.value
    })
  }
})
