

export const ThoughtsForm = () => {
    return (
        <div className="post-wrapper">
            <h2>What is making you happy right now?</h2>
            <form>
                <textarea rows="3" placeholder="'If music be the food of love, play on.' - William Shakespeare"></textarea>
                <div className="post-length">
                    <p className="length">
                        "0"
                        "/140"
                    </p>
                </div>
            </form>
        </div>
    )
}
