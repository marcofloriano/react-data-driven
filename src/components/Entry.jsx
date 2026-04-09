export default function Entry(props) {
    
    return (
        <article>
            <div className="image">
                <img src={props.img.src} alt={props.img.alt} />
            </div>
            <div className="body">
                <div className="location">
                    <div className="marker">
                        <img src="/src/assets/marker.svg" alt="Marker" />
                    </div>
                    <div className="city">{props.city}</div>
                    <div className="map">
                        <a href={props.maplink}>
                            View on Google Maps
                        </a>
                    </div>
                </div>
                <div className="title">
                    <h2>{props.title}</h2>
                </div>
                <div className="dates">
                    <b>{props.dates}</b>
                </div>
                <div className="text">
                    <div>
                        {props.text}
                    </div>
                </div>
            </div>
        </article>
    )
}