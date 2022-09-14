function getId(key) {            //localStorage visada pazymetas key, key yra tai, pagal ka surandame localStorage. Kodas universtalus, perduodamas per parametra.
    const keyName = key + '_id'     //konstruoju key
    let id = localStorage.getItem(keyName);
    if (null === id) {            //jei id nera, jis yra lygus nuliui
        id = 0;

    } else {
        id = parseInt(id);
    }
    id++;                    ///imu sekanti id, padidinu vienetu
    localStorage.setItem(keyName, id)   //itrasau is localStorage, kad prisiminti
    return id;
}


function readData(key) {
    const data = localStorage.getItem(key);
    if (null === data) {                             //jei nieko localStorage dar nera, grazinu tuscia masyva
        localStorage.setItem(key, JSON.stringify([]));
        return [];
    }
    return JSON.parse(data)        //jei randu duomenis, grazina suparsintus duomenis
}


function writeData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}