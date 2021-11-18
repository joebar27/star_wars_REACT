import "./App.css";

import Header from "./layout/Header";
import Footer from "./layout/Footer";

import { Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";

import Research from "./pages/Research";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/reseach" element={<Research />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
