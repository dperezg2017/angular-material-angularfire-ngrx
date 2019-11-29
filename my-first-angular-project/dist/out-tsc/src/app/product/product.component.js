import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let ProductComponent = class ProductComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input()
], ProductComponent.prototype, "productName", void 0);
ProductComponent = tslib_1.__decorate([
    Component({
        selector: 'app-product',
        templateUrl: './product.component.html',
        styleUrls: ['./product.component.css']
    })
], ProductComponent);
export { ProductComponent };
//# sourceMappingURL=product.component.js.map