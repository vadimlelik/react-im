import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createGoods } from "../../store/goodsReducer";

const AddGoods = () => {
  const { register, formState = {}, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(createGoods(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Введите текст заголовок карточки товара
          <input {...register("title", { required: true })} />
        </label>
        <label>
          Введите описание товара
          <textarea {...register("description", { required: true })} />
        </label>
        <label>
          добавьте цену товара
          <input {...register("price", { required: true })} />
        </label>
        <label>
          добавьте категорию товара
          <select {...register("category", { required: true })}>
            <option value="men's clothing">men's clothing"</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
            <option value="women's clothing">women's clothing</option>
          </select>
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default AddGoods;
