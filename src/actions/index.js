import {
	SET_USERS_ANSWER,
	GET_GAME_RESULT,
	SET_PEARL_INDEX,
	RESET,
	SET_ANIMATION_START,
	SET_ANIMATION_STOP
} from './types';

export const setResult = chosenShell => {
	return async dispatch => {
		await dispatch(setUsersAnswer(chosenShell));
		await dispatch(setResultSuccess());
	};
};

export const reset = () => ({
	type: RESET
});

export const setUsersAnswer = chosenShell => ({
	type: SET_USERS_ANSWER,
	payload: { chosenShell }
});

export const setResultSuccess = () => ({
	type: GET_GAME_RESULT
});

export const setPearlIndex = () => ({
	type: SET_PEARL_INDEX
});

export const setAnimationStart = () => ({
	type: SET_ANIMATION_START
});

export const setAnimationStop = () => ({
	type: SET_ANIMATION_STOP
});
