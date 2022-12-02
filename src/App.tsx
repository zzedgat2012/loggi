import {useState} from 'react'
import logo from './assets/logo.svg'
import arrow from './assets/icons/arrow.svg'
import arrow_white from './assets/icons/arrow_white.svg'
import bg from './assets/black_woman_bg.webp'
import {Button, NavMenu} from './components'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <section>
                <div>
                    {/*TODO Make buttons a component*/}
                    <nav>
                        <div className="Menu">
                            <div className="MenuLogo">
                                <img src={logo} alt="Logo"/>
                            </div>
                            <div className="MenuItems">
                                <ul className="MenuPages">
                                    <li><a href="">Enviar pacotes <img src={arrow} alt=""/></a></li>
                                    <li><a href="">Rastrear pacotes <img src={arrow} alt=""/></a></li>
                                    <li><a href="">Fazer entregas <img src={arrow} alt=""/></a></li>
                                </ul>
                            </div>
                            <div className="MenuCTA">
                                <ul>
                                    <li><a href="">Central de Ajuda</a></li>
                                    <li>
                                        <button className="ButtonCTA">Entrar</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="Hero">
                    <h1>Vem com <br/> a Loggi!</h1>
                    <h2>Tecnologia que <br/> simplifica sua <br/> experiência de envios.</h2>
                    <div className="HeroCTA">
                        <Button icon={<img src={arrow_white} alt=""/>}>Quero ser Cliente</Button>
                        <Button icon={<img src={arrow_white} alt=""/>}>Quero rastrear um pacote</Button>
                    </div>
                </div>
                <img className="BgHero" src={bg} alt=""/>
            </section>
        </>
    )
}

export default App
