import { Service, signal, inject, computed } from '@angular/core';
import { ProductDTO, PRODUCT_ENDPOINT, ProductResponse } from '../types';
import { NotificationService } from './notification.service';
import { AbstractApi } from '../../infra/abstract-api';

@Service()
export class ProductApi extends AbstractApi<ProductDTO> {

    override endpoint: string = PRODUCT_ENDPOINT;

    notificationService = inject(NotificationService);

    products = computed(() => this.data());
    currentProduct = signal<ProductDTO | null>(null);

    busy = computed(() => this.state() === 'IN_PROGRESS');

    async load(refresh = false) {
        if (this.products().length > 0 && !refresh) return;
        await this.read();
        this.notificationService.notify('Update', 'Products loaded successfully', 'success');
    }

    async loadProduct(id: number) {

        if (this.currentProduct()?.id === String(id)) return;

        const product = this.products().find(r => r.id === String(id));

        this.notificationService.notify('Selection', 'You selected a product', 'info');

        if (product) {
            this.currentProduct.set(product);
            return;
        }

        const response = await this.read(String(id));
        this.currentProduct.set( response.data );

    }

    async deleteProduct( p:ProductDTO) {
        await this.delete( p );
        this.currentProduct.set(null);
        this.notificationService.notify('Deletion', 'Product deleted successfully', 'success');
    }

    async createProduct( p:ProductDTO) {
        await this.create( p );
        this.notificationService.notify('Creation', 'Product created successfully', 'success');
    }
}
