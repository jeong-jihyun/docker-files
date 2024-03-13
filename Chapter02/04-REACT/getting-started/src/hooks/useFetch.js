/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = url => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    const fetchData = () => {
        setLoading(true);
        axios
            .get(url)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    const refresh = () => {
        setLoading(true);
        axios
            .get(url)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    useEffect(() => {
        fetchData();
    }, [url]);
    return { data, loading, error, refresh };
};
export default useFetch;
