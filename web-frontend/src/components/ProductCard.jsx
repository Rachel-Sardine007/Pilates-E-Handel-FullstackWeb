import{ FiHeart } from 'react-icons/fi';
import{ FaHeart } from 'react-icons/fa';
import './ProductCard.css';

function ProductCard({
  product,
  selectedColor,
  onColorSelect,
  onAddToCart,
  isFavorites,
  addToFavorites,
  removeFavorites
}) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img 
            src={product.image} 
            alt={product.name} />

        {/* wishlist - fill heart when saved */}
        {
            isFavorites ? (
                <FaHeart
                    className="product-fav-btn"
                    onClick={() => removeFavorites(product._id)}
                />
            ) : (
                <FiHeart 
                    className='product-fav-btn'
                    onClick={()=> addToFavorites(product)}
                />
            )
        }

        <div className="color-options">
          {(product.colors || []).map((color) => (
            <span
              key={color}
              className={`color ${color}`}
              onClick={() => onColorSelect(product._id, color)}
              style={{
                outline:
                  selectedColor === color ? "2px solid black" : "none",
                outlineOffset: "2px",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>

      <p>{product.name}</p>
      <p>{product.price} kr</p>

      <button
        className="product-btn"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;