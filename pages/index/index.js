var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slider: [
      { picUrl: '../../images/m_banner/m_banner1.jpg' },
      { picUrl: '../../images/m_banner/m_banner8.jpg' },
      { picUrl: '../../images/m_banner/m_banner9.jpg' }
    ], 
    
  },
  openProductPage: function (id) {
    wx.navigateTo({
      url: '../product/product?id=1',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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

  }
})