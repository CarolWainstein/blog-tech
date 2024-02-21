import './NaoEncontrada.css';
import erro404 from '../../assets/erro_404.png'
import BotaoPrincipal from '../../componentes/BotaoPrincipal';
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada(){
    const navegar = useNavigate();

    return (
        <>
            <div className='conteudoContainer'>
                <span className='texto404'>404</span>

                <h1 className='titulo_404'>
                    Ops! Página não encontrada.
                </h1>

                <p className='paragrafo_404'>
                    Tem certeza de que era isso que você estava procurando?
                </p>

                <div 
                    className='botaoContainer'
                    onClick={() => navegar(-1)} // -1 volta uma pagina, se fosse para voltar para o inicio seria "/""
                >
                    <BotaoPrincipal>Voltar</BotaoPrincipal>
                </div>

                <img 
                    className='imagemCachorro'
                    src={erro404}
                    alt="Foto de um cachorro"
                />
            </div>
            <div className='espacoEmBranco'></div>
        </>
    )
}