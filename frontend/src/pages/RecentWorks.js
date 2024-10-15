import React from 'react';




const RecentWorks =()=>{
    return(
        <section className="recent-works">
            <h2>My Recent Works</h2>
            <div className="works-tabs">
                <button>All</button>
                <button>UX/UI</button>
                <button>Branding</button>
                <button>Apps</button>
            </div>
            <div className="works-gallery">
                <div className="work-item">
                    <img src="work-image1.jpg" alt="Work 1" />
                    <h4>Grow Your Business</h4>
                </div>
                <div className="work-item">
                    <img src="work-image2.jpg" alt="Work 2" />
                    <h4>Branding Design</h4>
                </div>
            </div>
        </section>
    )
}
export default RecentWorks;