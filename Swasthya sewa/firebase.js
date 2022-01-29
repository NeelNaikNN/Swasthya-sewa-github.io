// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBHW_YYszGJL43qSVuEZTeHy0fi9TbxcDA",
    authDomain: "swasthya-seva-login-signup.firebaseapp.com",
    projectId: "swasthya-seva-login-signup",
    storageBucket: "swasthya-seva-login-signup.appspot.com",
    messagingSenderId: "398568231753",
    appId: "1:398568231753:web:37663d24c8d29e766f8098",
    measurementId: "G-DCP3PN5ENE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()