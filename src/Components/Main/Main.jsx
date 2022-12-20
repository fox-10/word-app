import style from './Main.css'
import CardList from '../CardList/CardList';


export default function Main() {
    return (
        <div className='main'>
            <div className='h3'>Это приложение поможет тебе выучить английские слова!</div>
            <span className='mainSubTitle'>Проверь свои знания  или добавь новое слово:</span>
            <div className='main-cards'>
                <CardList tag={'животные'} />
                <CardList tag={'овощи'} />
                <CardList tag={'насекомые'} />
                <CardList tag={'еда'} />
            </div>
            <button className='mainButton'>Добавить новую тему</button>
        </div>
    );
}