import Image from "next/image"
import products from "../data/products"



const HotPizza = () => {
    const filterd = products.filter((products) => {
        return products.category == 'Pizza'
    })

    return (
        <div>
            <h2 className=" font-rockNroll text-xl font-extrabold
             text-center my-8" >
                Hot Pizza
            </h2>

            <div className=" flex flex-wrap justify-center
             justify-items-center md:gap-10  gap-3 ">
                {filterd.slice(0, 4).map((e, i) => {
                    return (
                        <div key={e.id} className=' relative w-40 h-48  sm:w-48 sm:h-48 
                         ring-1 ring-red-100 flex flex-col justify-center rounded-sm
                          hover:ring-2 hover:ring-red-500 transition'>
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
                                    text-xs rounded cursor-move hover:bg-red-700">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default HotPizza
