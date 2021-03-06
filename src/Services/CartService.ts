import AsyncStorage from '@react-native-community/async-storage';
import Snackbar from "react-native-snackbar";
import Theme from "../constants/Theme";
import {paypal, paypalConfig, WooCommerce} from "../constants/config";
import axios from "axios";
// @ts-ignore
// import RNPaypal from 'react-native-paypal-lib';

export default class CartService {

    add = async (id: number, quantity: number = 1, size?: string,) => {
        try {
            const prevCart = await AsyncStorage.getItem('local_cart');
            let updateCart: any = [];
            let product: any = {id, quantity}
            if (size) {
                product.size = size;
            }
            //check if cart is not empty
            if (prevCart) {
                let x = JSON.parse(prevCart);
                let productIndex: any = null;

                //check if product is already present
                x.map((el: any, index: number) => {
                    if (el.id === id) {
                        productIndex = index;
                        return
                    }
                })
                //if present update product quantity
                if (productIndex) {
                    x[productIndex] = {id: x[productIndex].id, quantity: x[productIndex].quantity + quantity}
                } else {
                    //else add new product to list
                    x.push(product)
                }
                updateCart = x;
                console.log('updateCart', updateCart);
            } else {
                updateCart = [product]
            }
            await AsyncStorage.setItem('local_cart', JSON.stringify(updateCart));
            return Snackbar.show({
                text: 'Product Added to Cart',
                duration: Snackbar.LENGTH_SHORT,
                textColor: Theme.COLORS.WHITE
            })
        } catch (e) {
            return e
        }
    }
    get = async () => {
        try {
            const cart = await AsyncStorage.getItem('local_cart');
            if (cart) {
                return JSON.parse(cart)
            }
            return cart

        } catch (e) {
            return e
        }
    }
    checkout = async (
        line_items: Array<any>,
        payment_method?: string,
        payment_method_title?: string,
        set_paid?: boolean,
        billing?: {
            first_name: string,
            last_name: string,
            address_1: string,
            address_2: string,
            city: string,
            state: string,
            postcode: string,
            country: string,
            email: string,
            phone: string
        },
        shipping?: {
            first_name: string,
            last_name: string,
            address_1: string,
            address_2: string,
            city: string,
            state: string,
            postcode: string,
            country: string,
        },
        customer?: string,
        shipping_lines?: Array<any>,
    ) => {
        try {
            const Order = await AsyncStorage.getItem('local_order');
            let data: any = {}
            if (Order) {
                data = Order
            }
            data = {
                payment_method: payment_method && payment_method,
                payment_method_title: payment_method_title && payment_method_title,
                set_paid: set_paid && set_paid,
                billing: billing && billing,
                shipping: shipping && shipping,
                line_items: line_items,
                shipping_lines: shipping_lines && shipping_lines,
                customer_id: customer && customer
            };

            const local = await AsyncStorage.setItem('local_order', JSON.stringify(data));
            const result = await WooCommerce.post('orders', data);
            return result;
        } catch (e) {
            console.log('error', e);
        }
    }
    access_token = 'A21AAHB1KJzrUXp1f_qOWqYimE7sW-jqLnj9xJUFCAU4Lxq-xTbTUQNt8NnLTn6-parnpreWVqKXr3u1MXg6R9KpKqchSOlXQ';
    charge = async (value: number, payer: any) => {


        try {
            axios.post('https://api.sandbox.paypal.com/v1/oauth2/token', {grant_type: 'client_credentials'},
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `${this.access_token}` // your Authorization value you get from postman api hit
                    }
                }
            )
                .then(response => {
                    console.log('token', response.data.access_token);
                }).catch(err => {
                console.log({...err})
            })
        } catch (e) {
            console.log('Error_py', e.message);
        }
    }
    remove = async (id: number) => {
        //Check if product is present
        //- if present remove and update list
        //- if present multiple time decrease quantity if param - quantity is less than current quantity
        try {
            let prevCart = await AsyncStorage.getItem('local_cart');
            if (prevCart != null) {
                const newCart = JSON.parse(prevCart).filter((product: any) => (product.id !== id));
                await AsyncStorage.setItem('local_cart', JSON.stringify(newCart));
            }
        } catch (e) {
            return e
        }
    }
    clear = async () => {
        //Check if product is present
        //- if present remove and update list
        //- if present multiple time decrease quantity if param - quantity is less than current quantity
        try {
            let prevCart = await AsyncStorage.multiRemove(['local_cart', 'local_order']);
            return prevCart;
        } catch (e) {
            return e
        }
    }
    getWishlist = async () => {
        try {
            const wishList = await AsyncStorage.getItem('wishlist');
            if (wishList) {
                return JSON.parse(wishList)
            }
            return []
        } catch (e) {
            return e
        }
    }
    addWishlistItem = async (id: number) => {
        try {
            const prevWishlist = await AsyncStorage.getItem('wishlist');
            let updatedList = [];
            if (prevWishlist) {
                updatedList = JSON.parse(prevWishlist);
                updatedList.push(id);
            } else {
                updatedList = [id]
            }
            await AsyncStorage.setItem('wishlist', JSON.stringify(updatedList));
            Snackbar.show({
                text: 'Product Saved',
                duration: Snackbar.LENGTH_LONG,
                textColor: Theme.COLORS.WHITE
            })
            const newWishlist = await AsyncStorage.getItem('wishlist');
            return newWishlist
        } catch (e) {
            return e
        }
    }
    removeWishlistItem = async (id: number) => {
        try {
            const prevWishlist = await AsyncStorage.getItem('wishlist');
            let updatedList = [];
            if (prevWishlist) {
                updatedList = JSON.parse(prevWishlist);
                updatedList = updatedList.filter((value:number) => value !== id )
            }
            await AsyncStorage.setItem('wishlist', JSON.stringify(updatedList));
            Snackbar.show({
                text: 'Product Removed',
                duration: Snackbar.LENGTH_LONG,
                textColor: Theme.COLORS.WHITE
            })
            const newWishlist = await AsyncStorage.getItem('wishlist');
            return newWishlist
        } catch (e) {
            return e
        }
    }
}