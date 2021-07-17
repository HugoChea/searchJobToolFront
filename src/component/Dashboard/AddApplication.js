import React, { useState } from "react";
import { addJob } from "../../actions/jobsActions";

import {
    Grid,
    Button,
    Snackbar,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    InputAdornment,
    MenuItem,
} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import AccountCircle from "@material-ui/icons/AccountCircle";
import BusinessIcon from "@material-ui/icons/Business";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import LinkIcon from "@material-ui/icons/Link";
import CodeIcon from "@material-ui/icons/Code";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const applicationStatus = [
    {
        value: "0",
        label: "Non postulé",
    },
    {
        value: "1",
        label: "En attente",
    },
    {
        value: "2",
        label: "En discussion",
    },
    {
        value: "3",
        label: "Refusé",
    },
    {
        value: "4",
        label: "Accepté",
    },
];

function AddApplication(props) {
    
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [stack, setStack] = useState("");
    const [link, setLink] = useState("");
    const [contact, setContact] = useState("");
    const [description, setDescription] = useState("");
    const [comment, setComment] = useState("");
    const [status, setStatus] = useState("0");
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const handleCloseErrorMessage = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setError(false);
      };
    

    const handleCompanyChange = (event) => {
        setCompany(event.target.value);
    };

    const handlePositionChange = (event) => {
        setPosition(event.target.value);
    };

    const handleStackChange = (event) => {
        setStack(event.target.value);
    };

    const handleLinkChange = (event) => {
        setLink(event.target.value);
    };

    const handleContactChange = (event) => {
        setContact(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleSubmitApplication = (event) => {
        event.preventDefault();
        const newJob = {
            author: props.user.id,
            company: company,
            position: position,
            stack: stack,
            link: link,
            contact: contact,
            description: description,
            comment: comment,
            status: status,
        };
        addJob(newJob, (res) => {
            console.log(res)
            if (res.status === 400){
                console.log(res.data.error)
                setError(true)
                setErrorMessage(res.data.error)
            }
            else if (res.status === 200){
                console.log("blblblbl")
                handleClose();
                setCompany("");
                setPosition("");
                setStack("");
                setLink("");
                setContact("");
                setDescription("");
                setComment("");
                setStatus("");
                props.onAddApplication(); 
            }  
        });
    };

    return (
        <React.Fragment>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
            >
                +
            </Button>
            <Snackbar open={error} autoHideDuration={6000} onClose={handleCloseErrorMessage}>
                <Alert onClose={handleCloseErrorMessage} severity="error">
                    {errorMessage}
                </Alert>
            </Snackbar>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>Add application</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="company"
                        label="Company"
                        type="text"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <BusinessIcon />
                                </InputAdornment>
                            ),
                        }}
                        fullWidth
                        value={company}
                        onChange={handleCompanyChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="position"
                        label="Position"
                        type="text"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <DesktopWindowsIcon />
                                </InputAdornment>
                            ),
                        }}
                        value={position}
                        onChange={handlePositionChange}
                    />

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="stack"
                                label="Stack"
                                type="text"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CodeIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                value={stack}
                                onChange={handleStackChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="link"
                                label="Link"
                                type="text"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LinkIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                value={link}
                                onChange={handleLinkChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="contact"
                                label="Contact"
                                type="text"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                                value={contact}
                                onChange={handleContactChange}
                            />
                        </Grid>
                    </Grid>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        value={description}
                        onChange={handleDescriptionChange}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="comment"
                        label="Comment"
                        type="text"
                        fullWidth
                        value={comment}
                        onChange={handleCommentChange}
                    />
                    <TextField
                        autoFocus
                        select
                        margin="dense"
                        id="status"
                        label="Status"
                        type="text"
                        value={status}
                        onChange={handleStatusChange}
                        fullWidth
                    >
                        {applicationStatus.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmitApplication} color="primary">
                        Add new application
                    </Button>
                </DialogActions>
            </Dialog>

        </React.Fragment>
    );
}

export default AddApplication;
