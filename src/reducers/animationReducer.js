import produce from 'immer';
import { SET_ANIMATION_START, SET_ANIMATION_STOP } from '../actions/types';

const initialState = {
	shouldAnimate: false
};

export default produce((draft = initialState, action) => {
	const { type } = action;

	switch (type) {
		case SET_ANIMATION_START:
			draft.shouldAnimate = true;
			break;

		case SET_ANIMATION_STOP:
			draft.shouldAnimate = false;
			break;

		default:
			return draft;
	}
});
