import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";

function App() {
  // Estados para armazenar a posição atual do botão "Não"
  const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' });

  // Função para gerar uma posição aleatória dentro dos limites da tela
  const handleMouseEnter = () => {
    // Obter as dimensões da tela e do botão "Não"
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = 80; // Largura do botão "Não"
    const buttonHeight = 40; // Altura do botão "Não"

    // Definir os limites para as coordenadas top e left
    const maxLeft = screenWidth - buttonWidth;
    const maxTop = screenHeight - buttonHeight;

    // Calcular a nova posição aleatória para o botão "Não" dentro dos limites da tela
    const newLeft = Math.random() * maxLeft;
    const newTop = Math.random() * maxTop;

    // Atualizar a posição do botão "Não"
    setButtonPosition({ top: `${newTop}px`, left: `${newLeft}px` });
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#0e0e1b] text-white">
      <header className="text-2xl font-thin my-10 text-center p-10">
        Ooii sua linda, aceita ver um filme comigo???
      </header>

      <div className="flex justify-center gap-x-10 items-center relative">
        {/* Botão "Sim" dentro do Dialog */}
        <Dialog>
          <DialogTrigger className="mr-24">
            <Button>Sim</Button>
          </DialogTrigger>
          <DialogContent className="bg-transparent backdrop-blur-sm text-white">
            <DialogHeader>
              <DialogTitle>Parabéns</DialogTitle>
              <DialogDescription>
                Você ganhou um voucher!
                <img src="/voucher.png" alt="" className="p-10" />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Botão "Não" com função de mover ao hover */}
        <Button
          style={{ position: 'absolute', top: buttonPosition.top, left: buttonPosition.left, transition: 'all 0.3s ease-in-out' }}
          onMouseEnter={handleMouseEnter}
          onClick={handleMouseEnter}
        >
          Não
        </Button>
      </div>
    </div>
  );
}




export default App
