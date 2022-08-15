import { useState } from 'react';
import Link from 'next/link'
import { MdAccountCircle, MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import Image from 'next/image';
import { configMenuLi, configHeaderMenuHamburguer } from 'src/config/header';

const HeaderComponent = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isVisibleBalance, setIsVisibleBalance] = useState(true);

  const login = () => {
    setIsMenu(!isMenu);
  }

  const logo = () => {
    return (
      <Link href="/dashboard">
        <div className="flex items-center gap-3">
          <Image
            src="/icons/maragogi-logo.webp"
            width="70"
            height="70"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shawdow-xl cursor-pointer"
          />
          <p className="text-headingColor text-xl font-bold cursor-pointer">
            MoraGogi
          </p>
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
        {configMenuLi.map((data, index) => {
          return (
            <li
              key={`${data.text} + ${index}`}
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            >
              {data.text}
            </li>
          )
        })}
      </ul>
    )
  }

  const logout = () => {
    setIsMenu(false);
  }

  const handlerClickBalance = () => {
    setIsVisibleBalance(!isVisibleBalance);
  }

  function checkParent(t: { parentNode: any; }, elm: HTMLElement | null) {
    while (t.parentNode) {
      if (t == elm) { return true; }
      t = t.parentNode;
    }
    return false;
  }

  const toggleMobileHamburguer = () => {
    let userMenuDiv = document.getElementById("menuUser");
    let userMenu = document.getElementById("menuUserButton");

    let navMenuDiv = document.getElementById("menuContentRotas");
    let navMenu = document.getElementById("menuContentRotasButton");

    document.onclick = check;

    function check(e: { target: any; }) {
      let target = (e && e.target);

      if (!checkParent(target, userMenuDiv)) {
        if (checkParent(target, userMenu)) {
          if (userMenuDiv?.classList.contains("invisible")) {
            userMenuDiv.classList.remove("invisible");
          } else { userMenuDiv?.classList.add("invisible"); }
        } else {
          userMenuDiv?.classList.add("invisible");
        }
      }

      if (!checkParent(target, navMenuDiv)) {
        if (checkParent(target, navMenu)) {
          if (navMenuDiv?.classList.contains("hidden")) {
            navMenuDiv.classList.remove("hidden");
          } else { navMenuDiv?.classList.add("hidden"); }
        } else {
          navMenuDiv?.classList.add("hidden");
        }
      }
    }
  }

  return (
    <>
      <header className="fixed z-50 w-screen p-2 px-2 md:px-16 bg-bgHeader md:bg-white">
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
          <div className="flex">
            <div className="block lg:hidden pr-4">
              <button id="menuContentRotasButton"
                className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-100 hover:border-teal-500 appearance-none focus:outline-none"
                onClick={() => toggleMobileHamburguer()}
              >
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
              </button>
            </div>

          </div>
          <Link href="/dashboard">
            <div className="flex items-center gap-3">
              <p className="text-headingColor text-xl font-bold cursor-pointer">
                MaraGogi
              </p>
            </div>
          </Link>
          <div className="flex">
            <div className='flex relative items-center'>
              <div>
                {isVisibleBalance ?
                  <MdOutlineVisibilityOff onClick={handlerClickBalance} className='w-10 h-6' />
                  :
                  <MdOutlineVisibility onClick={handlerClickBalance} className='w-10 h-6' />
                }
              </div>
              <div id="menuUserButton" className="px-1">
                <MdAccountCircle
                  className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shawdow-xl cursor-pointer"
                  onClick={() => toggleMobileHamburguer()}
                />
              </div>
            </div>

          </div>
        </div>
      </header>
      {/* Menu Left */}
      <div
        id="menuContentRotas"
        className='hidden'
      >
        <aside
          className="fixed mt-12 inset-y-0 flex-wrap items-center justify-between block p-0 overflow-y-auto antialiased transition-transform duration-200 --translate-x-full bg-gray-800 border-0 dark:shadow-none dark:bg-slate-850 max-w-[60%] ease-nav-brand z-990  left-0 xl:translate-x-0 translate-x-0 mr-6"
          aria-expanded="true"
        >
          <hr
            className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent"
          />
          <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
            <ul className="flex flex-col pl-0 mb-0">
              <ul className="list-reset lg:flex flex-1 items-center px-4 md:px-0">
                {configHeaderMenuHamburguer.map((data) => {
                  return (
                    <li className="mr-6 my-2 md:my-0">
                      <Link href={data.href}>
                        <a
                          className={`block py-1 md:py-3 pl-1 ${data.config?.colorText}  hover:text-blue-500 border-b-2 border-blue-200 hover:border-blue-400`}
                          >
                          <span className="pb-1 md:pb-0 text-sm">
                            {data.text}
                          </span>
                        </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </ul>
          </div>
          <div className="mx-4">
            <a
              href="/dashboard"
              target="_blank"
              className="inline-block w-full px-8 py-2 mb-4 font-bold leading-normal text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 text-size-xs hover:shadow-xs hover:-translate-y-px"
            >
              Novidades
            </a>
            <a
              href="/"
              className="inline-block w-full px-8 py-2 font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md select-none bg-150 bg-x-25 text-size-xs hover:shadow-xs hover:-translate-y-px"
            >
              Sair
            </a>
          </div>
        </aside>
        <>
          {/* <ul className="list-reset lg:flex flex-1 items-center px-4 md:px-0">
            {configHeaderMenuHamburguer.map((data) => {
              return (
                <li className="mr-6 my-2 md:my-0">
                  <a
                    href={data.href}
                    className="block py-1 md:py-3 pl-1 text-blue-100  hover:text-blue-500 border-b-2 border-blue-200 hover:border-blue-400"
                  >
                    <span className="pb-1 md:pb-0 text-sm">
                      {data.text}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul> */}
        </>
      </div>
      {/* Menu Right */}
      <div
        className='w-40 shadow-lg  flex flex-col absolute right-0'
      >
        <div
          id="menuUser"
          className='bg-gray-800 shadow-md absolute mt-12 top-0 right-0 min-w-full py-2 overflow-auto z-30 invisible'
        >
          {configMenuLi.map((data, index) => {
            return (
              <ul key={`${data.text}-${index}-header`} className="list-reset lg:flex flex-1 items-center px-4">
                {data.text !== 'Sair' ?
                  (
                    <Link href={data.href}>
                      <li
                        className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100  text-white text-base"
                      >
                        {data.text}
                      </li>
                    </Link>
                  )
                  : (
                    <li
                      className='px-4 py-2 m-2 flex rounded-md items-center shadow-md justify-center gap-3 cursor-pointer bg-gray-200 hover:bg-gray-300  text-textColor text-base'
                      onClick={logout}
                    >
                      Sair
                    </li>
                  )
                }
              </ul>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default HeaderComponent;
