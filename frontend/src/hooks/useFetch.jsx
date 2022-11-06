import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch(url, {mode: 'no-cors'})
            .then(resp => {
                if (resp.status !== 200) {
                    setData('No se encontraron resultados');
                } else {
                    resp.json()
                        .then(data => {
                            setData(data)
                        })
                }
            })
            .catch(err => console.log(err))
    }, [url])

    return [data];
}

export default useFetch;