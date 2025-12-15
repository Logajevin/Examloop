const firebaseConfig = {
  apiKey: "AIzaSyDDy_Xtsd_4gfJrTyVhNHOJcT4ie9sG43s",
  authDomain: "examloop.firebaseapp.com",
  projectId: "examloop"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// LOGIN
function login() {
  auth.signInWithEmailAndPassword(
    document.getElementById("email").value,
    document.getElementById("password").value
  )
  .then(() => {
    window.location.href = "index.html";
  })
  .catch(e => alert(e.message));
}

// LOGOUT ✅ FIXED
function logout() {
  auth.signOut().then(() => {
    // force redirect
    window.location.replace("login.html");
  });
}

// PAGE PROTECTION ✅
auth.onAuthStateChanged(user => {
  if (!user && !window.location.pathname.includes("login")) {
    window.location.replace("login.html");
  }
});
