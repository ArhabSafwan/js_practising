class car{
    constructor(
        name,
        color,
        speed,
        typeSuv,
        typeSedan,
        mileage,
        seat,
        sunRoof
    )
    {
        this.name= name;
        this.color= color;
        this.speed = speed;
        this.type ={
            suv : typeSuv,
            sedan : typeSedan,
        };
        this.mileage = mileage;
        this.seat = seat;
        this.sunRoof =sunRoof
    }
    toggleCar(car1, car2)
    {
        this.type.sedan = car1;
        this.type.suv = car2;
    }
    togglesunRoof(roofStatus)
    {
        this.sunRoof=roofStatus;
    }
}

export default car;