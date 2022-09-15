import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";

function Api2() {

    const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(res => setUsers(res.data);
    //     })
    // }, []);

    useEffect(() => {                                           ///useEffect uzsikrauna, kai uzsikrauna komponentas.
        axios.get('https://jsonplaceholder.typicode.com/posts')  //kreipiames i axios, kad gautume duomenis is norimo adreso/serverio, kuri ir irasome skliausteliuose
        .then(res => {                                           //kai gauna atsakyma, tada setina i users, atsakymas yra su daug nereikalingos papildomos info, todel is to responso paimame tik data.
            console.log(res);
            setPosts(res.data.sort((a, b) => b.title.length - a.title.length));
              
        })
    }, []);

    return (
        <ul>
            {
                posts.map(u => <li key = {u.id} style={{color: u.title.length < 50 ? 'red' : null}} >Users title: {u.title}</li>)    
            }
        </ul>
    )
}
export default Api2;