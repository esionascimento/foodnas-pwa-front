import { MdAccountCircle, MdDeliveryDining } from "react-icons/md";
import ButtonComponent from 'src/components/Buttons';

const HeaderComponent = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="py-2 flex flex-1 flex-col items-start  justify-center">
          <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
            <p className="text-base text-orange-500 font-semibold">
              Delivery
            </p>
            <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
              <MdDeliveryDining className="w-full h-full object-contain"/>
            </div>
          </div>
          <p className="text-[2.5rem] font-bold tracking-wide text-headingColor">
          Distribuidora FoodNas{' '}
            <span className="text-orange-700">Faça seu pedido</span>
          </p>
          <p className="text-base text-textColor text-center md:text-left">
            Distribuidora FoodNas
          </p>
          <ButtonComponent text={"Fazer Pedido"} />
        </div>
        <div className="py-2 bg-blue-400 flex-1">
          <p>World</p>
        </div>
      </div>
    </>
  )
}

export default HeaderComponent;
