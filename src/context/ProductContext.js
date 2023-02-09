import { createContext, useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
export const productContext = createContext({
        products: [],
        loader: true,
        cart: [],

        add: () => {},
        totalPrice: 0,
        deCreament: () => {},
        removeCart: () => {},
});

export default function ProductData(props) {
        const [products, setProducts] = useState([]);
        const [loader, setLoader] = useState(true);
        const [cart, setCart] = useState([]);
        const [price, setPrice] = useState(0);

        const fecthData = async () => {
                const { data, status } = await axios.get("https://dummyjson.com/products");
                if (status == 200) {
                        setProducts([...data.products]);
                        setLoader(false);
                }
        };
        const deCreament = (product) => {
                if (product.count == 1) {
                        RemoverCat(product);
                        return;
                }
                const newCart = [...cart];
                const Item = newCart.filter((Product) => Product == product)[0];
                Item.count -= 1;
                const itemIndex = newCart.findIndex((Product) => Product == product);
                newCart.splice(itemIndex, 1, Item);
                setCart([...newCart]);
                const newPrice = price - product.item.price;
                setPrice(newPrice);
        };
        const RemoverCat = (product) => {
                const pervCart = [...cart];
                const newCart = pervCart.filter((Product) => Product != product);
                setCart([...newCart]);
                toast.error(`${product.item.title} is Added to Chart`, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                });
                const newPrice = price - product.item.price;
                setPrice(newPrice);
        };

        const addToCart = (id) => {
                const storage = [...products];
                const pervCart = [...cart];
                const product = storage.filter((item) => item.id == id)[0];
                const checkItems = pervCart.findIndex((product) => product.item.id == id);
                const newPrice = price + product.price;
                setPrice(newPrice);
                if (checkItems != -1) {
                        const reaptedItem = { ...pervCart.splice(checkItems, 1)[0] };
                        reaptedItem.count += 1;
                        const newCart = [...pervCart];
                        newCart.splice(checkItems, 0, reaptedItem);
                        setCart([...newCart]);
                        return;
                }
                const newItem = { item: { ...product }, count: 1 };
                setCart([...pervCart, newItem]);
                toast.success(`${product.title} is Added to Chart`, {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                });
        };

        useEffect(() => {
                fecthData();
        }, []);
        return (
                <productContext.Provider
                        value={{
                                products: [...products],
                                loader: loader,
                                cart: cart,
                                totalPrice: price,
                                add: (id) => addToCart(id),
                                deCreament: (product) => deCreament(product),
                                removeCart: (product) => RemoverCat(product),
                        }}
                >
                        {props.children}
                </productContext.Provider>
        );
}
