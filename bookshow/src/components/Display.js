import { useContext } from "react";
import Context from "./Context";

export default function Display() {
  const txt = useContext(Context);

  return <div>{txt}</div>;
}
