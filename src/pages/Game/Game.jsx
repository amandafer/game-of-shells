import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPearlIndex, reset, setAnimationStart } from '../../actions';
import { Surface } from '../../components/Surface';
import Background from '../../components/Background/Background';
import EnhancedSand from '../../components/Background/Sand';
import Birds from '../../components/Background/Birds';
import { Container } from '../../components/Background/styles';

const Game = () => {
	const dispatch = useDispatch();
	const [result, isUserPlaying] = useSelector(
		({ gameReducer: { hasUserWon, isPlaying } }) => [hasUserWon, isPlaying]
	);

	useEffect(() => {
		dispatch(setPearlIndex());
	}, [isUserPlaying]);

	return (
		<Container>
			<h3>{result && 'You win!'}</h3>
			<Background />
			<EnhancedSand>
				<Surface />
				<Birds />
			</EnhancedSand>
			{!isUserPlaying ? (
				<button onClick={() => dispatch(reset())}>Reset</button>
			) : (
				<button onClick={() => dispatch(setAnimationStart())}>
					Start Game
				</button>
			)}
		</Container>
	);
};

export default Game;
