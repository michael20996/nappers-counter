import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AwakeBtn from "../AwakeBtn"
import AsleepBtn from "../AsleepBtn"
import Counter from '../Counter/index'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignItems: 'center'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
            <Paper className={classes.paper}>
              <AwakeBtn />
            </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <AsleepBtn />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
