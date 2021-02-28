import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
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
});

export default function CharacterCard({ props }) {
	const classes = useStyles();
	const [planet, setPlanet] = useState('');
	const [starships, setStarships] = useState([]);

	useEffect(() => {
		const fetchHomeWorld = () => {
			fetch(props.homeworld)
				.then(res => res.json())
				.then(data => setPlanet(data.name))
		}
		fetchHomeWorld();
		const fetchStarShips = () => {
			var results = []
			props.starships.forEach(starship => {
				fetch(starship)
					.then(res => res.json())
					.then(data => results.push(data.name))
			})
			setStarships(results);
		}
		fetchStarShips();
	}, [setStarships, setPlanet, props.homeworld, props.starships])

	const renderStarships = starships.map(starship => 
		<li key={starship}>{ starship }</li>
	) 

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography className={classes.title} gutterBottom>
					{props.name}
				</Typography>
				<Typography className={classes.pos}>
					{props.gender}
				</Typography>
				<Typography className={classes.pos}>
					{props.height}
				</Typography>
				<Typography className={classes.pos}>
					{props.mass}
				</Typography>
				<Typography className={classes.pos}>
					{props.hair_color}
				</Typography>
				<Typography className={classes.pos}>
					{planet}
				</Typography>
				{ starships.length > 0 ?
					<ul>{renderStarships}</ul>
					: "None"
				}
			</CardContent>
			<CardActions>
				{/* <Button size="small">Learn More</Button> */}
			</CardActions>
		</Card>
	);
}