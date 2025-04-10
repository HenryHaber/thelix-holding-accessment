import React, {createContext, useContext, useEffect, useState} from 'react';
import useAuth                                                 from './AuthContext';
import {useSelector}                                  from 'react-redux';
import {handleBillingDifferentThanShipping} from '../../utils/checkout';

// Create a CheckoutContext
const CheckoutContext = createContext();

// Checkout Provider
export const CheckoutProvider = ({ children }) => {


  const { user: Customer } = useAuth();
  const { firstName, lastName, email, databaseId } = Customer || {};
  const cart = useSelector((state) => state.cart);
  const [selectedOption, setSelectedOption] = useState(null);


  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };


  const {
    address1,
    address2,
    city,
    company,
    postcode,
    phone,
  } = Customer?.billing || {};



  const defaultCustomerInfo = {
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    country: 'NG',
    state: 'Lagos',
    postcode: '',
    email: '',
    phone: '',
    company: '',
    errors: null
  };

  const loggedInCustomer = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    address1: address1,
    address2: address2,
    country: 'NG',
    state: 'Lagos',
    city: city,
    company: company,
    postcode: postcode,
    phone: phone,
  };

  const initialState = {
    billing: {...defaultCustomerInfo},
    shipping: {...defaultCustomerInfo},
    createAccount: false,
    orderNotes: '',
    billingDifferentThanShipping: false,
    paymentMethod: 'Bank Transfer',
    coupon: null
  };

  const loggedInState = {
    billing: { ...loggedInCustomer },
    shipping: { ...loggedInCustomer },
    createAccount: false,
    orderNotes: '',
    billingDifferentThanShipping: false,
    paymentMethod: 'Bank Transfer',
    coupon: null
  };
  // Define state and methods used in the CheckoutForm

  const [input, setInput] = useState(initialState);
  const { totalPrice, totalQty } = cart || {};
  const [requestError, setRequestError] = useState(null);
  const [isOrderProcessing, setIsOrderProcessing] = useState(false);
  const [createdOrderData, setCreatedOrderData] = useState({});
  const [shippingMethods, setShippingMethods] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shipping, setShipping] = useState(null);
  const [shippingZones, setShippingZones] = useState(null);
  const [orderAmount, setOrderAmount] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [selectedShipping, setSelectedShipping] = useState('');
  const [total, setTotal] = useState(0);


  useEffect(() => {
    setInput(Customer ? { ...loggedInState } : { ...initialState });
  }, [Customer, setInput])

  // Actions
  const handleShippingMethod = (e) => {
    const selectedMethod = e.target.value;
    const matchingMethod = shippingMethods?.find((method) => method.title === selectedMethod);
    if (matchingMethod) setShipping(matchingMethod);

    if (shipping) {
      const { value } = shipping?.settings?.cost || {};
      const shippingCost = value?.toString();
      setSelectedShipping(shippingCost);
    }
  };

  const handleShippingChange = async ( target ) => {
    const newState = { ...input, shipping: { ...input?.shipping, [ target.name ]: target.value } };
    setInput( newState );
    // await setStatesForCountry( target, setTheShippingStates, setIsFetchingShippingStates );
  };

  const handleBillingChange = async ( target ) => {
    const newState = { ...input, billing: { ...input?.billing, [ target.name ]: target.value } };
    setInput( newState );
    // await setStatesForCountry( target, setTheBillingStates, setIsFetchingBillingStates );
  };

  const handleOnChange = async ( event, isShipping = true, isBillingOrShipping = false ) => {
    const { target } = event || {};
    if (target.name === 'city'){
      await handleShippingZone(event)
    }

    if (target.name === "shipping_method"){
      handleShippingMethod(event)
    }

    if ( 'billingDifferentThanShipping' === target.name ) {
      handleBillingDifferentThanShipping( input, setInput, target );
    } else if ( isBillingOrShipping ) {
      if ( isShipping ) {
        await handleShippingChange( target );
      } else {
        await handleBillingChange( target );
      }
    } else {
      const newState = { ...input, [ target.name ]: target.value };
      setInput( newState );
    }
  };

  const handleCouponFetch = (couponCode) => {
    setInput((prevState) => ({
      ...prevState,
      coupon: couponCode,
    }));
  };

  const handleShippingZone = async (e) => {
    const selectedZone = e.target.value;
    const matchingZone = shippingZones?.find((zone) => zone.name === selectedZone);
    const zoneId = matchingZone?.id;

    if (zoneId) {
      try {
        setLoading(true);
        const sanitizedZoneId = encodeURIComponent(zoneId);
        const response = await fetch(`/api/get-shipping-methods?zoneId=${sanitizedZoneId}`);
        const data = await response.json();
        setShippingMethods(data);
      } catch (error) {
        console.error('Error fetching shipping methods:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const updateOrderTotal = () => {
    const orderTotal = orderAmount + delivery;
    setTotal(orderTotal);
  };

  // Expose values and actions via the context
  const value = {
    input,
    setInput,
    totalQty,
    totalPrice,
    requestError,
    setRequestError,
    isOrderProcessing,
    setIsOrderProcessing,
    createdOrderData,
    setCreatedOrderData,
    shippingMethods,
    setShippingMethods,
    loading,
    setLoading,
    shipping,
    setShipping,
    shippingZones,
    setShippingZones,
    orderAmount,
    setOrderAmount,
    delivery,
    setDelivery,
    selectedShipping,
    setSelectedShipping,
    total,
    setTotal,
    handleCouponFetch,
    handleShippingMethod,
    handleShippingZone,
    handleOnChange,
    updateOrderTotal,
    handleOptionClick,
    selectedOption,
    setSelectedOption

  };

  return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
};

// Hook to use CheckoutContext
export const useCheckout = () => useContext(CheckoutContext);

