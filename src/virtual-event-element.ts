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
import { VirtualEventElementPreference } from './virtual-event-element-interfaces';

/**
 * The "VirtualEventElement" takes an DOM event to provide Popper's
 * virtual element API for it.
 *
 * @author    direct Netware Group
 * @copyright (C) direct Netware Group - All rights reserved
 * @package   djt-html-popper
 * @since     v1.0.0
 * @license   https://www.direct-netware.de/redirect?licenses;mpl2
 *            Mozilla Public License, v. 2.0
 */
export class VirtualEventElement<E extends Event = Event> implements VirtualElement {
    /**
     * Underlying DOM event
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    protected event: any;
    /**
     * Underlying DOM event
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    protected preference: VirtualEventElementPreference;

    /**
     * Constructor (VirtualEventElement)
     *
     * @param event DOM event
     *
     * @since v1.0.0
     */
    constructor(event: E, preference: VirtualEventElementPreference = VirtualEventElementPreference.EVENT) {
        this.event = event;
        this.preference = preference;
    }

    /**
     * popper.js.org: "contextElement" is an optional property that describes the
     * DOM context of the virtual element.
     *
     * @return DOM body element
     * @since  v1.0.0
     */
    public get contextElement() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
        return (this.event.target ? this.event.target : this.event.srcElement);
    }

    /**
     * Returns a DOMRect object providing positional information.
     *
     * @return DOMRect information
     * @since  v1.0.0
     */
    public getBoundingClientRect() {
        let _return;

        /* eslint-disable sort-keys, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
        if (this.preference === VirtualEventElementPreference.ELEMENT) {
            _return = this.getBoundingClientRectForContextElement();
        }

        if (!_return && typeof this.event.clientX == 'number') {
            _return = {
                width: 0,
                height: 0,
                top: this.event.clientY,
                left: this.event.clientX,
                right: this.event.clientY,
                bottom: this.event.clientX,
                x: this.event.clientX,
                y: this.event.clientY
            };
        }

        if (!_return && this.preference === VirtualEventElementPreference.EVENT) {
            _return = this.getBoundingClientRectForContextElement();
        }

        if (!_return && typeof this.event.view != 'undefined') {
            _return = {
                width: 0,
                height: 0,
                top: this.event.view.scrollY,
                left: this.event.view.scrollX,
                right: this.event.view.scrollY,
                bottom: this.event.view.scrollX,
                x: this.event.view.scrollX,
                y: this.event.view.scrollY
            };
        }
        /* eslint-enable sort-keys, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

        return _return;
    }

    /**
     * Returns a DOMRect object providing positional information for the context
     * element of the event.
     *
     * @return DOMRect information
     * @since  v1.0.0
     */
    protected getBoundingClientRectForContextElement() {
        let _return: DOMRect;

        const element = (this.contextElement as HTMLElement);

        if (element !== undefined && element.getBoundingClientRect) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            _return = this.contextElement.getBoundingClientRect();
        }

        return _return;
    }
}
