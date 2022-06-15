import React, { useState } from 'react';
import { Card, CardHeader, Col, DropdownMenu, DropdownToggle, Dropdown, DropdownItem, CardBody } from 'reactstrap';

//Import Icons
import FeatherIcon from "feather-icons-react";

import UsersByDeviceCharts from './UsersByDeviceCharts';

const UsersByDevice = () => {
    const [isUserDropdown, setUserDropdown] = useState(false);
    const toggleDropdown = () => setUserDropdown(!isUserDropdown);

    return (
        <React.Fragment>
            <Col xl={4}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Users by Device</h4>
                        <div className="flex-shrink-0">
                            <Dropdown className="card-header-dropdown" isOpen={isUserDropdown} toggle={toggleDropdown} direction="start">
                                <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                                    <span className="text-muted fs-16"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end" >
                                    <DropdownItem>Today</DropdownItem>
                                    <DropdownItem>Last Week</DropdownItem>
                                    <DropdownItem>Last Month</DropdownItem>
                                    <DropdownItem>Current Year</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <div dir="ltr">
                            <UsersByDeviceCharts dataColors='["--vz-primary", "--vz-warning", "--vz-info"]' />
                        </div>

                        <div className="table-responsive mt-3">
                            <table className="table table-borderless table-sm table-centered align-middle table-nowrap mb-0">
                                <tbody className="border-0">
                                    <tr>
                                        <td><h4 className="text-truncate fs-14 mb-0"><i className="ri-stop-fill align-middle fs-18 text-primary me-2"></i>Desktop Users</h4></td>
                                        <td><p className="text-muted mb-0">
                                            <FeatherIcon
                                                icon="users"
                                                className="me-2 icon-sm"
                                            />
                                            78.56k</p></td>
                                        <td className="text-end"><p className="text-success fw-medium fs-13 mb-0"><i className="ri-arrow-up-s-fill fs-5 align-middle"></i>2.08%</p></td>
                                    </tr>
                                    <tr>
                                        <td><h4 className="text-truncate fs-14 mb-0"><i className="ri-stop-fill align-middle fs-18 text-warning me-2"></i>Mobile Users</h4></td>
                                        <td><p className="text-muted mb-0">
                                            <FeatherIcon
                                                icon="users"
                                                className="me-2 icon-sm"
                                            />
                                            105.02k</p></td>
                                        <td className="text-end"><p className="text-danger fw-medium fs-13 mb-0"><i className="ri-arrow-down-s-fill fs-5 align-middle"></i>10.52%</p></td>
                                    </tr>
                                    <tr>
                                        <td><h4 className="text-truncate fs-14 mb-0"><i className="ri-stop-fill align-middle fs-18 text-info me-2"></i>Tablet Users</h4></td>
                                        <td><p className="text-muted mb-0">
                                            <FeatherIcon
                                                icon="users"
                                                className="me-2 icon-sm"
                                            />
                                            42.89k</p></td>
                                        <td className="text-end"><p className="text-danger fw-medium fs-13 mb-0"><i className="ri-arrow-down-s-fill fs-5 align-middle"></i>7.36%</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default UsersByDevice;