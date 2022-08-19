import Image from "next/image"

const Hero = () => {
    return (
        <div className=" bg-red-300 w-full h-64 flex">
            <div>

                <p className=" font-rockNroll">Easy way to make an order</p>
                <p className="text-2xl font-rockNroll">
                    <span className=" text-red-500 ">
                        HUNGRY </span>
                    Just wait</p>
                <p className="text-2xl text-indigo-900 font-rockNroll">
                    foot at
                    <span className=" text-red-500"> your door </span> </p>
            </div>

            <div>
                <Image src='/hero.png' height={100} width={100}
                    layout="responsive" alt="hero banner"
                    className=" object-fill"
                />
            </div>
        </div >
    )
}
export default Hero
