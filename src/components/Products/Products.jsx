import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SearchContext } from '../Search/SearchContext'

function Products({ isSelected }) {
  const navigate = useNavigate();
  const { searchQuery } = useContext(SearchContext);
  const [data, setData] = useState([]);

  const url = isSelected
    ? `https://fakestoreapi.com/products/category/${isSelected}`
    : 'https://fakestoreapi.com/products';

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [isSelected]);

  // Filter products based on search query
  const filteredProducts = data.filter((entry) =>             //when nothing is entered it filters for "", which basically shows all the products.
    entry.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-10 flex-grow">
      <h1 className="m-10 text-2xl font-bold capitalize text-[#008ECC]">
        {isSelected ? isSelected : 'Products'}
      </h1>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden"> 
          {filteredProducts.map((entry, index) => (           
            <div key={index} className="flex flex-col items-center m-1">
              <img
                className="h-32 w-28 cursor-pointer hover:scale-110"
                src={entry.image}
                onClick={() => navigate(`/${entry.id}`)}
              />
              <h1 className="p-2 text-sm cursor-pointer">
                {entry.title.length > 40
                  ? entry.title.substring(0, 40) + '...'
                  : entry.title}
              </h1>
              <h2 className="font-bold text-[#388e3c]">${entry.price}</h2>
              <h2>
                {entry.rating.rate}⭐ ({entry.rating.count})
              </h2>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No products found</p>
      )}
    </div>
  );
}

export default Products;
