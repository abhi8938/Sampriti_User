import React, {FunctionComponent} from 'react';
// @ts-ignore
import {Button, Block, Text, theme, Input, Accordion} from 'galio-framework';
import {TouchableOpacity, StyleSheet, StatusBar, SafeAreaView, FlatList, Dimensions} from "react-native";
import materialTheme from "../constants/Theme";

const {width} = Dimensions.get('screen');

type Props = {
    type: string,
    data?: Array<any>,
    selected?: any,
    setSelected(value: any): void,
};
const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
];
const Item = ({item, onPress, style, type}: any) => (<TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text size={15}
          style={{fontWeight: 'bold'}}>{type === 'Addresses' ? `${item.address_1} ${item.address_2}` : item.title}</Text>
</TouchableOpacity>);

const DropDownMenu: FunctionComponent<Props> = ({type, data = [], selected, setSelected}) => {

    const renderItem = ({item}: any) => {
        const backgroundColor = (item.address_1 ? item.address_1 : item.title) === selected ? '#e8eae6' : '#f5f5f5';
        return (
            <Item
                item={item}
                onPress={() => setSelected(item.address_1 ? item.address_1 : item.title)}
                style={{backgroundColor}}
                type={type}
            />
        );
    };
    return <SafeAreaView style={styles.container}>

        <FlatList
            style={{alignItems: 'center'}}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.address_1 ? item.address_1 : item.label}
            extraData={selected}
            ListEmptyComponent={<Text style={{marginVertical: theme.SIZES.BASE / 3, marginHorizontal: theme.SIZES.BASE}}
                                      size={15}>{type === 'Addresses' ? 'No Addresses create new' : ''}</Text>}
        />
    </SafeAreaView>
};

export default DropDownMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: theme.SIZES.BASE,
        width: width - 15,
        borderWidth: 0,
        marginVertical: theme.SIZES.BASE / 3,
        borderRadius: 6,
        elevation: 3,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: theme.SIZES.BASE / 4,
        shadowOpacity: 0.1
    },
});