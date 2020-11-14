import React from "react";
import { Container } from "@material-ui/core";
import Landing from "./Landing";
import Flow from "./Flow";

function Home() {
    return (
        <Container>
            <Landing/>
            <Flow/>
        </Container>
    );
}

export default Home;
