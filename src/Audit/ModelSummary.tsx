import React from "react";
import {Card, CardBody, CardHeader, Title} from "@patternfly/react-core";
import ModelInspector from "./ModelInspector";
const modelInfo = {
      version: 'v4.0',
      history: [
        'v3.0',
        'v2.0',
        'v1.0'
      ]
};
const ModelSummary = () => {
    return (
        <Card style={{height: "100%"}}>
            <CardHeader>
                <Title headingLevel="h3" size="xl">
                    Model Lookup
                </Title>
            </CardHeader>
            <CardBody className="decision">
                <span>Mortgage Model v5.0</span> ~ <ModelInspector model={modelInfo}/>
            </CardBody>
        </Card>
    )
};

export default ModelSummary;