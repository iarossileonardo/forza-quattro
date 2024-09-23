const container  = document.querySelector('.container');

creazioneTabella();

function creazioneTabella(){
    const table = document.createElement('table');
    let num = 0;
    let btnNum = 0
    table.classList.add('table');
    for(let i = 0; i < 7; i++){
        const row = document.createElement('tr');
        for(let j = 0; j < 7; j++){
            const element = document.createElement('td');
            element.classList.add('dimensioni');
            element.classList.add('bordi');
            element.classList.add('casella');
            element.id = `${i}-${j}`;
            if(!element.id.startsWith(5))
                element.classList.add('sospesa');
            if(i === 6){
                element.style.backgroundColor = 'white'
                element.id = btnNum;
                element.addEventListener('click', (event) => {
                    gestisciSel(event.target.id);
                });
                btnNum++;
            }
            else
                num++;
            row.appendChild(element);
        }
        row.classList.add('dimensioni')
        row.classList.add('bordi');
        table.appendChild(row);
    }
    table.classList.add('bordi');
    container.appendChild(table);
}

function gestisciSel(id){
    console.log('click' + id);
    let caselle = document.querySelectorAll('.casella');
    caselle = Array.from(caselle);
    caselle = caselle.filter(caselle => caselle.id.slice(-1) === id); //filtro così ho solo caselle colonna scelta
    caselle.splice(6, 1) //tolgo bottone da array colonna
    for(let i = 5; i > -1; i--){
        if((!caselle[i].classList.contains('presa')) && (!caselle[i].classList.contains('sospesa'))){
            caselle[i].style.backgroundColor = document.querySelector('body').style.backgroundColor;
            caselle[i].classList.add('presa');
            if(i > 0){
                caselle[i - 1].classList.remove('sospesa');
            }
            
            if(controlloVittoria()){
                alert(`Il giocatore ${document.body.style.backgroundColor} ha vinto!`)
                ricaricaPagina();
            }
            break;
        }

    }
    cambiaGiocatore();
}

    function controlloVittoria() {
        const caselle = document.querySelectorAll('.casella');
        const griglia = Array.from(caselle).slice(0, -7); // Escludo pulsanti
        const righe = 6;
        const colonne = 7;
        const coloreCorrente = document.body.style.backgroundColor;
    
        //a b c d sono le quattro caselle che vengono controllate
        function controllaSequenza(a, b, c, d) {
            return (a.style.backgroundColor === coloreCorrente && b.style.backgroundColor === coloreCorrente && c.style.backgroundColor === coloreCorrente && d.style.backgroundColor === coloreCorrente);
        }

        //r index righe, c index colonne
    
        // Controllo orizzontale
        for (let r = 0; r < righe; r++) {
            for (let c = 0; c < colonne - 3; c++) {
                if (controllaSequenza(griglia[r*7+c], griglia[r*7+c+1], griglia[r*7+c+2], griglia[r*7+c+3])) {
                    return true;
                }
            }
        }
    
        // Controllo verticale
        for (let r = 0; r < righe - 3; r++) {
            for (let c = 0; c < colonne; c++) {
                if (controllaSequenza(griglia[r*7+c], griglia[(r+1)*7+c], griglia[(r+2)*7+c], griglia[(r+3)*7+c])) {
                    return true;
                }
            }
        }
    
        // Controllo diagonale ascendente
        for (let r = 3; r < righe; r++) {
            for (let c = 0; c < colonne - 3; c++) {
                if (controllaSequenza(griglia[r*7+c], griglia[(r-1)*7+c+1], griglia[(r-2)*7+c+2], griglia[(r-3)*7+c+3])) {
                    return true;
                }
            }
        }
    
        // Controllo diagonale discendente
        for (let r = 0; r < righe - 3; r++) {
            for (let c = 0; c < colonne - 3; c++) {
                if (controllaSequenza(griglia[r*7+c], griglia[(r+1)*7+c+1], griglia[(r+2)*7+c+2], griglia[(r+3)*7+c+3])) {
                    return true;
                }
            }
        }
    
        return false;
    }

async function ricaricaPagina(){
    await sleep(3000);

    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    location.reload();
}


function cambiaGiocatore(){
    const body = document.querySelector('body');
    if(body.style.backgroundColor === 'red')
        body.style.backgroundColor = 'blue';
    else
        body.style.backgroundColor = 'red';
}