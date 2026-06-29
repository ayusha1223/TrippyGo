import { useParams } from "react-router-dom";

export default function DestinationDetails() {

    const { id } = useParams();

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">

            <h1 className="text-6xl font-bold">
                Destination {id}
            </h1>

        </div>

    );

}

