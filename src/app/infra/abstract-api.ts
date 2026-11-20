import { inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";

/**
 * A type representing a unique identifier, which can be either a string.
 * For items within the same collection, the type should be consistent.
 */
export type UniqueId = string;

export interface WithUniqueId {
    id: UniqueId;
}

export interface ProcessResponse<T> {
    data: T;
    error?: string;
}

export enum AcknowledgementStatus {
    PENDING = 'PENDING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
}

/**
 * A response structure that includes a human-readable message along with the process response.
 */
export interface HumanResponse<T> extends ProcessResponse<T> {
    message?: string;
}

/**
 * Abstract class to implement CRUD operations
 *
 * Implements the CrudService interface
 *
 * Uses Angular HttpClient to perform HTTP requests
 * Uses Angular Signals to manage state
 *
 * T must extend WithUniqueId to ensure the presence of an 'id' field
 *
 *
 * @example
 * ```typescript
 * import { Injectable } from '@angular/core';
 * import { AbstractApi } from 'path-to/abstract-api';
 * import { ProductDTO } from 'path-to-product.dto';
 *
 * @Injectable({
 *   providedIn: 'root
 * })
 * export class ValueService extends AbstractApi<ValueDTO> {
 *   override endpoint = '/api/products';
 * }
 * ```
 */
export abstract class AbstractApi<T extends WithUniqueId> {

    abstract endpoint: string;
    protected data = signal<T[]>([]);

    state = signal(AcknowledgementStatus.PENDING);

    protected http = inject(HttpClient);


    protected create(data: Omit<T, "id">): Promise<HumanResponse<T>> {

        return new Promise((resolve) => {

            this.state.set(AcknowledgementStatus.PENDING);

            this.http.post<T>(this.endpoint, data).subscribe(
                data => {
                    this.data.update((current) => [data, ...current]);
                    this.state.set(AcknowledgementStatus.SUCCESS);
                    resolve({ message: "Created", data: data as T });
                }
            );
        });
    }

    /**
     * If no id is provided, it fetches all items and sets the data signal with the retrieved array.
     */
    protected read(): Promise<HumanResponse<T[]>>
    /**
     * If an id is provided, it fetches the specific item and updates it in the data signal.
     * @param id
     */
    protected read(id: T["id"]): Promise<HumanResponse<T>>
    protected read(id?: T["id"] | undefined): Promise<HumanResponse<T | T[]>> {

        const url = id ? `${this.endpoint}/${id}` : this.endpoint;

        return new Promise((resolve) => {
            this.state.set(AcknowledgementStatus.PENDING);
            if (id) {
                this.http.get<T>(url).subscribe(
                    data => {
                        this.data.update((current) => current.map(item => item.id === data.id ? data : item));
                        this.state.set(AcknowledgementStatus.SUCCESS);
                        resolve({ message: "Retrieved", data: data as T });
                    }
                );
            } else {
                this.http.get<T[]>(url).subscribe(
                    data => {
                        this.data.set(data);
                        this.state.set(AcknowledgementStatus.SUCCESS);
                        resolve({ message: "Retrieved", data: data as T[] });
                    }
                );
            }
        });
    }

    protected update(target: T, data: Partial<Omit<T, "id">>): Promise<HumanResponse<T>> {
        return new Promise((resolve) => {
            this.state.set(AcknowledgementStatus.PENDING);
            this.http.put<T>(`${this.endpoint}/${target.id}`, data).subscribe(
                data => {
                    this.data.update((current) => current.map(item => item.id === data.id ? data : item));
                    this.state.set(AcknowledgementStatus.SUCCESS);
                    resolve({ message: "Updated", data: data as T });
                }
            );
        });
    }

    protected delete(target: T): Promise<HumanResponse<T>> {
        return new Promise((resolve) => {
            this.state.set(AcknowledgementStatus.PENDING);
            this.http.delete<T>(`${this.endpoint}/${target.id}`).subscribe(
                () => {
                    this.data.update((current) => current.filter(item => item.id !== target.id));
                    this.state.set(AcknowledgementStatus.SUCCESS);
                    resolve({ message: "Deleted", data: target });
                }
            );
        });
    }
}