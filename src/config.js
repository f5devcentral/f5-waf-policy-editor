import React from 'react';
import General from './general.js';
import BlockingSettings from './blockingSettings.js';
import Headers from './headers.js';

export default class Config extends React.Component {
    render() {
        return (
            <div>
                { this.props.visibleComponent === "General" && <General policy={this.props.policy} onChange={this.props.onChange}></General>}
                { this.props.visibleComponent === "Blocking Settings" && <BlockingSettings policy={this.props.policy} onChange={this.props.onChange}></BlockingSettings>}
                { this.props.visibleComponent === "Headers" && <Headers policy={this.props.policy} onChange={this.props.onChange}></Headers>}
            </div >
        );
    }
}