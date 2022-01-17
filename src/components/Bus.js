import { useState } from 'react';
const Bus = (props) => {
    
    const [colorName, setColorName] = useState('green');

    const cars = ['BMW','Mercedes','Ford','Maruti','Bugati','Tesla']

    return (
        <>
            <h1>Hey, I am Bus component written as Fucntional Component</h1>
            <h2>Bus name is <span style={{ color: colorName }}>{props.name} </span> </h2>
            <button onClick={() => setColorName('red')}>Change Bus Color</button>
            {cars.map((item,key) => {
                return <li key={key}>{ item }</li>
            })}
        </>
    )
}

export default Bus;