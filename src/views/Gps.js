import React, { useRef, useEffect } from "react";

const { tableau } = window;


function Gps() {
    const ref = useRef(null)
    const url = "https://public.tableau.com/views/GPS-CountyPicker/Income-TravelDashboard?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

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


export default Gps;