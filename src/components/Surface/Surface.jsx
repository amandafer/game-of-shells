import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';
import shuffle from 'lodash/shuffle';

import pearlShell from '../../assets/pearl-shell.png';
import closedShell from '../../assets/closed-shell.png';
import emptyShell from '../../assets/empty-shell.png';
import { setResult, setAnimationStop } from '../../actions';
import { Shell } from '../Shell';
import { isAbsolute } from 'path';

const style = {
	position: 'absolute',
	display: 'flex',
	flexWrap: 'wrap',
	width: '100%',
	height: '300px',
	flexDirection: 'row',
	bottom: 0,
	justifyContent: 'center',
	alignItems: 'baseline',
	zIndex: 100
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
		isUserPlaying,
		shouldAnimate
	] = useSelector(({ shellReducer, animationReducer }) => [
		shellReducer.numberOfShells,
		shellReducer.pearlIndex,
		shellReducer.isPlaying,
		animationReducer.shouldAnimate
	]);
	const [shells, updateShells] = useState(
		createShells(numberOfShells, dispatch)
	);
	const onClickHandler = id => {
		if (isUserPlaying) {
			updateShells(shells => {
				const clickedShell = shells.find(shell => shell.id === id);
				clickedShell.image =
					pearlIndex === id ? pearlShell : emptyShell;
				return [...shells];
			});
			dispatch(setResult(id));
		}
	};

	useEffect(() => {
		let count = 0;
		if (shouldAnimate) {
			const interval = setInterval(() => {
				updateShells(shuffle(shells));
				count++;
				if (count > 5) {
					dispatch(setAnimationStop);
					clearInterval(interval);
				}
			}, 500);
		}
	}, [shouldAnimate]);
	useEffect(() => {
		updateShells(shells => {
			const clickedShell = shells.find(shell => shell.id === pearlIndex);
			if (clickedShell)
				clickedShell.image = shouldAnimate ? closedShell : pearlShell;
			return [...shells];
		});
	}, [pearlIndex, shouldAnimate]);

	return (
		<FlipMove
			style={style}
			staggerDurationBy="30"
			duration={500}
			enterAnimation="accordionHorizontal"
			leaveAnimation="accordionHorizontal"
		>
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
