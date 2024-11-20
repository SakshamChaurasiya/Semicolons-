const firebaseConfig = {
    apiKey: "AIzaSyAgNvYLkiZRkT4jpZ2fdc676e5M3HEseZ8",
    authDomain: "login-page-2f83e.firebaseapp.com",
    databaseURL: "https://login-page-2f83e-default-rtdb.firebaseio.com",
    projectId: "login-page-2f83e",
    storageBucket: "login-page-2f83e.firebasestorage.app",
    messagingSenderId: "218776793586",
    appId: "1:218776793586:web:0e1ed56ff9993a6b7dbb6b"
  };
  
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var emailid = getElementVal("emailid");
    var name = getElementVal("name");
    var age = getElementVal("age");
    var gender = getElementVal("gender");
    var college = getElementVal("college");
    
    
    saveMessages(emailid,name,age, gender, college);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (emailid, name,age, gender, college) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      emailid: emailid,
      name: name,
      age: age,
      gender: gender,
      college: college,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  