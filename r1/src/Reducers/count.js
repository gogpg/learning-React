import randColor from '../Functions/randColor';
import rand from '../Functions/rand';
//kiekvienam state yra daromi reduceriai 
import { ADD_ONE, REMOVE_ONE, ADD_TWO, REMOVE_TWO, ADD_FIVE, REMOVE_FIVE, RAND_COL, FONT_SIZE, BORDER } from "../Constants/actions";

function count(state, action) {         ///Reducers failuose yra paprastos js funkcijos, funkcija gauna egzistuojanti ir validu state ir action
    let newState = {...state};          //ka sita funkcija grazina patampa naujuoju statu. Iprasta, kad reducer stato viduje mes pasidarome stato kopija, kad galetume su ja toliau dirbti.
    switch(action.type) {               //dazniausiai naudojamos swich tipo funkcijos reduceryje.
        case ADD_ONE:
            newState.number ++;
            break;
        case REMOVE_ONE:
            newState.number --;
            break;
        case ADD_TWO:
            newState.number += 2;
            break;
        case REMOVE_TWO:
            newState.number -= 2;
            break;
        case ADD_FIVE:
            newState.number += 5;
            break;
        case REMOVE_FIVE:
            newState.number -= 5;
            break;
        case RAND_COL:
            newState.color = randColor();
            break;
        case FONT_SIZE:
            newState.fs = rand(10, 40) + 'px';
            break;
        case BORDER:
            newState.border = !newState.border;
            break;
         
        default:
    }

    return newState;  //graziname nauja state
}
export default count;