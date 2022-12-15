/**
 * 大家在这里自定义即可，如果不添加图片，记得把图片配置的src写成 ""
 */
var settings = {
    // 爱心配置
    love: {
        length: 900,  // 爱心的大小
        duration: 2,  // 爱心扩散速度，越小速度越快
        velocity: 100,  // 爱心扩散速度，越小速度越慢
        effect: -0.75, // 爱心收缩效果，比如：1扩散，-2收缩
        size: 40, // 爱心数量
        color: "pink" // 爱心颜色
    },
    // 开始按钮配置
    button: {
        // 按钮内容
        text: "打开生日礼物",
        // 按钮字体颜色
        color: "pink",
        // 按钮边框颜色
        borderColor: "blue",
        // 按钮宽度
        width: "120",
        // 按钮高度
        height: "65",
        // 按钮字体大小
        size: "20",
        // 按钮圆角，可根据喜好调节
        borderRadius: "5"
    },
    // 背景颜色配置
    bg: {
        color: "black"
    },
    // 音乐配置
    music: {
        // 只用写音乐名，比如 xxx.mp3
        src: "Lot to Learn .mp3"
    },
    // 文字配置
    text: {
        // 文字内容
        content: "To my ice.",
        // 字体大小
        size: "22",
        // 文字宽度
        width: "100",
        // 文字颜色
        color: "pink",
        // 文字是否加粗,0不加粗，1加粗
        bold: "1",
        // 文字距离左边多远
        left: "895",
        // 文字距离顶部多远
        top: "450",
        // 透明度，1不透明，0不透明
        opacity: ".5"
    },
    // 图片配置
    image: {
        // 图片放在image文件夹下，然后写图片名比如 xxx.png
        src: "happy birthday.png",
        // 图片宽度
        width: "1024",
        // 图片高度
        height: "682",
        // 图片距离顶部距离
        top: "100",
        // 图片距离左边距离
        left: "450",
        // 圆角，50%是圆形
        borderRadius: "",
        // 透明度，1不透明，0不透明
        opacity: ".5"
    }
};