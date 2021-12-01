import React, { useRef, useEffect } from "react";

const { tableau } = window;


function Gps3() {
    const ref = useRef(null)
    const url = "https://public.tableau.com/shared/B2N6CCQQZ?:display_count=n&:origin=viz_share_link"
function initViz() {
    new tableau.Viz(ref.current, url, {
        hideTabs: true,
        hideToolbar: true,
        width: "100%",
        height: "1000px"
    });
}

useEffect(() => {
    initViz();
}, [])

    return (
        <div>
            <div ref={ref}>
            </div>
            
        </div>
    )
}


export default Gps3;