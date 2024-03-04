import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1485745655111-3272a37e76a5"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1600788907416-456578634209?"
            alt=""
          />
          <button>
            <Link to="/products/2" className="link">
              Dairy
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1561016444-14f747499547"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Vegan
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.unsplash.com/photo-1614648692330-eb129aeb6880"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Fitness
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73"
                alt=""
              />
              <button>
                <Link to="/products/3" className="link">
                  Breads
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1529511582893-2d7e684dd128"
            alt=""
          />
          <button>
            <Link to="/products/4" className="link">
              Staple
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
