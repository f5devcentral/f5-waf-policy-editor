import React from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

export default class BlockingSettings extends React.Component {
    constructor(props) {
        super(props);
        this.toggleAlarm = this.toggleAlarm.bind(this);
        this.toggleBlock = this.toggleBlock.bind(this);
        this.toggleLearn = this.toggleLearn.bind(this);
        this.addViolation = this.addViolation.bind(this);
        this.delViolation = this.delViolation.bind(this);
    }
    toggleAlarm(e) {
        const policy = this.props.policy;
        policy.policy.blockingSettings.violations.violations[e.target.id].alarm = !policy.policy.blockingSettings.violations.violations[e.target.id].alarm
        this.props.onChange(policy);
    }
    toggleBlock(e) {
        const policy = this.props.policy;
        policy.policy.blockingSettings.violations.violations[e.target.id].block = !policy.policy.blockingSettings.violations.violations[e.target.id].block
        this.props.onChange(policy);
    }
    toggleLearn(e) {
        const policy = this.props.policy;
        policy.policy.blockingSettings.violations.violations[e.target.id].learn = !policy.policy.blockingSettings.violations.violations[e.target.id].learn
        this.props.onChange(policy);
    }
    addViolation(e) {
        const policy = this.props.policy;
        const violation = policy.getAllViolations().find(v => v.name === e.target.id);
        policy.policy.blockingSettings.violations.add(violation);
        this.props.onChange(policy);
    }
    delViolation(e) {
        const policy = this.props.policy;
        policy.policy.blockingSettings.violations.del(e.target.id)
        this.props.onChange(policy);
    }
    render() {
        return (
            <div>
                <h2>Blocking Settings</h2>
                <ViolationsList
                    violations={this.props.policy.getAllViolations()}
                    onClick={this.addViolation}>
                </ViolationsList>
                <Violations
                    policy={this.props.policy}
                    toggleAlarm={this.toggleAlarm}
                    toggleBlock={this.toggleBlock}
                    toggleLearn={this.toggleLearn}
                    delViolation={this.delViolation}>
                </Violations>
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
                        {this.props.policy.policy.blockingSettings.violations.violations?.map((violation, index) => (
                            <tr key={violation.name}>
                                <td className="text-left">
                                    {violation.title}
                                </td>
                                <td>
                                    <Form.Check
                                        id={index.toString()}
                                        checked={violation.alarm || false}
                                        onChange={e => this.props.toggleAlarm(e)}>
                                    </Form.Check>
                                </td>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        id={index.toString()}
                                        checked={violation.block || false}
                                        onChange={e => this.props.toggleBlock(e)}>
                                    </Form.Check>
                                </td>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        id={index.toString()}
                                        checked={violation.learn || false}
                                        onChange={e => this.props.toggleLearn(e)}>
                                    </Form.Check>
                                </td>
                                <td>
                                    <Button size="sm"
                                        id={index.toString()}
                                        onClick={e => this.props.delViolation(e)}>
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