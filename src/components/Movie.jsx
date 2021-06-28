function Movie (props) {
const {
  Title: title,
  Year: year,
  imdbID: id,
  Type: tipe,
  Poster: poster,
} = props;

return  <div id={id} className="card movie">
          <div className="card-image waves-effect waves-block waves-light">
            {
              poster === 'N/A' ?
                <img className="activator" src={`https://via.placeholder.com/309x457?text=${title}`} alt="alt" />
                :
                <img className="activator" src={poster} alt="alt" />
            }
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}</span>
            <p>{year}<span className="right">{tipe}</span></p>
          </div>
        </div>
}

export {Movie}