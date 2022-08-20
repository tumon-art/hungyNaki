import Image from "next/image"
import { categories } from "../data/categories"

const FoodCategory = () => {
    return (
        <ol className=" flex gap-y-5 gap-x-5 justify-center flex-wrap items-center">
            {categories.map((e, i) => {
                return (
                    <li key={i} className='flex transition-transform p-6 w-48 gap-3 
                    text-sm font-medium bg-red-100 rounded-sm hover:translate-y-[-10px] 
                    justify-center items-center'>
                        <Image src={`/${e.img}`} height='40' width='40' alt="category" />
                        <span> {e.text} </span>
                    </li>
                )
            })}
        </ol>
    )
}
export default FoodCategory
