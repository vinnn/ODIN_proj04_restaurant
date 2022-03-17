export default function displayContact() {

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%    
    // general menu containers
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   
    const cont_page = document.getElementById("cont-page");
    
    const div_contact_title = document.createElement("div");
    div_contact_title.id = "div-contact-title";
    div_contact_title.textContent = "Contact";
    cont_page.appendChild(div_contact_title);

    const div_contacts = document.createElement("div");
    div_contacts.id = "div-contacts";
    cont_page.appendChild(div_contacts);

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // Contact data
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%    
    const email = "curry@bestfood.com";
    const address = "123 Foody Road, Hunger Town, ABC987";
    
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // display contact details 
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    // div email 
    const div_email = document.createElement("div");
    div_email.classList.add('div-contact');
    div_email.textContent = "EMAIL : " + email;
    div_contacts.appendChild(div_email);

    // div address 
    const div_address = document.createElement("div");
    div_address.classList.add('div-contact');
    div_address.textContent = "ADDRESS : " + address;
    div_contacts.appendChild(div_address);
}

