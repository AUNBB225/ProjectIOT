// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import { set } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlzFuhs6xdfMegTzZBFawvVlj9uPibrmo",
    authDomain: "iotfirebase-96f81.firebaseapp.com",
    databaseURL: "https://iotfirebase-96f81-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "iotfirebase-96f81",
    storageBucket: "iotfirebase-96f81.appspot.com",
    messagingSenderId: "344685924317",
    appId: "1:344685924317:web:eb9ed73ebb2a2d55f97034",
    measurementId: "G-RRYQJNM665"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

//moistrus
const moistureRef = ref(db, 'DTHsensor/moisture');
onValue(moistureRef, (snapshot) => {
    const moisture = snapshot.val();
   
    console.log(moisture);
    document.getElementById('Moistrue').textContent = moisture;
});

//TEM
const temperatureRef = ref(db, 'DTHsensor/temperature');
onValue(temperatureRef, (snapshot) => {
    const TEM = snapshot.val();
   
    console.log(TEM);
    document.getElementById('TEM').textContent = TEM;
});

//humidity
const humidityRef = ref(db, 'DTHsensor/humidity');
onValue(humidityRef, (snapshot) => {
    const humidity = snapshot.val();
   
    console.log(humidity);
    document.getElementById('humidity').textContent = humidity;
});
//autopum
const checkboxpumRef = ref(db, 'button/autopum');

function handleCheckboxChangepum(event) {
    
    set(checkboxpumRef, event.target.checked);
}

onValue(checkboxpumRef, (snapshot) => {
    const checkboxpum = document.getElementById('buton_autopum');
    checkboxpum.checked = snapshot.val();
});

const checkboxpum = document.getElementById('buton_autopum');
checkboxpum.addEventListener('change', handleCheckboxChangepum);