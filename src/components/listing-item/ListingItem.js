import React from 'react'
import './listingItem.css'
import {Link} from "react-router-dom"

function ListingItem() {
  return (
    <div className='listing-item'>
      <img className='listing-img' src='https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>

      <div className='listing-details'>
        <div className='listing-catagories'>
          <span className='listing-catagory'>Buy</span>
          <span className='listing-catagory'>Sell</span>
         <Link to="/detail"><div className='listing-title'>Dress</div></Link> 
          <hr />
          <small className='listing-time'> 2 days ago</small>
          
        </div>
      </div>
      <p className='listing-desc'>aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
      aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
      
    </div>
  )
}

export default ListingItem
