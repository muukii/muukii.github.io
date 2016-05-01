"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var greeting_tsx_1 = require('./greeting.tsx');
var oss_tsx_1 = require('./oss.tsx');
var Top = (function (_super) {
    __extends(Top, _super);
    function Top() {
        _super.apply(this, arguments);
    }
    Top.prototype.render = function () {
        return (React.createElement(greeting_tsx_1.Greeting, null)
            ,
                React.createElement(oss_tsx_1.OSSList, null));
    };
    return Top;
}(React.Component));
exports.Top = Top;
//# sourceMappingURL=top_index.js.map