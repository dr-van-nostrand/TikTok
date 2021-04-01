//11 compomnete de signIn
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import AppInput from "../components/AppInput";
import { signUp } from "../store/user";
import { AppButton } from "../theme";
import UserFormLayout from "./UserFormLayout";

let SignUp = (props) => {
  //12 modificar el estado de
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  let onSubmit = async(data) => {
    console.log(data);
    await dispatch(signUp({ credentials: data }));
    navigate('/videos');
  };

  return (
    <UserFormLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AppInput
          type="email"
          name="email"
          register={register}
          label="Enter Email"
        />
        <AppInput
          type="text"
          name="username"
          register={register}
          label="Enter Username"
        />
        <AppInput
          type="password"
          name="password"
          register={register}
          label="Enter Password"
        />
        <AppButton type="submit" small>
          Create Account
        </AppButton>
      </form>
    </UserFormLayout>
  );
};

export default SignUp;
