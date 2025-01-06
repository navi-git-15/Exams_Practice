const quizData = [
  {
    question: "When was Punjab created?",
    options: [
      "1st November, 1966",
      "15th August, 1947",
      "26th January, 1950",
      "1st January, 1970",
    ],
    answer: "1st November, 1966",
  },
  {
    question: "What is the capital of Punjab?",
    options: ["Chandigarh", "Amritsar", "Ludhiana", "Jalandhar"],
    answer: "Chandigarh",
  },
  {
    question: "What is the total geographical area of Punjab?",
    options: ["50,362 Sq Km", "60,000 Sq Km", "45,000 Sq Km", "52,000 Sq Km"],
    answer: "50,362 Sq Km",
  },
  {
    question: "What percentage of Punjab's area is rural?",
    options: ["96%", "85%", "75%", "90%"],
    answer: "96%",
  },
  {
    question: "What is the urban area of Punjab in square kilometers?",
    options: ["2,097 Sq Km", "3,000 Sq Km", "2,500 Sq Km", "1,800 Sq Km"],
    answer: "2,097 Sq Km",
  },
  {
    question: "What is the latitude range of Punjab?",
    options: [
      "29°30'N to 32°32'N",
      "28°00'N to 32°00'N",
      "30°00'N to 32°00'N",
      "28°30'N to 31°30'N",
    ],
    answer: "29°30'N to 32°32'N",
  },
  {
    question: "What is the longitude range of Punjab?",
    options: [
      "73°55'E to 76°50'E",
      "74°00'E to 76°30'E",
      "73°00'E to 76°00'E",
      "75°00'E to 77°00'E",
    ],
    answer: "73°55'E to 76°50'E",
  },
  {
    question: "Which international boundary does Punjab share?",
    options: ["Pakistan", "China", "Nepal", "Bangladesh"],
    answer: "Pakistan",
  },
  {
    question: "Which states does Punjab share a national boundary with?",
    options: [
      "Haryana, Rajasthan, Himachal Pradesh, and Jammu & Kashmir",
      "Haryana, Uttar Pradesh, Himachal Pradesh",
      "Haryana, Jammu & Kashmir, Uttarakhand",
      "Haryana, Himachal Pradesh, Uttarakhand",
    ],
    answer: "Haryana, Rajasthan, Himachal Pradesh, and Jammu & Kashmir",
  },
  {
    question: "Where is the Secretariat of Punjab located?",
    options: ["Chandigarh", "Amritsar", "Ludhiana", "Patiala"],
    answer: "Chandigarh",
  },
  {
    question: "Which High Court serves Punjab?",
    options: [
      "Punjab and Haryana High Court, Chandigarh",
      "Delhi High Court",
      "Uttarakhand High Court",
      "Jammu and Kashmir High Court",
    ],
    answer: "Punjab and Haryana High Court, Chandigarh",
  },
  {
    question: "How many Lok Sabha constituencies are there in Punjab?",
    options: ["13", "10", "15", "12"],
    answer: "13",
  },
  {
    question: "How many Rajya Sabha constituencies are there in Punjab?",
    options: ["7", "6", "8", "9"],
    answer: "7",
  },
  {
    question: "How many Vidhan Sabha constituencies are there in Punjab?",
    options: ["117", "125", "100", "110"],
    answer: "117",
  },
  {
    question: "What type of state legislature does Punjab have?",
    options: ["Unicameral", "Bicameral", "Parliamentary", "Federal"],
    answer: "Unicameral",
  },
  {
    question: "What is the total population of Punjab?",
    options: ["2,77,43,338", "3,00,00,000", "2,50,00,000", "2,80,00,000"],
    answer: "2,77,43,338",
  },
  {
    question: "What is the male population of Punjab?",
    options: [
      "1,46,39,465 (52.5%)",
      "1,50,00,000 (55%)",
      "1,40,00,000 (50%)",
      "1,60,00,000 (60%)",
    ],
    answer: "1,46,39,465 (52.5%)",
  },
  {
    question: "What is the female population of Punjab?",
    options: ["1,50,00,000", "1,31,03,873", "1,00,00,000", "1,80,00,000"],
    answer: "1,31,03,873",
  },
  {
    question: "What is the urban population of Punjab?",
    options: ["1,20,00,000", "1,03,99,146", "1,00,00,000", "1,50,00,000"],
    answer: "1,03,99,146",
  },
  {
    question: "What percentage of Punjab's population is urban?",
    options: ["25%", "50%", "37.48%", "45%"],
    answer: "37.48%",
  },
  {
    question: "What is the rural population of Punjab?",
    options: ["2,00,00,000", "1,50,00,000", "1,73,44,192", "1,00,00,000"],
    answer: "1,73,44,192",
  },
  {
    question: "What percentage of Punjab's population is rural?",
    options: ["40%", "55%", "62.52%", "70%"],
    answer: "62.52%",
  },
  {
    question: "What is the population density of Punjab?",
    options: ["500 Sq Km", "600 Sq Km", "551 Sq Km", "450 Sq Km"],
    answer: "551 Sq Km",
  },
  {
    question: "What is the sex ratio of Punjab?",
    options: [
      "900 females per 1000 males",
      "950 females per 1000 males",
      "885 females per 1000 males",
      "895 females per 1000 males",
    ],
    answer: "895 females per 1000 males",
  },
  {
    question: "What is the decadal growth rate of Punjab's population?",
    options: ["10%", "12%", "13.9%", "15%"],
    answer: "13.9%",
  },
  {
    question: "What is the total literacy rate of Punjab?",
    options: ["75%", "80%", "72%", "75.8%"],
    answer: "75.8%",
  },
  {
    question: "What is the male literacy rate of Punjab?",
    options: ["80.4%", "85.2%", "75%", "78%"],
    answer: "80.4%",
  },
  {
    question: "What is the female literacy rate of Punjab?",
    options: ["70.7%", "65.4%", "60%", "72%"],
    answer: "70.7%",
  },
  {
    question: "What is the scheduled caste population of Punjab?",
    options: ["70,00,000", "80,00,000", "88,60,179", "95,00,000"],
    answer: "88,60,179",
  },
  {
    question:
      "What percentage of Punjab's population belongs to the Scheduled Caste category?",
    options: ["30.8%", "28.9%", "31.94%", "33%"],
    answer: "31.94%",
  },
  {
    question: "In which year and location was Punjab University established?",
    options: [
      "1900, Amritsar",
      "1882, Chandigarh",
      "1920, Patiala",
      "1850, Jalandhar",
    ],
    answer: "1882, Chandigarh",
  },
  {
    question: "In which year and location was Punjabi University established?",
    options: [
      "1962, Patiala",
      "1970, Amritsar",
      "1960, Ludhiana",
      "1980, Jalandhar",
    ],
    answer: "1962, Patiala",
  },
  {
    question:
      "In which year and location was Punjab Agriculture University established?",
    options: [
      "1970, Ludhiana",
      "1962, Ludhiana",
      "1960, Chandigarh",
      "1980, Jalandhar",
    ],
    answer: "1962, Ludhiana",
  },
  {
    question:
      "In which year and location was Guru Nanak Dev University established?",
    options: [
      "1969, Amritsar",
      "1975, Patiala",
      "1960, Ludhiana",
      "1980, Jalandhar",
    ],
    answer: "1969, Amritsar",
  },
  {
    question:
      "In which year and location was Punjab Technical University established?",
    options: [
      "1997, Jalandhar",
      "1985, Chandigarh",
      "1990, Patiala",
      "2000, Ludhiana",
    ],
    answer: "1997, Jalandhar",
  },
  {
    question:
      "In which year and location was Baba Farid University of Health Sciences established?",
    options: [
      "2000, Amritsar",
      "1995, Faridkot",
      "1998, Faridkot",
      "2005, Patiala",
    ],
    answer: "1998, Faridkot",
  },
  {
    question:
      "In which year and location was Rajiv Gandhi National University of Law established?",
    options: [
      "2000, Patiala",
      "2006, Patiala",
      "1995, Ludhiana",
      "2010, Amritsar",
    ],
    answer: "2006, Patiala",
  },
  {
    question:
      "In which year and location was Guru Ravidas Ayurved University established?",
    options: [
      "2010, Amritsar",
      "2008, Hoshiarpur",
      "2011, Hoshiarpur",
      "2012, Ludhiana",
    ],
    answer: "2011, Hoshiarpur",
  },
  {
    question:
      "In which year and location was Maharaja Ranjit Singh Punjab Technical University established?",
    options: [
      "2010, Amritsar",
      "2015, Bathinda",
      "2020, Patiala",
      "2012, Ludhiana",
    ],
    answer: "2015, Bathinda",
  },
  {
    question: "Who was the first invader of Punjab and when?",
    options: [
      "Muhammad bin Qasim in 711 AD",
      "Alexander the Great in 326 BC",
      "Babur in 1526 AD",
      "Mahmud Ghazni in 1001 AD",
    ],
    answer: "Alexander the Great in 326 BC",
  },
  {
    question: "Who was the first Muslim invader of Punjab and when?",
    options: [
      "Genghis Khan in 1206 AD",
      "Mahmud Ghazni in 1001 AD",
      "Qutb-ud-Din Aibak in 1206 AD",
      "Sultan Mahmud of Ghazni in 1001 AD",
    ],
    answer: "Mahmud Ghazni in 1001 AD",
  },
  {
    question: "Who was the first Sikh ruler of Punjab?",
    options: [
      "Guru Gobind Singh",
      "Maharaja Ranjit Singh",
      "Maharaja Kesar Singh",
      "Maharaja Sher Singh",
    ],
    answer: "Maharaja Ranjit Singh",
  },
  {
    question: "Who was the first Sikh Guru?",
    options: [
      "Guru Nanak Dev Ji",
      "Guru Gobind Singh Ji",
      "Guru Arjan Dev Ji",
      "Guru Tegh Bahadur Ji",
    ],
    answer: "Guru Nanak Dev Ji",
  },
  {
    question: "Where and when was the first Gurdwara established?",
    options: [
      "In Amritsar, 1581 AD",
      "In Kartarpur, 1521 AD",
      "In Delhi, 1706 AD",
      "In Patiala, 1600 AD",
    ],
    answer:
      "In Kartarpur, on the banks of Ravi river, by Guru Nanak Dev Ji in 1521 AD",
  },
  {
    question: "When was the first General Election held in Punjab?",
    options: ["1947", "1951 (Legislative Assembly)", "1956", "1962"],
    answer: "1951 (Legislative Assembly)",
  },
  {
    question:
      "Which party got the majority in the first Assembly Election in Punjab?",
    options: [
      "BJP",
      "Indian National Congress",
      "Shiromani Akali Dal",
      "Communist Party of India",
    ],
    answer: "Indian National Congress",
  },
  {
    question: "Who was the first Governor of Punjab?",
    options: [
      "Chandulal Madhav Lal Trivedi",
      "Surjit Singh Barnala",
      "B. D. Pandey",
      "P. S. Avasthy",
    ],
    answer: "Chandulal Madhav Lal Trivedi",
  },
  {
    question: "Who was the first Chief Minister of Punjab?",
    options: [
      "Dr Gopi Chand Bhargava",
      "Partap Singh Kairon",
      "Surjit Singh Barnala",
      "Gurdev Singh",
    ],
    answer: "Dr Gopi Chand Bhargava",
  },
  {
    question: "Who was the first Lady Chief Minister of Punjab?",
    options: [
      "Rajinder Kaur Bhattal",
      "Amarinder Kaur",
      "Surjit Kaur",
      "Kuldip Kaur",
    ],
    answer: "Rajinder Kaur Bhattal",
  },
  {
    question: "Who was the first Speaker in the Punjab Legislative Assembly?",
    options: ["Kapur Singh", "Jagjit Singh", "S. K. Azad", "Baldev Singh"],
    answer: "Kapur Singh",
  },
  {
    question:
      "Who was the first Deputy Speaker in the Punjab Legislative Assembly?",
    options: [
      "Thakur Panchan Chand",
      "Kapur Singh",
      "Chaudhary Ajit Singh",
      "Gurcharan Singh",
    ],
    answer: "Thakur Panchan Chand",
  },
  {
    question: "Who was the first Lady IPS officer from Punjab?",
    options: ["Kiran Bedi", "Kuldip Kaur", "Amrit Kaur", "Harvinder Kaur"],
    answer: "Kiran Bedi",
  },
  {
    question: "Who was the first Lady Deputy Commissioner of Punjab?",
    options: [
      "Ms Vini Mahajan",
      "Indira Kaur",
      "Navpreet Kaur",
      "Rashmi Kumari",
    ],
    answer: "Ms Vini Mahajan",
  },
  {
    question:
      "Who was the first woman Punjabi writer to get the Sahitya Akademi Award?",
    options: [
      "Amrita Pritam",
      "Harvinder Kaur",
      "Pritam Kaur",
      "Prabhjot Kaur",
    ],
    answer: "Amrita Pritam",
  },
  {
    question: "Who was the first Punjabi writer to get the Jnanpith Award?",
    options: [
      "Amrita Pritam",
      "Gursharan Kaur",
      "Gurudial Singh",
      "Bhai Vir Singh",
    ],
    answer: "Amrita Pritam",
  },
  {
    question: "Who was the first Punjabi novelist to get the Jnanpith Award?",
    options: [
      "Gurudial Singh",
      "Amrita Pritam",
      "Gurdial Kaur",
      "Harvinder Singh",
    ],
    answer: "Gurudial Singh",
  },
  {
    question:
      "Which was the first Punjabi movie to receive the National Award?",
    options: ["Chann Pardesi", "Jagga Jatt", "Gaddar", "Jatt and Juliet"],
    answer: "Chann Pardesi",
  },
  {
    question: "What is the state animal of Punjab?",
    options: ["Lion", "Black Buck", "Elephant", "Indian Wolf"],
    answer: "Black Buck",
  },
  {
    question: "When was the Black Buck declared the state animal of Punjab?",
    options: [
      "15th March, 1989",
      "20th February, 1990",
      "10th March, 1985",
      "1st April, 1995",
    ],
    answer: "15th March, 1989",
  },
  {
    question:
      "What is the common name for the antelope found mainly in India and declared as Punjab's state animal?",
    options: ["Sambhar", "Black Buck", "Chital", "Nilgai"],
    answer: "Black Buck",
  },
  {
    question: "What is the state bird of Punjab?",
    options: ["Peacock", "Northern Goshawk", "Indian Eagle", "Kingfisher"],
    answer: "Northern Goshawk",
  },
  {
    question:
      "When was the Northern Goshawk declared the state bird of Punjab?",
    options: [
      "15th March, 1989",
      "1st January, 1990",
      "5th March, 1987",
      "7th April, 1989",
    ],
    answer: "15th March, 1989",
  },
  {
    question: "What is the state tree of Punjab?",
    options: ["Bamboo", "Indian Rosewood (Sheesham)", "Neem", "Peepal"],
    answer: "Indian Rosewood (Sheesham)",
  },
  {
    question: "When was the Indian Rosewood declared the state tree of Punjab?",
    options: [
      "15th March, 1989",
      "5th February, 1990",
      "10th March, 1987",
      "25th January, 1985",
    ],
    answer: "15th March, 1989",
  },
  {
    question: "What is the Sikh holy flag called?",
    options: [
      "Nishan Sahib",
      "Khanda Flag",
      "Akal Takht Flag",
      "Guru Gobind Singh Flag",
    ],
    answer: "Nishan Sahib",
  },
  {
    question: "What emblem is depicted on the Sikh flag Nishan Sahib?",
    options: ["Khanda", "Om Symbol", "Chakra", "Khanda with a Tiger"],
    answer: "Khanda",
  },
  {
    question: "What are the components of the emblem on the Nishan Sahib?",
    options: [
      "A double-edged sword (Khanda), a chakkar (circular disc), and two single-edged swords (kirpans)",
      "Khanda, a lotus, and a wheel",
      "A sword and a crescent moon",
      "A bow and arrow, a sword, and a chakkar",
    ],
    answer:
      "A double-edged sword (Khanda), a chakkar (circular disc), and two single-edged swords (kirpans)",
  },
  {
    question:
      "What is the scientific name of the Black Buck, Punjab's state animal?",
    options: [
      "Antilope cervicapra",
      "Bos taurus",
      "Bubal bubalis",
      "Cervus elaphus",
    ],
    answer: "Antilope cervicapra",
  },
  {
    question:
      "What is the scientific name of the Northern Goshawk, Punjab's state bird?",
    options: [
      "Accipiter gentilis",
      "Aquila nipalensis",
      "Buteo buteo",
      "Falco tinnunculus",
    ],
    answer: "Accipiter gentilis",
  },
  {
    question:
      "What is the scientific name of Indian Rosewood, Punjab's state tree?",
    options: [
      "Dalbergia sissoo",
      "Pinus roxburghii",
      "Tectona grandis",
      "Acacia nilotica",
    ],
    answer: "Dalbergia sissoo",
  },
  {
    question: "What is the state aquatic animal of Punjab?",
    options: [
      "Indus River Dolphin",
      "Ganges River Dolphin",
      "Mekong Giant Catfish",
      "Giant Freshwater Stingray",
    ],
    answer: "Indus River Dolphin",
  },
  {
    question:
      "What is the scientific name of the Indus River Dolphin, Punjab's state aquatic animal?",
    options: [
      "Platanista gangetica minor",
      "Orcinus orca",
      "Delphinus delphis",
      "Neophocaena phocaenoides",
    ],
    answer: "Platanista gangetica minor",
  },
  {
    question:
      "When was the Indus River Dolphin declared the state aquatic animal of Punjab?",
    options: ["2019", "2017", "2015", "2021"],
    answer: "2019",
  },
  {
    question: "In which river is the Indus River Dolphin primarily found?",
    options: ["Indus River", "Ganges River", "Yangtze River", "Mekong River"],
    answer: "Indus River",
  },
];
