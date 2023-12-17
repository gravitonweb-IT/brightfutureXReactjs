import React, { useEffect, useState } from "react";

import { servieUrl } from "../../env/env";
import { useNavigate } from "react-router-dom";

const Withdraw = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);

  
  const navigate = useNavigate();
  useEffect(()=>{
    if (localStorage.getItem("login") != "admin") {

      navigate("/loginandregister");

    }

  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        // Replace with the actual API endpoint URL
        const apiUrl = servieUrl.otpurl + "growadmin/stock_fund/";

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const apiData = await response.json();

        // Filter the data based on the search query
        const filteredData = apiData.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [searchQuery]); // Run the effect whenever searchQuery changes

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleDelete = async (itemId) => {
    try {
      // Replace with the actual API endpoint URL for deleting an item
      const apiUrl = `${servieUrl.otpurl}growadmin/stock_fund/${itemId}`;
      const response = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: itemId }), // Pass the item ID to delete
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Assuming successful deletion, you can remove the item from your state
      setData((prevData) => prevData.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
    <div className="row mb-2">
      <div className="col-lg-8">
          <input
            type="text"
            placeholder="Search by Name.."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="border rounded-md py-2 px-4 hover:border-blue-950"
          />
         
       
      </div>
      <div className="col-lg-4">
      <p style={{fontSize:'24px',fontWeight:'500'}}>
            Withdraw Data Table
          </p>
      </div>
    </div>
     

      <div className="overflow-x-auto">
        <table className="min-w-full border-4">
          <thead style={{backgroundColor:'rgb(29, 35, 58)',color:'white'}}>
            <tr>
              <th className="px-6 py-3  text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">
                Date
              </th>

              <th className="px-6 py-3  text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">
                Name
              </th>

              <th className="px-6 py-3  text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">
                Account
              </th>

              <th className="px-6 py-3  text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">
                IFCS
              </th>

              <th className="px-6 py-3  text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">
                PAN CARD
              </th>

              <th className="px-6 py-3  text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3  text-center text-lg leading-4 font-medium text-white uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr className="border" key={item.id}>
                <td className="p-2 text-center ">{item.date}</td>

                <td className="p-2 text-center font-semibold bg-slate-300">
                  {item.name}
                </td>

                <td className="p-2 text-center">{item.Account_No}</td>

                <td className="p-2 text-center font-semibold bg-slate-300">
                  {item.ifsc}
                </td>

                <td className="p-2 text-center">{item.panNo}</td>

                <td className="p-2 text-center font-semibold bg-slate-300">
                  {item.price}
                </td>
                <td className="p-2 text-center">
                  <button
                    onClick={() => handleDelete(item.id)} // Pass the item ID to the delete function
                    className="bg-red-500 px-2 py-1 rounded ml-2 hover:cursor-pointer"
                    style={{color:'white'}}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Withdraw;
