import { useEffect, useState } from "react";
import axios from "axios";



const useFetch = (url) => {
  const [result, setResult] = useState({ url: null, data: null, error: null });

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    axios
      .get(url, { signal: controller.signal })
      .then((response) => {
        setResult({ url, data: response.data, error: null });
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setResult({ url, data: null, error: err.message });
      });

    return () => controller.abort();
  }, [url]);

  const isCurrent = result.url === url;

  return {
    data: isCurrent ? result.data : null,
    loading: Boolean(url) && !isCurrent,
    error: isCurrent ? result.error : null,
  };
};

export default useFetch;