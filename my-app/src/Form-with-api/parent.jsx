import React, { useEffect, useState } from "react";
import axios from "axios";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  const [showList, setShowList] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  // const getData = () => {
  //   axios.get("https://jsonplaceholder.typicodee.com/users")
  //     .then((res) => setData(res.data))     
  //     .catch((err) => console.log(err));    
  // };

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);    
        setError(null);      
      })
      .catch((err) => {
        setError("NO access"); 
        console.error(err);
      });
  };


  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Parent Component</h1>

      {error && <p className="text-red-600">{error}</p>}

      <Child1 onButtonClick={() => setShowList(true)} />
      <Child2 showList={showList} items={data} />
    </div>
  );
};


export default Parent;