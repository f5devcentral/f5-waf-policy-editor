import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Menu from './menu.js';
import Config from './config.js';
import { Policy, isValidPolicy } from 'f5-waf-policy';
import { isJSON } from './helpers.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      policy: new Policy(),
      textArea: JSON.stringify(new Policy().toPolicy(), undefined, 4),
      visibleComponent: "General",
      isValid: new Policy().isValid()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleChange(policy) {
    this.setState((state) => ({
      isValid: isValidPolicy(policy.toPolicy()),
      policy: policy,
      textArea: JSON.stringify(policy.toPolicy(), undefined, 4)
    }));
  }

  handleTextChange(e) {
    this.setState({
      textArea: e.target.value
    });
    if (isJSON(e.target.value) && isValidPolicy(JSON.parse(e.target.value))) {
      const policy = new Policy(JSON.parse(e.target.value));
      this.setState({
        isValid: true,
        policy: policy,
        textArea: JSON.stringify(policy.toPolicy(), undefined, 4)
      });
    } else {
      this.setState({ isValid: false });
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
              <h1>NGINX App Protect Policy Editor</h1>
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
                style={{ color: (this.state.isValid) ? "green" : "red" }} />
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