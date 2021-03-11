import React from 'react';
import setToValue from './helpers.js';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

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
        if (policy.policy.["blocking-settings"].violations.length > 1) {
            policy.policy.["blocking-settings"].violations.splice(e.target.id, 1)
        } else {
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
            <Row>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">Violations</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.props.violations.map((violation) => (
                            <Dropdown.Item key={violation.name} id={violation.name} onClick={this.props.onClick}>{violation.title}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Row>
        )
    }
}
class Violations extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>Violation</Col>
                    <Col>Alarm</Col>
                    <Col>Block</Col>
                    <Col>Learn</Col>
                    <Col></Col>
                </Row>
                {this.props.policy.policy?.["blocking-settings"]?.violations?.map((violation) => (
                    <Row key={violation.name}>
                        <InputGroup size="sm">
                            <Col>
                                {this.props.policy.getAllViolations().find(v => v.name === violation.name)?.title}
                            </Col>
                            <Col>
                                <Form.Check
                                    id={"blocking-settings.violations[" + this.props.policy.policy["blocking-settings"].violations.indexOf(violation) + "].alarm"}
                                    checked={violation.alarm || false}
                                    onChange={e => this.props.onChange(e)}>
                                </Form.Check>
                            </Col>
                            <Col>
                                <Form.Check
                                    type="checkbox"
                                    id={"blocking-settings.violations[" + this.props.policy.policy["blocking-settings"].violations.indexOf(violation) + "].block"}
                                    checked={violation.block || false}
                                    onChange={e => this.props.onChange(e)}>
                                </Form.Check>
                            </Col>
                            <Col>
                                <Form.Check
                                    type="checkbox"
                                    id={"blocking-settings.violations[" + this.props.policy.policy["blocking-settings"].violations.indexOf(violation) + "].learn"}
                                    checked={violation.learn || false}
                                    onChange={e => this.props.onChange(e)}>
                                </Form.Check>
                            </Col>
                            <Col>
                                <Button size="sm"
                                    id={this.props.policy.policy["blocking-settings"].violations.indexOf(violation)}
                                    onClick={e => this.props.onRemove(e)}>
                                    Remove
                                </Button>
                            </Col>
                        </InputGroup>
                    </Row>
                ))
                }
            </div>
        )
    }
}