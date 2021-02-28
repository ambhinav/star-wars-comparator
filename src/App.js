import { useState } from 'react';
import './App.css';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Components/Search';
import CharacterCard from './Components/CharacterCard';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
	card: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 18,
		color: 'blue'
	},
	pos: {
		marginBottom: 12,
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
    fetch(`https://swapi.dev/api/people/?search=${name}`)
    .then(res => res.json())
    .then(data => {
      if (data.results.length > 0) {
        setCharactersData([...charactersData, data.results[0]]);
      } else {
        alert('No character with that name was found!');
      }
    })
    .catch(err => {
      console.log(err);
    });
  }

  const characterCards = charactersData.map(characterData =>
      <Grid item>
        <CharacterCard props={characterData} key={characterData.name}/>
      </Grid>
  )

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item container justify='center'>
          <Typography variant="h3" style={{ padding: '10px' }}>Compare Star Wars Characters!</Typography>
        </Grid>
      </Grid>
      <Grid container justify='center' alignItems='center' spacing={4}>
        <Grid className={classes.search} item>
          <Search onSubmit={fetchCharacterData} onChange={handleName}></Search>
        </Grid>
      </Grid>

      {
        charactersData.length > 0 ?
          <Grid container style={{ padding: '100px' }} justify='center'>
            <Card className={classes.card} variant='outlined' style={{ backgroundColor: '#d3d3d3'}}>
              <CardContent>
                <Typography className={classes.title} gutterBottom>Name</Typography>
                <Typography className={classes.pos}>Gender</Typography>
                <Typography className={classes.pos}>Height</Typography>
                <Typography className={classes.pos}>Mass</Typography>
                <Typography className={classes.pos}>Hair Color</Typography>
                <Typography className={classes.pos}>Home World</Typography>
                <Typography className={classes.pos}>Starships</Typography>
              </CardContent>
            </Card>
            { characterCards }
          </Grid>
        : null
      }
    </div>
  );
}

export default App;
