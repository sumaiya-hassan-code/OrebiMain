import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import { ImCross } from "react-icons/im";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  if (cartItems.length === 0) {
    return <div className="p-4 text-center">Your cart is empty</div>;
  }

  return (
    <div className="absolute top-20 right-10 w-[360px] bg-white border shadow-xl p-4 z-100">
      <h2 className="font-bold text-lg mb-4">Cart Items</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between py-2 border-b">
          <img src={item.image} alt={item.name} className="w-12 h-12 object-cover" />
          <div>
            <h4 className="font-semibold text-sm">{item.name}</h4>
            <p className="text-xs text-gray-500">${item.price} × {item.quantity}</p>
          </div>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            <ImCross className="text-sm text-red-500 cursor-pointer" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;