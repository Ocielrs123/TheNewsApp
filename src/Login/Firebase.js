  import firebase from 'firebase';

  var firebaseConfig = {
      apiKey: "AIzaSyAH9595YoGfs1hvLy9Lm92A1ER_4x0V5NE",
      authDomain: "thenewsapp-d2dd1.firebaseapp.com",
      projectId: "thenewsapp-d2dd1",
      storageBucket: "thenewsapp-d2dd1.appspot.com",
      messagingSenderId: "963608741731",
      appId: "1:963608741731:web:d051b6e430666596113556"
    };
    // Initialize Firebase
    const fire = firebase.initializeApp(firebaseConfig);

  export default fire;