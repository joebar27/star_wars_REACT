import "./App.css";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

import { Routes, Route } from "react-router-dom";

import Research from "./pages/Research";
import Home from "./pages/Home";

import People from "./components/categorie/People";
import Planets from "./components/categorie/Planets";
import Films from "./components/categorie/Films";
import Species from "./components/categorie/Species";
import Vehicles from "./components/categorie/Vehicles";
import Starships from "./components/categorie/Starships";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/reseach" element={<Research />} />
                    <Route path="/people" element={<People />} />
                    <Route path="/planets" element={<Planets />} />
                    <Route path="/films" element={<Films />} />
                    <Route path="/species" element={<Species />} />
                    <Route path="/vehicles" element={<Vehicles />} />
                    <Route path="/starships" element={<Starships />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
