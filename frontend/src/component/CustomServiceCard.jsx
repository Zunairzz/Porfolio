import {Card, CardBody, CardHeader} from "reactstrap";

const CardStyle = {
    backgroundColor: 'rgba(84,84,84,0.5)',
    border: '2px solid #b2b2b2',
    borderRadius: '2rem',
}

const CardTextStyle = {
    borderBottom: '2px solid #b2b2b2',
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    padding: "30px 0px 30px 20px",
}

export function CustomServiceCard({heading, image}) {
    return (
        <Card style={CardStyle}>
            <CardHeader style={CardTextStyle}>
                {heading}
            </CardHeader>
            <CardBody>
                {/*<div className="layer">*/}
                {/*    <div className="layer1"/>*/}
                {/*    <div className="layer2"/>*/}
                <img
                    src={image}
                    alt="title here"
                    className="card-image"
                />
                {/*</div>*/}
            </CardBody>
        </Card>
        // <div className="card-container">


        // </div>
    )
}