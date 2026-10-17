
const Button = ({className,children}) => {
  return (
    <button className={`text-white text-[14px] font-bold bg-[#262626] px-8 py-3 ${className}`}>
        {children}
    </button>
  )
}

export default Button