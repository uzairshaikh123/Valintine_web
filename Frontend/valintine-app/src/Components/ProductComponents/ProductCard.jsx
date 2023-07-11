import React, { useState } from 'react';
import './productcard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({id, image, name, description, price, ratings }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    // Logic for sharing
  };

  return (
    <div className="card">
      <div className="card-header">
       <Link to={`/products/${id}`}>
        <img className="card-image" src={image} alt={name} />
       </Link>
        <div className={`heart ${isLiked ? 'liked' : ''}`} onClick={handleLike}>
            <img src="https://img.icons8.com/?size=1x&id=87&format=png" alt="" />
        </div>
      </div>
      <Link to={`/products/${id}`}>

      <div className="card-body">
        <p className="card-description">{description}</p>
        <h2 className="card-title">{name}</h2>
        <div className="card-footer">
          <div className="card-price">${price}</div>
          <div className="card-ratings">{ratings}-Reviews 8</div>
          <button className="share-button" onClick={handleShare}>
            <img src="https://img.icons8.com/?size=1x&id=98959&format=png" alt="" />
          </button>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default ProductCard;
