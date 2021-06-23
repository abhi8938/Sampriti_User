/* TODO:
*   1.Copy screen from template(DONE)
*   2.Modify according to typescript(DONE)
*   3.Add/remove features to complete the screen(DONE)
*   5.get cart in local storage (DONE)
*   6.Create Skeleton(DONE)
*   7.Get Items using product id (DONE)
*   8.Quantity select(DONE)
*   9.login status:
*     - If logged in
*        - Select Address feature - Virtualized list with toggle capability(DONE)  - if logged in - show addresses(DONE) - else - button to Login (DONE)
*       - list item - list details(name, quantity, etc.)(DONE)
*       - coupon - Input , Button, text - Coupon invalid or valid(DONE)
*       - order cost - calculate cost of order and render (DONE)
*       - Virtualized list with toggle capability (DONE)
*       - payment methods - options -(Cash on delivery, Wallet, payonline)(DONE) - if logged in - show Options(DONE)  - else please login(DONE)
*       - verify and create order request(DONE)
*       - paypal integration for react native
*       - if online payment call takePayment function
*       - Quantity dropdown list overlap issue - fix it
* Next:Screen - OrderDetails/MyOrders
* */

import React, {FunctionComponent, useEffect, useState} from 'react';
import {
    StyleSheet,
    Dimensions,
    Image,
    FlatList,
    TouchableWithoutFeedback,
    Alert,
    TextInputComponent, ActivityIndicator, Keyboard, TouchableOpacity
} from 'react-native';
// @ts-ignore
import {Button, Block, Text, theme, Input} from 'galio-framework';
import {WooCommerce} from "../constants/config";
import CartService from "../Services/CartService";
import materialTheme from '../constants/Theme';
import Select from "../common/Select";
import Product from "../common/Product";
import VirtualizedHorizontalList from "../common/VirtualizedHorizontalList";
import SkeletonContent from "react-native-skeleton-content-nonexpo";
import requests from "../Services/requests";
import DropDownMenu from "../common/DropDownMenu";
import Snackbar from "react-native-snackbar";
import Theme from "../constants/Theme";
import IconExtra from "../common/Icon";

const noImageURL = 'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
const request = new requests();
const {width} = Dimensions.get('screen');


const service = new CartService();
type Props = {
    navigation?: any,
    route?: any,
    cartData?: any,
    items?: { data: Array<any> },
    isLoading?: boolean,
    error?: string,
    status?: {
        coupon: boolean
    },
    coupon?: string,
    couponDetails?: any,
    cost?: number,
    customer?: any,
    address?: any,
    payment?: any,
    saved?: Array<any>
};
const filterOptions = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'},

]
const paymentOptions = [
    {title: 'Cash on Delivery', label: 'COD'},
    {title: 'Wallet', label: 'wallet'},
    {title: 'Credit/Debit Card', label: 'Card'},
    {title: 'Paypal', label: 'paypal'},

]

