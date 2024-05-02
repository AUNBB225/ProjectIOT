// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import { set } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlzFuhs6xdfMegTzZBFawvVlj9uPibrmo",
  authDomain: "iotfirebase-96f81.firebaseapp.com",
  databaseURL:
    "https://iotfirebase-96f81-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iotfirebase-96f81",
  storageBucket: "iotfirebase-96f81.appspot.com",
  messagingSenderId: "344685924317",
  appId: "1:344685924317:web:eb9ed73ebb2a2d55f97034",
  measurementId: "G-RRYQJNM665",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

//------------moisture-------------------------
const moistureRef = ref(db, "DTHsensor/moisture");
onValue(moistureRef, (snapshot) => {
  const moisture = snapshot.val();
// JS
var value = Math.round(Math.random() * 14);

var chart1 = JSC.chart(
'chartM',
JSC.merge(defaultOptions(), {
defaultPoint: {
  marker: {
    outline: { width: 5, color: 'currentColor' },
    rotate: 'auto',
    type: 'triangle',
    size: 5
  }
},
series: [{ points: [{ x: 0.45, y: moisture  }] }]
})
);


function defaultOptions() {
return {
debug: true,
type: 'gauge ',
animation_duration: 0,
legend_visible: false,
xAxis: {
  scale: {
    // Helps position the marker on top of the y Axis.
    range: [0, 1]
  }
},
palette: {
  pointValue: '%yValue',
  ranges: [
    { value: [0, 25], color: '#00CCFF' },
    { value: [25, 50], color: '#0066FF' },
    { value: [75, 100], color: '#0000FF' }
    
  ]
},
yAxis: {
  defaultTick: {
    // Pads around the gauge
    padding: 0,
    label_visible: false
  },
  line: {
    width: 5,
    // Gaps occur at tick intervals defined below.
    breaks_gap: 0.03,
    color: 'smartPalette'
  },
  scale: { range: [0, 100], interval: 75 }
},
defaultSeries: {
  opacity: 1,
  mouseTracking_enabled: false,
  shape: {
    label: {
      text: '%sum',
      style: { fontSize: '28px' },
      align: 'center',
      verticalAlign: 'middle'
    }
  }
},
};
}
  console.log(moisture);
  document.getElementById("moisture").textContent = moisture;
});

//--------------------------------------------------




//-------------temperature----------------------------
const temperatureRef = ref(db, "DTHsensor/temperature");
onValue(temperatureRef, (snapshot) => {
  const temperature = snapshot.val();
// JS
var value = Math.round(Math.random() * 14);

var chart2 = JSC.chart(
'chartT',
JSC.merge(defaultOptions(), {
defaultPoint: {
  marker: {
    outline: { width: 5, color: 'currentColor' },
    rotate: 'auto',
    type: 'triangle',
    size: 5
  }
},
series: [{ points: [{ x: 0.45, y: temperature  }] }]
})
);


function defaultOptions() {
return {
debug: true,
type: 'gauge ',
animation_duration: 0,
legend_visible: false,
xAxis: {
  scale: {
    // Helps position the marker on top of the y Axis.
    range: [0, 1]
  }
},
palette: {
  pointValue: '%yValue',
  ranges: [
    { value: [0, 25], color: '#00CCFF' },
    { value: [25, 50], color: '#0066FF' },
    { value: [75, 100], color: '#0000FF' }
    
  ]
},
yAxis: {
  defaultTick: {
    // Pads around the gauge
    padding: 0,
    label_visible: false
  },
  line: {
    width: 5,
    // Gaps occur at tick intervals defined below.
    breaks_gap: 0.03,
    color: 'smartPalette'
  },
  scale: { range: [0, 100], interval: 75 }
},
defaultSeries: {
  opacity: 1,
  mouseTracking_enabled: false,
  shape: {
    label: {
      text: '%sum',
      style: { fontSize: '28px' },
      align: 'center',
      verticalAlign: 'middle'
    }
  }
},
};
}
  console.log(temperature);
  document.getElementById("temperature").textContent = temperature;
});

//--------------------------------------------------



