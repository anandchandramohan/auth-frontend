import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
/** Presentation */
import ErrorMessage from '../components/ErrorMessage';
/** Custom Hooks */
import useErrorHandler from '../utils/custom-hooks/ErrorHandler';
/** Utils */
import { apiRequest, validateLoginForm } from '../utils/Helper';
import { Header } from '../components/Styles';
import { socketAddress } from '../utils/Consts';
/** Context */
import { authContext } from "../contexts/AuthContext";

function Login() {
    const [userEmail, setUserEmail] = React.useState("");
    const [userPassword, setUserPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const { error, showError } = useErrorHandler(null); 
    const auth = React.useContext(authContext);

    const authHandler = async () => {
        try {
            setLoading(true);
            const url = socketAddress + 'login';
            const body = {
                userName : userEmail,
                password : userPassword
            }
            alert('Calling POST method');
            apiRequest(url,'post', body).then( response => {
                alert("First promise");
                return response.json();
            }).then(data => {
                alert("Second promise");
                console.log(data);
                const {item, meta} = data;
                const authInfo = {
                    'firstName' : item.firstName,
                    'lastName' : item.lastName,
                    'primaryEmail' : item.primaryEmail,
                    'userName' : item.userName,
                    'token' : meta.token
                };
                console.log(authInfo);
                auth.setAuthStatus(authInfo);
                console.log(authInfo);
                setLoading(false); 
            });
        } catch (err) {
            alert("Error");
            setLoading(false);
            showError(err.message);
        }
    };

    return (
       <Form onSubmit={e => {
            e.preventDefault();
            if (validateLoginForm(userEmail, userPassword, showError)) {
                authHandler();
            }
        }}>
            <Header>Sign in</Header>
            <br />
            <FormGroup>
                <Input type="email" name="email" value={userEmail} placeholder="john@mail.com"
                    onChange={e => setUserEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Input
                    type="password"
                    name="password"
                    value={userPassword}
                    placeholder="Password"
                    onChange={e => setUserPassword(e.target.value)}
                />
            </FormGroup>
            <Button type="submit" disabled={loading} block={true}>
                {loading ? "Loading..." : "Sign In"}
            </Button>
            <br />
            {error && <ErrorMessage errorMessage={error} />}
        </Form>
    );
}

export default Login;