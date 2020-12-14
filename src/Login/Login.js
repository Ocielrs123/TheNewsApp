import React from 'react';

const Login = (props) => {

    const {email,
        setEmail,
        pass,
        setPass,
        handleLogin,
        handleSignUp,
        hasacc,
        setHasacc,
        emailerror,
        passerror} = props;

    return(
        <section className="login">
            <div className="loginContainer">
                <label>Usuario: </label>
                <input type="text" 
                autoFocus 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
                <p className="errorMsg">{emailerror}</p>

                <label>Contraseña: </label>
                <input type="password"  
                required 
                value={pass} 
                onChange={(e) => setPass(e.target.value)}/>
                <p className="errorMsg">{passerror}</p>

                <div className="btnContainer">
                    {hasacc ? (
                        <>
                        <button onClick={handleLogin} >Iniciar sesión</button>
                        <p>¿No tienes una cuenta? <span onClick={() => setHasacc(!hasacc)} >Crea una aqui!</span> </p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleSignUp} >Crear cuenta</button>
                        <p>¿ Ya tienes una cuenta? <span onClick={() => setHasacc(!hasacc)} >Inicia sesión aqui!</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;