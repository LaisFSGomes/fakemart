import { AppBar } from "components/AppBar";
import React from "react";
import { Button, Container, Form, RegisterWrapper } from "./Register.styles";
import { Input } from "components";
import { api } from "config/api";
import { User } from "_utils/interfaces";
export const Register: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [user, setUser] = React.useState<User>();

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onPassword2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword2(event.target.value);
  };
  const onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  const onLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  const onCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  const onStreetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value);
  };
  const onNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };
  const onZipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZip(event.target.value);
  };
  const onPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const onRegisterButtonClick = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    postSubit();
  };
  const postSubit = async () => {
    setUser({
      email: email,
      username: username,
      password: password,
      name: {
        firstname: firstName,
        lastname: lastName,
      },
      address: {
        city: city,
        street: street,
        number: parseInt(number),
        zipcode: zip,
      },
      phone: phone,
    });
    const response = await api
      .post("/users", user)
      .then((response) => {
        alert("deu certo! " + response);
        console.log(response);
        setEmail("");
        setUsername("");
        setPassword("");
        setPassword2("");
        setFirstName("");
        setLastName("");
        setCity("");
        setStreet("");
        setNumber("");
        setZip("");
        setPhone("");
      }).catch((error) => {
        alert("deu ruim! " + error);
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <AppBar />
      <RegisterWrapper>
        <Container>
          <Form component="form" onSubmit={onRegisterButtonClick}>
            <Input
              label="First Name"
              id="firstName"
              type="text"
              placeholder="First Name"
              onChange={onFirstNameChange}
              value={firstName}
            />
            <Input
              label="Last Name"
              id="lastName"
              type="text"
              placeholder="Last Name"
              onChange={onLastNameChange}
              value={lastName}
            />
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="Email"
              onChange={onEmailChange}
              value={email}
            />
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
            <Input
              label="Confirm Password"
              id="password2"
              type="password"
              placeholder="Confirm Password"
              onChange={onPassword2Change}
              value={password2}
            />
            <Input
              label="City"
              id="city"
              type="text"
              placeholder="City"
              onChange={onCityChange}
              value={city}
            />
            <Input
              label="Street"
              id="street"
              type="text"
              placeholder="Street"
              onChange={onStreetChange}
              value={street}
            />
            <Input
              label="Number"
              id="number"
              type="number"
              placeholder="Number"
              onChange={onNumberChange}
              value={number}
            />
            <Input
              label="Zip"
              id="zip"
              type="text"
              placeholder="Zip"
              onChange={onZipChange}
              value={zip}
            />
            <Input
              label="Phone"
              id="phone"
              type="text"
              placeholder="Phone"
              onChange={onPhoneChange}
              value={phone}
            />
            <Button type="submit">Register</Button>
          </Form>
        </Container>
      </RegisterWrapper>
    </React.Fragment>
  );
};
