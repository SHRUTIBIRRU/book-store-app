import React from "react";

const Cards = ({item}) => {
const {name, title, category, image, price}= item
  return (
    <div className="mt-3 my-3">
      <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-300  dark:bg-slate-700 dark:text-white">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p>{title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${price}</div>
            <div className="px-3 py-2 rounded border-[2px] hover:bg-pink-500 hover:text-white duration-300 cursor-pointer">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
