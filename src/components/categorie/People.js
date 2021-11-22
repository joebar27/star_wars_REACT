import GlobalSearch from "../research/GlobalSearch";
import "././style/Result.css";

function People(props) {
    return props.search ? (
        <ul className="result p-0 mt-3 mt-md-5">
            <li>Nom : {props.data.name}</li>
            <li>Anniversaire : {props.data.birth_year}</li>
            <li>Couleur des yeux : {props.data.eye_color}</li>
            <li>Couleur des cheveux : {props.data.hair_color}</li>
            <li>Taille : {props.data.height}</li>
            <li>Poid : {props.data.mass}</li>
            <li>Couleur de peaux : {props.data.skin_color}</li>
            <li>Planete habiter : {props.planete} </li>
        </ul>
    ) : (
        <div>
            <h1 className="result mt-5">Vous n'avez pas effectuer de recherche</h1>
            <GlobalSearch />
        </div>
    );
}

export default People;
