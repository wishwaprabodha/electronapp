const {app,BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
    //creates browser widow
    win = new BrowserWindow({width : 1280, height :720, icon: __dirname + '/img/181526.svg'});
    
    //load index.html
    win.loadURL(url.format({
        pathname : path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Open devtools
    //win.webContents.openDevTools();

    win.on('closed', ()=> {
        win = null;
    });
}

// Run create window
app.on('ready', createWindow);

//Quit when all windows are closed

app.on('window-all-closed', ()=>{
    if(process.platform !== 'win32')
    app.quit();
});
