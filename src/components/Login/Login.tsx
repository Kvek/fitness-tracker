import React, { useState } from "react";

import { styled } from "global-theme";
import { v4 as uuidv4 } from "uuid";

const LoginContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.form`
  box-shadow: 0 0 15px rgb(0 0 0 / 70%);
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 10px;
`;

const FormInput = styled.input`
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  border-radius: 2px;
  height: 20px;
  width: 100%;
`;

const FormSubmitButton = styled.button`
  margin: 10px;
`;

export const Login = ({ setToken }: { setToken: (token: string) => void }) => {
  const [loginDetails, setLoginDetails] = useState<Record<string, any>>({
    userName: "",
    password: "",
  });

  const updateLogin = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLoginDetails((prevState: any) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    const { userName, password } = loginDetails;
    event.preventDefault();

    if (userName && password) {
      const randomIdString = `${uuidv4()}-${userName}-${password}`;
      console.log("randomIdString :>> ", randomIdString);
      setToken(randomIdString);
    }
  };

  return (
    <LoginContainer>
      <FormContainer autoComplete="off" onSubmit={submitForm}>
        <label htmlFor="userName">
          <p>Username</p>
          <FormInput
            type="text"
            value={loginDetails.userName}
            name="userName"
            onChange={updateLogin}
          />
        </label>
        <label htmlFor="password">
          <p>Password</p>
          <FormInput
            type="password"
            value={loginDetails.password}
            name="password"
            onChange={updateLogin}
          />
        </label>
        <div>
          <FormSubmitButton type="submit">Submit</FormSubmitButton>
        </div>
      </FormContainer>
    </LoginContainer>
  );
};
