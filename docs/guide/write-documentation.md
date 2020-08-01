# 编写使用文档

## 开始为你的组件编写使用文档吧
一个好的组件，优秀的文档说明必不可少。

## 在`vuepress`中引入你的组件
找到项目下 `docs/.vuepress/enhanceApp.js`, 像开发工程项目一样引入你在 `src` 目录的组件入口;
这里以引入m-button 为例, 加入下面的代码
``` javascript
...
import MButton from '../../src'

export default ({
    ...
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(MButton)
}
```

## 编写demo
引入完成后，在 `docs/.vuepress/components/demo/` 下编写你的demo
新建vue文件编写demo
``` vue
<template>
  <div>
    <m-button />
  </div>
</template>

<script>
export default {
  name: 'MyButton'
}
</script>

<style lang="stylus" scoped>
</style>
```

## 最后在你的md文件中引用demo
``` md
<baseComponent-codeBox title="这是title" description="这是描述">
  <demo-MyButton></demo-MyButton> // 这里需要把你的路径用-的形式把demo文件夹名称拼接上
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/你新建的vue文件
  </highlight-code>
</baseComponent-codeBox>
```

## 效果如下
<baseComponent-codeBox title="这是title" description="这是描述">
  <demo-MyButton-MyButton></demo-MyButton-MyButton>
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/MyButton/MyButton.vue
  </highlight-code>
</baseComponent-codeBox>