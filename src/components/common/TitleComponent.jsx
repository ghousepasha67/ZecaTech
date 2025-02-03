function TitleComponent(props) {
    return(
        <div>
          <h5 className="about text-3xl font-bold about titleCss mb-4 mt-4 text-center">{props.data.title}</h5>          
        </div>
    )
}

export default TitleComponent;