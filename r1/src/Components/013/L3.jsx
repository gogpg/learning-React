import { useContext } from "react";
import DataPlus from "./DataPlus";

function L3({ stars }) {

    const { pluses, minuses } = useContext(DataPlus);  //is dataPlus konteksto perkeliu cia duomenis ir apacioje idedu, kur reikia, h2 ir tt

    return (
        <div className="star">
            <h2>{stars}</h2>   
            <h2>{pluses}</h2>
            <h2>{minuses}</h2>
        </div>
    )
}

export default L3;