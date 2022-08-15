import { MdAccountCircle, MdDeliveryDining } from "react-icons/md";
import ButtonComponent from 'src/components/Buttons';
import { buttonNewOrder, buttonRegisterSales, buttonAddStock } from 'src/config/dashboard/dashboard';

const HeaderComponent = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 divide-y divide-black">
        <div className="py-2 flex flex-1 items-start  justify-between">
          <div className="flex flex-col">
            <p>Dia</p>
            <p>R$ 00,0</p>
          </div>
          <div className="flex flex-col">
            <p>Mês</p>
            <p>R$ 00,0</p>
          </div>
        </div>
        <div className="py-2 flex justify-between items-center">
          <div>
            <ButtonComponent {...buttonRegisterSales} />
          </div>
          <div>
            <ButtonComponent {...buttonAddStock} />
          </div>
        </div>

      </div>
    </>
  )
}

export default HeaderComponent;
