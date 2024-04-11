import { useState, useEffect } from 'react';

export const ThoughtsForm = () => {

    const apiURL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';

    // const [newThought, setNewThought] = useState("");
    const [message, setMessage] = useState('');


    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const messageObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: message })
        };

        fetch(apiURL, messageObject)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to post message');
                }
                return response.json();
            })
            .then((data) => {
                // Handle the response data as needed (optional)
                console.log('Message posted successfully:', data);
                // Reset the message state to clear the textarea
                setMessage('');
                // You may want to trigger a refetch of the thoughts feed here
            })
            .catch((error) => console.error('Error posting message:', error));
    }


    return (
        <div className="post-wrapper">
            <h2>What is making you happy right now?</h2>
            <form>
                <textarea rows="3" placeholder="Share your thoughts" value={message} onChange={handleChange} ></textarea>
                <div className="post-length">
                    <p className="error"></p>
                    <p className="length">
                        0
                        /140
                    </p>
                </div>
                <button type="submit" id="submitPostBtn" aria-label="button for submitting your thought" onClick={handleSubmit} >
                    <span className="emoji" aria-label="heart emoji">❤️</span>
                    Send Happy Thought
                    <span className="emoji" aria-label="heart emoji">❤️</span>

                </button>
            </form>
        </div>
    )
}

