const basicFactsQuestions = [
    {
        "question": "When was Punjab created?",
        "answer": "1st November, 1966"
    },
    {
        "question": "What is the capital of Punjab?",
        "answer": "Chandigarh"
    },
    {
        "question": "What is the total geographical area of Punjab?",
        "answer": "50,362 Sq Km"
    },
    {
        "question": "What percentage of Punjab's area is rural?",
        "answer": "96%"
    },
    {
        "question": "What is the urban area of Punjab in square kilometers?",
        "answer": "2,097 Sq Km"
    },
    {
        "question": "What is the latitude range of Punjab?",
        "answer": "29°30'N to 32°32'N"
    },
    {
        "question": "What is the longitude range of Punjab?",
        "answer": "73°55'E to 76°50'E"
    },
    {
        "question": "Which international boundary does Punjab share?",
        "answer": "Pakistan"
    },
    {
        "question": "Which states does Punjab share a national boundary with?",
        "answer": "Haryana, Rajasthan, Himachal Pradesh, and Jammu & Kashmir"
    },
    {
        "question": "Where is the Secretariat of Punjab located?",
        "answer": "Chandigarh"
    },
    {
        "question": "Which High Court serves Punjab?",
        "answer": "Punjab and Haryana High Court, Chandigarh"
    },
    {
        "question": "How many Lok Sabha constituencies are there in Punjab?",
        "answer": "13"
    },
    {
        "question": "How many Rajya Sabha constituencies are there in Punjab?",
        "answer": "7"
    },
    {
        "question": "How many Vidhan Sabha constituencies are there in Punjab?",
        "answer": "117"
    },
    {
        "question": "What type of state legislature does Punjab have?",
        "answer": "Unicameral"
    },
    {
        "question": "What is the total population of Punjab?",
        "answer": "2,77,43,338"
    },
    {
        "question": "What is the male population of Punjab?",
        "answer": "1,46,39,465"
    },
    {
        "question": "What is the female population of Punjab?",
        "answer": "1,31,03,873"
    },
    {
        "question": "What is the urban population of Punjab?",
        "answer": "1,03,99,146"
    },
    {
        "question": "What percentage of Punjab's population is urban?",
        "answer": "37.48%"
    },
    {
        "question": "What is the rural population of Punjab?",
        "answer": "1,73,44,192"
    },
    {
        "question": "What percentage of Punjab's population is rural?",
        "answer": "62.52%"
    },
    {
        "question": "What is the population density of Punjab?",
        "answer": "551 Sq Km"
    },
    {
        "question": "What is the sex ratio of Punjab?",
        "answer": "895 females per 1000 males"
    },
    {
        "question": "What is the decadal growth rate of Punjab's population?",
        "answer": "13.9%"
    },
    {
        "question": "What is the total literacy rate of Punjab?",
        "answer": "75.8%"
    },
    {
        "question": "What is the male literacy rate of Punjab?",
        "answer": "80.4%"
    },
    {
        "question": "What is the female literacy rate of Punjab?",
        "answer": "70.7%"
    },
    {
        "question": "What is the scheduled caste population of Punjab?",
        "answer": "88,60,179"
    },
    {
        "question": "What percentage of Punjab's population belongs to the Scheduled Caste category?",
        "answer": "31.94%"
    },
    {
        "question": "In which year and location was Punjab University established?",
        "answer": "1882, Chandigarh"
    },
    {
        "question": "In which year and location was Punjabi University established?",
        "answer": "1962, Patiala"
    },
    {
        "question": "In which year and location was Punjab Agriculture University established?",
        "answer": "1962, Ludhiana"
    },
    {
        "question": "In which year and location was Guru Nanak Dev University established?",
        "answer": "1969, Amritsar"
    },
    {
        "question": "In which year and location was Punjab Technical University established?",
        "answer": "1997, Jalandhar"
    },
    {
        "question": "In which year and location was Baba Farid University of Health Sciences established?",
        "answer": "1998, Faridkot"
    },
    {
        "question": "In which year and location was Rajiv Gandhi National University of Law established?",
        "answer": "2006, Patiala"
    },
    {
        "question": "In which year and location was Guru Ravidas Ayurved University established?",
        "answer": "2011, Hoshiarpur"
    },
    {
        "question": "In which year and location was Maharaja Ranjit Singh Punjab Technical University established?",
        "answer": "2015, Bathinda"
    },
    {
        "question": "Who was the first invader of Punjab and when?",
        "answer": "Alexander the Great in 326 BC"
    },
    {
        "question": "Who was the first Muslim invader of Punjab and when?",
        "answer": "Mahmud Ghazni in 1001 AD"
    },
    {
        "question": "Who was the first Sikh ruler of Punjab?",
        "answer": "Maharaja Ranjit Singh"
    },
    {
        "question": "Who was the first Sikh Guru?",
        "answer": "Guru Nanak Dev Ji"
    },
    {
        "question": "Where and when was the first Gurdwara established?",
        "answer": "In Kartarpur, on the banks of Ravi river, by Guru Nanak Dev Ji in 1521 AD"
    },
    {
        "question": "When was the first General Election held in Punjab?",
        "answer": "1951 (Legislative Assembly)"
    },
    {
        "question": "Which party got the majority in the first Assembly Election in Punjab?",
        "answer": "Indian National Congress"
    },
    {
        "question": "Who was the first Governor of Punjab?",
        "answer": "Chandulal Madhav Lal Trivedi"
    },
    {
        "question": "Who was the first Chief Minister of Punjab?",
        "answer": "Dr Gopi Chand Bhargava"
    },
    {
        "question": "Who was the first Lady Chief Minister of Punjab?",
        "answer": "Rajinder Kaur Bhattal"
    },
    {
        "question": "Who was the first Speaker in the Punjab Legislative Assembly?",
        "answer": "Kapur Singh"
    },
    {
        "question": "Who was the first Deputy Speaker in the Punjab Legislative Assembly?",
        "answer": "Thakur Panchan Chand"
    },
    {
        "question": "Who was the first Lady IPS officer from Punjab?",
        "answer": "Kiran Bedi"
    },
    {
        "question": "Who was the first Lady Deputy Commissioner of Punjab?",
        "answer": "Ms Vini Mahajan"
    },
    {
        "question": "Who was the first woman Punjabi writer to get the Sahitya Akademi Award?",
        "answer": "Amrita Pritam"
    },
    {
        "question": "Who was the first Punjabi writer to get the Jnanpith Award?",
        "answer": "Amrita Pritam"
    },
    {
        "question": "Who was the first Punjabi novelist to get the Jnanpith Award?",
        "answer": "Gurudial Singh"
    },
    {
        "question": "Which was the first Punjabi movie to receive the National Award?",
        "answer": "Chann Pardesi"
    },
    {
        "question": "What is the state animal of Punjab?",
        "answer": "Black Buck"
    },
    {
        "question": "When was the Black Buck declared the state animal of Punjab?",
        "answer": "15th March, 1989"
    },
    {
        "question": "What is the common name for the antelope found mainly in India and declared as Punjab's state animal?",
        "answer": "Black Buck"
    },
    {
        "question": "What is the state bird of Punjab?",
        "answer": "Northern Goshawk"
    },
    {
        "question": "When was the Northern Goshawk declared the state bird of Punjab?",
        "answer": "15th March, 1989"
    },
    {
        "question": "What is the state tree of Punjab?",
        "answer": "Indian Rosewood (Sheesham)"
    },
    {
        "question": "When was the Indian Rosewood declared the state tree of Punjab?",
        "answer": "15th March, 1989"
    },
    {
        "question": "What is the Sikh holy flag called?",
        "answer": "Nishan Sahib"
    },
    {
        "question": "What emblem is depicted on the Sikh flag Nishan Sahib?",
        "answer": "Khanda"
    },
    {
        "question": "What are the components of the emblem on the Nishan Sahib?",
        "answer": "A double-edged sword (Khanda), a chakkar (circular disc), and two single-edged swords (kirpans)"
    },
    {
        "question": "What is the scientific name of the Black Buck, Punjab's state animal?",
        "answer": "Antilope cervicapra"
    },
    {
        "question": "What is the scientific name of the Northern Goshawk, Punjab's state bird?",
        "answer": "Accipiter gentilis"
    },
    {
        "question": "What is the scientific name of Indian Rosewood, Punjab's state tree?",
        "answer": "Dalbergia sissoo"
    },
    {
        "question": "What is the state aquatic animal of Punjab?",
        "answer": "Indus River Dolphin"
    },
    {
        "question": "What is the scientific name of the Indus River Dolphin, Punjab's state aquatic animal?",
        "answer": "Platanista gangetica minor"
    },
    {
        "question": "When was the Indus River Dolphin declared the state aquatic animal of Punjab?",
        "answer": "2019"
    },
    {
        "question": "In which river is the Indus River Dolphin primarily found?",
        "answer": "Indus River"
    },








]