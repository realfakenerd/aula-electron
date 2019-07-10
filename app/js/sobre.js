const { ipcRenderer, shell } = require('electron');
const node = require('process');

let $ = document.querySelector.bind(document);

let linkFechar = $('#link-fechar');

linkFechar.addEventListener('click', () => {
    ipcRenderer.send('close-janela-sobre')
});

let verElectron = $('#ver-electron');

window.onload = () => {
    verElectron.textContent = process.versions.electron;
}

let linkGit = $('#link-github');

linkGit.addEventListener('click', () => {
    shell.openExternal('https://google.com');
})