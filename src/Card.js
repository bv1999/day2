
function Card(props){
   return(
        <div className="test1">
            <div className="test2">
                <img src={props.image} className="sample_image"/>
            </div>
            <div className="test3">
            <h2>{props.Title}</h2>
            </div>
            <div className="test4">
            <h3>{props.Sub}</h3>
            </div>
            <div className="test5">
            <h3>{props.Desc}</h3>
            </div>
            <div className="test6">
                <button className="test7" >Click me</button>
            </div>
        </div>

    )
    



}
export default Card;