import React from 'react';
import '../App.css';

const Search = ({ onChange, onSubmit }) => {
	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				onChange={onChange}
			/>
			<button
				type="submit"
				className="SearchButton">
				Search
    </button>
		</form>
	)
}

export default Search