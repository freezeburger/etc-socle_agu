import { Service, signal, inject } from '@angular/core';
import { ProductDTO, PRODUCT_ENDPOINT, ProductResponse } from '../types';
import { NotificationService } from './notification.service';
@Service()
export class ProductApi {

    notificationService = inject(NotificationService);
    
    products = signal<ProductDTO[]>([]);
    currentProduct = signal<ProductDTO | null>(null);

    async load() {
        if (this.products().length > 0) return;

        const response = await fetch(PRODUCT_ENDPOINT);
        const data: ProductResponse = await response.json();
        this.products.set(data.products);
        this.notificationService.notify('Update', 'Products loaded successfully' , 'success');
    }

    async loadProduct(id: number) {

        if ( this.currentProduct()?.id === id) return;

        const product = this.products().find(r => r.id === id);
        
        this.notificationService.notify('Selection', 'You selected a product', 'info');
        
        if (product) {
            this.currentProduct.set(product);
            return;
        }

        const response = await fetch(PRODUCT_ENDPOINT + '/' + id);
        const data: ProductDTO = await response.json();
        this.currentProduct.set(data);
        
    }
}
