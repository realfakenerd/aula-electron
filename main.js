const {app, BrowserWindow} = require('electron');

let mainWindow = null;
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    })
})