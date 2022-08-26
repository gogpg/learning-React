import rand from '../../Functions/rand';

function Dog() {

    if (rand(0, 1)) {
        
        return null
    }

    return (
    <>
        <h2 className='font' style={{color: 'crimson', fontSize: rand(0, 1) ? '40px' : null, color: rand(0, 1) ? 'green' : 'blue'}}>Dog {rand(0, 1) ? 'yes' : 'no'}</h2>
        <h3 className = {rand(0,1) ? 'dog' : 'cat'} style= {{color: ['yellow', 'brown', 'white'][rand(0,2)]}}>Big { rand(100, 999) }</h3>
    </>
    );
}

export default Dog;