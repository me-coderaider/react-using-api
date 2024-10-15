function SearchBar({ onSubmit }) {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(
            // NEVER EVER EVER DO THIS
            document.querySelector("input").value
        );
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input />
            </form>
        </div>
    );
}
export default SearchBar;
