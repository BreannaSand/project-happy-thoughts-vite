
import { useState, useEffect } from 'react';
export const ThoughtsFeed = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error))

    }, [])

    console.log(data)

    return (
        // Display the fetched 'data' in the component's UI.
        <div>{data}</div>
    )
}
