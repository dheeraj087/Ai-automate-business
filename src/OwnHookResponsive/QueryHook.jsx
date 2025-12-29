import {use, useEffect, useState } from "react";

function useQueryHook({ query }) {
    let mediaQuery = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaQuery.matches);
    useEffect(() => {
        setMatches(mediaQuery.matches);
    },[mediaQuery]);
    return matches
}
export default useQueryHook;