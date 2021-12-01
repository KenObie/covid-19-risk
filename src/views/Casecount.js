import React, { useRef, useEffect } from "react";

const { tableau } = window;


function Casecount() {
    const ref = useRef(null)
    const url = 
    "https://public.tableau.com/views/CaseCountbyCounty2Version3_16382303585200/Dashboard2?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

function initViz() {
    new tableau.Viz(ref.current, url, {
        hideTabs: false,
        hideToolbar: false,
        width: "100%",
        height: "1000px",
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


export default Casecount;