/**
 * direct JavaScript Toolbox
 * All-in-one toolbox to provide more reusable JavaScript features
 *
 * (C) direct Netware Group - All rights reserved
 * https://www.direct-netware.de/redirect?djt;html;popper
 *
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/.
 *
 * https://www.direct-netware.de/redirect?licenses;mpl2
 *
 * @license Mozilla Public License, v. 2.0
 */

import { VirtualBorder } from './virtual-border-element-interfaces';
import { VirtualElement } from '@popperjs/core';

/**
 * The "VirtualBorderElement" takes an DOM source element to provide Popper's
 * virtual element position at the given border position.
 *
 * @author    direct Netware Group
 * @copyright (C) direct Netware Group - All rights reserved
 * @package   djt-html-popper
 * @since     v1.1.0
 * @license   https://www.direct-netware.de/redirect?licenses;mpl2
 *            Mozilla Public License, v. 2.0
 */
export class VirtualBorderElement implements VirtualElement {
    /**
     * Source DOM element
     */
    protected element: HTMLElement;
    /**
     * Corner to position the virtual element at
     */
    protected position: VirtualBorder;

    /**
     * Constructor (VirtualBorderElement)
     *
     * @param event DOM event
     *
     * @since v1.1.0
     */
    constructor(element: HTMLElement, position: VirtualBorder = VirtualBorder.TOP) {
        this.element = element;
        this.position = position;
    }

    /**
     * popper.js.org: "contextElement" is an optional property that describes the
     * DOM context of the virtual element.
     *
     * @return DOM body element
     * @since  v1.1.0
     */
    public get contextElement() {
        return this.element;
    }

    /**
     * Returns a DOMRect object providing positional information.
     *
     * @return DOMRect information
     * @since  v1.1.0
     */
    public getBoundingClientRect() {
        let _return;

        /* eslint-disable sort-keys */
        if (this.element.getBoundingClientRect) {
            const clientRect = this.element.getBoundingClientRect();

            _return = {
                width: clientRect.width,
                height: clientRect.height,
                top: clientRect.top,
                left: clientRect.left,
                right: clientRect.right,
                bottom: clientRect.bottom,
                x: clientRect.x,
                y: clientRect.y
            };
        } else {
            _return = {
                width: this.element.clientWidth,
                height: this.element.clientHeight,
                top: this.element.clientTop,
                left: this.element.clientLeft,
                right: this.element.clientTop,
                bottom: this.element.clientLeft,
                x: this.element.clientLeft,
                y: this.element.clientTop
            };
        }
        /* eslint-enable sort-keys */

        switch (this.position) {
            case VirtualBorder.TOP:
                _return.bottom = _return.top;
                _return.height = 0;
                break;
            case VirtualBorder.LEFT:
                _return.right = _return.left;
                _return.width = 0;
                break;
            case VirtualBorder.RIGHT:
                _return.left = _return.right;
                _return.x = _return.right;

                _return.width = 0;
                break;
            case VirtualBorder.BOTTOM:
                _return.top = _return.bottom;
                _return.y = _return.bottom;

                _return.height = 0;
                break;
        }

        return _return as DOMRect;
    }
}
