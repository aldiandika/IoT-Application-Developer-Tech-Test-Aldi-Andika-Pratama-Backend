
const sensorData = require("../__mocks__/sensor_data");

exports.sensorAgg = (req, res) => {
  const sensArr = sensorData.array;
  const roomArea1 = "roomArea1";
  const roomArea2 = "roomArea2";
  const roomArea3 = "roomArea3";

  let room1Data = [];
  let room2Data = [];
  let room3Data = [];


  let groupedTimestamp2 = [];
  let groupedTimestamp3 = [];

  let newDataRoom1 = [];
  let newDataRoom2 = [];
  let newDataRoom3 = [];

  // Group by room
  for (let i = 0; i < sensArr.length; i++) {
    if (sensArr[i].roomArea == roomArea1) {
      room1Data.push(sensArr[i]);
    }
    if (sensArr[i].roomArea == roomArea2) {
      room2Data.push(sensArr[i]);
    }
    if (sensArr[i].roomArea == roomArea3) {
      room3Data.push(sensArr[i]);
    }
  }

  // Checking timestamps and create new data room list
  for (let i = 0; i < room1Data.length; i++) {
    let tempSensList = [];
    let humSensList = [];
    let tempSum = 0;
    let humSum = 0;

    for (let k = (i + 1); k < (room1Data.length - 1); k++) {
      let rawTs1 = new Date(room1Data[i].timestamp * 1000);
      let date1 = rawTs1.getDate();

      let rawTs2 = new Date(room1Data[k].timestamp * 1000);
      let date2 = rawTs2.getDate();


      if (date1 == date2) {
        tempSensList.push(room1Data[i].temperature);
        humSensList.push(room1Data[i].humidity);
      }
    }

    for (let g = 0; g < tempSensList.length; g++) { tempSum += tempSensList[g]; }
    for (let g = 0; g < humSensList.length; g++) { humSum += humSensList[g]; }

    const tempAvg = (tempSum / tempSensList.length);
    const humAvg = (humSum / humSensList.length);
    const newData1 = {
      roomArea: room1Data[i].roomArea,
      timestamp: room1Data[i].timestamp,
      maxTemp: Math.max(...tempSensList),
      minTemp: Math.min(...tempSensList),
      tempAvg: tempAvg,
      maxHum: Math.max(...humSensList),
      minHum: Math.min(...humSensList),
      humAvg: humAvg
    }

    newDataRoom1.push(newData1);
  }

  for (let i = 0; i < room2Data.length; i++) {
    let tempSensList = [];
    let humSensList = [];
    let tempSum = 0;
    let humSum = 0;

    for (let k = (i + 1); k < (room2Data.length - 1); k++) {
      let rawTs1 = new Date(room2Data[i].timestamp * 1000);
      let date1 = rawTs1.getDate();

      let rawTs2 = new Date(room2Data[k].timestamp * 1000);
      let date2 = rawTs2.getDate();


      if (date1 == date2) {
        tempSensList.push(room2Data[i].temperature);
        humSensList.push(room2Data[i].humidity);
      }
    }

    for (let g = 0; g < tempSensList.length; g++) { tempSum += tempSensList[g]; }
    for (let g = 0; g < humSensList.length; g++) { humSum += humSensList[g]; }

    const tempAvg = (tempSum / tempSensList.length);
    const humAvg = (humSum / humSensList.length);
    const newData1 = {
      roomArea: room2Data[i].roomArea,
      timestamp: room2Data[i].timestamp,
      maxTemp: Math.max(...tempSensList),
      minTemp: Math.min(...tempSensList),
      tempAvg: tempAvg,
      maxHum: Math.max(...humSensList),
      minHum: Math.min(...humSensList),
      humAvg: humAvg
    }

    newDataRoom2.push(newData1);
  }

  for (let i = 0; i < room3Data.length; i++) {
    let tempSensList = [];
    let humSensList = [];
    let tempSum = 0;
    let humSum = 0;

    for (let k = (i + 1); k < (room3Data.length - 1); k++) {
      let rawTs1 = new Date(room3Data[i].timestamp * 1000);
      let date1 = rawTs1.getDate();

      let rawTs2 = new Date(room3Data[k].timestamp * 1000);
      let date2 = rawTs2.getDate();


      if (date1 == date2) {
        tempSensList.push(room3Data[i].temperature);
        humSensList.push(room3Data[i].humidity);
      }
    }

    for (let g = 0; g < tempSensList.length; g++) { tempSum += tempSensList[g]; }
    for (let g = 0; g < humSensList.length; g++) { humSum += humSensList[g]; }

    const tempAvg = (tempSum / tempSensList.length);
    const humAvg = (humSum / humSensList.length);
    const newData1 = {
      roomArea: room3Data[i].roomArea,
      timestamp: room3Data[i].timestamp,
      maxTemp: Math.max(...tempSensList),
      minTemp: Math.min(...tempSensList),
      tempAvg: tempAvg,
      maxHum: Math.max(...humSensList),
      minHum: Math.min(...humSensList),
      humAvg: humAvg
    }

    newDataRoom3.push(newData1);
  }

  res.status(200).send(
    {
      room1: newDataRoom1,
      room2: newDataRoom2,
      room3: newDataRoom3

    }

  )
}