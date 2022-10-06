import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadGoodsList } from './store/goodsReducer'

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.goods.entities)
  console.log(data);
  useEffect(() => { dispatch(loadGoodsList()) }, [dispatch])
  return (
    <div className="App"> {data && data.map(item => (<p key={item._id}>{item.title}</p>))}</div>
  );
}

export default App;
