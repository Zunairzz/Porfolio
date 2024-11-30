import "react-slideshow-image/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Testimonials.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Avatar, Box, Rating} from "@mui/material";
import {useState} from "react";
import {Card} from "reactstrap";
import doubleQuotationMark from "../assests/quote-right.png";
import zunair from "../assests/zuni.jpeg";


export const Testimonials = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 3
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };


    const items = [
        {
            id: 1,
            name: "Zunair Sarwar",
            caption: "We are seeking a highly motivated and detail-oriented Java Developer to join our dynamic software development team. The ideal candidate will be responsible for designing, implementing, and maintaining high-performance, scalable, and reliable applications using Java-based technologies.",
            src: zunair
        },
        {
            id: 2,
            name: "Zunair Sarwar",
            caption: "We are seeking a highly motivated and detail-oriented Java Developer to join our dynamic software development team. The ideal candidate will be responsible for designing, implementing, and maintaining high-performance, scalable, and reliable applications using Java-based technologies.",
            src: zunair
        },
        {
            id: 3,
            name: "Zunair Sarwar",
            caption: "We are seeking a highly motivated and detail-oriented Java Developer to join our dynamic software development team. The ideal candidate will be responsible for designing, implementing, and maintaining high-performance, scalable, and reliable applications using Java-based technologies.",
            src: zunair
        },
        {
            id: 4,
            name: "Zunair Sarwar",
            caption: "We are seeking a highly motivated and detail-oriented Java Developer to join our dynamic software development team. The ideal candidate will be responsible for designing, implementing, and maintaining high-performance, scalable, and reliable applications using Java-based technologies.",
            src: zunair
        }, {
            id: 5,
            name: "Zunair Sarwar",
            caption: "We are seeking a highly motivated and detail-oriented Java Developer to join our dynamic software development team. The ideal candidate will be responsible for designing, implementing, and maintaining high-performance, scalable, and reliable applications using Java-based technologies.",
            src: zunair
        }, {
            id: 6,
            name: "Zunair Sarwar",
            caption: "We are seeking a highly motivated and detail-oriented Java Developer to join our dynamic software development team. The ideal candidate will be responsible for designing, implementing, and maintaining high-performance, scalable, and reliable applications using Java-based technologies.",
            src: zunair
        }
    ];

    const [value, setValue] = useState(2);
    const slides = items.map((item) => {

        return (
            <Card className="testimonials-card">
                <div className="d-flex gap-2 head">
                    <Avatar sx={{width: 60, height: 60}} src={item.src}>H</Avatar>
                    <div>
                        <h3 className="testimonials-heading">{item.name}</h3>
                        <p className="testimonials-paragraph">Java Developer</p>
                    </div>

                    <div className="quote">
                        <img src={doubleQuotationMark} className="double-quotation-mark" alt="Imahe here"/>
                    </div>
                </div>

                <div>
                    <Box sx={{'& > legend': {mt: 2}}}>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                </div>
                {/* Description */}
                <p className="testimonials-caption">{item.caption}</p>
            </Card>
        )
    });


    return (
        <Carousel
            // showDots={true}
            draggable={false}
            // // swipeable={false}
            // ssr={true}
            infinite={true}
            autoPlaySpeed={500}
            // keyBoardControl={true}
            // customTransition="all .5"
            // transitionDuration={500}
            // containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            responsive={responsive}
            // customRightArrow={<CustomRightArrow/>}
            // customButtonGroup={<ButtonGroup/>}
            centerMode={false}
            focusOnSelect={true}
        >
            {slides}
        </Carousel>
    )
}