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

//-------DTH-Soil moistrue------------
const statusDRef = ref(getDatabase(), 'status/statusDTH');
let lastUpdateTimeD;
let offlineTimeoutD;

onValue(statusDRef, (snapshot) => {
  clearTimeout(offlineTimeoutD);
  lastUpdateTimeD = new Date().getTime();
  const statusD = snapshot.val();
  if (statusD !== null) {
    document.getElementById("statusD").innerHTML = "Online";
    document.getElementById("status-iconD").innerHTML = `<lord-icon src="https://cdn.lordicon.com/dkhzauae.json" trigger="loop" state="loop-wifi" colors="primary:#30e849" style="width:20px;height:20px"></lord-icon>`;
  } else {
    document.getElementById("statusD").innerHTML = "Offline";
    document.getElementById("status-iconD").innerHTML = `<lord-icon
    src="https://cdn.lordicon.com/keaiyjcx.json"
    trigger="hover"
    state="hover-error-4"
    colors="primary:#e83a30"
    style="width:20px;height:20px">
</lord-icon>`;
  }

  offlineTimeoutD = setTimeout(function () {
    if (new Date().getTime() - lastUpdateTimeD > 3000) {
      document.getElementById("statusD").innerHTML = "Offline";
      document.getElementById("status-iconD").innerHTML = `<lord-icon
      src="https://cdn.lordicon.com/keaiyjcx.json"
      trigger="hover"
      state="hover-error-4"
      colors="primary:#e83a30"
      style="width:20px;height:20px">
  </lord-icon>`;
    }
  }, 3000);
});
//-----NPK sensor--------
const statusNPKRef = ref(getDatabase(), 'status/NPKsensor');
let lastUpdateTimeNPK;
let offlineTimeoutNPK;

onValue(statusNPKRef, (snapshot) => {
  clearTimeout(offlineTimeoutNPK);
  lastUpdateTimeNPK = new Date().getTime();
  const statusNPK = snapshot.val();
  if (statusNPK !== null) {
    document.getElementById("statusNPK").innerHTML = "Online";
    document.getElementById("status-iconNPK").innerHTML = `<lord-icon src="https://cdn.lordicon.com/dkhzauae.json" trigger="loop" state="loop-wifi" colors="primary:#30e849" style="width:20px;height:20px"></lord-icon>`;
  } else {
    document.getElementById("statusNPK").innerHTML = "Offline";
    document.getElementById("status-iconNPK").innerHTML = `<lord-icon
    src="https://cdn.lordicon.com/keaiyjcx.json"
    trigger="hover"
    state="hover-error-4"
    colors="primary:#e83a30"
    style="width:20px;height:20px">
</lord-icon>`;
  }

  offlineTimeoutNPK = setTimeout(function () {
    if (new Date().getTime() - lastUpdateTimeNPK > 3000) {
      document.getElementById("statusNPK").innerHTML = "Offline";
      document.getElementById("status-iconNPK").innerHTML = `<lord-icon
      src="https://cdn.lordicon.com/keaiyjcx.json"
      trigger="hover"
      state="hover-error-4"
      colors="primary:#e83a30"
      style="width:20px;height:20px">
  </lord-icon>`;
    }
  }, 3000);
});

//-----ControPUMNPK--------
const statusControPUMNPKRef = ref(getDatabase(), 'status/ControPUMNPK');
let lastUpdateTimeControPUMNPK;
let offlineTimeoutControPUMNPK;

onValue(statusControPUMNPKRef, (snapshot) => {
  clearTimeout(offlineTimeoutControPUMNPK);
  lastUpdateTimeControPUMNPK = new Date().getTime();
  const statusControPUMNPK = snapshot.val();
  if (statusControPUMNPK !== null) {
    document.getElementById("statusControPUMNPK").innerHTML = "Online";
    document.getElementById("status-iconControPUMNPK").innerHTML = `<lord-icon src="https://cdn.lordicon.com/dkhzauae.json" trigger="loop" state="loop-wifi" colors="primary:#30e849" style="width:20px;height:20px"></lord-icon>`;
  } else {
    document.getElementById("statusControPUMNPK").innerHTML = "Offline";
    document.getElementById("status-iconControPUMNPK").innerHTML = `<lord-icon
    src="https://cdn.lordicon.com/keaiyjcx.json"
    trigger="hover"
    state="hover-error-4"
    colors="primary:#e83a30"
    style="width:20px;height:20px">
</lord-icon>`;
  }

  offlineTimeoutControPUMNPK = setTimeout(function () {
    if (new Date().getTime() - lastUpdateTimeControPUMNPK > 3000) {
      document.getElementById("statusControPUMNPK").innerHTML = "Offline";
      document.getElementById("status-iconControPUMNPK").innerHTML = `<lord-icon
      src="https://cdn.lordicon.com/keaiyjcx.json"
      trigger="hover"
      state="hover-error-4"
      colors="primary:#e83a30"
      style="width:20px;height:20px">
  </lord-icon>`;
    }
  }, 3000);
});

//-----ControPUMWATER--------
const statusControPUMWATERRef = ref(getDatabase(), 'status/ControPUMWATER');
let lastUpdateTimeControPUMWATER;
let offlineTimeoutControPUMWATER;

onValue(statusControPUMWATERRef, (snapshot) => {
  clearTimeout(offlineTimeoutControPUMWATER);
  lastUpdateTimeControPUMWATER = new Date().getTime();
  const statusControPUMWATER = snapshot.val();
  if (statusControPUMWATER !== null) {
    document.getElementById("statusControPUMWATER").innerHTML = "Online";
    document.getElementById("status-iconControPUMWATER").innerHTML = `<lord-icon src="https://cdn.lordicon.com/dkhzauae.json" trigger="loop" state="loop-wifi" colors="primary:#30e849" style="width:20px;height:20px"></lord-icon>`;
  } else {
    document.getElementById("statusControPUMWATER").innerHTML = "Offline";
    document.getElementById("status-iconControPUMWATER").innerHTML = `<lord-icon
    src="https://cdn.lordicon.com/keaiyjcx.json"
    trigger="hover"
    state="hover-error-4"
    colors="primary:#e83a30"
    style="width:20px;height:20px">
</lord-icon>`;
  }

  offlineTimeoutControPUMWATER = setTimeout(function () {
    if (new Date().getTime() - lastUpdateTimeControPUMWATER > 3000) {
      document.getElementById("statusControPUMWATER").innerHTML = "Offline";
      document.getElementById("status-iconControPUMWATER").innerHTML = `<lord-icon
      src="https://cdn.lordicon.com/keaiyjcx.json"
      trigger="hover"
      state="hover-error-4"
      colors="primary:#e83a30"
      style="width:20px;height:20px">
  </lord-icon>`;
    }
  }, 3000);
});