import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPearlIndex, reset, setAnimationStart } from '../../actions';
import { Surface } from '../../components/Surface';
import Background from '../../components/Background/Background';
import EnhancedSand from '../../components/Background/Sand';
import Birds from '../../components/Background/Birds';
import { Container } from '../../components/Background/styles';

import { title as titleImg } from '../../assets';
import { Title, ActionsContainer } from './style';

const Game = () => {
	const dispatch = useDispatch();
	const [result, isUserPlaying] = useSelector(
		({ gameReducer: { hasUserWon, isPlaying } }) => [hasUserWon, isPlaying]
	);
	const [isBtnDisabled, setDisabled] = useState(false);

	useEffect(() => {
		dispatch(setPearlIndex());
		setDisabled(false);
	}, [isUserPlaying]);

	return (
		<Container>
			<Title src={titleImg} />
			<Background />
			<EnhancedSand>
				<Surface />
				<Birds />
			</EnhancedSand>
			<ActionsContainer>
				<h2>{result && 'You win!'}</h2>
				{!isUserPlaying ? (
					<button onClick={() => dispatch(reset())}>Reset</button>
				) : (
					<button
						disabled={isBtnDisabled}
						onClick={() => {
							setDisabled(true);
							dispatch(setAnimationStart());
						}}
					>
						Start Game
					</button>
				)}
			</ActionsContainer>
		</Container>
	);
};

export default Game;
