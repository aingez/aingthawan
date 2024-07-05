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
//   link: ['https://example.com',],
//   Tag: [''],
//   details: ['This is a detailed description of Project 1...',]
// },

export const portfolioData = [
  {
    title: "Search Engine Project",
    description: "A search engine built with Python, Web Crawling, Search Ranking, and GUI",
    image: PythonSearchImage,
    link: ["https://github.com/aingthawan/swdev02_work",],
    tags: ['Python', 'SQL', 'Search Engine', 'Data Visualization', 'Web Spider'],
    details: ['This project developed a comprehensive web scraping and indexing system with a user-friendly graphical user interface (GUI)',
              'It employed various Python libraries, such as BeautifulSoup, Selenium, and Scrapy, for web scraping and utilized natural language processing (NLP) tools like RAKE, Yake!, and KeyBERT for keyword extraction. The system implemented an inverted index, TF-IDF, and phrase queries for indexing and ranking purposes. It transitioned to SQLite3 for database management and implemented ELT pipelines. The GUI, created with PyQt5, featured search functionality, URL input, caching, and logging capabilities. Unit testing with JUNIT was conducted, achieving 58.9% coverage. Additional explorations included trying Apache Lucene, PyLucene, and exploring web crawling concepts',
              'The project successfully integrated web scraping, NLP, indexing, and GUI development using Python libraries, NLP tools, SQLite3, PyQt5, and Tableau',]
  },
  {
    title: "FPGA VHDL Calculator",
    description: "An N-bit calculator program designed on the Terasic De0-cv FPGA board",
    image: fpgaCalculatorImage,
    link: ["https://github.com/aingthawan/VHDL_Nbit_Calculator",],
    tags: ['FPGA', 'VHDL', 'Altera', 'Quatus Prime', 'Electronics'],
    details: ['This project aimed to design an FPGA program for an N-bit calculator on the Terasic De0-cv Development Board',
              'The calculator functionality was to take two N-bit inputs, perform arithmetic operations such as addition, subtraction, multiplication, and division, and display the results on a 7-segment display. The project utilized VHDL (VHSIC Hardware Description Language) for programming the FPGA (Field-Programmable Gate Array), and the development was carried out using Quartus Prime software from Altera',
              'The project involved working with FPGA technology, electronics, and leveraging the capabilities of the Terasic De0-cv Development Board to implement the N-bit calculator design',]
  },
  {
    title: "Arduino Morse Code Decoder",
    description: "A mini project with Arduino Nano decode falshing morse code",
    image: ArduinoMorseDecode,
    link: ["https://github.com/aingthawan/Signal_and_System_MiniProject_FlashingMorseDecoder",],
    tags: ['Arduino', 'Signal Processing', 'C++', 'Electronics'],
    details: ['This project was a mini-project for the Signal & System course, focused on signal processing using an Arduino board and a light intensity sensor (BH1750)',
              'The objective was to receive a flashing signal from the light sensor and decode it into a character or string. The flashing signal, represented by variations in light intensity, was interpreted and decoded into a corresponding character or set of characters.',
              'This mini-project allowed for hands-on experience in signal processing, sensor interfacing, and embedded programming with the Arduino platform.',]
  },
  {
    title: "Electric Motorcycle Conversion",
    description: "Participated in the EVAT x EGAT Electric Motorcycle Conversion Contest 2022",
    image: rc100EV,
    link: ["https://evat.or.th/",'https://www.egat.co.th/home/en/20220405e/'],
    tags: ['E-Bike', 'EV', 'Conversion', '3D-Printing', 'CAD', 'EVAT', 'Electric','Suzuki RC100'],
    details: ["I participated in the EVAT x EGAT Electric Motorcycle Conversion Contest, an event organized by the Electric Vehicle Association of Thailand (EVAT) and EGAT to support the development of EV personnel and promote Thailand's EV industry",
              "Although my team did not win a prize, we embarked on the challenging task of converting a non-functional motorcycle into an electric vehicle, starting with zero knowledge in EV conversion",
              "I was responsible for the overall conversion design, CAD design, fabrication, assembly, 3D printing/prototyping, and wiring",
              "Despite the lack of prior experience, my team demonstrated the ability to take on a complex engineering project, and we acquired hands-on skills and knowledge in electric vehicle conversion from the ground up",]
  },
  {
    title: "Opensource FFF 3D-Printer Build",
    description: "Opensource core-XY FDM printer from scratch",
    image: voron24350,
    link: ["https://vorondesign.com/", "https://vorondesign.com/voron2.4",],
    tags: ['3D-Printing', 'Opensource', 'Voron', 'Linux', 'Hardware', 'FFF', 'Core-XY'],
    details: ['Objective: Hobby Side-Project',
              'Description: Fully build & printed an opensource core-XY FDM printer from scratch, provide part/prototypes for my colleagues project/assignments.',
              'Technologies: Core-XY, FFF, FDM, Orange-pi, Electronics, 3D-Printing, Linux',]
  },
  {
    title: "IoT Accident Monitor",
    description: "Gyroscope and GPS along with ESP8266 to detect supecious vehicle orientation",
    image: ESPAccident,
    link: ["https://github.com/aingthawan/embedded_lab_mini_project_accident_notify_gps",],
    tags: ['ESP8266', 'C++', 'Line-Notify', 'Gyro', 'GPS', 'Thingsboard'],
    details: ['Developed a system that utilizes a gyroscope, GPS, and an ESP8266 module to detect suspicious vehicle orientation, primarily aimed at delivery bots. The system incorporates a GY-GPS6MV2 sensor for GPS data and a GY-521 sensor for gyroscope readings',
              'The telemetry data, including latitude, longitude, and orientation information, is transmitted to a ThingsBoard dashboard for real-time monitoring. Additionally, the system is programmed to send notifications via Line Notify whenever an incident or suspicious vehicle orientation is detected, providing the current latitude and longitude coordinates',
              'This project demonstrates my ability to integrate various sensors, microcontrollers, and communication protocols to create a practical solution for monitoring and enhancing the safety of delivery bots through continuous tracking and real-time alerts',]
  },
];
