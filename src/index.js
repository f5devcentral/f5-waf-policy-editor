import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Menu from './menu.js';
import Config from './config.js';
import Policy from 'f5-waf-policy';
import { isJSON } from './helpers.js';

const defaultPolicy = {
  "policy": {
    "name": "policy_name",
    "template": { "name": "POLICY_TEMPLATE_NGINX_BASE" },
    "applicationLanguage": "utf-8",
    "enforcementMode": "blocking",
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      policy: new Policy(defaultPolicy),
      textArea: JSON.stringify(new Policy(defaultPolicy), undefined, 4),
      visibleComponent: "General",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleChange(policy) {
    this.setState((state) => ({
      policy: new Policy(policy),
      textArea: JSON.stringify(policy.toPolicy(), undefined, 4)
    }));
  }

  handleTextChange(e) {
    this.setState(() => {
      return { textArea: e.target.value };
    });
    if (isJSON(e.target.value)) {
      this.setState(() => {
        return { policy: new Policy(JSON.parse(e.target.value)) };
      });
    }
  }

  handleMenuClick(itemName) {
    this.setState(() => {
      return { visibleComponent: itemName };
    });
  }

  render() {
    return (
      <div className="app">
        <Container>
          <Row>
            <Col>
              <h1>NGINX App Protect Policy Configurator</h1>
            </Col>
          </Row>
          <Row>
            <Col md="auto">
              <Menu onClick={this.handleMenuClick} activeKey={this.state.visibleComponent}></Menu>
            </Col>
            <Col>
              <Config policy={this.state.policy} onChange={this.handleChange} visibleComponent={this.state.visibleComponent}></Config>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormControl as="textarea"
                value={this.state.textArea}
                rows={20} cols={60}
                onChange={e => this.handleTextChange(e)}
                style={{ color: (this.state.policy.isValid()) ? "green" : "red" }} />
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);