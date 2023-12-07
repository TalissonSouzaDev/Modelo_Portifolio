import React from "react";
import "./cardelement.css";
import { Progress } from "bootstrap-4-react";

export default function CardElement({ id, logo, title, developer, porcent, now }) {
  return (
    <div className="CardElement" key={id}>
      <div className="logo">{logo}</div>

      <div className="nameelements">
        <div className="porcent">
          <h4>
            {title} <br />
            <span>{developer}</span>
          </h4>
          <span>{porcent}</span>
        </div>

        <Progress mb="2">
          <Progress.Bar min="0" max="100" now={now} bg="info" />
        </Progress>
      </div>
    </div>
  );
}
