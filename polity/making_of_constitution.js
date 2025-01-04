const makingConstitutionQuestions = [
    {
        "question": "What is a law in the context of the constitution?",
        "answer": "Rules governing behaviour, either written or unwritten; enacted by legislative bodies with legal force. Example: BNSS, Citizenship Amendment Act"
    },
    {
        "question": "What is an ordinance?",
        "answer": "A temporary law issued by the President or Governor when the legislature is not in session; requires legislative approval. Example: COVID-19 lockdown ordinance"
    },
    {
        "question": "What are bylaws?",
        "answer": "Regulations made by local authorities; subordinate to central/state laws. Example: Municipal construction regulations"
    },
    {
        "question": "What is a constitution?",
        "answer": "The supreme law outlining government structure and powers; foundation of the legal system. Example: Constitution of India"
    },
    {
        "question": "What are rules in the context of law?",
        "answer": "Detailed instructions issued by the executive to implement laws; subordinate to laws and bylaws. Example: Passport application rules"
    },
    {
        "question": "What are regulations?",
        "answer": "Specific and technical guidelines issued by regulatory bodies. Example: SEBI regulations for listed companies"
    },
    {
        "question": "Who defined the Rule of Law and what does it assert?",
        "answer": "British jurist A.V. Dicey defined it, asserting that law governs a nation, ensuring no individual or institution, including the government, is above it."
    },
    {
        "question": "What is the supremacy of law in the context of the Rule of Law?",
        "answer": "Law is the highest authority."
    },
    {
        "question": "What does 'Equality Before the Law' mean under the Rule of Law?",
        "answer": "All individuals are subject to the same laws."
    },
    {
        "question": "What is meant by accountability under the Rule of Law?",
        "answer": "Government actions must be legally justified."
    },
    {
        "question": "What is legal certainty in the context of the Rule of Law?",
        "answer": "Laws must be clear, public, and stable."
    },
    {
        "question": "How does the Supreme Court of India regard the Rule of Law?",
        "answer": "The Supreme Court recognizes the Rule of Law as a ‘Basic Structure’ of the Constitution, making it impervious to amendments."
    },
    {
        "question": "What is Constitutionalism as defined by Friedrich?",
        "answer": "Constitutionalism ensures that the government operates within set rules, promoting fairness and accountability."
    },
    {
        "question": "What is the primary purpose of a constitution?",
        "answer": "To provide a framework for government, determining its nature and form."
    },
    {
        "question": "What responsibilities does a constitution outline?",
        "answer": "It outlines the responsibilities of the executive, legislature, and judiciary."
    },
    {
        "question": "What does the legislature do according to the constitution?",
        "answer": "The legislature makes laws in accordance with the limits and directions provided by the constitution."
    },
    {
        "question": "Can a country have a Constitution without true Constitutionalism?",
        "answer": "Yes, for instance, a dictatorship might have a Constitution that isn't followed."
    },
    {
        "question": "What is a Written Constitution?",
        "answer": "A formal document outlining government structure and citizen rights. Example: U.S. Constitution."
    },
    {
        "question": "What is an Unwritten Constitution?",
        "answer": "Composed of various sources like statutes and traditions, not in a single document. Example: United Kingdom Constitution."
    },
    {
        "question": "What is a Flexible Constitution?",
        "answer": "A constitution that can be easily amended like regular laws. Example: British Constitution."
    },
    {
        "question": "What is a Rigid Constitution?",
        "answer": "A constitution that requires a complex process for amendments. Example: U.S. Constitution."
    },
    {
        "question": "What is a Federal Constitution?",
        "answer": "A constitution that divides powers between central and regional governments. Examples: U.S., Germany."
    },
    {
        "question": "What is a Unitary Constitution?",
        "answer": "A constitution that centralizes power in one government. Example: United Kingdom."
    },
    {
        "question": "What is a Presidential Constitution?",
        "answer": "A constitution that separates executive and legislative branches; the President is both head of state and government. Example: United States."
    },
    {
        "question": "What is a Parliamentary Constitution?",
        "answer": "A constitution where the executive comes from the legislature; the Prime Minister leads. Examples: U.K., India."
    },
    {
        "question": "What is a Monarchical Constitution?",
        "answer": "A constitution that recognizes a monarch, either with limited powers (constitutional) or significant powers (absolute). Examples: U.K., Sweden."
    },
    {
        "question": "What is a Republican Constitution?",
        "answer": "A constitution that establishes a republic without a monarchy; the head of state is elected. Examples: U.S., France."
    },
    {
        "question": "What is a Theocratic Constitution?",
        "answer": "A constitution based on religious laws and principles. Example: Iran."
    },
    {
        "question": "What is a Secular Constitution?",
        "answer": "A constitution that separates religion from government laws. Example: Indian Constitution."
    },
    {
        "question": "Who proposed the idea of a Constituent Assembly for India in 1934?",
        "answer": "M.N. Roy"
    },
    {
        "question": "When did the Indian National Congress officially demand a Constituent Assembly?",
        "answer": "1935"
    },
    {
        "question": "What did Jawaharlal Nehru state about the constitution in 1938?",
        "answer": "The constitution must be created by a Constituent Assembly elected through an adult franchise."
    },
    {
        "question": "When did the British government accept the demand for a Constituent Assembly in principle?",
        "answer": "1940, during the August Offer"
    },
    {
        "question": "What did the Cripps Proposal of 1942 suggest?",
        "answer": "Drafting an independent Constitution post-World War II"
    },
    {
        "question": "Why did the Muslim League reject the Cripps Proposal?",
        "answer": "It sought the division of India into two autonomous states."
    },
    {
        "question": "What did the Cabinet Mission Plan of 1946 propose regarding the Constituent Assembly?",
        "answer": "A single Constituent Assembly, gaining some acceptance from the Muslim League."
    },
    {
        "question": "When was the first sitting of the Constituent Assembly held?",
        "answer": "9th December 1946"
    },
    {
        "question": "Who was elected as the President of the Constituent Assembly on 11th December 1946?",
        "answer": "Dr. Rajendra Prasad"
    },
    {
        "question": "Who was the temporary chairman of the Constituent Assembly?",
        "answer": "Dr. Sachidanand Sinha"
    },
    {
        "question": "Who were the Vice-Presidents of the Constituent Assembly?",
        "answer": "H.C. Mukherjee and V.T. Krishnamachari"
    },
    {
        "question": "When was the Objective Resolution introduced and by whom?",
        "answer": "13th December 1946, by Jawaharlal Nehru"
    },
    {
        "question": "When was the Objective Resolution adopted?",
        "answer": "22nd January 1947"
    },
    {
        "question": "When was the National Flag adopted by the Constituent Assembly?",
        "answer": "22nd July 1947"
    },
    {
        "question": "What significant event took place on 15th August 1947?",
        "answer": "Transfer of power established the dominions of India and Pakistan"
    },
    {
        "question": "When did the Constituent Assembly ratify India's membership in the Commonwealth?",
        "answer": "May 1949"
    },
    {
        "question": "When was the Constitution adopted or enacted?",
        "answer": "26th November 1949"
    },
    {
        "question": "What was adopted on 24th January 1950 by the Constituent Assembly?",
        "answer": "The National Song and National Anthem"
    },
    {
        "question": "Who was elected as the first President of India on 24th January 1950?",
        "answer": "Dr. Rajendra Prasad"
    },
    {
        "question": "When did the Constitution of India come into force?",
        "answer": "26th January 1950"
    },
    {
        "question": "What did the Objective Resolution declare India as?",
        "answer": "An Independent Sovereign Republic"
    },
    {
        "question": "What did the Objective Resolution state about the Union of Territories?",
        "answer": "It includes British India, Indian States, and territories willing to join."
    },
    {
        "question": "What autonomy principle was outlined in the Objective Resolution?",
        "answer": "Territories retain status as autonomous units with residual powers, except those assigned to the Union."
    },
    {
        "question": "According to the Objective Resolution, from where does all power derive?",
        "answer": "From the people of India"
    },
    {
        "question": "What types of justice were guaranteed by the Objective Resolution?",
        "answer": "Social, economic, and political justice"
    },
    {
        "question": "What freedoms were promised by the Objective Resolution?",
        "answer": "Freedom of thought, expression, and action"
    },
    {
        "question": "What safeguards were included for minorities in the Objective Resolution?",
        "answer": "Provisions for minorities and backward classes"
    },
    {
        "question": "What territorial rights were emphasized in the Objective Resolution?",
        "answer": "Sovereign rights on land, sea, and air maintained"
    },
    {
        "question": "What global commitment was outlined in the Objective Resolution?",
        "answer": "Commitment to world peace and welfare"
    },
    {
        "question": "What part of the Constitution is a modified version of the Objective Resolution?",
        "answer": "The Preamble of the Constitution of India"
    },
    {
        "question": "When was the Constituent Assembly of India formed?",
        "answer": "November 1946"
    },
    {
        "question": "Under which plan was the Constituent Assembly formed?",
        "answer": "The Cabinet Mission Plan"
    },
    {
        "question": "What was the total strength of the Constituent Assembly?",
        "answer": "389 members"
    },
    {
        "question": "How many members in the Constituent Assembly were from British India?",
        "answer": "296 members"
    },
    {
        "question": "How many members in the Constituent Assembly were from Princely States?",
        "answer": "93 members"
    },
    {
        "question": "How were the members of the Constituent Assembly from British provinces selected?",
        "answer": "Through proportional representation using a Single Transferable Vote"
    },
    {
        "question": "Who nominated the representatives from Princely States to the Constituent Assembly?",
        "answer": "The heads of Princely States"
    },
    {
        "question": "What groups were represented in the Constituent Assembly?",
        "answer": "Hindus, Muslims, Sikhs, Parsis, Anglo-Indians, Indian Christians, SCs, STs, and women from these sections"
    },
    {
        "question": "Which notable leader did not participate in the Constituent Assembly?",
        "answer": "Mahatma Gandhi"
    },
    {
        "question": "Why did 93 seats allotted to Princely States in the Constituent Assembly remain unfilled?",
        "answer": "The Princely States opted out."
    },
    {
        "question": "How many total sessions were held by the Constituent Assembly?",
        "answer": "11 sessions"
    },
    {
        "question": "What was the total duration of the Constituent Assembly?",
        "answer": "2 years, 11 months, and 18 days"
    },
    {
        "question": "What was the total expenditure of the Constituent Assembly?",
        "answer": "64 lakh"
    },
    {
        "question": "What symbol was adopted as the seal of the Constituent Assembly?",
        "answer": "Elephant"
    },
    {
        "question": "What change did the Independence Act, 1947, bring to the Constituent Assembly?",
        "answer": "Declared it a fully sovereign body"
    },
    {
        "question": "Who chaired the Constituent Assembly in its legislative functions?",
        "answer": "G. V. Mavalankar"
    },
    {
        "question": "Who chaired the Constituent Assembly in its constituent functions?",
        "answer": "Dr. Rajendra Prasad"
    },
    {
        "question": "What was the reduced membership of the Constituent Assembly after the Muslim League's withdrawal?",
        "answer": "299 members"
    },
    {
        "question": "Who was the Constitutional Adviser to the Constituent Assembly?",
        "answer": "Sir B. N. Rau"
    },
    {
        "question": "Who served as the Secretary to the Constituent Assembly?",
        "answer": "H.V.R. Iyengar"
    },
    {
        "question": "Who was the chief draftsman of the Indian Constitution?",
        "answer": "S.N. Mukherjee"
    },
    {
        "question": "Who was the calligrapher of the Indian Constitution?",
        "answer": "Prem Behari Raizada"
    },
    {
        "question": "Who decorated the Indian Constitution?",
        "answer": "Nand Lal Bose and B.R. Sinha"
    },
    {
        "question": "Who were the Hindi calligraphers for the Indian Constitution?",
        "answer": "Vasant Krishan Vaidya and illuminated by Nand Lal Bose"
    },
    {
        "question": "How many women were initially part of the Constituent Assembly?",
        "answer": "15 women, later increased by 2"
    },
    {
        "question": "How many women were signatories of the Indian Constitution?",
        "answer": "11 women"
    },
    {
        "question": "Name any three women signatories of the Indian Constitution.",
        "answer": "G. Durgabai, Ammu Swaminathan, and Amrit Kaur"
    },
    {
        "question": "Who was the chairman of the Union Powers Committee in the Constituent Assembly?",
        "answer": "Jawaharlal Nehru"
    },
    {
        "question": "Which committees were chaired by Jawaharlal Nehru in the Constituent Assembly?",
        "answer": "Union Powers Committee, Union Constitution Committee, and States Committee"
    },
    {
        "question": "What was the purpose of the Expert Committee of the Congress formed on July 8, 1946?",
        "answer": "To prepare material for the Constituent Assembly"
    },
    {
        "question": "Who were some members of the Expert Committee of the Congress chaired by Jawaharlal Nehru?",
        "answer": "M. Asaf Ali, K.M. Munshi, N. Gopalaswami Ayyangar, K.T. Shah, D.R. Gadgil, Humayun Kabir, and K. Santhanam"
    },
    {
        "question": "Which committees were chaired by Dr. Rajendra Prasad in the Constituent Assembly?",
        "answer": "Rules of Procedure Committee and Steering Committee"
    },
    {
        "question": "Who chaired the Provincial Constitution Committee in the Constituent Assembly?",
        "answer": "Sardar Patel"
    },
    {
        "question": "Which committee on Fundamental Rights and Minorities had five sub-committees?",
        "answer": "Advisory Committee chaired by Sardar Patel"
    },
    {
        "question": "Who chaired the Fundamental Rights Sub-Committee?",
        "answer": "J.B. Kripalani"
    },
    {
        "question": "Who chaired the Minorities Sub-Committee?",
        "answer": "H.C. Mukherjee"
    },
    {
        "question": "Who chaired the North-East Frontier Tribal Areas and Assam Excluded & Partially Excluded Areas Sub-Committee?",
        "answer": "Gopinath Bardoloi"
    },
    {
        "question": "Who chaired the Sub-Committee on Excluded and Partially Excluded Areas (other than Assam)?",
        "answer": "A.V. Thakkar"
    },
    {
        "question": "Which Sub-Committee dealt with the North-West Frontier Tribal Areas?",
        "answer": "North-West Frontier Tribal Areas Sub-Committee"
    },
    {
        "question": "Who was the chairman of the Drafting Committee of the Indian Constitution?",
        "answer": "Dr. B.R. Ambedkar"
    },
    {
        "question": "Who were the members of the Drafting Committee alongside Dr. B.R. Ambedkar?",
        "answer": "N. Gopalaswamy Ayyangar, Alladi Krishnaswamy Ayyar, Dr. K.M. Munshi, Syed Mohammad Saadullah, N. Madhava Rau, T.T. Krishnamachari"
    },
    {
        "question": "Who replaced B.L. Mitter in the Drafting Committee due to ill health?",
        "answer": "N. Madhava Rau"
    },
    {
        "question": "Who replaced D.P. Khaitan in the Drafting Committee after his death in 1948?",
        "answer": "T.T. Krishnamachari"
    },
    {
        "question": "When was the first draft of the Indian Constitution published?",
        "answer": "February 1948"
    },
    {
        "question": "How long was the public feedback period for the first draft of the Indian Constitution?",
        "answer": "Eight months"
    },
    {
        "question": "When was the second draft of the Indian Constitution published?",
        "answer": "October 1948"
    },
    {
        "question": "How many days did the Drafting Committee hold meetings?",
        "answer": "141 days"
    },
    {
        "question": "How long did it take to complete the drafting of the Indian Constitution?",
        "answer": "Less than six months"
    },
    {
        "question": "Which committee was chaired by Dr. Rajendra Prasad?",
        "answer": "Finance and Staff Committee, National Flag Committee"
    },
    {
        "question": "Who chaired the Credentials Committee?",
        "answer": "Alladi Krishnaswami Ayyar"
    },
    {
        "question": "Which committees were chaired by B. Pattabhi Sitaramayya?",
        "answer": "House Committee, Chief Commissioners’ Provinces Committee"
    },
    {
        "question": "Which committee was chaired by Nalini Ranjan Sarkar?",
        "answer": "Financial Provisions Committee"
    },
    {
        "question": "Who chaired the Linguistic Provinces Commission?",
        "answer": "S.K. Dar"
    },
    {
        "question": "Which committee was chaired by Jawaharlal Nehru?",
        "answer": "Draft Constitution Committee"
    },
    {
        "question": "Who chaired the Press Gallery Committee?",
        "answer": "Usha Nath Sen"
    },
    {
        "question": "Which committees were chaired by S. Varadachari?",
        "answer": "Citizenship Committee, Supreme Court Committee"
    },
    {
        "question": "Which committee was chaired by Dr. K.M. Munshi?",
        "answer": "Order of Business Committee"
    },
    {
        "question": "Who chaired the Functions of Constituent Assembly Committee?",
        "answer": "G.V. Mavalankar"
    },
    {
        "question": "When was the Constitution of India adopted?",
        "answer": "26 November 1949"
    },
    {
        "question": "How many members of the Constituent Assembly signed the Constitution on November 26, 1949?",
        "answer": "284 members"
    },
    {
        "question": "How many Articles and Schedules were included in the original Constitution of India?",
        "answer": "395 Articles and 8 Schedules"
    },
    {
        "question": "When was the Preamble of the Constitution of India enacted?",
        "answer": "After the entire Constitution was enacted"
    },
    {
        "question": "Which provisions of the Constitution came into force on November 26, 1949?",
        "answer": "Citizenship, Elections, provisional Parliament, temporary and transitional provisions, and short titles contained in certain Articles"
    },
    {
        "question": "When did the major part of the Constitution come into force?",
        "answer": "26 January 1950"
    },
    {
        "question": "What was celebrated on January 26, 1930?",
        "answer": "Purna Swaraj Day"
    },
    {
        "question": "Which Acts were repealed when the Indian Constitution came into force?",
        "answer": "The Indian Independence Act, 1947 and the Government of India Act, 1935"
    },
    {
        "question": "Which act continued after the enactment of the Indian Constitution?",
        "answer": "The Abolition of Privy Council Jurisdiction Act (1949)"
    },
    {
        "question": "What feature of the Indian Constitution was borrowed from the Government of India Act, 1935?",
        "answer": "Federal scheme, Governor’s office, Judiciary, Public Service Commission, Emergency Provisions and Administrative details"
    },
    {
        "question": "What features of the British Constitution were adopted in the Indian Constitution?",
        "answer": "British Parliamentary government, Rule of Law, Single Citizenship, Cabinet System, Parliamentary privileges, Bicameralism, and prerogative writs"
    },
    {
        "question": "Which concepts were borrowed from the US Constitution for the Indian Constitution?",
        "answer": "Fundamental Rights, Independent Judiciary, Impeachment of President, Judicial review, Removal of Supreme Court and High Court judges, and post of Vice-president"
    },
    {
        "question": "From which country was the method of election of the President and nomination of Members to the Rajya Sabha adopted?",
        "answer": "Ireland"
    },
    {
        "question": "What features were borrowed from the Canadian Constitution?",
        "answer": "Federation with a strong centre, vesting Residuary powers to the centre, Appointment of State Governors by the Centre, and Advisory Jurisdiction of the Supreme Court"
    },
    {
        "question": "What feature of the Australian Constitution is included in the Indian Constitution?",
        "answer": "Concurrent List, Joint sitting of both the Houses of Parliament"
    },
    {
        "question": "From which constitution was the suspension of Fundamental Rights during Emergency borrowed?",
        "answer": "Germany (Weimar Constitution)"
    },
    {
        "question": "Which feature of the USSR Constitution was included in the Indian Constitution?",
        "answer": "Fundamental Duties and the ideal of Justice (Social, Economic and Political) in the Preamble"
    },
    {
        "question": "From which country was the ideal of Liberty, Equality, and Fraternity in the Preamble borrowed?",
        "answer": "France"
    },
    {
        "question": "Which feature of the South African Constitution was adopted in the Indian Constitution?",
        "answer": "Procedure for Amendment of the Constitution and election of members of Rajya Sabha"
    },
    {
        "question": "From which country was the procedure established by law adopted?",
        "answer": "Japan"
    }
    


]