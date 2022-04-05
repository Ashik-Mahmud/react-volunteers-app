import axios from "axios";
import { useEffect, useState } from "react";

const useVolunteers = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get("data.json").then((response) => {
      setVolunteers(response.data);
      setLoading(true);
    });
  }, []);
  return { volunteers, setVolunteers, loading };
};

export default useVolunteers;
