import React from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { Header } from 'f5-waf-policy';

export default class Headers extends React.Component {
    addHeader(e) {
        const policy = this.props.policy;
        let header = new Header();
        policy.headers.push(header);
        this.props.onChange(policy);
    }
    render() {
        return (
            <div>
                <h2>Headers</h2>
                <Button size="sm" className="mb-2" onClick={e => this.addHeader(e)}>
                    Add Header
                </Button>
                <HeadersList
                    policy={this.props.policy}
                    onChange={this.props.onChange} />
            </div>
        );
    }
}

class HeadersList extends React.Component {
    changeName(e) {
        const policy = this.props.policy;
        policy.headers[e.target.id].name = e.target.value;
        this.props.onChange(policy);
    }
    changeType(e) {
        const policy = this.props.policy;
        policy.headers[e.target.id].type = e.target.text;
        this.props.onChange(policy);
    }
    toggleMandatory(e) {
        const policy = this.props.policy;
        policy.headers[e.target.id].mandatory = !policy.headers[e.target.id].mandatory;
        this.props.onChange(policy);
    }
    toggleCheckSignatures(e) {
        const policy = this.props.policy;
        policy.headers[e.target.id].checkSignatures = !policy.headers[e.target.id].checkSignatures;
        this.props.onChange(policy);
    }
    toggleHtmlNormalization(e) {
        const policy = this.props.policy;
        policy.headers[e.target.id].htmlNormalization = !policy.headers[e.target.id].htmlNormalization;
        this.props.onChange(policy);
    }
    toggleBase64(e) {
        const policy = this.props.policy;
        policy.headers[e.target.id].decodeValueAsBase64 = !policy.headers[e.target.id].decodeValueAsBase64;
        this.props.onChange(policy);
    }
    toggleAllowRepeatedOccurrences(e) {
        const policy = this.props.policy;
        policy.headers[e.target.id].allowRepeatedOccurrences = !policy.headers[e.target.id].allowRepeatedOccurrences;
        this.props.onChange(policy);
    }
    delHeader(e) {
        const policy = this.props.policy;
        policy.headers.splice(e.target.id, 1);
        this.props.onChange(policy);
    }
    delAllHeaders(e) {
        const policy = this.props.policy;
        policy.headers = [];
        this.props.onChange(policy);
    }
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
                            <th>
                                <Button size="sm" onClick={e => this.delAllHeaders(e)}>
                                    Remove
                                </Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.policy?.headers?.map((header, index) => (
                            <tr key={index} className="text-center">
                                <td>
                                    <FormControl
                                        id={this.props.policy.headers.indexOf(header).toString()}
                                        onChange={e => this.changeName(e)}
                                        size="sm"
                                        value={header.name} />
                                </td>
                                <td>
                                    <Dropdown as={ButtonGroup} size="sm">
                                        <Dropdown.Toggle>{header.type}</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                id={this.props.policy.headers.indexOf(header).toString()}
                                                onClick={e => this.changeType(e)}>
                                                explicit
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                id={this.props.policy.headers.indexOf(header).toString()}
                                                onClick={e => this.changeType(e)}>
                                                wildcard
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.headers.indexOf(header).toString()}
                                        onChange={e => this.toggleMandatory(e)}
                                        checked={header.mandatory} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.headers.indexOf(header).toString()}
                                        onChange={e => this.toggleCheckSignatures(e)}
                                        checked={header.checkSignatures} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.headers.indexOf(header).toString()}
                                        onChange={e => this.toggleHtmlNormalization(e)}
                                        checked={header.htmlNormalization} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.headers.indexOf(header).toString()}
                                        onChange={e => this.toggleBase64(e)}
                                        checked={header.decodeValueAsBase64} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.headers.indexOf(header).toString()}
                                        onChange={e => this.toggleAllowRepeatedOccurrences(e)}
                                        checked={header.allowRepeatedOccurrences} />
                                </td>
                                <td>
                                    <Button size="sm" onClick={e => this.delHeader(e)}>
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}