import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/logo.svg'
import ideaImageUrl from '../../public/vite.svg'
import thoughtImageUrl from '../../public/vite.svg'

const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image:{
            source:'bugImageUrl',
            alt: 'Imagem de um inseto'
        }
    },
    IDEA:{
        title:'Ideia',
        image:{
            source:'ideaImageUrl',
            alt: 'Imagem de uma lampada'
        }
    },
    OTHER:{
        title:'Outro',
        image:{
            source:'thoughtImageUrl',
            alt: 'Imagem de um pensamento'
        }
    },
}

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
          <span className="text-xl leading-6">Deixe seu feedback</span>

          {/*<CloseButton />*/}
      </header>
      <div className="flex py-8 gap-2 w-full">
         { Object.entries(feedbackTypes).map(([key, value])=>{
             return(
                 <button> 
                     <img src={value.image.source} alt={value.image.alt} />
                     <span>{value.title}</span>
                 </button>
             );
         })}
      </div>
      <p>hello World</p>
      <footer className="text-xs text-neutral-400">
          Feito com amor por <a className="underline underline-oofset-2" href="https://www.linkedin.com/in/samuel-fonseca-0289a6121/">Sam Fonseca</a>!
      </footer>
    </div>
  );
}
