import { Module } from "@nestjs/common";
import { WeatherController } from "./weather.controller";
import { weatherService } from "./weather.service";
import { HttpModule } from "@nestjs/axios";

@Module({
    controllers: [WeatherController],
    providers: [weatherService],
    imports: [HttpModule],
})
export class WeatherModule{}