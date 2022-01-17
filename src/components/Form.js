import { useState } from "react";
import './Form.scss'
// import './App.scss';

const Form = () => {

    const [inputs, setInputs] = useState({});

    const changeInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        console.log(name, value);
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
    }

    const [myCar, setMyCar] = useState("Volvo");

    const handleChange = (event) => {
        setMyCar(event.target.value)
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input className="form-field form-control" type="text" name="name" value={inputs.name} onChange={changeInputs} />
                <input className="form-field form-control" type="text" name="age" value={inputs.age} onChange={changeInputs} />
                <textarea className="form-field form-control" name="description" value={inputs.description} onChange={changeInputs} />
                <select value={inputs.cars} name="cars" className="form-field form-control" onChange={changeInputs}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
                
                <input className="form-field form-control btn btn-primary" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Form;
