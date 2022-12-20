import style from './Header.css'


export default function Header() {
    return (
        <div className='header'>
            <div className='headerName'>WORD-UP!</div>
            <nav className='headerNav'>
                <a>Создать новую тему</a>
                <a>Все карточки</a>
                <a>Все темы</a>
            </nav>
        </div>
    );
}