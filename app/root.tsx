import React from 'react'
import { Links, Meta, Outlet, Scripts } from '@remix-run/react'
import type { LinksFunction } from '@remix-run/node'
import Navbar from './components/Navbar'
import stylesheet from './tailwind.css'

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: stylesheet },
]
export default function App() {
    return (
        <html>
            <head>
                <title>Front end</title>
                {/* <link rel="icon" href="data:image/x-icon;base64,AA" /> */}
                <Meta />
                <Links />
            </head>
            <body>
                <Navbar />
                <h1>Hello world!</h1>
                <Outlet />
                This is the thing
                <Scripts />
            </body>
        </html>
    )
}
