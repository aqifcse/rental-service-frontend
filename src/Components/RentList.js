import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import BookModal from "./BookModal";
import ReturnModal from "./ReturnModal"
import './RentList.css';
import API from "../API";

import axios from 'axios';




// code, name, type, availability", needing_repair, durability, max_durability, mileage, price, minimum_rent_period
const RentList = ({ onAdd }) => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  var [availability, setAvailability] = useState();
  var [needing_repair, setNeedingRepair] = useState();
  const [durability, setDurability] = useState("");
  const [max_durability, setMaxDurability] = useState("");
  const [mileage, setMileage] = useState("");
  const [price, setPrice] = useState("");
  const [minimum_rent_period, setMinimumRentPeriod] = useState("");

  const [rents, setRents] = useState([]);


  const [modalBookOpen, setModalBookOpen] = useState(false);
  const [modalReturnOpen, setModalReturnOpen] = useState(false);

  const [q, setQ] = useState("");

  useEffect(() => {
    const fetchData = async () => {

      await axios.get(`https://morning-sands-52405.herokuapp.com/searchRentalInfo/?search=${q}`).then((res) => {
        setRents(res.data);

      })
      .catch(console.error);
        
    }

    fetchData()
}, [q])

  

  const refreshRents = () => {
    API.get("/")
      .then((res) => {
        setRents(res.data);

      })
      .catch(console.error);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let item = { code, name, type, availability, needing_repair, durability, max_durability, mileage, price, minimum_rent_period };
    API.post("/", item).then(() => refreshRents());
  };

  

  function selectRent(id) {
    let item = rents.filter((rent) => rent.id === id)[0];
    setCode(item.code);
    setName(item.name);
    setType(item.type);
    setAvailability(item.availability);
    setNeedingRepair(item.needing_repair);
    setDurability(item.durability);
    setMaxDurability(item.max_durability);
    setMileage(item.mileage);
    setPrice(item.price);
    setMinimumRentPeriod(item.minimum_rent_period);

  }
  return (
    <div className="container mt-5">
      <div className="search">
        <input type="text"
          placeholder={"Search Character"}
          className={"input"}
          onChange={event => setQ(event.target.value)}
          value={q}
        />
      </div>
      <div className="row">
        <div className="col-md-4">

            <div className="float-left">
              <Button
                className="openModalBtn"
                onClick={() => {
                  setModalBookOpen(true);
                }}
                variant="primary"
              >
                Book
              </Button>
              {modalBookOpen && <BookModal setOpenBookModal={setModalBookOpen} />}
              <Button
                variant="primary"
                type="button"
                onClick={() => {
                  setModalReturnOpen(true);
                }}
                className="openModalBtn"
              >
                Return
              </Button>
              {modalReturnOpen && <ReturnModal setOpenReturnModal={setModalReturnOpen} />}
            </div>
        </div>
        <div className="col-md-8 m">
          <table class="table">
            <thead>
              <tr>
                <th scope='col'>Id</th>
                <th scope="col">Name</th>
                <th scope="col">Code</th>
                <th scope="col">Type</th>
                <th scope="col">Availability</th>
                <th scope="col">Needing Repair</th>
                <th scope="col">Durability</th>
                <th scope="col">Max Durability</th>
                <th scope="col">Mileage</th>
                <th scope="col">Price</th>
                <th scope="col">Minimum Rent Period</th>
              </tr>
            </thead>
            <tbody>
              {rents.map((rent, index) => {
                return (
                  <tr key="">
                    <td> {rent.id}</td>
                    <td> {rent.name}</td>
                    <td> {rent.code}</td>
                    <td>{rent.type}</td>
                    <td>{String(rent.availability)}</td>
                    <td>{String(rent.needing_repair)}</td>
                    <td>{rent.durability}</td>
                    <td>{rent.max_durability}</td>
                    <td>{rent.mileage}</td>
                    <td>{rent.price}</td>
                    <td>{rent.minimum_rent_period}</td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RentList;