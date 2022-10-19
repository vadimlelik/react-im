import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGoodsList } from "../../store/goodsReducer";
import GoodItem from "../GoodItem/GoodItem";
import Loader from "../UI/Loader/Loader";
import "../GoodsList/goodsList.css";

const GoodList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.goods.entities);
  console.log(data);
  useEffect(() => {
    dispatch(loadGoodsList());
  }, [dispatch]);

  if (!data) {
    return <Loader />;
  }

  return (
    <div className="goods__list">
      {data.map((item) => (
        <GoodItem key={item._id} {...item} />
      ))}
    </div>
  );
};

export default GoodList;
