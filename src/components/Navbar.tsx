import { useEffect, useState } from "react"

const Navbar = () => {
    const [items, setItems] = useState([
        'Lorem ipsum 1',
        'Lorem ipsum 2',
        'Lorem ipsum 3',
        'Lorem ipsum 4',
    ])

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(items)
        const intervals = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000)

        return () => clearInterval(intervals)
    }, [])

    return <>
        <header className="flex px-4 h-full items-center">
            <h1 className="text-2xl">Hi am react</h1>
            <div className="ml-2">Count: {count}</div>
            <ul className="ml-auto flex gap-2">
                {
                    items.map(item => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
        </header>
    </>
}

export default Navbar