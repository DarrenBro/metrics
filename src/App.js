import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import './App.css';

class App extends Component {
    render() {

        const options = ['Invictus', 'Telsa', 'Sigma', 'Polaris'];
        const defaultOption = options[0];

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to the LMB Metrics Dashboard</h1>
                </header>
                <p className="App-intro">
                    Please select a team below for further information.
                </p>

                <p><Dropdown options={options} onChange={this._onSelect} value="LMB Teams" /></p>

                <div className="flex-container">
                    <div>Code Coverage
                        <span className="small-text">98%</span>
                    </div>
                    <div>Security
                        <span className="small-text">No Security Issues</span>
                    </div>
                    <div>Bugs
                        <span className="small-text">7 Critical Items</span>
                    </div>
                    <div>New Relic
                        <span className="small-text">0.114% Error Rate</span>
                    </div>
                    <div>AWS Instances
                        <span className="small-text">67 EC2 Instances</span>
                    </div>
                    <div>Cost Explorer
                        <span className="small-text">Admin Only</span>
                    </div>
                    <div>Performance & Monitoring
                        <span className="small-text">Testing Results</span>
                    </div>
                    <div>System Health
                        <span className="small-text">No current issues</span>
                    </div>
                    <div>LMB Teams
                        <span className="small-text">Units of each business area</span>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
