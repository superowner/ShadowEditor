﻿import UI from '../ui/UI';

/**
 * 场景编辑区
 * @author mrdoob / http://mrdoob.com/
 * @author tengge / https://github.com/tengge1
 */
function Viewport(options) {
    UI.Control.call(this, options);
    this.app = options.app;
};

Viewport.prototype = Object.create(UI.Control.prototype);
Viewport.prototype.constructor = Viewport;

Viewport.prototype.render = function () {
    this.container = UI.create({
        xtype: 'div',
        id: 'viewport',
        parent: this.parent,
        cls: 'viewport',
        children: [{
            xtype: 'svg',
            id: 'SvgContainer',
            attr: {
                viewBox: '0 0 1920 969', // see: https://segmentfault.com/a/1190000009226427?utm_source=tag-newest
                preserveAspectRatio: 'xMinYMin', // xMinYMin, xMinYMid, xMinYMax, xMidYMin, xMidYMid, xMidYMax, xMaxYMin, xMaxYMid, xMaxYMax
            },
            style: {
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
            },
        }]
    });
    this.container.render();
};

export default Viewport;