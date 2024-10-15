import { useState } from "react";

import SearchBar from "./components/SearchBar";

function App() {
    const [count, setCount] = useState(0);

    const handleSubmit = (term) => {
        console.log("Do a search with ", term);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
        </div>
    );
}
export default App;
