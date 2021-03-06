
let messagePrice;

const outputNameSurnameUser = document.getElementById('output-name');

const outputPriceTicket = document.getElementById('ticket-price');

const outputTrainCarriage = document.getElementById('train-carriage');

const generatorTicket = document.querySelector('#button-generator');


generatorTicket.addEventListener('click', function(){
    console.log(document.getElementById('km-number').value);
    console.log(document.getElementById('age-user').value);
    console.log(document.getElementById('name-surname').value);

    //OUTPUT NAME/SURNAME PASSENGER
    outputNameSurnameUser.innerText = (document.getElementById('name-surname').value);

    // KM NUMBER
    const kmNumber = document.querySelector('#km-number').value;

    // USER AGE
    const userAge = document.querySelector('#age-user').value;

    // CALCULATION TICKET PRICE
    let ticketFinalPrice = (kmNumber * 0.26);

    // TICKET PRICE DECIMALS
    let ticketPriceDecimals = ticketFinalPrice.toFixed(2);
    console.log ('il prezzo iniziale è: ' + ticketPriceDecimals + '€');

    if(userAge < 18) {

        //PRICE < 18
        ticketFinalPrice = ticketFinalPrice - ( ( ticketFinalPrice * 15 ) / 100);
        messagePrice = 'Essendo minorenne il prezzo è: ' + ticketFinalPrice.toFixed(2) + '€';

    }   else if(userAge >= 65){

        //PRICE >= 65
        ticketFinalPrice = ticketFinalPrice - ( ( ticketFinalPrice * 35 ) / 100);
        messagePrice = 'Essendo over 65 il prezzo è: ' + ticketFinalPrice.toFixed(2) + '€';

    }   else {

        //PRICE RANGE 18 TO 64
        messagePrice = 'il prezzo è: ' + ticketFinalPrice.toFixed(2) + '€';
    }
    console.log (messagePrice)

    //OUTPUT PRICE
    outputPriceTicket.innerText = (ticketFinalPrice.toFixed(2)+ '€');

    //OUTPUT TRAIN CARRIAGE
    outputTrainCarriage.innerText = Math.floor((Math.random() * 10) + 1);
})