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

    var user_name = localStorage.getItem("Username");
    document.getElementById("username").innerHTML = "Welcome " + user_name +"!";

    function AddRoom() {
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row = "<div class='room_name' id="+Room_names+" onclick = 'redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirect(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}




