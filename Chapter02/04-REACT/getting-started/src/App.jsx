/* eslint-disable react-hooks/rules-of-hooks */
import useFetch from "./hooks/useFetch";

const App = () => {
    const url = `http://openapi.seoul.go.kr:8088/${
        import.meta.env.VITE_API_KEY
    }/json/neisSchoolInfo/1/1000`;
    // data, error, loading, refresh
    const { error, loading } = useFetch(url);
    if (loading) return <h3>LOADING...</h3>;
    if (error) console.log(error);

    return <></>;
};

export default App;
