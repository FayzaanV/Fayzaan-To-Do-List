const firebaseConfig = {
  apiKey: "AIzaSyBVxzXgD8qcp_sItR3-G7VqWIOo-gd7StE",
  authDomain: "todolist-70013.firebaseapp.com",
  projectId: "todolist-70013",
  storageBucket: "todolist-70013.appspot.com",
  messagingSenderId: "835562602738",
  appId: "1:835562602738:web:ab2e9dff60c2a28ad9d06b",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

function signInWithGoogle() {
  return auth.signInWithPopup(provider);
}

function signUp(email, password) {
  const user = auth.createUserWithEmailAndPassword(email, password);
  return user;
}

function login(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

function logout() {
  return auth.signOut();
}
