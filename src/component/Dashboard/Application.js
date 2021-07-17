import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Button,
    Card,
    Collapse,
    IconButton,
    TableCell,
    TableRow,
    Box,
    Typography,
    Chip
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useRowStyles = makeStyles({
    root: {
        "& > *": {
            borderBottom: "unset",
        },
    },
});

function Application(props) {
    const [item, setItem] = useState(props.item);
    const [showDetails, setShowDetails] = useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell align="center" component="th" scope="item">
                    {item.company}
                </TableCell>
                <TableCell align="center">{item.position}</TableCell>
                <TableCell align="center">{item.stack}</TableCell>
                <TableCell align="center">{item.comment}</TableCell>
                <TableCell align="center">
                    {item.status === 0 && <Chip
                        label="Non postulé"
                        icon={<ReportProblemIcon />}
                        variant="outlined"
                    />}
                    {item.status === 1 && <Chip
                        label="En attente"
                        icon={<HourglassEmptyIcon />}
                        variant="outlined"
                        color="primary"
                    />}
                    {item.status === 2 && <Chip
                        label="En discussion"
                        icon={<FeedbackIcon style={{color:'#ffb74d'}}/>}
                        variant="outlined"
                        style={{color:'#ffb74d', borderColor: '#ffb74d'}}
                    />}
                    {item.status === 3 && <Chip
                        label="Refusé"
                        icon={<ThumbDownIcon style={{color:'#f44336'}}/>}
                        variant="outlined"
                        style={{color:'#f44336', borderColor: '#f44336'}}
                    />}
                    {item.status === 4 && <Chip
                        label="Validé"
                        icon={<ThumbUpIcon style={{ color: "#4caf50" }}/>}
                        variant="outlined"
                        style={{color:'#4caf50', borderColor: '#4caf50'}}
                    />}
                </TableCell>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setShowDetails(!showDetails)}
                    >
                        {showDetails ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                >
                    <Collapse in={showDetails} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                History
                            </Typography>
                            <Card>
                                {item.company}
                                {item.position}
                                {item.stack}
                                {item.link}
                                {item.contact}
                            </Card>
                            {/* <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table> */}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default Application;
