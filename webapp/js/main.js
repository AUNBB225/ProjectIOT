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


//autonpk
const checkboxRef = ref(db, 'button/autonpk');

function handleCheckboxChange(event) {

    set(checkboxRef, event.target.checked);
}

onValue(checkboxRef, (snapshot) => {
    const checkbox = document.getElementById('buton_autonpk');
    checkbox.checked = snapshot.val();
});

const checkbox = document.getElementById('buton_autonpk');
checkbox.addEventListener('change', handleCheckboxChange);

//--------------------------------------------------
const NitrogenRef = ref(db, 'npksensor/N');
onValue(NitrogenRef, (snapshot) => {
    const N = snapshot.val();
   
    console.log(N);
    document.getElementById('Nitrogen').textContent = N;
});

//--------------------------------------------------

const PhosphorusRef = ref(db, 'npksensor/P');
onValue(PhosphorusRef, (snapshot) => {
    const P = snapshot.val();
    
    console.log(P);
    document.getElementById('Phosphorus').textContent = P;
});
//--------------------------------------------------

const PotassiumRef = ref(db, 'npksensor/K');
onValue(PotassiumRef, (snapshot) => {
    const K = snapshot.val();
    
    console.log(K);
    document.getElementById('Potassium').textContent = K;
});