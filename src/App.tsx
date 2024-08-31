import { motion } from 'framer-motion'
import Button from './components/button';
import './App.css'

function App() {

  return (
    <>
      <motion.nav className='w-full top-5 relative'
        animate={{
          y: [-100, 0, 2.5, 0],
          opacity: [0, 100],
        }}
      >
        <ul className='flex flex-row gap-10 text-3xl justify-center'>
          <li><a href="#accueil" className='text-[var(--accent)] font-bold'>Accueil</a></li>
          <li><a href="#services" className='hover:text-blue-200'>Nos services</a></li>
          <li><a href="#inscription" className='hover:text-blue-200'>S'inscrire</a></li>
        </ul>
      </motion.nav>

      <section id="accueil" className='w-full mt-[10rem]'>
        <div className='flex justify-center'>
          <div className='w-[522px] h-[233px] bg-[var(--accent)] rounded-[20rem] blur-3xl absolute'></div>
          <div className='flex flex-col text-center z-10 flex items-center'>
            <h1 className='text-8xl font-bold tracking-wide'>Météo Matin</h1>
            <h2 className='text-4xl w-[50rem]'>Recevez chaque matin une météo précise directement dans votre boîte mail.</h2>

            <div className="mt-10">
              <Button text="S'inscrire"/>
            </div>
          </div>
        </div>

        <motion.div className='absolute top-[14rem] left-[5rem]'
          animate={{
            scale: [0, 1, 1.01, 1],
            opacity: [0, 100],
          }}
          transition={{ duration: 1.5 }}
        >
          <img src="sun.png" alt="Sun" className='w-[10rem] h-[10rem] absolute'/>
          <div className='w-[10rem] h-[10rem] bg-yellow-500 rounded-[20rem] blur-3xl'></div>
        </motion.div>

        <motion.div className='absolute bottom-[14rem] right-[5rem]'
          animate={{
            scale: [0, 1, 1.01, 1],
            opacity: [0, 100],
          }}
          transition={{ duration: 1.5 }}
        >
          <img src="cloud.png" alt="Cloud" className='w-[10rem] absolute'/>
          <div className='w-[10rem] h-[10rem] bg-gray-500 rounded-[20rem] blur-3xl'></div>
        </motion.div>
      </section>

      <section id='services' className='w-full mt-[18rem]'>
        <h1 className='text-5xl font-bold ml-10 tracking-wide'>Nos services</h1>

        <motion.div className="w-5/6 m-auto mt-10 flex relative text-justify"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 2 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity:0 }
          }}
        >
          <h1 className="text-4xl">
            Vous offrir, {" "}
            <span>chaque jour</span>, une météo {" "}
            <span>fiable</span> et <span>personnalisée</span>.
            Vous saurez ainsi quels vêtements porter en toute sérénité, sans avoir à vous inquiéter des caprices du temps.
          </h1>
        </motion.div>

        <div className="flex flex-row gap-10 justify-center mt-20">
            <motion.div className="flex flex-col gap-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: 300, opacity:0 }
              }}
            >
              <div className='flex'>
                <div className="z-10 flex flex-col w-[28rem] h-[25rem] bg-gradient-to-tr from-blue-500 to-[var(--bg)] rounded-2xl justify-center items-center">
                  <img src="partlysunny.png" alt="Partiellement nuageux" className='w-1/2 mb-5' />
                  <h1 className='text-3xl font-bold text-center '>Partiellement nuageux</h1>
                  <p className='text-xl text-center w-[calc(100%-5rem)]'>Préparez-vous chaudement, aujourd’hui. Le maximum sera uniquement de <span>16°C</span>.</p>
                </div>
                <div className='w-[10rem] h-[10rem] absolute bg-yellow-500 rounded-[20rem] blur-3xl'></div>
              </div>
              <div className='flex'>
                <div className="z-10 flex flex-col w-[28rem] h-[25rem] bg-gradient-to-tr from-gray-600 to-blue-200 rounded-2xl justify-center items-center">
                  <img src="rain.png" alt="Pluie" className='w-1/2 mb-5' />
                  <h1 className='text-3xl font-bold text-center'>Pluie</h1>
                  <p className='text-xl text-center w-[calc(100%-5rem)]'>Sortez vos parapluies! Il est prévu <span>80%</span> de pluie aujourd’hui.</p>
                </div>
                <div className='w-[10rem] h-[10rem] ml-[20rem] absolute bg-blue-700 rounded-[20rem] blur-3xl'></div>
                <div className='w-[10rem] h-[10rem] mt-[15rem] absolute bg-sky-200 rounded-[20rem] blur-3xl'></div>
              </div>

            </motion.div>

            <motion.div className="flex flex-col gap-10 mt-[10rem]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -300, opacity:0 }
              }}
            >

              <div className='flex'>
                <div className="z-10 flex flex-col w-[28rem] h-[25rem] bg-gradient-to-tr from-violet-300 to-gray-500 rounded-2xl justify-center items-center">
                  <img src="cloud.png" alt="Nuageux" className='w-1/2 mb-5' />
                  <h1 className='text-3xl font-bold text-center'>Nuageux</h1>
                  <p className='text-xl text-center w-[calc(100%-5rem)]'>Les <span>nuages</span> peupleront le ciel du matin jusqu’au soir. Mais ne craignez rien, aucune pluie n’est attendue.</p>
                </div>
                <div className='w-[10rem] h-[10rem] absolute bg-violet-500 rounded-[20rem] blur-3xl mt-[17rem]'></div>
              </div>

              <div className="flex flex-col w-[28rem] h-[25rem] bg-[#ff7636] rounded-2xl justify-center items-center">
                <div className='mb-10'>
                  <img src="sun.png" alt="Sun" className='w-[10rem] h-[10rem] absolute'/>
                  <div className='w-[10rem] h-[10rem] bg-yellow-500 rounded-[20rem] blur-3xl'></div>
                </div>
                <h1 className='text-3xl font-bold text-center'>Soleil</h1>
                <p className='text-xl text-center w-[calc(100%-5rem)]'>Vous avez de la chance! Il fera beau, une température moyenne de <span>30°C</span> est annoncée.</p>
              </div>
            </motion.div>
        </div>

        <motion.div className="flex items-center justify-center text-center relative w-2/3 mt-20 m-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 2 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity:0 }
          }}
        >
          <h1 className="text-3xl">
            Avec Météo Matin, vous pouvez <span>personnaliser</span> vos textes comme vous le souhaitez. Rédigez vos propres messages en fonction de la météo et mettez en avant les <span>informations</span> qui comptent le plus pour vous.
            Notre objectif est de vous offrir un service entièrement personnalisable !
          </h1>
        </motion.div>
      </section>

      <section id="inscription" className='w-full mt-[10rem]'>
        <h1 className='text-5xl font-bold ml-10'>S'inscrire</h1>
        <h1 className="text-3xl ml-10 mt-5">Rejoignez notre newsletter et recevez votre météo quotidienne.</h1>

        <div className="grid grid-rows-3 grid-flow-col gap-8 justify-center items-center mt-10">
          <div className="flex flex-col">
            <h3 className='text-2xl text-[#c7ddfb]'>Email</h3>
            <input type="text" className='w-[25rem] rounded-lg bg-[#1e293b] h-10 text-2xl border-2 border-[#687c9b]' />
          </div>

          <div className="flex flex-col">
            <h3 className='text-2xl text-[#c7ddfb]'>Message customisé (partiellement nuageux)</h3>
            <input type="text" className='w-[25rem] rounded-lg bg-[#1e293b] h-10 text-2xl border-2 border-[#687c9b]' />
          </div>

          <div className="flex flex-col">
            <h3 className='text-2xl text-[#c7ddfb]'>Message customisé (pluie)</h3>
            <input type="text" className='w-[25rem] rounded-lg bg-[#1e293b] h-10 text-2xl border-2 border-[#687c9b]' />
          </div>

          <div className="flex flex-col">
            <h3 className='text-2xl text-[#c7ddfb]'>Message customisé (soleil)</h3>
            <input type="text" className='w-[25rem] rounded-lg bg-[#1e293b] h-10 text-2xl border-2 border-[#687c9b]' />
          </div>

          <div className="flex flex-col">
            <h3 className='text-2xl text-[#c7ddfb]'>Message customisé (nuageux)</h3>
            <input type="text" className='w-[25rem] rounded-lg bg-[#1e293b] h-10 text-2xl border-2 border-[#687c9b]' />
          </div>
        </div>

        <div className="flex absolute right-[19rem]">
          <Button text="S'inscrire"/>
        </div>

      </section>

      <footer className='w-full mt-[10rem] mb-3'>
        <div className='flex flex-row text-gray-400 text-2xl'>
          <h3 className='mr-auto ml-4'>© 2024 MétéoMatin.</h3>
          <h3 className='ml-auto mr-4'>designed and coded with ♥ by Dams</h3>
        </div>
      </footer>
    </>
  )
}

export default App
