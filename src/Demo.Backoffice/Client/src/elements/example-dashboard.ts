import { LitElement, html, customElement } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";

@customElement("exmample-dashboard")
export class ExampleDashboardElement extends UmbElementMixin(LitElement) {
    constructor() {
        super();
    }

    render() {
        return html`<h1>Hello Cruel World</h1>`;
    }
}

export default ExampleDashboardElement;

declare global {
    interface HTMLElementTagNameMap {
        "example-dashboard": ExampleDashboardElement
    }
}