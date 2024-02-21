import "./BotaoPrincipal.css";

export default function BotaoPrincipal({children}) {
    return (
        <button className='botao'>
            {children}
        </button>
    )
}