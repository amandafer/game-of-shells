import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPearlIndex, reset, setAnimationStart } from '../../actions';
import { Surface } from '../../components/Surface';

const Game = () => {
	const dispatch = useDispatch();
	const [result, isUserPlaying] = useSelector(
		({ shellReducer: { hasUserWon, isPlaying } }) => [hasUserWon, isPlaying]
	);

	useEffect(() => {
		dispatch(setPearlIndex());
	}, [isUserPlaying]);

	return (
		<>
			<h3>{result && 'You win!'}</h3>
			<Surface />
			{!isUserPlaying ? (
				<button onClick={() => dispatch(reset())}>Reset</button>
			) : (
				<button onClick={() => dispatch(setAnimationStart())}>
					Start Game
				</button>
			)}
		</>
	);
};

export default Game;
