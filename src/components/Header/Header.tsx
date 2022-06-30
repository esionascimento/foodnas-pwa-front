import Link from 'next/link'
import { MdAccountCircle } from "react-icons/md";

const HeaderComponent = () => {
  return (
    <>
      <header className="fixed z-50 w-screen p-6 px-15">
        <div className="hidden md:flex w-full h-full items-center justify-between">
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <p className="text-headingColor text-xl font-bold cursor-pointer">FoodNas</p>
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
            </ul>
            <div className="relative flex items-center justify-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 22 22" stroke="#4D4D4D" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-sm text-white font-bold">2</p>
              </div>
            </div>
            <MdAccountCircle className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shawdow-xl cursor-pointer"/>
          </div>
        </div>
        {/* MOBILE */}
        <div className="flex md:hidden w-full h-full">

        </div>
      </header>
    </>
  )
}

export default HeaderComponent;
