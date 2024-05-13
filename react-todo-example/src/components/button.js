function Button(props){

    return(
        <button type="button" className="btn toggle-btn" aria-pressed="true">
        <span className="visually-hidden">Show </span>
        <span>{props.text}</span>
        <span className="visually-hidden"> tasks</span>
      </button>
    )
}

export default Button