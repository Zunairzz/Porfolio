import "../../css/HomePageMyService.css";

export function CustomServiceCard({index, heading, image}) {
    return (
        <div key={index} className="my-service-card">
            <div className="card-header">
                <h3>{heading}</h3>
            </div>
            <div className="card-body">
                <div className="card-image">
                    <img src={image} alt="Card Image"/>
                </div>
            </div>
        </div>
    )
}