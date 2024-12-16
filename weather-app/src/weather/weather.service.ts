import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class weatherService {
  constructor(private readonly httpService: HttpService) {}

  async getWeather(location: string): Promise<any> {
    const apiKey = '2acf3a87c6794608af440913241710'; // Replace with your actual API key
    const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}`;

    try {
      const response: AxiosResponse = await this.httpService.get(weatherUrl).toPromise();
      const weatherData = response.data;

      if (weatherData.error) {
        return { error: weatherData.error.message };
      }

      return {
        location: weatherData.location.name,
        temperature: weatherData.current.temp_c,
        condition: weatherData.current.condition.text,
        wind: weatherData.current.wind_kph,
      };
    } catch (error) {
      return { error: 'Could not retrieve weather data.' };
    }
  }
}
