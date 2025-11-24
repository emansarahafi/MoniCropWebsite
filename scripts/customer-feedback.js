// customer feedback logic
async function sendMessageToChannel(message) {
  try {
    const botToken = 'INSERT_BOT_TOKEN_HERE';
    const channelId = 'INSERT_CHANNEL_ID_HERE';
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: channelId, text: message })
    });
    const data = await response.json();
    if (!data.ok) console.error('Telegram error', data);
  } catch (e) {
    console.error(e);
  }
}

function submitForm(event) {
  event.preventDefault();
  const getValue = window.appUtils.validation.getInputValue;
  const email = getValue('emailAddress');
  const message = getValue('feedbackSection');
  const uid = window.appUtils.auth.getCurrentUser()?.uid || null;

  window.appUtils.db.collection('feedback').add({ email, message, uid })
    .then(docRef => {
      sendMessageToChannel(`New feedback received:\nEmail: ${email}\nMessage: ${message}`);
      alert('Message submitted successfully!');
      window.appUtils.navigate.toPage('feedback-received-page.html');
    })
    .catch(error => {
      console.error('Error adding document: ', error);
      alert('Error submitting message.');
    });
}

window.submitForm = submitForm;
