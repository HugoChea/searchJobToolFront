import React, { useState } from "react";

import { Grid, Button, Card } from "@material-ui/core";

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
        <React.Fragment>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                <Grid item xs={2}>
                    {item.company}
                </Grid>
                <Grid item xs={2}>
                    {item.position}
                </Grid>
                <Grid item xs={2}>
                    {item.stack}
                </Grid>
                <Grid item xs={4}>
                    {item.comment}
                </Grid>
                <Grid item xs={1}>
                    {item.status === 0 && <strong>Non postulé</strong>}
                    {item.status === 1 && <strong>En attente</strong>}
                    {item.status === 2 && <strong>En discussion</strong>}
                    {item.status === 3 && <strong>Refusé</strong>}
                    {item.status === 4 && <strong>Validé</strong>}
                </Grid>
                <Grid item xs={1}>
                    {showDetails ? (
                        <Button onClick={hideApplicationDetail}>Hide</Button>
                    ) : (
                        <Button onClick={showApplicationDetail}>More</Button>
                    )}
                </Grid>
            </Grid>

            {showDetails && (
                <Card>
                    {item.company}
                    {item.position}
                    {item.stack}
                    {item.link}
                    {item.contact}
                </Card>
            )}
        </React.Fragment>
    );
}

export default Application;
