import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import SignIn from "./login";

export default function Index() {
  const authContext = useContext(AuthContext);  
  
  return (
      <SignIn />
    )
}