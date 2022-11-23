import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, delay, map, Observable, of, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { Settings } from './shared/models/settings.model';
import { AlertService } from '@full-fledged/alerts';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    apiPath: string = environment.BACKEND_URL;
    settings: Settings;

    private sideMenuItems: [
        { path: '', title: 'Acasa', icon: 'fa-home' },
        { path: 'cursuri', title: 'Cursuri', icon: 'fa-books' },
        { path: 'inscrieri', title: 'Inscrieri', icon: 'fa-graduation-cap' },
        { path: 'locatii', title: 'Locatii', icon: 'fa-map-location-dot' },
        { path: 'info', title: 'Info', icon: 'fa-circle-info' },
        { path: 'contact', title: 'Contact', icon: 'fa-buildings' },
    ];

    constructor(
        private http: HttpClient,
        private alertService: AlertService,
    ) { }

    init() {
        return this.getSettings().pipe(
            map((result: any) => {
                this.settings = result;
                return result;
            }),
            catchError((error) => {
                console.error('APP INIT ERROR: ', error);
                return of(null);
            })
        );

    }

    getSettings(): Observable<Settings> {
        return this.http.get(`${this.apiPath}/settings`).pipe(
            map((result: any) => {
                return result;
            }),
            catchError((error) => {
                this.alertService.danger(error.error.message);
                return throwError(() => error.error);
            })
        );
    }

    getMenuItems() {
        return this.sideMenuItems;
    }

    setLoading(value: boolean): void {
        setTimeout(() => {
            this.loading$.next(value);
        }, 0);
    }


    // HELPERS

    getFirstPhone() {
        if (!this.settings && !this.settings.contact && !this.settings.contact.phones && !this.settings.contact.phones.length) return '0234.512.139';
        return this.settings.contact.phones.filter(contact => contact.type === 'fix')[0].number;
      }

}
