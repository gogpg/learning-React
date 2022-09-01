import { useState } from 'react';

function Text() {

    const [text, setText] = useState('');   //pradinis tekstas yra tuscias stringas(inpute)
    const [color, setColor] = useState('#7caa0c');
    const [range, setRange] = useState(0);
    const [textNow, setTextNow] = useState('***');

     {/*e yra eventas, evento targetas yra tas elementas, kuris iskviecia targeta, targetas yra inputas, turedami inputa, jau galim apaimti to inputo value "e.target.value*/} 

    const control = e => {   

        // Number(e.target.value) && setText(e.target.value);   jei norime, kad ne vien skaiciai butu rasomi

        setText(e.target.value); {/*galima rasyti ir skaicius ir raides */}
    }

    const colorControl = e => {
        setColor(e.target.value);
    }

    const rangeControl = e => {
        setRange(parseInt(e.target.value));
    }

    return (
            // kiekvienam atskiram inputui turi buti ir state atskiras, kuris ji kontroliuotu.
        <>   
            <div className="form-container">    
                <h2>TEXT:{textNow}</h2>
                 <input type="text" onChange={control} value={text}></input>   {/*//inputo value visada yra tai kas yra i ji irasoma, ir tai mes pazymejome kaip text kurdami jam State. Kol neparasyta funkcija inpute niekas nesiveda. Pradeda veikti tik kai parasome onChange*/} 
                <button style={{marginTop: '10px'}} onClick={() => setTextNow(text || '***')}>Text Now</button>
            </div>

            <div className="form-container">
                <h2 style={{color}}>COLOR</h2>
                <input type="color" onChange={colorControl} value={color}></input>
                <button style={{marginTop: '10px'}} onClick={() => setColor('#ff0000')}>Set Red</button>
            </div>

            <div className="form-container">
                <h2>RANGE: {('' + range).padStart(3, 0)}</h2>
                <input type="range" min="0" max="100" onChange={rangeControl} value={range}></input>
                <button style={{marginTop: '10px'}} onClick={() => setRange(s => Math.min(100, s + 10))}>Plus</button>
                <button style={{marginTop: '10px'}} onClick={() => setRange(s => Math.max(0, s - 10))}>Minus</button>
            </div>
        </>
    )
}

export default Text;