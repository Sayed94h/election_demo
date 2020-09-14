

'user-strict';

let personA = 0;
let personB = 0;

let state = {
    A: 0,
    B: 0,
    winner: ""

};

function personAVot(){
    personA++;
    state.A = personA;
    return personA;
    
}

function personBVot(){
    personB++;
    state.B = personB;
    return personB;
}

state.A = personA;
state.B = personB;
function displayVots(){

    alert('personA vots: '+ personA + '\n'+ 'personB vots: '+ personB);

}

function winner(){
debugger;

    if(personA > personB){

        let dif = personA - personB;
        let createSec = document.createElement('section');
        createSec.style.marginTop = '20vh';
        let createH2 = document.createElement('h2');
        createH2.style.padding = "10vh";
        createH2.style.color = "#fff";
        createH2.style.fontSize = "1.5em";
        createSec.style.background = "#f0a";
        createH2.innerHTML = `PersonA won the election with ${personA} vots which is ${dif} times more than PersonB!`;
       
        document.body.appendChild(createSec);
        createSec.appendChild(createH2);
        state.winner = "PersonA";
        return createSec;
    } else if(personB > personA){
        let dif = personB - personA;
        let createSec = document.createElement('section');
        createSec.style.marginTop = '20vh';
        let createH2 = document.createElement('h2');
        createH2.style.padding = "10vh";
        createH2.style.color = "#fff";
        createH2.style.fontSize = "1.5em";
        createSec.style.background = "#080";
        createH2.innerHTML = `PersonB won the election with ${personB} vots which is ${dif} times more than PersonA!`;
        
        document.body.appendChild(createSec);
        createSec.appendChild(createH2);
        state.winner = "PersonB";
        return createSec;
    } else {
        let createSec = document.createElement('section');
        createSec.style.marginTop = '20vh';
        let createH2 = document.createElement('h2');
        createH2.style.padding = "10vh";
        createH2.style.color = "#fff";
        createH2.style.fontSize = "1.5em";
        createSec.style.background = "#f00";
        createH2.innerHTML = "Both have the same number of vots. So, we have to start a new election!";
        
        document.body.appendChild(createSec);
        createSec.appendChild(createH2);
        state.winner = "None of them!";
        return createSec;
    }
}

console.log('the data from state: '+ state); // I want to log the state with its updated properties value but it logs [Object Object]