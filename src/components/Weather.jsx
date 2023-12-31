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
                    className="w-[13rem] h-[11.25rem] mr-[1.5rem] md:mr-[1.75rem] lg:mr-[2rem]"
                    alt="weatherIcon"
                />
            );
        }
    }
};


export default function WeatherComponent(props) {
    // Verifica se há pelo menos uma previsão na lista
    const firstForecast =
        props.data.list && props.data.list.length > 0
            ? props.data.list[0]
            : null;

    const isResponseAvailable = firstForecast && firstForecast.weather && firstForecast.weather[0]

    return (
        <>
            <div className="flex mt-10 text-primary-text justify-between md:justify-center items-center mb-10">
                {/* Span to display the weather icon */}
                <span className='ml-5'>
                    {isResponseAvailable ? (
                        chooseIcon(props.data.list[0].weather[0].icon)
                    ) : (
                        /* console.log(props.data.list[0].weather[0].icon)*/
                        <div>Not found</div>
                    )}
                </span>
                {/* Span to display the temperature and weather */}
                <span className="mr-5">
                    {firstForecast ? (
                        <>
                            <span className="flex  items-center justify-center">
                                <span className="flex flex-col justify-center items-center">
                                    <h1>
                                        <strong className="text-[6.75rem]">
                                            {Math.floor(
                                                firstForecast.main.temp
                                            )}
                                        </strong>
                                        <span className="relative bottom-[3.125rem]">
                                            °C
                                        </span>
                                    </h1>
                                    <p className="mt-[-30px] text-[1.5rem]">
                                        {firstForecast.weather[0].main}
                                    </p>
                                </span>
                            </span>
                        </>
                    ) : (
                        'N/A'
                    )}
                </span>
            </div>
        </>
    );
}
