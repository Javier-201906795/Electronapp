const { app, BrowserWindow } = require('electron');
const { contextIsolated } = require('process');

let mainWindow = null;



app.on('ready', () => {
    mainWindows = new BrowserWindow({
        // webPreferences:{
        //     nodeIntegration: true,
        //     contextIsolated: false
        // }
    })
    mainWindows.loadFile(__dirname + '/index.html')
    
})

console.log("Iniciando")