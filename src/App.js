import "./App.css";

import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Research from "./pages/ResearchPage";

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
                    <Route path="/people" element={<People search={false}/>} />
                    <Route path="/planets" element={<Planets search={false} />} />
                    <Route path="/films" element={<Films search={false} />} />
                    <Route path="/species" element={<Species search={false} />} />
                    <Route path="/vehicles" element={<Vehicles search={false} />} />
                    <Route path="/starships" element={<Starships search={false} />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
