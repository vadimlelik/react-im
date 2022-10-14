import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import Input from "../../components/Input/Input";

const schema = yup
  .object({
    login: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email(),
  })
  .required();

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1> Regestration </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label> Введите пожалуйста логин</label>
          <input
            {...register("login", { required: true })}
            aria-invalid={errors.login ? "true" : "false"}
            placeholder="Введите логин"
          />
          {errors.login?.type === "required" && (
            <p role="alert">Введите пожалуйста Login</p>
          )}
        </div>
        <div>
          <label> Введите Пароль </label>
          <input
            {...register("password", { required: true })}
            aria-invalid={errors.password ? "true" : "false"}
            placeholder="Введите password"
          />
          {errors.password?.type === "required" && (
            <p role="alert">Введите пожалуйста Login</p>
          )}
        </div>
        <div>
          <label> Введите пожалуйста имя</label>
          <input
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
            placeholder="Введите name"
          />
          {errors.name?.type === "required" && (
            <p role="alert">Введите пожалуйста Name</p>
          )}
        </div>
        <div>
          <label> Введите пожалуйста Email</label>
          <input
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
            placeholder="Введите email"
          />
          {errors.email?.message && <p role="alert">{errors.email.message}</p>}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
