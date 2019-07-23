import { combineReducers } from 'redux';
import shellReducer from './shellReducer';
import animationReducer from './animationReducer';

export default combineReducers({
	shellReducer,
	animationReducer
});
