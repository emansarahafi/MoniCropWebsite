// disable-delete-account page logic
const logout = () => window.appUtils.auth.logout();

function handleAccountOption() {
  const selectionEl = document.querySelector('input[name="account-option"]:checked');
  if (!selectionEl) { alert('Please choose delete or disable'); return; }
  const selection = selectionEl.value;
  const password = document.getElementById('password-input').value;
  const user = window.appUtils.auth.getCurrentUser();
  if (!user) { alert('Not signed in'); return; }
  const credential = firebase.auth.EmailAuthProvider.credential(user.email, password);
  user.reauthenticateWithCredential(credential)
    .then(() => {
      if (selection === 'delete') {
        user.delete().then(() => window.appUtils.auth.logout()).catch(e => console.error(e));
      } else if (selection === 'disable') {
        user.updateProfile({ disabled: true }).then(() => window.appUtils.auth.logout()).catch(e => console.error(e));
      }
    })
    .catch(e => {
      console.error('Reauth error', e);
      alert('Error reauthenticating user: ' + (e.message || e));
    });
}

window.logout = logout;
window.handleAccountOption = handleAccountOption;
