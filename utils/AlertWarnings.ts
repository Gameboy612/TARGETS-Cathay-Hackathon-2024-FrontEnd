import { Alert } from "react-native"

const alerts = {
    "auth/invalid-email": {
        title: "Invalid Email",
        message: "Please enter a valid email"
    },
    "auth/missing-password": {
        title: "Missing Password",
        message: "Please enter a password"
    },
    "auth/invalid-credential": {
        title: "Invalid Credential",
        message: "Password Incorrect"
    },
    "auth/configuration-not-found": {
        title: "ADMIN: Configuration Not Found",
        message: "You got this error because you haven't enabled Authentication mode in FireStore console e.g. Email-Password etc."
    }
}

export type ErrorCodeProps = keyof typeof alerts

export const AlertWarnings = (errorcode: ErrorCodeProps, errormessage: string) => {
    if (!(errorcode in alerts)) {
        Alert.alert(errorcode, errormessage);
    };
    Alert.alert(alerts[errorcode].title, alerts[errorcode].message)
}