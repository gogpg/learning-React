
///// LOCAL STORAGE


function getId(key) {                  //is local storage gaunu id, kuris susides is daikto pavadinimo apatinis bruksnys id. konstruoju id, kitaip sakant.
    const keyName = key + '_id';        ///aprasau, koks bus id formatas
    let id = localStorage.getItem(keyName);   //pasiimu is local storage id
    if (null === id) {                     //jeigiu local storage dar nieko nera sukurta, id yra null, tada id priskiriame 0.
        id = 0;
    } else {                              //kitu atveju istraukiame id
        id = parseInt(id);                //kadangi ten yra ne numeris, tai reikia parseInt.
    }
    id++;                                //gaunu visus kitus id, padidunu vienetu ir irasau i local storage
    localStorage.setItem(keyName, id);   //kad ta id prisiminciau, ji vel setinu
    return id;                           //graziname id
}

function readData(key) {                //duomenu skaitymas is local storage, key reikia, kad zinotu ka butent is ten reikia skaityti
    const data = localStorage.getItem(key);   //duomenys gaunami per key
    if (null === data) {                      //jeigu duomenys lygus nului, nieko daer nera issaugota.
        localStorage.setItem(key, JSON.stringify([]));  //tada i local storage idedame tuscia masyva,  preis tai ji strigify
        return [];                           //grazinu tiscia masyva, nes kol kas nieko dar nebuvo
    }
    return JSON.parse(data);                 //kitu atveju grazinu suparsintus duomenis, ty is stringifuotu i vel i ojekta.
}

function writeData(key, data) {            //pagal key iraso sustringifay duomenys i local storage
    localStorage.setItem(key, JSON.stringify(data));
}

// CRUD Funkcijos --------------------------------------------------------------------------------------
/// jas reiki iseksportuoti, nes jas naudosime uz sito puslapio ribu

export function create(key, data) {         // sukuriame pagal key ir duomenis (spalva, forma ir tt. pagal parasyma.)
    const d = readData(key);                //pirmiausia nuskaitome is atminties visus jau esancius daiktus, pagal key
    data.id = getId(key);           //tada tuos duomenys papildau id savybe. naujas daiktas neturi id, ji reikia suteikti. Suteikiame id is get id funkcijos virsuje.
    d.push(data);                   // i jau esancius duomenis idededu naujus sukurtus duomenis
    writeData(key, d);              // ir viska issaugau.
}

export function read(key) {      //nuskaitymo funkcija
    return readData(key);        //graziname nuskaitytus duomenis
}

export function update(key, data, id) {   ///gauname daikto key, daikto duomenis ir id, to daikto, kuri reikia updaitinti.
    const d = readData(key);             //visi duomenys kurie jau yra irasyti, viska nusiskaitom
    writeData(key, d.map(t => t.id === id ? {...t, ...data, id: id} : {...t}));  //nuskaitytus daiktus mapiname, gauname daikta ir jeigu to daikto id sutampa su to daikto id, kuri norime updaitinti, tada isspredinu ta daikta, visas jo savybes, perrasau naujo daikto visomis savybemis ir perrasau ta pati id, kad jis nesikeistu, jei id nesutampa, tai padarau to daikto kopija ir irasau ji toki, kos jis buvo. visas sitas veiksmas grazina perrasyta kopija, todel ji irasome dar priekyje su key su juo irasome naujus perrasytus duomenis.
}

export function destroy(key, id) {    // delete funkcija pavadinome destry funkcija, nes delete yra rezervuotas zodis
    const d = readData(key);          // nuskaitome jau esancius duomenis
    writeData(key, d.filter(t => t.id !== id));   //i auksciau esancia local storage funkcija irasome isfiltruotus duomenis, i juos nepatenka daiktas su id, kuri norime istrinti.
}