import { useEffect, useReducer, useRef } from "react";

export const useFetch = (query) => {
  const cache = useRef({});

  const initialState = {
    status: "idle",
    error: null,
    data: null,
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...initialState, status: "fetching" };
      case "FETCHED":
        return { ...initialState, status: "fetched", data: action.payload };
      case "FETCH_ERROR":
        return { ...initialState, status: "error", error: action.payload };
      default:
        return state;
    }
  });

  useEffect(() => {
    let cancelRequest = false;

    if (query === undefined) return;

    const fetchData = async () => {
      dispatch({ type: "FETCHING" });

      if (cache.current[query]) {
        dispatch({ type: "FETCHED", payload: cache.current[query] });
      } else {
        try {
          const response = await fetch(query);
          const data = await response.json();
          cache.current[query] = data;

          if (cancelRequest) return;
          dispatch({ type: "FETCHED", payload: data });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: "FETCH_ERROR", payload: error.message });
        }
      }
    };

    fetchData();

    return () => (cancelRequest = true);
  }, [query]);

  return { ...state };
};
