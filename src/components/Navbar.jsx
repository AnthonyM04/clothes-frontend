import React from "react"
import { Container, Navbar, Row } from "react-bootstrap"

export default function NavbarMenu() {
    return(
        <Navbar>
            <Container fluid>
                <Row>
                    <Navbar>
                    <Navbar.Brand className="navbar-brand" href="#home">
                         <Navbar.Brand>
                         </Navbar.Brand>
                    </Navbar.Brand>
                    </Navbar>
                </Row>
            </Container>
        </Navbar>
    )
}