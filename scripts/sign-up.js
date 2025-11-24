// sign-up page logic
function signUp() {
  const getValue = window.appUtils.validation.getInputValue;
  const email = getValue('emailInput');
  const password = getValue('passwordInput');
  const confirmPassword = getValue('confirmPasswordInput');

  if (!window.appUtils.validation.validatePasswordMatch(password, confirmPassword)) return;

  const userData = {
    email,
    accountType: getValue('accountTypeInput'),
    dob: getValue('dobInput'),
    firstName: getValue('firstNameInput'),
    middleName: getValue('middleNameInput'),
    lastName: getValue('lastNameInput'),
    workplaceName: getValue('workplaceNameInput'),
    position: getValue('positionInput')
  };

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      firebase.firestore().collection('users').doc(userCredential.user.uid).set(userData)
        .then(() => window.appUtils.navigate.toPage('main-page.html'))
        .catch(err => console.error(err));
    })
    .catch(err => {
      console.error(err);
      alert('Sign up failed: ' + err.message);
    });
}

window.signUp = signUp;
