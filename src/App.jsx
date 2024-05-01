import {useEffect} from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDalmmhAlJhTGQ4SzER3m8cijpqJsjfLSU",
  authDomain: "analytic-test-97d9b.firebaseapp.com",
  projectId: "analytic-test-97d9b",
  storageBucket: "analytic-test-97d9b.appspot.com",
  messagingSenderId: "920208564950",
  appId: "1:920208564950:web:fb090fef3fbe86da8b5f77",
  measurementId: "G-4RKWS4Z49S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  useEffect(() => {
    logEvent(analytics, `pageviewed`);
    console.log('logged!')
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;