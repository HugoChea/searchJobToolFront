import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
    Container,
    Grid,
    TextField,
    Avatar,
    Button,
    Checkbox,
    Link,
    Typography,
    FormControlLabel,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

const useStyles = makeStyles((theme) => ({
    paper: {
        paddingTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    input: {
        color: "white",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Register(props) {
    const classes = useStyles();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [password2, setpassword2] = useState("");
    const [email, setemail] = useState("");
    const [error, seterror] = useState(false);

    useEffect(() => {
        if (props.auth.isAuthenticated) {
            props.history.push("/dashboard");
        }
        if (
            props.errors.name !== undefined ||
            props.errors.email !== undefined ||
            props.errors.password !== undefined ||
            props.errors.password2 !== undefined
        ) {
            seterror(true);
        }
    }, [props.errors, props.auth, props.history]);

    const handleSubmit = (event) => {
        event.preventDefault();
        seterror(false);
        const newUser = {
            name: username,
            email: email,
            password: password,
            password2: password2,
        };
        props.registerUser(newUser, props.history);
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <form
                    onSubmit={handleSubmit}
                    className="form form-auth"
                    noValidate
                >
                    <Grid container spacing={2}>
                        <Grid container alignItems="center" direction="column">
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Register
                            </Typography>
                            {error && props.errors.name && (
                                <Alert severity="error">
                                    {props.errors.name}
                                </Alert>
                            )}
                            {error && props.errors.email && (
                                <Alert severity="error">
                                    {props.errors.email}
                                </Alert>
                            )}
                            {error && props.errors.password && (
                                <Alert severity="error">
                                    {props.errors.password}
                                </Alert>
                            )}
                            {error && props.errors.password2 && (
                                <Alert severity="error">
                                    {props.errors.password2}
                                </Alert>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="uname"
                                name="username"
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                InputLabelProps={{
                                    className: classes.input,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                                value={username}
                                onChange={(e) => setusername(e.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                InputLabelProps={{
                                    className: classes.input,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                InputLabelProps={{
                                    className: classes.input,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password2"
                                label="Confirm Password"
                                type="password"
                                id="password2"
                                autoComplete="confirm-password"
                                InputLabelProps={{
                                    className: classes.input,
                                }}
                                InputProps={{
                                    className: classes.input,
                                }}
                                value={password2}
                                onChange={(e) => setpassword2(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="allowExtraEmails"
                                        color="primary"
                                    />
                                }
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
