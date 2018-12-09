// commons/components/common-content-box/common-content-box.js
// 引入小标题的配置文件
const config = require('../../../utils/config')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items: Array,
    type: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 刚接收过来的参数不能立即使用，先设置空对象，然后再在生命周期函数中获取数据
    type_info: {}
  },
  attached () {//组件生命周期函数，在组件实例进入页面节点树时执行
    // 获取config中的types数据,[this.data.type]为拿上方定义的type: String，对应的是config中的"sound"
    // console.log(this)
    this.setData({type_info: config.types[this.data.type]})//提取整个API的sound和channel的数据
    // console.log(this.data.type)
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
