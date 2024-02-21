import './PostModelo.css';

export default function PostModelo({fotoCapa, titulo, children}) {
    return (
        <article className='postModeloContainer'>
            <div 
                className='fotoCapa'
                style={{backgroundImage: `url(${fotoCapa})`}}
            ></div>

            <h2 className='titulo_p'>
                {titulo}
            </h2>

            <div className='postConteudoContainer'>
                {children}
            </div>
        </article>
    )
}