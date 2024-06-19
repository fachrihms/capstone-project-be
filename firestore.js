const admin = require("firebase-admin");
const serviceAccount = require("./db/capstone-project-423710-cd9c3a0a0dac.json"); // Path ke file JSON service account

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-database-name.firebaseio.com", // Optional, digunakan untuk Realtime Database
});

const db = admin.firestore();
