import { View, Text } from "react-native";
import React from "react";

import FormInputWithLabel from "../common/input/FormInputWithLabel";
import AccentButton from "../common/btns/AccentButton";
import { COLORS, SIZES } from "../../constants/theme";

const ClientSignup = ({ formState, setFormState }) => {
    const handleFormChange = (key, value) => {
        setFormState({ ...formState, [key]: value });
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.pureWhite,
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "center",
            }}
        >
            <Text
                style={{
                    fontFamily: "NunitoBold",
                    fontSize: SIZES.large,
                    width: "90%",
                    textAlign: "left",
                }}
            >
                Industries Clients
            </Text>
            <FormInputWithLabel
                label="Company Name"
                value={formState?.companyName}
                setValue={(value) => handleFormChange("companyName", value)}
                inputWidth="90%"
                showAsterisk={true}
            />
        </View>
    );
};

export default ClientSignup;
