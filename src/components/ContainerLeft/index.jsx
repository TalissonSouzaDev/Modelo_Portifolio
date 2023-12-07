import React from "react";
import { FaGithub, FaLinkedin, FaRocket, FaDribbble } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function ContainerLeft({ image }) {
  return (
    <div className="card-left">
      <div className="img">
        <img src={image} alt="perfil" />
      </div>

      <h3>Talisson Souza</h3>
     
      <span>Fullstack Developer</span>

      <ul>
        <li>
         <a href="#"  target="_blank"><FaGithub size={65} /> <span>GitHub</span></a>
        
        </li>
        <li>
          <a href="#" target="_blank"><FaLinkedin size={65} /> <span>Linkedin</span></a>
        </li>
        <li>
          <a href="#" target="_blank"><FaRocket size={65} /> <span>Rocketseat</span></a>
        </li>
        <li>
          <a href="#"  target="_blank"><FaDribbble size={65} /> <span>Dribbble</span></a>
        </li>
      </ul>
    </div>
  );
}
