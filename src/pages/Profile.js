import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeProfile } from "../components/ChangeProfile";
export const Profile = () => {
  const { userName } = useContext(AppContext);
  return (
    <div>
      <h1>This is the Profile Page of:{userName}</h1>
      <ChangeProfile />
    </div>
  );
};
