import React, { FunctionComponent } from 'react';
import {ScrollView, View} from "react-native";
import materialTheme from "../constants/Theme";
// @ts-ignore
import {Block, Text, theme, Button} from "galio-framework";

type Props = {};

const Contact: FunctionComponent<Props> = (props) => {

    return <Block style={{padding:theme.SIZES.BASE}}>
        <ScrollView>
            <Text size={22} color={materialTheme.COLORS.TEXT} style={{marginBottom: theme.SIZES.BASE, fontWeight:'700'}} > Storepoint:
            <Text size={18} color={materialTheme.COLORS.TEXT} style={{marginBottom: theme.SIZES.BASE, fontWeight:'500'}}> Bidhanagar, DGR-713212</Text></Text>
            <Text size={22} color={materialTheme.COLORS.TEXT} style={{marginBottom: theme.SIZES.BASE, fontWeight:'700'}} > Store Owner:
                <Text size={18} color={materialTheme.COLORS.TEXT} style={{marginBottom: theme.SIZES.BASE, fontWeight:'500'}}> Suprabhat Dey (CEO)</Text></Text>
            <Text size={22} color={materialTheme.COLORS.TEXT} style={{marginBottom: theme.SIZES.BASE, fontWeight:'700'}} > Toll Free No :
                <Text size={18} color={materialTheme.COLORS.TEXT} style={{marginBottom: theme.SIZES.BASE, fontWeight:'500'}}> 1800 999 1639</Text></Text>
        </ScrollView>
    </Block>;;
};

export default Contact;
