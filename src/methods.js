import React from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import FormControl from 'react-bootstrap/FormControl';

import { Method } from 'f5-waf-policy';

export default class Methods extends React.Component {
    addMethod(e) {
        const policy = this.props.policy;
        const method = new Method();
        policy.methods.push(method);
        this.props.onChange(policy);
    }
    render() {
        return (
            <div>
                <h2>Methods</h2>
                <Button size="sm" className="mb-2" onClick={e => this.addMethod(e)}>
                    Add Method
                </Button>
                <MethodsList
                    policy={this.props.policy}
                    onChange={this.props.onChange} />
            </div>
        );
    }
}

class MethodsList extends React.Component {
    changeName(e) {
        const policy = this.props.policy;
        policy.methods[e.target.id].name = e.target.value;
        this.props.onChange(policy);
    }
    delMethod(e) {
        const policy = this.props.policy;
        policy.methods.splice(e.target.id, 1);
        this.props.onChange(policy);
    }
    delAllMethods(e) {
        const policy = this.props.policy;
        policy.methods = [];
        this.props.onChange(policy);
    }
    render() {
        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Method Name</th>
                            <th className="text-center">
                                <Button size="sm" onClick={e => this.delAllMethods(e)}>
                                    Remove
                                </Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.policy?.methods?.map((method, index) => (
                            <tr key={index} className="text-center">
                                <td>
                                    <FormControl
                                        id={this.props.policy.methods.indexOf(method).toString()}
                                        onChange={e => this.changeName(e)}
                                        size="sm"
                                        value={method.name} />
                                </td>
                                <td>
                                    <Button size="sm" onClick={e => this.delMethod(e)}>
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