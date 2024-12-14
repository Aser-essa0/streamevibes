import { useContext } from "react";
import { Context } from "../App";

function useWidth() {
  const data = useContext(Context);
  return data?.width;
}

export default useWidth;
