import React from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { Url } from 'f5-waf-policy';

export default class Urls extends React.Component {
    addUrl(e) {
        const policy = this.props.policy;
        const url = new Url();
        policy.urls.push(url);
        this.props.onChange(policy);
    }
    render() {
        return (
            <div>
                <h2>URLs</h2>
                <Button size="sm" className="mb-2" onClick={e => this.addUrl(e)}>
                    Add URL
                </Button>
                <UrlsList
                    policy={this.props.policy}
                    onChange={this.props.onChange} />
            </div>
        );
    }
}

class UrlsList extends React.Component {
    changeName(e) {
        const policy = this.props.policy;
        policy.urls[e.target.id].name = e.target.value;
        this.props.onChange(policy);
    }
    changeMethod(e) {
        const policy = this.props.policy;
        policy.urls[e.target.id].method = e.target.value;
        this.props.onChange(policy);
    }
    changeProtocol(e) {
        const policy = this.props.policy;
        policy.urls[e.target.id].protocol = e.target.text;
        this.props.onChange(policy);
    }
    changeType(e) {
        const policy = this.props.policy;
        policy.urls[e.target.id].type = e.target.text;
        this.props.onChange(policy);
    }
    toggleAttackSignaturesCheck(e) {
        const policy = this.props.policy;
        policy.urls[e.target.id].attackSignaturesCheck = !policy.urls[e.target.id].attackSignaturesCheck;
        this.props.onChange(policy);
    }
    toggleMetacharsOnUrlCheck(e) {
        const policy = this.props.policy;
        policy.urls[e.target.id].metacharsOnUrlCheck = !policy.urls[e.target.id].metacharsOnUrlCheck;
        this.props.onChange(policy);
    }
    changeWildcardOrder(e) {
        const policy = this.props.policy;
        policy.urls[e.target.id].wildcardOrder = parseInt(e.target.value) || 0;
        this.props.onChange(policy);
    }
    toggleBase64(e) {
        const policy = this.props.policy;
        policy.urls[e.target.id].wildcardOrder = !policy.urls[e.target.id].wildcardOrder;
        this.props.onChange(policy);
    }
    toggleAllowRepeatedOccurrences(e) {
        const policy = this.props.policy;
        policy.urls[e.target.id].allowRepeatedOccurrences = !policy.urls[e.target.id].allowRepeatedOccurrences;
        this.props.onChange(policy);
    }
    delUrl(e) {
        const policy = this.props.policy;
        policy.urls.splice(e.target.id, 1);
        this.props.onChange(policy);
    }
    delAllUrls(e) {
        const policy = this.props.policy;
        policy.urls = [];
        this.props.onChange(policy);
    }
    render() {
        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Method</th>
                            <th>Protocol</th>
                            <th>Type</th>
                            <th>Check Signatures</th>
                            <th>Check Metachars</th>
                            <th>Order</th>
                            <th>
                                <Button size="sm" onClick={e => this.delAllUrls(e)}>
                                    Remove
                                </Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.policy?.urls?.map((url, index) => (
                            <tr key={index} className="text-center">
                                <td>
                                    <FormControl
                                        id={this.props.policy.urls.indexOf(url).toString()}
                                        onChange={e => this.changeName(e)}
                                        size="sm"
                                        value={url.name} />
                                </td>
                                <td>
                                    <FormControl
                                        id={this.props.policy.urls.indexOf(url).toString()}
                                        onChange={e => this.changeMethod(e)}
                                        size="sm"
                                        value={url.method} />
                                </td>
                                <td>
                                    <Dropdown as={ButtonGroup} size="sm">
                                        <Dropdown.Toggle>{url.protocol}</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                id={this.props.policy.urls.indexOf(url).toString()}
                                                onClick={e => this.changeProtocol(e)}>
                                                http
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                id={this.props.policy.urls.indexOf(url).toString()}
                                                onClick={e => this.changeProtocol(e)}>
                                                https
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                                <td>
                                    <Dropdown as={ButtonGroup} size="sm">
                                        <Dropdown.Toggle>{url.type}</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                id={this.props.policy.urls.indexOf(url).toString()}
                                                onClick={e => this.changeType(e)}>
                                                explicit
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                id={this.props.policy.urls.indexOf(url).toString()}
                                                onClick={e => this.changeType(e)}>
                                                wildcard
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.urls.indexOf(url).toString()}
                                        onChange={e => this.toggleAttackSignaturesCheck(e)}
                                        checked={url.attackSignaturesCheck} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.urls.indexOf(url).toString()}
                                        onChange={e => this.toggleMetacharsOnUrlCheck(e)}
                                        checked={url.metacharsOnUrlCheck} />
                                </td>
                                <td>
                                    <FormControl
                                        id={this.props.policy.urls.indexOf(url).toString()}
                                        onChange={e => this.changeWildcardOrder(e)}
                                        size="sm"
                                        value={url.wildcardOrder} />
                                </td>
                                <td>
                                    <Button size="sm" onClick={e => this.delUrl(e)}>
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