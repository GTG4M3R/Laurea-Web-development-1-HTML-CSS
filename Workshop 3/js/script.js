// ================================
// Harjoitus 1: Klikkaus
// ================================

const clickButton = document.querySelector("#clickButton");
const tableButton = document.querySelector("#tableButton");

clickButton.onclick = function() {
    alert("You clicked me!");
};

tableButton.onclick = showTable;

function showTable() {
    const animal = "Tiikeri";
    const habitat = "Metsä";
    const diet = "Liha";

    const animal2 = "Norsu";
    const habitat2 = "Savanni";
    const diet2 = "Kasvit";

    const table = `
        <table border="1">
            <tr>
                <th>Eläin</th>
                <th>Elinympäristö</th>
                <th>Ruokavalio</th>
            </tr>
            <tr>
                <td>${animal}</td>
                <td>${habitat}</td>
                <td>${diet}</td>
            </tr>
            <tr>
                <td>${animal2}</td>
                <td>${habitat2}</td>
                <td>${diet2}</td>
            </tr>
        </table>
    `;

    const tableContainer = document.querySelector("#tableContainer");

    tableContainer.innerHTML = table;
};


// ================================
// Harjoitus 2: Kuuntelijat ja DOM
// ================================

const harjoitus1 = document.querySelector("#harjoitus1");
const harjoitus2 = document.querySelector("#harjoitus2");

harjoitus2.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});

harjoitus1.addEventListener("click", function() {
    harjoitus1.style.color = "red";
    harjoitus1.innerHTML = "Bye bye mouse!";
});


// ================================
// Harjoitus 3: Syöttötapahtumat
// ================================

const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");
const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");

feedback.addEventListener("focus", function() {
    status.innerHTML = "Kirjoita palautteesi tähän.";
    feedback.style.backgroundColor = "lightyellow";
});

feedback.addEventListener("blur", function() {
    status.innerHTML = "";
    feedback.style.backgroundColor = "white";
});

feedback.addEventListener("input", function() {
    charcount.innerHTML = feedback.value.length + "/200";
    preview.innerHTML = feedback.value;
});


// ================================
// Harjoitus 4: Lomakkeen lähetys
// ================================

const feedbackForm = document.querySelector("#feedbackForm");
const error = document.querySelector("#error");

feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const palaute = feedback.value.trim();

    if (palaute.length < 10 || palaute.length > 200) {
        error.innerHTML = "Palautteen pitää olla 10–200 merkkiä pitkä.";
    } else {
        error.innerHTML = "";
        feedback.value = "";

        status.innerHTML = "Thank you for your feedback!";
    }
});


// ================================
// Harjoitus 5: Näppäimistötapahtumat
// ================================

document.addEventListener("keydown", function(event) {
    console.log(event);

    document.querySelector("#keyinfo").innerHTML =
        "Painettu näppäin: " + event.key + "<br>" +
        "Näppäinkoodi: " + event.code;

    document.querySelector("#keybox").innerHTML =
        event.key.toUpperCase();
});


// ================================
// Harjoitus 5: Näppäimistötapahtumat
// ================================

let painallukset = 0;

document.addEventListener("keydown", function(event) {
    console.log(event);

    painallukset++;

    const keybox = document.querySelector("#keybox");
    const keyinfo = document.querySelector("#keyinfo");
    const keycount = document.querySelector("#keycount");
    const modifierinfo = document.querySelector("#modifierinfo");

    keyinfo.innerHTML =
        "Painettu näppäin: " + event.key + "<br>" +
        "Näppäinkoodi: " + event.code;

    keybox.innerHTML = event.key.toUpperCase();

    keycount.innerHTML =
        "Näppäimiä painettu: " + painallukset;

    modifierinfo.innerHTML =
        "Shift: " + (event.shiftKey ? "kyllä" : "ei") + " | " +
        "Ctrl: " + (event.ctrlKey ? "kyllä" : "ei") + " | " +
        "Alt: " + (event.altKey ? "kyllä" : "ei");

    if (event.key === "Enter") {
        keybox.style.backgroundColor = "lightgreen";
    } else if (event.key === "Escape") {
        keybox.style.backgroundColor = "lightcoral";
    } else if (event.shiftKey) {
        keybox.style.backgroundColor = "lightyellow";
    } else if (event.ctrlKey) {
        keybox.style.backgroundColor = "lightblue";
    } else if (event.altKey) {
        keybox.style.backgroundColor = "plum";
    } else {
        keybox.style.backgroundColor = "lightgray";
    }
});


// ================================
// Bonusharjoitus: Google Maps ja sijainti
// ================================

const locationButton = document.querySelector("#locationButton");
const locationInfo = document.querySelector("#locationInfo");

locationButton.addEventListener("click", function() {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            console.log("Latitude:", lat);
            console.log("Longitude:", lon);

            locationInfo.innerHTML =
                "Sijainti löytyi. Avataan Google Maps...";

            const url = `https://www.google.com/maps?q=${lat},${lon}`;

            window.location.href = url;
        },

        function(error) {
            console.log("Sijaintia ei voitu hakea:", error.message);

            locationInfo.innerHTML =
                "Sijaintia ei voitu hakea.";
        }
    );
});