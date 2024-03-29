import "react-native-gesture-handler";
import { View, Text, ScrollView, Image, ImageBackground } from "react-native";

import { COLORS, SIZES, FONT } from "../constants/theme";
import Announcements from "../components/home/Announcements";
import logo from "../assets/images/iittnifLogo.png";
import imageBg from "../assets/images/satelliteBg.jpeg";

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.pureWhite }}>
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
                            height: 130,
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
                                    fontFamily: FONT.medium,
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
