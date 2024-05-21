//Este es el use context para el carrito, es un hook
import { createContext, useContext, useState } from "react";

type CartContextType = {
    cartTotalQty: number;
};

export const CartContext = 
createContext<CartContextType | null>(null);

interface Props {
    [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0);

    const value = {
      cartTotalQty,
    };

    return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (context === null) {
        throw new Error("useCart must be used within a CartContext Provider")
    }

    return context;
}