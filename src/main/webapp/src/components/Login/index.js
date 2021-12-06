import React from "react";
import {useLocation} from "react-router-dom";
import {Container} from "@mui/material";

function Login(props) {
    const location = useLocation();
    const bar = window.bar;

    return (
        <>
            <Container maxWidth="sm">
                <h1>Hello {bar}!</h1>
                <pre>{JSON.stringify(location, null, 2)}</pre>
                <pre>{JSON.stringify(props, null, 2)}</pre>
            </Container>
        </>
    )
}

export default Login;