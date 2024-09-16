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
            element.id = num;
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
    let caselle = document.querySelectorAll('casella')
}

function cambiaGiocatore(){
    const body = document.querySelector('body');
    if(body.style.backgroundColor === 'red')
        body.style.backgroundColor = 'blue';
    else
        body.style.backgroundColor = 'red';
}