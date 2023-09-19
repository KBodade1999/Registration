import { StyleSheet, SafeAreaView, TextInput, Text, Button } from "react-native";
import { useEffect, useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setusername] = useState("");



    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {

        fetch('https://ymahesh29.pythonanywhere.com/accounts/addUser', {
            method: 'GET',
            //Request Type
        })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                //Success
                alert(JSON.stringify(responseJson));
                console.log(responseJson);
            })
            //If response is not in json then in error
            .catch((error) => {
                //Error
                alert(JSON.stringify(error));
                console.error(error);
            });

    }

    //GET request


    const AddLogin = async () => {

        try {
            const result = await fetch('https://ymahesh29.pythonanywhere.com/accounts/addUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": username,
                    "email": email,
                    "password": password
                })
            });



            console.log(result.ok)
           
            //on success
            if (result.ok === true) {
                const jsonResult = await result.json();
                return jsonResult;
            }
            // return null;
        } catch (error) {
            console.log("Error", error);
        }

    }



    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Registartion Form</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                keyboardType="visible-password"
                secureTextEntry
                style={styles.input}
                onSubmitEditing={() => alert("Welcome to GeeksforGeeks")}
            />

            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={(text) => setusername(text)}
                keyboardType="visible-password"
                secureTextEntry
                style={styles.input}
                onSubmitEditing={() => alert("Welcome to GeeksforGeeks")}
            />


            <Button
                title="Submit"
                style={styles.space}
                onPress={AddLogin}

            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#228B22",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 40,
        color: "#fff",
        marginBottom: 20,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        width: "80%",
        borderWidth: 1,
        marginBottom: 20,
        marginTop: 15,
        color: "#000",
    },
    space: {
        height: 20, // Add space of 20 units between items
    },
});
