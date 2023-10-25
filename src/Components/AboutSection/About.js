import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-section">
            <div className="row inner-div-of-about-section" style={{display:'flex',alignItems:'middle',justifyContent:'center'}}>
                <div className="col-lg-4" >
                    <img src="./Image/logo.png" className="about-image" alt=""/>
                </div>
                <div className="col-lg-8">
                    <h1 className="text-center display-4 mb-2 font-weight-bold text-dark">About BIKE </h1>
                    <p className="about-desc text-justify">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias corporis, quasi repellat deleniti quod commodi id natus libero odit perferendis laudantium recusandae iste aut sunt accusantium itaque esse iure cumque! Inventore veniam commodi architecto, eaque, quisquam in accusantium culpa eligendi sit consequuntur animi suscipit eveniet. Earum voluptas nulla exercitationem quia, veniam consequatur ex qui maiores incidunt eum quibusdam. Maxime reprehenderit veniam obcaecati numquam ipsum voluptatem quas, cumque beatae explicabo. Pariatur fugit voluptas repudiandae reiciendis quaerat blanditiis amet aperiam, fuga fugiat libero perspiciatis numquam minima ut, quia, excepturi minus ad qui delectus dolorum. Minima consectetur, officia laudantium atque dignissimos itaque error.
                    </p>
                    <q className='about-desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat iusto iste molestiae quas enim molestias quod placeat fuga non!
                    </q>
                </div>
            </div>
        </div>
    );
};

export default About;