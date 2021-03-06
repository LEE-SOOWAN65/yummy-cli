import { useState, useEffect } from "react";
import axios from "axios";

export const useQuery = initialUrl => {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(initialUrl);
  useEffect(() => {
    setUrl(initialUrl);
  }, [initialUrl]);
  useEffect(() => {
    const fetchUrl = async () => {
      console.log("AXIOS", url);
      const res = await axios(url);
      setData(res.data);
      console.log(res.data);
    };
    fetchUrl();
  }, [url]);

  return data;
};

export const useMutation = (initialUrl, params) => {
  console.log(initialUrl);
  console.log(params);
  const fetchUrl = async () => {
    const res = await axios.post(initialUrl, params);
    console.log(res.data);
    return res.data;
  };
  return fetchUrl();
};
