import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getJobs } from "../../actions/jobsActions";
import Application from "./Application";
import AddApplication from "./AddApplication";

import {
    Grid,
    Container,
    Box,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    Paper,
    TableBody
} from "@material-ui/core";

function Dashboard(props) {
    const { user } = props.auth;

    const [jobs, setJobs] = useState([]);

    const handleSubmitApplication = () => {
        setJobs([]); //trigger re rendering of use effect
    };

    useEffect(() => {
        if (jobs.length === 0) {
            getJobs(user, (res) => {
                setJobs(res);
            });
        }
    }, [jobs, user]);

    return (
        <Box pt={2}>
            <Container>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    className="test"
                >
                    Hello {user.name}
                </Grid>

                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                    className="test"
                >
                    <h2>Mes candidatures</h2>
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                    >
                        <AddApplication user={user} onAddApplication={handleSubmitApplication}/>
                    </Grid>
                </Grid>
            </Container>
            <Container>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                    <TableRow>
                        
                        <TableCell align="center">Company</TableCell>
                        <TableCell align="center">Position</TableCell>
                        <TableCell align="center">Stack</TableCell>
                        <TableCell align="center">Comment</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell />
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {jobs.map((item) => (
                        <Application key={item._id} item={item}/>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
        </Box>
    );
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    auth: state.auth,
});
export default connect(mapStateToProps)(Dashboard);
