const backgroundQuestions = [
    {
        "question": "When did the Indian Constitution come into effect?",
        "answer": "January 26, 1950"
    },
    {
        "question": "Who played a pivotal role as the Chairman of the Drafting Committee of the Indian Constitution?",
        "answer": "Dr. B.R. Ambedkar"
    },
    {
        "question": "From which years did the drafting of the Indian Constitution take place?",
        "answer": "1946 to 1949"
    },
    {
        "question": "What period is referred to as Company Rule in India?",
        "answer": "1773-1858"
    },
    {
        "question": "What period is referred to as Crown Rule in India?",
        "answer": "1858-1947"
    },
    {
        "question": "Who was appointed as the Governor-General of Bengal under the Regulating Act of 1773?",
        "answer": "Warren Hastings"
    },
    {
        "question": "What significant institution was established in Calcutta in 1774 under the Regulating Act of 1773?",
        "answer": "The Supreme Court"
    },
    {
        "question": "What major policy did the Regulating Act of 1773 enforce regarding Company servants?",
        "answer": "It prohibited private trade and bribes among Company servants"
    },
    {
        "question": "Which two presidencies were made subordinate to Bengal’s Governor-General under the Regulating Act of 1773?",
        "answer": "Bombay and Madras presidencies"
    },
    {
        "question": "What did the Regulating Act of 1773 require the Court of Directors to report on?",
        "answer": "Revenue, civil, and military matters"
    },
    {
        "question": "Who was the Governor-General during the Amending Act of 1781 (Act of Settlement)?",
        "answer": "Warren Hastings"
    },
    {
        "question": "What jurisdiction was the Governor-General and Council exempted from under the Amending Act of 1781?",
        "answer": "Supreme Court jurisdiction for official acts"
    },
    {
        "question": "What was excluded from the Supreme Court’s jurisdiction under the Amending Act of 1781?",
        "answer": "Revenue matters"
    },
    {
        "question": "Which law was to be applied by the Court for Hindu/Mohammedan defendants under the Amending Act of 1781?",
        "answer": "Personal law"
    },
    {
        "question": "Who was empowered to frame regulations for Provincial Courts and Councils under the Amending Act of 1781?",
        "answer": "Governor-General-in-Council"
    },
    {
        "question": "Who was the Governor-General during Pitt’s India Act, 1784?",
        "answer": "Warren Hastings"
    },
    {
        "question": "What was the key distinction made under Pitt’s India Act, 1784?",
        "answer": "Separation of commercial and political functions of the Company"
    },
    {
        "question": "Which two bodies were established under Pitt’s India Act, 1784?",
        "answer": "Board of Control and Court of Directors"
    },
    {
        "question": "What was the role of the Board of Control under Pitt’s India Act, 1784?",
        "answer": "Managed political affairs and supervised civil and military operations or revenues"
    },
    {
        "question": "What was the role of the Court of Directors under Pitt’s India Act, 1784?",
        "answer": "Oversaw commercial affairs"
    },
    {
        "question": "What term was used for Company territories under Pitt’s India Act, 1784?",
        "answer": "British possessions in India"
    },
    {
        "question": "Who was the Governor-General during the Act of 1786?",
        "answer": "Lord Cornwallis"
    },
    {
        "question": "What special power was granted to Lord Cornwallis under the Act of 1786?",
        "answer": "Power to override council decisions in special cases"
    },
    {
        "question": "Who was the Governor-General during the Charter Act of 1793?",
        "answer": "John Shore"
    },
    {
        "question": "What power was extended to future Governors-General and Governors of Presidencies under the Charter Act of 1793?",
        "answer": "Overriding powers granted to Lord Cornwallis were extended to future Governors-General and Governors of Presidencies"
    },
    {
        "question": "What was the impact of the Charter Act of 1793 on the authority of the Governor-General?",
        "answer": "Enhanced Governor-General’s control over Bombay and Madras Presidencies"
    },
    {
        "question": "What trade-related provision was made under the Charter Act of 1793?",
        "answer": "Extended the Company’s monopoly in India for an additional twenty years"
    },
    {
        "question": "What financial provision was included in the Charter Act of 1793?",
        "answer": "Mandated payment for Board of Control members and staff from Indian revenues"
    },
    {
        "question": "Who was the Governor-General during the Charter Act of 1813?",
        "answer": "Lord Minto I"
    },
    {
        "question": "What was the effect of the Charter Act of 1813 on the East India Company’s trade monopoly?",
        "answer": "Ended the trade monopoly of the East India Company, allowing all British merchants to trade in India, except for trade with China and tea"
    },
    {
        "question": "What assertion was made in the Charter Act of 1813 regarding British rule in India?",
        "answer": "Asserted British Crown sovereignty over Company territories in India"
    },
    {
        "question": "What powers were granted to local governments under the Charter Act of 1813?",
        "answer": "Empowered local governments to impose taxes and punish defaulters"
    },
    {
        "question": "How long was the Company’s rule extended under the Charter Act of 1813?",
        "answer": "Extended the Company’s rule for another 20 years"
    },
    {
        "question": "What was the impact of the Charter Act of 1813 on the Board of Control?",
        "answer": "Enhanced the powers of the Board of Control"
    },
    {
        "question": "What did the Charter Act of 1813 allow Christian missionaries to do?",
        "answer": "Allowed Christian missionaries to promote moral and religious improvements in India"
    },
    {
        "question": "What financial provision was mandated by the Charter Act of 1813 for Indian education?",
        "answer": "Mandated an annual investment of Rs. 1 Lakh in Indian education"
    },
    {
        "question": "What financial regulation was introduced under the Charter Act of 1813?",
        "answer": "Regulated the Company’s territorial revenues and commercial profits, requiring separate accounts"
    },
    {
        "question": "Who was the Governor-General of India during the Charter Act of 1833?",
        "answer": "William Bentinck"
    },
    {
        "question": "What was the significance of the Charter Act of 1833 in terms of British India administration?",
        "answer": "Marked the final step towards centralization in British India, giving it an All-India character"
    },
    {
        "question": "How did the Charter Act of 1833 affect the East India Company?",
        "answer": "Legalised British colonisation; the East India Company became an administrative body, holding territories 'in trust for His Majesty, His heirs and successors'"
    },
    {
        "question": "What trade monopoly was ended by the Charter Act of 1833?",
        "answer": "Ended the Company’s monopoly on trade with China and in tea"
    },
    {
        "question": "What change was made to the governance structure in British India under the Charter Act of 1833?",
        "answer": "The government of the Governor-General came to be known as the 'Government of India,' and the council as the 'India Council'"
    },
    {
        "question": "What significant appointment was made under the Charter Act of 1833?",
        "answer": "Designated the Governor-General of Bengal as the 'Governor-General of India,' granting full civil and military powers; Lord William Bentinck was the first appointee"
    },
    {
        "question": "What legislative changes did the Charter Act of 1833 bring about?",
        "answer": "Transferred legislative powers from Bombay and Madras to the Governor-General of India, with laws termed 'Acts'"
    },
    {
        "question": "What power was granted to the Governor-General of India under the Charter Act of 1833?",
        "answer": "Empowered the Governor-General to amend or repeal laws in British India"
    },
    {
        "question": "What proposal regarding civil servant selection was made in the Charter Act of 1833?",
        "answer": "Proposed an open competition system for civil servant selection, but faced opposition from the Court of Directors"
    },
    {
        "question": "Which commission was established under the Charter Act of 1833, and who chaired it?",
        "answer": "Established the Indian Law Commission (1834) for legal codification, chaired by Lord Macaulay"
    },
    {
        "question": "Who was the Governor-General of India during the Charter Act of 1853?",
        "answer": "Lord Dalhousie"
    },
    {
        "question": "What was the significance of the Charter Act of 1853?",
        "answer": "The last in a series of Charter Acts (1793-1853)"
    },
    {
        "question": "What change was introduced in the Governor-General’s council under the Charter Act of 1853?",
        "answer": "Separated legislative and executive functions of the Governor-General’s council"
    },
    {
        "question": "What new representation was introduced in the Indian Legislative Council by the Charter Act of 1853?",
        "answer": "Introduced local representation in the Indian Legislative Council with six new legislative councillors, totalling 12 members"
    },
    {
        "question": "How was the Board of Directors restructured under the Charter Act of 1853?",
        "answer": "Reduced the Board of Directors from 24 to 18, with 6 nominated by the British Crown"
    },
    {
        "question": "What was the function of the legislative council under the Charter Act of 1853?",
        "answer": "The legislative council functioned as a 'Mini-Parliament', mirroring British procedures"
    },
    {
        "question": "What recruitment system was introduced by the Charter Act of 1853?",
        "answer": "Implemented an open competition system for civil service recruitment, allowing Indian participation; the Macaulay Committee was appointed in 1854"
    },
    {
        "question": "What change occurred regarding voting rights in the legislative council under the Charter Act of 1853?",
        "answer": "The fourth law member gained voting rights as a full member"
    },
    {
        "question": "Who was the Viceroy of India under the Government of India Act, 1858?",
        "answer": "Lord Canning"
    },
    {
        "question": "What major change occurred under the Government of India Act, 1858?",
        "answer": "Abolition of the East India Company; Powers transferred to the British Crown"
    },
    {
        "question": "What title did the Governor-General take under the Government of India Act, 1858?",
        "answer": "The Governor-General became the Viceroy of India"
    },
    {
        "question": "What was abolished under the Government of India Act, 1858?",
        "answer": "The Board of Control and Court of Directors were abolished"
    },
    {
        "question": "What new office was established under the Government of India Act, 1858?",
        "answer": "The Secretary of State for India, a British Cabinet member accountable to Parliament"
    },
    {
        "question": "What advisory body was created to assist the Secretary of State for India under the Government of India Act, 1858?",
        "answer": "An advisory Council of 15-members was created, chaired by the Secretary"
    },
    {
        "question": "What corporate body was formed under the Government of India Act, 1858?",
        "answer": "The Secretary of State-in-Council, capable of suing and being sued in India and England"
    },
    {
        "question": "Who was the Viceroy of India under the Indian Councils Act, 1861?",
        "answer": "Lord Canning"
    },
    {
        "question": "What change did the Indian Councils Act, 1861 bring to the Viceroy's council?",
        "answer": "The Viceroy could nominate Indians as non-official members of his council"
    },
    {
        "question": "Who were the three Indians nominated to the Viceroy's council in 1862?",
        "answer": "The Raja of Benaras, Maharaja of Patiala, and Sir Dinkar Rao"
    },
    {
        "question": "What power was restored to Bombay and Madras under the Indian Councils Act, 1861?",
        "answer": "The legislative powers of Bombay and Madras were restored, initiating decentralisation"
    },
    {
        "question": "Which new Legislative Councils were established under the Indian Councils Act, 1861?",
        "answer": "New Legislative Councils for Bengal (1862), Northwestern Province (1886), and Punjab (1897)"
    },
    {
        "question": "What power was granted to the Viceroy under the Indian Councils Act, 1861?",
        "answer": "The Viceroy was enabled to issue Ordinances for emergencies without council consent"
    },
    {
        "question": "What system was introduced under the Indian Councils Act, 1861?",
        "answer": "The Portfolio system was introduced, allowing council members to independently manage departments"
    },
    {
        "question": "Who was the Viceroy of India under the Indian Councils Act, 1892?",
        "answer": "Lord Lansdowne"
    },
    {
        "question": "What change did the Indian Councils Act, 1892 bring to non-official representation?",
        "answer": "Non-official representation in Central and Provincial Legislative Councils was raised while maintaining an official majority"
    },
    {
        "question": "What new powers were given to Legislative Councils under the Indian Councils Act, 1892?",
        "answer": "Legislative Councils gained powers to discuss budgets and address questions to the Executive"
    },
    {
        "question": "How were non-official members nominated in the Central Legislative Council under the Indian Councils Act, 1892?",
        "answer": "Non-official members were nominated by the Viceroy upon recommendations from the Provincial Legislative Council and Bengal Chamber of Commerce"
    },
    {
        "question": "How were non-official members nominated in the Provincial Legislative Council under the Indian Councils Act, 1892?",
        "answer": "Non-official members were nominated by the Governor on advice from District Boards, Municipalities, Universities, Trade Associations, Zamindars, and Chambers"
    },
    {
        "question": "Was there an explicit election process for non-official members under the Indian Councils Act, 1892?",
        "answer": "Although elections were not explicitly mentioned, a limited indirect election process for nominated members was introduced"
    },
    {
        "question": "Who was the Viceroy of India under the Indian Councils Act, 1909?",
        "answer": "Lord Minto II"
    },
    {
        "question": "What was the increase in the membership of the Legislative Council under the Indian Councils Act, 1909?",
        "answer": "Membership increased from 16 to 60, with the official majority retained"
    },
    {
        "question": "What change did the Indian Councils Act, 1909 bring to Provincial Councils?",
        "answer": "Provincial Councils allowed non-official majority, with membership varying in provinces"
    },
    {
        "question": "What new powers did members gain under the Indian Councils Act, 1909?",
        "answer": "Members could ask supplementary questions, propose budget resolutions, and vote on the budget separately"
    },
    {
        "question": "What significant change did the Indian Councils Act, 1909 make regarding the electorate?",
        "answer": "It introduced the separate electorate, allowing Muslims to vote only for Muslim candidates, legalising communalism"
    },
    {
        "question": "Who was the first Indian appointed to the Viceroy’s Executive Council under the Indian Councils Act, 1909?",
        "answer": "Satyendra Prasad Sinha"
    },
    {
        "question": "Which groups were given separate representation under the Indian Councils Act, 1909?",
        "answer": "Presidency Corporations, Chamber of Commerce, Universities, and Zamindars"
    },
    {
        "question": "Who was the Viceroy of India under the Government of India Act of 1919?",
        "answer": "Lord Chelmsford"
    },
    {
        "question": "What was the objective of the Government of India Act of 1919?",
        "answer": "To gradually introduce a Responsible Government in India, as stated on August 20, 1917"
    },
    {
        "question": "How were administration subjects classified under the Government of India Act of 1919?",
        "answer": "Administration was divided into central and provincial subjects under the Devolution Rules"
    },
    {
        "question": "What governance system was introduced in provinces under the Government of India Act of 1919?",
        "answer": "Dyarchy, a dual governance scheme, with Reserved Subjects and Transferred Subjects"
    },
    {
        "question": "What legislative change was introduced under the Government of India Act of 1919?",
        "answer": "The Indian Legislative Council was replaced with a Bicameral Legislature—Upper House (Council of State) and Lower House (Legislative Assembly)"
    },
    {
        "question": "How many Indian members were included in the Viceroy’s Executive Council under the Government of India Act of 1919?",
        "answer": "Three Indian members, excluding the Commander-in-Chief"
    },
    {
        "question": "What electoral reforms were introduced under the Government of India Act of 1919?",
        "answer": "Separate electorates for Sikhs, Indian Christians, Anglo-Indians, and Europeans with franchise based on property, tax, and educational criteria"
    },
    {
        "question": "What financial autonomy was granted to provinces under the Government of India Act of 1919?",
        "answer": "Provinces were allowed to enact their own budgets, separate from the Central Budget"
    },
    {
        "question": "What new position was established in London under the Government of India Act of 1919?",
        "answer": "The High Commissioner for India, transferring certain functions from the Secretary of State for India"
    },
    {
        "question": "What provision was made for civil service recruitment under the Government of India Act of 1919?",
        "answer": "A public service commission was established, leading to the creation of the Central Public Service Commission in 1926"
    },
    {
        "question": "What was the Chamber of Princes under the Government of India Act of 1919?",
        "answer": "A body formed in 1921 with 120 members (princes and representatives), promoting discussion on shared interests"
    },
    {
        "question": "What future review mechanism was introduced under the Government of India Act of 1919?",
        "answer": "A statutory commission was mandated to assess the effectiveness of the Act after ten years"
    },
    {
        "question": "Who led the Simon Commission (1927)?",
        "answer": "Sir John Simon"
    },
    {
        "question": "What was the composition of the Simon Commission (1927)?",
        "answer": "A seven-member statutory commission, composed entirely of British members"
    },
    {
        "question": "What were the key proposals of the Simon Commission report submitted in 1930?",
        "answer": "Abolishment of Dyarchy, expansion of Responsible Government in provinces, creation of a Federation of British India and princely states, and maintenance of the Communal Electorate"
    },
    {
        "question": "Who proposed the Communal Award in 1932?",
        "answer": "Prime Minister Ramsay MacDonald"
    },
    {
        "question": "What did the Communal Award (1932) propose?",
        "answer": "Separate Electorates for Muslims, Sikhs, Indian Christians, Anglo-Indians, Europeans, and extended to the depressed classes (Scheduled Castes)"
    },
    {
        "question": "How did Mahatma Gandhi respond to the Communal Award?",
        "answer": "He opposed separate electorates for the depressed classes, leading to a fast in Yerawada Jail"
    },
    {
        "question": "What was the outcome of Gandhi's fast in response to the Communal Award?",
        "answer": "The Poona Pact was formed, which preserved the Hindu joint electorate and reserved seats for the depressed classes"
    },
    {
        "question": "What was the British Government’s response to the Poona Pact?",
        "answer": "The British Government accepted the Poona Pact, eliminating separate electorates for the depressed classes, with provisions incorporated into the Government of India Act, 1935"
    },
    {
        "question": "What was the main objective of the Government of India Act, 1935?",
        "answer": "To establish an All-India Federation with provinces and princely states"
    },
    {
        "question": "Why did the All-India Federation fail under the Government of India Act, 1935?",
        "answer": "Due to non-participation from the princely states"
    },
    {
        "question": "How were powers divided in the Government of India Act, 1935?",
        "answer": "Powers were divided into Federal (59 items), Provincial (54 items), and Concurrent (36 items), with residual powers assigned to the Viceroy"
    },
    {
        "question": "What system of government was introduced in India by the Government of India Act, 1935?",
        "answer": "Provincial autonomy and dyarchy at the centre"
    },
    {
        "question": "Which provinces introduced bicameralism under the Government of India Act, 1935?",
        "answer": "Bengal, Bombay, Madras, Bihar, Assam, and the United Provinces"
    },
    {
        "question": "Which groups were given separate electorates under the Government of India Act, 1935?",
        "answer": "Depressed classes (Scheduled Castes), women, and labourers"
    },
    {
        "question": "What percentage of the population received the franchise under the Government of India Act, 1935?",
        "answer": "14% of the population"
    },
    {
        "question": "What new institutions were established under the Government of India Act, 1935?",
        "answer": "Reserve Bank of India, Federal and Provincial Public Service Commissions, and a Federal Court in 1937"
    },
    {
        "question": "What territories were affected by the Government of India Act, 1935?",
        "answer": "Burma was separated from India, and the new provinces of Orissa and Sind were created"
    },
    {
        "question": "What provisions for minority interests were introduced by the Government of India Act, 1935?",
        "answer": "Safeguards for minority interests and the establishment of a Federal Railway Authority"
    },
    {
        "question": "What financial oversight was introduced by the Government of India Act, 1935?",
        "answer": "The appointment of an Auditor-General"
    },
    {
        "question": "What was the Partition Plan presented by Lord Mountbatten in 1947?",
        "answer": "It led to India's independence on August 15, 1947, and the creation of two independent dominions, India and Pakistan."
    },
    {
        "question": "What were the two dominions established by the Indian Independence Act of 1947?",
        "answer": "India and Pakistan"
    },
    {
        "question": "What governance changes were introduced by the Indian Independence Act, 1947?",
        "answer": "The office of Viceroy was abolished, and a Governor-General was introduced for each dominion."
    },
    {
        "question": "What powers did the Constituent Assemblies have under the Indian Independence Act of 1947?",
        "answer": "They were empowered to create constitutions and repeal British laws, including the Independence Act."
    },
    {
        "question": "What was the legislative authority after the Indian Independence Act of 1947?",
        "answer": "The assemblies could legislate until new constitutions were enacted, and British acts required dominion approval after August 15, 1947."
    },
    {
        "question": "What happened to British control over princely states after the Indian Independence Act of 1947?",
        "answer": "British paramountcy over princely states lapsed, granting them autonomy."
    },
    {
        "question": "What change occurred in the role of the Secretary of State for India under the Indian Independence Act of 1947?",
        "answer": "The role of the Secretary of State for India was abolished."
    },
    {
        "question": "What happened to the civil services under the Indian Independence Act of 1947?",
        "answer": "The appointment and reservation by the Secretary of State ceased, but pre-1947 appointees retained their benefits."
    },
    {
        "question": "Who was the first Governor-General of independent India?",
        "answer": "Lord Mountbatten"
    },
    {
        "question": "What role did the Constituent Assembly formed in 1946 have after the Indian Independence Act of 1947?",
        "answer": "It became the parliament of India."
    },
    {
        "question": "Who was the first Prime Minister of independent India?",
        "answer": "Jawaharlal Nehru"
    },
    {
        "question": "What was Jawaharlal Nehru's portfolio in the first cabinet after independence?",
        "answer": "Prime Minister; External Affairs and Commonwealth Relations; Scientific Research"
    },
    {
        "question": "What were Sardar Vallabhbhai Patel's responsibilities in the first cabinet after independence?",
        "answer": "Home, Information and Broadcasting; States"
    },
    {
        "question": "What was Dr. Rajendra Prasad's portfolio in the first cabinet after independence?",
        "answer": "Food and Agriculture"
    },
    {
        "question": "What was Maulana Abul Kalam Azad's responsibility in the first cabinet after independence?",
        "answer": "Education"
    },
    {
        "question": "What portfolio did Dr. John Mathai hold in the first cabinet after independence?",
        "answer": "Railways and Transport"
    },
    {
        "question": "Who was responsible for Finance in the first cabinet after independence?",
        "answer": "R.K. Shanmugham Chetty"
    },
    {
        "question": "What portfolio did Dr. B.R. Ambedkar hold in the first cabinet after independence?",
        "answer": "Law"
    },
    {
        "question": "What was Jagjivan Ram's responsibility in the first cabinet after independence?",
        "answer": "Labour"
    },
    {
        "question": "Who held the Defence portfolio in the first cabinet after independence?",
        "answer": "Sardar Baldev Singh"
    },
    {
        "question": "Who was responsible for Health in the first cabinet after independence?",
        "answer": "Rajkumari Amrit Kaur"
    },
    {
        "question": "What was C.H. Bhabha's responsibility in the first cabinet after independence?",
        "answer": "Commerce"
    },
    {
        "question": "What portfolio did Rafi Ahmed Kidwai hold in the first cabinet after independence?",
        "answer": "Communication"
    },
    {
        "question": "What was Dr. Shyama Prasad Mukherjee's portfolio in the first cabinet after independence?",
        "answer": "Industries and Supplies"
    },
    {
        "question": "What was V.N. Gadgil responsible for in the first cabinet after independence?",
        "answer": "Works, Mines, and Power"
    }


]