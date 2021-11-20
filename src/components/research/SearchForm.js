import React, { useState } from "react";
import SearchResult from "./SearchResult";

function SearchForm() {
    let [research, setResearch] = useState({ value: "1" });
    let[id, setId] = useState();

    function handleChange(e) {
        setResearch(e.target.value);        
    }

    function handleSubmit(e) {
        setId(research.value);
        console.log(research.value);
        
        e.preventDefault();
    }

    return (
        <div className="mt-3">
            <form onSubmit={handleSubmit}>
                <label className="">
                    <input
                        type="text"
                        value={research.value}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Rechercher" />
            </form>            
        </div>
    );
}

export default SearchForm;
