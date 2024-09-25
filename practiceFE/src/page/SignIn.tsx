import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAccount } from "../api/API";
import { ContextProvider } from "../global/GlobalProvider";

const LoginScreen = () => {
  const { setUser }: any = useContext(ContextProvider);
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // TODO: Implement form submission logic here
    loginAccount({
      email,
      password,
    })?.then((res) => {
      if (res.status === 201) {
        setUser(res.data);
        localStorage.setItem("userData", JSON.stringify(res.data));
        navigate("/question");
      } else {
        return;
      }
    });
  };
  return (
    <div className="ml-6 mt-20">
      <h1>Login Screen</h1>
      <form className="flex flex-col w-[400px]" onSubmit={handleSubmit}>
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

        <button
          type="submit"
          className="text-white bg-red-500 rounded-md my-3 py-3"
        >
          Login
        </button>
      </form>
      <p>
        Already have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginScreen;
