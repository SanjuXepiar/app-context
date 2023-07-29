import { useContext } from "react";
import { AppContext } from "../App";
import { useState } from "react";
export const ChangeProfile = () => {
  const [newUsername, setNewusername] = useState("");
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(event) => {
          setNewusername(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        Change Username
      </button>
    </div>
  );
};
