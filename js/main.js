// Inizializzo e assegno le variabili per la scelta dell'utente e per inserire elementi nel DOM
const userChoice = document.getElementById(`game-option`);
const gridElement = document.getElementById(`grid`); 

// Aggiungo la funzione di click per stampare nel DOM gli elementi in base alla scelta dell'utente
document.getElementById(`play`).addEventListener(`click`, function(){
    document.getElementById(`play`).classList.add(`d-none`);

    let numberGrids = 0;

    if (userChoice.value == `easy`){
        numberGrids = 100;
    } else if (userChoice.value == `medium`){
        numberGrids = 80;
    } else if (userChoice.value == `hard`){
        numberGrids = 50;
    }

    for (i = 1 ; i < numberGrids + 1 ; i++){
        let newDiv = document.createElement(`div`);
        newDiv.classList.add(`box`);
        newDiv.innerHTML+= i;
        gridElement.appendChild(newDiv);

        // Aggiungo la funzione di click per attivare e disattivare la classe box-blue
        newDiv.addEventListener(`click`, function(){
            newDiv.classList.toggle(`box-blue`)
        })
    }

})

// Aggiungo la funzione di click per resettare tutto il contenuto
document.getElementById(`reset`).addEventListener(`click`, function(){
    gridElement.innerHTML=``;
    document.getElementById(`play`).classList.remove(`d-none`)

})
