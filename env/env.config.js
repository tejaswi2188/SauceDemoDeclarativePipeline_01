import dotenv from 'dotenv';
import { env } from 'node:process';
const envName = process.env.TEST_ENV || 'qa';

console.log(`Executing Test Cases on ${envName.toUpperCase()}`);
console.log(`Executing Test Cases on ${envName.toUpperCase()}`);
console.log(`Executing Test Cases on ${envName.toUpperCase()}`);

dotenv.config({path:`./env/${envName}.env`,override : true});

export default 
{
    BASE_URL: process.env.BASE_URL,
    USERNAME : process.env.USERNAME,
    PASSWORD : process.env.PASSWORD

}