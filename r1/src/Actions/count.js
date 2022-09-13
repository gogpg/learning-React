
import { ADD_ONE, REMOVE_ONE, ADD_TWO, REMOVE_TWO, ADD_FIVE, REMOVE_FIVE, RAND_COL, FONT_SIZE, BORDER, ADD_SQ, REM_SQ} from '../Constants/actions';
                          ///funkciju rinkinys, kurios gamina action objektus
export function add1() {
    return {
        type: ADD_ONE
    }
}

export function rem1() {
    return {
        type: REMOVE_ONE
    }
}

export function add2() {
    return {
        type: ADD_TWO
    }
}

export function rem2() {
    return {
        type: REMOVE_TWO
    }
}

export function add5() {
    return {
        type: ADD_FIVE
    }
}

export function rem5() {
    return {
        type: REMOVE_FIVE
    }
}

export function randCol() {
    return {
        type: RAND_COL
    }
}

export function randSize() {
    return {
        type: FONT_SIZE
    }
}

export function border() {
    return {
        type: BORDER
    }
}

export function addSq() {
    return {
        type: ADD_SQ
    }
}

export function remSq() {
    return {
        type: REM_SQ
    }
}

