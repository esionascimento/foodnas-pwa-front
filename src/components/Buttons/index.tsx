import { FC } from "react";
import { IDashboardButton } from 'src/interface/config/dashboard';
import Link from "next/link";

const ButtonComponent:FC<IDashboardButton> = (props) => {
  return (
    <Link href={props.href}>
      <button
        type="button"
        className={`bg-gradient-to-br w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 ${props.config.background} ${props.config.size}`}
      >
        {props.text}
      </button>
      </Link>
  )
}

export default ButtonComponent;
