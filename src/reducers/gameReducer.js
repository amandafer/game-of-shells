import produce from 'immer';
import {
	SET_USERS_ANSWER,
	SET_PEARL_INDEX,
	GET_GAME_RESULT,
	SET_ANIMATION_STOP,
	RESET
} from '../actions/types';

const initialState = {
	numberOfShells: 3,
	hasUserWon: false,
	isPlaying: true,
	canUserGuess: false
};

export default produce((draft = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case SET_USERS_ANSWER:
			draft.answer = payload.chosenShell;
			break;

		case SET_PEARL_INDEX:
			draft.pearlIndex = Math.floor(Math.random() * draft.numberOfShells);
			break;

		case GET_GAME_RESULT:
			const result = draft.answer === draft.pearlIndex;
			draft.hasUserWon = result;
			draft.isPlaying = !result;
			draft.canUserGuess = !result;
			break;

		case SET_ANIMATION_STOP:
			draft.canUserGuess = true;
			break;

		case RESET:
			return {
				...initialState,
				pearlIndex: draft.pearlIndex
			};

		default:
			return draft;
	}
});
