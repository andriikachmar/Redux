import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncActions/customers';
import { addCashAction, getCashAction } from './store/cashReducer';
import { addCostumerAction, removeCostumerAction } from './store/costumerReducer';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const costumers = useSelector(state => state.costumers.costumers)

  const generateId = () => {
    return Math.floor(Math.random() * 10000)
  }

  const addCash = (cash) => {
    // dispatch({ type: 'ADD_CASH', payload: cash })
    dispatch(addCashAction(cash))
  }

  const getCash = (cash) => {
    // dispatch({ type: 'GET_CASH', payload: cash })
    dispatch(getCashAction(cash))
  }

  const addCostumer = (name) => {
    const costumer = {
      name,
      id: generateId()
    }
    // dispatch({type: 'ADD_COSTUMERS', payload: costumer})
    dispatch(addCostumerAction(costumer))
  }

  const removeCostumer = (costumer) => {
    // dispatch({type: 'REMOVE_COSTUMERS', payload: costumer.id})
    dispatch(removeCostumerAction(costumer.id))
  }

  return (
    <div className="App">
      <div>
        <h1>Cash: {cash}</h1>
        <button onClick={() => addCash(Number(prompt()))}>Add Cash +</button>
        <button onClick={() => getCash(Number(prompt()))}>Get Cash -</button>
        <button onClick={() => addCostumer(prompt())}>Add Costumer</button>
        <button onClick={() => dispatch(fetchCustomers())}>Get Costumers from db</button>
      </div>
      {
        costumers.length > 0
          ?
          <div>
            {costumers.map(costumer => 
              <div onClick={() => removeCostumer(costumer)} key={costumer.id}>{costumer.name}</div>
            )}
          </div>
          :
          `empty`
      }
    </div>

  );
}

export default App;
