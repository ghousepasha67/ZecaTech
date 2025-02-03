function CustomButton(props) {
    return(
      <div>
        <button className={props.className}>{props.name}</button>
      </div>
        
    )
}

export default CustomButton;