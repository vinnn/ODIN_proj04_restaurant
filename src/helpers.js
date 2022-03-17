
function clearContentOf(elt_id) {

    console.log("in clearchi");

    const elt = document.getElementById(elt_id);
    while (elt.lastChild) {
        elt.removeChild(elt.lastChild);
    }
}

export { clearContentOf }
