import React, { useState, useEffect } from "react";
import {
    Container,
    Grid,
    TextField,
    Avatar,
    Button,
    Link,
    Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

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

function Login(props) {
    const classes = useStyles();
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const [error, seterror] = useState(null);

    useEffect(() => {
		console.log("test")
        if (props.auth.isAuthenticated) {
            props.history.push("/dashboard");
        }
        if (
            props.errors.email !== undefined ||
            props.errors.password !== undefined
        ) {
            seterror(true);
        }
    }, [props.errors, props.auth.isAuthenticated, props.history]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email: email,
            password: password,
        };
        props.loginUser(userData);
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
                                Login
                            </Typography>
                            {error && (
                                <Alert severity="error">
                                    {props.errors.email}
                                    {props.errors.password}
                                    {props.errors.passwordincorrect}
                                </Alert>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
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
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Login
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
