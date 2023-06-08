import React, { useState } from "react";
import Login from "../../components/login/Login";
import { View } from "react-native";

const StudentLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {};
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Login
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                signUpPath="/student/signup"
                onSubmit={handleSubmit}
            />
        </View>
    );
};

export default StudentLogin;
