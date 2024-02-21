import instance from "@/config/axios.config";
import React, { useState, useEffect } from "react";


//custom Hook
const useApi = (id, endPoint) => {
  console.log("hello", endPoint);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const usersData = await instance.get(endPoint);
        console.log(usersData?.data?.users[id]);
        setData(usersData?.data?.users[id]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  return { data };
};

export default useApi;
