const Card = (props) => {
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <h2>{props.name}</h2>
        <p>{props.age}</p>
        <button>View</button>
    </div>
  )
}

export default Card