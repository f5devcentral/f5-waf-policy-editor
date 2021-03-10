import React from 'react';
import setToValue from './helpers.js';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

export default class General extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            policy: this.props.policy,
        };
    }
    handleChange(e) {
        let policy = Object.assign(Object.create(Object.getPrototypeOf(this.props.policy)), this.props.policy)
        setToValue(policy.policy, e.target.id, e.target.value);
        this.props.onChange(policy);
    }
    render() {
        return (
            <div>
                <h2>General Settings</h2>
                <InputGroup size="sm">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Policy Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="text"
                        id="name"
                        value={this.props.policy.policy.name || ""}
                        onChange={e => this.handleChange(e)} />
                </InputGroup>
                <InputGroup size="sm">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Application Language</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        id="applicationLanguage"
                        value={this.props.policy.policy.applicationLanguage || ""}
                        onChange={e => this.handleChange(e)}
                    />
                </InputGroup>
                <InputGroup size="sm">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Enforcement Mode</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        id="enforcementMode"
                        value={this.props.policy.policy.enforcementMode || ""}
                        onChange={e => this.handleChange(e)}
                    />
                </InputGroup>
                <InputGroup size="sm">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Template</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        id="template.name"
                        value={this.props.policy.policy?.template?.name || ""}
                        onChange={e => this.handleChange(e)}
                    />
                </InputGroup>
            </div>
        );
    }
}