
import { useState, useEffect } from 'react';
export const ThoughtsFeed = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts')
                if (!response.ok) {
                    throw new Error('Failed to fetch data')
                }
                const data = await response.json()
                setData(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])

    console.log(data);

    const outputMessage = (() => {
        var outerMessage = data.map((object) =>
            object.message
        )
        return outerMessage;
    })

    return (
        // Display the fetched 'data' in the component's UI.
        <div>


            {outputMessage()}

        </div>
    )
}
