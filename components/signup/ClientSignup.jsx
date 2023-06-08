import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

import FormInputWithLabel from "../common/input/FormInputWithLabel";
import AccentButton from "../common/btns/AccentButton";
import { COLORS, SIZES } from "../../constants/theme";

const ClientSignup = ({ formState, setFormState, onSubmit }) => {
    const handleFormChange = (key, value) => {
        setFormState({ ...formState, [key]: value });
    };

    const coreAreaList = [
        "Quantum Technologies",
        "Geospatial Tools",
        "Data Science",
        "Radio Frequency",
        "Image Processing",
        "Indoor Mapping",
        "Robotics",
        "Defence",
    ];

    const appliedAreaList = [
        "Precision Agriculture",
        "Disaster Management",
        "Smart Cities",
        "Smart Villages",
        "Land Records and Insurance",
        "Navigation",
        "Policy and Legal",
    ];

    return (
        <View style={{ marginBottom: SIZES.xxLarge * 2 }}>
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
                        marginTop: 40,
                    }}
                >
                    Subject Field
                </Text>
                <View
                    style={{
                        gap: SIZES.xSmall / 1.5,
                        width: "100%",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontFamily: "NunitoBold", width: "90%" }}>
                        Core Area
                        <Text style={{ color: COLORS.tertiary }}>*</Text>
                    </Text>
                    <View
                        style={{
                            borderWidth: 0.5,
                            borderRadius: SIZES.medium / 2,
                            width: "90%",
                            justifyContent: "center",
                        }}
                    >
                        <Picker
                            selectedValue={formState?.coreArea}
                            onValueChange={(itemValue) =>
                                handleFormChange("coreArea", itemValue)
                            }
                            prompt="Core Area"
                        >
                            {coreAreaList.map((area, index) => (
                                <Picker.Item
                                    value={area}
                                    key={index}
                                    label={area}
                                />
                            ))}
                        </Picker>
                    </View>
                </View>
                <View
                    style={{
                        gap: SIZES.xSmall / 1.5,
                        width: "100%",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontFamily: "NunitoBold", width: "90%" }}>
                        Applied Area
                        <Text style={{ color: COLORS.tertiary }}>*</Text>
                    </Text>
                    <View
                        style={{
                            borderWidth: 0.5,
                            borderRadius: SIZES.medium / 2,
                            width: "90%",
                            justifyContent: "center",
                        }}
                    >
                        <Picker
                            selectedValue={formState?.coreArea}
                            onValueChange={(itemValue) =>
                                handleFormChange("coreArea", itemValue)
                            }
                            prompt="Applied Area"
                        >
                            {appliedAreaList.map((area, index) => (
                                <Picker.Item
                                    value={area}
                                    key={index}
                                    label={area}
                                />
                            ))}
                        </Picker>
                    </View>
                </View>
            </View>

            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    columnGap: SIZES.medium,
                    marginTop: 20,
                }}
            >
                <AccentButton
                    label="Cancel"
                    width="100%"
                    onSubmit={() => setFormState({})}
                    accentColor={COLORS.gray2}
                    textColor="black"
                    textStyle={{
                        fontSize: SIZES.medium,
                        paddingHorizontal: SIZES.xxLarge,
                    }}
                />
                <AccentButton
                    label="Register"
                    onSubmit={onSubmit}
                    width="100%"
                    textStyle={{
                        fontSize: SIZES.medium,
                        paddingHorizontal: SIZES.xxLarge,
                    }}
                />
            </View>
        </View>
    );
};

export default ClientSignup;
