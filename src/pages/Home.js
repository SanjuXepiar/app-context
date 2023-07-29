import { useContext } from "react";
import { AppContext } from "../App";
export const Home = () => {
  const { userName } = useContext(AppContext);
  return <h1>This is the Home Page and the User is:{userName}</h1>;
};
