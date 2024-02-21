import { Link, useLocation } from 'react-router-dom'
import './MenuLink.css'

export default function MenuLink({children, to}) {
    const localizacao = useLocation();

    return (
        <Link className={
            `link 
            ${localizacao.pathname === to ? 
            'linkDestacado' : ''}`} to={to}>
            {children}
        </Link>
    )
}