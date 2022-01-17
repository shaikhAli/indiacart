import { useEffect, useState, createContext } from 'react';
import ChildComponent from './ChildComponent';

export default function MyHooks() {
    
    const [car, changeCar] = useState({ 'name': 'Ford', 'modal': '1947', 'color': 'blue' });
    const [count, setCount] = useState(0);
    
    const changeDetails = () => {
        changeCar(previousState => {
            return {...previousState,name:'BMW'}
        })
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count)=>count+1)
        }, 1000)
        
        return () => clearTimeout(timer);
    },[])

    const UserContext = createContext();

    // const [user, setUser] = useState("Haider Ali");

    return (
        <div className='hooks-container'>
            <p className='hook-title'>useState Hook</p>
            {/* <p className='hook-title'>My favourite color is <span style={{color:color}}>{color}</span></p>
            <button onClick={() => setColor('blue')}>Blue</button>
            <button onClick={() => setColor('green')}>Green</button>
            <button onClick={() => setColor('orange')}>Orange</button> */}
            <p className='hook-title'>I have {car.name} of color {car.color} which its a {car.modal} modal car</p>
            <button className='hook-button' onClick={changeDetails}>Change Details</button>
            <p className='hook-title' >useEffect Hook , Count {count}</p>
            <UserContext.Provider value={30}>
                {/* <p className='hook-title' >useContext Hook , user: ---</p> */}
                <ChildComponent />
            </UserContext.Provider>
            
        </div>
    )
}
