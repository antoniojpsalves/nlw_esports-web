interface GameBannerProps {
    bannerUrl: string;
    alt?: string;
    title: string;
    adsCount: number
}


export function GameBanner({ bannerUrl, alt, title, adsCount }: GameBannerProps) {
    return(
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={bannerUrl} alt={alt} />
          
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient position absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">{title}</strong>
            <span className="text-zinc-300 text-sm block mt-1">{adsCount} anúncio(s)</span>
          </div>
        </a>
    );
}