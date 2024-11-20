import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import {getAuth,onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAgNvYLkiZRkT4jpZ2fdc676e5M3HEseZ8",
    authDomain: "login-page-2f83e.firebaseapp.com",
    databaseURL: "https://login-page-2f83e-default-rtdb.firebaseio.com",
    projectId: "login-page-2f83e",
    storageBucket: "login-page-2f83e.firebasestorage.app",
    messagingSenderId: "218776793586",
    appId: "1:218776793586:web:674b0cf5f5961af27dbb6b"
  };
  const app =initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const user = auth.currentUser();

  onAuthStateChanged(auth,(user)=>{
    console.log(user);
  if (user){

    updateUserProfile(user);
    const uid = user.uid;
    return uid;
  }else{
    alert("Create Account & login");
    window.location.href="signUp.html";
  }
  });

  function updateUserProfile(user){
    const userName = user.displayName;
    const userEmail = user.email;

    document.getElementById("name").textContent = userName;
    document.getElementById("email").textContent = userEmail;
  }