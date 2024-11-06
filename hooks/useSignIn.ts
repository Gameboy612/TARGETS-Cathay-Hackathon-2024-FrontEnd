import { AuthContext } from "@/contexts/AuthContext";
import { FIREBASE_AUTH } from "@/utils/FirebaseConfig";
import { useRoute } from "@react-navigation/native";
import { router } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";

export default function useSignIn() {
    const authContext = useContext(AuthContext);
    const route = useRoute();

    const router_dismissAll = () => {
        if (router.canDismiss()) {
            router.dismissAll();
        }
    }

    useEffect(() => {
        const subscriber = onAuthStateChanged(FIREBASE_AUTH, (user) => {
            authContext.setUser(user);

            if (user) {
                if (route.name != "(auth)/index") return;
                router_dismissAll();
                router.replace("home");
            } else {
                if (route.name == "(auth)/index") return;
                router_dismissAll();
                router.replace("/");
            }
        })
        
        return subscriber;
    }, [])

}