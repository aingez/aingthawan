import fpgaCalculatorImage from '../../my_picture/portfolioPicture/fpga_calculator_1.JPG';
import PythonSearchImage from '../../my_picture/portfolioPicture/python_search_engine_1.JPG';
import ArduinoMorseDecode from '../../my_picture/portfolioPicture/morse_code_decoder_1.JPG';
import ESPAccident from '../../my_picture/portfolioPicture/esp8266_acciddent_1.JPG';
import rc100EV from '../../my_picture/portfolioPicture/rc100_ev_1.JPG';
import voron24350 from '../../my_picture/portfolioPicture/voron24_1.JPG';

// Template
// {
//   title: 'Project 1',
//   description: 'This is a short description of Project 1',
//   image: '',
//   link: 'https://example.com',
//   Tag: [''],
//   details: ['This is a detailed description of Project 1...',]
// },

export const portfolioData = [
  {
    title: "Search Engine Project",
    description: "A search engine built with Python, Web Crawling, Search Ranking, and GUI",
    image: PythonSearchImage,
    link: ["https://github.com/your-username/search-engine-project",],
    tags: ['Python', 'SQL', 'Search Engine', 'Data Visualization', 'Web Spider'],
    details: ['This project developed a comprehensive web scraping and indexing system with a user-friendly graphical user interface (GUI)',
              'It employed various Python libraries, such as BeautifulSoup, Selenium, and Scrapy, for web scraping and utilized natural language processing (NLP) tools like RAKE, Yake!, and KeyBERT for keyword extraction. The system implemented an inverted index, TF-IDF, and phrase queries for indexing and ranking purposes. It transitioned to SQLite3 for database management and implemented ELT pipelines. The GUI, created with PyQt5, featured search functionality, URL input, caching, and logging capabilities. Unit testing with JUNIT was conducted, achieving 58.9% coverage. Additional explorations included trying Apache Lucene, PyLucene, and exploring web crawling concepts',
              'The project successfully integrated web scraping, NLP, indexing, and GUI development using Python libraries, NLP tools, SQLite3, PyQt5, and Tableau',]
  },
  {
    title: "FPGA VHDL Calculator",
    description: "An N-bit calculator program designed on the Terasic De0-cv FPGA board",
    image: fpgaCalculatorImage,
    link: ["https://github.com/your-username/fpga-vhdl-calculator",],
    tags: ['FPGA', 'VHDL', 'Altera', 'Quatus Prime', 'Electronics'],
    details: ['Objective: Design FPGA program for N-bit calculator on Terasic De0-cv Development Board',
              'Function: Take two N-bits input, Operate Add/Sub/Mul/Div, Display on 7-Segment',
              'Technologies: VHDL, FPGA, Quatus Prime, Electronics, Altera',]
  },
  {
    title: "Arduino Morse Code Decoder",
    description: "A mini project with Arduino Nano decode falshing morse code",
    image: ArduinoMorseDecode,
    link: ["https://github.com/your-username/arduino-morse-code-decoder",],
    tags: ['Arduino', 'Signal Processing', 'C++', 'Electronics'],
    details: ['Objective: Signal Processing Mini-Project for Signal & System Course',
              'Function: Receive flashing signal from light intensity sensor, Decode out as character',
              'Technologies: Arduino, BH1750, C++',]
  },
  {
    title: "Electric Motorcycle Conversion",
    description: "Participated in the EVAT x EGAT Electric Motorcycle Conversion Contest 2022",
    image: rc100EV,
    link: ["https://github.com/your-username/electric-motorcycle-conversion",],
    tags: ['E-Bike', 'EV', 'Conversion', '3D-Printing', 'CAD', 'EVAT', 'Electric'],
    details: ['responsible for the overall conversion design, CAD design, fabrication, assembly, 3d printing/prototyping, and wiring.',]
  },
  {
    title: "Opensource FFF 3D-Printer Build",
    description: "Opensource core-XY FDM printer from scratch",
    image: voron24350,
    link: ["https://github.com/your-username/electric-motorcycle-conversion",],
    tags: ['3D-Printing', 'Opensource', 'Voron', 'Linux', 'Hardware', 'FFF', 'Core-XY'],
    details: ['Objective: Hobby Side-Project',
              'Description: Fully build & printed an opensource core-XY FDM printer from scratch, provide part/prototypes for my colleagues project/assignments.',
              'Technologies: Core-XY, FFF, FDM, Orange-pi, Electronics, 3D-Printing, Linux',]
  },
  {
    title: "IoT Accident Monitor",
    description: "Gyroscope and GPS along with ESP8266 to detect supecious vehicle orientation",
    image: ESPAccident,
    link: ["https://github.com/your-username/iot-smoke-detector",],
    tags: ['ESP8266', 'C++', 'Line-Notify', 'Gyro', 'GPS', 'Thingsboard'],
    details: ['An IoT project that integrates an ESP32, Raspberry Pi, and Zigbee devices using Zigbee2MQTT for communication. It provides Discord notifications and chart reports.',]
  },
];
