import React from 'react';
import Arrow from '../assets/arrow2.png';

const UserSection = () => {
    return (
        <section className='sectionOne'>
            <div className='top-userSection'>
                <span>FOR USERS</span>
                <span>&#47;&#160;&#160;&#160;FOR USERS</span>
                <span>&#47;&#160;&#160;&#160;FOR USERS</span>
                <span>&#47;&#160;&#160;&#160;FOR USERS</span>
            </div>
            <div className="info-userSection">
                <h2>10 FUNDAMENTALS OF<br />MOTHER MARY<img src={Arrow} alt="Starts Image" className='arrow-section1' /></h2>
                <p>Which contributed to create an image in balance and tthat touches the feminine esence <br />to anyone who wantss to touch it</p>
                <div className='usersWrapper'>
                    <section>
                        <span>01.</span>
                        <p>MANAGEMENT</p>
                    </section>
                    <section>
                        <span>01.</span>
                        <p>MANAGEMENT</p>
                    </section>
                    <section>
                        <span>01.</span>
                        <p>MANAGEMENT</p>
                    </section>
                    <section>
                        <span>01.</span>
                        <p>MANAGEMENT</p>
                    </section>
                    <section>
                        <span>01.</span>
                        <p>MANAGEMENT</p>
                    </section>
                    <section>
                        <span>01.</span>
                        <p>MANAGEMENT</p>
                    </section>
                    <section>
                        <span>01.</span>
                        <p>MANAGEMENT</p>
                    </section>
                    <section>
                        <span>01.</span>
                        <p>MANAGEMENT</p>
                    </section>
                    <section>
                        <span>01.</span>
                        <p>MANAGEMENT</p>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default UserSection