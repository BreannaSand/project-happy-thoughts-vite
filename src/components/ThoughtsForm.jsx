import { useState, useEffect } from 'react';

export const ThoughtsForm = () => {

    const apiURL = 'https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts';

    const [newThought, setNewThought] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        setNewThought(event.target.value);
    }

    const handleThoughtSubmit = (event) => {
        event.preventDefault();
        const newThoughtObject = { message };
        console.log(newThoughtObject);
    }
    /*
        await fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: '${newThought}' }),
    
        })
            .then((response) => {
                console.log("Response from API:", response);
                if (!response.ok) {
                    throw new Error("Response was not ok");
                }
            })
    
            .then((data) => {
                console.log("The data receieved from API:", data);
            })
    
    */

    return (
        <div className="post-wrapper">
            <h2>What is making you happy right now?</h2>
            <form>
                <textarea rows="3" placeholder="Share a thought" value={newThought} onChange={handleChange} ></textarea>
                <div className="post-length">
                    <p className="error"></p>
                    <p className="length">
                        0
                        /140
                    </p>
                </div>
                <button type="submit" id="submitPostBtn" aria-label="button for submitting your thought" onClick={handleThoughtSubmit}>
                    <span className="emoji" aria-label="heart emoji">❤️</span>
                    Send Happy Thought
                    <span className="emoji" aria-label="heart emoji">❤️</span>

                </button>
            </form>
        </div>
    )
}

