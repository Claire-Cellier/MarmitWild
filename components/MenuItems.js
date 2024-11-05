import { useState } from "react";

function MenuItem({ dish }) {
  const [isFavorite, setIsFavorite] = useState(dish.isFavorite);
  function handleClickFavorite() {
    const statusFavorite = !isFavorite;
    setIsFavorite(statusFavorite);
  }

  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        <img src={dish.foodImage} alt={dish.itemName} />
        <figcaption>
          <h2>{dish.itemName}</h2>
          <p>{dish.description}</p>
        </figcaption>
      </figure>
      <aside>{dish.price} EUR</aside>

      {/* the button to play with the isFavorite state:
              - onClick, will toggle the isFavorite state,
              - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
          */}
      <button onClick={handleClickFavorite}>{isFavorite ? "❤️" : "🖤"}</button>
    </section>
  );
}

export default MenuItem;
