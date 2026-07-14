import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const quizBank = {
  "MV Quiz": [
    {
      question: "What kind of clothes should the data collector wear?",
      options: ["Baggy", "Fitted", "Loose long pants"],
      answer: "Fitted",
    },
    {
      question: "Can the data collector have their badge on them while performing a task?",
      options: ["Yes", "No"],
      answer: "No",
    },
    {
      question: "When should the data collector start moving?",
      options: ["1s", "2s", "3s"],
      answer: "3s",
    },
    {
      question: "Where should the calibration start from?",
      options: ["Inside the bounding box", "Outside the bounding box"],
      answer: "Outside the bounding box",
    },
    {
      question: "Which camera should you face while starting the calibration?",
      options: ["Front Camera", "Back Camera", "Right Camera"],
      answer: "Front Camera",
    },
    {
      question: "How long should the session/sequence be?",
      options: ["1min", "15s - 30s", "30s"],
      answer: "30s",
    },
    {
      question: "What should be done if one of the cameras have been moved during the session?",
      options: ["Continue the session", "Recalibrate"],
      answer: "Recalibrate",
    },
    {
      question: "What should be done if the data collector comes out of the bounding area?",
      options: ["Continue the sequence", "Delete the sequence"],
      answer: "Delete the sequence",
    },
    {
      question: "How should the interacting object be placed inside the bounding area?",
      options: ["Not visible to the camera", "Visible to all the cameras"],
      answer: "Visible to all the cameras",
    },
    {
      question: "Where should the data collector be standing when starting a sequence?",
      options: [
        "Front of the camera",
        "Covering the object",
        "Standing where the object is clearly visible",
      ],
      answer: "Standing where the object is clearly visible",
    },
    {
      question: "What should you avoid doing during calibration?",
      options: ["Moving fast", "Moving slow"],
      answer: "Moving fast",
    },
    {
      question: "What types of movements should be avoided during data collection?",
      options: ["Slow and steady movements", "Fast movements"],
      answer: "Fast movements",
    },
    {
      question: "What should you do if an object is dropped during a sequence?",
      options: ["Delete the sequence", "Continue the sequence"],
      answer: "Delete the sequence",
    },
  ],

  "EGO Quiz": [
    {
      question: "Where is the EGO camera placed during data collection?",
      options: ["On the table", "On the head", "On the hand", "On the floor"],
      answer: "On the head",
    },
    {
      question: "What position should the data collector start in?",
      options: [
        "Hands in calibration position",
        "Hands behind the back",
        "Walking immediately",
        "Looking away from the task area",
      ],
      answer: "Hands in calibration position",
    },
    {
      question: "How long should the calibration position be held before moving?",
      options: ["3 seconds", "2 seconds", "5 seconds", "10 seconds"],
      answer: "2 seconds",
    },
    {
      question: "When should the data collector begin performing the task?",
      options: [
        "Immediately after recording starts",
        "After holding the calibration position",
        "Before the camera is ready",
        "Only at the end of the sequence",
      ],
      answer: "After holding the calibration position",
    },
    {
      question: "What should the data collector do with their head during the task?",
      options: [
        "Keep the head stable",
        "Move the head quickly",
        "Shake the head often",
        "Look away from the task",
      ],
      answer: "Keep the head stable",
    },
    {
      question: "What type of movement should be avoided during EGO data collection?",
      options: [
        "Natural steady movement",
        "Fast or excessive movement",
        "Holding calibration position",
        "Keeping the task visible",
      ],
      answer: "Fast or excessive movement",
    },
    {
      question: "What should the operator make sure is being recorded?",
      options: [
        "The full task interaction",
        "Only the floor",
        "Only the data collector's face",
        "Only the background",
      ],
      answer: "The full task interaction",
    },
    {
      question: "What should stay visible in frame during the task?",
      options: [
        "Hands and objects involved in the task",
        "Only the ceiling",
        "Only the operator",
        "Nothing specific",
      ],
      answer: "Hands and objects involved in the task",
    },
    {
      question: "What should the operator do if hands or objects go out of frame?",
      options: [
        "Continue without checking",
        "Delete the sequence and redo it",
        "Ignore it",
        "Stop watching the recording",
      ],
      answer: "Delete the sequence and redo it",
    },
    {
      question: "Why is it important to keep the head stable and the task in frame?",
      options: [
        "To keep the recording clear and usable",
        "To make the video shorter",
        "To hide the object",
        "To avoid doing the task",
      ],
      answer: "To keep the recording clear and usable",
    },
  ],

  "Object Scanning Quiz": [
    {
      question: "What sequence of lights indicates the scanner is ready to connect wirelessly to your computer?",
      options: [
        "Solid green light all around",
        "Blinking green light all around",
        "Solid blue light all around",
        "Blinking blue light on the top, solid green on the bottom",
      ],
      answer: "Blinking blue light on the top, solid green on the bottom",
    },
    {
      question: "How often does the EINSTAR scanner need to be calibrated?",
      options: [
        "Every day before use",
        "Once a week or when unsure when last calibrated",
        "Only when the scan quality appears degraded",
        "Once a month",
      ],
      answer: "Once a week or when unsure when last calibrated",
    },
    {
      question: "Which of the following objects is least suitable for scanning with the EINSTAR scanner?",
      options: [
        "A shiny metallic sphere",
        "A small, textured ceramic mug",
        "A non-reflective wooden figurine",
        "A medium-sized opaque plastic toy",
      ],
      answer: "A shiny metallic sphere",
    },
    {
      question: "What does a purple overlay in the application indicate while scanning?",
      options: [
        "The scan is complete and ready to export",
        "The scanner is detecting too many features",
        "The battery is low and needs to be charged",
        "The scanner has lost tracking due to a lack of features",
      ],
      answer: "The scanner has lost tracking due to a lack of features",
    },
    {
      question: "What scanning mode should you select when setting up a new scan project?",
      options: [
        "IR scan setting, object mode",
        "IR scan setting, human mode",
        "Laser scan setting, object mode",
        "Laser scan setting, human mode",
      ],
      answer: "IR scan setting, object mode",
    },
    {
      question: "How should you connect the EINSTAR Rockit scanner to your computer for normal scanning use?",
      options: [
        "USB-C cable",
        "Bluetooth",
        "Wi-Fi by connecting to the EinstarRockit network",
        "Ethernet cable",
      ],
      answer: "Wi-Fi by connecting to the EinstarRockit network",
    },
    {
      question: "After completing all the scan views, what should you do before stitching them together?",
      options: [
        "Export as an .OBJ file",
        "Apply hole filling",
        "Isolate the object with the polygon tool",
        "Generate the mesh with semi-watertight settings",
      ],
      answer: "Isolate the object with the polygon tool",
    },
    {
      question: "What is the maximum recommended vertex count before you need to apply the Decimate modifier in Blender?",
      options: ["10,000", "100,000", "50,000", "25,000"],
      answer: "50,000",
    },
    {
      question: "For BundleSDF, what is the first thing you should do in the UI before starting a recording session?",
      options: [
        "Start a test recording",
        "Sync the system date and time using your device's time",
        "Select Rosbag Recording in the controls dropdown",
        "Nothing, start the recording session right away",
      ],
      answer: "Sync the system date and time using your device's time",
    },
    {
      question: "How do you power off the Orin when done scanning?",
      options: [
        "Hold down the power button on the backpack",
        "Use the UI to send a shutdown command",
        "Close the Chrome tab",
        "Disconnect the two Anker power banks",
      ],
      answer: "Disconnect the two Anker power banks",
    },
  ],
};

