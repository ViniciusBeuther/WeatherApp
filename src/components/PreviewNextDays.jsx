import image01d from '../assets/Weather_Icons/01d.png';
import image01n from '../assets/Weather_Icons/01n.png';
import image02d from '../assets/Weather_Icons/02d.png';
import image02n from '../assets/Weather_Icons/02n.png';
import image03d from '../assets/Weather_Icons/03d.png';
import image03n from '../assets/Weather_Icons/03n.png';
import image04d from '../assets/Weather_Icons/04d.png';
import image04n from '../assets/Weather_Icons/04n.png';
import image09d from '../assets/Weather_Icons/09d.png';
import image09n from '../assets/Weather_Icons/09n.png';
import image10d from '../assets/Weather_Icons/10d.png';
import image10n from '../assets/Weather_Icons/10n.png';
import image11d from '../assets/Weather_Icons/11d.png';
import image11n from '../assets/Weather_Icons/11n.png';
import image13d from '../assets/Weather_Icons/13d.png';
import image13n from '../assets/Weather_Icons/13n.png';
import image50d from '../assets/Weather_Icons/50d.png';
import image50n from '../assets/Weather_Icons/50n.png';

const imageArr = [];
imageArr.push(
    [image01d, '01d'],
    [image01n, '01n'],
    [image02d, '02d'],
    [image02n, '02n'],
    [image03d, '03d'],
    [image03n, '03n'],
    [image04d, '04d'],
    [image04n, '04n'],
    [image09d, '09d'],
    [image09n, '09n'],
    [image10d, '10d'],
    [image10n, '10n'],
    [image11d, '11d'],
    [image11n, '11n'],
    [image13d, '13d'],
    [image13n, '13n'],
    [image50d, '50d'],
    [image50n, '50n']
);

const chooseIcon = (iconCode) => {
    for (let i = 0; i < imageArr.length; i++) {
        if (imageArr[i][1] === iconCode) {
            return (
                <img
                    src={imageArr[i][0]}
                    className="w-[3rem] h-[3.25rem]"
                    alt="weatherIcon"
                />
            );
        }
    }
};

class WeatherPreview {
    constructor(temperature, weather, day = 'today') {
        this.temperature = temperature;
        this.weather = weather;
        this.day = day;
        this.code = '000';
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
            infoGroup.code = apiMainData.weather[0].icon;
            weatherArr.push(infoGroup);
        }
    }

    return weatherArr;
};

export default function PreviewNextDays(apiMainData) {
    return (
        <>
            <div className="flex justify-around items-center mt-10">
                {buildWeatherInfo(apiMainData).map((element, index) => (
                    <span key={index} className="flex justify-center flex-col bg-white p-10 rounded-full items-center">
                        <h1>WEEK DAY</h1>
                        {chooseIcon(element.code)}
                        <div>
                            <p>{element.temperature}</p>
                            <p>{element.weather}</p>
                        </div>
                    </span>
                ))}
            </div>
        </>
    );
}
