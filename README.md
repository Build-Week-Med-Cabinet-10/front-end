# front-end

# PVD
# ☝️ Proposal

---

- What problem does your app solve?
    - Medical conditions
    - Help users determine which strains of marijuana to help them with their ailments
        - "Trouble sleeping; refuse to take pills"
        - "Trouble with appetite"
- Be as specific as possible; how does your app solve the problem?
    - Doser - how much?
    - Index different strains to different flavors / moods / effects
        - "I feel depressed and want something bubblegum flavored"
- What is the mission statement?
    - Help users achieve the relief they need

# 💡 Features

---

- What features are required for your minimum viable product?
    - Conditional-based form
        - Ladder based
    - Check box
    - Having users select from a predetermined list of ailments and flavors - get back a top 3 recommendation of strains and dosage
    - Simple split based on sativa / indica / hybrid preference
        - Add a description of what these are
- What features may you wish to put in a future release?
    - General location - strain / insurance / pricing data finder
    - Nutrition facts - can probably scrape this from dispensary websites
        - Turpene profile - smell and flavor
- What do the top 3 similar apps do for their users?
    - Leafly
    - Weedmaps
    - WhereIsWeed

# 🛠 Frameworks - Libraries

---

- What 3rd party frameworks/libraries are you considering using?
    - DS
        - Flask for the API
            - Heroku for hosting
        - Spacey and/or NLTK for the data set and natural language processing
    - WEB
        - Material UI for buttons
        - Styled components for general styling
        - Forms - React Hook Form - to handle validation
        - Context API for state management
- Do the APIs you need require you to contact them to gain access?
    - Rapid API - marijuana strains information
- Are you required to pay to use said API(s)?
    - Rapid API - Some free some paid

# 🧮  For Data Scientists

---

- Describe the established data source with at least rough data able to be provided on day one.
    - Detemine data set of marijuana strains
        - Kaggle
- Write a description for what the data science problem is. What uncertainty or prediction are you trying to discover? How could this data be used to find a solution to this problem?
    - What strain will make the user feel good?
        - Use a machine learning model to make a recommendation based on user input.
- What kind of target output can you deliver to the Web/UX/iOS teams to work with? Is it in JSON format or something else?
    - JSON

# 🎯 Target Audience

---

- Who is your target audience? Be specific.
    - Military
    - Disabled
    - Distressed people
    - Chronic illnesses
    - Patients that are prescribed pharmaceuticals
- What feedback have you gotten from potential users?
- Have you validated this problem and your solution with a target audience? Describe how,

---

# 🔑 Prototype Key Feature(s)

---

- How long do you think it will take to implement these features?
    - Authentication - 2 days
    - DS Model - 2 days
    - DS API - 3 days
    - React site - EOW 1
- Do you anticipate working on stretch functionality after completion of a Minimal Viable Product?
