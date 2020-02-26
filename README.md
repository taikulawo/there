# [Demo](https://n.chaochaogege.com)

**这个主题支持的功能都是我能用到的，其余的功能没有添加，如果你觉着缺少一个功能，你可以在`issues`里告诉我，我会添加上**

### 安装

导航到 hexo的网站目录下

```
npm install hexo-renderer-pug hexo-renderer-scss --save
```

将主题下载到你的`themes`目录下

```
git clone https://github.com/iamwwc/there
```

### 使用
修改博客根目录下的配置文件（_config.yml），启用 There 主题。 修改 theme 字段为 there:

由于 `Archives` 页集成了 `tags` 页， 所以主题不再添加tags页， 全部的`tags`通过 `Archives` 的单页路由进行导航

- author_description 展示在侧边栏
- avatar 侧边栏显示的头像
- since 网站建立时间， enable 为false 则表示关闭
- social-links 社交链接，图标使用 Font-Awesome库，选择一个你喜欢的填写上

- disqus 评论系统

- favicon 浏览器Tab标签页上的小图标
