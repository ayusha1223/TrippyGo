export default function ThingsToDo({ things }) {

    return (

        <section>

            <h2>Top Things To Do</h2>

            <div>

                {things.map((item) => (

                    <div key={item.title}>

                        <img
                            src={item.image}
                            alt={item.title}
                        />

                        <h3>{item.title}</h3>

                        <p>{item.description}</p>

                    </div>

                ))}

            </div>

        </section>

    );

}