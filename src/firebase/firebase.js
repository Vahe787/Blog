import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4MDRURayWAlSnueVWH64MIdeqj1Z1638",
  authDomain: "my-blog-8c16e.firebaseapp.com",
  projectId: "my-blog-8c16e",
  storageBucket: "my-blog-8c16e.appspot.com",
  messagingSenderId: "551420005659",
  appId: "1:551420005659:web:14da951d68d222209dd7be",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const storage = getStorage(app);

export { app, auth, storage };
