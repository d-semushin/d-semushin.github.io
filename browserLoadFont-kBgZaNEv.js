const e=async r=>{try{return await(await fetch(`/fonts/${r}`)).arrayBuffer()}catch(o){console.error(`Error loading font ${r}:`,o)}};export{e as browserLoadFont};
