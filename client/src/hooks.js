import { useState } from "react";

export const useSearches = (initialValue = false) => {
    const [searches, setSearches] = useState(initialValue);

    const toggleSearches = event => {
        setSearches(!searches);
    }

    return [searches, toggleSearches];
}