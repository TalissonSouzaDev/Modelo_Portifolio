import React, { useEffect, useState } from "react";
import CardElement from "../CardElement";
import {
  FaPhp,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaDelicious,
} from "react-icons/fa";

export default function ContainerRight() {
    const elements = [
        {
            id: 1,
            logo: <FaPhp size={150} color="#3d85c6" />,
            title: "PHP",
            porcent: "80%",
            developer: "BackEnd",
            now:80
          },
          {
            id: 2,
            logo: <FaJsSquare size={150} color="#ffd966" />,
            title: "JAVASCRIPT",
            porcent: "70%",
            developer: "Frontend",
            now:70
          },
          {
            id: 3,
            logo: <FaHtml5 size={150} color="red" />,
            title: "HTML 5",
            porcent: "100%",
            developer: "FrontEnd",
            now:100
          },
          {
            id: 4,
            logo: <FaCss3Alt size={150} color="blue" />,
            title: "CSS 3",
            porcent: "60%",
            developer: "FrontEnd",
            now:60
          },
          {
            id: 5,
            logo: <FaDelicious size={150} />,
            title: "C#",
            porcent: "60%",
            developer: "BackEnd",
            now:60
          },

    ]
  const [card, setcard] = useState(elements);

  const handleInputChange = (e) => { 
    const Search = e.target.value
   
    const filteredItems = card.filter((user) =>
    user.title.toLowerCase().includes(Search.toLowerCase())
    );

    // se search for vazio conta o card, se o card for igual a zero joga o state elements se não joga o filteredItem, caso o search não seja vazio joga o setcard(elements)
  
    Search != "" ?  card.length === 0 ? setcard(elements) : setcard(filteredItems) :  setcard(elements)
 
  }

  return (
    <div className="card-right">
      <div className="form-group">
        <label htmlFor="Dashboard">DashBoard</label>
        <input type="text" name="dash" id="" placeholder="Search" onChange={handleInputChange}/>
      </div>

      <div className="elements-right">
        {card.map((e) => {
          return (
            <>
              <CardElement
                id={e.id}
                logo={e.logo}
                title={e.title}
                developer={e.developer}
                porcent={e.porcent}
                now={e.now}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
