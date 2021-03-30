import React from 'react';
import General from './general.js';
import BlockingSettings from './blockingSettings.js';
import Methods from './methods.js';
import Urls from './urls.js';
import Filetypes from './filetypes.js';
import Headers from './headers.js';
import Parameters from './parameters.js';


export default class Config extends React.Component {
    render() {
        return (
            <div>
                { this.props.visibleComponent === "General" && <General policy={this.props.policy} onChange={this.props.onChange}></General>}
                { this.props.visibleComponent === "Blocking Settings" && <BlockingSettings policy={this.props.policy} onChange={this.props.onChange}></BlockingSettings>}
                { this.props.visibleComponent === "Methods" && <Methods policy={this.props.policy} onChange={this.props.onChange}></Methods>}
                { this.props.visibleComponent === "URLs" && <Urls policy={this.props.policy} onChange={this.props.onChange}></Urls>}
                { this.props.visibleComponent === "Filetypes" && <Filetypes policy={this.props.policy} onChange={this.props.onChange}></Filetypes>}
                { this.props.visibleComponent === "Headers" && <Headers policy={this.props.policy} onChange={this.props.onChange}></Headers>}
                { this.props.visibleComponent === "Parameters" && <Parameters policy={this.props.policy} onChange={this.props.onChange}></Parameters>}
                { this.props.visibleComponent === "Signatures" && <div><h2>Signatures</h2><h3>TBD</h3></div>}
                { this.props.visibleComponent === "Bot Defense" && <div><h2>Bot Defense</h2><h3>TBD</h3></div>}
            </div >
        );
    }
}