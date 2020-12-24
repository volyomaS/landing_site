function pop(isLandingPage) {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has("input-area")) {
        let msg = document.getElementById("pop-sent");
        let span = document.getElementById("closePop2");
        let sentText = document.getElementById("sent-text")
        msg.style.display = "block"
        span.onclick = function () {
            msg.style.display = "none";
        }
        let text = document.createTextNode(urlParams.get("input-area"))
        sentText.appendChild(text)
        window.onclick = function (event) {
            if (event.target == msg) {
                msg.style.display = "none";
            }
        }
        return
    }

    if (!isLandingPage) return

    let modal = document.getElementById('pop_div');
    let span = document.getElementById("closePop1");
    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
