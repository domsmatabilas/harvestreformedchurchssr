import { Routes } from '@angular/router';
import { SermonsPage } from './sermons-page/sermons-page';
import { SermonDetailsPage } from './sermon-details-page/sermon-details-page';
import { EditSermonPage } from './edit-sermon-page/edit-sermon-page';
import { AddSermonPage } from './add-sermon-page/add-sermon-page';
import { HomePage } from './home-page/home-page';
import { SundayServicePage } from './sunday-service-page/sunday-service-page';
import { BibleStudyPage } from './bible-study-page/bible-study-page';
import { WhoWeArePage } from './who-we-are-page/who-we-are-page';
import { WhatWeBelievePage } from './what-we-believe-page/what-we-believe-page';
import { LeadershipPage } from './leadership-page/leadership-page';
import { GivePage } from './give-page/give-page';
import { ContactUsPage } from './contact-us-page/contact-us-page';

export const routes: Routes = [
    {
        path: '', component: HomePage, pathMatch: 'full'
    },
    {
        path: 'sermons', component: SermonsPage, pathMatch: 'full'
    },
    {
        path: 'contact-us', component: ContactUsPage, pathMatch: 'full'
    },
    {
        path: 'sunday-service', component: SundayServicePage, pathMatch: 'full'
    },
    {
        path: 'bible-study', component: BibleStudyPage, pathMatch: 'full'
    },
    {
        path: 'who-we-are', component: WhoWeArePage, pathMatch: 'full'
    },
    {
        path: 'what-we-believe', component: WhatWeBelievePage, pathMatch: 'full'
    },
    {
        path: 'leadership', component: LeadershipPage, pathMatch: 'full'
    },
    {
        path: 'contact-us', component: ContactUsPage, pathMatch: 'full'
    },
    {
        path: 'give', component: GivePage, pathMatch: 'full'
    }
];
