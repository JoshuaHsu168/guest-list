import { useState, useEffect } from "react";

const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/DEMO";
const API = BASE_URL + COHORT;

export default function useQuery(resource) {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    const query = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(API + resource);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        setData(result.data);
      } catch (e) {
        console.error("Fetch error:", e);

        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    query();
  }, [resource]);

  return { data, loading, error };
}
