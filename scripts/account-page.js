// account-page logic
const logout = () => window.appUtils.auth.logout();

window.appUtils.auth.onAuthChange(user => {
  if (user) {
    const el = document.getElementById('user-email');
    if (el) el.textContent = user.email;
  }
});

window.logout = logout;
