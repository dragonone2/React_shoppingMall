import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState, useEffect } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import axios from "axios";
function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [count, setCount] = useState(2);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail/");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container"></div>
              <div className="row">
                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i + 1}></Card>;
                })}
              </div>
              {count === 4 ? null : (
                <div>
                  <button
                    onClick={() => {
                      axios
                        .get(
                          "https://codingapple1.github.io/shop/data" +
                            count +
                            ".json"
                        )
                        .then((결과) => {
                          let copy = [...shoes, ...결과.data];
                          setShoes(copy);
                          setCount((prevCount) => prevCount + 1); //이전 값에서 1을 더해서 저장하는것
                        })
                        .catch(() => {
                          console.log("실패");
                        });
                    }}
                  >
                    버튼
                  </button>
                </div>
              )}
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>맴버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4> 회사정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
