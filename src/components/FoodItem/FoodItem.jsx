import React, { useContext } from 'react'
import './foodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({id, name, price, description, image}) => {

  const {cartItem, addToCart, removeFromCart} = useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="food-item" />
        {
          !cartItem[id] ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="add-icon" /> : <div className="food-item-counter">
            <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="remove-icon" />
            <p>{cartItem[id]}</p>
            <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="add-icon" />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem