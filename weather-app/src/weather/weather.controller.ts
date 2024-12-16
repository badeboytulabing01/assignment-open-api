import { Controller, Get, Query } from "@nestjs/common";
import { weatherService } from "./weather.service";

@Controller('weather')
export class WeatherController{
  constructor(private readonly  weatherService: weatherService){}
 
 @Get()
  async getWeather(@Query('location') location: string){
   
    if(!location){
     return{message: 'No location provided'};
   }

   return this.weatherService.getWeather(location);


}
  
}