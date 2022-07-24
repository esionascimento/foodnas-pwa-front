import { IComponentPropsInputs } from "src/interface/add-stock";
import { Controller } from 'react-hook-form';

const Inputs = (props: IComponentPropsInputs | any) => {

  const className = `bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 ${props.disabled ? 'dark:bg-gray-700' : ''} dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`

  return (
    <>
      {props.visible ? (
        <div className="flex flex-col justify-between self-stretch m-1">
          <label
            htmlFor={props.id}
            className="text-sm font-medium text-black"
            >
            {props.text}
          </label>
          <Controller
            key={`${props.id}-${props.title}`}
            control={props.control}
            defaultValue={""}
            name={props.id}
            render={({ field, fieldState: { error } }) => {
              return (
                props.config.type === 'text' || props.config.type === 'number' ? (
                  <input
                    {...field}
                    type={props.config.type}
                    id={props.id}
                    disabled={props.disabled}
                    className={className}
                    placeholder=""
                    required
                  />
                ) : (
                  <select
                    {...field}
                    id="countries"
                    className={className}
                  >
                    {props.option.map((data: any, index: number) => {
                      return (
                        <option key={`${data.id}-${index}-inputs`} className='' value={data.id}>{data.text}</option>
                      )
                    })}
                  </select>
                )
              )
            }}
          />
        </div>
      ) : ( null )
      }
    </>
  )
}

export default Inputs;
