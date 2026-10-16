import { useState, useEffect, useCallback } from "react";

// Ye hook 3 states manage karta hai: data, loading, error.
export default function useCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadCourses = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/courses.json"); // to test error change the url to /courses1.json
      if (!res.ok) throw new Error(`Server error (${res.status})`);
      const data = await res.json();
      await new Promise((r) => setTimeout(r, 1200)); // simulate slow network
      setCourses(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false); // loading state is false after data is fetched or error occurs
    }
  }, []);

  // have used useEffect to fetch the data when the component mounts. loadCourses function is called inside useEffect.
  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  return { courses, setCourses, loading, error, loadCourses };
}
