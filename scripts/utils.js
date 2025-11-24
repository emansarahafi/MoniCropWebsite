// Common utility functions shared across all pages

// Navigation helpers
const navigate = {
  toIndex: () => window.location.href = '../index.html',
  toPage: (page) => window.location.href = page,
  toIndexFromRoot: () => window.location.href = './index.html'
};

// Firebase auth helpers
const auth = {
  logout: async () => {
    try {
      await firebase.auth().signOut();
      navigate.toIndex();
    } catch (error) {
      console.error('Logout error:', error);
    }
  },
  
  getCurrentUser: () => firebase.auth().currentUser,
  
  onAuthChange: (callback) => firebase.auth().onAuthStateChanged(callback)
};

// Form validation helpers
const validation = {
  validateEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  
  validatePasswordMatch: (password, confirmPassword) => {
    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match.');
      return false;
    }
    return true;
  },
  
  getInputValue: (id) => document.getElementById(id)?.value || ''
};

// Firestore helpers
const db = {
  get: () => firebase.firestore ? firebase.firestore() : null,
  
  collection: (name) => db.get().collection(name)
};

// Export for use in other scripts
if (typeof window !== 'undefined') {
  window.appUtils = { navigate, auth, validation, db };
}
