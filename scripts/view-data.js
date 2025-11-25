// view-data page logic
// Firebase is initialized in firebase-init.js
const db = window.appUtils.db.get();
const logout = () => window.appUtils.auth.logout();
window.logout = logout;

const dropdownMenu = document.getElementById('fruits-dropdown');
const idDropdown = document.getElementById('id-dropdown');
const dataTypeDropdown = document.getElementById('data-type-dropdown');

window.appUtils.auth.onAuthChange(user => {
  if (!user) return;
  const uid = user.uid;
  const soilDataRef = db.collection('soil_data').where('userId', '==', uid);

  soilDataRef.get().then(querySnapshot => {
    const optionsArray = [];
    querySnapshot.forEach(doc => {
      const fruit = doc.data().fruit;
      if (!optionsArray.includes(fruit)) {
        const option = document.createElement('option');
        option.value = fruit;
        option.text = fruit;
        dropdownMenu.appendChild(option);
        optionsArray.push(fruit);
      }
    });
  });

  dropdownMenu.addEventListener('change', () => {
    const selectedFruit = dropdownMenu.value;
    idDropdown.innerHTML = '';
    const idOptionsArray = [];
    soilDataRef.where('fruit', '==', selectedFruit).get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const id = doc.data().id;
        if (!idOptionsArray.includes(id)) {
          const option = document.createElement('option');
          option.value = id;
          option.text = id;
          idDropdown.appendChild(option);
          idOptionsArray.push(id);
        }
      });
    });
  });
});

const chart = new Chart(document.getElementById('line-chart').getContext('2d'), {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: '',
      data: [],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { type: 'time' }
    }
  }
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    renderChart();
    dropdownMenu.addEventListener('change', renderChart);
    dataTypeDropdown.addEventListener('change', renderChart);
  }
});

function renderChart() {
  const rearrangeDataChronologically = data => data.sort((a, b) => a.x - b.x);
  const selectedFruit = dropdownMenu.value;
  const selectedDataType = dataTypeDropdown.value;
  const selectedId = idDropdown.value;
  const uid = window.appUtils.auth.getCurrentUser().uid;
  const soilDataRef = db.collection('soil_data').where('userId', '==', uid);

  soilDataRef.where('id', '==', selectedId).get().then(querySnapshot => {
    const data = [];
    querySnapshot.forEach(doc => {
      const value = doc.data()[selectedDataType];
      const date = doc.data().Timestamp.toDate();
      data.push({ x: date, y: value });
    });
    const sortedData = rearrangeDataChronologically(data);
    chart.data.datasets[0].label = { text: `${selectedDataType} for ${selectedFruit} and ID ${selectedId}` };
    chart.data.datasets[0].data = sortedData;
    chart.update();
  });
}

const renderChartBtn = document.getElementById('render-chart-btn');
if (renderChartBtn) renderChartBtn.addEventListener('click', renderChart);
