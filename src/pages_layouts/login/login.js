
import React from 'react';
// import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import FontAwesome from 'react-fontawesome'

const responseGoogle = (response) => {
    console.log(response);
}

class Login extends React.Component {

    render() {
        return (
            <div className="login">
                <h1>Zaloguj się i sprawdź wydarzenia!</h1>
                <div className="googlelogin">
                    <GoogleLogin
                        clientId={'209101981816-mfc1a3pfpvg6dncfuvbcbtldnqnaoamr.apps.googleusercontent.com'}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        offline={false}
                    >
                        <FontAwesome
                            name='google'
                        />
                        <span> Zaloguj się z Google</span>
                    </GoogleLogin>
                </div>
            </div>
        )
    }
}


export default Login;