[
  {
    "text": "Susan provides a public RESTful API for her organization's data but wants to limit its use to trusted partners. She intends to use API keys. What other recommendation would you give Susan to limit the potential abuse of the service?",
    "options": [
      "Limit request rates.",
      "Force HTTP-only requests.",
      "Avoid tokens due to bandwidth constraints.",
      "Blacklist HTTP methods such as GET, POST, and PUT."
    ],
    "correctAnswer": ["Limit request rates."],
    "explanation": "Limiting request rates can prevent abuse of APIs like this one. The other suggestions are all poor recommendations. In general, requests should require HTTPS, tokens are used for security using tools like JSON web tokens (JWT), and HTTP methods may be restricted, but GET, POST, and PUT are some of the most common methods used for API access and are far more typically whitelisted.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Darren is conducting a threat-hunting exercise and would like to look for botnet indicators of compromise. Which of the following are common ways that attackers leverage botnets? (Select all that apply.)",
    "options": [
      "Mining cryptocurrency",
      "Conducting brute-force attacks",
      "Scanning for vulnerable systems",
      "Conducting man-in-the-middle attacks"
    ],
    "correctAnswer": ["Mining cryptocurrency", "Conducting brute-force attacks", "Scanning for vulnerable systems"],
    "explanation": "Botnets are used for a wide variety of malicious purposes, including scanning the network for vulnerable systems, conducting brute-force attacks against other systems, mining cryptocurrency, and sending out spam messages. They are not commonly used to conduct man-in-the-middle attacks, which are normally waged through DNS poisoning or similar mechanisms.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null,
    "questionType": "multi-response"
  },
  {
    "text": "Which one of the following statements is not true about code review?",
    "options": [
      "Code review should be a peer-driven process that includes multiple developers.",
      "Code review may be automated.",
      "Code review occurs during the design phase.",
      "Code reviewers may expect to review several hundred lines of code per hour."
    ],
    "correctAnswer": ["Code review occurs during the design phase."],
    "explanation": "Code review takes place after code has been developed, which occurs after the design phase of the system's development life cycle (SDLC). Code review may use a combination of manual and automated techniques or rely solely on one or the other. It should be a peer-driven process that includes developers who did not write the code. Developers should expect to complete the review of around 300 lines per hour, on average.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Kathleen is reviewing the Ruby code shown here: `insert_new_user = db.prepare \"INSERT INTO users (name, userid, gender, usertype) VALUES (?, ?, ?, ?)\"`. What security technique is this code using?",
    "options": [
      "Parameterization",
      "Typecasting",
      "Gem cutting",
      "Stored procedures"
    ],
    "correctAnswer": ["Parameterization"],
    "explanation": "This code is an example of parameterization, which can help avoid SQL injection. Note that each parameter has a placeholder, which is then passed to the query.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jessica is reviewing her organization's change management process and would like to verify that changes to software include acceptance testing. Which process is responsible for achieving this goal?",
    "options": [
      "Request control",
      "Change control",
      "Release control",
      "Configuration control"
    ],
    "correctAnswer": ["Release control"],
    "explanation": "One of the responsibilities of the release control process is ensuring that acceptance testing is performed, to ensure that any alterations to end-user tasks are understood and functional prior to code release. The request control, change control, and configuration control processes do not include acceptance testing.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ashley is investigating an attack that compromised an account of one of her users. In the attack, the attacker forced the submission of an authenticated request to a third-party site by exploiting trust relationships in the user's browser. What type of attack most likely took place?",
    "options": [
      "XSS",
      "CSRF",
      "SQL injection",
      "Session hijacking"
    ],
    "correctAnswer": ["CSRF"],
    "explanation": "Cross-site request forgery (XSRF or CSRF) attacks exploit the trust that sites have in a user's browser by attempting to force the submission of authenticated requests to third-party sites. Session hijacking attacks attempt to steal previously authenticated sessions but do not force the browser to submit requests. A SQL injection directly attacks a database through a web application. Cross-site scripting uses reflected input to trick a user's browser into executing untrusted code from a trusted site.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Arnold is creating a new software package and is making use of the OpenSSL library. What term best describes the library he is using?",
    "options": [
      "Open source",
      "COTS",
      "Third-party",
      "Managed"
    ],
    "correctAnswer": ["Open source"],
    "explanation": "The OpenSSL package is a widely used implementation of TLS encryption that is available as an open-source package. It is not commercial off-the-shelf software (COTS). While it might be developed by third parties, it is more accurate to describe it as open source. The library is available as code for free use, but not as a managed service.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image showing a Windows Blue Screen of Death error message] Jaime is a technical support analyst and is asked to visit a user whose computer is displaying the error message shown here. What state has this computer entered?",
    "options": [
      "Fail open",
      "Irrecoverable error",
      "Memory exhaustion",
      "Fail secure"
    ],
    "correctAnswer": ["Fail secure"],
    "explanation": "The error message shown in the figure is the infamous “Blue Screen of Death” that occurs when a Windows system experiences a dangerous failure and enters a fail secure state. If the system had “failed open,” it would have continued operation. The error described is a memory fault that is likely recoverable by rebooting the system. There is no indication that the system has run out of usable memory.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Joshua is developing a software threat modeling program for his organization. Which of the following are appropriate goals for the program? (Select all that apply.)",
    "options": [
      "To reduce the number of security-related design flaws",
      "To reduce the number of security-related coding flaws",
      "To reduce the severity of non-security-related flaws",
      "To reduce the number of threat vectors"
    ],
    "correctAnswer": ["To reduce the number of security-related design flaws", "To reduce the number of security-related coding flaws", "To reduce the severity of non-security-related flaws"],
    "explanation": "Software threat modeling is designed to reduce the number of security-related design and coding flaws as well as the severity of other flaws. The developer or evaluator of software has no control over the threat environment, because it is external to the organization.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null,
    "questionType": "multi-response"
  },
  {
    "text": "[Image of a UML class diagram for an 'Account' object with attributes 'Balance' and 'Owner', and methods 'AddFunds' and 'RemoveFunds'] In the diagram shown here, which is an example of a method?",
    "options": [
      "Account",
      "Owner",
      "AddFunds",
      "Balance"
    ],
    "correctAnswer": ["AddFunds"],
    "explanation": "In the diagram, Account is the name of the class. Owner and Balance are attributes of that class. AddFunds and RemoveFunds are methods of the class.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a diagram showing the Rapid Application Development (RAD) life cycle: Requirements Planning -> User Design -> Construction -> Cutover, with arrows indicating iterative loops between User Design and Construction] Wanda is reviewing the application development documentation used by her organization and finds the life-cycle illustration shown here. What application development method is her organization using?",
    "options": [
      "Waterfall",
      "Spiral",
      "Agile",
      "RAD"
    ],
    "correctAnswer": ["RAD"],
    "explanation": "Rapid Application Development, or RAD, focuses on fast development and the ability to quickly adjust to changing requirements. RAD uses four phases: requirements planning, user design, construction, and cutover.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following testing methodologies typically works without access to source code?",
    "options": [
      "Dynamic testing",
      "Static testing",
      "White-box testing",
      "Code review"
    ],
    "correctAnswer": ["Dynamic testing"],
    "explanation": "Dynamic testing of software typically occurs in a black-box environment where the tester does not have access to the source code. Static testing, white-box testing, and code review approaches all require access to the source code of the application.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Lucca is analyzing a web application that his organization acquired from a third-party vendor. Lucca determined that the application contains a flaw that causes users who are logged in to be able to take actions they should not be able to in their role. What type of security vulnerability should this be classified as?",
    "options": [
      "Data validation",
      "Session management",
      "Authorization",
      "Error handling"
    ],
    "correctAnswer": ["Authorization"],
    "explanation": "Given the list of options here, the root cause is most likely an issue with an authorization check that does not properly limit users to the authorization that they should have. Data validation issues are more likely to allow injection attacks or to allow bad data to be input, while session management issues would allow session hijacking or might actually cause them to be logged in as another user. Finally, error handling would show up as a problem when errors occurred, which this problem does not indicate.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Bobby is investigating how an authorized database user is gaining access to information outside his normal clearance level. Bobby believes that the user is making use of a type of function that summarizes data. What term describes this type of function?",
    "options": [
      "Inference",
      "Polymorphic",
      "Aggregate",
      "Modular"
    ],
    "correctAnswer": ["Aggregate"],
    "explanation": "Aggregate functions summarize large amounts of data and provide only summary information as a result. When carefully crafted, aggregate functions may unintentionally reveal sensitive information.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Taylor would like to better protect the applications developed by her organization against buffer overflow attacks. Which of the following controls would best provide this protection?",
    "options": [
      "Encryption",
      "Input validation",
      "Firewall",
      "Intrusion prevention system"
    ],
    "correctAnswer": ["Input validation"],
    "explanation": "The best protection against buffer overflow attacks is server-side input validation. This technique limits user input to approved ranges of values that fit within allocated buffers. While firewalls and intrusion prevention systems may contain controls that limit buffer overflows, it would be more effective to perform filtering on the application server. Encryption cannot protect against buffer overflow attacks.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Kayla recently completed a thorough risk analysis and mitigation review of the software developed by her team and identified three persistent issues: Cross-site scripting, SQL injection, and Buffer overflows. What is the most significant deficiency in her team's work identified by these issues?",
    "options": [
      "Lack of API security",
      "Improper error handling",
      "Improper or missing input validation",
      "Source code design issues"
    ],
    "correctAnswer": ["Improper or missing input validation"],
    "explanation": "Each of these problems is caused by improper or missing input validation and can be resolved by handling inputs properly. In many cases, this can be done using libraries or methods already built into the language or framework that the developer is using.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What phase of the Software Capability Maturity Model (SW-CMM) should be reported for Acme Widgets, a company with no formal software development processes?",
    "options": [
      "Defined",
      "Repeatable",
      "Initial",
      "Managed"
    ],
    "correctAnswer": ["Initial"],
    "explanation": "Acme Widgets is clearly in the initial stage of the SW-CMM. This stage is characterized by the absence of formal process. The company may still produce working code, but it does so in a disorganized fashion.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Robert is working with Acme Widgets on a strategy to advance their software development practices from the Initial stage. What SW-CMM stage should be their next target milestone?",
    "options": [
      "Defined",
      "Repeatable",
      "Initial",
      "Managed"
    ],
    "correctAnswer": ["Repeatable"],
    "explanation": "The Repeatable stage is the second stage in the SW-CMM, following the Initial stage. It should be the next milestone goal for Acme Widgets. The Repeatable stage is characterized by basic life cycle management processes.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What phase of the SW-CMM should be reported for Beta Particles, a company with formal, documented software development processes but no quantitative management of those processes?",
    "options": [
      "Defined",
      "Repeatable",
      "Optimizing",
      "Managed"
    ],
    "correctAnswer": ["Defined"],
    "explanation": "The Defined stage of the SW-CMM is marked by the presence of basic life cycle management processes and reuse of code. It includes the use of requirements management, software project planning, quality assurance, and configuration management practices.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Robert is also working with Beta Particles on a strategy to advance their software development practices from the Defined stage. What SW-CMM stage should be their next target milestone?",
    "options": [
      "Defined",
      "Repeatable",
      "Optimizing",
      "Managed"
    ],
    "correctAnswer": ["Managed"],
    "explanation": "The Managed stage is the fourth stage in the SW-CMM, following the Defined stage. It should be the next milestone goal for Beta Particles. The Managed stage is characterized by the use of quantitative software development measures.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following database keys is used to enforce referential integrity relationships between tables?",
    "options": [
      "Primary key",
      "Candidate key",
      "Foreign key",
      "Master key"
    ],
    "correctAnswer": ["Foreign key"],
    "explanation": "Referential integrity ensures that records exist in a secondary table when they are referenced with a foreign key from another table. Foreign keys are the mechanism used to enforce referential integrity.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Brynn believes that a system in her organization may have been compromised by a macro virus. Which one of the following files is most likely to be the culprit?",
    "options": [
      "projections.doc",
      "command.com",
      "command.exe",
      "loopmaster.exe"
    ],
    "correctAnswer": ["projections.doc"],
    "explanation": "Macro viruses are most commonly found in office productivity documents, such as Microsoft Word documents that end in the .doc or .docx extension. They are not commonly found in executable files with the .com or .exe extension.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Victor created a database table that contains information on his organization's employees. The table contains the employee's user ID, three different telephone number fields (home, work, and mobile), the employee's office location, and the employee's job title. There are 16 records in the table. What is the degree of this table?",
    "options": [
      "3",
      "4",
      "6",
      "16"
    ],
    "correctAnswer": ["6"],
    "explanation": "The degree of a database table is the number of attributes in the table. Victor's table has six attributes: the employee's user ID, home telephone, office telephone, mobile telephone, office location, and job title.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Carrie is analyzing the application logs for her web-based application and comes across the following string: ../../../../../../../../../etc/passwd. What type of attack was likely attempted against Carrie's application?",
    "options": [
      "Command injection",
      "Session hijacking",
      "Directory traversal",
      "Brute-force"
    ],
    "correctAnswer": ["Directory traversal"],
    "explanation": "The string shown in the logs is characteristic of a directory traversal attack where the attacker attempts to force the web application to navigate up the file hierarchy and retrieve a file that should not normally be provided to a web user, such as the password file. The series of “double dots” is indicative of a directory traversal attack because it is the character string used to reference the directory one level up in a hierarchy.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "When should a design review take place when following an SDLC approach to software development?",
    "options": [
      "After the code review",
      "After user acceptance testing",
      "After the development of functional requirements",
      "After the completion of unit testing"
    ],
    "correctAnswer": ["After the development of functional requirements"],
    "explanation": "Design reviews should take place after the development of functional and control specifications but before the creation of code. The code review, unit testing, and functional testing all take place after the creation of code and, therefore, after the design review.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Tracy is preparing to apply a patch to her organization's enterprise resource planning system. She is concerned that the patch may introduce flaws that did not exist in prior versions, so she plans to conduct a test that will compare previous responses to input with those produced by the newly patched application. What type of testing is Tracy planning?",
    "options": [
      "Unit testing",
      "Acceptance testing",
      "Regression testing",
      "Vulnerability testing"
    ],
    "correctAnswer": ["Regression testing"],
    "explanation": "Regression testing is software testing that runs a set of known inputs against an application and then compares the results to those produced by an earlier version of the software. It is designed to capture unanticipated consequences of deploying new code versions prior to introducing them into a production environment.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What term is used to describe the level of confidence that software is free from vulnerabilities, either intentionally designed into the software or accidentally inserted at any time during its life cycle, and that the software functions in the intended manner?",
    "options": [
      "Validation",
      "Accreditation",
      "Confidence interval",
      "Assurance"
    ],
    "correctAnswer": ["Assurance"],
    "explanation": "Assurance, when it comes to software, is the level of confidence that software is free from vulnerabilities, either intentionally designed into the software or accidentally inserted at any time during its life cycle, and that the software functions in the intended manner. It is a term typically used in military and defense environments.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Victor recently took a new position at an online dating website and is responsible for leading a team of developers. He realized quickly that the developers are having issues with production code because they are working on different projects that result in conflicting modifications to the production code. What process should Victor invest in improving?",
    "options": [
      "Request control",
      "Release control",
      "Change control",
      "Configuration control"
    ],
    "correctAnswer": ["Change control"],
    "explanation": "The change control process is responsible for providing an organized framework within which multiple developers can create and test a solution prior to rolling it out in a production environment. Request control provides a framework for user requests. Release control manages the deployment of code into production. Configuration control ensures that changes to software versions are made in accordance with the change and configuration management policies.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Tom is assessing security risks related to a database he manages. Examining user access controls, he determines that users have access to individual records in a table that match their clearances, but if they pull multiple records, that collection of facts has a higher classification than the classification of any of those facts standing alone and exceeds the permitted access. What type of issue has Tom identified?",
    "options": [
      "Inference",
      "SQL injection",
      "Multilevel security",
      "Aggregation"
    ],
    "correctAnswer": ["Aggregation"],
    "explanation": "Aggregation is a security issue that arises when a collection of facts has a higher classification than the classification of any of those facts standing alone. An inference problem occurs when an attacker can pull together pieces of less sensitive information and use them to derive information of greater sensitivity. SQL injection is a web application exploit. Multilevel security is a system control that allows the simultaneous processing of information at different classification levels.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ron leads a team of software developers who find themselves often re-creating code that performs common functions. What software development tool could he use to best address this situation?",
    "options": [
      "Code repositories",
      "Code libraries",
      "IDEs",
      "DAST"
    ],
    "correctAnswer": ["Code libraries"],
    "explanation": "Code libraries are packages of reusable functions that may be incorporated into individual development projects. Ron could use libraries to easily share code among his team. Code repositories may be used to manage the distribution and updating of these libraries, but that is a second-order use case, making code libraries the best answer. Integrated development environments (IDEs) are tools used by developers to create software, while dynamic application security testing (DAST) is used to verify the correct implementation of code.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Vivian would like to hire a software tester to come in and evaluate a new web application from a user's perspective. Which of the following tests best simulates that perspective?",
    "options": [
      "Black box",
      "Gray box",
      "Blue box",
      "White box"
    ],
    "correctAnswer": ["Black box"],
    "explanation": "Black-box testing begins with no prior knowledge of the system implementation, simulating a user's perspective. White-box and gray-box testing provide full and partial knowledge of the system, respectively, in advance of the test. Blue boxes are a phone hacking tool and are not used in software testing.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a SQL transaction code block] Referring to the database transaction shown here, what would happen if no account exists in the Accounts table with account number 1001?",
    "options": [
      "The database would create a new account with this account number and give it a $250 balance.",
      "The database would ignore that command and still reduce the balance of the second account by $250.",
      "The database would roll back the transaction, ignoring the results of both commands.",
      "The database would generate an error message."
    ],
    "correctAnswer": ["The database would ignore that command and still reduce the balance of the second account by $250."],
    "explanation": "In this example, the two SQL commands are indeed bundled in a transaction, but it is not an error to issue an update command that does not match any rows. Therefore, the first command would “succeed” in updating zero rows and not generate an error or cause the transaction to roll back. The second command would then execute, reducing the balance of the second account by $250.",
    "domain": "Software Development Security",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Brandon is a software developer seeking to integrate his software with a popular social media site. The site provides him with software libraries that he can use to better integrate his code as well as other tools that make his work easier. What term best describes the service he is using?",
    "options": [
      "SDK",
      "DLP",
      "IDE",
      "API"
    ],
    "correctAnswer": ["SDK"],
    "explanation": "Software development kits (SDKs) are code libraries and other tools made available to assist developers in creating code. An integrated development environment (IDE) may be a component of an SDK, but it is not necessarily part of every SDK. An application programming interface (API) is a set of functions made available to external developers, but the code does not execute on the users' machine, as would a code library or other SDK tools. Data loss prevention (DLP) capabilities are not a component of software development toolsets.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Kim is troubleshooting an application firewall that serves as a supplement to the organization's network and host firewalls and intrusion prevention system, providing added protection against web-based attacks. The issue the organization is experiencing is that the firewall technology suffers somewhat frequent restarts that render it unavailable for 10 minutes at a time. What configuration might Kim consider to maintain availability during that period at the lowest cost to the company?",
    "options": [
      "High availability cluster",
      "Failover device",
      "Fail open",
      "Redundant disks"
    ],
    "correctAnswer": ["Fail open"],
    "explanation": "A fail open configuration may be appropriate in this case. In this configuration, the firewall would continue to pass traffic without inspection while it is restarting. This would minimize downtime, and the traffic would still be protected by the other security controls described in the scenario. Failover devices and high availability clusters would indeed increase availability, but at potentially significant expense. Redundant disks would not help in this scenario because no disk failure is described.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What type of security issue arises when an attacker can deduce a more sensitive piece of information by analyzing several pieces of information classified at a lower level?",
    "options": [
      "SQL injection",
      "Multilevel security",
      "Parameterization",
      "Inference"
    ],
    "correctAnswer": ["Inference"],
    "explanation": "An inference problem occurs when an attacker can pull together pieces of less sensitive information and use them to derive information of greater sensitivity. SQL injection is a web application exploit. Multilevel security is a system control that allows the simultaneous processing of information at different classification levels. Parameterization is a security control used to reduce the likelihood of attacks that rely upon improper user input.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Greg is battling a malware outbreak in his organization. He used specialized malware analysis tools to capture samples of the malware from three different systems and noticed that the code is changing slightly from infection to infection. Greg believes that this is the reason that antivirus software is having a tough time defeating the outbreak. What type of malware should Greg suspect is responsible for this security incident?",
    "options": [
      "Stealth virus",
      "Polymorphic virus",
      "Multipartite virus",
      "Encrypted virus"
    ],
    "correctAnswer": ["Polymorphic virus"],
    "explanation": "Polymorphic viruses mutate each time they infect a system by making adjustments to their code that assists them in evading signature detection mechanisms. Encrypted viruses also mutate from infection to infection but do so by encrypting themselves with different keys on each device.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Linda is reviewing posts to a user forum on her company's website, and when she browses a certain post, a message pops up in a dialog box on her screen reading “Alert.” She reviews the source code for the post and finds the following code snippet: <script>alert(‘Alert’);</script>. What vulnerability definitely exists on Linda's message board?",
    "options": [
      "Cross-site scripting",
      "Cross-site request forgery",
      "SQL injection",
      "Improper authentication"
    ],
    "correctAnswer": ["Cross-site scripting"],
    "explanation": "The message forum is clearly susceptible to a cross-site scripting (XSS) attack. The code that Linda discovered in the message is a definitive example of an attempt to conduct cross-site scripting, and the alert box that she received demonstrates that the vulnerability exists. The website may also be vulnerable to cross-site request forgery, SQL injection, improper authentication, and other attacks, but there is no evidence of this provided in the scenario.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What was the likely motivation of the user who posted the message on the forum containing this code: <script>alert(‘Alert’);</script>?",
    "options": [
      "Reconnaissance",
      "Theft of sensitive information",
      "Credential stealing",
      "Social engineering"
    ],
    "correctAnswer": ["Reconnaissance"],
    "explanation": "The script that Linda discovered merely pops up a message on a user's screen and does not perform any more malicious action. This type of script, using an alert() call, is commonly used to probe websites for cross-site scripting vulnerabilities.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Linda communicates with the vendor and determines that no patch is available to correct a cross-site scripting vulnerability. Which one of the following devices would best help her defend the application against further attack?",
    "options": [
      "VPN",
      "WAF",
      "DLP",
      "IDS"
    ],
    "correctAnswer": ["WAF"],
    "explanation": "Web application firewalls (WAFs) sit in front of web applications and watch for potentially malicious web attacks, including cross-site scripting. They then block that traffic from reaching the web application. An intrusion detection system (IDS) may detect the attack but is unable to take action to prevent it. DLP and VPN solutions are unable to detect web application attacks.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "In further discussions with the vendor, Linda finds that they are willing to correct a cross-site scripting issue but do not know how to update their software. What technique would be most effective in mitigating the vulnerability of the application to this type of attack?",
    "options": [
      "Bounds checking",
      "Peer review",
      "Input validation",
      "OS patching"
    ],
    "correctAnswer": ["Input validation"],
    "explanation": "Input validation verifies that user-supplied input does not violate security conditions and is the most effective defense against cross-site scripting attacks. Bounds checking is a form of input validation, but it is typically used to ensure that numeric input falls within an acceptable range and is not applicable against cross-site scripting attacks. Peer review and OS patching are both good security practices but are unlikely to be effective against a cross-site scripting attack.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of the RStudio integrated development environment] Hannah is a software developer working on creating statistical software using the R programming language. She uses the RStudio tool, shown here, to assist her in writing this code. What term best describes this tool?",
    "options": [
      "SDK",
      "IDE",
      "API",
      "DLP"
    ],
    "correctAnswer": ["IDE"],
    "explanation": "RStudio is a tool used to assist in the creation of code, otherwise known as an integrated development environment (IDE). Software development kits (SDKs) are code libraries and other tools made available to assist developers in creating code. An application programming interface (API) is a set of functions made available to external developers, but the code does not execute on the users' machine, as would a code library or other SDK tools. Data loss prevention (DLP) capabilities are not a component of software development toolsets.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which of the following configurations within the Scaled Agile Framework (SAFe) is specifically designed to support enterprises in building and maintaining large integrated solutions with the collaboration of hundreds of practitioners?",
    "options": [
      "Large Solution SAFe",
      "Portfolio SAFe",
      "Essential SAFe",
      "Full SAFe"
    ],
    "correctAnswer": ["Full SAFe"],
    "explanation": "Full SAFe is designed to support enterprises in building and maintaining large integrated solutions with the collaboration of hundreds of practitioners. It provides the most extensive level of guidance, with roles, responsibilities, and activities needed to sustainably deliver complex solutions. Essential SAFe focuses on the basic elements of the framework needed to be agile, Large Solution SAFe is for developing large and complex solutions that do not require the constructs of the portfolio level, and Portfolio SAFe is for aligning enterprise strategy with execution but does not address the complexity of building large solutions that Full SAFe is designed for.",
    "domain": "Software Development Security",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alan is deploying Java code to a variety of machines in his environment and must install the JVM on those machines first. What term best describes the JVM in this case?",
    "options": [
      "Repository",
      "Change manager",
      "Runtime",
      "Sandbox"
    ],
    "correctAnswer": ["Runtime"],
    "explanation": "The JVM is the runtime virtual machine that allows the execution of Java code on a device. The JVM implements the Java sandbox, but that is only one of its many functions. The JVM itself is not a change manager or code repository.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Christine is nearing the final stages of testing a new software package. Which one of the following types of software testing usually occurs last and is executed against test scenarios?",
    "options": [
      "Unit testing",
      "Integration testing",
      "User acceptance testing",
      "System testing"
    ],
    "correctAnswer": ["User acceptance testing"],
    "explanation": "User acceptance testing (UAT) is typically the last phase of the testing process. It verifies that the solution developed meets user requirements and validates it against use cases. Unit testing, integration testing, and system testing are all conducted earlier in the process leading up to UAT.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alexis' organization recently moved to a CI/CD approach for software development where they intend to speed up the deployment of code supporting their website. What is the most reasonable frequency that they can expect to achieve using this type of approach?",
    "options": [
      "Monthly deployments",
      "Weekly deployments",
      "Daily deployments",
      "Hundreds of daily deployments"
    ],
    "correctAnswer": ["Hundreds of daily deployments"],
    "explanation": "When organizations adopt a continuous integration/continuous delivery (CI/CD) approach to software development, they may deploy code extremely rapidly. In fact, some organizations deploy new code to production hundreds or even thousands of times per day using this approach.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Amber is conducting a threat intelligence project and would like to find a source of information on threats to her organization's web applications. Which of the following organizations is widely considered as the definitive source for information on web-based attack vectors?",
    "options": [
      "ISC2",
      "ISACA",
      "OWASP",
      "Mozilla Foundation"
    ],
    "correctAnswer": ["OWASP"],
    "explanation": "The Open Worldwide Application Security Project (OWASP) is widely considered as the most authoritative source on web application security issues. They publish the OWASP Top Ten list that publicizes the most critical web application security issues.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Chris is a software developer, and he is actively writing code for an application. What phase of the Agile process is he in?",
    "options": [
      "Planning",
      "Sprints",
      "Deployment",
      "Testing"
    ],
    "correctAnswer": ["Sprints"],
    "explanation": "Chris is in an Agile sprint phase and is likely developing code based on user stories. Planning includes stakeholder stories, as well as design and test case preparation. Testing involves ensuring that the code works properly and meets requirements. Deployment includes the actual deployment of the application, as well as additional verification and testing.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alyssa's team recently implemented a new system that gathers information from a variety of different log sources, analyzes that information, and then triggers automated playbooks in response to security events. What term best describes this technology?",
    "options": [
      "SIEM",
      "Log repositories",
      "IPS",
      "SOAR"
    ],
    "correctAnswer": ["SOAR"],
    "explanation": "Security information and event management (SIEM) systems do correlate information from multiple sources and perform analysis, but they stop short of providing automated playbook responses. That is the realm of security orchestration, automation, and response (SOAR) platforms. Intrusion prevention platforms have a more limited scope, allowing the blocking of traffic based upon analysis performed by the IPS itself. Log repositories simply collect log information and do not perform analysis.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Chris is reviewing the code of an open-source application that he is planning to use in his organization. He finds the code excerpt shown here: `int myarray[10]; myarray[10] = 8;`. What type of attack is taking place?",
    "options": [
      "Mismatched data types",
      "Overflow",
      "SQL injection",
      "Covert channel"
    ],
    "correctAnswer": ["Overflow"],
    "explanation": "This is an example of a specific type of buffer overflow known as an off-by-one error. The first line of the code defines an array of 10 elements, which would be numbered 0 through 9. The second line of code tries to place a value in the 11th element of the array (remember, array counting begins at 0!), which would cause an overflow.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following database issues occurs when one transaction writes a value to the database that overwrites a value that was needed by transactions with earlier precedence?",
    "options": [
      "Dirty read",
      "Incorrect summary",
      "Lost update",
      "SQL injection"
    ],
    "correctAnswer": ["Lost update"],
    "explanation": "Lost updates occur when one transaction writes a value to the database that overwrites a value needed by transactions that have earlier precedence, causing those transactions to read an incorrect value. Dirty reads occur when one transaction reads a value from a database that was written by another transaction that did not commit. Incorrect summaries occur when one transaction is using an aggregate function to summarize data stored in a database while a second transaction is making modifications to the database, causing the summary to include incorrect information. SQL injection is a web application security flaw, not a database concurrency problem.",
    "domain": "Software Development Security",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Belinda would like to better protect users of her organization's web application from cookie-stealing attacks. Which one of the following is the most effective control against this type of session hijacking attack?",
    "options": [
      "TLS",
      "Complex session cookies",
      "SSL",
      "Expiring cookies frequently"
    ],
    "correctAnswer": ["TLS"],
    "explanation": "Transport Layer Security (TLS) provides the most effective defense against session hijacking because it encrypts all traffic between the client and server, preventing the attacker from stealing session credentials. Secure Sockets Layer (SSL) also encrypts traffic, but it is vulnerable to attacks against its encryption technology. Complex and expiring cookies are a good idea, but they are not sufficient protection against session hijacking.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "In a software configuration management program, what is the primary role of the CAB?",
    "options": [
      "Approve the credentials of developers.",
      "Facilitate lessons learned sessions.",
      "Review and approve/reject code changes.",
      "Prioritize software development efforts."
    ],
    "correctAnswer": ["Review and approve/reject code changes."],
    "explanation": "The purpose of the change advisory board (CAB) is to review and then approve or reject proposed code changes. The CAB is not normally involved in the approval of developer credentials, the conduct of lessons learned sessions, or the prioritization of software development efforts.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following tools is commonly used by software developers to interact with and manage code that is stored in code repositories?",
    "options": [
      "grep",
      "git",
      "lsof",
      "gcc"
    ],
    "correctAnswer": ["git"],
    "explanation": "git is a version management tool that is very commonly used by developers to interact with code repositories, such as those hosted by GitHub. grep is a command-line tool used to search files for specific content. lsof is a command used to list the open files on a system. gcc is a C language compiler used to transform source code into executable code.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "While evaluating a potential security incident, Harry comes across a log entry from a web server request showing that a user entered the following input into a form field: CARROT'&1=1;--. What type of attack was attempted?",
    "options": [
      "Buffer overflow",
      "Cross-site scripting",
      "SQL injection",
      "Cross-site request forgery"
    ],
    "correctAnswer": ["SQL injection"],
    "explanation": "The single quotation mark in the input field is a telltale sign that this is a SQL injection attack. The single quotation mark is used to escape outside the SQL code's input field, and the text following it is used to directly manipulate the SQL command sent from the web application to the database.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following is not an effective control against SQL injection attacks?",
    "options": [
      "Escaping",
      "Client-side input validation",
      "Parameterization",
      "Limiting database permissions"
    ],
    "correctAnswer": ["Client-side input validation"],
    "explanation": "Client-side input validation is not an effective control against any type of attack because the attacker can easily bypass the validation by altering the code on the client. Escaping restricted characters prevents them from being passed to the database, as does parameterization. Limiting database permissions prevents dangerous code from executing.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a PERT chart with nodes and time estimates] Jason is reviewing the documentation for a software development project and comes across the diagram shown here. What type of diagram is he examining?",
    "options": [
      "WBS chart",
      "PERT chart",
      "Gantt chart",
      "Wireframe diagram"
    ],
    "correctAnswer": ["PERT chart"],
    "explanation": "PERT charts use nodes to represent milestones or deliverables and then show the estimated time to move between milestones. Gantt charts use a different format with a row for each task and lines showing the expected duration of the task. Work breakdown structures are an earlier deliverable that divides project work into achievable tasks. Wireframe diagrams are used in application UI design.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "In what software testing technique does the evaluator retest a large number of scenarios each time that the software changes to verify that the results are consistent with a standard baseline?",
    "options": [
      "Orthogonal array testing",
      "Pattern testing",
      "Matrix testing",
      "Regression testing"
    ],
    "correctAnswer": ["Regression testing"],
    "explanation": "Regression testing is performed after developers make changes to an application. It reruns a number of test cases and compares the results to baseline results. Orthogonal array testing is a method for generating test cases based on statistical analysis. Pattern testing uses records of past software bugs to inform the analysis. Matrix testing develops a matrix of all possible inputs and outputs to inform the test plan.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Haley is reviewing code created by her organization for its possible exposure to web application vulnerabilities. Which one of the following conditions may make an application most vulnerable to a cross-site scripting (XSS) attack?",
    "options": [
      "Input validation",
      "Reflected input",
      "Unpatched server",
      "Promiscuous firewall rules"
    ],
    "correctAnswer": ["Reflected input"],
    "explanation": "Cross-site scripting (XSS) attacks may take advantage of the use of reflected input in a web application where input provided by one user is displayed to another user. Input validation is a control used to prevent XSS attacks. XSS does not require an unpatched server or any firewall rules beyond those permitting access to the web application.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Roger is conducting a software test for a tax preparation application developed by his company. End users will access the application over the web, but Roger is conducting his test on the back end, evaluating the source code on the web server. What type of test is Roger conducting?",
    "options": [
      "White box",
      "Gray box",
      "Blue box",
      "Black box"
    ],
    "correctAnswer": ["White box"],
    "explanation": "In a white-box test, the tester has access to full implementation details of the system, including source code, prior to beginning the test. In gray-box testing, the tester has partial knowledge. In black-box testing, the tester has no knowledge of the system and tests it from a user perspective. Blue boxes are a phone hacking tool and are not used in software testing.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which of the following statements is true about heuristic-based antimalware software?",
    "options": [
      "It has a lower false positive rate than signature detection.",
      "It requires frequent definition updates to detect new malware.",
      "It has a higher likelihood of detecting zero-day exploits than signature detection.",
      "It monitors systems for files with content known to be viruses."
    ],
    "correctAnswer": ["It has a higher likelihood of detecting zero-day exploits than signature detection."],
    "explanation": "Heuristic-based antimalware software has a higher likelihood of detecting a zero-day exploit than signature-based methods. Heuristic-based software does not require frequent signature updates because it does not rely upon monitoring systems for the presence of known malware. The trade-off with this approach is that it has a higher false positive rate than signature detection methods.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Martin is inspecting a system where the user reported unusual activity, including disk activity when the system is idle and abnormal CPU and network usage. He suspects that the machine is infected by a virus, but scans come up clean. What malware technique might be in use here that would explain the clean scan results?",
    "options": [
      "File infector virus",
      "MBR virus",
      "Service injection virus",
      "Stealth virus"
    ],
    "correctAnswer": ["Stealth virus"],
    "explanation": "One possibility for the clean scan results is that the virus is using stealth techniques, such as intercepting read requests from the antivirus software and returning a correct-looking version of the infected file. The system may also be the victim of a zero-day attack, using a virus that is not yet included in the signature definition files provided by the antivirus vendor.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Tomas discovers a line in his application log that appears to correspond with an attempt to conduct a directory traversal attack. He believes the attack was conducted using URL encoding. The line reads as follows: %252E%252E%252F%252E%252E%252Fetc/passwd. What character is represented by the %252E value?",
    "options": [
      ".",
      ",",
      ";",
      "/"
    ],
    "correctAnswer": ["."],
    "explanation": "In URL encoding, the . character is replaced by %252E, and the / character is replaced by %252F. You can see this in the log entry, where the expected pattern of ../../ is replaced by %252E%252E%252F%252E%252E%252F.",
    "domain": "Software Development Security",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "An attacker posted a message to a public discussion forum that contains an embedded malicious script that is not displayed to the user but executes on the user's system when read. What type of attack is this?",
    "options": [
      "Persistent XSRF",
      "Nonpersistent XSRF",
      "Persistent XSS",
      "Nonpersistent XSS"
    ],
    "correctAnswer": ["Persistent XSS"],
    "explanation": "Attacks where the malicious user tricks the victim's web browser into executing a script through the use of a third-party site are known as cross-site scripting (XSS) attacks. This particular attack is a persistent XSS attack because it remains on the discussion forum until an administrator discovers and deletes it, giving it the ability to affect many users.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following is not a principle of the Agile software development process?",
    "options": [
      "Welcome changing requirements, even late in the development process.",
      "Maximizing the amount of work not done is essential.",
      "Clear documentation is the primary measure of progress.",
      "Build projects around motivated individuals."
    ],
    "correctAnswer": ["Clear documentation is the primary measure of progress."],
    "explanation": "The Agile Manifesto includes 12 principles for software development. Three of those are listed as answer choices: maximizing the amount of work not done is essential, build projects around motivated individuals, and welcome changing requirements throughout the development process. Agile does not, however, consider clear documentation the primary measure of progress. Instead, working software is the primary measure of progress.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Gavin is an internal auditor tasked with examining the change management practices of his organization. He would like to review a series of changes made to a software package to determine whether they were properly documented. Where should he turn for a description of each proposed change?",
    "options": [
      "CAB",
      "RFC",
      "SOAR",
      "SIEM"
    ],
    "correctAnswer": ["RFC"],
    "explanation": "Each change should be the result of a reviewed and approved request for change (RFC). These RFCs may be approved by the change advisory board (CAB). The security information and event management (SIEM) and security orchestration, automation, and response (SOAR) platforms used by the organization would not normally contain information about the change management process.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Neal is working with a DynamoDB database. The database is not structured like a relational database but allows Neal to store data using a key-value store. What type of database is DynamoDB?",
    "options": [
      "Relational database",
      "Graph database",
      "Hierarchical database",
      "NoSQL database"
    ],
    "correctAnswer": ["NoSQL database"],
    "explanation": "A key-value store is an example of a NoSQL database that does not follow a relational or hierarchical model like traditional databases. A graph database is another example of a NoSQL database, but it uses nodes and edges to store data rather than keys and values.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a SQL transaction code block] In the transaction shown here, what would happen if the database failed in between the first and second update statements?",
    "options": [
      "The database would credit the first account with $250 in funds but then not reduce the balance of the second account.",
      "The database would ignore the first command and only reduce the balance of the second account by $250.",
      "The database would roll back the transaction, ignoring the results of both commands.",
      "The database would successfully execute both commands."
    ],
    "correctAnswer": ["The database would roll back the transaction, ignoring the results of both commands."],
    "explanation": "A database failure in the middle of a transaction causes the rollback of the entire transaction. In this scenario, the database would not execute either command because doing so would violate the atomicity property of the transaction.",
    "domain": "Software Development Security",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Tareck's organization makes use of a significant amount of COTS software. He recently discovered a significant buffer overflow vulnerability in the code of a COTS software package that is crucial to his business. What is the most likely way that Tareck can get this corrected?",
    "options": [
      "Work with his software development team to modify the code.",
      "Notify the vendor and request a patch.",
      "Deploy an intrusion prevention system.",
      "Update firewall rules."
    ],
    "correctAnswer": ["Notify the vendor and request a patch."],
    "explanation": "When using commercial off-the-shelf (COTS) software, customers do not generally have access to the source code and must depend upon the vendor to release security patches that correct vulnerabilities. Other controls, such as intrusion prevention systems and firewalls, may be able to help mitigate the issue, depending upon the nature of the flaw, but they will not correct it.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following statements is true about software testing?",
    "options": [
      "Static testing works on runtime environments.",
      "Static testing performs code analysis.",
      "Dynamic testing uses automated tools, but static testing does not.",
      "Static testing is a more important testing technique than dynamic testing."
    ],
    "correctAnswer": ["Static testing performs code analysis."],
    "explanation": "Static testing performs code analysis in an offline fashion, without actually executing the code. Dynamic testing evaluates code in a runtime environment. Both static and dynamic testing may use automated tools, and both are important security testing techniques.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a Gantt chart] David is working on developing a project schedule for a software development effort, and he comes across the chart shown here. What type of chart is this?",
    "options": [
      "Work breakdown structure",
      "Functional requirements",
      "PERT chart",
      "Gantt chart"
    ],
    "correctAnswer": ["Gantt chart"],
    "explanation": "The chart shown in the figure is a Gantt chart, showing the proposed start and end dates for different activities. It is developed based on the work breakdown structure (WBS), which is developed based on functional requirements. Program Evaluation Review Technique (PERT) charts show the project schedule as a series of numbered nodes.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Barry is a software tester who is working with a new gaming application developed by his company. He is playing the game on a smartphone to conduct his testing in an environment that best simulates a normal end user, but he is referencing the source code as he conducts his test. What type of test is Barry conducting?",
    "options": [
      "White box",
      "Black box",
      "Blue box",
      "Gray box"
    ],
    "correctAnswer": ["Gray box"],
    "explanation": "In a gray-box test, the tester evaluates the software from a user perspective but has access to the source code as the test is conducted. White-box tests also have access to the source code but perform testing from a developer's perspective. Black-box tests work from a user's perspective but do not have access to source code. Blue boxes are a telephone hacking tool and not a software testing technique.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Miguel recently completed a penetration test of the applications that his organization uses to handle sensitive information. During his testing, he discovered a condition where an attacker can exploit a timing condition to manipulate software into allowing him to perform an unauthorized action. Which one of the following attack types fits this scenario?",
    "options": [
      "SQL injection",
      "Cross-site scripting",
      "Pass the hash",
      "TOC/TOU"
    ],
    "correctAnswer": ["TOC/TOU"],
    "explanation": "The Time of Check to Time of Use (TOC/TOU) attack exploits timing differences between when a system verifies authorization and software uses that authorization to perform an action. It is an example of a race condition attack. The other three attacks mentioned do not depend on precise timing.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a diagram showing various input parameters feeding into a parameter tracking process] What part of the security review process are the input parameters shown in the diagram used for?",
    "options": [
      "SQL injection review",
      "Sprint review",
      "Fagan inspection",
      "Attack surface identification"
    ],
    "correctAnswer": ["Attack surface identification"],
    "explanation": "Each of these input parameters makes up part of the attack surface of the application. Attackers may opt to target any of them to attack the code or its supporting infrastructure.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What application security process can be described in these three major steps: 1. Decomposing the application, 2. Determining and ranking threats, 3. Determining countermeasures and mitigation?",
    "options": [
      "Fagan inspection",
      "Threat modeling",
      "Penetration testing",
      "Code review"
    ],
    "correctAnswer": ["Threat modeling"],
    "explanation": "Threat modeling commonly involves decomposing the application to understand it and how it interacts with other components or users. Next, identifying and ranking threats allows you to focus on the threats that should be prioritized. Finally, identifying how to mitigate those threats finishes the process. Once complete, an organization can take action to handle the threats that were identified with appropriate controls.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following approaches to failure management is the most conservative from a security perspective?",
    "options": [
      "Fail open",
      "Fail mitigation",
      "Fail clear",
      "Fail closed"
    ],
    "correctAnswer": ["Fail closed"],
    "explanation": "The fail closed approach prevents any activity from taking place during a system security failure and is the most conservative approach to failure management. Fail open takes the opposite philosophy, allowing all activity in the event of a security control failure. Fail clear and fail mitigation are not failure management approaches.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of the spiral model of software development diagram] What software development model is shown here?",
    "options": [
      "Waterfall",
      "Agile",
      "Lean",
      "Spiral"
    ],
    "correctAnswer": ["Spiral"],
    "explanation": "The illustration shows the spiral model of software development. In this approach, developers use multiple iterations of a waterfall-style software development process. This becomes a “loop” of iterations through similar processes. The original waterfall approach does not iterate through the entire process repeatedly. Some variants do allow iteration, but only by allowing movement backward and forward one stage. The Agile approach to software development focuses on iterative improvement and does not follow a rigorous SDLC model. Lean is a process improvement methodology and not a software development model.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Mark is considering replacing his organization's customer relationship management (CRM) solution with a new product that is available in the cloud. This new solution is completely managed by the vendor, and Mark's company will not have to write any code or manage any physical resources. What type of cloud solution is Mark considering?",
    "options": [
      "IaaS",
      "CaaS",
      "PaaS",
      "SaaS"
    ],
    "correctAnswer": ["SaaS"],
    "explanation": "In a software-as-a-service solution, the vendor manages both the physical infrastructure and the complete application stack, providing the customer with access to a fully managed application.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following change management processes is initiated by users rather than developers?",
    "options": [
      "Change request",
      "Change control",
      "Release control",
      "Design review"
    ],
    "correctAnswer": ["Change request"],
    "explanation": "The request process begins with a user-initiated request for a feature. Change and release control are initiated by developers seeking to implement changes. Design review is a phase of the change approval process initiated by developers when they have a completed design.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Teagan would like to better protect his organization against database inference attacks. Which one of the following techniques is an effective countermeasure against these attacks?",
    "options": [
      "Input validation",
      "Parameterization",
      "Polyinstantiation",
      "Server-side validation"
    ],
    "correctAnswer": ["Polyinstantiation"],
    "explanation": "Polyinstantiation allows the storage of multiple different pieces of information in a database at different classification levels to prevent attackers from inferring anything about the absence of information. Input validation, server-side validation, and parameterization are all techniques used to prevent web application attacks and are not effective against inference attacks.",
    "domain": "Software Development Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ursula is a government web developer who recently created a public application that offers property records. She would like to make it available for other developers to integrate into their applications. What can Ursula create to make it easiest for developers to call her code directly and integrate the output into their applications?",
    "options": [
      "Object model",
      "Data dictionary",
      "API",
      "Primary key"
    ],
    "correctAnswer": ["API"],
    "explanation": "While Ursula may certainly use an object model, data dictionary, and primary key in her development effort, external developers cannot directly use them to access her code. An application programming interface (API) allows other developers to call Ursula's code from within their own without knowing the details of Ursula's implementation.",
    "domain": "Software Development Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Nathan recently completed a software development project where he integrated the organization's network operations stack with their development processes. As a result, developers can modify firewall rules from their code on an as-needed basis. What term best describes this ability?",
    "options": [
      "Agile",
      "IaC",
      "SDS",
      "DevOps"
    ],
    "correctAnswer": ["SDS"],
    "explanation": "This is an example of software-defined security (SDS), where security infrastructure may be easily manipulated by code. Answering this question is tricky because several of the other terms are closely related. Software-defined security is an example of infrastructure as code (IaC), but SDS is a more descriptive, and therefore better, answer. SDS is commonly used within an Agile development framework. The DevOps approach links together development and operations but is generally called DevSecOps when it also includes SDS.",
    "domain": "Software Development Security",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  }
 ]