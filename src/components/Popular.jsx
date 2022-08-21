import Image from "next/image"
import { useState } from "react"
import products from "../data/products"

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
        <section className=" md:mx-20 sm:mx-14 mx-2">
            <div className=" font-rockNroll">
                <h1 className=" text-slate-700 text-center 
             font-bold text-2xl" >
                    Popular Foods
                </h1>

                <div className="  bg-red-600 rounded-md my-10">
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

                {/* === SHOW ALL FOOD */}
                <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-items-center md:gap-8 lg:gap-14 gap-3 ">
                    {products.map((e, i) => {
                        return (
                            <div key={e.id} className=' relative w-44 h-48  sm:w-48 sm:h-48 
                         ring-1 ring-red-100 flex flex-col justify-center rounded-sm '>
                                <div className=" flex flex-col items-center ">
                                    <Image
                                        src={e.image01}
                                        height='70'
                                        width='70'
                                        alt='img' />
                                    <p className=" mt-6 text-xs">
                                        {e.title}
                                    </p>
                                </div>
                                <div className=" bottom-3 mt-8 text-center flex justify-between items-center mx-2">
                                    <span className=" text-md font-medium font-sans text-red-600">
                                        ${Math.floor(e.price)}
                                    </span>
                                    <button className=" font-sans text-white bg-red-600 px-3 py-[6px] 
                               text-xs cursor-pointer rounded">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Popular
