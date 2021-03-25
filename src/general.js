import React from 'react';

import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

export default class General extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            policy: this.props.policy,
        };
    }
    changeName(e) {
        const policy = this.props.policy;
        policy.name = e.target.value;
        this.props.onChange(policy);
    }
    changeApplicationLanguage(e) {
        const policy = this.props.policy;
        policy.applicationLanguage = e.target.value;
        this.props.onChange(policy);
    }
    changeEnforcementMode(e) {
        const policy = this.props.policy;
        policy.enforcementMode = e.target.value;
        this.props.onChange(policy);
    }
    changeTemplateName(e) {
        const policy = this.props.policy;
        policy.template.name = e.target.value;
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
                        value={this.props.policy.name}
                        onChange={e => this.changeName(e)} />
                </InputGroup>
                <InputGroup size="sm">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Application Language</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        value={this.props.policy.applicationLanguage}
                        onChange={e => this.changeApplicationLanguage(e)}
                    />
                </InputGroup>
                <InputGroup size="sm">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Enforcement Mode</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        value={this.props.policy.enforcementMode}
                        onChange={e => this.changeEnforcementMode(e)}
                    />
                </InputGroup>
                <InputGroup size="sm">
                    <InputGroup.Prepend>
                        <InputGroup.Text>Template</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        value={this.props.policy?.template?.name}
                        onChange={e => this.changeTemplateName(e)}
                    />
                </InputGroup>
            </div>
        );
    }
}