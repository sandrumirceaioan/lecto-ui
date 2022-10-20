import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { TransferState, makeStateKey, StateKey } from '@angular/platform-browser';

import { isPlatformServer } from '@angular/common';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataStateService {

    private isServer = false;

    constructor(
        private tstate: TransferState,
        @Inject(PLATFORM_ID) platformId: Object,
    ) {
        this.isServer = isPlatformServer(platformId);
    }

    getDynamicStateKey(key: any, defaultValue: any = null) {
        if (this.tstate.hasKey(key)) {
            return this.tstate.get(key, defaultValue);
        } else {
            return defaultValue;
        }
    }

    setDynamicStateKey(key: any, data: any) {
        const NEW_KEY = makeStateKey(key)
        this.tstate.set(NEW_KEY, data);
    }

    // implementation for services - without http interceptors
    // checkAndGetData(key: StateKey<string>, getDataObservable: Observable<any>, defaultValue: any = []) {
    //     if (this.tstate.hasKey(key)) {
    //         return of(this.tstate.get(key, defaultValue));
    //     } else {
    //         return getDataObservable.pipe(
    //             tap((data) => {
    //                 if (this.isServer) {
    //                     this.setDynamicStateKey(key, data);
    //                 }
    //             })
    //         );
    //     }
    // }

}