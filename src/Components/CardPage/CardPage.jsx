import style from './CardPage.css'

export default function CardPage(props) {
    let { englishName,
        transcription,
        russianName,
        tag } = props;
    return (
        <div className='cardPage'>
            Я страница с карточкой слова
            <div className='cardInfo'>
                Английское слово:
                <div>{englishName}</div>
                Транскрипция:
                <div>{transcription}</div>
                Русский перевод:
                <div>{russianName}</div>
                Тег:
                <div>{tag}</div>
            </div>
        </div>

    )
}