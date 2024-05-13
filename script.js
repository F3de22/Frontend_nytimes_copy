// display data corrente
let todayDate= document.getElementById('data');
let today = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekday= daysOfWeek[today.getDay()];
let day=`${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
let month= today.toLocaleString('en-EN', { month: 'long' });
let year=`${today.getFullYear() < 10 ? "0" : ""}${today.getFullYear()}`;

todayDate.textContent = `${weekday} , ${month} ${day}, ${year}`;


// fa comparire barra di ricerca sul click della lente di ingrandimento
function showSearchbar() {
    let node = document.getElementById('search_navigation');
    if (node.style.display === 'block') {
        node.style.display = 'none';
    }
    else
        node.style.display = 'block'
}


//cancella testo scritto in barra di ricerca
const go = document.querySelector('#go');
const textInput = document.querySelector('#search-bar');
function cancel(event){
    textInput.value='';
}