const Cart: FunctionComponent<Props> = ({saved = [], payment = null, address = null, customer = null, cost = 0, couponDetails = {}, coupon = '', status = false, navigation, route, items = {data: []}, cartData = [], isLoading = false, error = ''}) => {
    const [cart, setCart] = useState(cartData)
    const [load, setLoad] = useState(isLoading)
    const [products, setProducts] = useState(items)
    const [err, setErr] = useState(error)
    const [active, setActive] = useState(status)
    const [code, setCode] = useState(coupon)
    const [codeData, setCodeData] = useState(couponDetails)
    const [total, setTotal] = useState(cost)
    const [user, setUser] = useState(customer)
    const [selectedAddress, setSelectedAddress] = useState(address)
    const [selectedPayment, setSelectedPayment] = useState(payment)
    const [wishlist, setWishlist] = useState(saved)


    const getSuggestions = async () => {
        const products = await WooCommerce.get('products', {
            stock_status: 'instock',
            orderby: 'date',
            per_page: 6
        });
        console.log('suggestions', products);
        return products
    }
    const handleQuantity = async (value: any, id: any) => {
        //change quantity in products and cart update products
        let product = products;
        product.data.map((el: any) => {
            if (el.id === id) {
                el.quantity = {value: `${value.value}`, label: `${value.value}`};
            }
        })
        setProducts(product);
        await service.add(id, JSON.parse(value.value));
    }
    const renderProduct = ({item}: any) => {
        return (
            <Block>
                <Block card shadow style={styles.product}>
                    <Block flex row>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('PDetails', {PID: item.id})}>
                            <Block style={styles.imageHorizontal}>
                                <Image
                                    source={{uri: item.images !== undefined ? item.images[0].src : noImageURL}}
                                    style={{
                                        height: theme.SIZES.BASE * 5,
                                        marginTop: -theme.SIZES.BASE * 2,
                                        borderRadius: 3,
                                    }}
                                />
                            </Block>
                        </TouchableWithoutFeedback>
                        <Block flex style={styles.productDescription}>
                            <TouchableWithoutFeedback
                                onPress={() => navigation.navigate('PDetails', {PID: item.id})}>
                                <Text size={14} style={styles.productTitle}>{item.name}</Text>
                            </TouchableWithoutFeedback>
                            <Block flex row space="between">
                                <Block bottom>
                                    <Text
                                        size={theme.SIZES.BASE * 0.75}
                                        color={materialTheme.COLORS[item.stock_status === 'instock' ? 'SUCCESS' : 'ERROR']}>
                                        {item.stock_status === 'instock' ? 'instock' : 'Out of Stck'}
                                    </Text>
                                </Block>
                                <Block bottom>
                                    <Text
                                        size={theme.SIZES.BASE * 0.75}
                                        color={materialTheme.COLORS.ACTIVE}>₹ {item.sale_price.length !== 0 ? item.sale_price : item.regular_price.length !== 0 ? item.regular_price : item.price}
                                    </Text>
                                </Block>
                            </Block>
                        </Block>
                    </Block>
                    <Block flex row space="between" style={styles.options}>
                        <Block style={{width: 'auto'}}>
                            <Select onSelect={value => handleQuantity(value, item.id)}
                                    options={filterOptions}
                                    value={item.quantity ? item.quantity : filterOptions[0]}
                                    disabled={item.attributes.length > 0 ? true : false}
                                    containerStyle={{
                                        width: '100%',
                                        height: 34,
                                        marginBottom: theme.SIZES.BASE / 1.2,
                                        marginLeft: theme.SIZES.BASE
                                    }}
                            />
                        </Block>
                        {/*<Button*/}
                        {/*    center*/}
                        {/*    shadowless*/}
                        {/*    color={materialTheme.COLORS.INPUT}*/}
                        {/*    textStyle={styles.optionsButtonText}*/}
                        {/*    style={styles.optionsButton}*/}
                        {/*    onPress={() => handleDelete(item.id)}*/}
                        {/*>*/}
                        {/*    DELETE*/}
                        {/*</Button>*/}
                        <Block>
                            <TouchableOpacity onPress={() => handleWishlist(item)}>
                                <IconExtra
                                    name={item.saved ? 'heart' : 'hearto'}
                                    color={item.saved ? materialTheme.COLORS.BUTTON_COLOR : materialTheme.COLORS.MUTED}
                                    size={27}
                                    style={styles.icon}
                                    family={'AntDesign'}/>
                            </TouchableOpacity>
                        </Block>
                        <Button
                            center
                            shadowless
                            color={materialTheme.COLORS.INPUT}
                            textStyle={styles.optionsButtonText}
                            style={styles.optionsButton}
                            onPress={() => handleDelete(item.id)}
                        >
                            Delete
                        </Button>
                    </Block>
                </Block>
            </Block>
        )
    }
    const handleDelete = async (id: any) => {
        const updatedProducts = products.data.filter((product: any) => (product.id !== id));
        setProducts({data: updatedProducts});
        const c = await service.remove(id);
        setCart(c);
    }
    const renderHeader = () => {
        const productsQty = products.data.length;
        return (
            <Block flex style={styles.header}>
                <Block style={{marginBottom: theme.SIZES.BASE / 2, marginHorizontal: theme.SIZES.BASE,}}>
                    <Text>
                        Cart subtotal ({productsQty} items):
                        <Text color={materialTheme.COLORS.PRIMARY} bold> ₹ {total === 0 ? 'N/A' : total}</Text>
                    </Text>
                </Block>
                {renderAddresses()}
                <Block style={styles.divider}/>
                <Text size={18} bold color={materialTheme.COLORS.TEXT}
                      style={{marginBottom: theme.SIZES.BASE / 2, marginHorizontal: theme.SIZES.BASE,}}>List
                    Items</Text>
            </Block>
        )
    }
    const renderFooter = () => {
        return (
            <Block flex style={styles.footer}>
                {renderCoupon()}
                <Block style={{marginHorizontal: theme.SIZES.BASE}}>
                    <Block flex row
                           space={'between'}>
                        <Text size={13} bold color={materialTheme.COLORS.TEXT}>Sub Total</Text>
                        <Text size={16}>₹ {total !== 0 ? total : 'N/A'}</Text>
                    </Block>
                    <Block style={styles.divider}/>
                    <Block flex row
                           space={'between'}>
                        <Text size={16} bold color={materialTheme.COLORS.TEXT}>To pay</Text>
                        <Text size={18}>₹ {total !== 0 ? total : 'N/A'}</Text>
                    </Block>
                </Block>
                {renderPayments()}
                <VirtualizedHorizontalList
                    title={'Suggestions'}
                    getData={getSuggestions}
                    navigation={navigation}/>
                <Block style={{marginHorizontal: theme.SIZES.BASE}}>
                    <Block style={styles.divider}/>
                </Block>
                {renderCheckoutButton()}
            </Block>
        )
    }
    const renderEmpty = () => {
        return (
            <Text color={materialTheme.COLORS.ERROR}
                  style={{marginHorizontal: theme.SIZES.BASE, marginVertical: theme.SIZES.BASE}}>The cart is
                empty</Text>
        );
    }
    const renderCheckoutButton = () => {
        return (
            <Block center style={{paddingHorizontal: theme.SIZES.BASE}}>
                <Button
                    flex
                    center
                    style={styles.checkout}
                    color={materialTheme.COLORS.BUTTON_COLOR}
                    onPress={checkout}>
                    {!load
                        ? 'Proceed to checkout'
                        : <ActivityIndicator
                            color={materialTheme.COLORS.MUTED}
                            size={18}
                        />}
                </Button>
            </Block>
        )
    }
    const renderAddresses = () => {
        //list of addresses with selected like dropdown(DONE)
        // header - name - info  -touchable - toggle Menu(DONE)
        // list
        //    - items - name - title - selectable/touchable(DONE)

        return <Block>
            <Block flex row space={'between'} style={{alignItems: 'center', marginHorizontal: theme.SIZES.BASE,}}>
                <Text size={18} bold style={{marginVertical: theme.SIZES.BASE / 2}}>Select Address</Text>
                <TouchableOpacity
                    style={{
                        width: '25%',
                        height: theme.SIZES.BASE,
                    }}
                    onPress={() => navigation.navigate('Addresses')}>
                    <Text size={14} color={materialTheme.COLORS.PRIMARY}
                          style={{textDecorationLine: 'underline', alignSelf: 'flex-end'}}>Change</Text>
                </TouchableOpacity>
            </Block>
            {user ? <DropDownMenu selected={selectedAddress} data={[user.shipping]}
                                  setSelected={value => setSelectedAddress(value)} type={'Addresses'}/> :
                <Block style={{marginHorizontal: theme.SIZES.BASE}}>
                    <Text style={{marginVertical: theme.SIZES.BASE / 2,}} size={15}>Please Sign in/Sign up first </Text>
                    <Button
                        style={styles.coupon}
                        color={materialTheme.COLORS.BUTTON_COLOR}
                        transparent
                        onPress={() => navigation.navigate('Auth')}>
                        login
                    </Button>
                </Block>}
        </Block>

    }
    const renderPayments = () => {
        //list of payment options with selected like dropdown(DONE)
        // header - name - info  -touchable - toggle Menu(DONE)
        // list
        //    - items - name - title - selectable/touchable(DONE)
        return <Block style={{marginHorizontal: theme.SIZES.BASE, marginBottom: theme.SIZES.BASE}}>
            <Text size={18} bold style={{marginVertical: theme.SIZES.BASE}}>Select payment method</Text>
            {user ? <DropDownMenu data={paymentOptions} selected={selectedPayment}
                                  setSelected={value => setSelectedPayment(value)} type={'Payments'}/> : <Block>
                <Text style={{marginVertical: theme.SIZES.BASE / 2}} size={15}>Please signin/signup first </Text>
            </Block>}
        </Block>
    }
    const renderCoupon = () => {
        //list of payment options with selected like dropdown(DONE)
        // Input - code(DONE)
        // button -(DONE)
        return <Block flex space={'between'} row style={{
            alignItems: 'center',
            marginBottom: theme.SIZES.BASE / 2,
            marginHorizontal: theme.SIZES.BASE
        }}>
            <Input
                borderless
                color="white"
                placeholder="Enter Code"
                type="default"
                autoCapitalize="none"
                bgColor='transparent'
                onBlur={() => toggleActive('coupon')}
                onFocus={() => toggleActive('coupon')}
                placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
                onChangeText={(text: string) => setCode(text)}
                style={[styles.input, active ? styles.inputActive : null]}
            />
            <Button
                style={styles.coupon}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() => giveDiscount()}>
                {!load
                    ? 'Apply'
                    : <ActivityIndicator
                        color={materialTheme.COLORS.MUTED}
                        size={18}
                    />}
            </Button>
        </Block>
    }


    useEffect(() => {
        console.log('mounted');
        getData()

        return () => {
            console.log('Do some cleanup');
        }
    }, [])
    const getData = async () => {
        setLoad(true)
        try {
            let ids: Array<number> = []
            let list: Array<any> = []

            //check if user
            const loggedIn = await request.isLoggedIn()
            if (loggedIn) {
                //get user
                const x = await request.getUserData()
                if (x.status === 200) {
                    const x2 = await WooCommerce.get('customers/' + x.data.user.id)
                    setUser(x2)
                    // setWishlist(wish_list)
                }
            }

            //get cart
            const cart2 = await service.get()
            setCart(cart2);
            if (cart2 === null) {
                setLoad(false)
                return
            }

            //get ids of products
            cart2.map((el: any) => ids.push(el.id))
            if (ids.length === 0) {
                setLoad(false)
                return setErr('No Items in Cart')
            }

            //get products from ids
            let Products = await WooCommerce.get('products', {
                include: ids
            })
            list = Products

            //add quantity to each products
            list.map((item: any, index: number) => {
                cart2.map((cartItem: any) => {
                    if (item.id === cartItem.id) {
                        item.quantity = {value: `${cartItem.quantity}`, label: `${cartItem.quantity}`};
                    }
                    return
                })
                return
            })

            //get wishlist
            let wishData: Array<any> = await service.getWishlist();

            if (wishData.length > 0) setWishlist(wishData);
            list.map((value: any, index: number) => {
                const isSaved = wishData.filter(item => value.id === item)
                if (isSaved.length !== 0) return list[index].saved = true
                return list[index].saved = false
            })

            //calculate total
            const tot = list && list.reduce((prev: any, product: any) => prev + (product.sale_price.length !== 0 ? (parseInt(product.sale_price) * parseInt(product.quantity.value)) :
                product.regular_price.length !== 0 ? (parseInt(product.regular_price) * parseInt(product.quantity.value)) : (parseInt(product.price) * parseInt(product.quantity.value))), 0);
            setTotal(tot)
            setLoad(false)
            setProducts({data: list})

        } catch (e) {
            setLoad(false)
            console.log('Error', e)
        }


    }
    const giveDiscount = async () => {
        if (code?.length < 3) return setErr('Invalid code')
        //TODO:verify coupon
        Keyboard.dismiss()
        setLoad(true);
        try {
            let coupon = await WooCommerce.get('coupons', {
                code: code
            });
            console.log('coupon', coupon);
            setLoad(false)
            if (coupon.length == 0) return setErr('Invalid code')
            let cd = {
                code: coupon[0].code,
                id: coupon[0].id,
                discount: coupon[0].amount
            }
            Snackbar.show({
                text: 'Discount Applied of: ' + codeData.discount,
                duration: Snackbar.LENGTH_SHORT,
                textColor: Theme.COLORS.WHITE
            })
            setCodeData(cd);
        } catch (e) {
            Alert.alert('Error', JSON.stringify(e));
        }
    }
    const checkout = async () => {
        const loggedin = await request.isLoggedIn();
        if (loggedin) {
            // TODO:verify order data
            if (cart === null || cart.length === 0) return Alert.alert('Error', 'No items in cart')
            if (selectedPayment === null) return Alert.alert('Error', 'Select payment method')
            if (selectedAddress === null) return Alert.alert('Error', 'Select Address')
            let line_items: Array<any> = [];
            cart.map((el: any) => {
                const item = {
                    product_id: el.id,
                    quantity: parseInt(el.quantity)
                }
                line_items.push(item)
            })
            const payment_method: Array<any> = paymentOptions.filter(el => el.title = selectedPayment);
            //TODO:create order and save in localstorage
            try {
                setLoad(true)
                const order = await service.checkout(line_items, payment_method[0].label, selectedPayment, payment_method[0].label !== 'COD', user.shipping, user.shipping, user.id);
                console.log('order-checkout', order);

                // TODO:Create Order and take payment// ------------NOT WORKING----------
                // const charge_method = await service.charge(total,user);
                // console.log('charge-checkout', charge_method);

                //TODO: Clear cart
                await service.clear()

                //TODO: clear wishlist
                //

                setProducts(items);
                setTotal(0)
                setLoad(false)

                //TODO: navigate to Order Details
                return navigation.navigate('OrderDetails', {
                    id:order.id
                })
            } catch (e) {
                console.error('Error', e)
            }

        } else {
            //TODO:navigate to auth section
            navigation.navigate('Auth');
        }

    }
    const toggleActive = (value: string) => {
        let act: any = active;
        // @ts-ignore
        act[value] = !act[value];
        return setActive(act)
    }
    const handleWishlist = async (item: any) => {
        if (user === null) return Alert.alert('Login Error', 'Please register or login')
        let list = products.data
        let response: any = [];
        if (item.saved === false) {
            response = await service.addWishlistItem(item.id);
        } else {
            response = await service.removeWishlistItem(item.id);
        }
        list.map((value: any, index: number) => {
            if (value.id === item.id) {
                return list[index].saved = !value.saved
            }
        })
        setProducts({data: list});

        //check if product exist in wishlist
        console.log('wishlist_handle_list', list, response);
    }
    return <Block flex center style={styles.cart}>
        <SkeletonContent
            duration={1000}
            animationDirection="horizontalLeft"
            containerStyle={{
                flex: 1,
                width: width,
                paddingTop: theme.SIZES.BASE,
                backgroundColor: theme.COLORS.WHITE
            }}
            isLoading={load}
            layout={[
                {
                    key: 'nameID',
                    width: '90%',
                    height: 30,
                    marginBottom: theme.SIZES.BASE / 1.5,
                    marginHorizontal: theme.SIZES.BASE,
                },
                {
                    key: 'textID1',
                    width: '60%',
                    height: 23,
                    marginBottom: theme.SIZES.BASE * 1.5,
                    marginHorizontal: theme.SIZES.BASE,
                },
                {
                    key: 'textID2',
                    width: '90%',
                    height: 27,
                    marginBottom: theme.SIZES.BASE / 1.5,
                    marginHorizontal: theme.SIZES.BASE,
                },
                {
                    key: 'textID3',
                    width: '60%',
                    alignSelf: 'flex-end',
                    height: 24,
                    marginBottom: theme.SIZES.BASE * 1.5,
                    marginHorizontal: theme.SIZES.BASE,
                },
                {
                    key: 'textID4',
                    width: '90%',
                    height: 28,
                    marginBottom: theme.SIZES.BASE / 1.5,
                    marginHorizontal: theme.SIZES.BASE,
                },
                {
                    key: 'textID5',
                    width: '60%',
                    height: 22,
                    marginBottom: theme.SIZES.BASE * 1.5,
                    marginHorizontal: theme.SIZES.BASE,
                },
                {
                    key: 'textID6',
                    width: '90%',
                    height: 25,
                    marginBottom: theme.SIZES.BASE / 1.5,
                    marginHorizontal: theme.SIZES.BASE,
                },
                {
                    key: 'textID7',
                    width: '60%',
                    height: 27,
                    alignSelf: 'flex-end',
                    marginBottom: theme.SIZES.BASE * 1.5,
                    marginHorizontal: theme.SIZES.BASE,
                },
                {
                    key: 'button1',
                    width: '60%',
                    height: 42,
                    alignSelf: 'center',
                    marginBottom: theme.SIZES.BASE / 1.5,
                    marginHorizontal: theme.SIZES.BASE,
                }

            ]}
        >
            <FlatList
                data={products.data}
                renderItem={renderProduct}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => `${index}-${item.title}`}
                ListEmptyComponent={renderEmpty}
                ListHeaderComponent={renderHeader}
                ListFooterComponent={renderFooter}/>
        </SkeletonContent>
    </Block>;
};

