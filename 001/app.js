

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(rand(5, 10))

///////////////sukurti masyva is 10 random skaiciu, kurie butu tarp 100 iki 999. _ bruksnelis naudojamas, kai to parametro nebezadame niekur naudoti///////////////

const mas = [...Array(10)].map(_ => rand(100, 999));
console.log(mas)

///////////////////////////////naujas masyvas, kur katinu svoris padideja 1 ///

const cats = [
    {name: 'Pilkis', weight: 4},
    {name: 'Murka', weight: 7},
    {name: 'Keris', weight: 3}
];

const newweight = cats.map(cat => ({...cat, weight: cat.weight +1}));
console.log(newweight);

////padaryti, kad visi katinai butu random svorio nuo 3 iki 10 svorio

const randomweight = cats.map(cat => ({...cat, weight: rand(3, 10)}))
console.log("randomweight", randomweight)

//////sukurti nauja masyva, kur butu atvaizduoti tik katinu svoriai vienu kilogramu didesni

const weight = [...cats].map(mass => mass.weight + 1)
console.log(weight)

////kiekvienas katinas turi tureti dar viena papildoma savybe takesPill ir atsitiktiniu budu yra arba yes arba no;

const newkey = cats.map(cat => ({...cat, takesPill: rand(0, 1) ? 'yes' : 'no'}))
console.log(newkey)















