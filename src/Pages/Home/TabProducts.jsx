import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabProducts = () => {
  return (
    <div className="bg-BgPrimary h-96">
      <Tabs>
        <TabList>
          <Tab>On Site Job</Tab>
          <Tab>Remote Job</Tab>
          <Tab>Hybrid</Tab>
          <Tab>Part Time</Tab>
        </TabList>

        <TabPanel>
          <h2>On Site Job</h2>
        </TabPanel>
        <TabPanel>
          <h2>Remote Job</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hybrid</h2>
        </TabPanel>
        <TabPanel>
          <h2>Part Time</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabProducts;
