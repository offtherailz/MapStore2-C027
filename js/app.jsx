/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const ReactDOM = require('react-dom');
const {connect} = require('react-redux');
const {createSelector} = require('reselect');
const LocaleUtils = require('../MapStore2/web/client/utils/LocaleUtils');

const startApp = () => {
    const ConfigUtils = require('../MapStore2/web/client/utils/ConfigUtils');
    const {loadMaps} = require('../MapStore2/web/client/actions/maps');
    const {loadVersion} = require('../MapStore2/web/client/actions/version');
    const {versionSelector} = require('../MapStore2/web/client/selectors/version');
    const {loadAfterThemeSelector} = require('../MapStore2/web/client/selectors/config');
    const {updateMapLayoutEpic} = require('../MapStore2/web/client/epics/maplayout');
    const {setSupportedLocales} = require('../MapStore2/web/client/epics/localconfig');
    const StandardApp = require('../MapStore2/web/client/components/app/StandardApp');

    const {pages, pluginsDef, initialState, storeOpts, appEpics = {}} = require('./appConfig');

    const routerSelector = createSelector(state =>
        state.locale,
        versionSelector,
        loadAfterThemeSelector,
        (locale, version, loadAfterTheme) => ({
        locale: locale || {},
        pages,
        version,
        loadAfterTheme,
        themeCfg: {
            theme: "firenze"
        }
    }));

    const StandardRouter = connect(routerSelector)(require('../MapStore2/web/client/components/app/StandardRouter'));

    const appStore = require('../MapStore2/web/client/stores/StandardStore').bind(null, initialState, {
        maptype: require('../MapStore2/web/client/reducers/maptype'),
        maps: require('../MapStore2/web/client/reducers/maps'),
        maplayout: require('../MapStore2/web/client/reducers/maplayout')
    }, {...appEpics, updateMapLayoutEpic, setSupportedLocales});

    const initialActions = [
        () => loadMaps(ConfigUtils.getDefaults().geoStoreUrl, ConfigUtils.getDefaults().initialMapFilter || "*"),
        loadVersion
    ];

    const appConfig = {
        storeOpts,
        appEpics,
        appStore,
        pluginsDef,
        initialActions,
        appComponent: StandardRouter,
        printingEnabled: true
    };

    ReactDOM.render(
        <StandardApp {...appConfig}/>,
        document.getElementById('container')
    );
};

if (!global.Intl ) {
    // Ensure Intl is loaded, then call the given callback
    LocaleUtils.ensureIntl(startApp);
} else {
    startApp();
}
