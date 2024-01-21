class car{
    constructor(
        name,
        color,
        typeSuv,
        typeSedan,
        seat,
        mileage,
        speed,
    ){
        this.name = name;
        this.color = color;
        this.type = {
            suv : typeSuv,
            sedan : typeSedan
        };
        
    }
}