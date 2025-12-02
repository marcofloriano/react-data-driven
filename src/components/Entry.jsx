export default function Entry() {
    return (
        <article>
            <div className="image">
                <img src="/src/assets/mount_fuji.svg" alt="" />
            </div>
            <div className="body">
                <div className="location">
                    <div className="marker">
                        <img src="/src/assets/marker.svg" alt="Marker" />
                    </div>
                    <div className="city">Japan</div>
                    <div className="map">
                        <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">
                            View on Google Maps
                        </a>
                    </div>
                </div>
                <div className="title">
                    <h2>Mount Fuji</h2>
                </div>
                <div className="dates">
                    
                        <b>12 Jan, 2021 - 24 Jan, 2021</b>
                    
                </div>
                <div className="text">
                    <div>
                        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                    </div>
                </div>
            </div>
        </article>
    )
}