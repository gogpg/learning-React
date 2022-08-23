
const data = [
    {id: 1, type: 'man', name: 'Lina', color: 'blue'},
    {id: 2, type: 'car', name: 'Opel', color: 'red'},
    {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
    {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
    {id: 5, type: 'man', name: 'Tomas', color: 'green'},
    {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
    {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
    {id: 8, type: 'car', name: 'MB', color: 'blue'},
    {id: 9, type: 'car', name: 'ZIL', color: 'red'},
    {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
  ];

////console atspauzdinti vardus su foreach

data.forEach(e => (console.log(e.name)));

///sukurti nauja masyva, kur visi red pakeisti i orange

const newcolors = data.map(e => e.color == 'red' ? {...e, color: 'orange'} : {...e});
console.log(newcolors);

//reikes pakeisti poriniu automobiliu spalva i black. poriniai pagal id

const newCarsColor = data.map(e => e.id % 2 == 0 && e.type == 'car' ? {...e, color: 'black'} : {...e});
console.log(newCarsColor);

//padaryti masyvo kopija, kurioje objektai, kuriu vardai trumpesnis uz 4 simbolius, vardai butu prailginti zvaigzdutemis iki 8

const newnames = data.map(e => e.name.length <= 4 ? {...e, name: e.name.padEnd(8, '*')} : {...e});
console.log(newnames);

//////////////////////////////////////////////////////////////////////////

const data2 = [

    {id: 1, list: [8, 8, 22], color: 'red'},
    {id: 2, list: [74, 5, 220, 7],  color: 'blue'},
    {id: 3, list: [8, 1, 0, 0, 8, 22],  color: 'red'}

  ];


  ////sukurti masyvo kopija, kur list masyvai prailginti dar vienu elementu, kurio reiksme yra nulis.

  const newelements = data2.map(e => ({...e, list: [...e.list, 0]}));
console.log(newelements);

////isfiltruoti, kad rodytu visus  isskyrus type:animal is data masyvo. padaryti masyvo kopija.

const withouttypeanimal = data.filter(e => e.type != 'animal')
console.log(withouttypeanimal)

///consoleje atspausdinti animal tipo vardus

data.filter(e => e.type == 'animal').forEach(e => console.log(e.name));

//isfiltruoti zalios spalvos zveris, padaryti nauja masyva su zaliais zverimis

const greenanimals = data.filter(e => e.type == 'animal' && e.color == 'green');
console.log(greenanimals);

//sukuri naują masyvą iš car ir man, o jų spalvas pakeist i black jeigu spalva yra ne red

const newArray = data.filter(e => e.type == 'car' || e.type == 'man').map(e => e.color != 'red' ? {...e, color: 'black'} : {...e});
console.log(newArray);

//istrinti elementa su id 6, padaryti kopija masyvo kuriame nera to elemento

const deleteelement = data.filter(e => e.id != 6)
console.log(deleteelement)

////////////////////pakeisti numeracija

const newidinorder = data.filter(e => e.id != 6).map((e, i)=> ({...e, id: i + 1}))
console.log(newidinorder)

////////surusiuoti pagal varda

const sortname = [...data];  //reiktu visada pasidaryti kopija masyvo
sortname.sort((a, b) => {
    if (a.name > b.name) {
        return 1
    }   if (a.name < b.name) {
        return -1
    } return 0
})

console.log(sortname)

/////kitas variantas, surusiuoti pagal varda 

const b1 = [...data]
b1.sort((a, b) => a.name.localeCompare(b.name))
console.log(b1)

///rusiuoti pagal id atvirkscia tvarka

const b2 = [...data]

b2.sort((a, b) => b.id - a.id)
console.log(b2)

//isrusiuoti masyva pagal zodzio name ilgi, nuo didziausio iki maziausio

const b3 = [...data]
b3.sort((a, b) => b.name.length - a.name.length)
console.log(b3)

//pakeisti masyvo ideliojima taip, kad virsuje butu type car

const b4 = [...data]
b4.sort((a, b) => a.type == 'car' ? -1 : 1)
console.log(b4)




















