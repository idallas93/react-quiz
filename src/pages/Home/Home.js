import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Header from "../../components/Header"

function Home(){

return (
<container>
 <Header></Header>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</container>
);

}

export default Home;
