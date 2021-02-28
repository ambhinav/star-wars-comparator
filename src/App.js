import React from 'react';
import './App.css';
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  search: {
    '& > *': {
      width: '55ch',
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid contianer>
        <Grid item container justify='center'>
          <Typography variant="h3" style={{ padding: '10px' }}>Compare Star Wars Characters!</Typography>
        </Grid>
      </Grid>
      <Grid container justify='center' alignItems='center' spacing={4}>
        <Grid className={classes.search} item>
          <TextField label="Enter Star Wars Character" variant="outlined"></TextField>
        </Grid>
        <Grid item>
          <Button variant='outlined' variant='contained' color="primary" size="large">Go!</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
