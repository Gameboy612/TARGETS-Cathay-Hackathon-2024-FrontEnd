import { StyleSheet, View, Text } from "react-native";

export type LoadingWrapperProps = {
    loading: boolean;
    children: React.ReactNode;
}

export default function LoadingWrapper({ loading, children }: LoadingWrapperProps) {
    return (
        <>
            {loading ? <View style={styles.loading}><Text style={styles.loading_text}>Loading</Text></View> : <></>}
            {children}
        </>
    )
}

const styles = StyleSheet.create({
    loading: {
        backgroundColor: '#0003',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1000,
        justifyContent: 'center'
    },
    loading_text: {
        alignSelf: 'center',
        fontSize: 25,
        backgroundColor: '#0008',
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: '#fff',
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 3
    },
})