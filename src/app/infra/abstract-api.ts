import { inject, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";

/**
 * A type representing a unique identifier, which can be either a string or a number.
 * For items within the same collection, the type should be consistent.
 */
export type UniqueId = string;

export interface WithUniqueId {
    id: UniqueId;
}

export interface ProcessResponse<T> {
    data: T;
    error?: Error;
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
 * You must set the 'endpoint' property in the subclass constructor
 *
 * @example
 * ```typescript
 * import { Injectable } from '@angular/core';
 * import { CrudAbstract } from 'path-to-crud.abstract';
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

    state: AcknowledgementStatus = AcknowledgementStatus.PENDING;

    protected http = inject(HttpClient);


    protected create(data: Omit<T, "id">): Promise<HumanResponse<T>> {

        return new Promise((resolve) => {
            this.http.post<T>(this.endpoint, data).subscribe(
                data => {
                    this.data.update((current) => [data, ...current]);
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
            if (id) {
                this.http.get<T>(url).subscribe(
                    data => {
                        this.data.update((current) => current.map(item => item.id === data.id ? data : item));
                        resolve({ message: "Retrieved", data: data as T });
                    }
                );
            } else {
                this.http.get<T[]>(url).subscribe(
                    data => {
                        this.data.set(data);
                        resolve({ message: "Retrieved", data: data as T[] });
                    }
                );
            }
        });
    }

    protected update(target: T, data: Partial<Omit<T, "id">>): Promise<HumanResponse<T>> {
        return new Promise((resolve) => {
            this.http.put<T>(`${this.endpoint}/${target.id}`, data).subscribe(
                data => {
                    this.data.update((current) => current.map(item => item.id === data.id ? data : item));
                    resolve({ message: "Updated", data: data as T });
                }
            );
        });
    }

    protected delete(target: T): Promise<HumanResponse<T>> {
        return new Promise((resolve) => {
            this.http.delete<T>(`${this.endpoint}/${target.id}`).subscribe(
                () => {
                    this.data.update((current) => current.filter(item => item.id !== target.id));
                    resolve({ message: "Deleted", data: target });
                }
            );
        });
    }
}