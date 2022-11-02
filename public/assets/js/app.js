const requestURL = "/dictionary.json";
let xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
xhr.responseType = "json";

xhr.onload = function () {
    if (xhr.status !== 200) {
        alert("Une erreur est survenue");
        return;
    }
    let response = xhr.response;
    let word = response.GATE;
    console.log(word);

}
xhr.send();