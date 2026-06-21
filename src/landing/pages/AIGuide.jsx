import { useState } from "react";
import axios from "axios";
import InternalNavBar from "../components/InternalNavBar";
import Footer from "../components/Footer";

function AIGuide() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question) return;

    setLoading(true);

    try {
      const response = await axios.post(
  "http://localhost:5000/api/ai/guide",
  {
    prompt: question,
  }
);

      setAnswer(response.data.answer);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="bg-[#F8F8F8] min-h-screen">
      <InternalNavBar />

      {/* Hero */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">
            Your Personal Himalayan Sherpa AI
          </h1>

          <p className="max-w-2xl mb-8">
            Ask anything about trekking, culture,
            destinations and travel planning.
          </p>

          <div className="bg-white p-3 rounded-xl flex w-full max-w-2xl">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask Sherpa AI..."
              className="flex-1 outline-none px-4 text-black"
            />

            <button
              onClick={askAI}
              className="bg-[#0F4C5C] text-white px-6 py-2 rounded-lg"
            >
              Ask AI
            </button>
          </div>
        </div>
      </section>

      {/* AI Response */}
      <div className="max-w-5xl mx-auto p-8">
        {loading && (
          <div className="bg-white p-6 rounded-xl shadow">
            Thinking...
          </div>
        )}

        {answer && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold mb-3">
              Sherpa AI Response
            </h3>

            <p>{answer}</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default AIGuide;