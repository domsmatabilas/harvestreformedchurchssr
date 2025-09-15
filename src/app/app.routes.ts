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
import { title } from 'process';

export const routes: Routes = [
    {
        path: '', 
        component: HomePage, 
        pathMatch: 'full',
        data: {
            title: 'Harvest Reformed Church',
            description: 'This is the official website of Harvest Reformed Church. We believe and strongly uphold the the five solas of the Reformation, which distinguished the Reformers from the teachings of Rome, include sola scriptura (Scripture alone), solus Christus (Christ alone), sola fide (faith alone), sola gratia (grace alone), and soli Deo gloria (glory to God alone). Harvest Reformed Church is located in Werribee, Victoria 3030 Australia.',
            keywords: 'Harvest Reformed Church, Harvest, Reformed, Church, Werribee, Victoria, Australia, Sermons, Bible Study, Sunday Service, Contact Us, Give'
        }
    },
    {
        path: 'sermons', 
        component: SermonsPage, 
        pathMatch: 'full',
        data: {
            title: 'Harvest Reformed Church - Sermons',
            description: 'Every Sunday, we record our sermons so other people will also hear the truth from God`s word. You can find our past sermons on this page.',
            keywords: 'Harvest Reformed Church Sermons, Bible Study, Sunday Service, Contact Us, Give'
        }
    },
    {
        path: 'contact-us', 
        component: ContactUsPage, 
        pathMatch: 'full',
        data: {
            title: 'Harvest Reformed Church',
            description: 'This is the official website of Harvest Reformed Church. We believe and strongly uphold the the five solas of the Reformation, which distinguished the Reformers from the teachings of Rome, include sola scriptura (Scripture alone), solus Christus (Christ alone), sola fide (faith alone), sola gratia (grace alone), and soli Deo gloria (glory to God alone). Harvest Reformed Church is located in Werribee, Victoria 3030 Australia.',
            keywords: 'Harvest Reformed Church, Harvest, Reformed, Church, Werribee, Victoria, Australia, Sermons, Bible Study, Sunday Service, Contact Us, Give'
        }
    },
    {
        path: 'sunday-service', 
        component: SundayServicePage, 
        pathMatch: 'full',
        data: {
            title: 'Harvest Reformed Church',
            description: 'This is the official website of Harvest Reformed Church. We believe and strongly uphold the the five solas of the Reformation, which distinguished the Reformers from the teachings of Rome, include sola scriptura (Scripture alone), solus Christus (Christ alone), sola fide (faith alone), sola gratia (grace alone), and soli Deo gloria (glory to God alone). Harvest Reformed Church is located in Werribee, Victoria 3030 Australia.',
            keywords: 'Harvest Reformed Church, Harvest, Reformed, Church, Werribee, Victoria, Australia, Sermons, Bible Study, Sunday Service, Contact Us, Give'
        }
    },
    {
        path: 'bible-study', 
        component: BibleStudyPage, 
        pathMatch: 'full',
        data: {
            title: 'Harvest Reformed Church',
            description: 'This is the official website of Harvest Reformed Church. We believe and strongly uphold the the five solas of the Reformation, which distinguished the Reformers from the teachings of Rome, include sola scriptura (Scripture alone), solus Christus (Christ alone), sola fide (faith alone), sola gratia (grace alone), and soli Deo gloria (glory to God alone). Harvest Reformed Church is located in Werribee, Victoria 3030 Australia.',
            keywords: 'Harvest Reformed Church, Harvest, Reformed, Church, Werribee, Victoria, Australia, Sermons, Bible Study, Sunday Service, Contact Us, Give'
        }
    },
    {
        path: 'who-we-are', 
        component: WhoWeArePage, 
        pathMatch: 'full',
        data: {
            title: 'Harvest Reformed Church',
            description: 'This is the official website of Harvest Reformed Church. We believe and strongly uphold the the five solas of the Reformation, which distinguished the Reformers from the teachings of Rome, include sola scriptura (Scripture alone), solus Christus (Christ alone), sola fide (faith alone), sola gratia (grace alone), and soli Deo gloria (glory to God alone). Harvest Reformed Church is located in Werribee, Victoria 3030 Australia.',
            keywords: 'Harvest Reformed Church, Harvest, Reformed, Church, Werribee, Victoria, Australia, Sermons, Bible Study, Sunday Service, Contact Us, Give'
        }
    },
    {
        path: 'what-we-believe', 
        component: WhatWeBelievePage, pathMatch: 'full'
    },
    {
        path: 'leadership', component: 
        LeadershipPage, pathMatch: 'full',
        data: {
            title: 'Harvest Reformed Church',
            description: 'This is the official website of Harvest Reformed Church. We believe and strongly uphold the the five solas of the Reformation, which distinguished the Reformers from the teachings of Rome, include sola scriptura (Scripture alone), solus Christus (Christ alone), sola fide (faith alone), sola gratia (grace alone), and soli Deo gloria (glory to God alone). Harvest Reformed Church is located in Werribee, Victoria 3030 Australia.',
            keywords: 'Harvest Reformed Church, Harvest, Reformed, Church, Werribee, Victoria, Australia, Sermons, Bible Study, Sunday Service, Contact Us, Give'
        }
    },
    {
        path: 'contact-us', 
        component: ContactUsPage, 
        pathMatch: 'full',
        data: {
            title: 'Harvest Reformed Church',
            description: 'This is the official website of Harvest Reformed Church. We believe and strongly uphold the the five solas of the Reformation, which distinguished the Reformers from the teachings of Rome, include sola scriptura (Scripture alone), solus Christus (Christ alone), sola fide (faith alone), sola gratia (grace alone), and soli Deo gloria (glory to God alone). Harvest Reformed Church is located in Werribee, Victoria 3030 Australia.',
            keywords: 'Harvest Reformed Church, Harvest, Reformed, Church, Werribee, Victoria, Australia, Sermons, Bible Study, Sunday Service, Contact Us, Give'
        }
    },
    {
        path: 'give', 
        component: GivePage, 
        pathMatch: 'full',
        data: {
            title: 'Harvest Reformed Church',
            description: 'This is the official website of Harvest Reformed Church. We believe and strongly uphold the the five solas of the Reformation, which distinguished the Reformers from the teachings of Rome, include sola scriptura (Scripture alone), solus Christus (Christ alone), sola fide (faith alone), sola gratia (grace alone), and soli Deo gloria (glory to God alone). Harvest Reformed Church is located in Werribee, Victoria 3030 Australia.',
            keywords: 'Harvest Reformed Church, Harvest, Reformed, Church, Werribee, Victoria, Australia, Sermons, Bible Study, Sunday Service, Contact Us, Give'
        }
    }
];
