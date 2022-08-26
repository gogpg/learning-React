/*function Cat({catId, catName, weight}) {

    return (
        <div>{catId} {catName} {weight}</div>
    )
}*/

/*function Cat({cat}) {

    if (cat.weight > 4) {
         return (
            /*<div className="red">id: {cat.id}, name:{cat.name}, weight: {cat.weight} kg</div>*/
            /*<div>id: {cat.id}, name:{cat.name}, weight: {cat.weight} kg</div>
        )
    }
        return (
            /*<div>id:{cat.id}, name: {cat.name}, weight: {cat.weight} kg</div>*/
           /* null
        )
}*/

function Cat({cat, i}) {

    return (
        <div style={{
            backgroundColor: cat.id % 2 ? 'crimson' : 'skyblue',
            borderRadius: cat.weight > 4 ? '50%' : null
        }}>{cat.name} {cat.weight}</div>
    )
}

export default Cat;
