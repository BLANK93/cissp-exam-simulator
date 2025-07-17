[
  {
    "text": "Matthew is the security administrator for a consulting firm and must enforce access controls that restrict users' access based upon their previous activity. For example, once a consultant accesses data belonging to Acme Cola, a consulting client, they may no longer access data belonging to any of Acme's competitors. What security model best fits Matthew's needs?",
    "options": [
      "Clark-Wilson",
      "Biba",
      "Bell-LaPadula",
      "Brewer-Nash"
    ],
    "correctAnswer": ["Brewer-Nash"],
    "explanation": "The Brewer-Nash model allows access controls to change dynamically based upon a user's actions. It is often used in environments like Matthew's to implement a “Chinese wall” between data belonging to different clients.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": " Referring to the figure shown here, what is the earliest stage of a fire where it is possible to use detection technology to identify it?",
    "options": [
      "Incipient",
      "Smoke",
      "Flame",
      "Heat"
    ],
    "correctAnswer": ["Incipient"],
    "explanation": "Fires may be detected as early as the incipient stage. During this stage, air ionization takes place, and specialized incipient fire detection systems can identify these changes to provide early warning of a fire.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ralph is designing a physical security infrastructure for a new computing facility that will remain largely unstaffed. He plans to implement motion detectors in the facility but would also like to include a secondary verification control for physical presence. Which one of the following would best meet his needs?",
    "options": [
      "CCTV",
      "IPS",
      "Turnstiles",
      "Faraday cages"
    ],
    "correctAnswer": ["CCTV"],
    "explanation": "Closed-circuit television (CCTV) systems act as a secondary verification mechanism for physical presence because they allow security officials to view the interior of the facility when a motion alarm sounds to determine the current occupants and their activities.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Harry would like to retrieve a lost encryption key from a database that uses m of n control, with m=4 and n=8. What is the minimum number of escrow agents required to retrieve the key?",
    "options": [
      "2",
      "4",
      "8",
      "12"
    ],
    "correctAnswer": ["4"],
    "explanation": "In an m of n control system, at least m of n possible escrow agents must collaborate to retrieve an encryption key from the escrow database.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Fran's company is considering purchasing a web-based email service from a vendor and eliminating its own email server environment as a cost-saving measure. What type of cloud computing environment is Fran's company considering?",
    "options": [
      "SaaS",
      "IaaS",
      "CaaS",
      "PaaS"
    ],
    "correctAnswer": ["SaaS"],
    "explanation": "This is an example of a vendor offering a fully functional application as a web-based service. Therefore, it fits under the definition of software as a service (SaaS). In infrastructure as a service (IaaS), compute as a service (CaaS), and platform as a service (PaaS), the customer provides their own software. In this example, the vendor is providing the email software, so none of those choices is appropriate.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Bob is a security administrator with the U.S. federal government and wants to choose a digital signature approach that is an approved part of the federal Digital Signature Standard under FIPS 186-5. Which one of the following encryption algorithms is not an acceptable choice for use in digital signatures?",
    "options": [
      "EdDSA",
      "HAVAL",
      "RSA",
      "ECDSA"
    ],
    "correctAnswer": ["HAVAL"],
    "explanation": "The Digital Signature Standard approves three encryption algorithms for use in digital signatures: the Rivest, Shamir, Adleman (RSA) algorithm; the Elliptic Curve DSA (ECDSA) algorithm, and the Edwards Curve Digital Signature Algorithm (EdDSA). HAVAL is a hash function, not an encryption algorithm. While hash functions are used as part of the digital signature process, they do not provide encryption.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Harry would like to access a document owned by Sally and stored on a file server. Applying the subject/object model to this scenario, who or what is the subject of the resource request?",
    "options": [
      "Harry",
      "Sally",
      "Server",
      "Document"
    ],
    "correctAnswer": ["Harry"],
    "explanation": "In the subject/object model of access control, the user or process making the request for a resource is the subject of that request. In this example, Harry is requesting resource access and is, therefore, the subject.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Michael is responsible for forensic investigations and is investigating a medium-severity security incident that involved the defacement of a corporate website. The web server in question ran on a virtualization platform, and the marketing team would like to get the website up and running as quickly as possible. What would be the most reasonable next step for Michael to take?",
    "options": [
      "Keep the website offline until the investigation is complete.",
      "Take the virtualization platform offline as evidence.",
      "Take a snapshot of the compromised system and use that for the investigation.",
      "Ignore the incident and focus on quickly restoring the website."
    ],
    "correctAnswer": ["Take a snapshot of the compromised system and use that for the investigation."],
    "explanation": "Michael should conduct his investigation, but there is a pressing business need to bring the website back online. The most reasonable course of action would be to take a snapshot of the compromised system and use the snapshot for the investigation, restoring the website to operation as quickly as possible while using the results of the investigation to improve the security of the site.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Helen is a software engineer and is developing code that she would like to restrict to running within an isolated sandbox for security purposes. What software development technique is Helen using?",
    "options": [
      "Bounds",
      "Input validation",
      "Confinement",
      "TCB"
    ],
    "correctAnswer": ["Confinement"],
    "explanation": "Using a sandbox is an example of confinement, where the system restricts the access of a particular process to limit its ability to affect other processes running on the same system.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What concept describes the degree of confidence that an organization has that its controls satisfy security requirements?",
    "options": [
      "Trust",
      "Credentialing",
      "Verification",
      "Assurance"
    ],
    "correctAnswer": ["Assurance"],
    "explanation": "Assurance is the degree of confidence that an organization has that its security controls are correctly implemented. It must be continually monitored and reverified.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What type of security vulnerability are developers most likely to introduce into code when they seek to facilitate their own access, for testing purposes, to software they developed?",
    "options": [
      "Maintenance hook",
      "Cross-site scripting",
      "SQL injection",
      "Buffer overflow"
    ],
    "correctAnswer": ["Maintenance hook"],
    "explanation": "Maintenance hooks, otherwise known as backdoors, provide developers with easy access to a system, bypassing normal security controls. If not removed prior to finalizing code, they pose a significant security vulnerability if an attacker discovers the maintenance hook.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": " In the figure shown here, Sally is blocked from reading the file due to the Biba integrity model. Sally has a Secret security clearance, and the file has a Confidential classification. What principle of the Biba model is being enforced?",
    "options": [
      "Simple Security Property",
      "Simple Integrity Property",
      "*-Security Property",
      "*-Integrity Property"
    ],
    "correctAnswer": ["Simple Integrity Property"],
    "explanation": "The Simple Integrity Property states that an individual may not read a file classified at a lower security level than the individual's security clearance.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Tom is responsible for maintaining the security of systems used to control industrial processes located within a power plant. What term is used to describe these systems?",
    "options": [
      "POWER",
      "SCADA",
      "HAVAL",
      "COBOL"
    ],
    "correctAnswer": ["SCADA"],
    "explanation": "Supervisory control and data acquisition (SCADA) systems are used to control and gather data from industrial processes. They are commonly found in power plants and other industrial environments.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Sonia recently removed an encrypted hard drive from a laptop and moved it to a new device because of a hardware failure. She is having difficulty accessing encrypted content on the drive despite that she knows the user's password. What hardware security feature is likely causing this problem?",
    "options": [
      "TCB",
      "TPM",
      "NIACAP",
      "RSA"
    ],
    "correctAnswer": ["TPM"],
    "explanation": "The Trusted Platform Module (TPM) is a hardware security technique that stores an encryption key on a chip on the motherboard and prevents someone from accessing an encrypted drive by installing it in another computer.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Chris wants to verify that a software package that he downloaded matches the original version. What hashing tool should he use if he believes that technically sophisticated attackers may have replaced the software package with a version containing a backdoor?",
    "options": [
      "MD5",
      "3DES",
      "SHA1",
      "SHA 256"
    ],
    "correctAnswer": ["SHA 256"],
    "explanation": "Intentional collisions have been created with MD5, and a real-world collision attack against SHA 1was announced in early 2017. 3DES is not a hashing tool, leaving SHA 256 (sometimes called SHA 2) as the only real choice that Chris has in this list.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alice and Bob would like to use an asymmetric cryptosystem. If Alice wants to send Bob a message that is encrypted for confidentiality, what key does she use to encrypt the message?",
    "options": [
      "Alice's public key",
      "Alice's private key",
      "Bob's public key",
      "Bob's private key"
    ],
    "correctAnswer": ["Bob's public key"],
    "explanation": "In an asymmetric cryptosystem, the sender of a message encrypts the message using the recipient's public key. The recipient may then decrypt that message using their own private key, which only they should possess.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "When Bob receives the encrypted message from Alice, what key does he use to decrypt the message's plaintext content?",
    "options": [
      "Alice's public key",
      "Alice's private key",
      "Bob's public key",
      "Bob's private key"
    ],
    "correctAnswer": ["Bob's private key"],
    "explanation": "When Bob receives the message, he uses his own private key to decrypt it. Since he is the only one with his private key, he is the only one who should be able to decrypt it, thus preserving confidentiality.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following keys would Bob not possess in a scenario where he and Alice are using asymmetric cryptography?",
    "options": [
      "Alice's public key",
      "Alice's private key",
      "Bob's public key",
      "Bob's private key"
    ],
    "correctAnswer": ["Alice's private key"],
    "explanation": "Each user retains their own private key as secret information. In this scenario, Bob would only have access to his own private key and would not have access to the private key of Alice or any other user.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alice would also like to digitally sign the message that she sends to Bob. What key should she use to create the digital signature?",
    "options": [
      "Alice's public key",
      "Alice's private key",
      "Bob's public key",
      "Bob's private key"
    ],
    "correctAnswer": ["Alice's private key"],
    "explanation": "Alice creates the digital signature using her own private key. Then Bob, or any other user, can verify the digital signature using Alice's public key.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What name is given to the random value added to a password in an attempt to defeat rainbow table attacks?",
    "options": [
      "Hash",
      "Salt",
      "Extender",
      "Rebar"
    ],
    "correctAnswer": ["Salt"],
    "explanation": "The salt is a random value added to a password before it is hashed by the operating system. The salt is then stored in a password file with the hashed password. This increases the complexity of cryptanalytic attacks by negating the usefulness of attacks that use precomputed hash values, such as rainbow tables.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following is not an attribute of a typical hashing algorithm?",
    "options": [
      "They require a cryptographic key.",
      "They are irreversible.",
      "It is very difficult to find two messages with the same hash value.",
      "They take variable-length input."
    ],
    "correctAnswer": ["They require a cryptographic key."],
    "explanation": "Hash functions do not include any element of secrecy and, therefore, do not require a cryptographic key.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What type of fire suppression system fills with water after a valve opens when the initial stages of a fire are detected and then requires a sprinkler head heat activation before dispensing water?",
    "options": [
      "Wet pipe",
      "Dry pipe",
      "Deluge",
      "Preaction"
    ],
    "correctAnswer": ["Preaction"],
    "explanation": "A preaction fire suppression system activates in two steps. The pipes fill with water once the early signs of a fire are detected. The system does not dispense water until heat sensors on the sprinkler heads trigger the second phase.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Susan would like to configure IPsec in a manner that provides confidentiality for the content of packets. What component of IPsec provides this capability?",
    "options": [
      "AH",
      "ESP",
      "IKE",
      "ISAKMP"
    ],
    "correctAnswer": ["ESP"],
    "explanation": "The Encapsulating Security Payload (ESP) protocol provides confidentiality and integrity for packet contents. It encrypts packet payloads and provides limited authentication and protection against replay attacks.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following cryptographic goals protects against the risks posed when a device is lost or stolen?",
    "options": [
      "Nonrepudiation",
      "Authentication",
      "Integrity",
      "Confidentiality"
    ],
    "correctAnswer": ["Confidentiality"],
    "explanation": "The greatest risk when a device is lost or stolen is that sensitive data contained on the device will fall into the wrong hands. Confidentiality processes protect against this risk. Nonrepudiation is when the recipient of a message can prove the originator's identity to a third party. Authentication is a means of proving one's identity. Integrity demonstrates that information has not been modified since transmission.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Joanna wants to review the status of the industrial control systems her organization uses for building control. What type of systems should she inquire about access to?",
    "options": [
      "SCADA",
      "DSS",
      "BAS",
      "ICS-CSS"
    ],
    "correctAnswer": ["SCADA"],
    "explanation": "Supervisory Control and Data Acquisition systems, or SCADA systems, provide a graphical interface to monitor industrial control systems (ICS). Joanna should ask about access to her organization's SCADA systems.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": " In the figure shown here, Harry's request to write to the data file is blocked. Harry has a Secret security clearance, and the data file has a Confidential classification. What principle of the Bell-LaPadula model blocked this request?",
    "options": [
      "Simple Security Property",
      "Simple Integrity Property",
      "*-Security Property",
      "Discretionary Security Property"
    ],
    "correctAnswer": ["*-Security Property"],
    "explanation": "The *-Security Property states that an individual may not write to a file at a lower classification level than that of the individual. This is also known as the confinement property.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Florian and Tobias would like to begin communicating using a symmetric cryptosystem, but they have no prearranged secret and are not able to meet in person to exchange keys. What algorithm can they use to securely exchange the secret key?",
    "options": [
      "IDEA",
      "Diffie-Hellman",
      "RSA",
      "MD5"
    ],
    "correctAnswer": ["Diffie-Hellman"],
    "explanation": "The Diffie-Hellman algorithm allows for the secure exchange of symmetric encryption keys over a public network. IDEA and RSA are encryption algorithms. MD5 is a hashing function.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Carl's organization recently underwent a user access review. At the conclusion of the review, the auditors noted several cases of privilege creep. What security principle was violated?",
    "options": [
      "Fail securely",
      "Keep it simple and secure",
      "Trust but verify",
      "Least privilege"
    ],
    "correctAnswer": ["Least privilege"],
    "explanation": "The principle of least privilege says that an employee should have only the minimum necessary privileges required to perform their jobs. Privilege creep indicates that an employee has accumulated permissions that they no longer require, indicating a violation of the least privilege principle. The trust but verify principle says that organizations should use auditing to ensure that control objectives are met. The fail securely principle says that security controls should default to a secure state in the event of a control failure. The keep it simple and secure principle says that security controls and other technologies should remain as simple as possible while still completing their objectives.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Matt's organization recently adopted a zero trust network architecture. Under this approach, which one of the following criteria would be LEAST appropriate to use when granting a subject access to resources?",
    "options": [
      "Password",
      "Two-factor authentication",
      "IP address",
      "Biometric scan"
    ],
    "correctAnswer": ["IP address"],
    "explanation": "In a zero trust network architecture, access control decisions should never be made based upon a system's location on the network. Therefore, an IP address should never be used and would be the least appropriate of these options. While the other options have differing levels of security (two-factor authentication is clearly stronger than a password or biometrics alone), they do not violate the principles of a zero trust network architecture.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Colin is the chief privacy officer for a nonprofit organization and is assisting with the team's transition to a Privacy by Design approach. Under this approach, which is not one of the Privacy by Design principles?",
    "options": [
      "Proactive, not reactive",
      "Privacy as the default setting",
      "End-to-end security",
      "Defense in depth"
    ],
    "correctAnswer": ["Defense in depth"],
    "explanation": "While defense in depth is a strong security principle, it is not a component of Privacy by Design. The seven principles of Privacy by Design are: 1. Proactive, not reactive; preventative not remedial 2. Privacy as the default 3. Privacy embedded into design 4. Full functionality—positive-sum, not zero-sum 5. End-to-end life-cycle protection 6. Visibility and transparency 7. Respect for user privacy",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What cryptographic principle stands behind the idea that cryptographic algorithms should be open to public inspection?",
    "options": [
      "Security through obscurity",
      "Kerckhoffs' principle",
      "Defense in depth",
      "Heisenburg principle"
    ],
    "correctAnswer": ["Kerckhoffs' principle"],
    "explanation": "Kerckhoffs' principle says that a cryptographic system should be secure even if everything about the system, except the key, is public knowledge.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": " Ryan is developing a physical access plan for his organization's data center and wants to implement the security control indicated by the arrow in this diagram. What is the name of this control?",
    "options": [
      "Access control vestibule",
      "Turnstile",
      "Intrusion prevention system",
      "Portal"
    ],
    "correctAnswer": ["Access control vestibule"],
    "explanation": "Access control vestibules use two sets of doors to control access to a facility. This may be used to prevent piggybacking by monitoring use of the vestibule to allow only a single individual to enter a facility at a time. They may also be used to allow manual inspection of individuals or perform other security screening. Access control vestibules are also commonly known as mantraps.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following does not describe a standard physical security requirement for wiring closets?",
    "options": [
      "Place only in areas monitored by security guards.",
      "Do not store flammable items in the closet.",
      "Use sensors on doors to log entries.",
      "Perform regular inspections of the closet."
    ],
    "correctAnswer": ["Place only in areas monitored by security guards."],
    "explanation": "While it would be ideal to have wiring closets in a location where they are monitored by security staff, this is not feasible in most environments. Wiring closets must be distributed geographically in multiple locations across each building used by an organization.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": " In the figure shown here, Sally is blocked from writing to the data file by the Biba integrity model. Sally has a Secret security clearance, and the file is classified Top Secret. What principle is preventing her from writing to the file?",
    "options": [
      "Simple Security Property",
      "Simple Integrity Property",
      "*-Security Property",
      "*-Integrity Property"
    ],
    "correctAnswer": ["*-Integrity Property"],
    "explanation": "The *-Integrity Property states that a subject cannot modify an object at a higher integrity level than that possessed by the subject.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Lana recently implemented a new process in her organization where managers who are responsible for granting users access to a system are not permitted to participate in access reviews. What principle is she enforcing?",
    "options": [
      "Two-person control",
      "Least privilege",
      "Privilege creep",
      "Segregation of duties"
    ],
    "correctAnswer": ["Segregation of duties"],
    "explanation": "The segregation of duties principle says that no employee should have permission to perform two tasks that, when combined, would pose a security risk. In this situation, an employee auditing their own work would create a conflict of interest, so Lana has implemented a segregation of duties. Two-person control is closely related, but it requires that two different employees approve an action. If she required that two managers approve new accounts, that would be an example of two-person control.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which of the following statements about system development are correct? (Select all that apply.)",
    "options": [
      "Systems should be designed to operate in a secure manner if the user performs no other configuration.",
      "Systems should be designed to fall back to a secure state if they experience an error.",
      "Systems should be designed to incorporate security as a design feature.",
      "Systems should be designed in a manner that keeps their functionality as simple as possible."
    ],
    "correctAnswer": [
      "Systems should be designed to operate in a secure manner if the user performs no other configuration.",
      "Systems should be designed to fall back to a secure state if they experience an error.",
      "Systems should be designed to incorporate security as a design feature.",
      "Systems should be designed in a manner that keeps their functionality as simple as possible."
    ],
    "explanation": "All of these statements are correct. The idea that systems should be designed to operate in a secure manner if the user performs no other configuration is the secure defaults principle. The idea that systems should be designed to fall back to a secure state if they experience an error is the fail securely principle. The idea that systems should be designed to incorporate security as a design feature is the security by design principle. The idea that systems should be designed in a manner that keeps their functionality as simple as possible is the keep it simple principle.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "questionType": "multi-response",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alan is reviewing a system that has been assigned the EAL1 evaluation assurance level under the Common Criteria. What is the degree of assurance that he may have about the system?",
    "options": [
      "It has been functionally tested.",
      "It has been structurally tested.",
      "It has been formally verified, designed, and tested.",
      "It has been methodically designed, tested, and reviewed."
    ],
    "correctAnswer": ["It has been functionally tested."],
    "explanation": "EAL1 assurance applies when the system in question has been functionally tested. It is the lowest level of assurance under the Common Criteria.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jake works for a research organization that is seeking to deploy a grid computing system that will perform cycle scavenging on user workstations to conduct research tasks that require high-performance computing. What is the most significant risk associated with this operation?",
    "options": [
      "Data confidentiality",
      "Isolation breach",
      "Data integrity",
      "Data availability"
    ],
    "correctAnswer": ["Isolation breach"],
    "explanation": "The system can be designed in a manner that protects the confidentiality, integrity, and availability of data. The research workstations included in the grid are from internal users, minimizing the risk of distributing the data. However, an isolation breach in the distributed computing client could be catastrophic, allowing someone who compromises the controller to assume control of every device in the organization.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Eimear's software development team uses an approach that creates many discrete software objects and then binds them together using APIs. What term best describes this architecture?",
    "options": [
      "Microservices",
      "Function-as-a-service",
      "Containerization",
      "Virtualization"
    ],
    "correctAnswer": ["Microservices"],
    "explanation": "This is an example of a microservices architecture. Each of the component microservices performs a discrete task and then communicates with other microservices using APIs. This might be accomplished using function-as-a-service (FaaS) cloud computing, containerization, and/or virtualization, but there is no indication whether those services are being used in the scenario.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Adam recently configured permissions on an NTFS filesystem to describe the access that different users may have to a file by listing each user individually. What did Adam create?",
    "options": [
      "An access control list",
      "An access control entry",
      "Role-based access control",
      "Mandatory access control"
    ],
    "correctAnswer": ["An access control list"],
    "explanation": "Adam created a list of individual users who may access the file. This is an access control list, which consists of multiple access control entries. It includes the names of users, so it is not role-based, and Adam was able to modify the list, so it is not mandatory access control.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Betty is concerned about the use of buffer overflow attacks against a custom application developed for use in her organization. What security control would provide the strongest defense against these attacks?",
    "options": [
      "Firewall",
      "Intrusion detection system",
      "Parameter checking",
      "Vulnerability scanning"
    ],
    "correctAnswer": ["Parameter checking"],
    "explanation": "Parameter checking, or input validation, is used to ensure that input provided by users to an application matches the expected parameters for the application. Developers may use parameter checking to ensure that input does not exceed the expected length, preventing a buffer overflow attack.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following combinations of controls best embodies the defense-in-depth principle?",
    "options": [
      "Encryption of email and network intrusion detection",
      "Cloud access security brokers (CASBs) and security awareness training",
      "Data loss prevention and multifactor authentication",
      "Network firewall and host firewall"
    ],
    "correctAnswer": ["Network firewall and host firewall"],
    "explanation": "The defense-in-depth principle suggests using multiple overlapping security controls to achieve the same control objective. Network and host firewalls are both designed to limit network traffic and therefore are an example of defense in depth. The encryption of email and network intrusion detection are unrelated controls and do not satisfy the same objective. The same is true for the combination of CASB and security awareness training and the combination of DLP and multifactor authentication.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "James is working with a Department of Defense system that is authorized to simultaneously handle information classified at the Secret and Top Secret levels. What type of system is he using?",
    "options": [
      "Single state",
      "Unclassified",
      "Compartmented",
      "Multistate"
    ],
    "correctAnswer": ["Multistate"],
    "explanation": "Multistate systems are certified to handle data from different security classifications simultaneously by implementing protection mechanisms that segregate data appropriately.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Kyle is being granted access to a military computer system that uses System High mode. What is not true about Kyle's security clearance requirements?",
    "options": [
      "Kyle must have a clearance for the highest level of classification processed by the system, regardless of his access.",
      "Kyle must have access approval for all information processed by the system.",
      "Kyle must have a valid need to know for all information processed by the system.",
      "Kyle must have a valid security clearance."
    ],
    "correctAnswer": ["Kyle must have a valid need to know for all information processed by the system."],
    "explanation": "For systems running in System High mode, the user must have a valid security clearance for all information processed by the system, access approval for all information processed by the system, and a valid need to know for some, but not necessarily all, information processed by the system.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": " Gary intercepts a communication between two individuals and suspects that they are exchanging secret messages. The content of the communication appears to be the image shown here. What type of technique may the individuals use to hide messages inside this image?",
    "options": [
      "Visual cryptography",
      "Steganography",
      "Cryptographic hashing",
      "Transport layer security"
    ],
    "correctAnswer": ["Steganography"],
    "explanation": "Steganography is the art of using cryptographic techniques to embed secret messages within other content. Some steganographic algorithms work by making alterations to the least significant bits of the many bits that make up image files.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Philip is developing a new security tool that will be used by individuals in many different subsidiaries of his organization. He chooses to use Docker to deploy the tool to simplify configuration. What term best describes this approach?",
    "options": [
      "Virtualization",
      "Abstraction",
      "Simplification",
      "Containerization"
    ],
    "correctAnswer": ["Containerization"],
    "explanation": "All of these terms accurately describe this use of technology. However, the use of Docker is best described as a containerization technology, so this is the best possible answer choice.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": " In the ring protection model shown here, what ring contains the operating system's kernel?",
    "options": [
      "Ring 0",
      "Ring 1",
      "Ring 2",
      "Ring 3"
    ],
    "correctAnswer": ["Ring 0"],
    "explanation": "The kernel lies within the central ring, Ring 0. Conceptually, Ring 1 contains other operating system components. Ring 2 is used for drivers and protocols. User-level programs and applications run at Ring 3. Rings 0 through 2 run in privileged mode, while Ring 3 runs in user mode. It is important to note that many modern operating systems do not fully implement this model.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "In an infrastructure-as-a-service environment where a vendor supplies a customer with access to storage services, who is normally responsible for removing sensitive data from drives that are taken out of service?",
    "options": [
      "Customer's security team",
      "Customer's storage team",
      "Customer's vendor management team",
      "Vendor"
    ],
    "correctAnswer": ["Vendor"],
    "explanation": "In an infrastructure-as-a-service environment, security duties follow a shared responsibility model. Since the vendor is responsible for managing the storage hardware, the vendor would retain responsibility for destroying or wiping drives as they are taken out of service. However, it is still the customer's responsibility to validate that the vendor's sanitization procedures meet their requirements prior to utilizing the vendor's storage services.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "During a system audit, Casey notices that the private key for her organization's web server has been stored in a public Amazon S3 storage bucket for more than a year. Which one of the following actions should she take first?",
    "options": [
      "Remove the key from the bucket.",
      "Notify all customers that their data may have been exposed.",
      "Request a new certificate using a new key.",
      "Nothing, because the private key should be accessible for validation."
    ],
    "correctAnswer": ["Request a new certificate using a new key."],
    "explanation": "The first thing Casey should do is notify her management, but after that, replacing the certificate and using proper key management practices with the new certificate's key should be at the top of her list.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following systems assurance processes provides an independent third-party evaluation of a system's controls that may be trusted by many different organizations?",
    "options": [
      "Certification",
      "Definition",
      "Verification",
      "Accreditation"
    ],
    "correctAnswer": ["Verification"],
    "explanation": "The verification process is similar to the certification process in that it validates security controls. Verification may go a step further by involving a third-party testing service and compiling results that may be trusted by many different organizations. Accreditation is the act of management formally accepting a system, not evaluating the system itself.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Darcy's organization is deploying serverless computing technology to better meet the needs of developers and users. In a serverless model, who is normally responsible for configuring operating system security controls?",
    "options": [
      "Software developer",
      "Cybersecurity professional",
      "Cloud architect",
      "Vendor"
    ],
    "correctAnswer": ["Vendor"],
    "explanation": "In a serverless computing model, the vendor does not expose details of the operating system to its customers. Therefore, the vendor retains full responsibility for configuring it securely under the shared responsibility model of cloud computing.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Harold is assessing the susceptibility of his environment to hardware failures and would like to identify the expected lifetime of a piece of hardware. What measure should he use for this?",
    "options": [
      "MTTR",
      "MTTF",
      "RTO",
      "MTO"
    ],
    "correctAnswer": ["MTTF"],
    "explanation": "The mean time to failure (MTTF) provides the average amount of time before a device of that particular specification fails.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Chris is designing a cryptographic system for use within his company. The company has 1,000 employees, and they plan to use an asymmetric encryption system. They would like the system to be set up so that any pair of arbitrary users may communicate privately. How many total keys will they need?",
    "options": [
      "500",
      "1,000",
      "2,000",
      "499,500"
    ],
    "correctAnswer": ["2,000"],
    "explanation": "Asymmetric cryptosystems use a pair of keys for each user. In this case, with 1,000 users, the system will require 2,000 keys. 499,500 would be the correct answer for a symmetric system.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Gary is concerned about applying consistent security settings to the many mobile devices used throughout his organization. What technology would best assist with this challenge?",
    "options": [
      "MDM",
      "IPS",
      "IDS",
      "SIEM"
    ],
    "correctAnswer": ["MDM"],
    "explanation": "Mobile Device Management (MDM) products provide a consistent, centralized interface for applying security configuration settings to mobile devices.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alice sent a message to Bob. Bob would like to demonstrate to Charlie that the message he received definitely came from Alice. What goal of cryptography is Bob attempting to achieve?",
    "options": [
      "Authentication",
      "Confidentiality",
      "Nonrepudiation",
      "Integrity"
    ],
    "correctAnswer": ["Nonrepudiation"],
    "explanation": "Nonrepudiation occurs when the recipient of a message is able to demonstrate to a third party that the message came from the purported sender.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": " Rhonda is considering the use of new identification cards for physical access control in her organization. She comes across a military system that uses the card shown here. What type of card is this?",
    "options": [
      "Smart card",
      "Proximity card",
      "Magnetic stripe card",
      "Phase three card"
    ],
    "correctAnswer": ["Smart card"],
    "explanation": "The card shown in the image has a smart chip underneath the American flag. Therefore, it is an example of a smart card. This is the most secure type of identification card technology.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Gordon is concerned about the possibility that hackers may be able to use the Van Eck radiation phenomenon to remotely read the contents of computer monitors in a restricted work area within his facility. What technology would protect against this type of attack?",
    "options": [
      "TCSEC",
      "SCSI",
      "GHOST",
      "TEMPEST"
    ],
    "correctAnswer": ["TEMPEST"],
    "explanation": "The TEMPEST program creates technology that is not susceptible to Van Eck phreaking attacks because it reduces or suppresses natural electromagnetic emanations.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jorge believes that an attacker has obtained the hash of the Kerberos service account from one of his organization's Active Directory servers. What type of attack would this enable?",
    "options": [
      "Golden ticket",
      "Kerberoasting",
      "Pass the ticket",
      "Brute force"
    ],
    "correctAnswer": ["Golden ticket"],
    "explanation": "Golden ticket attacks use the hash of the Kerberos service account to create tickets in an Active Directory environment. Kerberoasting attacks rely on collected TGS tickets. Pass the ticket attacks rely on tickets harvested from the LSASS process. Brute-force attacks depend on random guessing without any additional information.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Sherry conducted an inventory of the cryptographic technologies in use within her organization and found the following algorithms and protocols in use. Which one of these technologies should she replace because it is no longer considered secure?",
    "options": [
      "MD5",
      "AES",
      "PGP",
      "WPA3"
    ],
    "correctAnswer": ["MD5"],
    "explanation": "The MD5 hashing algorithm has known collisions and, as of 2005, is no longer considered secure for use in modern environments. The AES, PGP, and WPA3 algorithms are all still considered secure.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Robert is investigating a security breach and discovers the Mimikatz tool installed on a system in his environment. What type of attack has likely taken place?",
    "options": [
      "Password cracking",
      "Pass the hash",
      "MAC spoofing",
      "ARP poisoning"
    ],
    "correctAnswer": ["Pass the hash"],
    "explanation": "The use of the Mimikatz tool is indicative of an attempt to capture user password hashes for use in a pass-the-hash attack against Microsoft Active Directory accounts.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Tom is a cryptanalyst and is working on breaking a cryptographic algorithm's secret key. He has a copy of an intercepted message that is encrypted, and he also has a copy of the decrypted version of that message. He wants to use both the encrypted message and its decrypted plaintext to retrieve the secret key for use in decrypting other messages. What type of attack is Tom engaging in?",
    "options": [
      "Chosen ciphertext",
      "Chosen plaintext",
      "Known plaintext",
      "Brute force"
    ],
    "correctAnswer": ["Known plaintext"],
    "explanation": "In a known plaintext attack, the attacker has a copy of the encrypted message along with the plaintext message used to generate that ciphertext. In a chosen plaintext attack, the attacker has the ability to choose the plaintext to be encrypted. In a chosen ciphertext attack, the attacker can choose the ciphertext output. In a brute-force attack, the attacker simply tries all possible key combinations.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "A hacker recently violated the integrity of data in James's company by modifying a file using a precise timing attack. The attacker waited until James verified the integrity of a file's contents using a hash value and then modified the file between the time that James verified the integrity and read the contents of the file. What type of attack took place?",
    "options": [
      "Social engineering",
      "TOCTOU",
      "Data diddling",
      "Parameter checking"
    ],
    "correctAnswer": ["TOCTOU"],
    "explanation": "In a time of check to time of use (TOCTOU) attack, the attacker exploits the difference in time between when a security control is verified and the data protected by the control is actually used.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Carl is deploying a set of video sensors that will be placed in remote locations as part of a research project. Because of connectivity limitations, he would like to perform as much image processing and computation as possible on the device itself before sending results back to the cloud for further analysis. What computing model would best meet his needs?",
    "options": [
      "Serverless computing",
      "Edge computing",
      "IaaS computing",
      "SaaS computing"
    ],
    "correctAnswer": ["Edge computing"],
    "explanation": "In this case, most cloud service models (including IaaS, SaaS, and serverless/FaaS) would require transmitting most information back to the cloud. The edge computing service model would be far more appropriate, as it places computing power at the sensor, minimizing the data that must be sent back to the cloud over limited connectivity network links.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What action can you take to prevent accidental data disclosure due to wear leveling on an SSD device before reusing the drive?",
    "options": [
      "Reformatting",
      "Disk encryption",
      "Degaussing",
      "Physical destruction"
    ],
    "correctAnswer": ["Disk encryption"],
    "explanation": "Wear leveling is about writing to the disk evenly. Encrypting the data would protect against the disclosure of data on portions of the disk that have remnants due to too much wear and having been set aside as no longer usable. Disk formatting does not effectively remove data from any device. Degaussing is effective only for magnetic media. Physically destroying the drive would not permit reuse.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Johnson Widgets strictly limits access to total sales volume information, classifying it as a competitive secret. However, shipping clerks have unrestricted access to order records to facilitate transaction completion. A shipping clerk recently pulled all of the individual sales records for a quarter from the database and totaled them up to determine the total sales volume. What type of attack occurred?",
    "options": [
      "Social engineering",
      "Inference",
      "Aggregation",
      "Data diddling"
    ],
    "correctAnswer": ["Aggregation"],
    "explanation": "In an aggregation attack, individual(s) use their access to specific pieces of information to piece together a larger picture that they are not authorized to access.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What physical security control broadcasts false emanations constantly to mask the presence of true electromagnetic emanations from computing equipment?",
    "options": [
      "Faraday cage",
      "Copper-infused windows",
      "Shielded cabling",
      "White noise"
    ],
    "correctAnswer": ["White noise"],
    "explanation": "While all of the controls mentioned protect against unwanted electromagnetic emanations, only white noise is an active control. White noise generates false emanations that effectively “jam” the true emanations from electronic equipment.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "In a software-as-a-service cloud computing environment, who is normally responsible for ensuring that appropriate firewall controls are in place to protect the application?",
    "options": [
      "Customer's security team",
      "Vendor",
      "Customer's networking team",
      "Customer's infrastructure management team"
    ],
    "correctAnswer": ["Vendor"],
    "explanation": "In a software-as-a-service environment, the customer has no access to any underlying infrastructure, so firewall management is a vendor responsibility under the cloud computing shared responsibility model.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alice has read permissions on an object, and she would like Bob to have those same rights. Which one of the rules in the Take-Grant protection model would allow her to complete this operation?",
    "options": [
      "Create rule",
      "Remove rule",
      "Grant rule",
      "Take rule"
    ],
    "correctAnswer": ["Grant rule"],
    "explanation": "The grant rule allows a subject to grant rights that it possesses on an object to another subject.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "As part of his incident response process, Charles securely wipes the drive of a compromised machine and reinstalls the operating system (OS) from original media. Once he is done, he patches the machine fully and applies his organization's security templates before reconnecting the system to the network. Almost immediately after the system is returned to service, he discovers that it has reconnected to the same botnet it was part of before. Where should Charles look for the malware that is causing this behavior?",
    "options": [
      "The operating system partition",
      "The system BIOS or firmware",
      "The system memory",
      "The installation media"
    ],
    "correctAnswer": ["The system BIOS or firmware"],
    "explanation": "The system Charles is remediating may have a firmware or BIOS infection, with malware resident on the system board. While uncommon, this type of malware can be difficult to find and remove. Since he used original media, it is unlikely that the malware came from the software vendor. Charles wiped the system partition, and the system would have been rebooted before being rebuilt, thus clearing system memory.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Lauren implements ASLR to help prevent system compromises. What technique has she used to protect her system?",
    "options": [
      "Encryption",
      "Mandatory access control",
      "Memory address randomization",
      "Discretionary access control"
    ],
    "correctAnswer": ["Memory address randomization"],
    "explanation": "Lauren has implemented address space layout randomization, a memory protection methodology that randomizes memory locations, which prevents attackers from using known address spaces and contiguous memory regions to execute code via overflow or stack smashing attacks.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alan intercepts an encrypted message and wants to determine what type of algorithm was used to create the message. He first performs a frequency analysis and notes that the frequency of letters in the message closely matches the distribution of letters in the English language. What type of cipher was most likely used to create this message?",
    "options": [
      "Substitution cipher",
      "AES",
      "Transposition cipher",
      "3DES"
    ],
    "correctAnswer": ["Transposition cipher"],
    "explanation": "This message was most likely encrypted with a transposition cipher. The use of a substitution cipher, a category that includes AES and 3DES, would change the frequency distribution so that it did not mirror that of the English language. This type of attack, where the attacker only has access to an encrypted message, is also known as a ciphertext-only attack.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "In a zero trust network architecture, what component is responsible for making policy decisions based upon rules and external data sources?",
    "options": [
      "Policy engine",
      "Policy administrator",
      "Policy enforcement point",
      "Subject"
    ],
    "correctAnswer": ["Policy engine"],
    "explanation": "In a zero trust network architecture, the policy engine is responsible for making policy decisions based upon rules and external data sources. It uses a trust algorithm to decide whether to grant, deny, or revoke access, considering factors like identity management, threat intelligence, and security information and event management (SIEM) data. The policy administrator, on the other hand, acts based on the decisions made by the policy engine, establishing or removing communication paths and managing session-specific credentials. The policy enforcement point enforces these decisions by controlling access to resources based on instructions from the policy administrator. Lastly, the subject refers to users, services, or systems that request access or attempt to use rights and is not involved in decision-making.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Grace would like to implement application control technology in her organization. Users often need to install new applications for research and testing purposes, and she does not want to interfere with that process. At the same time, she would like to block the use of known malicious software. What type of application control would be appropriate in this situation?",
    "options": [
      "Blacklisting",
      "Graylisting",
      "Whitelisting",
      "Bluelisting"
    ],
    "correctAnswer": ["Blacklisting"],
    "explanation": "The blacklisting approach to application control allows users to install any software they want except for packages specifically identified by the administrator as prohibited. This would be an appropriate approach in a scenario where users should be able to install any nonmalicious software they want to use.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Warren is designing a physical intrusion detection system for use in a sensitive media storage facility and wants to include technology that issues an alert if the communications lines for the alarm system are unexpectedly cut. What technology would meet this requirement?",
    "options": [
      "Heartbeat sensor",
      "Emanation security",
      "Motion detector",
      "Faraday cage"
    ],
    "correctAnswer": ["Heartbeat sensor"],
    "explanation": "Heartbeat sensors send periodic status messages from the alarm system to the monitoring center. The monitoring center triggers an alarm if it does not receive a status message for a prolonged period of time, indicating that communications were disrupted.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": " John and Gary are negotiating a business transaction, and John must demonstrate to Gary that he has access to a system. He engages in an electronic version of the “magic door” scenario shown here. What technique is John using?",
    "options": [
      "Split-knowledge proof",
      "Zero-knowledge proof",
      "Logical proof",
      "Mathematical proof"
    ],
    "correctAnswer": ["Zero-knowledge proof"],
    "explanation": "In a zero-knowledge proof, one individual demonstrates to another that they can achieve a result that requires sensitive information without actually disclosing the sensitive information.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "After scanning all of the systems on his wireless network, Mike notices that one system is identified as an iOS device running a massively out-of-date version of Apple's mobile operating system. When he investigates further, he discovers that the device is an original iPad and that it cannot be updated to a current secure version of the operating system. What would be the best option for handling this device?",
    "options": [
      "Retire or replace the device.",
      "Isolate the device on a dedicated wireless network.",
      "Install a firewall on the tablet.",
      "Reinstall the OS."
    ],
    "correctAnswer": ["Retire or replace the device."],
    "explanation": "When operating system patches are no longer available for mobile devices, the best option is typically to retire or replace the device. Building isolated networks will not stop the device from being used for Browse or other purposes, which means it is likely to continue to be exposed to threats. Installing a firewall will not remediate the security flaws in the OS, although it may help somewhat. Finally, reinstalling the OS will not allow new updates or fix the root issue.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Tonya believes that an attacker was able to eavesdrop on legitimate HTTPS communications between her users and remote web servers by engaging in a DNS poisoning attack. After conducting DNS poisoning, what technique would an attacker likely use to conduct this eavesdropping?",
    "options": [
      "Man-in-the-middle",
      "Brute-force",
      "Timing",
      "Meet-in-the-middle"
    ],
    "correctAnswer": ["Man-in-the-middle"],
    "explanation": "In a man-in-the-middle attack, the attacker tricks the user into establishing a connection with the attacker. The attacker then establishes a connection to the legitimate server and relays communications between the two, eavesdropping on the contents. A meet-in-the-middle attack is an attack against cryptographic algorithms that use multiple rounds of encryption. There is no indication in the scenario that the attacker used an exhaustive brute-force attack or a specialized timing attack to achieve their goals.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Howard is choosing a cryptographic algorithm for his organization, and he would like to choose an algorithm that supports the creation of digital signatures. Which one of the following algorithms would meet his requirement?",
    "options": [
      "RSA",
      "3DES",
      "AES",
      "Blowfish"
    ],
    "correctAnswer": ["RSA"],
    "explanation": "Digital signatures are possible only when using an asymmetric encryption algorithm. Of the algorithms listed, only RSA is asymmetric and supports digital signature capabilities.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Laura is responsible for securing her company's web-based applications and wants to conduct an educational program for developers on common web application security vulnerabilities. Where can she turn for a concise listing of the most common web application issues?",
    "options": [
      "CVE",
      "NSA",
      "OWASP",
      "CSA"
    ],
    "correctAnswer": ["OWASP"],
    "explanation": "The Open Worldwide Application Security Project (OWASP) produces an annual list of the top 10 web application security issues that developers and security professionals around the world rely upon for education and training purposes. The OWASP vulnerabilities form the basis for many web application security testing products.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "The Bell-LaPadula and Biba models implement state machines in a fashion that uses what specific state machine model?",
    "options": [
      "Information flow",
      "Noninterference",
      "Cascading",
      "Feedback"
    ],
    "correctAnswer": ["Information flow"],
    "explanation": "The information flow model applies state machines to the flow of information. The Bell-LaPadula model applies the information flow model to confidentiality, while the Biba model applies it to integrity.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "During a third-party vulnerability scan and security test, Danielle's employer recently discovered that the embedded systems that were installed to manage her company's new buildings have a severe remote access vulnerability. The manufacturer has gone out of business, and there is no patch or update for the devices. What should Danielle recommend that her employer do about the hundreds of devices that are vulnerable?",
    "options": [
      "Identify a replacement device model and replace every device.",
      "Turn off all of the devices.",
      "Move the devices to a secure and isolated network segment.",
      "Reverse engineer the devices and build an in-house patch."
    ],
    "correctAnswer": ["Move the devices to a secure and isolated network segment."],
    "explanation": "The most reasonable choice presented is to move the devices to a secure and isolated network segment. This will allow the devices to continue to serve their intended function while preventing them from being compromised. All of the other scenarios either create major new costs or deprive her organization of the functionality that the devices were purchased to provide.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What type of motion detector senses changes in the electromagnetic fields in monitored areas?",
    "options": [
      "Infrared",
      "Wave pattern",
      "Capacitance",
      "Photoelectric"
    ],
    "correctAnswer": ["Capacitance"],
    "explanation": "Capacitance motion detectors monitor the electromagnetic field in a monitored area, sensing disturbances that correspond to motion.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Mike has been tasked with preventing an outbreak of malware like Mirai, a botnet that targeted IP-based cameras and routers. What type of systems should be protected in his organization?",
    "options": [
      "Servers",
      "SCADA",
      "Mobile devices",
      "Internet of Things (IoT) devices"
    ],
    "correctAnswer": ["Internet of Things (IoT) devices"],
    "explanation": "Mirai targeted “Internet of Things” devices, including routers, cameras, and DVRs. As organizations bring an increasing number of devices like these into their corporate networks, protecting both internal and external targets from insecure, infrequently updated, and often vulnerable IoT devices is increasingly important.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following statements is correct about the Biba model of access control?",
    "options": [
      "It addresses confidentiality and integrity.",
      "It addresses integrity and availability.",
      "It prevents covert channel attacks.",
      "It focuses on protecting objects from integrity threats."
    ],
    "correctAnswer": ["It focuses on protecting objects from integrity threats."],
    "explanation": "The Biba model focuses only on protecting integrity and does not provide protection against confidentiality or availability threats. It also does not provide protection against covert channel attacks. The Biba model focuses on external threats and assumes that internal threats are addressed programmatically.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "In Transport Layer Security, what type of key is used to encrypt the actual content of communications between a web server and a client?",
    "options": [
      "Ephemeral session key",
      "Client's public key",
      "Server's public key",
      "Server's private key"
    ],
    "correctAnswer": ["Ephemeral session key"],
    "explanation": "In TLS, both the server and the client communicate using an ephemeral symmetric session key. They generate this key using the Diffie-Hellman key exchange algorithm and then communicate using it throughout the rest of the session.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Beth would like to include technology in a secure area of her data center to protect against unwanted electromagnetic emanations. What technology would assist her with this goal?",
    "options": [
      "Heartbeat sensor",
      "Faraday cage",
      "Piggybacking",
      "WPA2"
    ],
    "correctAnswer": ["Faraday cage"],
    "explanation": "A Faraday cage is a metal skin that prevents electromagnetic emanations from exiting. It is a rarely used technology because it is unwieldy and expensive, but it is quite effective at blocking unwanted electromagnetic radiation.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "In a virtualized computing environment, what component is responsible for enforcing separation between guest machines?",
    "options": [
      "Guest operating system",
      "Hypervisor",
      "Kernel",
      "Protection manager"
    ],
    "correctAnswer": ["Hypervisor"],
    "explanation": "The hypervisor is responsible for coordinating access to physical hardware and enforcing isolation between different virtual machines running on the same physical platform.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Rick is an application developer who works primarily in Python. He recently decided to evaluate a new service where he provides his Python code to a vendor who then executes it on their server environment. What type of cloud computing environment is this service?",
    "options": [
      "SaaS",
      "PaaS",
      "IaaS",
      "CaaS"
    ],
    "correctAnswer": ["PaaS"],
    "explanation": "Cloud computing systems where the customer only provides application code for execution on a vendor-supplied computing platform are examples of platform-as-a-service (PaaS) computing.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "A component failure in the primary HVAC system leads to a high temperature alarm in the data center that Kim manages. After resolving the issue, what should Kim consider to prevent future issues like this?",
    "options": [
      "A closed loop chiller",
      "Redundant cooling systems",
      "Swamp coolers",
      "Relocating the data center to a colder climate"
    ],
    "correctAnswer": ["Redundant cooling systems"],
    "explanation": "A well-designed data center should have redundant systems and capabilities for each critical part of its infrastructure. That means that power, cooling, and network connectivity should all be redundant. Kim should determine how to ensure that a single system failure cannot take her data center offline.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Tommy is planning to implement a power conditioning UPS for a rack of servers in his data center. Which one of the following conditions will the UPS be unable to protect against if it persists for an extended period of time?",
    "options": [
      "Fault",
      "Blackout",
      "Sag",
      "Noise"
    ],
    "correctAnswer": ["Blackout"],
    "explanation": "UPSs are designed to protect against short-term power losses, such as power faults. When they conduct power conditioning, they are also able to protect against sags and noise. UPSs have limited-life batteries and are not able to maintain continuous operating during a sustained blackout.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following humidity values is within the acceptable range for a data center operation?",
    "options": [
      "0%",
      "10%",
      "15%",
      "40%"
    ],
    "correctAnswer": ["40%"],
    "explanation": "Data center humidity should be maintained between 20% and 80%. Values below this range increase the risk of static electricity, while values above this range may generate moisture that damages equipment.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Kristen's organization suffered a ransomware infection and has lost access to critical business data. She is considering paying the ransom to regain access to her data. Which of the following statements about this payment are correct? (Select all that apply.)",
    "options": [
      "Payment of the ransom may be illegal.",
      "Payment of the ransom may result in further demands for payments.",
      "Payment of the ransom guarantees access to the decryption key.",
      "Payment of the ransom may cause a data breach."
    ],
    "correctAnswer": ["Payment of the ransom may be illegal.", "Payment of the ransom may result in further demands for payments."],
    "explanation": "Payment of a ransom often results in the release of a decryption key, but this is not guaranteed by any means. There is also no link between the payment of a ransom and a future data breach, as an attacker may choose to release confidential information regardless of whether the ransom was paid. Depending upon applicable jurisdictions, payment of a ransom may be illegal under corrupt practices laws or embargoes against terrorist organizations. For example, the U.S. Office of Foreign Assets Control (OFAC) issued an advisory in 2020 stating that ransom payments may violate sanctions. Payment of a ransom may also cause attackers to consider the victim a “mark” and demand future payments in exchange for continued access to their data.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "questionType": "multi-response",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alex's employer creates most of their work output as PDF files. Alex is concerned about limiting the audience for the PDF files to those individuals who have paid for them. What technology can he use to most effectively control the access to and distribution of these files?",
    "options": [
      "EDM",
      "Encryption",
      "Digital signatures",
      "DRM"
    ],
    "correctAnswer": ["DRM"],
    "explanation": "Alex can use digital rights management technology to limit use of the PDFs to paying customers. While DRM is rarely a perfect solution, in this case, it may fit his organization's needs. EDM is electronic dance music, which his customers may appreciate but which won't solve the problem. Encryption and digital signatures can help to keep the files secure and to prove who they came from but won't solve the rights management issue Alex is tackling.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "As part of his team's forensic investigation process, Matt signs out drives and other evidence from an evidence storage facility before working with them. What type of documentation is he creating?",
    "options": [
      "Criminal",
      "Chain of custody",
      "Civil",
      "CYA"
    ],
    "correctAnswer": ["Chain of custody"],
    "explanation": "Matt is helping to maintain the chain of custody documentation for his electronic evidence. This can be important if his organization needs to prove that the digital evidence they handled has not been tampered with. A better process would involve more than one person to ensure that no tampering was possible.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Todd believes that a digital certificate used by his organization has been compromised, and he wants to add it to the certificate revocation list (CRL). What element of the certificate goes on the CRL?",
    "options": [
      "Serial number",
      "Public key",
      "Digital signature",
      "Private key"
    ],
    "correctAnswer": ["Serial number"],
    "explanation": "The certificate revocation list contains the serial numbers of digital certificates issued by a certificate authority that have later been revoked.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alison is examining a digital certificate presented to her by her bank's website. Which one of the following requirements is not necessary for her to trust the digital certificate?",
    "options": [
      "She knows that the server belongs to the bank.",
      "She trusts the certificate authority.",
      "She verifies that the certificate is not listed on a CRL.",
      "She verifies the digital signature on the certificate."
    ],
    "correctAnswer": ["She knows that the server belongs to the bank."],
    "explanation": "The point of the digital certificate is to prove to Alison that the server belongs to the bank, so she does not need to have this trust in advance. To trust the certificate, she must verify the CA's digital signature on the certificate, trust the CA, verify that the certificate is not listed on a CRL, and verify that the certificate contains the name of the bank.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following is an example of a covert timing channel when used to exfiltrate information from an organization?",
    "options": [
      "Sending an electronic mail message",
      "Posting a file on a peer-to-peer file sharing service",
      "Typing with the rhythm of Morse code",
      "Writing data to a shared memory space"
    ],
    "correctAnswer": ["Typing with the rhythm of Morse code"],
    "explanation": "Covert channels use surreptitious communications' paths. Covert timing channels alter the use of a resource in a measurable fashion to exfiltrate information. If a user types using a specific rhythm of Morse code, this is an example of a covert timing channel. Someone watching or listening to the keystrokes could receive a secret message with no trace of the message left in logs.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following would be a reasonable application for the use of self-signed digital certificates?",
    "options": [
      "Digital commerce website",
      "Banking application",
      "Internal scheduling application",
      "Customer portal"
    ],
    "correctAnswer": ["Internal scheduling application"],
    "explanation": "Self-signed digital certificates should be used only for internal-facing applications, where the user base trusts the internally generated digital certificate.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ron is investigating a security incident that took place at a highly secure government facility. He believes that encryption keys were stolen during the attack and finds evidence that the attackers used dry ice to freeze an encryption component. What type of attack was likely attempted?",
    "options": [
      "Side channel attack",
      "Brute-force attack",
      "Timing attack",
      "Fault injection attack"
    ],
    "correctAnswer": ["Fault injection attack"],
    "explanation": "In a fault injection attack, the attacker attempts to compromise the integrity of a cryptographic device by causing some type of external fault. For example, they might use high-voltage electricity, high or low temperature, or other factors to cause a malfunction that undermines the security of the device. Side-channel attacks seek to use information about system activity and retrieve information that is actively being encrypted. Brute-force attacks attempt every possible valid combination for a key or password. In a timing attack, the attacker measures precisely how long cryptographic operations take to complete, gaining information about the cryptographic process that may be used to undermine its security.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Match the security model **Clark-Wilson** to its description.",
    "options": [
      "This model blocks lower-classified objects from accessing higher-classified objects, thus ensuring confidentiality.",
      "The * property of this model can be summarized as “no write-up.”",
      "This model uses security labels to grant access to objects via transformation procedures and a restricted interface model."
    ],
    "correctAnswer": ["This model uses security labels to grant access to objects via transformation procedures and a restricted interface model."],
    "explanation": "The Clark-Wilson model uses security labels to grant access to objects via transformation procedures and a restricted interface model.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Match the security model **Bell-LaPadula** to its description.",
    "options": [
      "This model blocks lower-classified objects from accessing higher-classified objects, thus ensuring confidentiality.",
      "The * property of this model can be summarized as “no write-up.”",
      "This model uses security labels to grant access to objects via transformation procedures and a restricted interface model."
    ],
    "correctAnswer": ["This model blocks lower-classified objects from accessing higher-classified objects, thus ensuring confidentiality."],
    "explanation": "The Bell-LaPadula model blocks lower-classified objects from accessing higher-classified objects, thus ensuring confidentiality.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Match the security model **Biba** to its description.",
    "options": [
      "This model blocks lower-classified objects from accessing higher-classified objects, thus ensuring confidentiality.",
      "The * property of this model can be summarized as “no write-up.”",
      "This model uses security labels to grant access to objects via transformation procedures and a restricted interface model."
    ],
    "correctAnswer": ["The * property of this model can be summarized as “no write-up.”"],
    "explanation": "The * property of the Biba model can be summarized as “no write-up.”",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Match the concept **Time of check** to its description.",
    "options": [
      "A method used to pass information over a path not normally used for communication",
      "The exploitation of the reliance of a system's behavior on the sequence of events that occur externally",
      "The time at which the subject checks whether an object is available",
      "The time at which a subject can access an object",
      "An access method known only to the developer of the system",
      "A method that can help prevent buffer overflow attacks"
    ],
    "correctAnswer": ["The time at which the subject checks whether an object is available"],
    "explanation": "Time of check is the time at which the subject checks whether an object is available.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Match the concept **Covert channel** to its description.",
    "options": [
      "A method used to pass information over a path not normally used for communication",
      "The exploitation of the reliance of a system's behavior on the sequence of events that occur externally",
      "The time at which the subject checks whether an object is available",
      "The time at which a subject can access an object",
      "An access method known only to the developer of the system",
      "A method that can help prevent buffer overflow attacks"
    ],
    "correctAnswer": ["A method used to pass information over a path not normally used for communication"],
    "explanation": "A covert channel is a method used to pass information over a path not normally used for communication.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Match the concept **Time of use** to its description.",
    "options": [
      "A method used to pass information over a path not normally used for communication",
      "The exploitation of the reliance of a system's behavior on the sequence of events that occur externally",
      "The time at which the subject checks whether an object is available",
      "The time at which a subject can access an object",
      "An access method known only to the developer of the system",
      "A method that can help prevent buffer overflow attacks"
    ],
    "correctAnswer": ["The time at which a subject can access an object"],
    "explanation": "Time of use is the time at which a subject can access an object.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Match the concept **Maintenance hooks** to its description.",
    "options": [
      "A method used to pass information over a path not normally used for communication",
      "The exploitation of the reliance of a system's behavior on the sequence of events that occur externally",
      "The time at which the subject checks whether an object is available",
      "The time at which a subject can access an object",
      "An access method known only to the developer of the system",
      "A method that can help prevent buffer overflow attacks"
    ],
    "correctAnswer": ["An access method known only to the developer of the system"],
    "explanation": "Maintenance hooks are an access method known only to the developer of the system.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Match the concept **Parameter checking** to its description.",
    "options": [
      "A method used to pass information over a path not normally used for communication",
      "The exploitation of the reliance of a system's behavior on the sequence of events that occur externally",
      "The time at which the subject checks whether an object is available",
      "The time at which a subject can access an object",
      "An access method known only to the developer of the system",
      "A method that can help prevent buffer overflow attacks"
    ],
    "correctAnswer": ["A method that can help prevent buffer overflow attacks"],
    "explanation": "Parameter checking is a method that can help prevent buffer overflow attacks.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Match the concept **Race condition** to its description.",
    "options": [
      "A method used to pass information over a path not normally used for communication",
      "The exploitation of the reliance of a system's behavior on the sequence of events that occur externally",
      "The time at which the subject checks whether an object is available",
      "The time at which a subject can access an object",
      "An access method known only to the developer of the system",
      "A method that can help prevent buffer overflow attacks"
    ],
    "correctAnswer": ["The exploitation of the reliance of a system's behavior on the sequence of events that occur externally"],
    "explanation": "A race condition is the exploitation of the reliance of a system's behavior on the sequence of events that occur externally.",
    "domain": "Security Architecture and Engineering",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  }
]