import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = initialUrl => {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(initialUrl);
  useEffect(() => {
    const fetchUrl = async () => {
      const res = await axios(url);
      console.log(res.data);
      setData(res.data);
    };
    fetchUrl();
  }, [url]);
  return data;
};
