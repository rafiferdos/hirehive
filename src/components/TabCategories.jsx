import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import JobCard from "./JobCard";

const TabCategories = () => {
    return (
        <Tabs>
            <div className='px-8 py-10 mx-auto container'>
                <h1 className="text-4xl font-bold text-center text-base-content my-8">Browse By Categories</h1>
                <p className="text-center md:w-5/6 mx-auto mb-8">Explore our diverse categories. Find exactly what you&apos;re looking for, from tech gadgets to home appliances.</p>
                <div className="flex items-center justify-center">
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>
                    <TabPanel>
                        <JobCard />
                    </TabPanel>
                    <TabPanel>
                        <JobCard />
                    </TabPanel>
                    <TabPanel>
                        <JobCard />
                    </TabPanel>
            </div>
        </Tabs>
    );
};

export default TabCategories;