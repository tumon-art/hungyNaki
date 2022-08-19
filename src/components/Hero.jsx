import Image from "next/image"

const Hero = () => {
    return (
        <div className=" md:flex lg:mt-10 w-full lg:px-32 md:px-10">
            <div className=" flex flex-col items-center md:items-start">
                <p className=" font-rockNroll md:my-4 md:text-2xl
                 my-2">Easy way to make an order</p>
                <p className="text-2xl md:text-4xl md:my-4 my-2 
                font-rockNroll">
                    <span className="font-extrabold  text-red-600">
                        HUNGRY? </span>
                    Just wait</p>
                <p className="text-2xl md:text-4xl md:my-4 font-bold my-2 font-rockNroll">
                    food at
                    <span className=" text-red-600"> your door </span> </p>

                <p className=" text-xs md:text-sm text-center md:text-left md:pr-32
                sm:px-44 px-10
                 md:px-0 my-6 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Qui magni delectus tenetur autem, sint veritatis!</p>

                <div className=" flex gap-6 my-6">
                    <button className=" transition md:font-bold hover:bg-gray-700
                    text-xs bg-red-600  md:py-2 md:px-4 px-3 py-1 rounded text-white">
                        {` Order now >`}
                    </button>

                    <button className="text-xs md:font-bold md:text-sm text-red-500
                     ring-1 ring-red-500 px-3 py-1 rounded">
                        See all foods

                    </button>
                </div>
            </div>

            <div className=" flex flex-col items-center">
                <div className=" flex h-[280px] w-[280px] 
               
            lg:min-h-[500px lg:min-w-[500px] relative">
                    <Image src='/hero.png'
                        layout="fill" alt="hero banner"
                        className=" object-fill"
                    />
                </div>
            </div>



        </div >
    )
}
export default Hero
