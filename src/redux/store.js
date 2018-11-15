// store有以下方法
/* 
提供getState()方法获取state
提供dispatch(action)触发reducers方法更新state；
通过subscribe(listener)注册监听器；
通过subscribe(listener)返回的函数注销监听器；
*/

import {createStore} from 'redux';
import combineReducers from './reducers';
let store = createStore(combineReducers);
export default store;