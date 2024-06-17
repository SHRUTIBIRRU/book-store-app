import React from "react";
import list from '../../public/list.json'
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 justify-center items-center text-center">
      <h1 className="text-4xl font-semibold">We're delighted to have you <span className="text-pink-500">Here
        </span></h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae mollitia, ipsum reiciendis corporis, libero earum laudantium at ratione aperiam iste laboriosam doloremque repellendus laborum consequuntur molestias dolor et expedita harum. Tenetur distinctio suscipit repudiandae cum enim et vero perspiciatis. Quaerat consequatur possimus nisi recusandae ab sequi commodi ullam cum illo.
        </p>
        <Link to='/'><button className="bg-pink-500 px-4 py-2 rounded text-white hover:bg-pink-700 duration-300 mt-5 cursor-pointer">Back</button></Link>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {list.map((book)=> <Cards key={book.id} item={book}/>)}
        </div>
      </div>
    </div>
  );
};

export default Course;
