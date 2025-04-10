import React, { useState, useMemo, createContext, useEffect, useContext } from 'react';
import {getSession, storeSession} from "../../utils/cart/session";
import {getApiCartConfig} from "../../utils/cart/api";
import {CART_ENDPOINT} from "../../utils/constants/endpoints";
import axios from "axios";
import {isArray, isEmpty} from "lodash";
import { errorToast } from '../Alert';

export const CartContext = createContext({
																					 cart: null,
																				 });

export const useCart = () => {
	return useContext(CartContext);
};

export function CartProvider ( { children } ) {

	const [ cart, setCart ] = useState('');
	const [weight, setWeight] = useState(0)

	useEffect(()=>{
		const calculateTotalWeight = () => {
			if (cart?.cartItems?.length > 0) { // Check if cart items exist
				const itemWeight = cart.cartItems.reduce((acc, cartItem) => {
					return acc + (cartItem.data.weight * cartItem.quantity);
				}, 0);

				setWeight(itemWeight)


			} else {
				setWeight(0); // Set weight to 0 if no cart items
			}
		};

		calculateTotalWeight();

		return  () => calculateTotalWeight()


	}, [cart])








	const addToCart = async ( productId, quantity, setCart, setIsAddedToCart, setLoading ) => {

		const storedSession = getSession();
		const addOrViewCartConfig = getApiCartConfig();
		setLoading(true);

		axios.post( CART_ENDPOINT, {
									product_id: productId,
									quantity: quantity,
								},
								addOrViewCartConfig,
		)
					.then( ( res ) => {
			// console.log('CART RESPONSE: ', res.data)
			if ( isEmpty( storedSession ) ) {
				storeSession( res?.headers?.[ 'x-wc-session' ] );
			}
			setIsAddedToCart(true);
			setLoading(false);
			viewCart( setCart );
		} )
					.catch( err => {
			console.log( 'err', err );
		} );
	};

	/**
	 * View Cart Request Handler
	 *
	 * @param {Function} setCart Set Cart Function.
	 * @param {Function} setProcessing Set Processing Function.
	 */
	const viewCart = async ( setCart, setProcessing = () => {} ) => {

		const addOrViewCartConfig = getApiCartConfig();

		axios.get( CART_ENDPOINT, addOrViewCartConfig )
					.then( ( res ) => {
			const formattedCartData = getFormattedCartData( res?.data ?? [] )
			setCart( formattedCartData );
			setProcessing(false);
		} )
					.catch( err => {
			console.log( 'err', err );
			setProcessing(false);
		} );
	};

	/**
	 * Update Cart Request Handler
	 */
	const updateCart = async ( cartKey, qty = 1, setCart, setUpdatingProduct ) => {

		const addOrViewCartConfig = getApiCartConfig();

		setUpdatingProduct(true);

		axios.put( `${CART_ENDPOINT}${cartKey}`, {
			quantity: qty,
		}, addOrViewCartConfig )
					.then( ( res ) => {
			viewCart( setCart, setUpdatingProduct );
		} )
					.catch( err => {
			console.log( 'err', err );
			setUpdatingProduct(false);
		} );
	};

	/**
	 * Delete a cart item Request handler.
	 *
	 * Deletes all products in the cart of a
	 * specific product id ( by its cart key )
	 * In a cart session, each product maintains
	 * its data( qty etc ) with a specific cart key
	 *
	 * @param {String} cartKey Cart Key.
	 * @param {Function} setCart SetCart Function.
	 * @param {Function} setRemovingProduct Set Removing Product Function.
	 */
	const deleteCartItem = async ( cartKey, setCart, setRemovingProduct ) => {

		const addOrViewCartConfig = getApiCartConfig();
		setRemovingProduct(true);
		await axios.delete( `${CART_ENDPOINT}${cartKey}`, addOrViewCartConfig )
								.then( () => {
			viewCart( setCart, setRemovingProduct );
		} )
								.catch( err => {
			console.log( 'err', err );
			setRemovingProduct(false);
		} );
	};

	/**
	 * Clear Cart Request Handler
	 *
	 * @param {Function} setCart Set Cart
	 * @param {Function} setClearCartProcessing Set Clear Cart Processing.
	 */
	const clearCart = async (setCart, setClearCartProcessing) => {
		setClearCartProcessing(true);
	
		const addOrViewCartConfig = getApiCartConfig();
	
		try {
			await axios.delete(CART_ENDPOINT, addOrViewCartConfig);
			await viewCart(setCart, setClearCartProcessing);
		} catch (err) {
			console.error('Error clearing cart:', err);
			errorToast('An error occurred while clearing the cart. Please try again.');
		} finally {
			setClearCartProcessing(false);
		}
	};

	/**
	 * Get Formatted Cart Data.
	 *
	 * @param cartData
	 * @return {null|{cartTotal: {totalQty: number, totalPrice: number}, cartItems: ({length}|*|*[])}}
	 */
	const getFormattedCartData = ( cartData ) => {
		if ( ! cartData.length ) {
			return null;
		}
		const cartTotal = calculateCartQtyAndPrice( cartData || [] );
		const cartKey = cartData[0].key
		// console.log(cartKey)
		return {
			cartItems: cartData || [],
			cartKey: cartKey || '',
			...cartTotal,
		};
	};

	/**
	 * Calculate Cart Qty And Price.
	 *
	 * @param cartItems
	 * @return {{totalQty: number, totalPrice: number}}
	 */

	const calculateCartQtyAndPrice = ( cartItems ) => {
		const qtyAndPrice = {
			totalQty: 0,
			totalPrice: 0,
		}

		if ( !isArray(cartItems) || !cartItems?.length ) {
			return qtyAndPrice;
		}

		cartItems.forEach( (item, index) => {
			qtyAndPrice.totalQty += item?.quantity ?? 0;
			qtyAndPrice.totalPrice += item?.line_total ?? 0;
		} )

		return qtyAndPrice;
	}


	useEffect(() => {
		if (!process.browser) {
			return;
		}

		if (typeof window !== 'undefined') {
			let cartData = JSON.parse(sessionStorage.getItem('next-cart'));
			const session = getSession();

			async function removeSession() {
				sessionStorage.removeItem('x-wc-session');
				sessionStorage.removeItem('next-cart');
			}

			cartData = null !== cartData ? cartData : '';

			// Set a flag if no data in localStorage but session exists
			const needsFetch = !cartData && !isEmpty(session);

			if (needsFetch) {
				removeSession().then(() => setCart(null)); // Set cart to null as a flag
			} else if (cartData && !isEmpty(session)) {
				setCart(cartData);
			} else if (!cartData) {
				removeSession().then(() => setCart(cartData));
			}

			// Call viewCart only if data needs to be fetched
			if (needsFetch) {
				viewCart(setCart);
			}
		}
	}, []);

	/**
	 * 1.When setCart() is called that changes the value of 'cart',
	 * this will set the new data in the localStorage.
	 *
	 * 2.The 'cart' will anyway have the new data, as setCart()
	 * would have set that.
	 */
	useEffect( () => {
		if (typeof window !== 'undefined')
			sessionStorage.setItem('next-cart', JSON.stringify(cart));
	}, [ cart ] );


	const CartContextValue = {
		cart,
		setCart,
		weight,
		addToCart,
		updateCart,
		clearCart,
		viewCart,
		deleteCartItem,
	}
	return (
			<CartContext.Provider value={CartContextValue }>
				{ children }
			</CartContext.Provider>
	);
}
