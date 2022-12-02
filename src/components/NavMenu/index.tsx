import * as React from 'react';
import logo from "../../assets/logo.svg";
import arrow from "../../assets/icons/arrow.svg";
import {Button} from "../Button";

export function NavMenu() {
    return (
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
                            <Button>Entrar</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}