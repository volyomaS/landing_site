function pop() {
    let modal = document.getElementById('pop_div');
    let btn = document.getElementById('santasale');
    let span = document.getElementsByClassName("buttonClose")[0];
    btn.onclick = function () {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}