import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Button from "./Button";

interface CountButtonsProps {
    id: number,
    quantity: number
}

const CountButtons = ({id,quantity}: CountButtonsProps) => {
    const { removeFromCart, addFromCart } = useContext(CartContext)!;

    const buttonSize = "w-7"

    return (
        <>
            <Button
                onClick={() => addFromCart(id)} variant="primary" className={`${buttonSize}`} >
                +
            </Button>
            <div className="mx-2 mt-5 text-sm text-gray-500">
                count: {quantity}
            </div>
            <Button
                onClick={() => removeFromCart(id)} variant="primary" className={`${buttonSize}`}>
                -
            </Button>
        </>
    )
}

export default CountButtons
