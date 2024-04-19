import fpgaCalculatorImage from '../../my_picture/portfolioPicture/fpga_calculator_1.JPG';
import PythonSearchImage from '../../my_picture/portfolioPicture/python_search_engine_1.JPG';
import ArduinoMorseDecode from '../../my_picture/portfolioPicture/morse_code_decoder_1.JPG';
import ArduinoIotSmoke from '../../my_picture/portfolioPicture/iot_smoke_detector_1.JPG';
import rc100EV from '../../my_picture/portfolioPicture/rc100_ev_1.JPG';
import voron24350 from '../../my_picture/portfolioPicture/voron24_1.JPG';

export const portfolioData = [
  {
    title: "Search Engine Project",
    description: "A search engine built with Python, featuring web crawling, data indexing, search and ranking algorithms, and a GUI for spatial visualization.",
    image: PythonSearchImage,
    link: "https://github.com/your-username/search-engine-project",
  },
  {
    title: "FPGA VHDL Calculator",
    description: "An N-bit calculator program designed to work on the Terasic De0-cv FPGA board, capable of performing basic arithmetic operations on two N-bit inputs.",
    image: fpgaCalculatorImage,
    link: "https://github.com/your-username/fpga-vhdl-calculator",
  },
  {
    title: "Arduino Morse Code Decoder",
    description: "A mini project using an Arduino board to receive input from a light intensity sensor and decode it into characters in real-time.",
    image: ArduinoMorseDecode,
    link: "https://github.com/your-username/arduino-morse-code-decoder",
  },
  {
    title: "IoT Smoke Detector",
    description: "An IoT project that integrates an ESP32, Raspberry Pi, and Zigbee devices using Zigbee2MQTT for communication. It provides Discord notifications and chart reports.",
    image: ArduinoIotSmoke,
    link: "https://github.com/your-username/iot-smoke-detector",
  },
  {
    title: "Electric Motorcycle Conversion",
    description: "Participated in the EVAT x EGAT Electric Motorcycle Conversion Contest 2022, responsible for the overall conversion design, CAD design, fabrication, assembly, 3d printing/prototyping, and wiring.",
    image: rc100EV,
    link: "https://github.com/your-username/electric-motorcycle-conversion",
  },
  {
    title: "Voron 2.4 350x350 build",
    description: "Fully build printed an opensource core-XY FDM printer from scratch, provide part/prototypes for my colleagues' project/assignments.",
    image: voron24350,
    link: "https://github.com/your-username/electric-motorcycle-conversion",
  },
];
