
const Container = ({children, className}) => {
  return (
    <>
    <div className={`m-auto max-w-[1620px] ${className}`}>
        {children}
    </div>
    </>
  )
}

export default Container