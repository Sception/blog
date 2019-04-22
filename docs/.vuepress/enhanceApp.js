import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

export default ({
                    Vue, // VuePress 正在使用的 Vue 构造函数
                    options, // 附加到根实例的一些选项
                    router, // 当前应用的路由实例
                    siteData // 站点元数据
                }) => {
    Vue.use(ElementUI);
    try {
        // 生成静态页时在node中执行，没有document对象
        // document && integrateGitment(router)
    } catch (e) {
        console.error(e.message)
    }
    // ...做一些其他的应用级别的优化
}