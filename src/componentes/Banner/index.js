import "./Banner.css";
import circuloColorido from '../../assets/circulo_colorido.png';
import minhaFoto from '../../assets/Carol.png';

export default function Banner() {
    return(
        <div className="banner">
            <div className="apresentacao">
                <h1 className="titulo_banner">
                    Olá, Mundo!
                </h1>

                <p className='paragrafo'>
                Brasileira em Brisbane, mesclando filosofia com programação.
                </p>
                <p className="paragrafo">
                    Bem vindos ao meu espaço pessoal!
                </p>
            </div>

            <div className="imagens">
                <img
                    className="circuloColorido"
                    src={circuloColorido}
                    aria-hidden={true} // para acessibilidade, porque esse elemento não faz parte do conteudo
                />
                
                <img 
                    className="minhaFoto"
                    src={minhaFoto}
                    alt="Minha foto"
                />
            </div>
        </div>
    )
}