import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Login.module.scss"
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        {...register("name", { required: "You must fill in Name" })}
        className={errors.name ? "input input-error" : "input"}
        placeholder="Enter your name"
      />
      {errors.name && <p className="error-message">{errors.name.message}</p>}

      <label>Surname</label>
      <input
        type="text"
        {...register("surname", { required: "You must fill in Surname" })}
        className={errors.surname ? "input input-error" : "input"}
        placeholder="Enter your surname"
      />
      {errors.surname && <p className="error-message">{errors.surname.message}</p>}

      <label>Phone Number</label>
      <input
        type="tel"
        {...register("phone", {
          required: "You must fill in Phone Number",
          pattern: {
            value: /^[0-9]{8,15}$/,
            message: "Enter a valid phone number",
          },
        })}
        className={errors.phone ? "input input-error" : "input"}
        placeholder=" 0987654321"
      />
      {errors.phone && <p className="error-message">{errors.phone.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;

