import React from "react";
import { Container, Grid } from "@material-ui/core";
import organisation from '../../public/organisation.svg';
import interview from '../../public/interview.svg';
import job from '../../public/job.svg';

function Flow() {
    return (
        <Container fluid>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className="bg-dark2"
            >
                <Grid item xs={4} className="right-wrap landing-card-text">
                    <div>
                        <p className="landing-strong-text">
                            Une meilleure organisation pour un meilleur suivi !
                        </p>
                        <div>
                            <p className="landing-text">
                                Suiver facilement l'état de vos candidatures !
                                Améliorer votre suivi personnel et gagner en
                                efficacité dans chacune de vos candidatures !
                            </p>
                            <p className="landing-text">
                                Ajouter une trace de votre candidature, vérifier
                                l'état de vos candidatures, retrouver le bon
                                contact.
                            </p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={8} className="left-wrap">
                    <img src={organisation} className="landing-image" alt="organisation" />
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className="bg-dark2 landing-card"
            >
                <Grid item xs={4} className="left-wrap landing-card-text">
                    <div><img src={interview} className="landing-image" alt="interview"/></div>
                   
                </Grid>
                <Grid item xs={8} className="right-wrap landing-card-text">
                    <div>
                        <p className="landing-strong-text">
                            Gagner en efficacité !
                        </p>
                        <div>
                            <p className="landing-text">
                                Soyez mieux préparer en ayant sous la main toutes les informations nécessaires.
                            </p>
                            <p className="landing-text">
                                Todo : dataviz(repartition des candidatures par statut), calendrier rendez-vous, espace interview (card de questions à préparer)<br></br>
                                Bonus : intégration api indeed etc, espace recruteur, espace offre, espace cvtheque
                            </p>
                        </div>
                    </div>
                </Grid>
                
            </Grid>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className="bg-dark2 landing-card-foot"
            >
                <Grid
                item
                xs={12}
                >
                    <div>Success !</div>
                <div><img src={job} className="landing-card-image" alt="success"/></div>
                </Grid>
                
                
            </Grid>
        </Container>
    );
}

export default Flow;
