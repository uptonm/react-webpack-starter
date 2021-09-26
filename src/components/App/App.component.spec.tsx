import React from "react";
import {mount} from "@cypress/react";

import "@styles/external.css";
import "@styles/index.scss";

import {App} from "./App";

it("renders learn react link", () => {
	mount(<App/>);
	cy.get("h1").contains("Hello World");
});
