export default function displayNavPageFooter() {

    // container
    const div_content = document.getElementById("content");

    // display nav
    const cont_nav = document.createElement('div');
    cont_nav.id = "cont-nav";

    const btn_home = document.createElement('button');
    btn_home.id = "btn-home";
    btn_home.classList.add('nav-btn');
    btn_home.textContent = "home";
    cont_nav.appendChild(btn_home);

    const btn_menu = document.createElement('button');
    btn_menu.id = "btn-menu";
    btn_menu.classList.add('nav-btn');
    btn_menu.textContent = "menu";
    cont_nav.appendChild(btn_menu);

    const btn_contact = document.createElement('button');
    btn_contact.id = "btn-contact";
    btn_contact.classList.add('nav-btn');
    btn_contact.textContent = "contact";
    cont_nav.appendChild(btn_contact);

    div_content.appendChild(cont_nav);

    // add page content (empty)
    const cont_page = document.createElement('div');
    cont_page.id = "cont-page";
    div_content.appendChild(cont_page);

    // display footer
    const cont_footer = document.createElement('div');
    cont_footer.id = "cont-footer";

    const div_left = document.createElement('div');
    div_left.id = "div-left";
    div_left.classList.add('footer-div');
    div_left.textContent = "Label BestFoodInTown";
    cont_footer.appendChild(div_left);

    const div_right = document.createElement('div');
    div_right.id = "div-right";
    div_right.classList.add('footer-div');
    div_right.textContent = "AnOdinStudentLTD";
    cont_footer.appendChild(div_right);

    div_content.appendChild(cont_footer);
}




