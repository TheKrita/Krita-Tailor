import { Link } from "react-router-dom"
import HomeCarousel from './HomeCarousel/HomeCarousel'
import './Home.css'
import { Component } from "react"
import {CgArrowRight} from 'react-icons/cg'
import {ImCancelCircle} from 'react-icons/im'

const images = [
    'https://i.pinimg.com/564x/50/69/8a/50698a8a605b4e063bfd796354743cca.jpg',
    'https://i.pinimg.com/564x/32/97/78/32977838337f44a96ec3ca6eef34927a.jpg',
    'https://i.pinimg.com/564x/73/97/d1/7397d1b17c8ff8d08e2bf2c4f2b098c3.jpg'
]

const requests = [
    {
    "customerName": "Alice",
    "dressType": "Evening Gown",
    "deadline": "2023-08-15",
    "price": "Rs. 250",
    "customerDescription": "Alice is attending a gala event and needs an elegant evening gown. She prefers a floor-length dress with a hint of sparkle."
    },
    {
    "customerName": "John",
    "dressType": "Business Suit",
    "deadline": "2023-08-10",
    "price": "Rs. 350",
    "customerDescription": "John is looking for a classic navy-blue business suit with a tailored fit for an important corporate meeting."
    },
    {
    "customerName": "Sarah",
    "dressType": "Summer Dress",
    "deadline": "2023-08-05",
    "price": "Rs. 520",
    "customerDescription": "Sarah wants a floral-print knee-length summer dress for her upcoming beach vacation."
    },
    {
    "customerName": "Michael",
    "dressType": "Tuxedo",
    "deadline": "2023-08-20",
    "price": "Rs. 400",
    "customerDescription": "Michael needs a classic black tuxedo with a bow tie and a pocket square for his wedding day."
    },
    {
    "customerName": "Emily",
    "dressType": "Prom Dress",
    "deadline": "2023-08-25",
    "price": "Rs. 300",
    "customerDescription": "Emily is excited about her prom night and wants a glamorous, floor-sweeping prom dress in a bold color."
    },
    {
    "customerName": "David",
    "dressType": "Casual T-Shirt",
    "deadline": "2023-08-12",
    "price": "Rs. 230",
    "customerDescription": "David is in search of comfortable and stylish casual t-shirts in various colors for everyday wear."
    },
    {
    "customerName": "Sophie",
    "dressType": "Bridesmaid Dress",
    "deadline": "2023-08-18",
    "price": "Rs. 780",
    "customerDescription": "Sophie needs a pastel-colored bridesmaid dress with a flowy silhouette for her friend's wedding."
    }   
]

class Home extends Component{
    onClickRequest = () =>{
        const {history} = this.props
        history.push('/requestdetails')
    }
    render() {
    return(
        <div className="homeMainContainer">
            <div className="homeContainer">
                <div className="homeCarouselContainer">
                    <HomeCarousel images={images} interval={3000} />
                </div>
                <div className="middleContainer">
                    <button className="buttons">Requests: 0</button>
                    <button className="buttons">Yet To Work: 0</button>
                    <button className="buttons">In Progress: 0</button>
                    <button className="buttons">At Risk: 0</button>
                    <button className="buttons">Completed: 0</button>
                    <button className="buttons">Cancelled: 0</button>
                </div>
                <div className="requestsHead">
                    <h1 className="reqHeading">Requests</h1>
                    <div className="seeAll">
                        <h1>See All</h1>
                        <Link to='/requests'><p><CgArrowRight/></p></Link>
                    </div>
                </div>
                <ul className="requestsHomeList">
                    {requests.map((each) => (
                        <li className="requestHomeCardContainer">
                            <p className="cancel"><ImCancelCircle /></p>
                            <div className="requestHomeTop">
                                <img
                                src="https://i.pinimg.com/474x/9d/37/6b/9d376b9922ec77125f39ce02486f7474.jpg"
                                alt="design"
                                className="requestHomeDesignImage"
                                />
                                <div className="requestHomeCardText">
                                <p className="requestsHomePara name">{each.customerName}</p>
                                <p className="requestsHomePara">
                                    Type: <span>{each.dressType}</span>
                                </p>
                                <p className="requestsHomePara">
                                    Deadline: <span>{each.deadline}</span>
                                </p>
                                <p className="requestsHomePara">{each.price}</p>
                                <p className="requestsHomePara">Description: <span>{each.customerDescription}</span></p>
                                </div>
                            </div>
                            <div className="requestHomeBottom">
                                <button className="requestHomeAccept">Accept</button>
                                <button className="requestHomeDecline">Decline</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
}
export default Home