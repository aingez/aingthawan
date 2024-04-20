import fpgaCalculatorImage from '../../my_picture/portfolioPicture/fpga_calculator_1.JPG';
import PythonSearchImage from '../../my_picture/portfolioPicture/python_search_engine_1.JPG';
import ArduinoMorseDecode from '../../my_picture/portfolioPicture/morse_code_decoder_1.JPG';
import ArduinoIotSmoke from '../../my_picture/portfolioPicture/iot_smoke_detector_1.JPG';
import rc100EV from '../../my_picture/portfolioPicture/rc100_ev_1.JPG';
import voron24350 from '../../my_picture/portfolioPicture/voron24_1.JPG';

// Template
// {
//   title: 'Project 1',
//   description: 'This is a short description of Project 1',
//   image: '',
//   link: 'https://example.com',
//   details: 'This is a detailed description of Project 1...',
// },

export const portfolioData = [
  {
    title: "Search Engine Project",
    description: "A search engine built with Python, Web Crawling, Search Ranking, and GUI",
    image: PythonSearchImage,
    link: "https://github.com/your-username/search-engine-project",
    details: ['Objective: Developed a web scraping and indexing system with a user-friendly GUI.',
              'Key Components: Web Scraping: Utilized BeautifulSoup, Selenium, Scrapy, and concurrent.futures.',
              'NLP: Employed RAKE, Yake!, and KeyBERT for keyword extraction.',
              'Indexing & Ranking: Implemented inverted index, TF-IDF, and phrase queries.',
              'Database Management: Transitioned to SQLite3, implemented ELT pipelines.',
              'GUI: Created with PyQt5, featuring search, URL input, caching, and logging.',
              'Testing & Evaluation: Conducted unit testing with JUNIT, achieving 58.9% coverage.',
              'Additional Explorations: Tried Apache Lucene, PyLucene, and explored web crawling concepts.',
              'Outcome: Comprehensive system integrating web scraping, NLP, indexing, and GUI development.',
              'Technologies: Python libraries, NLP tools, SQLite3, PyQt5, Tableau.',]
  },
  // {
  //   title: "FPGA VHDL Calculator",
  //   description: "An N-bit calculator program designed on the Terasic De0-cv FPGA board",
  //   image: fpgaCalculatorImage,
  //   link: "https://github.com/your-username/fpga-vhdl-calculator",
  //   details: 'This is a detailed description of Project 1...',
  // },
  // {
  //   title: "Arduino Morse Code Decoder",
  //   description: "A mini project using an Arduino board to receive input from a light intensity sensor and decode it into characters in real-time.",
  //   image: ArduinoMorseDecode,
  //   link: "https://github.com/your-username/arduino-morse-code-decoder",
  //   details: 'This is a detailed description of Project 1...',
  // },
  // {
  //   title: "IoT Smoke Detector",
  //   description: "An IoT project that integrates an ESP32, Raspberry Pi, and Zigbee devices using Zigbee2MQTT for communication. It provides Discord notifications and chart reports.",
  //   image: ArduinoIotSmoke,
  //   link: "https://github.com/your-username/iot-smoke-detector",
  //   details: 'This is a detailed description of Project 1...',
  // },
  // {
  //   title: "Electric Motorcycle Conversion",
  //   description: "Participated in the EVAT x EGAT Electric Motorcycle Conversion Contest 2022, responsible for the overall conversion design, CAD design, fabrication, assembly, 3d printing/prototyping, and wiring.",
  //   image: rc100EV,
  //   link: "https://github.com/your-username/electric-motorcycle-conversion",
  //   details: 'This is a detailed description of Project 1...',
  // },
  // {
  //   title: "Voron 2.4 350x350 build",
  //   description: "Fully build printed an opensource core-XY FDM printer from scratch, provide part/prototypes for my colleagues' project/assignments.",
  //   image: voron24350,
  //   link: "https://github.com/your-username/electric-motorcycle-conversion",
  //   details: 'This is a detailed description of Project 1...',
  // },
];
