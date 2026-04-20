import FoodCard from './FoodCard';

const data = [
  { id: 1, name: "Pizza", price: 10 },
  { id: 2, name: "Burger", price: 8 },
  { id: 3, name: "Pasta", price: 12 }
];

const FoodList = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data.map(item => (
        <FoodCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FoodList;