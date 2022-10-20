import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    private title = '';

    constructor(
        private titleService: Title,
        private meta: Meta
    ) { }

    seo(pageTitle, description) {
        this.title = pageTitle;
        this.titleService.setTitle(this.title);
        this.meta.addTag({name: 'description', content: description});
        this.meta.addTag({name: 'robots', content: 'index, follow' });
    }

}