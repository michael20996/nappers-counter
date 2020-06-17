import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AwakeBtn from '../Awake';
import Counter from '../Counter/index'
import OutlinedButtons from '../AwakeBtn'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignItems: 'center'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <img src="https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1090&q=80" alt="Avatar" id="avatar" style={{verticalAlign: "middle", width: "200px", height: "200px", borderRadius: "50%", padding: "30px" }}></img>
              <h2>Jane Doe</h2>
              <h3><i>Sacramento, CA</i></h3>
              <Counter/>
              <br></br>
              <p><i>member since:2020</i></p>
            </Paper>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid> */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
