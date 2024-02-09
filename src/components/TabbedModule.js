import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PastAemWork from './PastAemWork';
import AEMcomponentList from './AEMcomponentList';
import PastReactWork from './PastReactWork';


function ControlledTabsExample() {
    const [key, setKey] = useState('home');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="home" title="Adobe AEM Sites">
                <PastAemWork />
            </Tab>
            <Tab eventKey="profile" title="Adobe Core Components">
                <AEMcomponentList />
            </Tab>
            <Tab eventKey="contact" title="React Sites" >
                <PastReactWork />
            </Tab>
        </Tabs>
    );
}

export default ControlledTabsExample;