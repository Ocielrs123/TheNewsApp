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
                    <input type="text" className="form-control" name="city" autoComplete="off" placeholder="Ciudad" defaultValue="Durango" />
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
        <div className="alert alert-primary mx-5" role="alert">Ingresa una ciudad para ver el clima!</div>
    )
}

export default Form;