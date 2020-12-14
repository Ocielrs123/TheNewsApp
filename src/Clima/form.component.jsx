import React from 'react';
import "./form.style.css";

const Form = props =>{
    return(
<center>
        <div className="container">
            <div>{props.error ? error(): null}</div>
         <center>
            <form onSubmit={props.loadweather}>
            <div >
                <div >
                    <input type="text" disabled className="form-control" name="city" autoComplete="off" placeholder="Ciudad" defaultValue="Durango" />
                </div>
                <br></br>
                <div  >
                    <button className="btn btn-warning">Obtener El Clima</button>
                </div>
            </div>
            
            </form>
            </center>

        </div>
        </center>
    );
};

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">Crea una cuenta para poder ver el clima en diferentes partes del mundo!</div>
    )
}

export default Form;