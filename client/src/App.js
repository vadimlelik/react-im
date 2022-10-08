import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from './components/UI/Loader/Loader'
import { loadGoodsList } from './store/goodsReducer'

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.goods.entities)
  useEffect(() => { dispatch(loadGoodsList()) }, [dispatch])
  return (
    // <div className="App"> {data && data.map(item => (<p key={item._id}>{item.title}</p>))}</div>

    <Loader />
  );
}

export default App;
