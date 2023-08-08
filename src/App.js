import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'https://fvg773szqa.execute-api.ap-northeast-1.amazonaws.com/Prod/hello';

    // Make a GET request to the API using Axios
    axios.get(apiUrl)
      .then(response => {
        // Handle the successful response
        setData(response.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const HandleSubmitUser = ()=>{
    const apiUrl = 'https://fvg773szqa.execute-api.ap-northeast-1.amazonaws.com/Prod/hello';

    // Make a GET request to the API using Axios
    axios.post(apiUrl,{
      name: inputValue
    })
      .then(response => {
        // Handle the successful response
        setInputValue("")
        console.log(response)
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });

  }

  return (
    <div>
      <h1 className='text-8xl'> Data user</h1>
      {data.users&& data.users.map((user)=>
      
        <div className='border p-4'>
        <span>id: {user.id}</span> 
        <div> name: {user.name}</div>
        </div>)}
        <div >
        <label htmlFor="inputField">User name </label>
        <input
        className='border border-black h-10 '
          type="text"
          id="inputField"
          value={inputValue}
          onChange={handleInputChange}
        />
     <button className='bg-sky-600 rounded m-5' onClick={HandleSubmitUser} > Submit User</button>
       
      </div>
    </div>
  );
};

export default App;