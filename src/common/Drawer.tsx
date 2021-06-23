import React, {FunctionComponent} from "react";
import {Alert, Linking, StyleSheet, TouchableOpacity} from "react-native";
// @ts-ignore
import {Block, Text, theme} from "galio-framework";

import Icon from "./Icon";
import materialTheme from "../constants/Theme";
import AsyncStorage from "@react-native-community/async-storage";

type props = {
    title: string,
    navigation: any
}
const DrawerItem: FunctionComponent<props> =
    ({
         title,
         navigation
     }) => {
        const renderIcon = () => {

            switch (title) {
                case "MyOrders":
                    return (
                        <Icon
                            size={18}
                            name="dingding"
                            family="AntDesign"
                            color={materialTheme.COLORS.MUTED}
                        />
                    );
                case "Addresses":
                    return (
                        <Icon
                            size={18}
                            name="shop"
                            family="Entypo"
                            color={materialTheme.COLORS.MUTED}
                        />
                    );
                case "Wallet":
                    return (
                        <Icon
                            size={18}
                            name="account-balance-wallet"
                            family="MaterialIcons"
                            color={materialTheme.COLORS.MUTED}
                        />
                    );
                case "Wishlist":
                    return (
                        <Icon
                            size={22}
                            name="tag"
                            family="EvilIcons"
                            color={materialTheme.COLORS.MUTED}
                        />
                    );
                case "About Us":
                    return (
                        <Icon
                            size={18}
                            name="details"
                            family="MaterialIcons"
                            color={materialTheme.COLORS.MUTED}
                        />
                    );
                case "Contact":
                    return (
                        <Icon
                            size={18}
                            name="customerservice"
                            family="AntDesign"
                            color={materialTheme.COLORS.MUTED}
                        />
                    );
                case "Terms and Conditions":
                    return (
                        <Icon
                            size={16}
                            name="documents"
                            family="Entypo"
                            color={materialTheme.COLORS.MUTED}
                        />
                    );
                case "FAQ":
                    return (
                        <Icon
                            size={18}
                            name="questioncircle"
                            family="AntDesign"
                            color={materialTheme.COLORS.MUTED}
                        />
                    );
                case "Policy":
                    return (
                        <Icon
                            size={18}
                            name="dock"
                            family="MaterialIcons"
                            color={materialTheme.COLORS.MUTED}
                        />
                    );
                case "Sign Out":
                    return (
                        <Icon
                            size={16}
                            name="log-out"
                            family="Entypo"
                            color={materialTheme.COLORS.MUTED}
                        />
                    );

                default:
                    return null;
            }
        };
        const logout = async () => {
            await AsyncStorage.clear();
            Alert.alert('Signed Out', 'Please Sign in to shop')
            return navigation.reset({
                index: 0,
                routes: [{name: 'App'}],
            });
        };
        const handlePress = () => {
            switch (title) {
                case 'Sign Out':
                    return logout()
                case 'About Us':
                    return navigation.navigate('Informative',{name:'About Us'})
                case 'Contact':
                    return navigation.navigate('Contact')
                case 'Terms and Conditions':
                    return navigation.navigate('Informative',{name:'Terms and Conditions'})
                case 'Policy':
                    return navigation.navigate('Informative',{name:'Policy'})
                case 'FAQ':
                    return navigation.navigate('Informative',{name:'FAQ'})
                default:
                    return navigation.navigate(title)
            }
        }
        return (
            <TouchableOpacity
                style={{height: 55}}
                onPress={() => handlePress()}
            >
                <Block
                    flex
                    row
                    style={[
                        styles.defaultStyle,
                        styles.shadow
                    ]}
                >
                    <Block middle flex={0.1} style={{marginRight: 28}}>
                        {renderIcon()}
                    </Block>
                    <Block flex={0.9}>
                        <Text size={16} color={"black"}>
                            {title}
                        </Text>
                    </Block>
                </Block>
            </TouchableOpacity>
        );
    }

export default DrawerItem;

const styles = StyleSheet.create({
    defaultStyle: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginBottom: 6
    },
    activeStyle: {
        backgroundColor: materialTheme.COLORS.ACTIVE,
        borderRadius: 4
    },
    shadow: {
        shadowColor: theme.COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
        shadowOpacity: 0.2
    }
});
