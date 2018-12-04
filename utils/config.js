// 配置组件标题数据
const config = {
    types: {
        "sound": {//"sound"的类型定义是为了拿整个API中sound部分的数据
            title: '人气M音',
            control_title: '排行榜',//默认为'更多'
            control_link: '../rank/rank',//导航按钮位于pages/index的页面中，所以导航的路径以这个页面路径开始
            icon: {x: -44, y: 0},
            item_type: 'common' //定义模板类型，名字随意，用于三元运算验证
        },
        "channel": {
            title: '频道',
            icon: {x: -88, y: -88},
            item_type: 'four'
        },
        "46": {
            title: '有声漫画',
            icon: {x: -132, y: -88}
        },
        "5": {
            title: '广播剧',
            icon: {x: -88, y: -44}
        },
        "8": {
            title: '音乐',
            icon: {x: -44, y: -88}
        },
        "54": {
            title: '催眠',
            icon: {x: -44, y: -132}
        },
        "26": {
            title: '娱乐',
            icon: {x: -132, y: 0}
        },
        "41": {
            title: '日抓',
            icon: {x: -132, y: -44}
        },
        "6": {
            title: '听书',
            icon: {x: 0, y: -88}
        },
        "52": {
            title: '配音',
            icon: {x: 0, y: -132}
        },
        "65": {
            title: '铃声',
            icon: {x: -132, y: -132}
        },
    }
}

module.exports = config