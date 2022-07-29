// https://www.calculatorsoup.com/calculators/physics/ideal-gas-law.php

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const pressureRadio = document.getElementById('pressureRadio');
const volumeRadio = document.getElementById('volumeRadio');
const molesRadio = document.getElementById('molesRadio');
const temperatureRadio = document.getElementById('temperatureRadio');

const R = 8.31446261815324;
let pressure;
let volume = v1;
let moles = v2;
let temperature = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

pressureRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Volume (m³)';
  variable2.textContent = '(n) Moles (mol)';
  variable3.textContent = '(T) Temperature (K)';
  volume = v1;
  moles = v2;
  temperature = v3;
  result.textContent = '';
});

volumeRadio.addEventListener('click', function() {
  variable1.textContent = '(P) Pressure (pa)';
  variable2.textContent = '(n) Moles (mol)';
  variable3.textContent = '(T) Temperature (K)';
  pressure = v1;
  moles = v2;
  temperature = v3;
  result.textContent = '';
});

molesRadio.addEventListener('click', function() {
  variable1.textContent = '(P) Pressure (pa)';
  variable2.textContent = '(V) Volume (m³)';
  variable3.textContent = '(T) Temperature (K)';
  pressure = v1;
  volume = v2;
  temperature = v3;
  result.textContent = '';
});

temperatureRadio.addEventListener('click', function() {
  variable1.textContent = '(P) Pressure (pa)';
  variable2.textContent = '(V) Volume (m³)';
  variable3.textContent = '(n) Moles (mol)';
  pressure = v1;
  volume = v2;
  moles = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(pressureRadio.checked)
    result.textContent = `Pressure = ${computePressure().toFixed(2)} pa`;

  else if(volumeRadio.checked)
    result.textContent = `Volume = ${computeVolume().toFixed(2)} m³`;

  else if(molesRadio.checked)
    result.textContent = `Moles = ${computeMoles().toFixed(2)} mol`;

  else if(temperatureRadio.checked)
    result.textContent = `Temperature = ${computeTemperature().toFixed(2)} K`;
})

// calculation

function computePressure() {
  return (Number(moles.value) * R * Number(temperature.value)) / Number(volume.value);
}

function computeVolume() {
  return (Number(moles.value) * R * Number(temperature.value)) / Number(pressure.value);
}

function computeMoles() {
  return (Number(pressure.value) * Number(volume.value)) / (R * Number(temperature.value));
}

function computeTemperature() {
  return (Number(pressure.value) * Number(volume.value)) / (R * Number(moles.value));
}