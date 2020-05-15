import {createStore} from 'redux'
import {counter} from  './reducers'


//create store object
const store = createStore(counter) //calling the reducer 1st time for init state

export default store