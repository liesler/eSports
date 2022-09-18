import { useEffect, useState } from "react";
import { GameController, MagnifyingGlassPlus } from "phosphor-react"
import "./styles/main.css"
import logiImg from "./assests/logo.svg";
import { GameBanner } from "./components/GameBanner";
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdBanner } from "./components/CreateAdBanner";
import { Input } from "./components/Form/Input";
import { CreateAdModal } from "./components/CreateAdModal";
import axios from "axios";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => {
        setGames(response.data);
      });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logiImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20 ">
        Seu <span className="text-transparent bg-gradient bg-clip-text ">duo</span> está aqui.
      </h1>

      {/* carrocel de jogos */}
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
            title={game.title}
          />
        ))}
      </div>



      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
