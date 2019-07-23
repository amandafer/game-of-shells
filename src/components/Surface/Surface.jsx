import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';
import shuffle from 'lodash/shuffle';

import { pearlShell, closedShell, emptyShell } from '../../assets';
import { setResult, setAnimationStop } from '../../actions';
import { Shell } from '../Shell';

const style = {
	position: 'absolute',
	display: 'flex',
	flexWrap: 'wrap',
	width: '100%',
	flexDirection: 'row',
	bottom: '80px',
	justifyContent: 'center',
	zIndex: 100
};

const changeShellImage = (shells, id, image) => {
	const result = shells.find(shell => shell.id === id);

	if (result) {
		result.image = image;
	}

	return [...shells];
};

const createShells = numberOfShells => {
	const arr = [];
	for (let index = 0; index < numberOfShells; index++) {
		arr.push({
			id: index,
			image: closedShell
		});
	}
	return arr;
};

const Surface = () => {
	const dispatch = useDispatch();
	const [
		numberOfShells,
		pearlIndex,
		canUserGuess,
		isUserPlaying,
		shouldAnimate
	] = useSelector(({ gameReducer, animationReducer }) => [
		gameReducer.numberOfShells,
		gameReducer.pearlIndex,
		gameReducer.canUserGuess,
		gameReducer.isPlaying,
		animationReducer.shouldAnimate
	]);
	const [shells, updateShells] = useState(
		createShells(numberOfShells, dispatch)
	);
	const onClickHandler = id => {
		if (canUserGuess) {
			updateShells(shells => {
				const image = pearlIndex === id ? pearlShell : emptyShell;
				return changeShellImage(shells, id, image);
			});
			dispatch(setResult(id));
		}
	};

	useEffect(() => {
		let count = 0;
		if (shouldAnimate) {
			updateShells(shells =>
				changeShellImage(shells, pearlIndex, closedShell)
			);

			const interval = setInterval(() => {
				updateShells(shuffle(shells));
				count++;
				if (count > 5) {
					dispatch(setAnimationStop());
					clearInterval(interval);
				}
			}, 500);
		}
	}, [shouldAnimate]);
	useEffect(() => {
		if (isUserPlaying) {
			updateShells(shells => {
				shells.map(
					shell =>
						(shell.image =
							shell.id === pearlIndex ? pearlShell : closedShell)
				);

				return [...shells];
			});
		}
	}, [pearlIndex]);

	return (
		<FlipMove style={style} staggerDurationBy="30" duration={500}>
			{shells.map(shell => (
				<Shell
					key={shell.id}
					onClickHandler={onClickHandler}
					{...shell}
				/>
			))}
		</FlipMove>
	);
};

export default Surface;
