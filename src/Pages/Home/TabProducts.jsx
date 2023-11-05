import { useState } from "react";
import { TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabProducts = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleAllJobs = () => {
    console.log("HHHH");
  };

  return (
    <div className="bg-BgPrimary h-96">
      <Tabs>
        <TabList>
          <Tabs>Onsite</Tabs>
          <Tabs>Remote</Tabs>
          <Tabs>hybrid</Tabs>
          <Tabs>Part Time</Tabs>
        </TabList>

        <TabPanel>
          <h1>Tab Tab</h1>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabProducts;
