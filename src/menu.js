import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default class Menu extends React.Component {
    render() {
        return (
            <Nav variant="pills" className="flex-column" activeKey={this.props.activeKey}>
                <MenuItem name="General" onClick={this.props.onClick}></MenuItem>
                <MenuItem name="Blocking Settings" onClick={this.props.onClick}></MenuItem>
                <MenuItem name="URLs" onClick={this.props.onClick}></MenuItem>
                <MenuItem name="Headers" onClick={this.props.onClick}></MenuItem>
                <MenuItem name="Parameters" onClick={this.props.onClick} disabled={true}></MenuItem>
                <MenuItem name="Methods" onClick={this.props.onClick} disabled={true}></MenuItem>
                <MenuItem name="Filetypes" onClick={this.props.onClick} disabled={true}></MenuItem>
                <MenuItem name="Signatures" onClick={this.props.onClick} disabled={true}></MenuItem>
                <MenuItem name="Bot Defense" onClick={this.props.onClick} disabled={true}></MenuItem>
            </Nav>
        );
    }
}

class MenuItem extends React.Component {
    render() {
        return (
            <Nav.Item onClick={() => this.props.onClick(this.props.name)}>
                <Nav.Link eventKey={this.props.name} disabled={this.props.disabled ? "disabled" : ""}>{this.props.name}</Nav.Link>
            </Nav.Item>
        );
    }
}