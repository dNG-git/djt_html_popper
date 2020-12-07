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

import { VirtualElement } from '@popperjs/core';

/**
 * The "VirtualViewportElement" is a Popper's virtual element at the top, left
 * corner of the viewport.
 *
 * @author    direct Netware Group
 * @copyright (C) direct Netware Group - All rights reserved
 * @package   djt-html-popper
 * @since     v1.0.0
 * @license   https://www.direct-netware.de/redirect?licenses;mpl2
 *            Mozilla Public License, v. 2.0
 */
export class VirtualViewportElement implements VirtualElement {
    /**
     * popper.js.org: "contextElement" is an optional property that describes the
     * DOM context of the virtual element.
     *
     * @return DOM body element
     * @since  v1.0.0
     */
    public get contextElement() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
        return document.body;
    }

    /**
     * Returns a DOMRect object providing positional information.
     *
     * @return DOMRect information
     * @since  v1.0.0
     */
    public getBoundingClientRect() {
        return {
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            x: 0,
            y: 0
        };
    }
}
