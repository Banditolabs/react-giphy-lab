import meowCode from "../meow_code.gif"

export default function Button (props) {
    return (
        <div onClick={props.onClick}className="button-module">
            <h3 className="heading-newGif">New Gif</h3>
            <img className="gif-img" alt="meow code" src={meowCode}></img>
            
        </div>

    )
}