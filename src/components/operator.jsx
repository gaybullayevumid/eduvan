import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Table from './elements/table';
import AddStudent from "./elements/add_student";
import regTable from './elements/regTable'


export default function Static() {
    return (
        <>
            <section className="operator">
                <article className="add_student">
                    <AddStudent />
                </article>
                <article className="new_groups_list">
                    <Tabs>
                        <TabList>
                            <Tab>
                                <span><img src="img/svg/savodxonlik.svg" alt="" /></span>
                                Savodxonlik
                            </Tab>
                            <Tab>
                                <span><img src="img/svg/dev.svg" alt="" /></span>
                                Frontend
                            </Tab>
                            <Tab>
                                <span><img src="img/svg/layers.svg" alt="" /></span>
                                Backend
                            </Tab>
                            <Tab>
                                <span><img src="img/svg/mobile.svg" alt="" /></span>
                                Mobil
                            </Tab>
                            <Tab>
                                <span><img src="img/svg/design.svg" alt="" /></span>
                                Grafik Dizayn
                            </Tab>
                            <Tab>
                                <span><img src="img/svg/3d.svg" alt="" /></span>
                                3d Max
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <Table />
                        </TabPanel>
                        <TabPanel>
                            <Table />
                        </TabPanel>
                        <TabPanel>
                            <Table />
                        </TabPanel>
                        <TabPanel>
                            <Table />
                        </TabPanel>
                        <TabPanel>
                            <Table />
                        </TabPanel>
                        <TabPanel>
                            <Table />
                        </TabPanel>
                    </Tabs>
                </article>
            </section >
        </>
    )
}