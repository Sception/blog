# 前言
使用**vue-cli3.0+element-ui+webpack**做项目时,遇到了一个需求:文章管理中添加富文本编辑器(暂未添加上传图片功能),在百度上查看到好几个富文本编辑器,最终选择了百度的```Ueditor```,基本能满足所有需求。经过多番采坑之后，已实现相关功能,特此做一个记录。
## 一、下载Ueditor相关静态文件存放位置
首先去[Ueditor官网](https://ueditor.baidu.com/website/download.html)下载相关资源(本文下载的1.4.3.3Jsp版本):
![Ueditor相关资源文件](https://user-gold-cdn.xitu.io/2019/2/22/169148d49735aad7?w=946&h=814&f=png&s=108714)
这里主要针对```vue-cli2```与```vue-cli3```进行区分。
### vue-cli2
```vue-cli2``` 版本中会生成一个```static```文件夹,用于放置静态资源,将下载的压缩包解压后放入```static```文件夹中:
![](https://user-gold-cdn.xitu.io/2019/2/23/169184c1fa33eaef?w=305&h=277&f=png&s=10614)
### vue-cli3
```vue-cli3``` 在项目初始化时会生成一个```public```文件夹([public文件夹使用场景](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#public-%E6%96%87%E4%BB%B6%E5%A4%B9),`public`文件夹中的文件不会被webpack打包编译,只是简单的复制到打包后的```dist```文件夹中)。将下载的压缩包解压并重命名```UE```放入```public```文件夹中:
![解压后的Ueditor存放目录](https://user-gold-cdn.xitu.io/2019/2/22/169148481b418ca0?w=294&h=229&f=png&s=9211)

## 二、引入vue-ueditor-wrap后的相关配置
先安装```vue-ueditor-wrap```,然后在相关组件中引入```vue-ueditor-wrap```
```
npm i vue-ueditor-wrap -D
```
在相关组件中注册并引入:

![](https://user-gold-cdn.xitu.io/2019/2/23/169183d39a72710c?w=1419&h=32&f=png&s=6301)
![](https://user-gold-cdn.xitu.io/2019/2/23/169184cba23004b2?w=1289&h=108&f=png&s=8185)
![](https://user-gold-cdn.xitu.io/2019/2/23/169183cac1407a0a?w=960&h=80&f=png&s=9167)

重点主要在```myconfig```配置参数上(详细配置参数见```UE/ueditor.config.js```)，在```vue-cli2```与```vue-cli3```上略显不同。
### vue-cli2
项目使用```vue-cli2```进行搭建并且将`UE`文件夹复制到了```static```文件夹中(**如第一点所示**),```UEDITOR_HOME_URL```配置为:

![](https://user-gold-cdn.xitu.io/2019/2/23/1691852ad661d52e?w=997&h=349&f=png&s=31888)
同时修改配置文件```ueditor.config.js```中的UEDITOR_HOME_URL为```'/UE/'```

![](https://user-gold-cdn.xitu.io/2019/2/23/1691861c73727d13?w=997&h=245&f=png&s=26092)
### vue-cli3
使用```vue-cli3```的```UEDITOR_HOME_URL```配置为:

![](https://user-gold-cdn.xitu.io/2019/2/23/169185162e277577?w=1238&h=351&f=png&s=46137)
同时修改配置文件```ueditor.config.js```中的```UEDITOR_HOME_URL```为```'/static/UE/'```

![](https://user-gold-cdn.xitu.io/2019/2/23/1691862a4f709b2b?w=1280&h=249&f=png&s=28719)
上述步骤无误的话,最终显示结果应为:

![](https://user-gold-cdn.xitu.io/2019/2/23/1691865088eea474?w=1623&h=579&f=png&s=65174)

## 三、修改富文本内容长度计算方式
该Ueditor中的内容长度(在这里仅以```vue```双向绑定为例)都是按照1个字符长度进行计算的,如插入一个表情显示长度为1:

![](https://user-gold-cdn.xitu.io/2019/2/23/169186d60a3addd8?w=1501&h=487&f=png&s=57698)
实际上应该为带标签的字节长度,这里需要修改```ueditor.all.js```或者```ueditor.all.min.js```的源码。
### 修改```ueditor.all.js```的方式
在```ueditor.all.js```文件中全局查找```getContentLength```:

![](https://user-gold-cdn.xitu.io/2019/2/23/1691870a0e6da0c2?w=1323&h=418&f=png&s=59350)
将高亮部分注释掉,然后将该文件压缩混淆后替换```ueditor.all.min.js```文件即可

![](https://user-gold-cdn.xitu.io/2019/2/23/1691872074424710?w=1229&h=337&f=png&s=39397)

### 修改```ueditor.all.min.js```的方式
该方式比较简单粗暴,直接在```ueditor.all.min.js```中全局搜索```getContentLength```并删除高亮部分:

![](https://user-gold-cdn.xitu.io/2019/2/23/169187539533fb24?w=1820&h=253&f=png&s=135872)
修改成功后的效果为:

![](https://user-gold-cdn.xitu.io/2019/2/23/1691876b29955d17?w=1600&h=500&f=png&s=60803)
## 四、其他问题
如在配置中出现下图类似问题：

![](https://user-gold-cdn.xitu.io/2019/2/23/169187f2b649c4e7?w=1901&h=28&f=png&s=4597)
请仔细检查配置参数```UEDITOR_HOME_URL```路径是否正确。仔细检查！仔细检查！仔细检查！重要的事情说三遍~

## 最后
希望本文能帮助到有需要的你~
![](https://user-gold-cdn.xitu.io/2019/2/23/169187a723e697eb?w=300&h=300&f=jpeg&s=6294)
相关参考资料:
[vue-ueditor-wrap](https://github.com/HaoChuan9421/vue-ueditor-wrap)
