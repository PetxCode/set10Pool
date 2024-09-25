import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createAccount } from "../api/API";

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [schoolName, setSchoolName] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // TODO: Implement form submission logic here
    createAccount({
      name,
      email,
      password,
      schoolName,
      avatar,
      phoneNumber,
    })?.then((res) => {
      if (res.status === 201) {
        navigate("/login");
      } else {
        return;
      }
    });
  };
  return (
    <div className="ml-6 mt-20">
      <h1>Register Screen</h1>
      <form className="flex flex-col w-[400px]" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
          className="border h-[45px] my-2 pl-2 rounded-md "
        />
        <input
          type="email"
          placeholder="email"
          className="border h-[45px] my-2 pl-2 rounded-md "
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          className="border h-[45px] my-2 pl-2 rounded-md "
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
        <input
          placeholder="school name"
          className="border h-[45px] my-2 pl-2 rounded-md "
          value={schoolName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSchoolName(e.target.value);
          }}
        />
        <input
          placeholder="phone number"
          className="border h-[45px] my-2 pl-2 rounded-md "
          value={phoneNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <input
          placeholder="Avatar"
          className="border h-[45px] my-2 pl-2 rounded-md "
          value={avatar}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setAvatar(e.target.value);
          }}
        />
        <button
          type="submit"
          className="text-white bg-red-500 rounded-md my-3 py-3"
        >
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterScreen;
