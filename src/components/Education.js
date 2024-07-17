// import './Education.css';
import './About.css'
import './Timeline.css'
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";

export default function Education() {
    const style = {
        lineHeight: '2rem'
    }
    return (
        <div className='main-timeline'>


            <div className='timeline right'>
                <MDBCard>
                    <MDBCardBody className='p-4'>
                        <h5 style={style}>School </h5>
                        <span >2009 - 2018</span>

                        <p className='mb-0'>I started school in 2009 and finished in 2019 with a degree of 'A'
                            from Goharshad Bigom High School. </p>

                    </MDBCardBody>
                </MDBCard>
            </div>
            <div className='timeline right'>
                <MDBCard>
                    <MDBCardBody className='p-4'>
                        <h5 style={style}>English Language</h5>
                        <span >2021 - 2022</span>
                        <p className='mb-0'>I started learning English in 2021 in Zarifi Academy and I
                            am currently studying English.</p>

                    </MDBCardBody>
                </MDBCard>
            </div>
            <div className='timeline right'>
                <MDBCard>

                    <MDBCardBody className='p-4'>
                        <h5 style={style}>Herat University</h5>
                        <span >2022-2023</span>
                        <p className='mb-0'>I could pass the kankoor exam in 2021 and now I'm
                            one of the students of Computer Science faculty, Software
                            Engineering department.</p>

                    </MDBCardBody>
                </MDBCard>
            </div>

        </div>


    )
}