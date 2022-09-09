import { useContext } from "react";
import DataContext from "./DataContext";
import Row from "./Row";

function List() {

    const { things } = useContext(DataContext);

    return (
        <div className="card">
            <div className="top">
                List of Things
            </div>
            <div className="body">
                {
                    things?.map(t => <Row key={t.id} thing={t} />)   //daiktai mapinami, imame viena daikta ir kuriame viena eilute, kur bus atvaizduotas tas daiktas
                }
            </div>
        </div>
    )
}

export default List;