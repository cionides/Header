export interface Weather {
    location: {
        name: string;
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
