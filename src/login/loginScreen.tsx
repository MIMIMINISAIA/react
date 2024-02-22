import React, {useState} from "react";
import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";

function LoginScreen(): JSX.Element{

    const[email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    function login(){
        const dados = {
            email: email,
            password: password,
        }
        console.log(dados);
    }







    return(
        <View style={styles.container}>
            <Image source={require('../assets/images/user.png')} style={styles.logo}  />
            
            <View style={styles.card}>
                <Text style={styles.title}>Login</Text>
                
                
                <TextInput
                style={styles.input}
                 placeholder="E-mail:" 
                placeholderTextColor="#151413"
                onChangeText={(textEmail)=> setEmail(textEmail)}
                />

                <TextInput
                style={styles.input}
                placeholder="Senha:"
                placeholderTextColor="#151413"
                onChangeText={(textPassword)=> setPassword(textPassword)}
                secureTextEntry
                />
                <TouchableOpacity style={styles.button}
                onPress={()=>{login()}}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Não Possui uma conta? Cadastre-se!</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF63F',

    },
    
    logo: {
        width: 80,
        height: 80,
        marginBottom:20,
        marginTop: -150

    },

    card: {
        backgroundColor: '#FFFF81',
        width: 300,
        borderRadius: 20,
        padding: 20,
        elevation: 3,
        shadowColor: 'rgba(o,o,o,o,.3)',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: "center",
        color: "#151413"
    },

    input: {
        backgroundColor: '#FFF63F',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black'

    },

    button: {
        backgroundColor: 'black',
        height: 40,
        borderRadius: 15,


    },

    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 40,

    },

    forgotPassword: {
        color: "black",
        textAlign: 'center',
        marginTop: 10,

    }




})

export default LoginScreen;