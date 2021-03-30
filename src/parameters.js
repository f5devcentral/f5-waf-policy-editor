import React from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { Parameter } from 'f5-waf-policy';

export default class Parameters extends React.Component {
    addParameter(e) {
        const policy = this.props.policy;
        let parameter = new Parameter();
        policy.parameters.push(parameter);
        this.props.onChange(policy);
    }
    render() {
        return (
            <div>
                <h2>Parameters</h2>
                <Button size="sm" className="mb-2" onClick={e => this.addParameter(e)}>
                    Add Parameter
                </Button>
                <ParametersList
                    policy={this.props.policy}
                    onChange={this.props.onChange} />
            </div>
        );
    }
}

class ParametersList extends React.Component {
    changeName(e) {
        const policy = this.props.policy;
        policy.parameters[e.target.id].name = e.target.value;
        this.props.onChange(policy);
    }
    changeType(e) {
        const policy = this.props.policy;
        policy.parameters[e.target.id].type = e.target.text;
        this.props.onChange(policy);
    }
    changeLevel(e) {
        const policy = this.props.policy;
        policy.parameters[e.target.id].level = e.target.text;
        this.props.onChange(policy);
    }
    changeParameterLocation(e) {
        const policy = this.props.policy;
        policy.parameters[e.target.id].parameterLocation = e.target.text;
        this.props.onChange(policy);
    }
    changeValueType(e) {
        const policy = this.props.policy;
        policy.parameters[e.target.id].valueType = e.target.text;
        this.props.onChange(policy);
    }
    toggleAllowEmptyValue(e) {
        const policy = this.props.policy;
        policy.parameters[e.target.id].allowEmptyValue = !policy.parameters[e.target.id].allowEmptyValue;
        this.props.onChange(policy);
    }
    toggleCheckMaxValueLength(e) {
        const policy = this.props.policy;
        policy.parameters[e.target.id].checkMaxValueLength = !policy.parameters[e.target.id].checkMaxValueLength;
        this.props.onChange(policy);
    }
    toggleAllowRepeatedParameterName(e) {
        const policy = this.props.policy;
        policy.parameters[e.target.id].allowRepeatedParameterName = !policy.parameters[e.target.id].allowRepeatedParameterName;
        this.props.onChange(policy);
    }
    toggleSensitiveParameter(e) {
        const policy = this.props.policy;
        policy.parameters[e.target.id].sensitiveParameter = !policy.parameters[e.target.id].sensitiveParameter;
        this.props.onChange(policy);
    }
    toggleAttackSignaturesCheck(e) {
        const policy = this.props.policy;
        policy.parameters[e.target.id].attackSignaturesCheck = !policy.parameters[e.target.id].attackSignaturesCheck;
        this.props.onChange(policy);
    }
    toggleCheckMetachars(e) {
        const policy = this.props.policy;
        policy.parameters[e.target.id].checkMetachars = !policy.parameters[e.target.id].checkMetachars;
        this.props.onChange(policy);
    }
    toggleMetacharsOnParameterValueCheck(e) {
        const policy = this.props.policy;
        policy.parameters[e.target.id].metacharsOnParameterValueCheck = !policy.parameters[e.target.id].metacharsOnParameterValueCheck;
        this.props.onChange(policy);
    }
    delParameter(e) {
        const policy = this.props.policy;
        policy.parameters.splice(e.target.id, 1);
        this.props.onChange(policy);
    }
    delAllParameters(e) {
        const policy = this.props.policy;
        policy.parameters = [];
        this.props.onChange(policy);
    }
    render() {
        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Level</th>
                            <th>Location</th>
                            <th>Value type</th>
                            <th>Allow Empty Value</th>
                            <th>Check Max Value Length</th>
                            <th>Allow Repeated</th>
                            <th>Sensitive</th>
                            <th>Check Attack Signatures</th>
                            <th>Check Metachars</th>
                            <th>Check Metachars on Value</th>
                            <th>
                                <Button size="sm" onClick={e => this.delAllParameters(e)}>
                                    Remove
                                </Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.policy?.parameters?.map((parameter, index) => (
                            <tr key={index} className="text-center">
                                <td>
                                    <FormControl
                                        id={this.props.policy.parameters.indexOf(parameter).toString()}
                                        onChange={e => this.changeName(e)}
                                        size="sm"
                                        value={parameter.name} />
                                </td>
                                <td>
                                    <Dropdown as={ButtonGroup} size="sm">
                                        <Dropdown.Toggle>{parameter.type}</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                id={this.props.policy.parameters.indexOf(parameter).toString()}
                                                onClick={e => this.changeType(e)}>
                                                explicit
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                id={this.props.policy.parameters.indexOf(parameter).toString()}
                                                onClick={e => this.changeType(e)}>
                                                wildcard
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                                <td>
                                    <Dropdown as={ButtonGroup} size="sm">
                                        <Dropdown.Toggle>{parameter.level}</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                id={this.props.policy.parameters.indexOf(parameter).toString()}
                                                onClick={e => this.changeLevel(e)}>
                                                global
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                                <td>
                                    <Dropdown as={ButtonGroup} size="sm">
                                        <Dropdown.Toggle>{parameter.parameterLocation}</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                id={this.props.policy.parameters.indexOf(parameter).toString()}
                                                onClick={e => this.changeParameterLocation(e)}>
                                                any
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                                <td>
                                    <Dropdown as={ButtonGroup} size="sm">
                                        <Dropdown.Toggle>{parameter.valueType}</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item
                                                id={this.props.policy.parameters.indexOf(parameter).toString()}
                                                onClick={e => this.changeValueType(e)}>
                                                auto-detect
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.parameters.indexOf(parameter).toString()}
                                        onChange={e => this.toggleAllowEmptyValue(e)}
                                        checked={parameter.allowEmptyValue} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.parameters.indexOf(parameter).toString()}
                                        onChange={e => this.toggleCheckMaxValueLength(e)}
                                        checked={parameter.checkMaxValueLength} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.parameters.indexOf(parameter).toString()}
                                        onChange={e => this.toggleAllowRepeatedParameterName(e)}
                                        checked={parameter.allowRepeatedParameterName} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.parameters.indexOf(parameter).toString()}
                                        onChange={e => this.toggleSensitiveParameter(e)}
                                        checked={parameter.sensitiveParameter} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.parameters.indexOf(parameter).toString()}
                                        onChange={e => this.toggleAttackSignaturesCheck(e)}
                                        checked={parameter.attackSignaturesCheck} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.parameters.indexOf(parameter).toString()}
                                        onChange={e => this.toggleCheckMetachars(e)}
                                        checked={parameter.checkMetachars} />
                                </td>
                                <td>
                                    <Form.Check
                                        id={this.props.policy.parameters.indexOf(parameter).toString()}
                                        onChange={e => this.toggleMetacharsOnParameterValueCheck(e)}
                                        checked={parameter.metacharsOnParameterValueCheck} />
                                </td>
                                <td>
                                    <Button size="sm" onClick={e => this.delParameter(e)}>
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