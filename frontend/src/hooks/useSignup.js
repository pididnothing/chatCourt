import React from "react";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../context/authContext.jsx";

const useSignup = () => {
  const [loading, setLoading] = React.useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const signup = async ({
    fullname,
    email,
    username,
    password,
    confirmPassword,
  }) => {
    const success = handleInputErrors({
      fullname,
      email,
      username,
      password,
      confirmPassword,
    });
    if (!success) {
      toast.error("Invalid input");
      return false;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname, email, username, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);

      if (res.ok) {
        toast.success(data.message);
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullname,
  email,
  username,
  password,
  confirmPassword,
}) {
  if (
    fullname === "" ||
    email === "" ||
    username === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    toast.error("All fields are required");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    toast.error("Invalid email format");
    return false;
  }
  if (username.trim().length < 1) {
    toast.error("Username must have at least 1 non-white character");
  }
  return true;
}
