import { test, expect, page } from '@playwright/test';

export class BookingHomePage {
    constructor(){
        this.clientURL = "https://www.airpaz.com/en/airlines/Z2-Philippines-AirAsia?a=424721903&b=1363396998109662&d=c&l=142768&n=o&p=&t=kwd-85213505579130:loc-149&utm_medium=cpc&utm_source=bingads&msclkid=8a4d2f4faa1c18ad0264472f88ab976c";
        this.fromDestinationTxtBox = "//input[@data-testid='flightAirportPicker-origin-input']";
        this.toDestinationTxtBox = "//input[@data-testid='flightAirportPicker-destination-input']"; 
        this.flightSearchBtn = "//button[@data-testid='flightSearchForm-searchFlight-button']";
        this.changeSearchBtn = "//button[@data-testid='flightResult-changeFlight-button']";
        this.fromDestinationVal1 = "MNLA";
        this.toDestinationVal1 = "MPH";
    }


}

module.exports = { BookingHomePage };