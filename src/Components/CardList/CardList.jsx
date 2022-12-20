import style from './CardList.css'

export default function Card(props) {
    return (
        <div>
            <div className='cardList'>
                {props.tag}
                <button className='cardListButton'>Добавить  новое слово</button>
            </div>
        </div>


    );
}