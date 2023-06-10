import React from "react";
import { Text, ScrollView } from "react-native";
import { COLORS, SIZES, FONT } from "../../constants/theme";

const AboutUs = () => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1,
                backgroundColor: COLORS.pureWhite,
                padding: SIZES.small,
            }}
        >
            <Text
                style={{
                    fontFamily: FONT.bold,
                    fontSize: SIZES.medium,
                    textDecorationLine: "underline",
                }}
            >
                About the NM-ICPS
            </Text>
            <Text
                style={{
                    marginBottom: 15,
                    marginTop: 10,
                    fontFamily: FONT.regular,
                }}
            >
                Cyber-Physical Systems (CPS) are a new class of engineered
                systems that integrate computation and physical processes in a
                dynamic environment. CPS encompasses technology areas of
                Cybernetics, Mechatronics, Design and Embedded systems, Internet
                of Things (IoT), Big Data, Artificial Intelligence (AI), and
                many more. The CPS systems are intelligent, autonomous, and
                efficient and are expected to drive innovation in sectors as
                diverse as agriculture, water, energy, transportation,
                infrastructure, security, health, and manufacturing. Thus, it is
                heralded as the next paradigm shift in technology that can
                exponentially spur growth and technology-led economic
                development. To harness the potential of this new wave of
                technology and make India a leading player in CPS, the Union
                Cabinet approved the National Mission on Interdisciplinary
                Cyber-Physical Systems (NM-ICPS) to be implemented by DST with a
                total outlay of Rs.3660 crore for a period of five years. The
                Mission aims to create a strong foundation and a seamless
                ecosystem for CPS technologies by coordinating and integrating
                nationwide efforts encompassing knowledge generation,
                translation research, technology, product development, human
                resource development, innovation &commercialization standards,
                and international collaborations. The Mission is implemented
                through a network of 25 Technology Innovation Hubs (TIHs)
                established across the country. Each hub will follow a
                technology life cycle approach, addressing all stages
                viz—Knowledge-Development-Translation-Commercialization in their
                assigned Technology Vertical. The hubs will be equipped and
                supported to function independently as stand-alone entities.
                However, they would leverage each other’s strengths and power of
                collaboration to produce synergistic outcomes. The NM-ICPS
                Detailed Project Report (DPR) shall be an overall guiding
                document for the Mission and Hubs.
            </Text>

            <Text
                style={{
                    marginBottom: 20,
                    marginTop: 10,
                    fontFamily: FONT.regular,
                }}
            >
                Positioning and Precision Technologies (PPTs) are indispensable
                tools for monitoring, integrating, and analyzing spatially and
                temporally distributed resources to aid in effective
                decision-making across multiple domains. These technologies
                include remote sensing (non-invasive), Geographical Information
                Systems (GIS) and Global Positioning Systems (GPS). The
                Technology Innovation Hub (TIH) on PPT will provide a unique
                platform for researchers, industries, stakeholders and end-users
                across multiple disciplines. The TIH aims to become a top
                contributor to many Government of India initiatives such as Make
                in India, Atmanirbhar Bharat Abhiyaan, and Start-up Ecosystem
                making India a self-reliant in PPT. The TIH will follow a
                technology life cycle approach, addressing all stages viz.
                Knowledge-Development-Translation-Commercialization in the PPT
                Technologies. Besides, the TIH will align with the country’s
                broad objective of using GIS as an essential component for
                empowering citizens and bringing inclusive growth by mapping,
                monitoring, and analyzing the interplay between the various
                socio-economic factors that supports the sustainable development
                of the country. In addition, the Hub will primarily focus on
                Public Private Partnership (PPP) model to generate revenue
                through: (i) Research and development sponsorship from
                industries, government and start-ups in form of innovative
                products and services in PPT; (ii) linkage with industries,
                accelerators and Venture Capital to create funding ecosystem;
                (iii) training and consulting; (iv) standards development and
                policy creation for rapid adaptation of PPT across various
                stakeholders; and (iv) databank creation across strategic areas
                of PPT. The TIH on PPT will find and nurture new and innovative
                solutions for the interconnected grand problems in Positioning
                and Precision Technology which include applications of precision
                timing and positioning devices (atomic clocks), precision
                sensors for air/water/soil monitoring and remote sensing
                applications to terrain mapping, monitoring of agricultural and
                natural resources development, management and conservation and
                also towards addressing challenges related to disaster
                management.
            </Text>
        </ScrollView>
    );
};

export default AboutUs;
