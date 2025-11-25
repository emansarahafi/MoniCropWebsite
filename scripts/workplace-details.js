// workplace details page logic
// Firebase is initialized in firebase-init.js
const db = window.appUtils.db.get();
const logout = () => window.appUtils.auth.logout();
window.logout = logout;

window.appUtils.auth.onAuthChange(user => {
  if (!user) {
    window.appUtils.navigate.toPage('sign-in-page.html');
    return;
  }

  const userId = user.uid;
  function getTable() {
    const table1 = db.collection('workplaces').where('userId', '==', userId);
    return table1.get().then(querySnapshot => {
      var tableHeader = '<tr><th>Workplace Name</th><th>Founding Date</th><th>Date Joined MoniCrop</th><th>Items Owned</th></tr>';
      var tableRows = '';
      querySnapshot.forEach(function (doc) {
        var data = doc.data();
        var row = '<tr><td>' + (data.workplaceName||'') + '</td><td>' + (data.foundingDate||'') + '</td><td>' + (data.dateJoined||'') + '</td><td>' + (data.ownedItems||'') + '</td></tr>';
        tableRows += row;
      });
      return tableHeader + tableRows;
    });
  }

  getTable().then(tableHTML => {
    const el = document.getElementById('table');
    if (el) el.innerHTML = tableHTML;
  });
});
