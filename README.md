VSCODE Debug Guide
---

相关文章：[Visual Studio Code 前端调试不完全指南](http://jerryzou.com/posts/vscode-debug-guide/)

### 安装依赖

```
npm install
# or
yarn
```

### 1. 调试前端代码

1. vscode 安装 `debugger-for-chrome`
2. `npm run frontend`
3. 启动调试配置：“启动一个独立的 Chrome 以调试 frontend”
4. 在 `frontend/index.js` 中加断点
5. 访问 `http://localhost:8091/frontend/`

### 2. 调试通过 Nodemon 启动的 Node 服务器

#### debug 模式

1. `npm run backend:debug`
2. 启动调试配置：“附加于已启动的 Node 服务器（debug模式）”
3. 在 `server/app.js` 中加断点
4. 访问 `http://localhost:8092/`

#### inspect 模式

1. `npm run backend:inspect`
2. 启动调试配置：“附加于已启动的 Node 服务器（inspect模式）”
3. 在 `server/app.js` 中加断点
4. 访问 `http://localhost:8092/`
