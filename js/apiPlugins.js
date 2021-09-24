/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
    plugins: {

        DetailsPlugin: require('@mapstore/plugins/Details').default,
        DrawerMenuPlugin: require('@mapstore/plugins/DrawerMenu').default,
        FeedbackMaskPlugin: require('@mapstore/plugins/FeedbackMask').default,
        GoFullPlugin: require('@mapstore/plugins/GoFull').default,
        IdentifyPlugin: require('@mapstore/plugins/Identify').default,
        LocatePlugin: require('@mapstore/plugins/Locate').default,
        MapFooterPlugin: require('@mapstore/plugins/MapFooter').default,
        MapLoadingPlugin: require('@mapstore/plugins/MapLoading').default,
        MapPlugin: require('@mapstore/plugins/Map').default,
        OmniBarPlugin: require('@mapstore/plugins/OmniBar').default,
        SearchPlugin: require('@mapstore/plugins/Search').default,
        TOCPlugin: require('@mapstore/plugins/TOC').default,
        ToolbarPlugin: require('@mapstore/plugins/Toolbar').default,
        ZoomAllPlugin: require('@mapstore/plugins/ZoomAll').default
    },
    requires: {
        ReactSwipe: require('react-swipeable-views').default,
        SwipeHeader: require('@mapstore/components/data/identify/SwipeHeader').default
    }
};
