import { useState } from "react";

export const useSearches = (initialValue = false) => {
    const [searches, setSearches] = useState(initialValue);

    const toggleSearches = event => {
        setSearches(!searches);
    }

    return [searches, toggleSearches];
}

export const useHoverStyles = (initialValue = ({})) => {
    const [hoverStyles, setHoverStyles] = useState(initialValue);

    const toggleHoverStyles = event => {
        if (event.type === "mouseover") {
            setHoverStyles({background: "darkgreen", border: "3px solid blue"});
        } else if (event.type === "mouseleave") {
            setHoverStyles(initialValue);
        }
    }

    return [hoverStyles, toggleHoverStyles];
}