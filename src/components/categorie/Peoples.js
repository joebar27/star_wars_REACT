import axios from "axios";
import React, { useEffect, useState } from "react";

function Peoples() {
    const [peoples, setPeoples] = useState([]);
    let [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get("https://swapi.dev/api/").then(function (response) {
            setPeoples(response.data);
            setIsLoaded(true);
        });
    }, []);

    // for (const cat in peoples) {
    //     console.log(cat)
    // }
    // let eArr = Object.entries(peoples);
    // console.log("eArr", eArr);
    // for (let e of eArr) {
    //     console.log(e);
    //   }
    //console.log("peoples", peoples.entries());

    // Object.entries(peoples).map(([categorie, valeur]) =>
    // //console.log("test",categorie)
    //     //categorie.push()
    // )

    if (!isLoaded) {
        return (
            <div className="alert alert-dark ">Chargement des Stars . . .</div>
        );
    }

    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center border col-3">
            <h3>Les Stars</h3>
            {/* <p>{eArr[1][0]}</p> */}
        </div>
    );
}

export default Peoples;
