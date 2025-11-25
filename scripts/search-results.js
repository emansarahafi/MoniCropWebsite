// search-results page logic
// Firebase is initialized in firebase-init.js
const db = window.appUtils.db.get();
const logout = () => window.appUtils.auth.logout();
window.logout = logout;

window.appUtils.auth.onAuthChange(user => {
  if (!user) return;
  const userId = user.uid;

  function getTable() {
    return db.collection('items').where('userId', '==', userId).get().then(querySnapshot => {
      var tableHeader = '<tr><th>ID number</th><th>Item name</th><th>Location</th><th>Price</th><th>Date</th></tr>';
      var tableRows = '';
      querySnapshot.forEach(doc => {
        var data = doc.data();
        tableRows += `<tr><td>${data.id||''}</td><td>${data.name||''}</td><td>${data.location||''}</td><td>${data.price||''}</td><td>${data.date||''}</td></tr>`;
      });
      return tableHeader + tableRows;
    });
  }

  getTable().then(tableHTML => {
    const el = document.getElementById('table');
    if (el) el.innerHTML = tableHTML;
  });
});
