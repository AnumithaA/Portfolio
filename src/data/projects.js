// All project text is based on the wording of your resume. Nothing here is
// invented: results are only listed where your resume states them.
//
// To add links: paste the URL into `github` (and `demo` if you ever get one).
// Leave them as "" and the buttons show "coming soon".
//
// `tone` picks the colour of the film frame: sage | olive | brick | sky | mustard | dust

export const projects = [
  {
    id: "testcase-generator",
    number: "01",
    title: "AI Assisted Testcase Generator with Validator",
    short: "Generates API test cases from OpenAPI specs, runs them, and checks the AI's own tests.",
    status: "Completed",
    tone: "sage",
    problem:
      "Test cases for an API can be generated automatically from its OpenAPI specification, but AI-generated tests also need to be checked for correctness before they can be trusted.",
    approach: [
      "Built an automated API testing pipeline that generates test cases from OpenAPI specifications and executes them against a live API.",
      "Developed a validation framework to evaluate the AI-generated tests for correctness.",
      "Implemented automated test-quality checks that flag invalid outputs and redundant cases.",
    ],
    features: [
      "Test generation from OpenAPI specifications",
      "Execution against a live API",
      "Correctness validation of AI-generated tests",
      "Automated checks for invalid and redundant tests",
    ],
    tech: ["OpenAPI", "Python", "Groq LLMs"],
    results: [
      "100% detection of 4 seeded API defects.",
      "Identified 14 near-duplicate test pairs in a 27-test batch.",
    ],
    github: "",
    demo: "",
  },
  {
    id: "hybrid-qml",
    number: "02",
    title: "Robustness of Hybrid Quantum-Classical Binary Classifiers Under Remote Sensing Degradations",
    short: "Does a hybrid quantum model hold up when satellite images get noisy?",
    status: "Completed",
    tone: "sky",
    problem:
      "Remote sensing images are often degraded by noise. This project asks how robust a hybrid quantum-classical binary classifier is under those degradations compared with classical models.",
    approach: [
      "Reproduced a hybrid QML model that combines frozen VGG16 features, classical feature reduction and a variational quantum circuit for binary EuroSAT classification.",
      "Tested robustness under symmetric label noise, Simplex fog and Poisson-Gaussian noise against two classical baselines.",
    ],
    features: [
      "Frozen VGG16 feature extractor",
      "Classical feature reduction",
      "Variational quantum circuit",
      "Three noise types tested against two classical baselines",
    ],
    tech: ["PennyLane", "QML", "VGG16"],
    results: [
      "The hybrid QML model handled atmospheric and sensor noise better than the classical baselines.",
      "Performance was more consistent across both classes.",
    ],
    github: "",
    demo: "",
  },
  {
    id: "auv-marl",
    number: "03",
    title: "Federated Multi-Agent RL for Heterogeneous AUV Swarms",
    short: "Decentralised learning for swarms of different underwater vehicles.",
    status: "Completed",
    tone: "olive",
    problem:
      "Heterogeneous swarms of autonomous underwater vehicles need to allocate tasks among many agents, in a decentralised way, while learning together.",
    approach: [
      "Designed a decentralised, gossip-based federated learning protocol for multi-agent task allocation across heterogeneous AUV swarms.",
      "Developed a MAPPO-based policy with action masking and agent-type conditioning, with spiking neural networks for perception.",
      "Simulated in HoloOcean with a custom acoustic communication layer.",
    ],
    features: [
      "Gossip-based federated learning protocol",
      "MAPPO policy with action masking",
      "Agent-type conditioning for heterogeneous vehicles",
      "Spiking neural networks for perception",
      "Custom acoustic communication layer",
    ],
    tech: ["MARL", "Federated Learning", "SNNs", "MAPPO", "HoloOcean"],
    results: [],
    github: "",
    demo: "",
  },
  {
    id: "deepfake",
    number: "04",
    title: "Digital Image Forensics: Deepfake Detection",
    short: "A dual-stream detector that also shows where an image was tampered with.",
    status: "Completed",
    tone: "brick",
    problem:
      "Deepfake detectors need to say not just whether an image is manipulated, but where, with a calibrated confidence, and they should still work on datasets they were not trained on.",
    approach: [
      "Built a dual-stream deepfake detection system that fuses RGB and noise-residual information.",
      "Added a segmentation head for tamper localisation and confidence calibration.",
      "Evaluated cross-dataset generalisation from FaceForensics++ to Celeb-DF and developed a live interactive demo for real-time detection.",
    ],
    features: [
      "RGB and noise-residual fusion",
      "Tamper localisation with a segmentation head",
      "Confidence calibration",
      "Cross-dataset evaluation: FaceForensics++ to Celeb-DF",
    ],
    tech: ["PyTorch", "Computer Vision"],
    results: [],
    github: "",
    demo: "",
  },
  {
    id: "stock-gcn",
    number: "05",
    title: "Temporal Graph-Based Stock Price Prediction",
    short: "Indicators, news sentiment and graphs, combined to predict next-day movement.",
    status: "Completed",
    tone: "mustard",
    problem:
      "Predicting next-day stock movement benefits from combining several kinds of signal: technical indicators, text sentiment and graph-based learning.",
    approach: [
      "Built a multimodal deep learning framework that integrates technical indicators, FinBERT sentiment embeddings, Graph Convolutional Networks and an attention-based BiLSTM.",
      "Proposed an automated rolling retraining pipeline to improve robustness in non-stationary financial markets.",
    ],
    features: [
      "Technical indicators",
      "FinBERT sentiment embeddings",
      "Graph Convolutional Networks",
      "Attention-based BiLSTM",
      "Proposed rolling retraining pipeline",
    ],
    tech: ["PyTorch", "FinBERT", "GCN", "BiLSTM"],
    results: ["61.3% directional accuracy on AAPL, outperforming a random baseline."],
    github: "",
    demo: "",
  },
];
