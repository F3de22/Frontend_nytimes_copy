// display data corrente
let todayDate= document.getElementById('data');
let todayDate2= document.getElementById('data2');
let today = new Date();
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let weekday= daysOfWeek[today.getDay()];
let day=`${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;
let month= today.toLocaleString('en-EN', { month: 'long' });
let year=`${today.getFullYear() < 10 ? "0" : ""}${today.getFullYear()}`;

todayDate.textContent = `${weekday} , ${month} ${day}, ${year}`;
todayDate2.textContent = `${weekday} , ${month} ${day}, ${year}`;


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


//fissa il menu in alto dopo lo scroll della pagina
function handleScroll() {
    if (window.scrollY > 190) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        document.getElementById('navbar_top').style.boxShadow="0 0 5px 1px rgba(0, 0, 0, 0.28)";
    } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
        document.getElementById('navbar_top').style.boxShadow="none";
        document.body.style.paddingTop = 170 + 'px';
    }
}
function checkScreenWidth() {
    if (window.matchMedia('(min-width: 991px)').matches) {
        window.addEventListener('scroll', handleScroll);
    } else {
        window.removeEventListener('scroll', handleScroll);
        // If the navbar is not fixed when the screen is minimized
        navbar.classList.remove('fixed-top');
        document.body.style.paddingTop = '0';
    }
}
checkScreenWidth();
window.addEventListener('resize', checkScreenWidth);