import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    password: yup.string().required(),
    email: yup.string().email(),
  })
  .required();

const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>SignUpPage</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label> Введите Пароль </label>
          <input
            {...register("password", { required: true })}
            aria-invalid={errors.password ? "true" : "false"}
            placeholder="Введите password"
          />
          {errors.password?.message && (
            <p role="alert">Введите пожалуйста password</p>
          )}
        </div>
        <div>
          <label> Введите Email</label>

          <input
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
            placeholder="Введите email"
          />
          {errors.email?.message && <p role="alert">{errors.email.message}</p>}

          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
