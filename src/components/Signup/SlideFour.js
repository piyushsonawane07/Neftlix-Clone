import React,{useState} from 'react'
import SignupFooter from './SignupFooter'
import SignupHeader from './SignupHeader'
import './SlideFour.css'
import PlanTable from './PlanTable'

export default function SlideFour() {
    const [active, setActive] = useState('premium')
    return (
        <>
            <SignupHeader />
            <div className="slideFour">
                <div className="text-start slidefour">
                    <p className="form-text ps-5 pe-5 mt-1 text-dark p">STEP <span className="fw-bold"> 2 </span>OF <span className="fw-bold"> 3 </span></p>
                    <p className="fs-4 fw-bold text-dark ps-5 pe-5 text-start p">Choose the plan that’s right for you</p>
                    <div className="text-start p">
                        <p className="ms-5 me-5 pe-5 text-start p"><i class="bi bi-check2 text-danger fa-2x"></i><span className="ms-2">Watch all you want. Ad-free.</span></p>
                        <p className="ms-5 me-5 pe-5 text-start p"><i class="bi bi-check2 text-danger fa-2x"></i><span className="ms-2">Recommendations just for you.</span></p>
                        <p className="ms-5 me-5 pe-5 text-start p"><i class="bi bi-check2 text-danger fa-2x"></i><span className="ms-2">Change or cancel your plan anytime.</span></p>
                    </div>
                    <PlanTable active={active} setActive={setActive}/>
                </div>
            </div>
            <SignupFooter />
        </>
    )
}
