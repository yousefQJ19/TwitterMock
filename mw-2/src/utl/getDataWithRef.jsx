import { useState, useEffect } from 'react';
import { getDocs } from 'firebase/firestore'; // Adjust this import based on your Firebase setup

const GetDataWithRef = (dataBaseRef) => {
    const [dataList, setDataList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
        try {
            const data = await getDocs(dataBaseRef);
            const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setDataList(filteredData);
            setIsLoading(false);
        } catch (err) {
            console.error(err);
            setError(err);
        }
        };
        getData();
    }, []);

    return { dataList, isLoading, error };
    };

export default GetDataWithRef;
