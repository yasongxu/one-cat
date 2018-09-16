const app = getApp()
Page({
  data: {
    cardInfo: {}
  },
  onLoad: function (options) {
    console.log(options)
    var that = this
    var detailContent = JSON.parse(options.detailContent);
    that.setData({
      cardInfo: detailContent
    })
  }
});