import Home from "./routes/Home.svelte"
import Lorem from "./routes/Lorem.svelte"
import err404 from "./routes/404.svelte"

import Projects from "./routes/Projects.svelte"

export default {
    "/": Home,
    "/lorem/:repeat": Lorem,

    "/projects": Projects,

    // The catch-all route must always be last
    "*": err404
};
