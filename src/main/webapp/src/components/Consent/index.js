import React from "react";
import {useLocation} from "react-router-dom";
import {Container} from "@mui/material";

function Consent(props) {
    const location = useLocation();
    const foo = window.foo;

    return (
        <>
            <Container maxWidth="sm">
                <h1>Hello {foo}!</h1>
                <pre>{JSON.stringify(location, null, 2)}</pre>
                <pre>{JSON.stringify(props, null, 2)}</pre>
            </Container>
        </>
    )
}

export default Consent;