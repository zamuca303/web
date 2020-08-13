import React from 'react';

import './styles.css';

import HenJul from '../../assets/images/henejul.jpg';
import LogoIcon from '../../assets/icons/favicon.png';
import Star from '../../assets/icons/estrelas.svg';

function EventList() {
    return(
        <article className="event-list">
            <header className="header-event-list">
                <img src={HenJul} className="hej" alt="Henrique e Juliano" />
                <div>
                    <strong>Henrique & Juliano</strong>
                    <span>Sertanejo Universitário</span>
                </div>
                <img src={Star} className="estrela" alt="Estrela" />
            </header>
            <p className="frase">
                Lorem ipsum etiam tempus morbi rhoncus viverra curae tristique, eu ad,
                platea placerat aenean lectus eu ante, gravida enim elementum vehicula
                habitasse dapibus posuere. curabitur curae bibendum habitasse sagittis
                potenti iaculis eu, imperdiet et est quisque curabitur primis purus
                suspendisse, quisque sociosqu maecenas per mollis quisque.
            </p>
            <footer className="footer-event-list">
                <div>
                    <p>
                        Data:
                                <strong> 29/08/2020</strong>
                    </p>
                    <p>
                        Local:
                                <strong> Mineirão</strong>
                    </p>
                    <p>
                        Valor:
                                <strong> R$ 1000,00</strong>
                    </p>
                </div>
                <button>
                    <img src={LogoIcon} alt="icon logo" />
                            VAMOW
                        </button>
            </footer>
        </article>
    )
}

export default EventList;