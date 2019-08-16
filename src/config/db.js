import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyD-ZTOjog12-8vV493doKaitIwlXDWDj6I",
  authDomain: "tiendanextu-f4eeb.firebaseapp.com",
  databaseURL: "https://tiendanextu-f4eeb.firebaseio.com",
  projectId: "tiendanextu-f4eeb",
  storageBucket: "",
  messagingSenderId: "1049317448167",
  appId: "1:1049317448167:web:286d3e50bd74a8fc"
}
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig)

export default fire
