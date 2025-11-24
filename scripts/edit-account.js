// edit-account page logic
function editAccount() {
  window.appUtils.auth.onAuthChange(user => {
    if (!user) {
      alert('No user is signed in.');
      return;
    }

    const getValue = window.appUtils.validation.getInputValue;
    const email = getValue('emailInput');
    const password = getValue('passwordInput');
    const confirmPassword = getValue('confirmPasswordInput');

    if (!window.appUtils.validation.validatePasswordMatch(password, confirmPassword)) return;

    firebase.firestore().collection('users').doc(user.uid).update({
      email,
      dob: getValue('dobInput'),
      firstName: getValue('firstNameInput'),
      middleName: getValue('middleNameInput'),
      lastName: getValue('lastNameInput'),
      workplaceName: getValue('workplaceNameInput'),
      position: getValue('positionInput')
    })
    .then(() => window.appUtils.navigate.toPage('main-page.html'))
    .catch(err => console.error(err));
  });
}

window.editAccount = editAccount;
