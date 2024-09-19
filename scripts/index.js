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
    caselle = caselle.filter(caselle => caselle.id.slice(-1) === id);
    caselle.splice(6, 1)
    for(let i = 5; i > -1; i--){
        if((!caselle[i].classList.contains('presa')) && (!caselle[i].classList.contains('sospesa'))){
            caselle[i].style.backgroundColor = document.querySelector('body').style.backgroundColor;
            caselle[i].classList.add('presa');
            if(i > 0){
                caselle[i - 1].classList.remove('sospesa');
            }
            
            controlloVittoria();
            break;
        }

    }
    cambiaGiocatore();
}

function controlloVittoria(riga, colonna, colore) {
    //TODO
}


function cambiaGiocatore(){
    const body = document.querySelector('body');
    if(body.style.backgroundColor === 'red')
        body.style.backgroundColor = 'blue';
    else
        body.style.backgroundColor = 'red';
}