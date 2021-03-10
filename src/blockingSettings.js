import React from 'react';
import setToValue from './helpers.js';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

export default class BlockingSettings extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.addViolation = this.addViolation.bind(this);
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
    render() {
        return (
            <div>
                <h2>Blocking Settings</h2>
                <Form>
                    <ViolationsList violations={this.props.policy.getAllViolations()} onClick={this.addViolation}></ViolationsList>
                    <Violations policy={this.props.policy} onChange={this.handleChange}></Violations>
                </Form >
            </div>
        );
    }
}

class ViolationsList extends React.Component {
    render() {
        return (
            <Form.Row>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">Violations</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.props.violations.map((violation) => (
                            <Dropdown.Item key={violation.name} id={violation.name} onClick={this.props.onClick}>{violation.title}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Form.Row>
        )
    }
}
class Violations extends React.Component {
    render() {
        return (
            <div>
                <Form.Row>
                    <Col>
                        Violation
            </Col>
                    <Col>
                        Alarm
            </Col>
                    <Col>
                        Block
            </Col>
                    <Col>
                        Learn
            </Col>
                </Form.Row>
                {this.props.policy.policy?.["blocking-settings"]?.violations?.map((violation) => (
                    <Form.Row key={violation.name}>
                        <Col>
                            <InputGroup size="sm">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>{this.props.policy.getAllViolations().find(v => v.name === violation.name)?.title}</InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup size="sm">
                                <Form.Check
                                    type="checkbox"
                                    id={"blocking-settings.violations[" + this.props.policy.policy["blocking-settings"].violations.indexOf(violation) + "].alarm"}
                                    checked={violation.alarm || false}
                                    onChange={e => this.props.onChange(e)}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup size="sm">
                                <Form.Check
                                    type="checkbox"
                                    id={"blocking-settings.violations[" + this.props.policy.policy["blocking-settings"].violations.indexOf(violation) + "].block"}
                                    checked={violation.block || false}
                                    onChange={e => this.props.onChange(e)}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup size="sm">
                                <Form.Check
                                    type="checkbox"
                                    id={"blocking-settings.violations[" + this.props.policy.policy["blocking-settings"].violations.indexOf(violation) + "].learn"}
                                    checked={violation.learn || false}
                                    onChange={e => this.props.onChange(e)}
                                />
                            </InputGroup>
                        </Col>
                    </Form.Row>
                ))}
            </div>
        )
    }
}