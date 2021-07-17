import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    "@global": {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: "none",
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: "#222431 ",
    },
    toolbar: {
        flexWrap: "wrap",
    },
    toolbarTitle: {
        flexGrow: 1,
        color: "white",
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
}));

function Navbar(props) {
    const classes = useStyles();

    const onLogoutClick = (event) => {
        event.preventDefault();
        props.logoutUser();
    };

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}
        >
            <Toolbar className={classes.toolbar}>
                <Typography
                    variant="h6"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    <Link to="/" className="navbar nav-menu">Job Search Tool</Link>
                </Typography>
                <nav>
                    <Link
                        variant="button"
                        to="/"
                        className="navbar nav-menu"
                    >
                        Features
                    </Link>
                    <Link
                        variant="button"
                        to="/"
                        className="navbar nav-menu"
                    >
                        Enterprise
                    </Link>
                    <Link
                        variant="button"
                        to="/"
                        className="navbar nav-menu"
                    >
                        Support
                    </Link>
                </nav>
                {props.auth.isAuthenticated &&
                    <React.Fragment>
                        <Button onClick={onLogoutClick} variant="contained" className="navbar navbar-button">
                            Logout
                        </Button>
                    </React.Fragment>
                }
                {!props.auth.isAuthenticated &&
                    <React.Fragment>
                        <Button
                            component={Link}
                            to="/register"
                            variant="outlined"
                            className="navbar navbar-button"
                        >
                            Register
                        </Button>
                        
                        <Button
                            component={Link}
                            to="/login"
                            variant="outlined"
                            className="navbar navbar-button"
                        >
                            Login
                        </Button>
                    </React.Fragment>
                    
                }
                
            </Toolbar>
        </AppBar>
    );
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Navbar);