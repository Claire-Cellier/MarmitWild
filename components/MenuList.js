import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  console.log(foodItems);

  return (
    <>
      {foodItems.map((dish) => {
        console.log(dish);
        return <MenuItem key={dish.id} dish={dish} />;
      })}
    </>
  );
}

export default MenuList;