//-------------humidity----------------------------
const humidityRef = ref(db, "DTHsensor/humidity");
onValue(humidityRef, (snapshot) => {
  const humidity = snapshot.val();
// JS
var value = Math.round(Math.random() * 14);

var chart3 = JSC.chart(
'chartH',
JSC.merge(defaultOptions(), {
defaultPoint: {
  marker: {
    outline: { width: 5, color: 'currentColor' },
    rotate: 'auto',
    type: 'triangle',
    size: 5
  }
},
series: [{ points: [{ x: 0.45, y: humidity  }] }]
})
);


function defaultOptions() {
return {
debug: true,
type: 'gauge ',
animation_duration: 0,
legend_visible: false,
xAxis: {
  scale: {
    // Helps position the marker on top of the y Axis.
    range: [0, 1]
  }
},
palette: {
  pointValue: '%yValue',
  ranges: [
    { value: [0, 25], color: '#00CCFF' },
    { value: [25, 50], color: '#0066FF' },
    { value: [75, 100], color: '#0000FF' }
    
  ]
},
yAxis: {
  defaultTick: {
    // Pads around the gauge
    padding: 0,
    label_visible: false
  },
  line: {
    width: 5,
    // Gaps occur at tick intervals defined below.
    breaks_gap: 0.03,
    color: 'smartPalette'
  },
  scale: { range: [0, 100], interval: 75 }
},
defaultSeries: {
  opacity: 1,
  mouseTracking_enabled: false,
  shape: {
    label: {
      text: '%sum',
      style: { fontSize: '28px' },
      align: 'center',
      verticalAlign: 'middle'
    }
  }
},
};
}
  console.log(humidity);
  document.getElementById("humidity").textContent = humidity;
});

//--------------------------------------------------

//----------------------------------------------------

        //autopum
        const checkboxRef = ref(db, 'button/autopum');

        function handleCheckboxChange(event) {
            
            set(checkboxRef, event.target.checked);
        }

        onValue(checkboxRef, (snapshot) => {
            const checkbox = document.getElementById('button_autopum');
            checkbox.checked = snapshot.val();
        });

        const checkbox = document.getElementById('button_autopum');
        checkbox.addEventListener('change', handleCheckboxChange);

//----------------------------------------------------

// สร้างอ้างอิงไปยังพาทที่คุณต้องการในฐานข้อมูล
const checkboxRefP1 = ref(db, 'button/pumzone1');
const checkboxRefP2 = ref(db, 'button/pumzone2');


// สร้างฟังก์ชันที่จะถูกเรียกเมื่อสถานะของ checkbox เปลี่ยนแปลง
function handleCheckboxChangeN(event) {
    // อัปเดตค่าในฐานข้อมูลด้วยสถานะใหม่ของ checkbox
    set(checkboxRefP1, event.target.checked);
}

function handleCheckboxChangeP(event) {
    set(checkboxRefP2, event.target.checked);
}



// รับค่าจากฐานข้อมูลและตั้งค่าสถานะของ checkbox
onValue(checkboxRefP1, (snapshot) => {
    const checkbox = document.getElementById('button_P1');
    checkbox.checked = snapshot.val();
});

onValue(checkboxRefP2, (snapshot) => {
    const checkbox = document.getElementById('button_P2');
    checkbox.checked = snapshot.val();
});



// เชื่อมต่อ checkbox กับฟังก์ชัน handleCheckboxChange
const checkboxP1 = document.getElementById('button_P1');
checkboxP1.addEventListener('change', handleCheckboxChangeN);

const checkboxP2 = document.getElementById('button_P2');
checkboxP2.addEventListener('change', handleCheckboxChangeP);


//-------------------การSETค่า----------------------
        
        //SETค่าM
        const setMRef = ref(db, 'Setmoisture/Setmoisture');
        const setM = document.getElementById('setM');
        


        onValue(setMRef, (snapshot) => {
            const valueM = snapshot.val();
            setM.value = valueM;
        });

        setM.addEventListener('input', (event) => {
            
            const newValueM = event.target.value;
            const numberValueM = parseInt(newValueM);

            set(setMRef, numberValueM);
        });
