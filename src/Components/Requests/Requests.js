import "./Requests.css";

const requests = [
  {
    customerName: "Alice",
    dressType: "Evening Gown",
    deadline: "2023-08-15",
    price: "Rs. 250",
    customerDescription:
      "Alice is attending a gala event and needs an elegant evening gown. She prefers a floor-length dress with a hint of sparkle.",
  },
  {
    customerName: "John",
    dressType: "Business Suit",
    deadline: "2023-08-10",
    price: "Rs. 350",
    customerDescription:
      "John is looking for a classic navy-blue business suit with a tailored fit for an important corporate meeting.",
  },
  {
    customerName: "Sarah",
    dressType: "Summer Dress",
    deadline: "2023-08-05",
    price: "Rs. 520",
    customerDescription:
      "Sarah wants a floral-print knee-length summer dress for her upcoming beach vacation.",
  },
  {
    customerName: "Michael",
    dressType: "Tuxedo",
    deadline: "2023-08-20",
    price: "Rs. 400",
    customerDescription:
      "Michael needs a classic black tuxedo with a bow tie and a pocket square for his wedding day.",
  },
  {
    customerName: "Emily",
    dressType: "Prom Dress",
    deadline: "2023-08-25",
    price: "Rs. 300",
    customerDescription:
      "Emily is excited about her prom night and wants a glamorous, floor-sweeping prom dress in a bold color.",
  },
  {
    customerName: "David",
    dressType: "Casual T-Shirt",
    deadline: "2023-08-12",
    price: "Rs. 230",
    customerDescription:
      "David is in search of comfortable and stylish casual t-shirts in various colors for everyday wear.",
  },
  {
    customerName: "Sophie",
    dressType: "Bridesmaid Dress",
    deadline: "2023-08-18",
    price: "Rs. 780",
    customerDescription:
      "Sophie needs a pastel-colored bridesmaid dress with a flowy silhouette for her friend's wedding.",
  },
];

const Requests = () => (
  <div className="requestsMainContainer">
    <h1 className="requestHeading">Requests</h1>
    <div className="requestsort">
        <button>Instakria</button>
        <button>Regular</button>
        <button>Filters</button>
    </div>
    <ul className="requestsList">
      {requests.map((each) => (
        <li className="requestCardContainer">
          <div className="requestTop">
            <img
              src="https://i.pinimg.com/474x/9d/37/6b/9d376b9922ec77125f39ce02486f7474.jpg"
              alt="design"
              className="requestDesignImage"
            />
            <div className="requestCardText">
              <p className="requestsPara name">{each.customerName}</p>
              <p className="requestsPara">
                Type: <span>{each.dressType}</span>
              </p>
              <p className="requestsPara">
                Deadline: <span>{each.deadline}</span>
              </p>
              <p className="requestsPara">{each.price}</p>
              <p className="requestsPara">Description: <span>{each.customerDescription}</span></p>
            </div>
          </div>
          <div className="requestBottom">
            <button className="requestAccept">Accept</button>
            <button className="requestDecline">Decline</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Requests;
