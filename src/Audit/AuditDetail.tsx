import React from "react";
import {
    Nav, NavItem, NavList, NavVariants,
    PageSection,
    PageSectionVariants,
    TextContent,
    Title
} from "@patternfly/react-core";
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect, useLocation
} from "react-router-dom";
import AuditDetailOverview from "./AuditDetailOverview";
import InputData from "../InputData/InputData";


const AuditDetail = () => {
    let { path, url } = useRouteMatch();
    let location = useLocation();
    let thirdLevelNav = [
        { url: "/overview", desc: "Overview" },
        { url: "/explanation", desc: "Explanation" },
        { url: "/input-data", desc: "Input Data" },
        { url: "model-lookup", desc: "Model Lookup"}
        ];
    return (
        <>
            <PageSection variant={PageSectionVariants.light}>
                <TextContent>
                    <Title size="4xl" headingLevel="h1">ID #1008 - Decision Detail</Title>
                </TextContent>
                <Nav>
                    <NavList variant={NavVariants.tertiary}>
                        {thirdLevelNav.map((item, index) => (
                            <NavItem key={`sub-nav-${index}`} isActive={location.pathname === (url + item.url)}>
                                <Link to={url + item.url}>{item.desc}</Link>
                            </NavItem>
                            )
                        )}
                    </NavList>
                </Nav>
            </PageSection>
            <Switch>

                <Route path={`${path}/overview`}>
                    <AuditDetailOverview/>
                </Route>
                <Route path={`${path}/input-data`}>
                    <InputData />
                </Route>
                <Route render={() => <Redirect to={`${location.pathname}/overview`}/>}/>
            </Switch>

        </>
    )

};

export default AuditDetail;