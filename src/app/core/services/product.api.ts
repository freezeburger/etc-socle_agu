import { Service, signal, inject } from '@angular/core';
import { ProductDTO, PRODUCT_ENDPOINT, ProductResponse } from '../types';
import { NotificationService } from './notification.service';
@Service()
export class ProductApi {

    notificationService = inject(NotificationService);
    
    products = signal<ProductDTO[]>([]);
    currentProduct = signal<ProductDTO | null>(null);

    busy = signal<boolean>(false);

    async load(refresh = false) {
        if (this.products().length > 0 && !refresh) return;

        this.busy.set(true);

        const response = await fetch(PRODUCT_ENDPOINT);
        const data: ProductResponse = await response.json();
        this.products.set(data.products);
        this.notificationService.notify('Update', 'Products loaded successfully' , 'success');
        
        this.busy.set(false);
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
