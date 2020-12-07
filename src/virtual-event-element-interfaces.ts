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

/**
 * The "VirtualEventElementPreference" defines the behavior which positional
 * information to priorize.
 *
 * @since v1.1.0
 */
export enum VirtualEventElementPreference {
    /**
     * Prefer the underlying DOM element for positioning
     */
    ELEMENT = 0,
    /**
     * Prefer the underlying DOM event coordinates for positioning
     */
    EVENT = 1
}
