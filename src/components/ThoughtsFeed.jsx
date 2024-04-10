
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

    const outputMessage = () => {
        return data.map((object) => (
            <div key={object._id} className="message">
                <p>{object.message}</p>

                <div className="info-wrapper">
                    <div className="info-like">
                        <button type="button" id="likeBtn" className="like-button">
                            <span className="emoji" aria-label="like button">h</span>
                        </button>
                        <span className="num-likes">
                            x0
                        </span>
                    </div>

                    <div className="info-time">2 days ago</div>
                </div>
            </div>
        ));
    };

    return (
        // Display the fetched 'data' in the component's UI.
        <div className="messages-container">


            {outputMessage()}

        </div>
    );
};
