import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';
import React, { useState } from 'react';


function Favorites() {
  const { favorites, addToFavorites, removeFavorites, addToCart } = useCart();
  
  // for add to cart 
  const [selectedColor, setSelectedColor] = useState({});
  // select color
  const handleColorSelect = (productId, color) => {
      setSelectedColor(prev => ({
          ...prev,
          [productId]: prev[productId] === color ? null : color // toggle off if same color selected
      }));
  };

  return (
    <div className='favorites-page'>
      <h1>Favorites</h1>

      {favorites.length === 0? (
        <p>No favorite products yet.</p>
      ) : (
        <div className='product-grid'>
          {favorites.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              isFavorites={true}
              removeFavorites={removeFavorites}
              addToFavorites={()=>{}}
              onColorSelect={handleColorSelect}
              selectedColor={selectedColor[product._id]}
              onAddToCart={(product) => {
                  if (!selectedColor[product._id] && product.colors.length > 0){
                          alert('Please select a color');
                          return;
                      }

                  addToCart({...product, selectedColor: selectedColor[product._id]});
              }}
            />
            ))}
      </div>
      )}
    </div>
  );
}

export default Favorites;