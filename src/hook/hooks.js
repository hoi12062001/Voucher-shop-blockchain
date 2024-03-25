import Context from "./Context";
import { useContext } from "react";

const useStore = () => {
  const state = useContext(Context);

  return state;
};

export { useStore };
