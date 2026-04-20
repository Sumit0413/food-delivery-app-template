import { useSelector } from 'react-redux';

const Cart = () => {
  const items = useSelector(state => state.cart.items);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Cart</h2>

      {items.map((item, i) => (
        <p key={i}>{item.name}</p>
      ))}
    </div>
  );
};

export default Cart;