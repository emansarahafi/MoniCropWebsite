// sign-in page logic
function signIn() {
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => window.appUtils.navigate.toPage('main-page.html'))
    .catch(error => {
      console.error(error.code, error.message);
      alert('Sign in failed: ' + error.message);
    });
}

window.signIn = signIn;
