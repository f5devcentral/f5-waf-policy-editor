import React from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

export default class BlockingSettings extends React.Component {
    render() {
        return (
            <div>
                <h2>Blocking Settings</h2>
                <ViolationsList
                    policy={this.props.policy}
                    onChange={this.props.onChange}>
                </ViolationsList>
                <Violations
                    policy={this.props.policy}
                    onChange={this.props.onChange}>
                </Violations>
            </div>
        );
    }
}

class ViolationsList extends React.Component {
    addViolation(e) {
        const policy = this.props.policy;
        const violation = policy.getAllViolations().find(v => v.name === e.target.id);
        policy.blockingSettings.violations.push(violation);
        this.props.onChange(policy);
    }
    render() {
        return (
            <Dropdown className="mb-2">
                <Dropdown.Toggle id="dropdown-basic">Violations</Dropdown.Toggle>
                <Dropdown.Menu>
                    {this.props.policy.getAllViolations().map((violation) => (
                        <Dropdown.Item key={violation.name} id={violation.name} onClick={e => this.addViolation(e)}>{violation.title}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}
class Violations extends React.Component {
    toggleAlarm(e) {
        const policy = this.props.policy;
        policy.blockingSettings.violations[e.target.id].alarm = !policy.blockingSettings.violations[e.target.id].alarm
        this.props.onChange(policy);
    }
    toggleBlock(e) {
        const policy = this.props.policy;
        policy.blockingSettings.violations[e.target.id].block = !policy.blockingSettings.violations[e.target.id].block
        this.props.onChange(policy);
    }
    toggleLearn(e) {
        const policy = this.props.policy;
        policy.blockingSettings.violations[e.target.id].learn = !policy.blockingSettings.violations[e.target.id].learn
        this.props.onChange(policy);
    }
    delViolation(e) {
        const policy = this.props.policy;
        policy.blockingSettings.violations.splice(e.target.id, 1)
        this.props.onChange(policy);
    }
    delAllViolations(e) {
        const policy = this.props.policy;
        policy.blockingSettings.violations = [];
        this.props.onChange(policy);
    }
    render() {
        return (
            <div>
                <Table striped bordered hover size="sm" className="text-center">
                    <thead>
                        <tr>
                            <th className="text-left">Violation</th>
                            <th >Alarm</th>
                            <th>Block</th>
                            <th>
                                <Button size="sm" onClick={e => this.delAllViolations(e)}>
                                    Remove
                                </Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.policy.blockingSettings.violations?.map((violation, index) => (
                            <tr key={violation.name}>
                                <td className="text-left">
                                    {violation.title}
                                </td>
                                <td>
                                    <Form.Check
                                        id={index.toString()}
                                        checked={violation.alarm || false}
                                        onChange={e => this.toggleAlarm(e)}>
                                    </Form.Check>
                                </td>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        id={index.toString()}
                                        checked={violation.block || false}
                                        onChange={e => this.toggleBlock(e)}>
                                    </Form.Check>
                                </td>
                                <td>
                                    <Button size="sm"
                                        id={index.toString()}
                                        onClick={e => this.delViolation(e)}>
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