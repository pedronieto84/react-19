import { Link } from 'react-router-dom'

export default function CardDetailComponent(props) {

  return (


    < >
      <div className="jumbotron text-center">
        <h1 className="display-4">{props.title}</h1>
        <hr className="my-4" />

        <ul className="list-group list-group-flush">
          {
            props.info.map((each, index) => {
              return (
                <div key={index.toString()}>
                  <li className="list-group-item"> {each}</li>
                </div>
              )
            })
          }
        </ul>

        <ul>
          {
            props.tags.map((each, index) => {
              return (
                <span className="p-5" key={index.toString()}>
                  <span className="badge badge-pill badge-info"> {each}</span>
                </span>
              )
            })
          }
        </ul>
        <img src={`/assets/${props.id}.png`} />
        <br></br>
        <p className="lead mt-3" style={{

          display: 'flex', justifyContent: 'center', gap: '16px'
        }}>
          <Link className="btn btn-primary" to={`/detail/${(props.id - 1) < 1 ? 1 : props.id - 1}`}>Atrás</Link>
          <Link className="btn btn-primary" to={'/'}>Home</Link>
          <Link className="btn btn-primary" to={`/detail/${(props.id + 1) > 61 ? 61 : props.id + 1}`}>Siguiente</Link>
        </p>
      </div>
    </>
  )
}