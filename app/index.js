import { View, Text, ScrollView, Image, ImageBackground } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, SIZES } from "../constants/theme";
import { Stack } from "expo-router";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import Announcements from "../components/home/Announcements";
import menuIcon from "../assets/icons/menu.png";
import logo from "../assets/images/iittnifLogo.png";
import imageBg from "../assets/images/satelliteBg.jpeg";

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.pureWhite }}>
            <Stack.Screen
                options={{
                    headerTitle: "Home",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontFamily: "NunitoBold",
                        fontSize: 20,
                    },
                    headerStyle: { backgroundColor: COLORS.pureWhite },
                    // headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={menuIcon} dimension="60%" />
                    ),
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.small,
                        paddingTop: 0,
                    }}
                >
                    <View
                        style={{
                            width: "100%",
                            height: 150,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            source={logo}
                            resizeMode="contain"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </View>
                    <View
                        style={{
                            width: "100%",
                        }}
                    >
                        <ImageBackground
                            source={imageBg}
                            style={{
                                height: 200,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    color: COLORS.pureWhite,
                                    fontFamily: "NunitoMedium",
                                    fontSize: SIZES.xLarge,
                                    textAlign: "center",
                                }}
                            >
                                Technology Innovation Hub in Positioning and
                                Precision Technologies
                            </Text>
                        </ImageBackground>
                    </View>
                </View>
                <View style={{ flex: 1, padding: SIZES.small }}>
                    <Announcements />
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;
