function Card(props){
    return (
        <div className="px-10 py-5 border rounded-md text-center flex-grow" style={{backgroundColor:props.color}}>
            <h1 className="font-medium text-2xl">{props.title}</h1>
            <h1>{props.subTitle}</h1>
        </div>
    )
}

export default Card