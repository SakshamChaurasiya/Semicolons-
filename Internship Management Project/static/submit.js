//import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAqi2AS-BD8h3wOL3z4Gk8IOUD7Gx_QAX0",
    authDomain: "taskupload-b4bf9.firebaseapp.com",
    projectId: "taskupload-b4bf9",
    storageBucket: "taskupload-b4bf9.firebasestorage.app",
    messagingSenderId: "437575660395",
    appId: "1:437575660395:web:d397445c39f1ec5443122e",
    measurementId: "G-1WD9PTDVYJ"
  };

  
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var studentName = getElementVal("studentName");
  var enrollmentNo = getElementVal("enrollmentNo");
  var companyName = getElementVal("companyName");
  var submissionDate = getElementVal("submissionDate");
  
  
  
  saveMessages(studentName,enrollmentNo, companyName, submissionDate );

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (studentName,enrollmentNo, companyName, submissionDate) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    studentName: studentName,
    enrollmentNo:enrollmentNo,
    companyName: companyName,
    submissionDate:submissionDate,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
