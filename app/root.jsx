import { Links, Meta, Outlet, Scripts } from '@remix-run/react'
import { Navbar } from './shared/Navbar'

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
