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



//--------------------------------------------------
        
        //SETค่าN
        const setNRef = ref(db, 'Setnpk/SetN');
        const setN = document.getElementById('setN');


        onValue(setNRef, (snapshot) => {
            const valueN = snapshot.val();
            setN.value = valueN;
        });

        setN.addEventListener('input', (event) => {
            
            const newValueN = event.target.value;
            const numberValueN = parseInt(newValueN);

            set(setNRef, numberValueN);
        });
//--------------------------------------------------
        
        //SETค่าP
        const setPRef = ref(db, 'Setnpk/SetP');
        const setP = document.getElementById('setP');


        onValue(setPRef, (snapshot) => {
            const valueP = snapshot.val();
            setP.value = valueP;
        });
        setP.addEventListener('input', (event) => {
            
            const newValueP = event.target.value;
            const numberValueP = parseInt(newValueP);

            set(setPRef, numberValueP);
        });
//--------------------------------------------------
        
        //SETค่าK
        const setKRef = ref(db, 'Setnpk/SetK');
        const setK = document.getElementById('setK');


        onValue(setKRef, (snapshot) => {
            const valueK = snapshot.val();
            setK.value = valueK;
        });
        setK.addEventListener('input', (event) => {
            
            const newValueK = event.target.value;
            const numberValueK = parseInt(newValueK);

            set(setKRef, numberValueK);
        });

//----------------------------------------------------

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

//----------------------------------------------------
// สร้างอ้างอิงไปยังพาทที่คุณต้องการในฐานข้อมูล
const checkboxRefN = ref(db, 'button/pumN');
const checkboxRefP = ref(db, 'button/pumP');
const checkboxRefK = ref(db, 'button/pumK');

// สร้างฟังก์ชันที่จะถูกเรียกเมื่อสถานะของ checkbox เปลี่ยนแปลง
function handleCheckboxChangeN(event) {
    // อัปเดตค่าในฐานข้อมูลด้วยสถานะใหม่ของ checkbox
    set(checkboxRefN, event.target.checked);
}

function handleCheckboxChangeP(event) {
    set(checkboxRefP, event.target.checked);
}

function handleCheckboxChangeK(event) {
    set(checkboxRefK, event.target.checked);
}

// รับค่าจากฐานข้อมูลและตั้งค่าสถานะของ checkbox
onValue(checkboxRefN, (snapshot) => {
    const checkbox = document.getElementById('buton_N');
    checkbox.checked = snapshot.val();
});

onValue(checkboxRefP, (snapshot) => {
    const checkbox = document.getElementById('buton_P');
    checkbox.checked = snapshot.val();
});

onValue(checkboxRefK, (snapshot) => {
    const checkbox = document.getElementById('buton_K');
    checkbox.checked = snapshot.val();
});

// เชื่อมต่อ checkbox กับฟังก์ชัน handleCheckboxChange
const checkboxN = document.getElementById('buton_N');
checkboxN.addEventListener('change', handleCheckboxChangeN);

const checkboxP = document.getElementById('buton_P');
checkboxP.addEventListener('change', handleCheckboxChangeP);

const checkboxK = document.getElementById('buton_K');
checkboxK.addEventListener('change', handleCheckboxChangeK);
