// forgot-your-password logic
function resetPassword() {
  const emailAddress = window.appUtils.validation.getInputValue('email');
  firebase.auth().sendPasswordResetEmail(emailAddress)
    .then(() => { alert('Password reset email sent!'); })
    .catch(err => {
      console.error(err);
      alert('Error: ' + err.message);
    });
}

window.resetPassword = resetPassword;
