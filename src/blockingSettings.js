import React from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

import setToValue from './helpers.js';

export default class BlockingSettings extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.addViolation = this.addViolation.bind(this);
        this.removeViolation = this.removeViolation.bind(this);
    }
    handleChange(e) {
        let policy = Object.assign(Object.create(Object.getPrototypeOf(this.props.policy)), this.props.policy)
        setToValue(policy.policy, e.target.id, e.target.checked)
        this.props.onChange(policy);
    }
    addViolation(e) {
        let policy = Object.assign(Object.create(Object.getPrototypeOf(this.props.policy)), this.props.policy)

        let violations = policy.policy?.["blocking-settings"]?.violations || [];
        if (!violations.find(v => v.name === e.target.id)) {
            violations.push({
                "name": e.target.id,
                "alarm": this.props.policy.getAllViolations().find(v => v.name === e.target.id).alarm || false,
                "block": this.props.policy.getAllViolations().find(v => v.name === e.target.id).block || false,
                "learn": this.props.policy.getAllViolations().find(v => v.name === e.target.id).learn || false,
            })
        }
        policy.policy["blocking-settings"] = { "violations": violations };
        this.props.onChange(policy);
    }
    removeViolation(e) {
        let policy = Object.assign(Object.create(Object.getPrototypeOf(this.props.policy)), this.props.policy)
        policy.policy.["blocking-settings"].violations.splice(e.target.id, 1)
        if (policy.policy.["blocking-settings"].violations.length === 0) {
            delete policy.policy.["blocking-settings"].violations
        }
        if (Object.keys(policy.policy.["blocking-settings"]).length === 0) {
            delete policy.policy.["blocking-settings"]
        }
        this.props.onChange(policy);
    }
    render() {
        return (
            <div>
                <h2>Blocking Settings</h2>
                <Form>
                    <ViolationsList violations={this.props.policy.getAllViolations()} onClick={this.addViolation}></ViolationsList>
                    <Violations policy={this.props.policy} onChange={this.handleChange} onRemove={this.removeViolation}></Violations>
                </Form >
            </div>
        );
    }
}

class ViolationsList extends React.Component {
    render() {
        return (
            <Dropdown className="mb-2">
                <Dropdown.Toggle id="dropdown-basic">Violations</Dropdown.Toggle>
                <Dropdown.Menu>
                    {this.props.violations.map((violation) => (
                        <Dropdown.Item key={violation.name} id={violation.name} onClick={this.props.onClick}>{violation.title}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
class Violations extends React.Component {
    render() {
        return (
            <div>
                <Table striped bordered hover size="sm" className="text-center">
                    <thead>
                        <tr>
                            <th className="text-left">Violation</th>
                            <th >Alarm</th>
                            <th>Block</th>
                            <th>Learn</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.policy.policy?.["blocking-settings"]?.violations?.map((violation) => (
                            <tr key={violation.name}>
                                <td className="text-left">
                                    {this.props.policy.getAllViolations().find(v => v.name === violation.name)?.title}
                                </td>
                                <td>
                                    <Form.Check
                                        id={"blocking-settings.violations[" + this.props.policy.policy["blocking-settings"].violations.indexOf(violation) + "].alarm"}
                                        checked={violation.alarm || false}
                                        onChange={e => this.props.onChange(e)}>
                                    </Form.Check>
                                </td>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        id={"blocking-settings.violations[" + this.props.policy.policy["blocking-settings"].violations.indexOf(violation) + "].block"}
                                        checked={violation.block || false}
                                        onChange={e => this.props.onChange(e)}>
                                    </Form.Check>
                                </td>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        id={"blocking-settings.violations[" + this.props.policy.policy["blocking-settings"].violations.indexOf(violation) + "].learn"}
                                        checked={violation.learn || false}
                                        onChange={e => this.props.onChange(e)}>
                                    </Form.Check>
                                </td>
                                <td>
                                    <Button size="sm"
                                        id={this.props.policy.policy["blocking-settings"].violations.indexOf(violation)}
                                        onClick={e => this.props.onRemove(e)}>
                                        Remove
                                        </Button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}