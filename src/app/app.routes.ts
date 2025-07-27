import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { About } from './component/about/about';
import { Portfolio } from './component/portfolio/portfolio';
import { Contact } from './component/contact/contact';
import { Component } from '@angular/core';
import { Error } from './component/error/error';
import { StartFramework } from './component/start-framework/start-framework';

export const routes: Routes = [
  { path: '', redirectTo: 'startframework', pathMatch: 'full' },

  { path: 'startframework', component: StartFramework },
  { path: 'about', component: About },
  { path: 'portfolio', component: Portfolio },
  { path: 'contact', component: Contact },

  { path: '**', component: Error },
];
