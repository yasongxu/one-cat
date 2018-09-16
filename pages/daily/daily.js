const app = getApp()
Page({
  data: {
    list: [{
      id: 1001,
      name: '三毛语录',
      date: '2018-09-01',
      dateObj:{
        year:'2018',
        month: '09',
        day: '01'
      },
      week: "周六",
      type: 1,
      mediaUrl: 'https://vermouth2018.oss-cn-qingdao.aliyuncs.com/cat/image/10.jpg',
      briefContent: '岁月极美，在于它必然的流逝。春花、秋月、夏日、冬雪。',
      content: '岁月极美，在于它必然的流逝。春花、秋月、夏日、冬雪。岁月极美，在于它必然的流逝。春花、秋月、夏日、冬雪。',
      contentSource: '三毛 《岁月》',
      source: 'instagram',
      owner: 'magic',
      liked: 100,
      collected: 50,
      isDeleted: 0,
      createdAt: "2018-09-01 12:00:00",
      updatedAt: "2018-09-01 12:00:00",
    },
    
    {
      id: 1003,
      name: '傅雷家书',
      date: '2018-09-01',
      dateObj: {
        year: '2018',
        month: '09',
        day: '01'
      },
      week: "周六",
      type: 1,
      mediaUrl: 'https://vermouth2018.oss-cn-qingdao.aliyuncs.com/cat/image/15.jpg',
      briefContent: '让我做个宁静的梦吧，不要离开我，那条很短很短的街，我们已经走了很长很长的岁月。',
      content: '让我做个宁静的梦吧，不要离开我，那条很短很短的街，我们已经走了很长很长的岁月。',
      contentSource: '舒婷《会唱歌的鸢尾花》',
      source: 'ONE',
      owner: '',
      liked: 49,
      collected: 20,
      isDeleted: 0,
      createdAt: "2018-09-01 12:00:00",
      updatedAt: "2018-09-01 12:00:00",
    },
    {
        id: 1002,
        name: '红楼梦',
        date: '2018-09-01',
        dateObj: {
          year: '2018',
          month: '09',
          day: '01'
        },
        week: "周六",
        type: 2,
        mediaUrl: 'https://vermouth2018.oss-cn-qingdao.aliyuncs.com/cat/video/2.mp4',
        briefContent: '不能忍受生命中注定要忍受的事情，就是软弱和愚蠢的表现。',
        content: '假如你避免不了，就得去忍受。不能忍受生命中注定要忍受的事情，就是软弱和愚蠢的表现。',
        contentSource: '勃朗特 《简爱》',
        source: '抖音',
        owner: '',
        liked: 3400,
        collected: 45,
        isDeleted: 0,
        createdAt: "2018-09-01 12:00:00",
        updatedAt: "2018-09-01 12:00:00",
      }]
  },
  showDetail: function (event) {
    var detailContent = JSON.stringify(event.currentTarget.dataset.content)
    wx.navigateTo({
      url: '/pages/detail/detail?detailContent=' + detailContent,
      success: function () { },
      fail:function() { } ,
      complete:function() { } 
    })
  }
  // onLoad: function() {
  //   wx.request({
  //     url: 'http://118.126.82.22:8090/api/daily_list',
  //     method: 'get',
  //     data: {
  //       name: 1,
  //       sex: 'fff'
  //     },
  //     success: (res)=>{
  //       if (res.statusCode === 200){
  //         this.setData({
  //           list: res.data.result
  //         })
  //       }
  //       else{
  //         this.setData({
  //           list: []
  //         })
  //       }
  //     }
  //   })
  // }
});