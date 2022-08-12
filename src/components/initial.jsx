

interface ButtonProps {
    name?: string;
  }
  
  function Button(props: ButtonProps){
    return<button className="bg-gray-300 px-9 h-11 rounded hover:bg-gray-500 transition-colors">{props.name ?? 'Default'}</button>
  } 
  
  export function Initial() {
    return (
      
      <div className="flex gap-5 bold h-screen justify-center items-center text-green-900">
        <Button name="Portifolio" />
        <Button name="Sobre Mim" />
        <Button name="Contato" />
        <Button />
      </div>
    )
  }
  
  export default Initial;
  