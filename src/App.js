import { useEffect, useState } from 'react';
import './App.css';
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Components/Search';

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
  const [charactersData, setCharactersData] = useState([]);
  const [name, setName] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  }

  const fetchCharacterData = (e) => {
    e.preventDefault();
    if (charactersData.length < 4) {
      fetch(`https://swapi.dev/api/people/?search=${name}`)
      .then(res => res.json())
      .then(data => {
        if (data.results.length > 0) {
          setCharactersData([...charactersData, data[0]]);
        }
      })
      .catch(err => {
        console.log(err);
      });
    }
  }

  return (
    <div className={classes.root}>
      <Grid contianer>
        <Grid item container justify='center'>
          <Typography variant="h3" style={{ padding: '10px' }}>Compare Star Wars Characters!</Typography>
        </Grid>
      </Grid>
      <Grid container justify='center' alignItems='center' spacing={4}>
        <Grid className={classes.search} item>
          <Search onSubmit={fetchCharacterData} onChange={handleName}></Search>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
