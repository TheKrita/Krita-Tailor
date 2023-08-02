import './RequestDetails.css'
import RequestDetailsCarousel from './RequestDetailsCarousel/RequestDetailsCarousel'

const customers = [
    {Nameofthecustomer :'Hema', price:'799/-', Deadline:'30/07/2023',Frontsize:'20cm',Backneck:'20cm', Sleeves: '20cm',Addon: 'None', Clothtype: 'slik', Lining: 'Yes', Bandsize: '20cm', Busysize: '20cm', Andmore: 'None' },
    {Nameofthecustomer :'Swathi', price:'500/-', Deadline:'30/08/2023',Frontsize:'40cm',Backneck:'40cm', Sleeves: '40cm',Addon: 'None', Clothtype: 'cotton', Lining: 'No', Bandsize: '50cm', Busysize: '50cm', Andmore:'None'}
]

const images = [
    'https://i.pinimg.com/474x/25/a2/c6/25a2c6b471797b36b5a1d6f91bde5c8c.jpg',
    'https://i.pinimg.com/474x/1d/7f/03/1d7f03b2fe13fd2e8ace3dfa67fcc8d5.jpg',
    'https://i.pinimg.com/564x/02/8b/e8/028be8c40ba529d16d6aa12c16d9487b.jpg'
]

const RequestDetails = () => {
    const customer = customers.filter(each => each.Nameofthecustomer === 'Hema')
    return(
        <div className='RequestsMainContainer'>
            <h1>Customer Request Details</h1>
            {customer.map(each => (
                <div className='RequestsMainContainer'>
                    <div className="mainContainer">
                        <RequestDetailsCarousel images={images} interval={3000} />
                        <div className="subContainer">
                            <h1 className='contName'>{each.Nameofthecustomer}</h1>
                            <p className="priceBox">Price: {each.price}</p>
                            <p className="priceBox">Deadline: {each.Deadline}</p>
                            <div className="buttonContainer">
                                <button className="declineButton">Decline</button>
                                <button className="acceptButton">Accept</button>
                            </div>
                        </div>
                    </div>
                    <div className="bottomContainer">
                        <h2>Blouse Design</h2>
                            <ul>
                                <li>Front neck : {each.Frontsize} </li>
                                <li>Back neck :{each.Backneck} </li>
                                <li>Sleeves :{each.Sleeves}</li>
                                <li>Add On :{each.Addon}</li>
                                <li>Cloth type :{each.Clothtype}</li>
                                <li>Lining :{each.Lining}</li>
                            </ul>
                        <h2>Measurements</h2>
                            <ul>
                                <li>Band size :{each.Bandsize}</li>
                                <li>Busy size :{each.Busysize}</li>
                            </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default RequestDetails