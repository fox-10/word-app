import style from './WordPage.css'
import OneWord from '../OneWord/OneWord'

export default function WordList() {
    return (
        <div className='wordPage'>
            Я страница со всеми словами <br />
            Фильтр по: алфавиту все английские слова, по алфавиту все русские слова, по теме
            <div className='wordList'>
                <OneWord />
                <OneWord />
                <OneWord />
                <OneWord />
                <OneWord />
                <OneWord />
                <OneWord />
            </div>
        </div>
    )
}