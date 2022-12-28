import React from "react";
import { AppBar } from "components/AppBar";
import { Login as LoginProps } from "_utils/interfaces";
import { Button, Container, Form, LoginWrapper, RegisterLink, RegisterWrapper } from "./Login.styles";
import { Input } from "components";
import { api } from "config/api";
import { PagesRoutes } from "features/constants";

export const Login: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [login, setLogin] = React.useState<LoginProps>();
  const [token, setToken] = React.useState<string>("");

  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onLoginButtonClick = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    postSumit();
  }
  const postSumit = async () => {
    setLogin({
      username: username,
      password: password,
    });
    const response = await api.post("/auth/login", login)
    .then((response) => {
      setToken(response.data.token);
      console.log(response.data.token);
      alert("Login successful");
    }).catch((error) => {
      alert("Login failed");
      console.log(error);
  });
  };
  return (
    <div>
      <AppBar />
      <LoginWrapper>
        <Container>
          <Form component="form" onSubmit = {onLoginButtonClick} >
            <Input
              label="Username"
              id="username"
              type="text"
              placeholder="Username"
              onChange={onUsernameChange}
              value={username}
            />
            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="Password"
              onChange={onPasswordChange}
              value={password}
            />
            <Button type="submit">Login</Button>
          </Form>
          <RegisterWrapper>
            Don't have an account? <RegisterLink to = {PagesRoutes.register} >Register here</RegisterLink>
          </RegisterWrapper>
        </Container>
      </LoginWrapper>
    </div>
  );
};
