import M from 'materialize-css/dist/js/materialize.min.js';
function GoodsItem(props) {
  const { id, name, description, price, img, addToBasket = Function.prototype } = props;


  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={img} alt={name} />
        <span className="card-title">{name}</span>
      </div>
      <div className="card-content">
        <p>
           {description}
        </p>
      </div>
      <div className="card-action">
        <button onClick={() => addToBasket({
            id,
            name,
            price
      }, M.toast({html: 'Added!', classes: 'tooltip'}))} className="btn">Add to cart</button>
        <span className="right">{price}</span>
      </div>
    </div>
  );
}

export { GoodsItem };
