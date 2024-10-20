import {Card, CardBody, CardHeader} from "reactstrap";

const CardStyle = {
    backgroundColor: 'rgba(84,84,84,0.5)',
    border: '2px solid #b2b2b2',
    borderRadius: '2rem',
    margin: "10px 0px",
}

const CardTextStyle = {
    borderBottom: '2px solid #b2b2b2',
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    padding: "30px 0px 30px 20px",
}

const ParentLayer = {
    position: "abso"
}

const ChildLayer1 = {
    position: "absolute"
}

const ChildLayer2 = {
    position: "absolute"
}

const ChildLayer3 = {
    position: "absolute"
}

export function CustomServiceCard({heading, image}) {
    return (
        <Card style={CardStyle}>
            <CardHeader style={CardTextStyle}>
                {heading}
            </CardHeader>
            <CardBody>
                <div style={ParentLayer}>
                    <div style={ChildLayer1}/>
                    <div style={ChildLayer2}/>
                    <img
                        src={image}
                        alt="title here"
                        style={ChildLayer3}
                    />
                </div>
            </CardBody>
        </Card>
        // <div className="card-container">


        // </div>
    )
}