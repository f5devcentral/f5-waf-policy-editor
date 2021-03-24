import React from 'react';

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
        this.changeName = this.changeName.bind(this);
        this.changeType = this.changeType.bind(this);
        this.toggleMandatory = this.toggleMandatory.bind(this);
        this.toggleCheckSignatures = this.toggleCheckSignatures.bind(this);
        this.toggleHtmlNormalization = this.toggleHtmlNormalization.bind(this);
        this.toggleBase64 = this.toggleBase64.bind(this);
        this.toggleAllowRepeatedOccurrences = this.toggleAllowRepeatedOccurrences.bind(this);
        this.addHeader = this.addHeader.bind(this);
        this.delHeader = this.delHeader.bind(this);
        this.delAllHeaders = this.delAllHeaders.bind(this);
    }
    changeName(e) {
        const policy = this.props.policy
        policy.policy.headers.headers[e.target.id].name = e.target.value
        this.props.onChange(policy);
    }
    changeType(e) {
        const policy = this.props.policy
        policy.policy.headers.headers[e.target.id].type = e.target.text
        this.props.onChange(policy);
    }
    toggleMandatory(e) {
        const policy = this.props.policy
        policy.policy.headers.headers[e.target.id].mandatory = !policy.policy.headers.headers[e.target.id].mandatory
        this.props.onChange(policy);
    }
    toggleCheckSignatures(e) {
        const policy = this.props.policy
        policy.policy.headers.headers[e.target.id].checkSignatures = !policy.policy.headers.headers[e.target.id].checkSignatures
        this.props.onChange(policy);
    }
    toggleHtmlNormalization(e) {
        const policy = this.props.policy
        policy.policy.headers.headers[e.target.id].htmlNormalization = !policy.policy.headers.headers[e.target.id].htmlNormalization
        this.props.onChange(policy);
    }
    toggleBase64(e) {
        const policy = this.props.policy
        policy.policy.headers.headers[e.target.id].decodeValueAsBase64 = !policy.policy.headers.headers[e.target.id].decodeValueAsBase64
        this.props.onChange(policy);
    }
    toggleAllowRepeatedOccurrences(e) {
        const policy = this.props.policy
        policy.policy.headers.headers[e.target.id].allowRepeatedOccurrences = !policy.policy.headers.headers[e.target.id].allowRepeatedOccurrences
        this.props.onChange(policy);
    }
    addHeader(e) {
        const policy = this.props.policy
        let header = new Header()
        policy.policy.headers.add(header)
        this.props.onChange(policy);
    }
    delHeader(e) {
        const policy = this.props.policy
        policy.policy.headers.del(e.target.id)
        this.props.onChange(policy);
    }
    delAllHeaders(e) {
        const policy = this.props.policy
        policy.policy.headers.delAll()
        this.props.onChange(policy);
    }
    render() {
        return (
            <div>
                <h2>Headers</h2>
                <HeadersList
                    policy={this.props.policy}
                    changeName={this.changeName}
                    changeType={this.changeType}
                    toggleMandatory={this.toggleMandatory}
                    toggleCheckSignatures={this.toggleCheckSignatures}
                    toggleHtmlNormalization={this.toggleHtmlNormalization}
                    toggleAllowRepeatedOccurrences={this.toggleAllowRepeatedOccurrences}
                    toggleBase64={this.toggleBase64}
                    addHeader={this.addHeader}
                    delHeader={this.delHeader}
                    delAllHeaders={this.delAllHeaders} />
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
                            <th>
                                <Button size="sm" onClick={this.props.delAllHeaders}>
                                    Remove
                                </Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.policy.policy?.headers.headers?.map((header, index) => (
                            <tr key={index} className="text-center">
                                <td>
                                    <FormControl
                                        id={this.props.policy.policy.headers.headers.indexOf(header).toString()}
                                        onChange={e => this.props.changeName(e)}
                                        size="sm"
                                        value={header.name} />
                                </td>
                                <td>
                                    <Dropdown as={ButtonGroup} size="sm">
                                        <Dropdown.Toggle>{header.type}</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                id={this.props.policy.policy.headers.headers.indexOf(header).toString()}
                                                onClick={e => this.props.changeType(e)}>
                                                explicit
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                id={this.props.policy.policy.headers.headers.indexOf(header).toString()}
                                                onClick={e => this.props.changeType(e)}>
                                                wildcard
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.policy.headers.headers.indexOf(header).toString()}
                                        onChange={e => this.props.toggleMandatory(e)}
                                        checked={header.mandatory} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.policy.headers.headers.indexOf(header).toString()}
                                        onChange={e => this.props.toggleCheckSignatures(e)}
                                        checked={header.checkSignatures} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.policy.headers.headers.indexOf(header).toString()}
                                        onChange={e => this.props.toggleHtmlNormalization(e)}
                                        checked={header.htmlNormalization} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.policy.headers.headers.indexOf(header).toString()}
                                        onChange={e => this.props.toggleBase64(e)}
                                        checked={header.decodeValueAsBase64} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.policy.headers.headers.indexOf(header).toString()}
                                        onChange={e => this.props.toggleAllowRepeatedOccurrences(e)}
                                        checked={header.allowRepeatedOccurrences} />
                                </td>
                                <td>
                                    <Button size="sm" onClick={e => this.props.delHeader(e)}>
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