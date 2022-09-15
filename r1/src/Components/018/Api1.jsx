import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";

function Api1() {

    const [users, setUsers] = useState([])

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(res => setUsers(res.data);
    //     })
    // }, []);

    useEffect(() => {                                           ///useEffect uzsikrauna, kai uzsikrauna komponentas.
        axios.get('https://jsonplaceholder.typicode.com/users')  //kreipiames i axios, kad gautume duomenis is norimo adreso/serverio, kuri ir irasome skliausteliuose
        .then(res => {                                           //kai gauna atsakyma, tada setina i users, atsakymas yra su daug nereikalingos papildomos info, todel is to responso paimame tik data.
            console.log(res);
            setUsers(res.data.sort((a, b) => a.address.city.localeCompare(b.address.city)));    ///gauname visus zemiau nurodytus dalykus, bet visas sarasas yra isrusiuotas pagal miesta.
        })
    }, []);

    return (
        <ul>
            {
                users.map(u => <li key = {u.id}>Users name: {u.name}, users city: {u.address.city},users company name: {u.company.name}</li>)    ///mapiname visus gautus duomenis, kurie per setUser, atsiranda user constantoje. Ir gaminame lista
            }
        </ul>
    )
}
export default Api1;