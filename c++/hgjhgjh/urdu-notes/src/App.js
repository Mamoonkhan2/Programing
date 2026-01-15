import { useState } from "react";
import { createWorker } from "tesseract.js";

export default function UrduNotesHelper() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [meanings, setMeanings] = useState({});

  // OCR Worker
  const worker = createWorker({
    logger: m => console.log(m),
  });

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const processImage = async () => {
    setLoading(true);
    await worker.load();
    await worker.loadLanguage("urd");
    await worker.initialize("urd");
    const { data: { text } } = await worker.recognize(image);
    setText(text);
    setLoading(false);
    findDifficultWords(text);
  };

  // Demo "difficult words" filter
  const commonWords = ["ہے", "یہ", "میں", "کا", "کے", "کی", "اور", "سے"]; // عام الفاظ
  const dictionary = {
    "متاثر": "اثر لینے والا",
    "مشکل": "کٹھن، آسان نہ ہو",
    "معلومات": "علم یا خبر",
    "مفہوم": "مطلب، مطلب سمجھنے والی بات"
  };

  const findDifficultWords = (text) => {
    let words = text.split(/\s+/);
    let difficult = {};
    words.forEach(word => {
      if (!commonWords.includes(word) && dictionary[word]) {
        difficult[word] = dictionary[word];
      }
    });
    setMeanings(difficult);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">📚 اردو نوٹس ہیلپر</h1>

      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleImageChange}
        className="mb-4"
      />

      {image && <img src={image} alt="preview" className="w-64 mb-4 shadow rounded" />}

      <button
        onClick={processImage}
        disabled={!image || loading}
        className="bg-blue-500 text-white px-4 py-2 rounded shadow"
      >
        {loading ? "پڑھا جا رہا ہے..." : "ٹیکسٹ نکالیں"}
      </button>

      {text && (
        <div className="mt-6 w-full max-w-lg bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">📖 پہچانا گیا متن:</h2>
          <p className="whitespace-pre-wrap">{text}</p>
        </div>
      )}

      {Object.keys(meanings).length > 0 && (
        <div className="mt-6 w-full max-w-lg bg-green-50 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">🔍 مشکل الفاظ کے آسان معنی:</h2>
          <ul>
            {Object.entries(meanings).map(([word, meaning]) => (
              <li key={word} className="mb-2">
                <strong>{word}:</strong> {meaning}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
