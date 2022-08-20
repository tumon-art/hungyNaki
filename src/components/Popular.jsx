import Image from "next/image"
import { useState } from "react"

const list = [
    { text: 'All' },
    {
        text: 'Burger',
        img: '/hamburger.png'
    },
    {
        text: 'Pizza',
        img: "/pizza.png"
    },
    {
        text: 'Bread',
        img: '/bread.png'
    }
]

const Popular = () => {
    const [Select, setSelect] = useState("All")
    return (
        <div className=" font-rockNroll">
            <h1 className=" text-slate-700 text-center 
             font-bold text-2xl" >
                Popular Foods
            </h1>

            <div className=" mx-2 bg-red-600 rounded-md my-10">
                <ol className=" font-sans text-white text-xs py-4 font-medium flex 
                justify-center">
                    {list.map((e, i) => {
                        return (
                            <li tabIndex={i} key={i} className={` 
                            ${Select == e.text && ' text-red-600 bg-white'}
                             cursor-pointer flex gap-2 items-center px-3 py-1 mx-3 rounded-md `}
                                onClick={() => setSelect(`${e.text}`)}
                            >
                                {e.text !== 'All' && (
                                    <Image src={e.img} height='20' width='20'
                                        alt='icodn' />
                                )}
                                <span> {e.text} </span>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}
export default Popular
