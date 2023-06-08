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
                gap: 10,
            }}
        >
            <Text
                style={{
                    fontFamily: "NunitoBold",
                    fontSize: SIZES.large,
                    width: "90%",
                    textAlign: "left",
                    marginBottom: 20,
                    marginTop: 10,
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
                inputOptions={{
                    inputMode: "text",
                }}
            />
            <FormInputWithLabel
                label="Contact Person Name"
                value={formState?.contactPersonName}
                setValue={(value) =>
                    handleFormChange("contactPersonName", value)
                }
                inputWidth="90%"
                showAsterisk={true}
                inputOptions={{ inputMode: "text", autocomplete: "name" }}
            />
            <FormInputWithLabel
                label="Designation"
                value={formState?.designation}
                setValue={(value) => handleFormChange("designation", value)}
                inputWidth="90%"
                showAsterisk={true}
                inputOptions={{ inputMode: "text" }}
            />
            <FormInputWithLabel
                label="Email"
                value={formState?.email}
                setValue={(value) => handleFormChange("email", value)}
                inputWidth="90%"
                showAsterisk={true}
                inputOptions={{ inputMode: "email", autocomplete: "email" }}
            />
            <FormInputWithLabel
                label="Contact"
                value={formState?.contact}
                setValue={(value) => handleFormChange("contact", value)}
                inputWidth="90%"
                showAsterisk={true}
                inputOptions={{ inputMode: "tel", autocomplete: "tel" }}
            />
            <FormInputWithLabel
                label="Website"
                value={formState?.website}
                setValue={(value) => handleFormChange("website", value)}
                inputWidth="90%"
                showAsterisk={true}
                inputOptions={{ inputMode: "url" }}
            />
        </View>
    );
};

export default ClientSignup;
