/*TODO: Create list of clickable subCategories
*   - When clicked open productList with and fetch products
*   - Create Skeleton for screen
* */

import React, {FunctionComponent, useState, useEffect} from 'react';
// @ts-ignore
import {Button, Block, NavBar, Text, theme,} from 'galio-framework';
import {Alert, FlatList, Image, Platform, SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";
import materialTheme from "../constants/Theme";
import {HeaderHeight, width} from "../constants/utils";
import SkeletonContent from "react-native-skeleton-content-nonexpo";
import requests from "../Services/requests";

type Props = {
    navigation?: any
    route?: any,
    subCategories?: Array<any>,
    loading?: boolean
};
const request = new requests();
const SubCategories: FunctionComponent<Props> =
    ({
         navigation,
         route,
         loading = false,
         subCategories = [1, 2, 3, 4]
     }) => {
        const [load, setLoad] = useState(loading);
        const [list, setList] = useState(subCategories);
        const getCategories = async () => {
            setLoad(true);
            try {
                let subCategories = await request.getSubCategories(route.params.CID)
                setLoad(false)
                setList(subCategories.data);

            } catch (e) {
                setLoad(false);
                Alert.alert('ERROR', JSON.stringify(e))
            }

        }

        useEffect(() => {
            navigation.setOptions({ title: route.params && route.params.name ? route.params.name  : 'Sub Category' });
            getCategories()

        }, []);
        useEffect(() => {
            console.log('mounted');
            return () => {
                console.log('Do some cleanup');
            }
        }, [])
        const renderItem = ({item}: any) => {
            return <SkeletonContent
                duration={1000}
                animationDirection="horizontalLeft"
                containerStyle={{
                    width:width,
                    padding: 15,
                    height: theme.SIZES.BASE * 4,
                }}
                isLoading={load}
                layout={[
                    {key: 'imageID', width: '100%', height:theme.SIZES.BASE * 3, borderRadius:10},
                ]}
            >
                <TouchableOpacity onPress={() => {
                    navigation.navigate('ProductList', {CID: item.Value})
                }}>
                    <Block style={styles.item} space={'between'} row>
                    <Text style={{padding: theme.SIZES.BASE / 1.5}} size={14}>{item.Text} - {item.Value}</Text>
                        <TouchableOpacity style={styles.delete}
                                          onPress={() => navigation.navigate('ProductList', {CID: item.Value})}>
                            <Image source={{uri: 'https://i.pinimg.com/originals/58/1d/34/581d34b9daddc9f6eec84accc93c7a0c.png'}} style={{width: 20, height: 15}}/>
                        </TouchableOpacity>
                    </Block>
                </TouchableOpacity>
            </SkeletonContent>
        };
        return <SafeAreaView style={{flex: 1, backgroundColor:'#fff'}}>
            <FlatList
                style={{flex:1}}
                contentContainerStyle={{ flex:1,alignItems: 'center'}}
                data={list}
                renderItem={({item}) => renderItem({item})}
                keyExtractor={(item, index) => `${item.Text} - ${index} `}
                ListEmptyComponent={<Block>
                    <Text size={15} bold>No Categories</Text>
                </Block>}
            />
        </SafeAreaView>;
    };

export default SubCategories;


const styles = StyleSheet.create({
    delete: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        height: '99%',
    },
    item: {
        height: theme.SIZES.BASE * 3,
        width: '100%',
        marginVertical: theme.SIZES.BASE / 4,
        borderRadius: 10,
        elevation: 3,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: theme.SIZES.BASE / 4,
        shadowOpacity: 0.1,
        backgroundColor: materialTheme.COLORS.WHITE
    },
    shadow: {
        shadowColor: theme.COLORS.BLACK,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 3,
        shadowOpacity: 0.1,
        elevation: 1,
    },
});
