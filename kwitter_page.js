const firebaseConfig = {
      apiKey: "AIzaSyCbc9eDiHJ9wE_lFEzPnh9P41sA7r89XAA",
      authDomain: "kwitter96-1426.firebaseapp.com",
      projectId: "kwitter96-1426",
      storageBucket: "kwitter96-1426.appspot.com",
      messagingSenderId: "265323675323",
      appId: "1:265323675323:web:9cdf8ac31917625da5339e",
      measurementId: "G-Q2H0THTC1R"
    };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
function send()
{
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}
//End code
      } });  }); }
getData();


