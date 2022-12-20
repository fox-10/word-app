import style from './Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footerName'>WORD-UP!</div>
            <nav className='footerNav'>
                <a>О приложении</a>
                <a>Посмотреть все карточки</a>
                <a>Посмотреть все темы</a>
            </nav>
        </div>
    );
}