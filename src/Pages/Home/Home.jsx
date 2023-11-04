import { useEffect, useState } from "react";
import Footer from "../../SharedComponents/Footer/Footer";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Home = () => {
    const [categories, setCategories] = useState([])
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        fetch("/category.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(tabIndex);
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-green-800 mb-12 max-w-6xl mx-auto text-center mt-12">Most demanding job categories.</h1>
                <div className="max-w-6xl mx-auto mb-16">
                    <Tabs>
                        <div className="">
                            <TabList>
                                <div className="grid grid-cols-5 gap-5 ">
                                    {categories?.map((category, index) => (
                                        <Tab
                                            key={category.id}
                                            style={{
                                                backgroundColor: index === tabIndex ? "green" : "",
                                                color: index === tabIndex ? "white" : "green",
                                              }}
                                            onClick={() => setTabIndex(index)}
                                        >
                                            <div className="flex flex-col items-center justify-center space-y-5 p-5">
                                                <img src={category.img_tag} alt="" />
                                                <p className="font-bold  text-2xl">{category.title}</p>
                                            </div>
                                        </Tab>
                                    ))}
                                </div>
                            </TabList>
                        </div>

                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;