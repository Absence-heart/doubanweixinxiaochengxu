// pages/search/search.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
          resultList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  backToHome () {
    wx.navigateBack({
      url: "../home/home"
    })
  },
  searchMovie (e) {
    var value = e.detail.value;
    var url = app.globalData.doubanBase + app.globalData.searchUrl + value;
    wx.request({
      url,
      method: "GET",
      header:{'content-type': 'json'},
      success:(res) => {
        this.arrangeData(res.data.subjects);
      }
    })
  },
  arrangeData(list) {
    var resultList = [];
    list.forEach(item => {
      var dirs = item.directors.map(i => i.name).join('/');
      var desc = item.rating.average + '分 /' + item.year + '/' + dirs;
      
      resultList.push({
        title: item.title,
        image: item.images.small,
        desc,
        id: item.id
      })
    });
    this.setData({
      resultList
    }); 
  }
})