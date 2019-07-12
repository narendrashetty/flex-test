import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";
import * as Flex from "@twilio/flex-ui";
import App from "./App";
import { Input } from "@material-ui/core";


const mountNode = document.getElementById("root");

function Test() {
    return (
        <div>
            <Input />
        </div>
    );
}

window.onload = () => {
    const predefinedConfig = window.appConfig || {};

    const configuration = {
        ...predefinedConfig,
    };

    Flex.CRMContainer.Content.add(<Test key="das" />);

    Flex.progress(mountNode)
        .provideLoginInfo(configuration, mountNode)
        .then(() => Flex.Manager.create(configuration))
        .then(manager => renderApp(manager))
        .catch(error => handleError(error));
};

function renderApp(manager) {
    ReactDOM.render(<App manager={manager} />, mountNode);
}

function handleError(error) {
    console.error("Failed to initialize Flex", error);
}
