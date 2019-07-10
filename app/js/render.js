const { ipcRenderer } = require('electron');

let $ = document.querySelector.bind(document);

let linkSobre = $('#link-sobre');

linkSobre.addEventListener('click', ()=>{
    ipcRenderer.send('open-janela-sobre');
})