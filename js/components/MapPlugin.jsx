/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {connect} = require('react-redux');
const {bindActionCreators} = require('redux');

const assign = require('object-assign');

const {changeMapView} = require('@mapstore/actions/map');


const WMap = require('@mapstore/components/map/openlayers/Map').default;
const Layer = require('@mapstore/components/map/openlayers/Layer').default;
require('@mapstore/components/map/openlayers/plugins/index').default;

const MapPlugin = (props) => {
    return props.map ?
        (
            <WMap {...props.map} {...props.actions}>
                {props.layers.map((layer, index) =>
                    <Layer key={layer.name} position={index} type={layer.type}
                        options={assign({}, layer, {srs: props.map.projection})}/>
                )}
            </WMap>
        ) : <span/>;
};

module.exports = connect((state) => {
    return {
        map: (state.map && state.map) || (state.config && state.config.map),
        layers: state.config && state.config.layers || []
    };
}, dispatch => {
    return {
        actions: bindActionCreators({
            onMapViewChanges: changeMapView
        }, dispatch)
    };
})(MapPlugin);
