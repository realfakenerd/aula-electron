const { ipcRenderer, shell } = require('electron');
const node = require('process');

let linkFechar = document.querySelector('#link-fechar');
let verElectron = document.querySelector('#ver-electron');
let linkGit = document.querySelector('#link-github');

linkFechar.addEventListener('click', function () {
    ipcRenderer.send('fechar-janela-sobre')
});
window.onload = function () {
    verElectron.textContent = process.versions.electron;
}
linkGit.addEventListener('click', function () {
    shell.openExternal('https://google.com');
})