const quizCards = [
  {
    title: "MV Quiz",
    description: "Validate understanding of MV workflow requirements.",
  },
  {
    title: "EGO Quiz",
    description: "Validate understanding of EGO workflow requirements.",
  },
  {
    title: "Object Scanning Quiz",
    description: "Validate understanding of object scanning workflow requirements.",
  },
];

const STORAGE_KEY = "v2d_quiz_submissions";

const Quiz = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submissions, setSubmissions] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const questions = selectedQuiz ? quizBank[selectedQuiz.title] || [] : [];

  const score = useMemo(() => {
    return questions.reduce((total, item, index) => {
      return answers[index] === item.answer ? total + 1 : total;
    }, 0);
  }, [answers, questions]);

  const percentage =
    questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  const allAnswered = Object.keys(answers).length === questions.length;
  const canSubmit =
    selectedQuiz && name.trim() && email.trim() && questions.length > 0 && allAnswered;

  const startQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setName("");
    setEmail("");
    setAnswers({});
    setSubmitted(false);
  };

  const backToQuizList = () => {
    setSelectedQuiz(null);
    setName("");
    setEmail("");
    setAnswers({});
    setSubmitted(false);
  };

  const saveSubmission = () => {
    const submission = {
      id: Date.now(),
      quizTitle: selectedQuiz.title,
      name: name.trim(),
      email: email.trim(),
      score,
      total: questions.length,
      percentage,
      submittedAt: new Date().toLocaleString(),
      answers: questions.map((item, index) => ({
        question: item.question,
        selectedAnswer: answers[index],
        correctAnswer: item.answer,
        isCorrect: answers[index] === item.answer,
      })),
    };

    const updated = [submission, ...submissions];
    setSubmissions(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setSubmitted(true);
  };

  const resetCurrentQuiz = () => {
    setName("");
    setEmail("");
    setAnswers({});
    setSubmitted(false);
  };

  const clearResults = () => {
    if (!confirm("Clear all saved quiz results?")) return;
    setSubmissions([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const exportCSV = () => {
    const rows = [
      ["Quiz", "Name", "Email", "Score", "Total", "Percentage", "Submitted At"],
      ...submissions.map((item) => [
        item.quizTitle,
        item.name,
        item.email,
        item.score,
        item.total,
        `${item.percentage}%`,
        item.submittedAt,
      ]),
    ];

    const csv = rows
      .map((row) =>
        row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")
      )
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "v2d-quiz-results.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <Link
        to="/v2d-resource-hub"
        className="inline-flex items-center mb-5 text-sm text-[#76B900] hover:text-[#8ddf00] font-semibold"
      >
        ← Back to Resource Hub
      </Link>

      <section className="rounded-3xl border border-[#1f2f1f] bg-gradient-to-r from-[#101810] to-[#050805] p-8">
        <p className="text-[#76B900] font-semibold">Training Validation</p>
        <h1 className="text-4xl font-black mt-2">Quiz</h1>
        <p className="text-gray-400 mt-3">
          Choose a quiz section and submit answers to view the score.
        </p>
      </section>

      {!selectedQuiz && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-6">
          {quizCards.map((quiz) => {
            const questionCount = quizBank[quiz.title]?.length || 0;
            const isAvailable = questionCount > 0;

            return (
              <div
                key={quiz.title}
                className="bg-[#0B0F0B] border border-[#1f2f1f] rounded-2xl p-6 shadow-lg hover:border-[#76B900] transition"
              >
                <p className="text-xs text-[#76B900] font-semibold">QUIZ</p>
                <h2 className="text-xl font-bold mt-2">{quiz.title}</h2>
                <p className="text-gray-400 mt-2">{quiz.description}</p>

                <p className="text-sm text-gray-500 mt-4">
                  {isAvailable ? `Questions: ${questionCount}` : "Coming soon"}
                </p>

                <button
                  onClick={() => startQuiz(quiz)}
                  disabled={!isAvailable}
                  className="mt-5 px-4 py-2 rounded-xl bg-[#76B900] text-black font-semibold hover:bg-[#8ddf00] transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {isAvailable ? "Start Quiz" : "Unavailable"}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {selectedQuiz && (
        <div className="mt-6 bg-[#0B0F0B] border border-[#1f2f1f] rounded-2xl p-6">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <p className="text-xs text-[#76B900] font-semibold">ACTIVE QUIZ</p>
              <h2 className="text-2xl font-bold mt-1">{selectedQuiz.title}</h2>
              <p className="text-gray-400 mt-2">{selectedQuiz.description}</p>
            </div>

            <button
              onClick={backToQuizList}
              className="px-4 py-2 rounded-xl border border-[#2d402d] text-gray-300 hover:border-[#76B900] transition"
            >
              Choose Another Quiz
            </button>
          </div>

          {!submitted ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#050805] border border-[#2d402d] text-white rounded-xl px-4 py-3 outline-none focus:border-[#76B900]"
                    placeholder="Enter name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#050805] border border-[#2d402d] text-white rounded-xl px-4 py-3 outline-none focus:border-[#76B900]"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div className="space-y-5">
                {questions.map((item, index) => (
                  <div
                    key={item.question}
                    className="rounded-2xl border border-[#1f2f1f] bg-[#050805] p-5"
                  >
                    <h2 className="font-semibold">
                      {index + 1}. {item.question}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                      {item.options.map((option) => (
                        <button
                          key={option}
                          onClick={() =>
                            setAnswers((prev) => ({ ...prev, [index]: option }))
                          }
                          className={`text-left px-4 py-3 rounded-xl border transition ${
                            answers[index] === option
                              ? "bg-[#76B900] text-black border-[#76B900] font-semibold"
                              : "border-[#1f2f1f] text-gray-300 hover:border-[#76B900]"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={saveSubmission}
                disabled={!canSubmit}
                className="mt-6 px-5 py-3 rounded-xl bg-[#76B900] text-black font-semibold hover:bg-[#8ddf00] transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Submit Quiz
              </button>

              {!canSubmit && (
                <p className="text-sm text-gray-500 mt-3">
                  Please enter name, email, and answer every question before submitting.
                </p>
              )}
            </>
          ) : (
            <div>
              <h2 className="text-2xl font-bold">Quiz Submitted</h2>
              <p className="text-gray-300 mt-3">
                {name}, you scored{" "}
                <span className="text-[#76B900] font-bold">
                  {score}/{questions.length}
                </span>{" "}
                ({percentage}%).
              </p>

              <div className="space-y-4 mt-6">
                {questions.map((item, index) => {
                  const selected = answers[index];
                  const isCorrect = selected === item.answer;

                  return (
                    <div
                      key={item.question}
                      className="rounded-2xl border border-[#1f2f1f] bg-[#050805] p-5"
                    >
                      <h3 className="font-semibold">
                        {index + 1}. {item.question}
                      </h3>

                      <p
                        className={`mt-3 ${
                          isCorrect ? "text-[#76B900]" : "text-red-300"
                        }`}
                      >
                        Your answer: {selected}
                      </p>

                      {!isCorrect && (
                        <p className="text-gray-300 mt-1">
                          Correct answer: {item.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              <button
                onClick={resetCurrentQuiz}
                className="mt-6 px-5 py-3 rounded-xl bg-[#76B900] text-black font-semibold hover:bg-[#8ddf00] transition"
              >
                Take Again
              </button>
            </div>
          )}
        </div>
      )}

      <div className="mt-6 bg-[#0B0F0B] border border-[#1f2f1f] rounded-2xl p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold">Saved Results</h2>
            <p className="text-gray-400 text-sm mt-1">
              Results are saved in this browser.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={exportCSV}
              disabled={submissions.length === 0}
              className="px-4 py-2 rounded-xl bg-[#76B900] text-black font-semibold hover:bg-[#8ddf00] transition disabled:opacity-40"
            >
              Download CSV
            </button>

            <button
              onClick={clearResults}
              disabled={submissions.length === 0}
              className="px-4 py-2 rounded-xl border border-red-500/50 text-red-300 hover:bg-red-500/10 transition disabled:opacity-40"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="overflow-x-auto mt-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-400 border-b border-[#1f2f1f]">
                <th className="py-3 pr-4">Quiz</th>
                <th className="py-3 pr-4">Name</th>
                <th className="py-3 pr-4">Email</th>
                <th className="py-3 pr-4">Score</th>
                <th className="py-3 pr-4">Percentage</th>
                <th className="py-3 pr-4">Submitted</th>
              </tr>
            </thead>

            <tbody>
              {submissions.length > 0 ? (
                submissions.map((item) => (
                  <tr key={item.id} className="border-b border-[#1f2f1f]">
                    <td className="py-3 pr-4">{item.quizTitle}</td>
                    <td className="py-3 pr-4">{item.name}</td>
                    <td className="py-3 pr-4">{item.email}</td>
                    <td className="py-3 pr-4">
                      {item.score}/{item.total}
                    </td>
                    <td className="py-3 pr-4">{item.percentage}%</td>
                    <td className="py-3 pr-4 text-gray-400">
                      {item.submittedAt}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="py-4 text-gray-500" colSpan="6">
                    No submissions yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
