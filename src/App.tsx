import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

function App(): JSX.Element {
  return(
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo Esports" />

      <h1 className="text-6xl text-white font-black mt-20"> 
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui. 
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">

        <GameBanner adsCount={4} bannerUrl={"/game-1.png"} title={"League of Legends"} />
        <GameBanner adsCount={2} bannerUrl={"/game-2.png"} title={"Dota 2"} />
        <GameBanner adsCount={5} bannerUrl={"/game-3.png"} title={"CS:GO"} />
        <GameBanner adsCount={3} bannerUrl={"/game-4.png"} title={"Apex Legends"} />
        <GameBanner adsCount={7} bannerUrl={"/game-5.png"} title={"Fortnite"} />
        <GameBanner adsCount={4} bannerUrl={"/game-6.png"} title={"Word of Warcraft"} />
      </div>

      <CreateAdBanner />
    </div>
  );
}

export default App;
