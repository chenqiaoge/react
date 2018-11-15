// 一个项目中有很多的reducers，我们要把他们整合到一起
import counter from './reducers/counter';
export default function combineReducers (state={}, action) {
    // 返回的是state，state.counter1
    return{
        counter1:counter(state.counter1, action)
    }
}
