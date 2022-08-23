import Image from "next/image"
import { RiCheckboxLine } from 'react-icons/ri'


const list = [

    {
        title: 'Fresh and tasty foods',
        desc: `Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Quia, voluptatibus.`,
    },
    {
        title: 'Quality support',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.`,
    },
    {
        title: 'Order from any location',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, earum.`,
    },

]

const WhyHungry = () => {
    return (
        <section className=" px-3 md:mx-20 my-20 grid justify-items-center items-center sm:grid-cols-2 md:grid-cols-2">
            <div>
                <Image
                    src="/location.png"
                    alt="icon"
                    height='460'
                    width='460'
                    className=" object-contain text-center"
                />
            </div>

            <div>
                <h1 className=" font-rockNroll text-2xl md:text-3xl my-8 font-bold text-red-600">
                    <span className=" text-slate-800">
                        Why {` `}
                    </span>
                    HungryNaki?
                </h1>

                <p className="text-gray-500 md:text-sm mb-10 text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum, minus. Tempora reprehenderit a corporis velit,
                    laboriosam vitae ullam,
                    repellat illo sequi odio esse iste fugiat dolor,
                    optio incidunt eligendi deleniti!
                </p>

                <div>
                    {list.map((e, i) => {
                        return (
                            <div key={i} className=' my-4'>
                                <span className=" font-medium flex items-center gap-2 
                                 md:text-base  text-sm">
                                    <RiCheckboxLine className=" text-red-600" />{e.title}
                                </span>
                                <p className=" md:text-sm py-2 text-[10px] text-gray-500">
                                    {e.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default WhyHungry
