const {app, BrowserWindow} = require('electron');

let mainWindow = null;
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    });
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});

app.on('window-all-closed', () =>{
    app.quit();
});