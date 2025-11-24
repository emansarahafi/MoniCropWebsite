// Firebase initialization (shared)
// GitHub Actions will replace these placeholders with actual secrets during deployment
const firebaseConfig = {
  apiKey: "INSERT_API_KEY_HERE",
  authDomain: "INSERT_AUTH_DOMAIN_HERE",
  projectId: "INSERT_PROJECT_ID_HERE",
  storageBucket: "INSERT_STORAGE_BUCKET_HERE",
  messagingSenderId: "INSERT_MESSAGING_SENDER_ID_HERE",
  appId: "INSERT_APP_ID_HERE",
  measurementId: "INSERT_MEASUREMENT_ID_HERE"
};

if (window.firebase && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
