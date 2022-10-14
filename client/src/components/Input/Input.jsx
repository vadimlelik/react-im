import React from "react";

const Input = ({ label, register, errors, name }) => {
  console.log(errors);
  return (
    <>
      <input
        {...register(name, { required: true })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />

      {errors.name?.type === "required" && (
        <p role="alert">First name is required</p>
      )}
    </>
  );
};
export default Input;
