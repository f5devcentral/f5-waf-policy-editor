import React from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { Filetype } from 'f5-waf-policy';

export default class Filetypes extends React.Component {
    addFiletype(e) {
        const policy = this.props.policy;
        let filetype = new Filetype();
        policy.filetypes.push(filetype);
        this.props.onChange(policy);
    }
    render() {
        return (
            <div>
                <h2>Filetypes</h2>
                <Button size="sm" className="mb-2" onClick={e => this.addFiletype(e)}>
                    Add Filetype
                </Button>
                <FiletypesList
                    policy={this.props.policy}
                    onChange={this.props.onChange} />
            </div>
        );
    }
}

class FiletypesList extends React.Component {
    changeName(e) {
        const policy = this.props.policy;
        policy.filetypes[e.target.id].name = e.target.value;
        this.props.onChange(policy);
    }
    changeType(e) {
        const policy = this.props.policy;
        policy.filetypes[e.target.id].type = e.target.text;
        this.props.onChange(policy);
    }
    toggleAllowed(e) {
        const policy = this.props.policy;
        policy.filetypes[e.target.id].allowed = !policy.filetypes[e.target.id].allowed;
        this.props.onChange(policy);
    }
    toggleCheckUrlLength(e) {
        const policy = this.props.policy;
        policy.filetypes[e.target.id].checkUrlLength = !policy.filetypes[e.target.id].checkUrlLength;
        this.props.onChange(policy);
    }
    changeUrlLength(e) {
        const policy = this.props.policy;
        policy.filetypes[e.target.id].urlLength = parseInt(e.target.value) || 0;
        this.props.onChange(policy);
    }
    toggleCheckQueryStringLength(e) {
        const policy = this.props.policy;
        policy.filetypes[e.target.id].checkQueryStringLength = !policy.filetypes[e.target.id].checkQueryStringLength;
        this.props.onChange(policy);
    }
    changeQueryStringLength(e) {
        const policy = this.props.policy;
        policy.filetypes[e.target.id].queryStringLength = parseInt(e.target.value) || 0;
        this.props.onChange(policy);
    }
    toggleCheckPostDataLength(e) {
        const policy = this.props.policy;
        policy.filetypes[e.target.id].checkPostDataLength = !policy.filetypes[e.target.id].checkPostDataLength;
        this.props.onChange(policy);
    }
    changePostDataLength(e) {
        const policy = this.props.policy;
        policy.filetypes[e.target.id].postDataLength = parseInt(e.target.value) || 0;
        this.props.onChange(policy);
    }
    toggleCheckRequestLength(e) {
        const policy = this.props.policy;
        policy.filetypes[e.target.id].checkRequestLength = !policy.filetypes[e.target.id].checkRequestLength;
        this.props.onChange(policy);
    }
    changeRequestLength(e) {
        const policy = this.props.policy;
        policy.filetypes[e.target.id].requestLength = parseInt(e.target.value) || 0;
        this.props.onChange(policy);
    }
    toggleResponseCheck(e) {
        const policy = this.props.policy;
        policy.filetypes[e.target.id].responseCheck = !policy.filetypes[e.target.id].responseCheck;
        this.props.onChange(policy);
    }
    delFiletype(e) {
        const policy = this.props.policy;
        policy.filetypes.splice(e.target.id, 1);
        this.props.onChange(policy);
    }
    delAllFiletypes(e) {
        const policy = this.props.policy;
        policy.filetypes = [];
        this.props.onChange(policy);
    }
    render() {
        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Filetype Name</th>
                            <th>Type</th>
                            <th>Allowed</th>
                            <th>Check URL Length</th>
                            <th>URL Length</th>
                            <th>Check QS Length</th>
                            <th>QS Length</th>
                            <th>Check POST Data Length</th>
                            <th>POST Data Length</th>
                            <th>Check Request Length</th>
                            <th>Request Length</th>
                            <th>Check Response</th>
                            <th>
                                <Button size="sm" onClick={e => this.delAllFiletypes(e)}>
                                    Remove
                                </Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.policy?.filetypes?.map((filetype, index) => (
                            <tr key={index} className="text-center">
                                <td>
                                    <FormControl
                                        id={this.props.policy.filetypes.indexOf(filetype).toString()}
                                        onChange={e => this.changeName(e)}
                                        size="sm"
                                        value={filetype.name} />
                                </td>
                                <td>
                                    <Dropdown as={ButtonGroup} size="sm">
                                        <Dropdown.Toggle>{filetype.type}</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                id={this.props.policy.filetypes.indexOf(filetype).toString()}
                                                onClick={e => this.changeType(e)}>
                                                explicit
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                id={this.props.policy.filetypes.indexOf(filetype).toString()}
                                                onClick={e => this.changeType(e)}>
                                                wildcard
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.filetypes.indexOf(filetype).toString()}
                                        onChange={e => this.toggleAllowed(e)}
                                        checked={filetype.allowed} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.filetypes.indexOf(filetype).toString()}
                                        onChange={e => this.toggleCheckUrlLength(e)}
                                        checked={filetype.checkUrlLength} />
                                </td>
                                <td>
                                    <FormControl
                                        id={this.props.policy.filetypes.indexOf(filetype).toString()}
                                        onChange={e => this.changeUrlLength(e)}
                                        size="sm"
                                        value={filetype.urlLength} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.filetypes.indexOf(filetype).toString()}
                                        onChange={e => this.toggleCheckQueryStringLength(e)}
                                        checked={filetype.checkQueryStringLength} />
                                </td>
                                <td>
                                    <FormControl
                                        id={this.props.policy.filetypes.indexOf(filetype).toString()}
                                        onChange={e => this.changeQueryStringLength(e)}
                                        size="sm"
                                        value={filetype.queryStringLength} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.filetypes.indexOf(filetype).toString()}
                                        onChange={e => this.toggleCheckPostDataLength(e)}
                                        checked={filetype.checkPostDataLength} />
                                </td>
                                <td>
                                    <FormControl
                                        id={this.props.policy.filetypes.indexOf(filetype).toString()}
                                        onChange={e => this.changePostDataLength(e)}
                                        size="sm"
                                        value={filetype.postDataLength} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.filetypes.indexOf(filetype).toString()}
                                        onChange={e => this.toggleCheckRequestLength(e)}
                                        checked={filetype.checkRequestLength} />
                                </td>
                                <td>
                                    <FormControl
                                        id={this.props.policy.filetypes.indexOf(filetype).toString()}
                                        onChange={e => this.changeRequestLength(e)}
                                        size="sm"
                                        value={filetype.requestLength} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.filetypes.indexOf(filetype).toString()}
                                        onChange={e => this.toggleResponseCheck(e)}
                                        checked={filetype.responseCheck} />
                                </td>
                                <td>
                                    <Button size="sm" onClick={e => this.delFiletype(e)}>
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