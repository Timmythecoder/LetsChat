var firebaseConfig = {
    apiKey: "AIzaSyBu5_k-KjEpA6SW4djEEJJETnNnIsO_5sA",
    authDomain: "letschat-7fdab.firebaseapp.com",
    databaseURL: "https://letschat-7fdab-default-rtdb.firebaseio.com/",
    projectId: "letschat-7fdab",
    storageBucket: "letschat-7fdab.appspot.com",
    messagingSenderId: "894826502452",
    appId: "1:894826502452:web:b1e78fdee48e20e88b2d61"
  };
  
   //Initialize Firebase
firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
var user_name = localStorage.getItem("Username");
var room_name = localStorage.getItem("room_name");

function send() {
    var msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          Name: user_name,
          Message: msg,
          Like: 0
    });
   document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name = message_data["Name"];
var msg = message_data["Message"];
var like = message_data["Like"];
var name_tag = "<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
var message_tag = "<h4 class='message_h4'>"+msg+"</h4>";
var button_tag = "<button class='btn btn-warning glyphicon glyphicon-thumbs-up' id="+firebase_message_id+" value="+like+" onclick = 'updatelike(this.id)'>Likes: "+like+"</button><hr>";
row = name_tag + message_tag + button_tag;
document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();
function updatelike(message_id){
    console.log (message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updatedlike = Number(likes)+1;
    firebase.database().ref (room_name).child(message_id).update({
          Like: updatedlike
    });
}
function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "index.html";
}