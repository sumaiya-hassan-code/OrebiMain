
const Container = ({children, className}) => {
  return (
    <>
    <div className={`m-auto max-w-330 ${className}`}>
        {children}
    </div>
    </>
  )
}

export default Container