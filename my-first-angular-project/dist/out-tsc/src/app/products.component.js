import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ProductsComponent = class ProductsComponent {
    constructor() {
        this.isDisabled = true;
        this.productName = 'in the book';
        this.products = ['A Book', 'A Tree'];
        setTimeout(() => {
            this.productName = 'in the park';
            this.isDisabled = false;
        }, 5000);
    }
    onAddProduct() {
        this.products.push(this.productName);
    }
};
ProductsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-products',
        templateUrl: './products.component.html'
    })
], ProductsComponent);
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map