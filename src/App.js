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
                    <Route path="/reseach/people" element={<People />} />
                    <Route path="/reseach/planets" element={<Planets />} />
                    <Route path="/reseach/films" element={<Films />} />
                    <Route path="/reseach/species" element={<Species />} />
                    <Route path="/reseach/vehicles" element={<Vehicles />} />
                    <Route path="/reseach/starships" element={<Starships />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
