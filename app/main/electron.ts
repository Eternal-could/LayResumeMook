/**
 * @description electron 主入口
 */
const path = require('path');
const {app, BrowserWindow} = require('electron');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      // 解决升级警告问题 contextIsolation的默认值已弃用，将从false更改为true
      // contextIsolation是上下文隔离的意思，
      // 原本contextIsolation是有默认值的，默认值为false，现在改为true了
      contextIsolation: false
    },
  });
  mainWindow.loadFile('index.html');
};
app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
