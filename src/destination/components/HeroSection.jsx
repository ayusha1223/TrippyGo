export default function HeroSection({ destination }) {

    return (

        <section>

            <img
                src={destination.heroImage}
                alt={destination.name}
            />

            <h1>{destination.name}</h1>

            <p>{destination.description}</p>

            <h3>⭐ {destination.rating}</h3>

            <p>
                📍
                {destination.district},
                {destination.province}
            </p>

            <p>
                ⏱ {destination.duration}
            </p>

            <p>
                💵 {destination.budget}
            </p>

            <p>
                🌤 {destination.bestTime}
            </p>

        </section>

    );

}