import React from 'react'
import { Link } from 'react-router-dom';
import './PlanTable.css';


const Plantable = (props) => {
    const { active, setActive } = props

    const data = [
        {
            text: 'Monthly Price',
            options: [
                {
                    value:'mobile',
                    text:'Rs.199'
                },
                {
                    value: 'basic',
                    text: 'Rs.499'
                },
                {
                    value: 'standard',
                    text: 'Rs.499'
                },
                {
                    value: 'premium',
                    text: 'Rs.799'
                }
            ]
        },
        {
            text: 'Video Quality',
            options: [
                {
                    value:'mobile',
                    text:'Good'
                },
                {
                    value: 'basic',
                    text: 'Good'
                },
                {
                    value: 'standard',
                    text: 'Better'
                },
                {
                    value: 'premium',
                    text: 'Best'
                }
            ]
        },
        {
            text: 'Resolution',
            options: [
                {
                    value:'mobile',
                    text: '480p'
                },
                {
                    value: 'basic',
                    text: '480p'
                },
                {
                    value: 'standard',
                    text: '1080p'
                },
                {
                    value: 'premium',
                    text: '4K + HDR'
                }
            ]
        },
        {
            text: 'Watch on your TV, computer, mobile phone and tablet',
            options: [
                {
                    value: 'mobile',
                    text: 'bi bi-check2',
                    icon: true 
                },
                {
                    value: 'basic',
                    text: 'bi bi-check2',
                    icon: true
                },
                {
                    value: 'standard',
                    text: 'bi bi-check2',
                    icon: true
                },
                {
                    value: 'premium',
                    text: 'bi bi-check2',
                    icon: true
                }
            ]
        },

    ]
    const datarow = data.map(el => {
        return (
            <div className={"tableitem "}>
                <span>{el.text}</span>
                <div className={"tableoptions flex"}>
                    {el.options.map(option => {
                        if (option.icon) {
                            return (
                                <span className={option.value === active ? 'activeitem' : ''}><i className={option.text}></i></span>
                            )
                        }
                        else {
                            return <span className={option.value === active ? 'activeitem' : ''}>{option.text}</span>
                        }
                    })}
                </div>
            </div>
        )
    })
    const boxes = data[0].options.map(box => {
        return (
            <div className={`box ${box.value === active ? 'activebox' : ''}`} onClick={() => setActive(box.value)}>
                {box.value}
            </div>
        )
    })

    return (
        <div className="plantable mt-5">
            <div className="plantablebox flex">
                {boxes}
            </div>
            <div className="plantableitems flex">
                {datarow}
            </div>
            <div className="text-start note-text mt-4">
                        HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <span className="text-primary note-text">Terms of Use</span> for more details.
                        Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
                    </div>
            <div className="text-center mt-5">
                <Link to="/home"><button className="btn w-50 btn-next text-light" >Register</button></Link>
            </div>
        </div >
    )
}
export default Plantable