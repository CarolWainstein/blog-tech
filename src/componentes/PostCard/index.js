import { Link } from 'react-router-dom';
import './PostCard.css';
import BotaoPrincipal from '../BotaoPrincipal';

export default function PostCard({post}) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className='post'>
                <img
                    className='capa'
                    src={`../../posts/${post.id}/capa.png`}
                    alt="Capa do post"
                />

                <h2 className='titulo_post'>{post.titulo}</h2>

                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )
}