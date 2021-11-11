const firebaseConfig = {
    apiKey: "AIzaSyC2VT6Wd5S9rVKpbSCiN3fiZ_RdefIPh4g",
    authDomain: "redecorate-kwitter.firebaseapp.com",
    databaseURL: "https://redecorate-kwitter-default-rtdb.firebaseio.com",
    projectId: "redecorate-kwitter",
    storageBucket: "redecorate-kwitter.appspot.com",
    messagingSenderId: "110669165267",
    appId: "1:110669165267:web:ccdfd4fbb0088771121a26"
  };
  
 
 firebase.initializeApp(firebaseConfig);

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
  Room_names = childKey;
 
row = "<div class='room_name'id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>"
document.getElementById("output").innerHTML += row
 //End code
 });});}
getData();
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"


function addroom(){
room_name = document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({
     purpose:"adding_room_name"
})
localStorage.setItem("room_name",room_name)
window.location = "kwitter_page.html"

}
function redirectToRoomName(name)
{
 localStorage.setItem("room_name", name)
 window.location = "kwitter_page.html"

}

function logout(){
 localStorage.removeItem("room_name");
 localStorage.removeItem("user_name");
 window.location = "index.html"
}

