class WeatherPreview {
    constructor(temperature, weather, day = 'today') {
        this.temperature = temperature;
        this.weather = weather;
        this.day = day;
    }
}

const buildWeatherInfo = (props) => {
    const weatherArr = [];
    for (let i = 0; i < 4; i++) {
        let infoGroup = new WeatherPreview();
        let apiMainData =
            props.data.list && props.data.list.length > 0
                ? props.data.list[i]
                : null;

        if (apiMainData === null) {
            console.error('Error, not found');
        } else {
            infoGroup.temperature = apiMainData.main.temp;
            infoGroup.weather = apiMainData.weather[0].main;
            weatherArr.push(infoGroup);
        }
    }

    return weatherArr;
};

export default function PreviewNextDays(apiMainData) {
    return (
        <>
            {buildWeatherInfo(apiMainData).map((element, index) => (
                <h1 key={index}>
                    {element.temperature}
                </h1>
            ))}
        </>
    );
}
