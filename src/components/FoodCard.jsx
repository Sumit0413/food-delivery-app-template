import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const FoodCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow p-4 rounded-xl">
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p>${item.price}</p>

      <button
        className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
        onClick={() => dispatch(addItem(item))}
      >
        Add
      </button>
    </div>
  );
};

export default FoodCard;