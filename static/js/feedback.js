function onSend() {
    document.getElementById("sent").style.display = "block"
    document.getElementById("send-button").style.display = "none"
    let inputArea = document.getElementById("input-area")
    inputArea.style.display = "none"

    console.log(inputArea.value)
}