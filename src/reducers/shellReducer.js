import produce from 'immer';
import {
	SET_USERS_ANSWER,
	SET_PEARL_INDEX,
	GET_GAME_RESULT,
	RESET
} from '../actions/types';

const initialState = {
	numberOfShells: 3,
	hasUserWon: false,
	isPlaying: true
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
			break;

		case RESET:
			debugger;
			return {
				...initialState,
				pearlIndex: draft.pearlIndex
			};

		default:
			return draft;
	}
});