export default Cart;

const styles = StyleSheet.create({
    coupon: {
        width: '25%',
        height: theme.SIZES.BASE * 2,
        fontSize: 12,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 8,
        shadowOpacity: 0.2,

    },
    input: {
        width: width * 0.6,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: materialTheme.COLORS.PLACEHOLDER,
    },
    inputActive: {
        borderBottomColor: materialTheme.COLORS.GRADIENT_END,
    },
    cart: {
        width: width,
    },
    header: {
        paddingVertical: theme.SIZES.BASE / 2,
    },
    footer: {
        marginBottom: theme.SIZES.BASE,
    },
    divider: {
        height: 1,
        backgroundColor: materialTheme.COLORS.INPUT,
        marginVertical: theme.SIZES.BASE,
    },
    checkoutWrapper: {
        paddingTop: theme.SIZES.BASE * 2,
        margin: theme.SIZES.BASE,
        borderStyle: "solid",
        borderTopWidth: 1,
        borderTopColor: materialTheme.COLORS.INPUT,
    },
    products: {
        minHeight: '100%',
    },
    product: {
        elevation: 3,
        width: width * 0.9,
        borderWidth: 0,
        marginVertical: theme.SIZES.BASE * 1.5,
        marginHorizontal: theme.SIZES.BASE,
        backgroundColor: theme.COLORS.WHITE,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: theme.SIZES.BASE / 4,
        shadowOpacity: 0.1
    },
    productTitle: {
        flex: 1,
        flexWrap: 'wrap',
        paddingBottom: 6,
    },
    productDescription: {
        padding: theme.SIZES.BASE / 2,
    },
    imageHorizontal: {
        width: theme.SIZES.BASE * 6.25,
        margin: theme.SIZES.BASE / 2,
    },
    options: {
        padding: theme.SIZES.BASE / 2,
    },
    qty: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: theme.SIZES.BASE * 6.25,
        backgroundColor: materialTheme.COLORS.INPUT,
        paddingHorizontal: theme.SIZES.BASE,
        paddingVertical: 10,
        borderRadius: 3,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 1,
    },
    optionsButtonText: {
        fontSize: theme.SIZES.BASE * 0.75,
        color: '#4a4a4a',
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.29,
    },
    optionsButton: {
        width: 'auto',
        height: 34,
        paddingHorizontal: theme.SIZES.BASE,
        paddingVertical: 10,
        borderRadius: 3,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 1,
    },
    checkout: {
        height: theme.SIZES.BASE * 2.5,
        fontWeight: "600",
        shadowColor: "black",
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 8,
        shadowOpacity: 0.2,
    },
    similarTitle: {
        lineHeight: 26,
        marginBottom: theme.SIZES.BASE,
        paddingHorizontal: theme.SIZES.BASE,
    },
    productVertical: {
        height: theme.SIZES.BASE * 10.75,
        width: theme.SIZES.BASE * 8.125,
        overflow: 'hidden',
        borderWidth: 0,
        borderRadius: 4,
        marginBottom: theme.SIZES.BASE,
        backgroundColor: theme.COLORS.WHITE,
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: theme.SIZES.BASE / 4,
        shadowOpacity: 1
    },
    icon: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
