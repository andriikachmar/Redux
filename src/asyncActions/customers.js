import { addManyCostumersAction } from "../store/costumerReducer";

// возращаем функцию как action, тоесть передать в dispatch(fetchCustomers)

export const fetchCustomers = () => {
    return function (dispatch) { // через параметр передаем dispatch
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyCostumersAction(json))) // принимаем dispatch из параметра и в него передаем action creater: ({ type: ADD_MANY_COSTUMER, payload }) и в него передаем json, json это массив пользователей который пришел от сервера
    }
}