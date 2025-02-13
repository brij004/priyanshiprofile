import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Priyanshi Lathiya </span>
            from <span className="purple"> Gujrat, India.</span>
            <br />
            I am currently MCA in Kristu Jayanti College,Autonomouse
            Bengaluru,Karnataka .
            <br />
            I have completed BCA and external classes .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="">
            <li className="flex items-center text-sm sm:text-xl gap-3">
              <ImPointRight /> Playing Games
            </li>

            <li className="flex items-center text-sm sm:text-xl gap-3">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="flex items-center text-sm sm:text-xl gap-3">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Priyanshi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
