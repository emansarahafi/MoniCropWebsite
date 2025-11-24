// Firebase initialization (shared)
// Configuration uses environment variables injected during build
// Set these as GitHub secrets and inject them in your workflow
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "INSERT_API_KEY_HERE",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "INSERT_AUTH_DOMAIN_HERE",
  projectId: process.env.FIREBASE_PROJECT_ID || "INSERT_PROJECT_ID_HERE",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "INSERT_STORAGE_BUCKET_HERE",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "INSERT_MESSAGING_SENDER_ID_HERE",
  appId: process.env.FIREBASE_APP_ID || "INSERT_APP_ID_HERE",
  measurementId: process.env.FIREBASE_MEASUREMENT_ID || "INSERT_MEASUREMENT_ID_HERE"
};

if (window.firebase && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
