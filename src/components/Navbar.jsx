import Image from "next/image"


const Navbar = () => {
    return (
        <div className=" ring-2 text-amber-500 text-5xl font-extrabold">
            <span>
                <Image src="/res-logo.png" height='40' width='40' alt='logo' />
            </span>

            <div>
            </div>
        </div>
    )
}
export default Navbar
