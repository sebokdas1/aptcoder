import { useEffect, useState } from 'react';
import Spinner from '../Loading/Spinner';

const useData = () => {
    const [isloading, setIsloading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setIsloading(true)
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
        setIsloading(false)
    }, [])
    if (isloading) {
        return <Spinner />
    }
    return data
};

export default useData;