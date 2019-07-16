const moment = require('moment');

let segundos;
let timer;
module.exports = {
    iniciar(el) {
        let tempo = moment.duration(el.textContent);
        segundos = tempo.asSeconds();
        clearInterval(timer);
        timer = setInterval(() => {
            segundos++;
            el.textContent = this.secToTime(segundos);
        }, 1000);
    },
    secToTime(segundos){
        return moment().startOf('day').seconds(segundos).format('HH:mm:ss');
    },
    parar(){
        clearInterval(timer);
    }
}