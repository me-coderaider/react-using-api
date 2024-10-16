import { useState } from "react";

function SearchBar({ onSubmit }) {
    // 5 STEPS of handling input-elements in REACT
    // Step 1.
    const [term, setTerm] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    // Step 2.
    const handleChange = (event) => {
        // Step 3. getting value of input i.e by using 'event.target.value'

        // Step 4.
        setTerm(event.target.value);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                {/* Step 5. Passing state to the input as the value prop to always display whatever in there in 'term' prop*/}
                <input value={term} onChange={handleChange} />
            </form>
        </div>
    );
}
export default SearchBar;
