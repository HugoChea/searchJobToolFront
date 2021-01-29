import React, { useState } from "react";

import { Container, Grid, Button, Card, CardContent } from "@material-ui/core";

function Application(props) {
    const [item, setItem] = useState(props.item);
    const [showDetails, setShowDetails] = useState(false);

    const showApplicationDetail = () => {
        setShowDetails(true);
    };
    const hideApplicationDetail = () => {
        setShowDetails(false);
    };

    return (
        <Container>
            <Card>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >
                    <Grid item xs={2}>
                        <CardContent>{item.company}</CardContent>
                    </Grid>
                    <Grid item xs={2}>
                        <CardContent>{item.position}</CardContent>
                    </Grid>
                    <Grid item xs={2}>
                        <CardContent>{item.stack}</CardContent>
                    </Grid>
                    <Grid item xs={4}>
                        <CardContent>{item.comment}</CardContent>
                    </Grid>
                    <Grid item xs={1}>
                        <CardContent>
                            {item.status === 0 && <strong>Non postulé</strong>}
                            {item.status === 1 && <strong>En attente</strong>}
                            {item.status === 2 && (
                                <strong>En discussion</strong>
                            )}
                            {item.status === 3 && <strong>Refusé</strong>}
                            {item.status === 4 && <strong>Validé</strong>}
                        </CardContent>
                    </Grid>
                    <Grid item xs={1}>
                        <CardContent>
                            {showDetails ? (
                                <Button onClick={hideApplicationDetail}>
                                    Hide
                                </Button>
                            ) : (
                                <Button onClick={showApplicationDetail}>
                                    More
                                </Button>
                            )}
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
            {showDetails && (
                <Card>
                    {item.company}
                    {item.position}
                    {item.stack}
                    {item.link}
                    {item.contact}
                </Card>
            )}
        </Container>
    );
}

export default Application;
