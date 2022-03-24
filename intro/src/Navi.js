import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

export default class Navi extends Component {
  sepetList = () => {
    const list = this.props.cart.map((car) => {
      return (
        <DropdownItem key={car.product.id}>
          {car.product.productName}-{car.quantity}Adet
        </DropdownItem>
      );
    });
    return list;
  };
  render() {
    console.log(this.props.cart);
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">Northwind App</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                  Sepetteki Ürünler {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu end>
                  {this.sepetList()}
                  <DropdownItem divider />

                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>{this.props.cart.length} Kalem Ürün seçildi</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
