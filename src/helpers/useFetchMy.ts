import { useEffect, useState } from "react";

type useFetchState<T> = {
  state: "idle" | "loading" | "error" | "success";
  data: null | T;
  error: null | Error;
}

function useFetchMy<T>(url: string) {

  const [fetchState, setFetchState] = useState<useFetchState<T>>({
    state: "idle",
    data: null,
    error: null
  });
  useEffect(() => {
    async function fetchData() {
      try {
        setFetchState((oldValue) => ({
          ...oldValue,
          state: "loading"
        }));
        const response = await fetch(url, {
          mode: 'no-cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
        }
        })
        
        if (response.ok) {
          const json = await response.json();
          setFetchState({
            data: json,
            state: 'success',
            error: null
          });
        } else {
          setFetchState({
            data: null,
            state: "error",
            error: new Error(response.statusText),
          });
        }
      } catch (error) {
        setFetchState({
          data: null,
          state: "error",
          error: error as Error
        });
      }
    }
    fetchData()
  }, [url])

  return fetchState;
}

export default useFetchMy