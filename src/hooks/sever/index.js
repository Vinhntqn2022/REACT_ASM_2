import { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (apiFunc) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const request = async (...args) => {
        setLoading(true);
        try {
            const result = await apiFunc(...args);
            setData(result);
        } catch (err) {
            setError(err.message || "Unexpected Error")
        } finally {
            setLoading(false);
        }
    };
    return {
        data,
        error,
        loading,
        request
    }
}