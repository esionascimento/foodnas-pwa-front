import { useState } from 'react';
import Link from 'next/link'
import { MdAccountCircle } from "react-icons/md";

const HeaderComponent = () => {
  const [isMenu, setIsMenu] = useState(false);

  const login = () => {
    setIsMenu(!isMenu);
  }

  const logo = () => {
    return (
      <Link href="/">
        <div className="flex items-center gap-2">
          <MdAccountCircle
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shawdow-xl cursor-pointer"
            onClick={login}
          />
          <p className="text-headingColor text-xl font-bold cursor-pointer">FoodNas</p>
        </div>
      </Link>
    )
  }

  const avatar = () => {
    return (
      <div className='relative'>
        <MdAccountCircle
          className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shawdow-xl cursor-pointer"
          onClick={login}
        />
        {isMenu && (
          <div
          className='w-40 bg-gray-50 shadow-lg rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2'
          >
            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Novo Item</p>
            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Sair</p>
          </div>
        )}
      </div>
    )
  }

  const menu = () => {
    return (
      <ul className="flex items-center gap-8">
        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
      </ul>
    )
  }

  const logout = () => {
    setIsMenu(false);
  }

  return (
    <>
      <header className="fixed z-50 w-screen p-2 px-2 md:p-6 md:px-16">
        <div className="hidden md:flex w-full h-full items-center justify-between">
          {logo()}
          <div className="flex items-center gap-8">
            {menu()}
            <div className="relative flex items-center justify-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 22 22" stroke="#4D4D4D" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-sm text-white font-bold">2</p>
              </div>
            </div>
            {avatar()}
          </div>
        </div>
        {/* MOBILE */}
        <div className="flex items-center justify-between md:hidden w-full h-full">
          <div className="relative flex items-center justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 22 22" stroke="#4D4D4D" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-sm text-white font-bold">2</p>
            </div>
          </div>
          {logo()}
          <div className='relative'>
            <MdAccountCircle
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shawdow-xl cursor-pointer"
              onClick={login}
            />
            {isMenu && (
              <div
              className='w-40 bg-gray-50 shadow-lg rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2'
              >
                <p
                  className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
                >Novo Item</p>
                <ul className="flex flex-col px-4 py-2 gap-8">
                  <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                  <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                  <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
                  <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
                </ul>
                <p
                  className='px-4 py-2 flex rounded-md items-center shadow-md justify-center gap-3 cursor-pointer bg-gray-200 hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base'
                  onClick={logout}
                >
                  Sair
                </p>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderComponent;
