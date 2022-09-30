import React from "react";
import "./createListing.css";
function CreateListing() {
  return (
    <div className="create-listing">
      <form className="create-listing-form">
        <div className="create-listing-form-group">
          <input
            autoFocus={true}
            type="text"
            placeholder="Listing title"
            className="create-listing-text"
          ></input>
        </div>
        <div className="create-listing-form-group">
          <textarea
            className="create-listing-desc"
            placeholder="place your description here..."
          ></textarea>
          <div>
            <label htmlFor="listingImage" className="creat-listing-img">
              Upload Image<i class="upload-icon fa-solid fa-upload"></i>
            </label>
            <div>
            <input
              type="file"
              id="listingImg"
            //   style={{ display: "none" }}
              className="creat-listing-img"
            />
            </div>
          </div>
        </div>
      </form>
      <button className="create-listing-button">submit</button>
    </div>
  );
}

export default CreateListing;
