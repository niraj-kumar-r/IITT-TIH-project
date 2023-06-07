import React from "react";
import { FlatList, Text, View } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import AnnouncementBtn from "../common/btns/AnnouncementBtn";
import { announcements } from "../../data/announcementData";

const Announcements = () => {
    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 45,
                width: "100%",
            }}
        >
            <Text
                style={{
                    fontFamily: "NunitoBold",
                    fontSize: 28,
                    textAlign: "center",
                }}
            >
                Announcements
            </Text>
            <View
                style={{
                    borderColor: COLORS.primary,
                    borderWidth: 0.5,
                    height: 1.5,
                    width: "45%",
                    margin: 10,
                }}
            ></View>
            <View
                style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {announcements.map((announcement, index) => (
                    <AnnouncementBtn key={index} announcement={announcement} />
                ))}
            </View>
        </View>
    );
};

export default Announcements;
