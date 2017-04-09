
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
                <div className="google-login">
                    <GoogleLogin
                        clientId={'209101981816-mfc1a3pfpvg6dncfuvbcbtldnqnaoamr.apps.googleusercontent.com'}
                        onSuccess={show name}
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




// import React from 'react';
// import {Row} from 'react-bootstrap';
// import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login';
//
// class Login extends React.Component {
//     const responseGoogle = (response) => {
//     console.log(response);
// }
//
//     ReactDom.render() {
//
//
//         return (
//
//             <Row>
//                 <div className="login">
//                     <h1>Loguj się i sprawdź wydarzenia!</h1>
//                 </div>
//             </Row>
//
//
//         )
//     }
//
// }
// export default Login;
//
//
//
//
// ReactDOM.render(
//     <GoogleLogin
//         clientId="209101981816-mfc1a3pfpvg6dncfuvbcbtldnqnaoamr.apps.googleusercontent.com"
//         buttonText="Login"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//     />,
//     document.getElementById('googleButton')
// );