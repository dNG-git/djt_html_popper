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

import { applyDefaultConfig } from './rollup.default';
import pkg from './package.json'

const pkgName = pkg.name.replace(/\@.+\//, '');
const paths = { };

for (const scopedPackage of pkg.config.rollup.external_unscoped_packages) {
    paths[scopedPackage] = scopedPackage.replace(/\@.+\//, '');
}

export default applyDefaultConfig({
    inputResolveConfig: {
        extensions: [ '.js', '.json' ],
        mainFields: [ 'browser', 'main' ]
    },

    inputTsConfig: 'tsconfig.browser-es5-rollup.json',

    output: [
        {
            file: `./dist/es5/${pkgName}.js`,
            format: 'amd',
            amd: { id: pkgName },
            paths: paths,
            compact: true,
            inlineDynamicImports: true,
            interop: false,
            sourcemap: true
        }
    ]
});
