import React from "react";
import "./Add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />

            <label htmlFor="category">Category</label>
            <select name="cats" id="category">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>

            <label htmlFor="coverImage">Cover Image</label>
            <input type="file" id="coverImage" />

            <label htmlFor="uploadImages">Upload Images</label>
            <input type="file" multiple id="uploadImages" />

            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Brief descriptions to introduce your service to customers"
              rows="16"
            ></textarea>

            <button>Create</button>
          </div>

          <div className="details">
            <label htmlFor="serviceTitle">Service Title</label>
            <input
              id="serviceTitle"
              type="text"
              placeholder="e.g. One-page web design"
            />

            <label htmlFor="shortDescription">Short Description</label>
            <textarea
              id="shortDescription"
              placeholder="Short description of your service"
              rows="10"
            ></textarea>

            <label htmlFor="deliveryTime">Delivery Time (e.g. 3 days)</label>
            <input type="number" id="deliveryTime" />

            <label htmlFor="revisionNumber">Revision Number</label>
            <input type="number" id="revisionNumber" />

            <label htmlFor="feature1">Add Features</label>
            <input type="text" id="feature1" placeholder="e.g. page design" />
            <input type="text" id="feature2" placeholder="e.g. file uploading" />
            <input type="text" id="feature3" placeholder="e.g. setting up a domain" />
            <input type="text" id="feature4" placeholder="e.g. hosting" />

            <label htmlFor="price">Price</label>
            <input type="number" id="price" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
