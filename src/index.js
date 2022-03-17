import displayNavPageFooter from './navpagefooter.js';
import displayHome from './home.js';
import { clearContentOf } from './helpers.js';
import displayMenu from './menu.js';
import displayContact from './contact.js';


displayNavPageFooter();
displayHome();

const nav_btns = document.querySelectorAll('.nav-btn');
nav_btns.forEach( btn => {
    btn.onclick = (e) => {

        clearContentOf('cont-page');

        let btn_name = e.target.id;        
        if (btn_name == "btn-home") {
            displayHome();
        } else if (btn_name == "btn-menu") {
            displayMenu();
        } else if (btn_name == "btn-contact") {
            displayContact();
        }

    }
})



