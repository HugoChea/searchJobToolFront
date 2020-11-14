import React from "react";
import { Container, Grid } from "@material-ui/core";

function Landing() {
    return (
        <Container>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className="fullscreen"
            >
                <Grid item display={{ xs: 'none', sm: 'block' }} md={7} className="left-wrap">
                    <img src="home.svg" className="landing-image" alt="landing" />
                </Grid>
                <Grid item xs={12} md={5} className="right-wrap">
                    <div>
                        <h2 className="landing-title">Search Job Tool</h2>
                        <p className="landing-strong-text">
                            L'outil qui vous accompagne dans votre recherche
                            d'emploi.
                        </p>
                        <div>
                            <p className="landing-text">
                                Search Job Tool révolutionne la recherche de l'emploi et vous accompagne dans cette démarche solitaire.
                            </p>
                            <p className="landing-text">
                            Votre meilleur compagnon pour vous retrouvez parmi la multitude d'offres et vous aider à saisir l'opportunité de vos rêves !
                            </p>
                            <p className="landing-text">
                                SJT facilite votre organisation personnelle !
                            </p>
                        </div>
                        <div className="landing-button">
                            <button className="button-gradient">Start Now</button>
                        </div>
                        
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Landing;
