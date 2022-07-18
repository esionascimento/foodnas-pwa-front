import { IComponentPropsInputs } from "src/interface/add-stock";
import { Controller } from 'react-hook-form';

const Inputs = (props: IComponentPropsInputs | any) => {
  return (
    <div className="flex flex-col justify-between self-stretch m-1	">
      <label
        htmlFor={props.id}
        className="text-sm font-medium text-black"
        >
        {props.text}
      </label>
      <Controller
        key={`${props.id}`}
        control={props.control}
        name={props.id}
        render={({ field, fieldState: { error } }) => {
          return (
            props.config.type === 'text' || props.config.type === 'number' ? (
              <input
                type={props.config.type}
                id={props.id}
                disabled={props.disabled}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            ) : (
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {props.option.map((data: any) => {
                  return (
                    <>
                      <option selected value={data.id}>{data.text}</option>
                    </>
                  )
                })}
              </select>
            )
          )
        }}
      />
    </div>
  )
}

export default Inputs;

// <div className="m-1">
//   <label
//     htmlFor={props.id}
//     className="text-sm font-medium text-black"
//     >
//     {props.text}
//   </label>
//   <input
//     type={props.config.type}
//     id={props.id}
//     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//     placeholder=""
//     required
//     />
// </div>