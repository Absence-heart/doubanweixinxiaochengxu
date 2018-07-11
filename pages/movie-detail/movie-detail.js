// pages/movie-detail/movie-detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieDetail: {},
    secondInfo: '',
    flag: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var url = app.globalData.doubanBase + '/v2/movie/subject/' + id;
    this.getMovieDetail(url);
    wx.setNavigationBarTitle({
      title: '影片详情',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getMovieDetail(url){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1000
    });
    wx.request({
      url,
      type: 'GET',
      header: {'content-type': 'json'},
      success: res => {this.setData({
        movieDetail : res.data
      });
      let infoCombine = this.data.movieDetail.genres.join('/');
      let secondInfo = this.data.movieDetail.year + '/' + infoCombine;
      this.setData({
        secondInfo 
      })
      },
      fail: err=> console.log(err),
      complete() {
        wx.hideToast()
      }
    })
  },
  extend (e) {
  this.setData({
    flag: true
  })
  },
  gather () {
    this.setData({
      flag: false
    })
  }
})