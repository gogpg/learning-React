
import { useEffect } from 'react';

function Dog({i}) {  //i elenetas patenka i Dog funkcijos vidu

    

    useEffect( () => {   //parodo kada pirma karta elementas buvo sukurtas
       // console.log('Dog no:' + i)
        console.log('New dog');
        return () => {           // returno funkcija yra paleidinejama tada, kai elementas yra istrintas.
            console.log('Dog gone');
           // console.log('Dog no' + i ' gone')
        }
    }, []);  //jeigu use effecte parametras yra tuscias masyvas , tai tada use effektas paleidines savo funkcija viena karta, kai elementas gime.

    return (
        <div>{i}</div> //atvaizduoju elementa div viduje, kad zinotume kuris elementas yra atsivaizdaves.
    )
}

export default Dog;