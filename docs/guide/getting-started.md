# 快速上手

::: warning Node 版本要求
Vue-compontent-template 需要Node.js 10.X或更高版本。你可以使用 [nvm](https://github.com/nvm-sh/nvm) 或 [nvm-windows](https://github.com/coreybutler/nvm-windows) 在同一台电脑中管理多个Node版本
:::

## 准备工作
在开始之前，请先将项目clone到你的工作目录,然后安装必须的npm包
```
npm install
```

## 开发模式
项目中预写了一个简单的button组件，现在你可以运行:npm run dev查看项目运行效果  
Vue-componet-template 启用了热更新模式，现在你尝试对组件改动，浏览器将自动刷新页面
```
npm run dev
```

## 打包演示文件
假设现在你已经开发完了组件,并想要向其他开发伙伴展示组件效果  
你可以像开发Vue项目一样在examples文件夹下编写演示效果  
在确保演示效果完成后，运行npm run build:examples打包一个演示文件  
当然如果你和你的小伙伴是在同一局域网下，你也可以直接将devServer的url发送给其他人
```
npm run build:examples
```
这将会在你的项目根目录下产生一个dist文件夹，你可以将这个文件夹部署到网站或者直接将它发送给你的小伙伴

## 打包发布文件
在src目录下编写组件代码  
现在你们的开发团队看过了组件效果之后，一致认为可以发布组件了。那么请运行 npm run build:lib 打包最终的发布包吧
```
npm run build:lib
```
这将会在你的项目根目录下产生一个lib文件夹，这就是你要发布的组件包了