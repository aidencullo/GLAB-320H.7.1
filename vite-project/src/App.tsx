const lines = [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
];

function App() {
    const poem = lines.map((line, index) => {
	return (
	    <div>
	    <p> {line} </p>
	    { index < lines.length - 1 && <hr /> }
	    </div>
	);
    });

    return (
        <>
            <article>
                {poem}
            </article>
        </>
    );
}

export default App;
