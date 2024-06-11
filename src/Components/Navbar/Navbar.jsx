import { Col, Container, Row } from "react-bootstrap"
import "./navbar.css"
import {Link} from 'react-router-dom';
export default function Navbar() {
    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col lg="6">


                        <ul className="list">
                        <Link to="/menu">
                                <li className="list_item">Header</li>
                            </Link>
                            <Link to="/">
                                <li className="list_item">Button</li>
                            </Link>
                            <Link to="/about">
                                <li className="list_item">Menu</li>
                            </Link>
                     


                        </ul>


                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
