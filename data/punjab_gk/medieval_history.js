const quizData = [
  {
    question: "Who first introduced Islam to Punjab?",
    options: [
      "Muhammad-bin-Qasim",
      "Mahmud Ghazni",
      "Raja Jaipal",
      "Genghis Khan",
    ],
    answer: "Muhammad-bin-Qasim",
  },
  {
    question: "In which year did Muhammad-bin-Qasim conquer Sindh?",
    options: ["712 CE", "1001 CE", "800 CE", "900 CE"],
    answer: "712 CE",
  },
  {
    question: "Who was the first significant Muslim conqueror of Punjab?",
    options: [
      "Mahmud Ghazni",
      "Muhammad-bin-Qasim",
      "Qutb-ud-Din Aibak",
      "Aurangzeb",
    ],
    answer: "Mahmud Ghazni",
  },
  {
    question: "Who was Mahmud Ghazni's father?",
    options: ["Sabuktigin", "Mahmud's uncle", "Alptigin", "Iltutmish"],
    answer: "Sabuktigin",
  },
  {
    question: "Which dynasty did Mahmud Ghazni belong to?",
    options: [
      "Ghazni dynasty",
      "Ghorid dynasty",
      "Mughal dynasty",
      "Delhi Sultanate",
    ],
    answer: "Ghazni dynasty",
  },
  {
    question: "Who was the ruler of Punjab when Mahmud Ghazni invaded?",
    options: [
      "Raja Jaipal of the Hindushahi dynasty",
      "Raja Shihab-ud-Din",
      "Raja Vikramaditya",
      "Raja Harsa",
    ],
    answer: "Raja Jaipal of the Hindushahi dynasty",
  },
  {
    question: "What was the capital of the Hindushahi dynasty?",
    options: ["Bathinda", "Lahore", "Multan", "Sialkot"],
    answer: "Bathinda",
  },
  {
    question: "When did Mahmud Ghazni first encounter Raja Jaipal?",
    options: ["1001 CE", "1015 CE", "1020 CE", "999 CE"],
    answer: "1001 CE",
  },
  {
    question: "When did Mahmud Ghazni conquer Multan and Punjab?",
    options: ["1004-06 CE", "1010-12 CE", "1025-27 CE", "1000-02 CE"],
    answer: "1004-06 CE",
  },
  {
    question:
      "Until which year did the Ghaznavids control parts of Punjab and Sindh?",
    options: ["1135 CE", "1200 CE", "1150 CE", "1100 CE"],
    answer: "1135 CE",
  },
  {
    question: "What was Muhammad of Ghor's original name?",
    options: [
      "Shahab-ud-din Muhammad",
      "Mohammad Ghor",
      "Sultan Muhammad",
      "Ghurid Muhammad",
    ],
    answer: "Shahab-ud-din Muhammad",
  },
  {
    question: "In which year did Muhammad Ghori capture Multan?",
    options: ["1175", "1185", "1160", "1190"],
    answer: "1175",
  },
  {
    question:
      "Which forts did Muhammad Ghori capture in Punjab before moving to other parts of India?",
    options: [
      "Hansi, Sarsuti, and Samana forts",
      "Lahore, Multan, and Hansi",
      "Samana, Sialkot, and Delhi",
      "Multan, Lahore, and Kalinjar",
    ],
    answer: "Hansi, Sarsuti, and Samana forts",
  },
  {
    question: "In which year did Muhammad Ghori conquer Lahore?",
    options: ["1186", "1190", "1180", "1200"],
    answer: "1186",
  },
  {
    question:
      "When did Muhammad Ghori defeat Prithviraj Chauhan in the Battle of Tarain?",
    options: ["1191 CE", "1190 CE", "1200 CE", "1185 CE"],
    answer: "1191 CE",
  },
  {
    question: "What dynasty was established by Muhammad Ghori's successors?",
    options: [
      "The Delhi Sultanate or Slave Dynasty",
      "The Ghaznavid Dynasty",
      "The Ghurid Dynasty",
      "The Mamluk Dynasty",
    ],
    answer: "The Delhi Sultanate or Slave Dynasty",
  },
  {
    question: "Who was the first Sultan of the Slave dynasty?",
    options: ["Qutb-ud-din Aibak", "Iltutmish", "Balban", "Razia"],
    answer: "Qutb-ud-din Aibak",
  },
  {
    question:
      "During whose reign did the Mongols appear for the first time on the banks of the Indus?",
    options: ["Iltutmish", "Razia", "Balban", "Sher Khan"],
    answer: "Iltutmish",
  },
  {
    question: "What was the capital of the Delhi Sultanate under Iltutmish?",
    options: ["Delhi", "Lahore", "Multan", "Jaunpur"],
    answer: "Delhi",
  },
  {
    question: "What administrative system did Iltutmish organize?",
    options: ["Iqta system", "Zakat system", "Sharia system", "Feudal system"],
    answer: "Iqta system",
  },
  {
    question: "Who was the first woman ruler of India?",
    options: ["Razia", "Nur Jahan", "Mumtaz Mahal", "Empress of Vijayanagara"],
    answer: "Razia",
  },
  {
    question: "Who killed Razia in 1240 CE?",
    options: [
      "Her brother, Muiz-ud-din Bahram",
      "Her husband, Altunia",
      "Her son, Sultan Nasiruddin",
      "Sher Khan",
    ],
    answer: "Her brother, Muiz-ud-din Bahram",
  },
  {
    question: "Who was appointed as the Governor of Sirhind by Balban?",
    options: ["Sher Khan", "Iltutmish", "Qutb-ud-din Aibak", "Raja Jaipal"],
    answer: "Sher Khan",
  },
  {
    question: "What was Sher Khan known for as the Governor of Sirhind?",
    options: [
      "An enlightened and sound administrator who repelled many attacks by the Mongols",
      "An aggressive conqueror of neighboring regions",
      "A tyrant known for his cruelty",
      "A scholar and poet",
    ],
    answer:
      "An enlightened and sound administrator who repelled many attacks by the Mongols",
  },
  {
    question: "Why did Balban kill Sher Khan?",
    options: [
      "Because Sher Khan became too powerful and influential, threatening Balban's authority",
      "Because Sher Khan betrayed him",
      "Because of Sher Khan's relations with the Mongols",
      "Because Sher Khan was a rival ruler in Punjab",
    ],
    answer:
      "Because Sher Khan became too powerful and influential, threatening Balban's authority",
  },
  {
    question: "Who succeeded Sher Khan as the Governor of Sirhind?",
    options: [
      "Balban's eldest son, Prince Sultan",
      "Qutb-ud-din Aibak",
      "Sher Khan's son, Ahmad Khan",
      "Iltutmish's grandson",
    ],
    answer: "Balban's eldest son, Prince Sultan",
  },
  {
    question: "How did Prince Sultan die in 1285 CE?",
    options: [
      "In a fight against the Mongols",
      "In a battle against the Rajputs",
      "Due to poisoning",
      "In a hunting accident",
    ],
    answer: "In a fight against the Mongols",
  },
  {
    question: "Who was the first ruler of the Khilji Dynasty?",
    options: [
      "Jalal-ud-din Khilji",
      "Ala-ud-din Khilji",
      "Qutb-ud-din Aibak",
      "Shams-ud-din Iltutmish",
    ],
    answer: "Jalal-ud-din Khilji",
  },
  {
    question: "Who assassinated Jalal-ud-din Khilji?",
    options: [
      "His nephew, Ala-ud-din Khilji",
      "His son, Shams-ud-din",
      "His brother, Qutb-ud-din",
      "One of his generals",
    ],
    answer: "His nephew, Ala-ud-din Khilji",
  },
  {
    question: "Which leader invaded Punjab in 1298?",
    options: ["Kutlugh Khan", "Mahmud Ghazni", "Tamerlane", "Chinggis Khan"],
    answer: "Kutlugh Khan",
  },
  {
    question: "Who opposed the Mongol invasion of Punjab in 1304?",
    options: [
      "Ghazi Malik (Ghiyasuddin Tughlaq), Governor of Punjab",
      "Ala-ud-din Khilji",
      "Iltutmish",
      "Raja Jaipal",
    ],
    answer: "Ghazi Malik (Ghiyasuddin Tughlaq), Governor of Punjab",
  },
  {
    question: "What major reforms did Ala-ud-din Khilji implement?",
    options: [
      "Fiscal, land, and agrarian reforms",
      "Military and tax reforms",
      "Religious and cultural reforms",
      "Administrative reforms",
    ],
    answer: "Fiscal, land, and agrarian reforms",
  },
  {
    question: "Who founded the irrigation system in Punjab?",
    options: [
      "Ala-ud-din Khilji",
      "Ghiyasuddin Tughlaq",
      "Raja Vikramaditya",
      "Sher Shah Suri",
    ],
    answer: "Ala-ud-din Khilji",
  },
  {
    question: "When did Ala-ud-din Khilji die?",
    options: [
      "19th December, 1316",
      "15th January, 1320",
      "5th August, 1308",
      "2nd February, 1325",
    ],
    answer: "19th December, 1316",
  },
  {
    question: "Who was the founder of the Tughlaq Dynasty?",
    options: [
      "Ghiyasuddin Tughlaq",
      "Muhammad-bin-Tughlaq",
      "Shams-ud-din Iltutmish",
      "Sultan Nasiruddin Mahmud",
    ],
    answer: "Ghiyasuddin Tughlaq",
  },
  {
    question: "What was the real name of Ghiyasuddin Tughlaq?",
    options: [
      "Ghazi Malik",
      "Shams-ud-din Tughlaq",
      "Iltutmish",
      "Muhammad Tughlaq",
    ],
    answer: "Ghazi Malik",
  },
  {
    question: "Who invaded Punjab in 1327 during Muhammad-bin-Tughlaq's reign?",
    options: [
      "Tarmashirin Khan, a Mongolian General",
      "Timur the Lame",
      "Sultan Mahmud of Ghazni",
      "Mongol Hordes under Kublai Khan",
    ],
    answer: "Tarmashirin Khan, a Mongolian General",
  },
  {
    question: "Who defeated the Ghakkars in 1341?",
    options: [
      "The forces of the Tughlaq dynasty",
      "The Delhi Sultanate army",
      "The Mongols",
      "Raja Jaipal of the Hindushahi dynasty",
    ],
    answer: "The forces of the Tughlaq dynasty",
  },
  {
    question: "Who was the real founder of canal irrigation in Punjab?",
    options: [
      "Firoz Shah Tughlaq",
      "Ala-ud-din Khilji",
      "Muhammad-bin-Tughlaq",
      "Sher Shah Suri",
    ],
    answer: "Firoz Shah Tughlaq",
  },
  {
    question: "Which city did Firoz Shah Tughlaq found near Delhi?",
    options: ["Firozabad", "Delhi", "Lahore", "Agra"],
    answer: "Firozabad",
  },
  {
    question: "When did Timur invade India?",
    options: ["1398", "1451", "1304", "1526"],
    answer: "1398",
  },
  {
    question: "Which city did Timur advance to after crossing the Indus?",
    options: ["Lahore", "Delhi", "Ambala", "Sialkot"],
    answer: "Lahore",
  },
  {
    question: "What districts did Timur march through on his return?",
    options: [
      "Ambala, Rupnagar, Hoshiarpur, and Kangra",
      "Gurgaon, Rohtak, Hisar, and Fatehabad",
      "Delhi, Patiala, Jalandhar, and Barnala",
      "Hoshiarpur, Ludhiana, Moga, and Amritsar",
    ],
    answer: "Ambala, Rupnagar, Hoshiarpur, and Kangra",
  },
  {
    question: "How long did Timur stay in Delhi?",
    options: ["15 days", "3 months", "7 days", "1 month"],
    answer: "15 days",
  },
  {
    question: "Who founded the Sayyid dynasty?",
    options: [
      "Khizr Khan",
      "Bahlol Lodhi",
      "Ibrahim Lodhi",
      "Firoz Shah Tughlaq",
    ],
    answer: "Khizr Khan",
  },
  {
    question: "Who succeeded Khizr Khan in 1421 CE?",
    options: [
      "Mubarak Shah",
      "Sikandar Lodhi",
      "Ibrahim Lodhi",
      "Ala-ud-din Alam Shah",
    ],
    answer: "Mubarak Shah",
  },
  {
    question: "Who succeeded Mubarak Shah?",
    options: [
      "Muhammad Shah and Ala-ud-din Alam Shah",
      "Bahlol Lodhi",
      "Sikandar Lodhi",
      "Babur",
    ],
    answer: "Muhammad Shah and Ala-ud-din Alam Shah",
  },
  {
    question: "Who acquired control of Delhi in 1451?",
    options: ["Bahlol Lodhi", "Sikandar Lodhi", "Babur", "Ibrahim Lodhi"],
    answer: "Bahlol Lodhi",
  },
  {
    question: "Who founded the Lodhi dynasty?",
    options: [
      "Bahlol Lodhi",
      "Daulat Khan Lodhi",
      "Ibrahim Lodhi",
      "Sikandar Lodhi",
    ],
    answer: "Bahlol Lodhi",
  },
  {
    question: "Who was the successor of Bahlol Lodhi?",
    options: ["Sikandar Lodhi", "Ibrahim Lodhi", "Babur", "Muhammad Shah"],
    answer: "Sikandar Lodhi",
  },
  {
    question: "Who urged Babur to invade Punjab?",
    options: [
      "Daulat Khan Lodhi",
      "Bahlol Lodhi",
      "Sikandar Lodhi",
      "Ibrahim Lodhi",
    ],
    answer: "Daulat Khan Lodhi",
  },
  {
    question: "Who defeated Ibrahim Lodhi in the Battle of Panipat?",
    options: ["Babur", "Sikandar Lodhi", "Sher Shah Suri", "Muhammad Ghori"],
    answer: "Babur",
  },
  {
    question: "When did Babur establish the Mughal Empire in India?",
    options: ["1526", "1498", "1419", "1530"],
    answer: "1526",
  },
  {
    question: "Who was the father of Babur?",
    options: [
      "Umar Shaikh Mirza II",
      "Sikandar Lodhi",
      "Bahlol Lodhi",
      "Shams-ud-din Iltutmish",
    ],
    answer: "Umar Shaikh Mirza II",
  },
  {
    question:
      "Who made the first advance upon India in 1519 and reached Bhera?",
    options: ["Babur", "Daulat Khan Lodhi", "Sikandar Lodhi", "Ibrahim Lodhi"],
    answer: "Babur",
  },
  {
    question: "Which city did Babur capture in 1520?",
    options: [
      "Sialkot and Syadpur",
      "Delhi and Agra",
      "Multan and Lahore",
      "Bhera and Chiniot",
    ],
    answer: "Sialkot and Syadpur",
  },
  {
    question: "Which city did Babur march into in 1524?",
    options: ["Lahore", "Delhi", "Sialkot", "Ambala"],
    answer: "Lahore",
  },
  {
    question: "Who succeeded Babur in 1540?",
    options: ["Humayun", "Akbar", "Sher Shah Suri", "Bairam Khan"],
    answer: "Humayun",
  },
  {
    question: "Who defeated Humayun in 1540 and became the sovereign ruler?",
    options: ["Sher Shah Suri", "Akbar", "Bairam Khan", "Sikandar Shah"],
    answer: "Sher Shah Suri",
  },
  {
    question: "Who was the Governor of Sirhind during Sher Shah Suri's rule?",
    options: ["Khawas Khan (Masand-i-Ali)", "Bairam Khan", "Humayun", "Akbar"],
    answer: "Khawas Khan (Masand-i-Ali)",
  },
  {
    question:
      "In which year did Humayun recapture his empire from Sher Shah Suri's successors?",
    options: ["1555", "1556", "1547", "1560"],
    answer: "1555",
  },
  {
    question: "Who did Humayun appoint as the Governor of Sirhind in 1555?",
    options: ["Bairam Khan", "Sher Shah Suri", "Akbar", "Bhul Singh"],
    answer: "Bairam Khan",
  },
  {
    question: "Who succeeded Humayun in 1556?",
    options: ["Akbar", "Sher Shah Suri", "Babur", "Bairam Khan"],
    answer: "Akbar",
  },
  {
    question: "Where was Akbar's coronation held?",
    options: ["Kalanaur in Punjab", "Delhi", "Lahore", "Fatehpur Sikri"],
    answer: "Kalanaur in Punjab",
  },
  {
    question:
      "Who did Akbar march to Punjab to expel after the Battle of Panipat?",
    options: ["Sikandar Shah", "Sher Shah Suri", "Ibrahim Lodhi", "Hemu"],
    answer: "Sikandar Shah",
  },
  {
    question: "Who was the administrator of Sirhind during Akbar's reign?",
    options: ["Bairam Khan", "Humayun", "Sher Shah Suri", "Ibrahim Lodhi"],
    answer: "Bairam Khan",
  },
  {
    question: "Who occupied the throne of Agra after Akbar's death in 1605?",
    options: ["Jahangir", "Shah Jahan", "Aurangzeb", "Akbar's son"],
    answer: "Jahangir",
  },
  {
    question: "How was the administration conducted during Jahangir's reign?",
    options: [
      "On the lines laid down by Akbar",
      "Under new policies by Jahangir",
      "Through regional rulers",
      "By the imperial council",
    ],
    answer: "On the lines laid down by Akbar",
  },
  {
    question: "Who was the first Guru of Sikhs?",
    options: [
      "Guru Nanak Dev Ji",
      "Guru Angad Dev Ji",
      "Guru Gobind Singh Ji",
      "Guru Amar Das Ji",
    ],
    answer: "Guru Nanak Dev Ji",
  },
  {
    question: "Who developed Sikhism after Guru Nanak Dev Ji?",
    options: [
      "Guru Angad Dev Ji",
      "Guru Arjan Dev Ji",
      "Guru Tegh Bahadur Ji",
      "Guru Gobind Singh Ji",
    ],
    answer: "Guru Angad Dev Ji",
  },
  {
    question: "What did Guru Amar Das Ji establish during the reign of Akbar?",
    options: [
      "The 22 seats (Gaddee) and appointed Mahants to each seat",
      "The Golden Temple",
      "Sikh holy scriptures",
      "The concept of Khalsa",
    ],
    answer: "The 22 seats (Gaddee) and appointed Mahants to each seat",
  },
  {
    question: "What did Akbar gift to Guru Amar Das Ji's daughter, Bibi Bhani?",
    options: [
      "Many villages",
      "A royal palace",
      "A special title",
      "Gold and silver coins",
    ],
    answer: "Many villages",
  },
  {
    question:
      "What did Guru Ram Das Ji construct on the donated land in Amritsar?",
    options: [
      "Amritsar lake and developed the city of Amritsar",
      "The Golden Temple",
      "A library for Sikh texts",
      "A military fort",
    ],
    answer: "Amritsar lake and developed the city of Amritsar",
  },
  {
    question:
      "Who constructed the Harmandir Sahib at the center of Amritsar lake?",
    options: [
      "Guru Arjan Dev Ji",
      "Guru Gobind Singh Ji",
      "Guru Tegh Bahadur Ji",
      "Guru Nanak Dev Ji",
    ],
    answer: "Guru Arjan Dev Ji",
  },
  {
    question: "Why was Guru Arjan Dev Ji arrested by Jahangir?",
    options: [
      "Because of Sikh support for Jahangir's rebel son, Khusrau Mirza",
      "For his anti-Muslim views",
      "For refusing to pay taxes",
      "For constructing the Golden Temple",
    ],
    answer: "Because of Sikh support for Jahangir's rebel son, Khusrau Mirza",
  },
  {
    question: "Who succeeded Jahangir as the Mughal emperor in 1627?",
    options: ["Shah Jahan", "Aurangzeb", "Akbar", "Humayun"],
    answer: "Shah Jahan",
  },
  {
    question:
      "Which Guru founded the town of Kiratpur and fought many battles with Mughal troops?",
    options: [
      "Guru Har Gobind Ji",
      "Guru Har Rai Ji",
      "Guru Nanak Dev Ji",
      "Guru Tegh Bahadur Ji",
    ],
    answer: "Guru Har Gobind Ji",
  },
  {
    question: "Who succeeded Guru Har Rai Ji as the Guru in 1661?",
    options: [
      "Guru Har Krishan Ji",
      "Guru Gobind Singh Ji",
      "Guru Tegh Bahadur Ji",
      "Guru Arjan Dev Ji",
    ],
    answer: "Guru Har Krishan Ji",
  },
  {
    question: "Who succeeded Guru Har Krishan Ji after his death in 1664?",
    options: [
      "Guru Tegh Bahadur Ji",
      "Guru Gobind Singh Ji",
      "Guru Nanak Dev Ji",
      "Guru Amar Das Ji",
    ],
    answer: "Guru Tegh Bahadur Ji",
  },
  {
    question: "Where was Guru Tegh Bahadur Ji executed by Aurangzeb?",
    options: ["Chandni Chowk", "Delhi Fort", "Golden Temple", "Amritsar"],
    answer: "Chandni Chowk",
  },
  {
    question:
      "What significant event did Guru Gobind Singh Ji perform in 1699?",
    options: [
      "He created the Khalsa at Anandpur Sahib",
      "He wrote the Guru Granth Sahib",
      "He established the Sikh Army",
      "He initiated the langar system",
    ],
    answer: "He created the Khalsa at Anandpur Sahib",
  },
  {
    question: "Who killed Guru Gobind Singh Ji and where did it happen?",
    options: [
      "He was murdered by an Afghan at Nanded in the Deccan",
      "He was assassinated by a Mughal soldier at Delhi",
      "He died in battle at Anandpur Sahib",
      "He was killed by a Sikh rival at Amritsar",
    ],
    answer: "He was murdered by an Afghan at Nanded in the Deccan",
  },
  {
    question:
      "Who led the major revolt after the martyrdom of Guru Gobind Singh Ji?",
    options: [
      "Banda Singh Bahadur",
      "Ranjit Singh",
      "Guru Nanak Dev Ji",
      "Maharaja Gulab Singh",
    ],
    answer: "Banda Singh Bahadur",
  },
];
