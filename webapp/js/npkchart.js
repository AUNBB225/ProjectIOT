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

// ดึงข้อมูลจาก Firebase
// ดึงข้อมูลจาก Firebase
const NitrogenRef = ref(db, 'npksensor/N');
const PhosphorusRef = ref(db, 'npksensor/P');
const PotassiumRef = ref(db, 'npksensor/K');

let N, P, K;

onValue(NitrogenRef, (snapshot) => {
    N = snapshot.val();

    // JS
var value = Math.round(Math.random() * 14);

var chart1 = JSC.chart(
  'chartN',
  JSC.merge(defaultOptions(), {
    defaultPoint: {
      marker: {
        outline: { width: 5, color: 'currentColor' },
        rotate: 'auto',
        type: 'triangle',
        size: 5
      }
    },
    series: [{ points: [{ x: 0.45, y: N  }] }]
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
        { value: [0, 150], color: '#00CCFF' },
        { value: [150, 350], color: '#0066FF' },
        { value: [350, 500], color: '#0000FF' }
        
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
      scale: { range: [0, 500], interval: 100 }
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
    
});

onValue(PhosphorusRef, (snapshot) => {
    P = snapshot.val();

     // JS
var value = Math.round(Math.random() * 14);

var chart2 = JSC.chart(
  'chartP',
  JSC.merge(defaultOptions(), {
    defaultPoint: {
      marker: {
        outline: { width: 5, color: 'currentColor' },
        rotate: 'auto',
        type: 'triangle',
        size: 5
      }
    },
    series: [{ points: [{ x: 0.45, y: P  }] }]
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
        { value: [0, 150], color: '#DAA520' },
        { value: [150, 350], color: '#B8860B' },
        { value: [350, 500], color: '#8B4513' }
        
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
      scale: { range: [0, 500], interval: 100 }
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

});

onValue(PotassiumRef, (snapshot) => {
    K = snapshot.val();

   // JS
var value = Math.round(Math.random() * 14);

var chart3 = JSC.chart(
  'chartK',
  JSC.merge(defaultOptions(), {
    defaultPoint: {
      marker: {
        outline: { width: 5, color: 'currentColor' },
        rotate: 'auto',
        type: 'triangle',
        size: 5
      }
    },
    series: [{ points: [{ x: 0.45, y: K  }] }]
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

        { value: [0, 150], color: '#ADFF2F' },
        { value: [150, 350], color: '#7CFC00' },
        { value: [350, 500], color: '#00FF00' }
        
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
      scale: { range: [0, 500], interval: 100 }
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
    
});
