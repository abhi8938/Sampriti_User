/* TODO:
*   1.copy screen from template(DONE)
*   2.modify according to typescript(DONE)
*   3.add/remove features to complete the screen (DONE)
* */

import React, {FunctionComponent, useEffect, useState} from 'react';
import {StyleSheet, Dimensions, ImageBackground, ScrollView, TouchableWithoutFeedback, Alert} from 'react-native';
// @ts-ignore
import {Block, Text, theme} from 'galio-framework';
import {WooCommerce} from "../constants/config";
import SkeletonContent from "react-native-skeleton-content-nonexpo";
import requests from "../Services/requests";

const {width} = Dimensions.get('screen');
const noImageURL = 'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
const request = new requests();
type Props = {
    navigation?: any,
    route?: any,
    categories?: any,
    isLoading?: boolean,
    error?: string,
};
const Categories: FunctionComponent<Props> = ({navigation, route, categories = [1,2,3,4], isLoading = false, error = ''}) => {
    const [load, setLoad] = useState(isLoading);
    const [categoryList, setCategories] = useState(categories);

    const getData = async () => {
        setLoad(true);
        let categor = []
        try {
            const data = await request.getCategories();
            categor = data.data;
            setLoad(false);
            setCategories(categor)
        } catch (e) {
            setLoad(false);
            Alert.alert('Error', JSON.stringify(e));
        }
    }

    useEffect(() => {
        getData()
    }, []);

    const renderCategories = () => {
        return (
            <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={styles.categoryList}>
                <Block flex>
                    {categoryList.map((category: any) => {
                        return <SkeletonContent
                            key={category.CategoryId ? `category-${category.CategoryId}`:`category-${category}`}
                            duration={1200}
                            animationDirection="horizontalLeft"
                            containerStyle={{flex: 1, width: width}}
                            isLoading={load}
                            layout={[
                                {
                                    key: 'category_main',
                                    width: width - (theme.SIZES.BASE * 2),
                                    height: 152,
                                    marginBottom: theme.SIZES.BASE / 1.5,
                                    borderRadius: 4,
                                    alignSelf: "center"
                                },
                            ]}
                        >
                            {category.CategoryId ?<TouchableWithoutFeedback
                                onPress={() => navigation.navigate('Sub', {CID: category.CategoryId})}>
                                <Block flex card style={[styles.category, styles.shadow]}>
                                    <ImageBackground
                                        source={{uri:'https://freepngimg.com/thumb/grocery/41637-4-groceries-free-hd-image-thumb.png'}}
                                        style={[styles.imageBlock, {
                                            width: width - (theme.SIZES.BASE * 2),
                                            height: 152
                                        }]}
                                        imageStyle={{width: width - (theme.SIZES.BASE * 2), height: 252}}
                                    >
                                        <Block style={styles.categoryTitle}>
                                            <Text size={18} bold
                                                  color={theme.COLORS.WHITE}>{category.CategoryName} </Text>
                                        </Block>
                                    </ImageBackground>
                                </Block>
                            </TouchableWithoutFeedback>: null}
                        </SkeletonContent>
                    })}
                </Block>
            </ScrollView>
        )
    }
    return <Block flex center style={styles.categories}>
        {renderCategories()}
    </Block>
};

export default Categories;

const styles = StyleSheet.create({
    categories: {
        width: width,
        backgroundColor: theme.COLORS.WHITE,
    },
    categoryList: {
        justifyContent: 'center',
        paddingTop: theme.SIZES.BASE * 1.5,
    },
    category: {

        marginHorizontal: theme.SIZES.BASE,
        marginVertical: theme.SIZES.BASE / 2,
        borderWidth: 0,
    },
    categoryTitle: {
        height: '100%',
        paddingHorizontal: theme.SIZES.BASE,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBlock: {
        overflow: 'hidden',
        borderRadius: 4,
        resizeMode:'contain'
    },
    shadow: {
        shadowColor: theme.COLORS.BLACK,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 3,
        shadowOpacity: 0.1,
        elevation: 2,
    }
});
