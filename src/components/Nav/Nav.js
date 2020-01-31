import React from 'react';

import "rbx/index.css";
import { Navbar, Button, Field, Control, Input } from "rbx";

const Nav = () => {
    return (
        <Navbar color="info" >
            {/* <Navbar.Brand>
                <Navbar.Item href="#">
                    <img
                        src="https://bulma.io/images/bulma-logo.png"
                        alt=""
                        role="presentation"
                        width="112"
                        height="28"
                    />
                </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand> */}
            <Navbar.Menu>
                <Navbar.Segment align="start">
                    <Navbar.Item>Home</Navbar.Item>

                    <Navbar.Item dropdown>
                        <Navbar.Link>Industries</Navbar.Link>
                        <Navbar.Dropdown>
                            <Navbar.Item>Healthcare</Navbar.Item>
                            <Navbar.Item>Finance</Navbar.Item>
                            <Navbar.Item>Law</Navbar.Item>
                            <Navbar.Item>Advertisement</Navbar.Item>
                            <Navbar.Item>Fashion</Navbar.Item>
                            <Navbar.Item>Design</Navbar.Item>
                            <Navbar.Divider />
                            <Navbar.Item>More...</Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>

                    <Navbar.Item>
                        <Field kind="group">
                            <Control expanded>
                                <Input placeholder="Find an opportunity" />
                            </Control>
                            <Control>
                                <Button color="primary">Search</Button>
                            </Control>
                        </Field>
                    </Navbar.Item>
                </Navbar.Segment>

                <Navbar.Segment align="end">
                    <Navbar.Item>
                        <Button.Group>
                            <Button color="primary">
                                <strong>Sign up</strong>
                            </Button>
                            <Button color="light">Log in</Button>
                        </Button.Group>
                    </Navbar.Item>
                </Navbar.Segment>
            </Navbar.Menu>
        </Navbar>
    );
}

export default Nav;