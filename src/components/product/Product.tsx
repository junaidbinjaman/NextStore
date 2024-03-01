import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

type ProductProps = {
  thumbnail: string;
  isNew?: boolean;
  discount?: number;
  category: string;
  title: string;
  totalRating: number;
  avgRating: number;
  regularPrice: number;
  salePrice?: number;
};

const Product: React.FC<ProductProps> = ({
  thumbnail,
  isNew,
  discount,
  category,
  title,
  totalRating,
  avgRating,
  regularPrice,
  salePrice,
}) => {
  const productThumbnail = {
    backgroundImage: `url(${thumbnail})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <div className="w-[302.9px] bg-white">
      <div className="mx-auto w-fit pt-5">
        <div
          style={productThumbnail}
          className="w-[252.25px] h-[284.97px] flex items-start justify-between p-3 rounded-lg cursor-pointer"
        >
          {isNew && (
            <small className="bg-green-400 text-white text-[12px] font-ubuntu inline px-[14px] py-1 rounded-md">
              New
            </small>
          )}
          {discount && (
            <small className="bg-red-600 text-white text-[12px] font-ubuntu inline px-[14px] py-1 rounded-md">
              -${discount}
            </small>
          )}
        </div>
        <div>
          <small className="text-[12px] font-bold text-blue-700 font-ubuntu">
            {category}
          </small>
          <h3 className="text-stone-700 text-[17px] font-ubuntu font-bold mt-2 cursor-pointer transition-all ease-in-out duration-150 hover:text-stone-600">
            {title}
          </h3>

          <div className="flex items-center mt-6 mb-3">
            {Array.from({ length: 5 }).map((_, index) => {
              return index < avgRating ? (
                <FaStar key={index} className="text-yellow-700 text-lg" />
              ) : (
                <FaRegStar key={index} className="text-yellow-700 text-lg" />
              );
            })}

            <small className="ml-1">({totalRating})</small>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-[#ECECEC] flex items-center">
        <div className="flex items-center justify-around gap-1 py-3 px-5 border-r-[1px] border-[#ECECEC]">
          <p className="text-blue-700 text-base font-bold font-ubuntu">
            ${regularPrice}.00
          </p>
          <p className="text-stone-400 font-ubuntu text-[12px] font-normal line-through">
            ${salePrice && salePrice}.00
          </p>
        </div>
        <div className="!text-center w-full h-full">
          <button className="text-stone-700 text-[14px] font-ubuntu font-bold cursor-pointer active:scale-75">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
