// import { createStore } from 'redux';
// import { reducer } from './recuder';

// const store = createStore(reducer.count);

// export default store;
import { configureStore } from '@reduxjs/toolkit';
// 单个的reducer
import { reducer } from './recuder';
const store = configureStore({
	// 模块化reducer整合
	reducer: {
		reducer: reducer.count,
	},
});
export default store;
