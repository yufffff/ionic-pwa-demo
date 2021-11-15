/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface PageHome {
    }
    interface PageTabs {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {
    }
    var HTMLPageHomeElement: {
        prototype: HTMLPageHomeElement;
        new (): HTMLPageHomeElement;
    };
    interface HTMLPageTabsElement extends Components.PageTabs, HTMLStencilElement {
    }
    var HTMLPageTabsElement: {
        prototype: HTMLPageTabsElement;
        new (): HTMLPageTabsElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "page-home": HTMLPageHomeElement;
        "page-tabs": HTMLPageTabsElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface PageHome {
    }
    interface PageTabs {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "page-home": PageHome;
        "page-tabs": PageTabs;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "page-home": LocalJSX.PageHome & JSXBase.HTMLAttributes<HTMLPageHomeElement>;
            "page-tabs": LocalJSX.PageTabs & JSXBase.HTMLAttributes<HTMLPageTabsElement>;
        }
    }
}