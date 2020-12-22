import React from "react"
import Navbar from "react-bootstrap/Navbar"
//import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import "./NavBar.scss"
import Avatar from "@atlaskit/avatar"

export function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">JETop Credentials</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Avatar
          appearance="square"
          size="medium"
          src="https://hello.atlassian.net/secure/projectavatar?pid=30630"
        />
      </Navbar.Collapse>
    </Navbar>
  )
}
