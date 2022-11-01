interface ChildProps {
    color: string;
    onButtonClick: () => void;
    children: React.ReactNode;
}

const Child: React.FC<ChildProps> = ({ color, onButtonClick, children }) => {
  return (
      <>
    <div>{color}</div>
    <button onClick={onButtonClick}></button>
    {children}
    </>
  )
}

export default Child