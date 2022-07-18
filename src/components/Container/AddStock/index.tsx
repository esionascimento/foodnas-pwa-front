import { useState } from "react";
import { MdAccountCircle, MdDeliveryDining } from "react-icons/md";
import ButtonComponent from 'src/components/Buttons';
import { buttonRegisterSales, buttonAddStock } from 'src/config/dashboard/dashboard';
import { inputTwoPart, inputThreePart, inputFourPart } from "src/config/add-stock";
import { useForm } from "react-hook-form";
import Inputs from 'src/components/Inputs';
import Scanner from 'src/components/Scanner';

const AddStock = () => {
  const { control, handleSubmit, register, setValue } = useForm();
  const [valueBarcode, setValueBarcode] = useState();

  return (
    <>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y divide-black">
          <div className="py-2 flex items-start  justify-between">
            <div className="">
              <label
                htmlFor="barcode"
                className="text-sm font-medium text-black"
              >
                Digite código de barra
              </label>
              <div className="flex">
                <input
                  type="number"
                  id="barcode"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-1 mr-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                  value={valueBarcode}
                />
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                  Buscar
                </button>
              </div>
            </div>
            <div className="w-[50%] align-end">
              <label
                htmlFor="barcode"
                className="text-sm font-medium text-black"
              >
                Digitalizar Código   
              </label>
              <Scanner setValueBarcode={setValueBarcode}/>
              {/* <button
                type="button"
                className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Ler
              </button> */}
            </div>
          </div>
          <div className="py-2 flex justify-between items-center">
            {inputTwoPart.map((data) => {
              return (
                <Inputs key={data.id} {...data} control={control} />
              )
            })}
          </div>
          <div className="py-2 flex justify-between items-center">
            <div className="grid grid-cols-3 md:grid-cols-2  divide-black">
              {inputThreePart.map((data) => {
                return (
                  <Inputs key={data.id} {...data} control={control} />
                )
              })}
            </div>
          </div>
          <div className="py-2 flex justify-between items-center">
            <div className="grid grid-cols-3 md:grid-cols-2  divide-black">
              {inputFourPart.map((data) => {
                return (
                  <Inputs key={data.id} {...data} control={control} />
                )
              })}
            </div>
          </div>
          <div className="py-2 flex justify-between items-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Salvar
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default AddStock;
