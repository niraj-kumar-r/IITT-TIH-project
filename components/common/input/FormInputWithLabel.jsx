import React from "react";
import { View, Text, TextInput } from "react-native";
import { SIZES } from "../../../constants/theme";

const FormInputWithLabel = ({
    label,
    value,
    setValue,
    placeholder,
    icon,
    inputOptions,
    inputWidth,
}) => {
    return (
        <View style={{ gap: SIZES.xSmall / 1.5 }}>
            <Text style={{ fontFamily: "NunitoBold" }}>{label}</Text>
            <View
                style={{
                    borderWidth: 0.5,
                    borderRadius: SIZES.medium / 2,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {icon !== undefined ? (
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: SIZES.xSmall,
                        }}
                    >
                        {icon}
                    </View>
                ) : null}
                <TextInput
                    value={value}
                    placeholder={placeholder ?? ""}
                    onChangeText={(text) => setValue(text)}
                    style={{
                        width: inputWidth ?? icon !== undefined ? "85%" : "93%",
                        marginHorizontal: SIZES.xSmall,
                    }}
                    {...inputOptions}
                />
            </View>
        </View>
    );
};

export default FormInputWithLabel;
