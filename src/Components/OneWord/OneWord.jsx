import style from './OneWord.css'

export default function OneWord() {
    return (
        <form className='oneWord'>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>Сохранить</button>
            <button>Отмена</button>
            <button>Редактировать</button>
            <button>Удалить</button>
        </form>
    )
}