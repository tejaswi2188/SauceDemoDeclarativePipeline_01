import {defineConfig} from '@playwright/test';

export  default defineConfig({

  timeout : 60*1000,

  testDir: './tests',

  fullyParallel : true,

  workers : 2,

  reporter : [

    ['list'],
    ['allure-playwright',{

      resultsDir:'allure-results'
    }]
  ],

  use :
  {

    headless : false,
    screenshot :'on',
    video : 'on',
    trace :'on'
  },

  projects:
  [
    {
      name :'chromium',
       use:
       {
           browserName: 'chromium'
       }

    },

    /*{
      name: 'FIREFOX',

      use :
       {
         browserName : 'firefox'
      }
    },*/

    {
      name :'Webkit',
      use :
        {
            browserName :'webkit'
        }
    }
  ]




})