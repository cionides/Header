export interface CurrentWeather {
    location: {
        name: string;
        region: string;
    }
    current: 
    { 
        temp_f: number, 
        condition: 
        { 
            text: string;
            icon: string;
        }
    }
}
