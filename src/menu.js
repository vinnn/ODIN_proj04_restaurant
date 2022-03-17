
export default function displayMenu() {

    console.log("in displayMenu");

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%    
    // general menu containers
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   
    const cont_page = document.getElementById("cont-page");
    
    const div_menu_title = document.createElement("div");
    div_menu_title.id = "div-menu-title";
    div_menu_title.textContent = "Menu";
    cont_page.appendChild(div_menu_title);

    const div_menus = document.createElement("div");
    div_menus.id = "div-menus";
    cont_page.appendChild(div_menus);

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // Menu data
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%    
    const menus = {
        "curry Earth" : ["Raj Kachori – Regal street food, large wheat puri filled with goodies, splashed with chutneys", "Roast Duck Vindaloo – the proper Goan Vindaloo", "Kulfi and Coffee or Tea"],
        
        "curry Wind" : ["Tandoori Wild Tiger Prawns with coriander, mint & chili Kerala style spicy Quail with Madras Shallots & Coconut flakes", "Roast Halibut Karaikal with Pandan Leaf", "Gulabjam Sweet and Coffee or Tea"],

        "curry Fire" : ["Kerala style spicy Quail with Madras Shallots & Coconut flakes Smoked Chicken Tikka with garam masala & mace", "Speciality Prawn curry from the kitchen of Raja of Travancore, with coconut & kokum flowers", "Gulabjam Sweet and Coffee or Tea"]
    }

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // display individual menus 
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    for (let menu in menus) {

        // div menu 
        const div_menu = document.createElement("div");
        div_menu.classList.add('div-menu');

        // div menu title 
        const div_menu_name = document.createElement("div");
        div_menu_name.classList.add('div-menu-name');
        div_menu_name.textContent = menu;
        div_menu.appendChild(div_menu_name);

        // div menu list
        const ul_menu = document.createElement("ul");
        div_menu.appendChild(ul_menu);

        for (let idi=0; idi<menus[menu].length; idi++) {
            const li_menu = document.createElement("li");    
            li_menu.textContent = menus[menu][idi];
            ul_menu.appendChild(li_menu);
        }

        div_menus.appendChild(div_menu);     
    }

}