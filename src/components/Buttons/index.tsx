const ButtonComponent = ({text}: any) => {
  return (
    <button
      type="button"
      className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
    >
      {text}
    </button>
  )
}

export default ButtonComponent;
