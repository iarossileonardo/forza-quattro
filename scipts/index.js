const container  = document.querySelector('.container');

creazioneTabella();

function creazioneTabella(){
    const table = document.createElement('table');
    let num = 0;
    table.classList.add('table');
    for(let i = 0; i < 6; i++){
        const row = document.createElement('tr');
        for(let j = 0; j < 7; j++){
            const element = document.createElement('td');
            element.classList.add('dimensioni');
            element.classList.add('bordi');
            element.id = num;
            element.addEventListener('click', (event) => {
                gestisciSel(event.target.id);
            });
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
}