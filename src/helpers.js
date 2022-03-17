function clearContentOf(elt_id) {

    const elt = document.getElementById(elt_id);
    while (elt.lastChild) {
        elt.removeChild(elt.lastChild);
    }
}

export { clearContentOf }
