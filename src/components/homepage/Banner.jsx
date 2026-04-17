import React from 'react';
// const BannerImg = "../../assets/"
const Banner = () => {
  return (
    <div className="hero bg-green-200 min-h-[70vh] rounded-2xl my-8">
      <div className="hero-content px-10 flex-col lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Boooks to freshen up your bookshelf
          </h1>
          <button className="btn btn-success mt-4">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
