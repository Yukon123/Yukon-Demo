## babel各插件的作用


1. **@babel/cli**: Babel 的命令行接口 (CLI)，允许你在命令行中使用 Babel 来编译代码。
2. **@babel/core**: Babel 的核心库，包含了 Babel 的主要功能和 API。
3. **@babel/node**: 一个命令行工具，类似于 Node.js，但它会在运行时使用 Babel 来编译代码。这对于在开发环境中使用最新的 JavaScript 特性非常有用。
4. **@babel/preset-env**: 一个 Babel 预设，允许你使用最新的 JavaScript 特性，而无需手动指定每个语法转换。它会根据你的目标环境自动确定需要的转换。

这些依赖项一起工作，可以让你在项目中使用最新的 JavaScript 特性，同时确保代码能够在不同的环境中运行。


## babel.config.json的作用

**corejs** 并不能直接配置为 `3`, 而是要通过 `npm ls core-js` 查询corejs的版本进行配置，否则的话自动引入就会不成功

## 命令解释

```package.json
{
  "scripts": {
    "dev": "babel-node src/index.js", // Use babel-node to transpile and run the code
    "show": "npx babel src/index.js", // Show Babel's output
  },
}
```