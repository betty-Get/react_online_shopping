import React from "react";
import "./ListingDetail.css";

function ListingDetail() {
  return (
    <div className="listingDetail">
      <div className="listing-detail">
        <img
          className="detail_img"
          src="https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <h2 className="listing_title">
          Dress
          <div className="listing-action">
            <i class="listing-action-icon fa-solid fa-pen-to-square"></i>
            <i class="listing-action-icon fa-solid fa-trash"></i>
          </div>
        </h2>

        <div className="listing-person-info">
          <span className="listing-owener">
            Seller- <strong>Betty</strong>
          </span>
          <span className="listing-date"> few days ago</span>
        </div>
        <p className="listing-description">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        </p>
      </div>
    </div>
  );
}

export default ListingDetail;
