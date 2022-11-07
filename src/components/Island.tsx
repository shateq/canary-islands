import { Link } from "solid-app-router"
import { JSX } from "solid-js"

interface IslandProps {
    name: string,
    children?: JSX.Element
}

export default function Island(props: IslandProps) {
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>{props.name}</h1>
            <hr />
            {props.children}

        </div>
    )
}