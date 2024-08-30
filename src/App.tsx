import './App.css'

function App() {

  return (
    <>
      <nav className='w-full top-5 relative'>
        <ul className='flex flex-row gap-10 text-3xl justify-center'>
          <li><a href="#accueil" className='text-[var(--accent)] font-bold'>Accueil</a></li>
          <li><a href="#services">Nos services</a></li>
          <li><a href="#inscription">S'inscrire</a></li>
        </ul>
      </nav>

      <section id="accueil" className='w-full mt-[10rem]'>
        <div className='flex justify-center'>
          <div className='w-[722px] h-[433px] bg-[var(--secondary)] rounded-[20rem] blur-3xl absolute'></div>

          <div className='flex flex-col text-center z-10 flex items-center'>
            <h1 className='text-7xl font-bold text-[var(--accent)] tracking-wide'>Météo Matin</h1>
            <h2 className='text-4xl w-[50rem]'>Recevez chaque matin une météo précise directement dans votre boîte mail.</h2>
            <button className='bg-[var(--bg)] w-fit mt-[5rem] py-2 px-7 rounded-2xl border-2 border-[var(--accent)]'><a href="#inscription" className='text-3xl font-bold text-[var(--accent)]'>S'inscrire</a></button>
          </div>
        </div>
      </section>

      <section id='services' className='w-full mt-[15rem]'>
        <h1 className='text-5xl font-bold ml-10'>Nos services</h1>

        <div className="w-5/6 m-auto mt-10 flex relative text-justify">
          <h1 className="text-4xl">
            Vous offrir, {" "}
            <span>chaque jour</span>, une météo {" "}
            <span>fiable</span> et <span>personnalisée</span>.
            Vous saurez ainsi quels vêtements porter en toute sérénité, sans avoir à vous inquiéter des caprices du temps.
          </h1>
        </div>

        <div className="flex flex-row gap-10 justify-center mt-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col w-[28rem] h-[25rem] bg-[#D9D9D9] rounded-2xl border-2 border-[#414A58] justify-center items-center">
              <img src="partlysunny.png" alt="Partiellement nuageux" className='w-1/2 mb-5' />
              <h1 className='text-[#414A58] text-3xl font-bold text-center '>Partiellement nuageux</h1>
              <p className='text-xl text-[#414A58] text-center w-[calc(100%-5rem)]'>Préparez-vous chaudement, aujourd’hui. Le maximum sera uniquement de <span>16°C</span>.</p>
            </div>

            <div className="flex flex-col w-[28rem] h-[25rem] bg-[#D9D9D9] rounded-2xl border-2 border-[#414A58]  justify-center items-center">
              <img src="sun.png" alt="Soleil" className='w-1/2 mb-5' />
              <h1 className='text-[#414A58] text-3xl font-bold text-center'>Soleil</h1>
              <p className='text-xl text-[#414A58] text-center w-[calc(100%-5rem)]'>Vous avez de la chance! Il fera beau, une température moyenne de <span>30°C</span> est annoncée.</p>
            </div>
          </div>

          <div className="flex flex-col gap-10 mt-[10rem]">
            <div className="flex flex-col w-[28rem] h-[25rem] bg-[#D9D9D9] rounded-2xl border-2 border-[#414A58] justify-center items-center">
              <img src="rain.png" alt="Pluie" className='w-1/2 mb-5' />
              <h1 className='text-[#414A58] text-3xl font-bold text-center'>Pluie</h1>
              <p className='text-xl text-[#414A58] text-center w-[calc(100%-5rem)]'>Sortez vos parapluies! Il est prévu <span>80%</span> de pluie aujourd’hui.</p>
            </div>

            <div className="flex flex-col w-[28rem] h-[25rem] bg-[#D9D9D9] rounded-2xl border-2 border-[#414A58] justify-center items-center">
              <img src="cloud.png" alt="Nuageux" className='w-1/2 mb-5' />
              <h1 className='text-[#414A58] text-3xl font-bold text-center'>Nuageux</h1>
              <p className='text-xl text-[#414A58] text-center w-[calc(100%-5rem)]'>Les <span>nuages</span> peupleront le ciel du matin jusqu’au soir. Mais ne craignez rien, aucune pluie n’est attendue.</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-center relative w-2/3 mt-20 m-auto">
          <h1 className="text-3xl">
            Avec Météo Matin, vous pouvez <span>personnaliser</span> vos textes comme vous le souhaitez. Rédigez vos propres messages en fonction de la météo et mettez en avant les <span>informations</span> qui comptent le plus pour vous.
            Notre objectif est de vous offrir un service entièrement personnalisable !
          </h1>
        </div>
      </section>

      <section id="inscription" className='w-full mt-[10rem]'>
        <h1 className='text-5xl font-bold ml-10'>S'inscrire</h1>
        <h1 className="text-4xl ml-10 mt-5">Rejoignez notre newsletter et recevez votre météo quotidienne.</h1>

        <div className="grid grid-rows-3 grid-flow-col gap-8 flex justify-center items-center mt-10">
          <div className="flex flex-col">
            <h3 className='text-2xl text-[#414A58]'>Email</h3>
            <input type="text" className='w-[25rem] rounded-lg bg-[var(--secondary)] h-10 text-2xl' />
          </div>

          <div className="flex flex-col">
            <h3 className='text-2xl text-[#414A58]'>Message customisé (partiellement nuageux)</h3>
            <input type="text" className='w-[25rem] rounded-lg bg-[var(--secondary)] h-10 text-2xl' />
          </div>

          <div className="flex flex-col">
            <h3 className='text-2xl text-[#414A58]'>Message customisé (pluie)</h3>
            <input type="text" className='w-[25rem] rounded-lg bg-[var(--secondary)] h-10 text-2xl' />
          </div>

          <div className="flex flex-col">
            <h3 className='text-2xl text-[#414A58]'>Message customisé (soleil)</h3>
            <input type="text" className='w-[25rem] rounded-lg bg-[var(--secondary)] h-10 text-2xl' />
          </div>

          <div className="flex flex-col">
            <h3 className='text-2xl text-[#414A58]'>Message customisé (nuageux)</h3>
            <input type="text" className='w-[25rem] rounded-lg bg-[var(--secondary)] h-10 text-2xl' />
          </div>
          <button className='bg-[var(--secondary)] py-2 px-7 rounded-md border-2 border-[var(--accent)] text-3xl'>S'inscrire</button>
        </div>

      </section>
    </>
  )
}

export default App
