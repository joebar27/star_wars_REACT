import React, { useState } from "react";

function SearchForm() {
    const [research, setResearch] = useState({value: ''})

    function handleChange(e) {
        setResearch({value: e.target.value});
      }

    function handleSubmit(e) {
        console.log(research.value);
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Recherche :
                    <input type="text" value={research.value} onChange={handleChange} />
                </label>
                <input type="submit" value="Rechercher" />
            </form>
        </div>
    );
}

export default SearchForm
