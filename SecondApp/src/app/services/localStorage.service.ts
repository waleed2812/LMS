import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/share'

@Injectable({
    providedIn: 'root'
  })
export class StorageService implements OnDestroy {
    private onSubject = new Subject<{ key: string, value: any }>();
    public changes = this.onSubject.asObservable().share();

    constructor() {
        this.start();
    }

    ngOnDestroy() {
        this.stop();
    }

    public getStorage() {
        let s = [];
        for (let i = 0; i < localStorage.length; i++) {
            s.push({
                key: localStorage.key(i),
                value: JSON.parse(localStorage.getItem(localStorage.key(i)))
            });
        }
        return s;
    }

    public getItem(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }

    public store(key: string, data: any): void {
        localStorage.setItem(key, JSON.stringify(data));
        // the local application doesn't seem to catch changes to localStorage...
        this.onSubject.next({ key: key, value: data })
    }

    public clear(key) {
        localStorage.removeItem(key);
        // the local application doesn't seem to catch changes to localStorage...
        this.onSubject.next({ key: key, value: null });
    }


    private start(): void {
        window.addEventListener("storage", this.storageEventListener.bind(this));
    }

    private storageEventListener(event: StorageEvent) {
        if (event.storageArea == localStorage) {
            let v;
            try { v = JSON.parse(event.newValue); }
            catch (e) { v = event.newValue; }
            this.onSubject.next({ key: event.key, value: v });
        }
    }

    private stop(): void {
        window.removeEventListener("storage", this.storageEventListener.bind(this));
        this.onSubject.complete();
    }
}