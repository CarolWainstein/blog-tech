import './SobreMim.css';
import PostModelo from '../../componentes/PostModelo';
import fotoCapa from '../../assets/sobre_mim_capa.png';
import fotoSobreMim from '../../assets/minha_foto.png';

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa = {fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className='subtitulo'>
                Olá, eu sou a Carolina!
            </h3>

            <img
                src={fotoSobreMim}
                alt='Foto de Carolina'
                className='fotoSobreMim'
            />

            <p className='paragrafo' style={{ textIndent: '40px' }}>
                Sou uma brasileira que atualmente mora em Brisbane. Embora minhas raízes acadêmicas estejam na Filosofia da Universidade Federal do Rio Grande do Sul, minha jornada atual envolve mergulhar no mundo dinâmico da programação e da tecnologia por meio de meus estudos na Alura.
            </p>

            <p className='paragrafo' style={{ textIndent: '40px' }}>
                Movida por uma paixão por codificação e resolução de problemas, estou buscando ativamente oportunidades para fazer uma mudança significativa na carreira. Meu compromisso com o aprendizado e o crescimento é evidente em meus projetos em andamento, que você pode explorar no meu <a className="link-github" href="https://github.com/CarolWainstein">GitHub</a>.
            </p>

            <p className='paragrafo' style={{ textIndent: '40px' }}>
                Desejo me conectar com outras pessoas e explorar novas habilidades que podem contribuir para projetos e colaborações inovadoras.
            </p>




        </PostModelo>
        
    )
}