import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGoodsList } from "../../store/goodsReducer";
import GoodItem from "../GoodItem/GoodItem";
import Loader from "../UI/Loader/Loader";

const GoodList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.goods.entities);

  useEffect(() => {
    dispatch(loadGoodsList());
  }, [dispatch]);

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      {data.map((item) => (
        <GoodItem key={item._id} {...item} />
      ))}
    </>
  );
};

export default GoodList;
