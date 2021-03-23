import React from 'react';
import setToValue from './helpers.js';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Header } from 'f5-waf-policy';

export default class Headers extends React.Component {
    constructor(props) {
        super(props);
        this.addHeader = this.addHeader.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeType = this.changeType.bind(this);
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
        this.toggleBase64 = this.toggleBase64.bind(this);
        this.delHeader = this.delHeader.bind(this);
        this.delHeader = this.delHeader.bind(this);
    }
    handleChange(e) {
        let policy = Object.assign(Object.create(Object.getPrototypeOf(this.props.policy)), this.props.policy)
        setToValue(policy.policy, e.target.id, e.target.value)
        this.props.onChange(policy);
    }
    changeType(e) {
        let policy = Object.assign(Object.create(Object.getPrototypeOf(this.props.policy)), this.props.policy)
        setToValue(policy.policy, e.target.id, e.target.text)
        this.props.onChange(policy);
    }
    toggleCheckbox(e) {
        let policy = Object.assign(Object.create(Object.getPrototypeOf(this.props.policy)), this.props.policy)
        setToValue(policy.policy, e.target.id, e.target.checked)
        this.props.onChange(policy);
    }
    toggleBase64(e) {
        let policy = Object.assign(Object.create(Object.getPrototypeOf(this.props.policy)), this.props.policy)
        const value = e.target.checked ? "enabled" : "disabled"
        setToValue(policy.policy, e.target.id, value)
        this.props.onChange(policy);
    }
    addHeader(e) {
        let policy = Object.assign(Object.create(Object.getPrototypeOf(this.props.policy)), this.props.policy)

        let headers = policy.policy?.headers || [];
        headers.push(new Header({
            "name": "changeme-" + Math.random().toString(36).substring(10),
            "type": "explicit",
            "decodeValueAsBase64": "enabled",
            "htmlNormalization": true,
            "mandatory": true,
            "allowRepeatedOccurrences": false,
            "checkSignatures": true
        }))
        policy.policy.headers = headers;
        this.props.onChange(policy);
    }
    delHeader(e) {
        let policy = Object.assign(Object.create(Object.getPrototypeOf(this.props.policy)), this.props.policy)
        policy.policy.headers.splice(e.target.id, 1)
        if (policy.policy.headers.length === 0) {
            delete policy.policy.headers
        }
        this.props.onChange(policy);
    }
    render() {
        return (
            <div>
                <h2>Headers</h2>
                <HeadersList
                    policy={this.props.policy}
                    delHeader={this.delHeader}
                    addHeader={this.addHeader}
                    handleChange={this.handleChange}
                    changeType={this.changeType}
                    toggleCheckbox={this.toggleCheckbox}
                    toggleBase64={this.toggleBase64} />
            </div>
        );
    }
}

class HeadersList extends React.Component {
    render() {
        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Header Name</th>
                            <th>Type</th>
                            <th>Mandatory</th>
                            <th>Check Signatures</th>
                            <th>Normalize HTML</th>
                            <th>Decode Base64</th>
                            <th>Allow Repeated</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.policy.policy?.headers?.map((header, index) => (
                            <tr key={header.index} className="text-center">
                                <td>
                                    <FormControl
                                        id={"headers[" + this.props.policy.policy.headers.indexOf(header) + "].name"}
                                        onChange={e => this.props.handleChange(e)}
                                        size="sm"
                                        value={header.name} />
                                </td>
                                <td>
                                    <Dropdown as={ButtonGroup} size="sm">
                                        <Dropdown.Toggle>{header.type}</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                key="explicit"
                                                id={"headers[" + this.props.policy.policy.headers.indexOf(header) + "].type"}
                                                onClick={e => this.props.changeType(e)}
                                            >
                                                explicit
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                key="wildcard"
                                                id={"headers[" + this.props.policy.policy.headers.indexOf(header) + "].type"}
                                                onClick={e => this.props.changeType(e)}
                                            >
                                                wildcard
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                                <td>
                                    <Form.Check
                                        id={"headers[" + this.props.policy.policy.headers.indexOf(header) + "].mandatory"}
                                        onChange={e => this.props.toggleCheckbox(e)}
                                        checked={header.mandatory}
                                    />
                                </td>
                                <td>
                                    <Form.Check
                                        id={"headers[" + this.props.policy.policy.headers.indexOf(header) + "].checkSignatures"}
                                        onChange={e => this.props.toggleCheckbox(e)}
                                        checked={header.checkSignatures}
                                    />
                                </td>
                                <td>
                                    <Form.Check
                                        id={"headers[" + this.props.policy.policy.headers.indexOf(header) + "].htmlNormalization"}
                                        onChange={e => this.props.toggleCheckbox(e)}
                                        checked={header.htmlNormalization}
                                    />
                                </td>
                                <td>
                                    <Form.Check
                                        id={"headers[" + this.props.policy.policy.headers.indexOf(header) + "].decodeValueAsBase64"}
                                        onChange={e => this.props.toggleBase64(e)}
                                        checked={header.decodeValueAsBase64 === "enabled" ? true : false}
                                    />
                                </td>
                                <td>
                                    <Form.Check
                                        id={"headers[" + this.props.policy.policy.headers.indexOf(header) + "].allowRepeatedOccurrences"}
                                        onChange={e => this.props.toggleCheckbox(e)}
                                        checked={header.allowRepeatedOccurrences}
                                    />
                                </td>
                                <td>
                                    <Button size="sm"
                                        id={this.props.policy.policy.headers.indexOf(header)}
                                        onClick={e => this.props.delHeader(e)}>
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Button size="sm" onClick={e => this.props.addHeader(e)}>
                    Add Header
                </Button>
            </div>
        )
    }
}