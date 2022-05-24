import '../styles.scss'


export default function Gif (src, key) {
console.log (src)
    return (
        <div className="gif-container">
            <img className="gif-file" alt="gif" src={src.src} key={key}></img>
        </div>
    )
}