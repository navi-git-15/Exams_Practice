const quizData = [
  {
    question: "What is a law in the context of the constitution?",
    options: [
      "Rules governing behaviour, either written or unwritten; enacted by legislative bodies with legal force.",
      "Regulations made by local authorities; subordinate to central/state laws.",
      "A temporary law issued by the President or Governor when the legislature is not in session.",
      "Specific and technical guidelines issued by regulatory bodies.",
    ],
    answer:
      "Rules governing behaviour, either written or unwritten; enacted by legislative bodies with legal force.",
  },
  {
    question: "What is an ordinance?",
    options: [
      "A temporary law issued by the President or Governor when the legislature is not in session; requires legislative approval.",
      "Detailed instructions issued by the executive to implement laws.",
      "Regulations made by local authorities; subordinate to central/state laws.",
      "The supreme law outlining government structure and powers.",
    ],
    answer:
      "A temporary law issued by the President or Governor when the legislature is not in session; requires legislative approval.",
  },
  {
    question: "What are bylaws?",
    options: [
      "Regulations made by local authorities; subordinate to central/state laws.",
      "Detailed instructions issued by the executive to implement laws.",
      "Specific guidelines issued by regulatory bodies for industries.",
      "Temporary laws issued by the government.",
    ],
    answer:
      "Regulations made by local authorities; subordinate to central/state laws.",
  },
  {
    question: "What is a constitution?",
    options: [
      "The supreme law outlining government structure and powers; foundation of the legal system.",
      "Detailed instructions issued by the executive to implement laws.",
      "A temporary law issued by the President or Governor when the legislature is not in session.",
      "Rules governing behaviour, either written or unwritten; enacted by legislative bodies with legal force.",
    ],
    answer:
      "The supreme law outlining government structure and powers; foundation of the legal system.",
  },
  {
    question: "What are rules in the context of law?",
    options: [
      "Detailed instructions issued by the executive to implement laws; subordinate to laws and bylaws.",
      "The supreme law outlining government structure and powers.",
      "Specific guidelines issued by regulatory bodies.",
      "Regulations made by local authorities; subordinate to central/state laws.",
    ],
    answer:
      "Detailed instructions issued by the executive to implement laws; subordinate to laws and bylaws.",
  },
  {
    question: "What are regulations?",
    options: [
      "Specific and technical guidelines issued by regulatory bodies.",
      "Rules governing behaviour, either written or unwritten; enacted by legislative bodies with legal force.",
      "Detailed instructions issued by the executive to implement laws.",
      "Regulations made by local authorities.",
    ],
    answer: "Specific and technical guidelines issued by regulatory bodies.",
  },
  {
    question: "Who defined the Rule of Law and what does it assert?",
    options: [
      "British jurist A.V. Dicey defined it, asserting that law governs a nation, ensuring no individual or institution, including the government, is above it.",
      "A constitutional body defined it, asserting that laws must be clear, public, and stable.",
      "The judiciary defined it, ensuring that government actions are legally justified.",
      "A local authority defined it, asserting that government actions must follow established procedures.",
    ],
    answer:
      "British jurist A.V. Dicey defined it, asserting that law governs a nation, ensuring no individual or institution, including the government, is above it.",
  },
  {
    question: "What is the supremacy of law in the context of the Rule of Law?",
    options: [
      "Law is the highest authority.",
      "Law governs a nation, ensuring that all individuals are subject to it.",
      "Government actions must be legally justified.",
      "Laws must be clear, public, and stable.",
    ],
    answer: "Law is the highest authority.",
  },
  {
    question: "What does 'Equality Before the Law' mean under the Rule of Law?",
    options: [
      "All individuals are subject to the same laws.",
      "Government actions must be legally justified.",
      "Law is the highest authority.",
      "Laws must be clear, public, and stable.",
    ],
    answer: "All individuals are subject to the same laws.",
  },
  {
    question: "What is meant by accountability under the Rule of Law?",
    options: [
      "Government actions must be legally justified.",
      "All individuals are subject to the same laws.",
      "Laws must be clear, public, and stable.",
      "Law is the highest authority.",
    ],
    answer: "Government actions must be legally justified.",
  },
  {
    question: "What is legal certainty in the context of the Rule of Law?",
    options: [
      "Laws must be clear, public, and stable.",
      "All individuals are subject to the same laws.",
      "Government actions must be legally justified.",
      "Law is the highest authority.",
    ],
    answer: "Laws must be clear, public, and stable.",
  },
  {
    question: "How does the Supreme Court of India regard the Rule of Law?",
    options: [
      "The Supreme Court recognizes the Rule of Law as a ‘Basic Structure’ of the Constitution, making it impervious to amendments.",
      "The Supreme Court recognizes the Rule of Law as a flexible and amendable part of the Constitution.",
      "The Supreme Court regards it as secondary to fundamental rights.",
      "The Supreme Court allows changes to the Rule of Law with simple legislative amendments.",
    ],
    answer:
      "The Supreme Court recognizes the Rule of Law as a ‘Basic Structure’ of the Constitution, making it impervious to amendments.",
  },
  {
    question: "What is Constitutionalism as defined by Friedrich?",
    options: [
      "Constitutionalism ensures that the government operates within set rules, promoting fairness and accountability.",
      "Constitutionalism is the practice of judicial review to ensure laws adhere to a Constitution.",
      "Constitutionalism ensures that the executive has the supreme authority over all branches of government.",
      "Constitutionalism involves only the legislature in making decisions according to the Constitution.",
    ],
    answer:
      "Constitutionalism ensures that the government operates within set rules, promoting fairness and accountability.",
  },
  {
    question: "What is the primary purpose of a constitution?",
    options: [
      "To provide a framework for government, determining its nature and form.",
      "To outline the responsibilities of individual citizens.",
      "To create a system of checks and balances between different branches of government.",
      "To define the powers of a monarchy.",
    ],
    answer:
      "To provide a framework for government, determining its nature and form.",
  },
  {
    question: "What responsibilities does a constitution outline?",
    options: [
      "It outlines the responsibilities of the executive, legislature, and judiciary.",
      "It outlines the duties of the citizens towards the government.",
      "It dictates the policies for the country's international relations.",
      "It establishes rules for the military.",
    ],
    answer:
      "It outlines the responsibilities of the executive, legislature, and judiciary.",
  },
  {
    question: "What does the legislature do according to the constitution?",
    options: [
      "The legislature makes laws in accordance with the limits and directions provided by the constitution.",
      "The legislature interprets laws and ensures justice is served.",
      "The legislature enforces the laws created by the executive.",
      "The legislature reviews and amends the constitution.",
    ],
    answer:
      "The legislature makes laws in accordance with the limits and directions provided by the constitution.",
  },
  {
    question:
      "Can a country have a Constitution without true Constitutionalism?",
    options: [
      "Yes, for instance, a dictatorship might have a Constitution that isn't followed.",
      "No, every country with a Constitution practices true Constitutionalism.",
      "Yes, but only under democratic governments.",
      "No, true Constitutionalism is mandatory for all countries with a Constitution.",
    ],
    answer:
      "Yes, for instance, a dictatorship might have a Constitution that isn't followed.",
  },
  {
    question: "What is a Written Constitution?",
    options: [
      "A formal document outlining government structure and citizen rights. Example: U.S. Constitution.",
      "A collection of speeches by political leaders defining government principles.",
      "An oral tradition passed down for generations outlining governmental laws.",
      "A constitution that evolves from judicial rulings over time.",
    ],
    answer:
      "A formal document outlining government structure and citizen rights. Example: U.S. Constitution.",
  },
  {
    question: "What is an Unwritten Constitution?",
    options: [
      "Composed of various sources like statutes and traditions, not in a single document. Example: United Kingdom Constitution.",
      "A constitution that is continually updated and not fixed in one written form.",
      "A set of common law principles that govern the country's political structure.",
      "A document that is written but not made public.",
    ],
    answer:
      "Composed of various sources like statutes and traditions, not in a single document. Example: United Kingdom Constitution.",
  },
  {
    question: "What is a Flexible Constitution?",
    options: [
      "A constitution that can be easily amended like regular laws. Example: British Constitution.",
      "A constitution that cannot be amended under any circumstances.",
      "A constitution where only the judiciary can propose amendments.",
      "A constitution that only allows changes under emergency situations.",
    ],
    answer:
      "A constitution that can be easily amended like regular laws. Example: British Constitution.",
  },
  {
    question: "What is a Rigid Constitution?",
    options: [
      "A constitution that requires a complex process for amendments. Example: U.S. Constitution.",
      "A constitution that can be amended by a simple majority in the legislature.",
      "A constitution that is designed to be flexible in response to societal changes.",
      "A constitution that does not allow for any changes after its ratification.",
    ],
    answer:
      "A constitution that requires a complex process for amendments. Example: U.S. Constitution.",
  },
  {
    question: "What is a Federal Constitution?",
    options: [
      "A constitution that divides powers between central and regional governments. Examples: U.S., Germany.",
      "A constitution where all powers are vested in the central government.",
      "A constitution where power is shared only between the legislature and judiciary.",
      "A constitution that is used exclusively by democratic nations.",
    ],
    answer:
      "A constitution that divides powers between central and regional governments. Examples: U.S., Germany.",
  },
  {
    question: "What is a Unitary Constitution?",
    options: [
      "A constitution that centralizes power in one government. Example: United Kingdom.",
      "A constitution that gives equal power to both the central and regional governments.",
      "A constitution that allocates powers equally between all branches of government.",
      "A constitution that divides power between the legislature and executive only.",
    ],
    answer:
      "A constitution that centralizes power in one government. Example: United Kingdom.",
  },
  {
    question: "What is a Presidential Constitution?",
    options: [
      "A constitution that separates executive and legislative branches; the President is both head of state and government. Example: United States.",
      "A constitution where the executive is derived from the legislature.",
      "A constitution that establishes a monarchy with the President as a ceremonial figure.",
      "A constitution where the executive and judiciary work as one branch of government.",
    ],
    answer:
      "A constitution that separates executive and legislative branches; the President is both head of state and government. Example: United States.",
  },
  {
    question: "What is a Parliamentary Constitution?",
    options: [
      "A constitution where the executive comes from the legislature; the Prime Minister leads. Examples: U.K., India.",
      "A constitution where the executive and judiciary are separate branches of government.",
      "A constitution where the President holds more power than the Prime Minister.",
      "A constitution where the legislative powers are vested solely in a parliament.",
    ],
    answer:
      "A constitution where the executive comes from the legislature; the Prime Minister leads. Examples: U.K., India.",
  },
  {
    question: "What is a Monarchical Constitution?",
    options: [
      "A constitution that recognizes a monarch, either with limited powers (constitutional) or significant powers (absolute). Examples: U.K., Sweden.",
      "A constitution that only recognizes the power of the legislative body and has no monarchy.",
      "A constitution where the monarch holds no real power but serves as a ceremonial figure.",
      "A constitution where the monarch acts as the head of both state and government.",
    ],
    answer:
      "A constitution that recognizes a monarch, either with limited powers (constitutional) or significant powers (absolute). Examples: U.K., Sweden.",
  },
  {
    question: "What is a Republican Constitution?",
    options: [
      "A constitution that establishes a republic without a monarchy; the head of state is elected. Examples: U.S., France.",
      "A constitution that establishes a monarchy with a royal family.",
      "A constitution that grants the executive power to the people through direct votes.",
      "A constitution that limits the executive powers and is controlled by the legislature.",
    ],
    answer:
      "A constitution that establishes a republic without a monarchy; the head of state is elected. Examples: U.S., France.",
  },
  {
    question: "What is a Theocratic Constitution?",
    options: [
      "A constitution based on religious laws and principles. Example: Iran.",
      "A constitution that allows religion to be practiced freely without interference from the government.",
      "A constitution that ensures religious freedom for all citizens, regardless of faith.",
      "A constitution that separates the church from the state and mandates secular governance.",
    ],
    answer:
      "A constitution based on religious laws and principles. Example: Iran.",
  },
  {
    question: "What is a Secular Constitution?",
    options: [
      "A constitution that separates religion from government laws. Example: Indian Constitution.",
      "A constitution that allows religion to play a significant role in the governance system.",
      "A constitution that mandates the government to support one religion.",
      "A constitution that prohibits all religious practices in the country.",
    ],
    answer:
      "A constitution that separates religion from government laws. Example: Indian Constitution.",
  },
  {
    question:
      "Who proposed the idea of a Constituent Assembly for India in 1934?",
    options: [
      "M.N. Roy",
      "Jawaharlal Nehru",
      "Sardar Vallabhbhai Patel",
      "Subhas Chandra Bose",
    ],
    answer: "M.N. Roy",
  },
  {
    question:
      "When did the Indian National Congress officially demand a Constituent Assembly?",
    options: ["1935", "1942", "1940", "1946"],
    answer: "1935",
  },
  {
    question: "What did Jawaharlal Nehru state about the constitution in 1938?",
    options: [
      "The constitution must be created by a Constituent Assembly elected through an adult franchise.",
      "The constitution should be written by the British Parliament.",
      "The constitution must be created by a committee of the princely states.",
      "The constitution should give the executive supreme power over all branches.",
    ],
    answer:
      "The constitution must be created by a Constituent Assembly elected through an adult franchise.",
  },
  {
    question:
      "When did the British government accept the demand for a Constituent Assembly in principle?",
    options: [
      "1940, during the August Offer",
      "1946, during the Cabinet Mission Plan",
      "1935, during the Indian National Congress's demand",
      "1942, during the Quit India Movement",
    ],
    answer: "1940, during the August Offer",
  },
  {
    question: "What did the Cripps Proposal of 1942 suggest?",
    options: [
      "Drafting an independent Constitution post-World War II",
      "Creating an interim government for India with shared powers",
      "Creating a completely independent India free of British influence",
      "Establishing a dominion status for India within the British Empire",
    ],
    answer: "Drafting an independent Constitution post-World War II",
  },
  {
    question: "Why did the Muslim League reject the Cripps Proposal?",
    options: [
      "It sought the division of India into two autonomous states.",
      "It demanded more representation for Muslims in the Indian legislature.",
      "It opposed any form of constitutional reforms in India.",
      "It called for the establishment of a single unified nation without divisions.",
    ],
    answer: "It sought the division of India into two autonomous states.",
  },
  {
    question:
      "What did the Cabinet Mission Plan of 1946 propose regarding the Constituent Assembly?",
    options: [
      "A single Constituent Assembly, gaining some acceptance from the Muslim League.",
      "Two separate Constituent Assemblies for Hindus and Muslims.",
      "A joint assembly for British, Hindus, and Muslims to draft the constitution.",
      "A full constitutional framework drafted solely by the British government.",
    ],
    answer:
      "A single Constituent Assembly, gaining some acceptance from the Muslim League.",
  },
  {
    question: "When was the first sitting of the Constituent Assembly held?",
    options: [
      "9th December 1946",
      "15th August 1947",
      "26th January 1950",
      "14th August 1947",
    ],
    answer: "9th December 1946",
  },
  {
    question:
      "Who was elected as the President of the Constituent Assembly on 11th December 1946?",
    options: [
      "Dr. Rajendra Prasad",
      "Jawaharlal Nehru",
      "Dr. Sachidanand Sinha",
      "B.R. Ambedkar",
    ],
    answer: "Dr. Rajendra Prasad",
  },
  {
    question: "Who was the temporary chairman of the Constituent Assembly?",
    options: [
      "Dr. Sachidanand Sinha",
      "H.C. Mukherjee",
      "V.T. Krishnamachari",
      "Jawaharlal Nehru",
    ],
    answer: "Dr. Sachidanand Sinha",
  },
  {
    question: "Who were the Vice-Presidents of the Constituent Assembly?",
    options: [
      "H.C. Mukherjee and V.T. Krishnamachari",
      "Dr. Rajendra Prasad and Dr. Sachidanand Sinha",
      "Jawaharlal Nehru and B.R. Ambedkar",
      "Sardar Vallabhbhai Patel and Maulana Abul Kalam Azad",
    ],
    answer: "H.C. Mukherjee and V.T. Krishnamachari",
  },
  {
    question: "When was the Objective Resolution introduced and by whom?",
    options: [
      "13th December 1946, by Jawaharlal Nehru",
      "26th January 1947, by Sardar Vallabhbhai Patel",
      "15th August 1947, by Maulana Abul Kalam Azad",
      "22nd January 1947, by Dr. Rajendra Prasad",
    ],
    answer: "13th December 1946, by Jawaharlal Nehru",
  },
  {
    question: "When was the Objective Resolution adopted?",
    options: [
      "22nd January 1947",
      "15th August 1947",
      "26th November 1949",
      "9th December 1946",
    ],
    answer: "22nd January 1947",
  },
  {
    question: "When was the National Flag adopted by the Constituent Assembly?",
    options: [
      "22nd July 1947",
      "15th August 1947",
      "26th January 1950",
      "15th August 1946",
    ],
    answer: "22nd July 1947",
  },
  {
    question: "What significant event took place on 15th August 1947?",
    options: [
      "Transfer of power established the dominions of India and Pakistan",
      "Adoption of the Indian Constitution",
      "Formation of the Indian National Congress",
      "First meeting of the Constituent Assembly",
    ],
    answer: "Transfer of power established the dominions of India and Pakistan",
  },
  {
    question:
      "When did the Constituent Assembly ratify India's membership in the Commonwealth?",
    options: ["May 1949", "January 1948", "August 1947", "December 1946"],
    answer: "May 1949",
  },
  {
    question: "When was the Constitution adopted or enacted?",
    options: [
      "26th November 1949",
      "15th August 1947",
      "26th January 1950",
      "9th December 1946",
    ],
    answer: "26th November 1949",
  },
  {
    question:
      "What was adopted on 24th January 1950 by the Constituent Assembly?",
    options: [
      "The National Song and National Anthem",
      "The Constitution of India",
      "The First Flag of India",
      "The Preamble to the Constitution",
    ],
    answer: "The National Song and National Anthem",
  },
  {
    question:
      "Who was elected as the first President of India on 24th January 1950?",
    options: [
      "Dr. Rajendra Prasad",
      "Jawaharlal Nehru",
      "Dr. B.R. Ambedkar",
      "Sardar Vallabhbhai Patel",
    ],
    answer: "Dr. Rajendra Prasad",
  },
  {
    question: "When did the Constitution of India come into force?",
    options: [
      "26th January 1950",
      "15th August 1947",
      "9th December 1946",
      "26th November 1949",
    ],
    answer: "26th January 1950",
  },
  {
    question: "What did the Objective Resolution declare India as?",
    options: [
      "An Independent Sovereign Republic",
      "A Socialist Republic",
      "A Democratic Kingdom",
      "A Federal Union",
    ],
    answer: "An Independent Sovereign Republic",
  },
  {
    question:
      "What did the Objective Resolution state about the Union of Territories?",
    options: [
      "It includes British India, Indian States, and territories willing to join.",
      "It includes only British India and its provinces.",
      "It includes only Indian States and their regions.",
      "It defines the Union as a collection of separate sovereign states.",
    ],
    answer:
      "It includes British India, Indian States, and territories willing to join.",
  },
  {
    question:
      "What autonomy principle was outlined in the Objective Resolution?",
    options: [
      "Territories retain status as autonomous units with residual powers, except those assigned to the Union.",
      "All territories must be governed by the Union without exception.",
      "Territories have no autonomy and are entirely controlled by the central government.",
      "Territories must merge into a unitary system under the central government.",
    ],
    answer:
      "Territories retain status as autonomous units with residual powers, except those assigned to the Union.",
  },
  {
    question:
      "According to the Objective Resolution, from where does all power derive?",
    options: [
      "From the people of India",
      "From the central government",
      "From the Parliament",
      "From the judiciary",
    ],
    answer: "From the people of India",
  },
  {
    question:
      "What types of justice were guaranteed by the Objective Resolution?",
    options: [
      "Social, economic, and political justice",
      "Only social justice",
      "Political and religious justice",
      "Only economic justice",
    ],
    answer: "Social, economic, and political justice",
  },
  {
    question: "What freedoms were promised by the Objective Resolution?",
    options: [
      "Freedom of thought, expression, and action",
      "Freedom of religion and speech",
      "Freedom of press and expression",
      "Freedom from military control",
    ],
    answer: "Freedom of thought, expression, and action",
  },
  {
    question:
      "What safeguards were included for minorities in the Objective Resolution?",
    options: [
      "Provisions for minorities and backward classes",
      "Reservations for religious minorities",
      "Special powers for cultural groups",
      "Rights for linguistic minorities only",
    ],
    answer: "Provisions for minorities and backward classes",
  },
  {
    question:
      "What territorial rights were emphasized in the Objective Resolution?",
    options: [
      "Sovereign rights on land, sea, and air maintained",
      "Territorial sovereignty limited to land only",
      "Sovereignty over disputed territories",
      "Territorial sovereignty under international law",
    ],
    answer: "Sovereign rights on land, sea, and air maintained",
  },
  {
    question:
      "What global commitment was outlined in the Objective Resolution?",
    options: [
      "Commitment to world peace and welfare",
      "Commitment to supporting global military alliances",
      "Commitment to global economic dominance",
      "Commitment to political neutrality",
    ],
    answer: "Commitment to world peace and welfare",
  },
  {
    question:
      "What part of the Constitution is a modified version of the Objective Resolution?",
    options: [
      "The Preamble of the Constitution of India",
      "The Fundamental Rights",
      "The Directive Principles of State Policy",
      "The National Flag",
    ],
    answer: "The Preamble of the Constitution of India",
  },
  {
    question: "When was the Constituent Assembly of India formed?",
    options: ["November 1946", "January 1947", "August 1947", "December 1946"],
    answer: "November 1946",
  },
  {
    question: "Under which plan was the Constituent Assembly formed?",
    options: [
      "The Cabinet Mission Plan",
      "The Mountbatten Plan",
      "The Cripps Proposal",
      "The Simon Commission Plan",
    ],
    answer: "The Cabinet Mission Plan",
  },
  {
    question: "What was the total strength of the Constituent Assembly?",
    options: ["389 members", "300 members", "500 members", "350 members"],
    answer: "389 members",
  },
  {
    question:
      "How many members in the Constituent Assembly were from British India?",
    options: ["296 members", "200 members", "350 members", "250 members"],
    answer: "296 members",
  },
  {
    question:
      "How many members in the Constituent Assembly were from Princely States?",
    options: ["93 members", "100 members", "75 members", "50 members"],
    answer: "93 members",
  },
  {
    question:
      "How were the members of the Constituent Assembly from British provinces selected?",
    options: [
      "Through proportional representation using a Single Transferable Vote",
      "Through direct election by the people",
      "By nomination from the British government",
      "By appointment from the Congress party",
    ],
    answer:
      "Through proportional representation using a Single Transferable Vote",
  },
  {
    question:
      "Who nominated the representatives from Princely States to the Constituent Assembly?",
    options: [
      "The heads of Princely States",
      "The British government",
      "The Indian National Congress",
      "The Muslim League",
    ],
    answer: "The heads of Princely States",
  },
  {
    question: "What groups were represented in the Constituent Assembly?",
    options: [
      "Hindus, Muslims, Sikhs, Parsis, Anglo-Indians, Indian Christians, SCs, STs, and women from these sections",
      "Only Hindus and Muslims",
      "Only upper-caste Hindus and Muslims",
      "Only representatives from British India",
    ],
    answer:
      "Hindus, Muslims, Sikhs, Parsis, Anglo-Indians, Indian Christians, SCs, STs, and women from these sections",
  },
  {
    question:
      "Which notable leader did not participate in the Constituent Assembly?",
    options: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Sardar Vallabhbhai Patel",
      "B.R. Ambedkar",
    ],
    answer: "Mahatma Gandhi",
  },
  {
    question:
      "Why did 93 seats allotted to Princely States in the Constituent Assembly remain unfilled?",
    options: [
      "The Princely States opted out.",
      "The British government did not allow it.",
      "The seats were vacant by default.",
      "There were no representatives from Princely States.",
    ],
    answer: "The Princely States opted out.",
  },
  {
    question: "How many total sessions were held by the Constituent Assembly?",
    options: ["11 sessions", "15 sessions", "10 sessions", "5 sessions"],
    answer: "11 sessions",
  },
  {
    question: "What was the total duration of the Constituent Assembly?",
    options: [
      "2 years, 11 months, and 18 days",
      "3 years",
      "1 year, 6 months",
      "2 years",
    ],
    answer: "2 years, 11 months, and 18 days",
  },
  {
    question: "What was the total expenditure of the Constituent Assembly?",
    options: ["64 lakh", "50 lakh", "75 lakh", "100 lakh"],
    answer: "64 lakh",
  },
  {
    question:
      "What symbol was adopted as the seal of the Constituent Assembly?",
    options: ["Elephant", "Lion", "Peacock", "Lotus"],
    answer: "Elephant",
  },
  {
    question:
      "What change did the Independence Act, 1947, bring to the Constituent Assembly?",
    options: [
      "Declared it a fully sovereign body",
      "Made it a representative body for the British government",
      "Appointed a new President for the Assembly",
      "Terminated its powers",
    ],
    answer: "Declared it a fully sovereign body",
  },
  {
    question:
      "Who chaired the Constituent Assembly in its legislative functions?",
    options: [
      "G. V. Mavalankar",
      "Dr. Rajendra Prasad",
      "Jawaharlal Nehru",
      "Sardar Vallabhbhai Patel",
    ],
    answer: "G. V. Mavalankar",
  },
  {
    question:
      "Who chaired the Constituent Assembly in its constituent functions?",
    options: [
      "Dr. Rajendra Prasad",
      "Jawaharlal Nehru",
      "Sardar Vallabhbhai Patel",
      "G. V. Mavalankar",
    ],
    answer: "Dr. Rajendra Prasad",
  },
  {
    question:
      "What was the reduced membership of the Constituent Assembly after the Muslim League's withdrawal?",
    options: ["299 members", "350 members", "250 members", "300 members"],
    answer: "299 members",
  },
  {
    question: "Who was the Constitutional Adviser to the Constituent Assembly?",
    options: [
      "Sir B. N. Rau",
      "Sardar Vallabhbhai Patel",
      "Jawaharlal Nehru",
      "Dr. Rajendra Prasad",
    ],
    answer: "Sir B. N. Rau",
  },
  {
    question: "Who served as the Secretary to the Constituent Assembly?",
    options: [
      "H.V.R. Iyengar",
      "G. V. Mavalankar",
      "Sardar Vallabhbhai Patel",
      "Jawaharlal Nehru",
    ],
    answer: "H.V.R. Iyengar",
  },
  {
    question: "Who was the chief draftsman of the Indian Constitution?",
    options: [
      "S.N. Mukherjee",
      "B.R. Ambedkar",
      "Jawaharlal Nehru",
      "Sir B. N. Rau",
    ],
    answer: "S.N. Mukherjee",
  },
  {
    question: "Who was the calligrapher of the Indian Constitution?",
    options: [
      "Prem Behari Raizada",
      "Nand Lal Bose",
      "Vasant Krishan Vaidya",
      "B.R. Sinha",
    ],
    answer: "Prem Behari Raizada",
  },
  {
    question: "Who decorated the Indian Constitution?",
    options: [
      "Nand Lal Bose and B.R. Sinha",
      "S.N. Mukherjee and Prem Behari Raizada",
      "Vasant Krishan Vaidya and Nand Lal Bose",
      "Jawaharlal Nehru and Dr. Rajendra Prasad",
    ],
    answer: "Nand Lal Bose and B.R. Sinha",
  },
  {
    question: "Who were the Hindi calligraphers for the Indian Constitution?",
    options: [
      "Vasant Krishan Vaidya and illuminated by Nand Lal Bose",
      "Prem Behari Raizada and Nand Lal Bose",
      "Vasant Krishan Vaidya and B.R. Sinha",
      "S.N. Mukherjee and Prem Behari Raizada",
    ],
    answer: "Vasant Krishan Vaidya and illuminated by Nand Lal Bose",
  },
  {
    question: "How many women were initially part of the Constituent Assembly?",
    options: [
      "15 women, later increased by 2",
      "10 women",
      "20 women, later increased by 5",
      "25 women",
    ],
    answer: "15 women, later increased by 2",
  },
  {
    question: "How many women were signatories of the Indian Constitution?",
    options: ["11 women", "5 women", "20 women", "15 women"],
    answer: "11 women",
  },
  {
    question: "Name any three women signatories of the Indian Constitution.",
    options: [
      "G. Durgabai, Ammu Swaminathan, and Amrit Kaur",
      "Sarojini Naidu, G. Durgabai, and Kasturba Gandhi",
      "Ammu Swaminathan, B.R. Ambedkar, and Amrit Kaur",
      "Sardar Vallabhbhai Patel, Kasturba Gandhi, and G. Durgabai",
    ],
    answer: "G. Durgabai, Ammu Swaminathan, and Amrit Kaur",
  },
  {
    question:
      "Who was the chairman of the Union Powers Committee in the Constituent Assembly?",
    options: [
      "Jawaharlal Nehru",
      "Dr. Rajendra Prasad",
      "Sardar Vallabhbhai Patel",
      "G. V. Mavalankar",
    ],
    answer: "Jawaharlal Nehru",
  },
  {
    question:
      "Which committees were chaired by Jawaharlal Nehru in the Constituent Assembly?",
    options: [
      "Union Powers Committee, Union Constitution Committee, and States Committee",
      "Constitutional Committee, Minorities Committee, and Drafting Committee",
      "Union Powers Committee, Finance Committee, and States Committee",
      "Drafting Committee, Union Constitution Committee, and Social Justice Committee",
    ],
    answer:
      "Union Powers Committee, Union Constitution Committee, and States Committee",
  },
  {
    question:
      "What was the purpose of the Expert Committee of the Congress formed on July 8, 1946?",
    options: [
      "To prepare material for the Constituent Assembly",
      "To draft the Indian Constitution",
      "To decide on the future of the princely states",
      "To oversee the independence process",
    ],
    answer: "To prepare material for the Constituent Assembly",
  },
  {
    question:
      "Who were some members of the Expert Committee of the Congress chaired by Jawaharlal Nehru?",
    options: [
      "M. Asaf Ali, K.M. Munshi, N. Gopalaswami Ayyangar, K.T. Shah, D.R. Gadgil, Humayun Kabir, and K. Santhanam",
      "Jawaharlal Nehru, Sardar Vallabhbhai Patel, and Maulana Abul Kalam Azad",
      "G. Durgabai, B.R. Ambedkar, and S.N. Mukherjee",
      "Mahatma Gandhi, C. Rajagopalachari, and Jawaharlal Nehru",
    ],
    answer:
      "M. Asaf Ali, K.M. Munshi, N. Gopalaswami Ayyangar, K.T. Shah, D.R. Gadgil, Humayun Kabir, and K. Santhanam",
  },
  {
    question:
      "Which committees were chaired by Dr. Rajendra Prasad in the Constituent Assembly?",
    options: [
      "Rules of Procedure Committee and Steering Committee",
      "Union Constitution Committee and Minorities Committee",
      "Drafting Committee and Union Powers Committee",
      "Fundamental Rights Committee and Provincial Constitution Committee",
    ],
    answer: "Rules of Procedure Committee and Steering Committee",
  },
  {
    question:
      "Who chaired the Provincial Constitution Committee in the Constituent Assembly?",
    options: [
      "Sardar Patel",
      "Dr. Rajendra Prasad",
      "Jawaharlal Nehru",
      "G. V. Mavalankar",
    ],
    answer: "Sardar Patel",
  },
  {
    question:
      "Which committee on Fundamental Rights and Minorities had five sub-committees?",
    options: [
      "Advisory Committee chaired by Sardar Patel",
      "Union Constitution Committee",
      "Minorities Rights Committee",
      "Drafting Committee",
    ],
    answer: "Advisory Committee chaired by Sardar Patel",
  },
  {
    question: "Who chaired the Fundamental Rights Sub-Committee?",
    options: [
      "J.B. Kripalani",
      "Jawaharlal Nehru",
      "Gopinath Bardoloi",
      "B.R. Ambedkar",
    ],
    answer: "J.B. Kripalani",
  },
  {
    question: "Who chaired the Minorities Sub-Committee?",
    options: [
      "H.C. Mukherjee",
      "Sardar Patel",
      "Syed Mohammad Saadullah",
      "T.T. Krishnamachari",
    ],
    answer: "H.C. Mukherjee",
  },
  {
    question:
      "Who chaired the North-East Frontier Tribal Areas and Assam Excluded & Partially Excluded Areas Sub-Committee?",
    options: [
      "Gopinath Bardoloi",
      "A.V. Thakkar",
      "N. Gopalaswami Ayyangar",
      "Sardar Vallabhbhai Patel",
    ],
    answer: "Gopinath Bardoloi",
  },
  {
    question:
      "Who chaired the Sub-Committee on Excluded and Partially Excluded Areas (other than Assam)?",
    options: [
      "A.V. Thakkar",
      "Jawaharlal Nehru",
      "Dr. Rajendra Prasad",
      "B.R. Ambedkar",
    ],
    answer: "A.V. Thakkar",
  },
  {
    question:
      "Which Sub-Committee dealt with the North-West Frontier Tribal Areas?",
    options: [
      "North-West Frontier Tribal Areas Sub-Committee",
      "Excluded Areas Committee",
      "Fundamental Rights Sub-Committee",
      "Minorities Sub-Committee",
    ],
    answer: "North-West Frontier Tribal Areas Sub-Committee",
  },
  {
    question:
      "Who was the chairman of the Drafting Committee of the Indian Constitution?",
    options: [
      "Dr. B.R. Ambedkar",
      "Jawaharlal Nehru",
      "Sardar Vallabhbhai Patel",
      "M. Asaf Ali",
    ],
    answer: "Dr. B.R. Ambedkar",
  },
  {
    question:
      "Who were the members of the Drafting Committee alongside Dr. B.R. Ambedkar?",
    options: [
      "N. Gopalaswamy Ayyangar, Alladi Krishnaswamy Ayyar, Dr. K.M. Munshi, Syed Mohammad Saadullah, N. Madhava Rau, T.T. Krishnamachari",
      "M. Asaf Ali, Humayun Kabir, and K. Santhanam",
      "Jawaharlal Nehru, Sardar Patel, and B.R. Ambedkar",
      "G.V. Mavalankar, Dr. Rajendra Prasad, and Jawaharlal Nehru",
    ],
    answer:
      "N. Gopalaswamy Ayyangar, Alladi Krishnaswamy Ayyar, Dr. K.M. Munshi, Syed Mohammad Saadullah, N. Madhava Rau, T.T. Krishnamachari",
  },
  {
    question:
      "Who replaced B.L. Mitter in the Drafting Committee due to ill health?",
    options: [
      "N. Madhava Rau",
      "T.T. Krishnamachari",
      "Dr. K.M. Munshi",
      "S.N. Mukherjee",
    ],
    answer: "N. Madhava Rau",
  },
  {
    question:
      "Who replaced D.P. Khaitan in the Drafting Committee after his death in 1948?",
    options: [
      "T.T. Krishnamachari",
      "N. Madhava Rau",
      "Dr. B.R. Ambedkar",
      "Jawaharlal Nehru",
    ],
    answer: "T.T. Krishnamachari",
  },
  {
    question: "When was the first draft of the Indian Constitution published?",
    options: ["February 1948", "October 1947", "August 1949", "January 1950"],
    answer: "February 1948",
  },
  {
    question:
      "How long was the public feedback period for the first draft of the Indian Constitution?",
    options: ["Eight months", "Four months", "Six months", "One year"],
    answer: "Eight months",
  },
  {
    question: "When was the second draft of the Indian Constitution published?",
    options: ["October 1948", "January 1949", "February 1949", "March 1949"],
    answer: "October 1948",
  },
  {
    question: "How many days did the Drafting Committee hold meetings?",
    options: ["141 days", "120 days", "100 days", "180 days"],
    answer: "141 days",
  },
  {
    question:
      "How long did it take to complete the drafting of the Indian Constitution?",
    options: ["Less than six months", "One year", "Eight months", "Two years"],
    answer: "Less than six months",
  },
  {
    question: "Which committee was chaired by Dr. Rajendra Prasad?",
    options: [
      "Finance and Staff Committee, National Flag Committee",
      "Fundamental Rights Committee",
      "Drafting Committee",
      "Minorities Committee",
    ],
    answer: "Finance and Staff Committee, National Flag Committee",
  },
  {
    question: "Who chaired the Credentials Committee?",
    options: [
      "Alladi Krishnaswami Ayyar",
      "Dr. Rajendra Prasad",
      "B. Pattabhi Sitaramayya",
      "Jawaharlal Nehru",
    ],
    answer: "Alladi Krishnaswami Ayyar",
  },
  {
    question: "Which committees were chaired by B. Pattabhi Sitaramayya?",
    options: [
      "House Committee, Chief Commissioners’ Provinces Committee",
      "Drafting Committee, Fundamental Rights Committee",
      "National Flag Committee, Credentials Committee",
      "Rules of Procedure Committee, Provincial Constitution Committee",
    ],
    answer: "House Committee, Chief Commissioners’ Provinces Committee",
  },
  {
    question: "Which committee was chaired by Nalini Ranjan Sarkar?",
    options: [
      "Financial Provisions Committee",
      "Minorities Sub-Committee",
      "Union Constitution Committee",
      "Fundamental Rights Committee",
    ],
    answer: "Financial Provisions Committee",
  },
  {
    question: "Who chaired the Linguistic Provinces Commission?",
    options: [
      "S.K. Dar",
      "N. Gopalaswamy Ayyangar",
      "Sardar Patel",
      "Jawaharlal Nehru",
    ],
    answer: "S.K. Dar",
  },
  {
    question: "Which committee was chaired by Jawaharlal Nehru?",
    options: [
      "Draft Constitution Committee",
      "Minorities Committee",
      "House Committee",
      "Advisory Committee",
    ],
    answer: "Draft Constitution Committee",
  },
  {
    question: "Who chaired the Press Gallery Committee?",
    options: [
      "Usha Nath Sen",
      "G.V. Mavalankar",
      "Jawaharlal Nehru",
      "Dr. K.M. Munshi",
    ],
    answer: "Usha Nath Sen",
  },
  {
    question: "Which committees were chaired by S. Varadachari?",
    options: [
      "Citizenship Committee, Supreme Court Committee",
      "Fundamental Rights Committee, Drafting Committee",
      "House Committee, Credentials Committee",
      "National Flag Committee, Finance Committee",
    ],
    answer: "Citizenship Committee, Supreme Court Committee",
  },
  {
    question: "Which committee was chaired by Dr. K.M. Munshi?",
    options: [
      "Order of Business Committee",
      "Minorities Committee",
      "Fundamental Rights Committee",
      "Provisional Parliament Committee",
    ],
    answer: "Order of Business Committee",
  },
  {
    question: "Who chaired the Functions of Constituent Assembly Committee?",
    options: [
      "G.V. Mavalankar",
      "Dr. Rajendra Prasad",
      "Jawaharlal Nehru",
      "B. Pattabhi Sitaramayya",
    ],
    answer: "G.V. Mavalankar",
  },
  {
    question: "When was the Constitution of India adopted?",
    options: [
      "26 November 1949",
      "15 August 1947",
      "26 January 1950",
      "15 August 1948",
    ],
    answer: "26 November 1949",
  },
  {
    question:
      "How many members of the Constituent Assembly signed the Constitution on November 26, 1949?",
    options: ["284 members", "299 members", "310 members", "324 members"],
    answer: "284 members",
  },
  {
    question:
      "How many Articles and Schedules were included in the original Constitution of India?",
    options: [
      "395 Articles and 8 Schedules",
      "300 Articles and 10 Schedules",
      "400 Articles and 7 Schedules",
      "350 Articles and 6 Schedules",
    ],
    answer: "395 Articles and 8 Schedules",
  },
  {
    question: "When was the Preamble of the Constitution of India enacted?",
    options: [
      "After the entire Constitution was enacted",
      "Before the Constitution was enacted",
      "On 26 January 1950",
      "On 15 August 1947",
    ],
    answer: "After the entire Constitution was enacted",
  },
  {
    question:
      "Which provisions of the Constitution came into force on November 26, 1949?",
    options: [
      "Citizenship, Elections, provisional Parliament, temporary and transitional provisions, and short titles contained in certain Articles",
      "Fundamental Rights, Directive Principles, and Fundamental Duties",
      "Judiciary and Executive provisions",
      "National Flag and National Anthem provisions",
    ],
    answer:
      "Citizenship, Elections, provisional Parliament, temporary and transitional provisions, and short titles contained in certain Articles",
  },
  {
    question: "When did the major part of the Constitution come into force?",
    options: [
      "26 January 1950",
      "26 November 1949",
      "15 August 1947",
      "1 January 1950",
    ],
    answer: "26 January 1950",
  },
  {
    question: "What was celebrated on January 26, 1930?",
    options: [
      "Purna Swaraj Day",
      "Independence Day",
      "Constitution Day",
      "Republic Day",
    ],
    answer: "Purna Swaraj Day",
  },
  {
    question:
      "Which Acts were repealed when the Indian Constitution came into force?",
    options: [
      "The Indian Independence Act, 1947 and the Government of India Act, 1935",
      "The Government of India Act, 1919 and the Indian Councils Act, 1909",
      "The Rowlatt Act and the Vernacular Press Act",
      "The Act for the Abolition of Sati and the Untouchability Act",
    ],
    answer:
      "The Indian Independence Act, 1947 and the Government of India Act, 1935",
  },
  {
    question:
      "Which act continued after the enactment of the Indian Constitution?",
    options: [
      "The Abolition of Privy Council Jurisdiction Act (1949)",
      "The Indian Independence Act (1947)",
      "The Government of India Act (1935)",
      "The Indian Councils Act (1909)",
    ],
    answer: "The Abolition of Privy Council Jurisdiction Act (1949)",
  },
  {
    question:
      "What feature of the Indian Constitution was borrowed from the Government of India Act, 1935?",
    options: [
      "Federal scheme, Governor’s office, Judiciary, Public Service Commission, Emergency Provisions and Administrative details",
      "The Preamble and Fundamental Rights",
      "Bicameralism and Rule of Law",
      "Emergency provisions and Impeachment of President",
    ],
    answer:
      "Federal scheme, Governor’s office, Judiciary, Public Service Commission, Emergency Provisions and Administrative details",
  },
  {
    question:
      "What features of the British Constitution were adopted in the Indian Constitution?",
    options: [
      "British Parliamentary government, Rule of Law, Single Citizenship, Cabinet System, Parliamentary privileges, Bicameralism, and prerogative writs",
      "Bicameralism, Presidential government, and Fundamental Rights",
      "Direct elections, Rule of Law, and Sovereign state status",
      "Parliamentary sovereignty, Legal immunity, and Fundamental Duties",
    ],
    answer:
      "British Parliamentary government, Rule of Law, Single Citizenship, Cabinet System, Parliamentary privileges, Bicameralism, and prerogative writs",
  },
  {
    question:
      "Which concepts were borrowed from the US Constitution for the Indian Constitution?",
    options: [
      "Fundamental Rights, Independent Judiciary, Impeachment of President, Judicial review, Removal of Supreme Court and High Court judges, and post of Vice-president",
      "Federal system, Concurrent List, and Direct elections",
      "Bicameralism, Judicial appointments, and Emergency provisions",
      "Presidential system, Fundamental Rights, and Directive Principles",
    ],
    answer:
      "Fundamental Rights, Independent Judiciary, Impeachment of President, Judicial review, Removal of Supreme Court and High Court judges, and post of Vice-president",
  },
  {
    question:
      "From which country was the method of election of the President and nomination of Members to the Rajya Sabha adopted?",
    options: ["Ireland", "United States", "Australia", "South Africa"],
    answer: "Ireland",
  },
  {
    question: "What features were borrowed from the Canadian Constitution?",
    options: [
      "Federation with a strong centre, vesting Residuary powers to the centre, Appointment of State Governors by the Centre, and Advisory Jurisdiction of the Supreme Court",
      "Bicameral system, Fundamental Rights, and Presidential system",
      "Direct election of President, Concurrent List, and Union Territories",
      "Independence of Judiciary, Impeachment of President, and Judicial review",
    ],
    answer:
      "Federation with a strong centre, vesting Residuary powers to the centre, Appointment of State Governors by the Centre, and Advisory Jurisdiction of the Supreme Court",
  },
  {
    question:
      "What feature of the Australian Constitution is included in the Indian Constitution?",
    options: [
      "Concurrent List, Joint sitting of both the Houses of Parliament",
      "Federal system with a weak central government",
      "Independence of judiciary and Judicial review",
      "Direct election of President and Legislative Assembly powers",
    ],
    answer: "Concurrent List, Joint sitting of both the Houses of Parliament",
  },
  {
    question:
      "From which constitution was the suspension of Fundamental Rights during Emergency borrowed?",
    options: [
      "Germany (Weimar Constitution)",
      "United States (Constitution)",
      "France (Constitution)",
      "South Africa (Constitution)",
    ],
    answer: "Germany (Weimar Constitution)",
  },
  {
    question:
      "Which feature of the USSR Constitution was included in the Indian Constitution?",
    options: [
      "Fundamental Duties and the ideal of Justice (Social, Economic and Political) in the Preamble",
      "Soviet-style economic planning",
      "Union of Sovereign Republics",
      "Abolition of the Privy Council",
    ],
    answer:
      "Fundamental Duties and the ideal of Justice (Social, Economic and Political) in the Preamble",
  },
  {
    question:
      "From which country was the ideal of Liberty, Equality, and Fraternity in the Preamble borrowed?",
    options: ["France", "United States", "United Kingdom", "Germany"],
    answer: "France",
  },
  {
    question:
      "Which feature of the South African Constitution was adopted in the Indian Constitution?",
    options: [
      "Procedure for Amendment of the Constitution and election of members of Rajya Sabha",
      "Bicameral legislature and Bill of Rights",
      "Indirect election of President and Emergency provisions",
      "Independent Judiciary and the system of Checks and Balances",
    ],
    answer:
      "Procedure for Amendment of the Constitution and election of members of Rajya Sabha",
  },
  {
    question:
      "From which country was the procedure established by law adopted?",
    options: ["Japan", "United Kingdom", "United States", "Germany"],
    answer: "Japan",
  },
];
