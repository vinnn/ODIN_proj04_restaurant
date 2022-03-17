
export default function displayHome() {

    console.log("in displayHome");

    const div_home = document.createElement("div");
    div_home.id = "div-home";
    div_home.textContent = "Curry Express";

    const cont_page = document.getElementById("cont-page");
    cont_page.appendChild(div_home);


}