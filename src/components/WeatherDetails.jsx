export default function WeatherDetails({ icon, description, infoToShow }) {
    
    
    return (
        <>
            {/* Weather Cards to show rainfall, humidity, and wind */}
            <section className="bg-white flex items-center justify-between mt-5 ml-5 mr-5 py-2 px-3 rounded-xl shadow-xl h-[4rem] lg:mr-20 lg:ml-20">
                <div className="flex items-center w-[50%]">
                    <img
                        src={icon}
                        className="w-[4rem] bg-secundary-text-900 rounded-xl shadow-lg"
                        alt="Icon"
                    />
                    <h1 className="w-[100%] text-[1rem] pl-2 md:text-[1.25rem] lg:text-[1.5rem] text-primary-text">
                        {description}
                    </h1>
                </div>
                <p className="mr-3 text-[1rem] pl-2 md:text-[1.25rem] lg:text-[1.5rem]">
                    {(infoToShow === null || infoToShow === undefined + ' mm') ? '0 mm' : infoToShow}
                </p>
            </section>
        </>
    );
}
