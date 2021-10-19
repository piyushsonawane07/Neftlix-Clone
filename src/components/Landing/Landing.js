import React from 'react'
import homebg from '../../images/home-bg.jpg'
import EmailInput from '../Head/EmailInput';
import SectionThree from '../Sections/SectionThree';
import SectionTwo from '../Sections/SectionTwo';
import Header from '../Head/Header';
import './Landing.css';
import Text from '../Head/Text';
import SectionFour from '../Sections/SectionFour';
import SectionFive from '../Sections/SectionFive';
import SectionSix from '../Sections/SectionSix';
import SectionSeven from '../Sections/SectionSeven';


export default function Home() {

    return (
        <>
            <div className="first-section" style={{
                background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75)),url(${homebg}) top left / cover no-repeat`,
                marginRight: ""
            }}>
                <Header />
                <Text />
                <EmailInput />

            </div>

            <div className="second-section">
                <SectionTwo />
            </div>

            <div className="third-section">
                <SectionThree />
            </div>

            <div className="fourth-section">
                <SectionFour />
            </div>

            <div className="fifth-section">
                <SectionFive />
            </div>

            <div className="sixth-section">
                <SectionSix />
            </div>

            <div className="seven-section">
                <SectionSeven />
            </div>


        </>
    )
}
