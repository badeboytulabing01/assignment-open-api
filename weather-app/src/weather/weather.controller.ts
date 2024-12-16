import { Controller, Get, Query } from "@nestjs/common";
import { weatherService } from "./weather.service";

@Controller('weather')
export class WeatherController{
  constructor(private readonly  weatherService: weatherService){}

  
}