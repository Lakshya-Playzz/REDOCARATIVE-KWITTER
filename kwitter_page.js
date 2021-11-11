const firebaseConfig = {
    apiKey: "AIzaSyC-Yk6z2dkyifIBWunry3QqgBQYE5gbhps",
    authDomain: "kwitter-aa312.firebaseapp.com",
    databaseURL: "https://kwitter-aa312-default-rtdb.firebaseio.com",
    projectId: "kwitter-aa312",
    storageBucket: "kwitter-aa312.appspot.com",
    messagingSenderId: "108333788846",
    appId: "1:108333788846:web:1afef637c8045edfb0873f"
  };
  
  firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name")
   room_name = localStorage.getItem("room_name")
   
   function send()
   {
     msg = document.getElementById("msg").value 
     firebase.database().ref(room_name).push({
       name:user_name,
       msg:msg,
       like:0       
     })
   }

   

function getData() {
   firebase.database().ref("/"+room_name).on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      { childKey  = childSnapshot.key; childData = childSnapshot.val();
         if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code
msg = message_data["msg"];
sender_name = message_data["name"];
like = message_data["like"];
name_with_tag = "<h4>"+sender_name + "<img src = 'tick.png' class = 'user_tick'></h4>" ;
message_with_tag = "<h4 class='message_h4'>"+ msg + "</h4>";
like_button = "<button class ='btn btn-warning'id='"+firebase_message_id+"' value =' "+ like + " ' onclick='updateLike(this.id)'>"
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like:"+ like + "</span> </button> <hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag ;
document.getElementById("output").innerHTML += row
//End code
} });  }); }
getData();

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html"
}

function updateLike(message_id){
  console.log(message_id)
  likes = document.getElementById(message_id).value;
  updated_likes =Number(likes) + 1
  firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes
  })
}

   