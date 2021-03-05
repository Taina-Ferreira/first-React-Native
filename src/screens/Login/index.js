import React, { useState } from 'react'
import { Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import styles from './styles';

const Login = ({ navigation }) => {

    const [user,setUser] = useState('');
    const [pw,setPw] = useState('');


    const Logar = () => navigation.navigate("Lista")

    const autenticacao = () => {
        if (Platform.OS === "web") {
            if (user.email === usuario && user.senha === senha) {
                navigation.navigate("Lista")
            } else {
                alert("Credenciais inválidas, digite os campos novamente!")
            }
        } else {
            if (user.email === usuario && user.senha === senha) {
                navigation.navigate("Lista")
            } else {
                Alert.alert("Credenciais Invalidas!", "Digite as credenciais corretamente")
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.PaddingContainer}>
                <Text style={styles.textStyle}>Login</Text>
            </View>
            <View style={styles.PaddingContainer}>
                <TextInput  placeholder="Digite o email..." 
                            style={styles.input} value={user}
                            onChangeText={(text) => setUser(text)}
                />
                <TextInput  placeholder="Digite o senha..." 
                            style={styles.input} 
                            secureTextEntry={true}
                            value={pw}
                            onChangeText={(text) => setPw(text)}
                />

                <View style={styles.Button}>
                    <Button
                        title="Entrar"
                        onPress={Logar} />
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Login