
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth

// apiKey: import.meta.envVITE_apiKey,
//   authDomain: import.meta.envVITE_authDomain,
//     projectId: import.meta.envVITE_projectId,
//       storageBucket: import.meta.envVITE_storageBucket,
//         messagingSenderId: import.meta.envVITE_messagingSenderId,
//           appId: import.meta.envVITE_appId,