export default function HotelsSection({ hotels }) {

    return (

        <section>

            <h2>Hotels Nearby</h2>

            <div>

                {hotels.map((hotel) => (

                    <div key={hotel.name}>

                        <img
                            src={hotel.image}
                            alt={hotel.name}
                        />

                        <h3>{hotel.name}</h3>

                        <p>⭐ {hotel.rating}</p>

                        <p>${hotel.price}</p>

                    </div>

                ))}

            </div>

        </section>

    );

}