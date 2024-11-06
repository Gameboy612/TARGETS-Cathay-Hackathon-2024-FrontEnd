import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react'
import { ThemedView } from '@/components/ui/ThemedView'
import { ThemedText } from '@/components/ui/ThemedText'
import TextInputWithIcon from '@/components/form/TextInputWithIcon'
import { ThemedButton } from '@/components/ui/ThemedButton'
import { Link } from 'expo-router'
import { FIREBASE_AUTH } from '@/utils/FirebaseConfig'
import { User, signInWithEmailAndPassword } from 'firebase/auth'
import LoadingWrapper from '@/components/ui/LoadingScreen'
import { AuthContext } from '@/contexts/AuthContext'
import { AlertWarnings } from '@/utils/AlertWarnings'

export function SignInForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [loading, setLoading] = React.useState(false);

  const auth = FIREBASE_AUTH;

  const authContext = useContext(AuthContext);
  
  const loginButton = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password).then(userCredential => {
      console.log(userCredential)
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
      AlertWarnings(errorCode, errorMessage)
      //...
    }).finally(() => {
      setLoading(false);
    });
  }

  return (
    <LoadingWrapper loading={loading}>
      <ThemedView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
        <TextInputWithIcon
          title="Enter your Email"
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
          autoCorrect={false}
          icon={{name: 'mail', size: 23, color: 'black'}}
          keyboardType='email-address'
        />
        <TextInputWithIcon
          title="Enter your Password"
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize='none'
          autoCorrect={false}
          icon={{name: 'key', size: 23, color: 'black'}}
        />
        <ThemedButton
          style={{
            width: 150,
            height: 50,
          }}
          onPress={loginButton}
        >
          <ThemedText colorName="accent_text" style={{fontSize: 20, fontWeight: '800'}}>Sign In</ThemedText>
        </ThemedButton>
        <Link href="/register" asChild>
          <TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <ThemedText>Don't have account? </ThemedText>
              <ThemedText colorName="tint"> Register</ThemedText>
            </View>
          </TouchableOpacity>
        </Link>
      </ThemedView>

    </LoadingWrapper>
  )
}