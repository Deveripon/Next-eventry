import { AuthContext } from "@/contexts";
import { useContext } from "react";

export function useAuth() {
    const { auth, setAuth } = useContext(AuthContext);
    return { auth, setAuth };
}

