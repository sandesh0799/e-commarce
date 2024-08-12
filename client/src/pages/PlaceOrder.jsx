import React ,{useState} from 'react'
import Layout from '../layout/Layout'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const PlaceOrder = () => {
    const cart = useSelector((state) => state.cartReducer);
    const { cartItems, shippingAddress } = cart;

    const addDecimal = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
    };

    //subtotal price
    const subtotal = addDecimal(cartItems.reduce((total, item) => total + item.qty * item.price, 0));
    const taxPrice = addDecimal(Number(0.15 * subtotal).toFixed(2));
    const shippingPrice = addDecimal(subtotal > 100 ? 0 : 20);

    //total
    const total = (Number(subtotal) + Number(taxPrice) + Number(shippingPrice)).toFixed(2);

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setpostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    return (
        <Layout>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">Order Summary</h2>

                            <div className="leading-relaxed mb-4">
                                <CartItem cartItems={cartItems}></CartItem>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Subtotal</span>
                                <span className="ml-auto text-gray-900">${subtotal}</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Tax</span>
                                <span className="ml-auto text-gray-900">${taxPrice}</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Shipping Price</span>
                                <span className="ml-auto text-gray-900">
                                    ${shippingPrice}
                                </span>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    ${total}
                                </span>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2  p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                                Shipping Address
                            </h2>
                            <div className="relative mb-4">
                                <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                                <input type="text" id="address" name="address"  value={address} onChange={(e) => setAddress(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                                <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="country" className="leading-7 text-sm text-gray-600">Country</label>
                                <input type="text" id="country" name="country" value={country} onChange={(e) => setCountry(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="postalCode" className="leading-7 text-sm text-gray-600">Postal Code</label>
                                <input type="text" id="postalCode" name="postalCode" onChange={(e) => setpostalCode(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                            <PayPalScriptProvider options={{ clientId: "test" }}>
                                <PayPalButtons  />
                            </PayPalScriptProvider>
                        </div>
                    </div>
                </div>
            </section >
        </Layout >
    )
}


export default PlaceOrder