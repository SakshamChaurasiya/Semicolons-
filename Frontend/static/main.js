// Setting up firebase for login
   const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyAgNvYLkiZRkT4jpZ2fdc676e5M3HEseZ8",
  authDomain: "login-page-2f83e.firebaseapp.com",
  projectId: "login-page-2f83e",
  storageBucket: "login-page-2f83e.firebasestorage.app",
  messagingSenderId: "218776793586",
  appId: "1:218776793586:web:8ea0512c1417682d7dbb6b"
    });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

//Sign up ----->
const signUp=()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password);

    //firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in 
   window.location.href ="studentRegister.html";
   console.log(result);
      // ...
    })
    .catch((error) => {
    console.log(error.code);
    console.log(error.message);
      // ..
    });
}

//Sign in Function ---->
const signIn=()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    //firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    window.location.href = "student.html";
    console.log(result);
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
}