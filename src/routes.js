import Home from "./routes/Home.svelte"
import Lorem from "./routes/Lorem.svelte"
import err404 from "./routes/404.svelte"

import About from "./routes/About.svelte"
import Projects from "./routes/Projects.svelte"
import Server from "./routes/Server.svelte"

export default {
    "/": Home,
    "/lorem/:repeat": Lorem,

    "/about": About,
    "/projects": Projects,
    "/server": Server,

    // The catch-all route must always be last
    "*": err404
};
