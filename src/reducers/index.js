import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import animationReducer from './animationReducer';

export default combineReducers({
	gameReducer,
	animationReducer
});
