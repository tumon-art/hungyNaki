import Image from "next/image"

const Hero = () => {
    return (
        <div className=" md:flex w-full md:px-32">
            <div className=" flex flex-col items-center md:items-start w-full">
                <p className=" font-rockNroll font-extrabold my-2">Easy way to make an order</p>
                <p className="text-2xl my-2 font-extrabold font-rockNroll">
                    <span className=" text-red-500">
                        HUNGRY </span>
                    Just wait</p>
                <p className="text-2xl font-bold my-2 text-indigo-900 font-rockNroll">
                    foot at
                    <span className=" text-red-500"> your door </span> </p>

                <p className=" text-xs text-center px-20 md:px-0 my-6 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Qui magni delectus tenetur autem, sint veritatis!</p>

                <div className=" flex gap-6 my-6">
                    <button className=" transition hover:bg-gray-700
                    text-xs bg-red-500 px-3 py-1 rounded text-white">
                        {` Order now >`}
                    </button>

                    <button className="text-xs text-red-500 ring-1 ring-red-500 px-3 py-1 rounded">
                        See all foods
                    </button>
                </div>
            </div>

            <div className=" flex flex-col items-center">
                <div className=" flex h-[240px] w-[240px] 
            md:min-h-[500px] md:min-w-[500px] relative">
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
