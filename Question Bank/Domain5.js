[
  {
    "text": "Henry uses his organizationally provided credentials to log into his workstation and is then able to use services across the organization and in the cloud. What identity solution has his organization implemented?",
    "options": [
      "An access control list",
      "Single sign-on",
      "Multifactor authentication",
      "Role-based access control"
    ],
    "correctAnswer": ["Single sign-on"],
    "explanation": "Single sign-on provides a single authentication process to allow authorization to multiple services. An access control list, or ACL, is a ruleset used to determine if a subject can gain access to a service or system. Multifactor requires multiple factors, and the specifics of how Henry logged in were not discussed in the question. Finally, role-based access control uses a subject's role(s) to determine if they can access a service or system, and no mention of roles was made.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jim's organization-wide implementation of IDaaS offers broad support for cloud-based applications. Jim's company does not have internal identity management staff and does not use centralized identity services. Instead, they rely upon Active Directory for AAA services. Which of the following options should Jim recommend to best handle the company's on-site identity needs?",
    "options": [
      "Integrate on-site systems using OAuth.",
      "Use an on-premises third-party identity service.",
      "Integrate on-site systems using SAML.",
      "Design an internal solution to handle the organization's unique needs."
    ],
    "correctAnswer": ["Use an on-premises third-party identity service."],
    "explanation": "Since Jim's organization is using a cloud-based identity as a service solution, a third-party, on-premises identity service can provide the ability to integrate with the IDaaS solution, and the company's use of Active Directory is widely supported by third-party vendors. OAuth is used to log in to third-party websites using existing credentials and would not meet the needs described. SAML is a markup language and would not meet the full set of AAA needs. Since the organization is using Active Directory, a custom in-house solution is unlikely to be as effective as a preexisting third-party solution and may take far more time and expense to implement.",
    "domain": "Identity and Access Management",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What role does a policy enforcement point play in a zero trust environment?",
    "options": [
      "It makes decisions for the policy engine.",
      "It is the workstation or mobile device used by the end user.",
      "It deploys role-based access controls based on local policy.",
      "It receives authorization requests and sends them to the policy decision point."
    ],
    "correctAnswer": ["It receives authorization requests and sends them to the policy decision point."],
    "explanation": "A policy enforcement point in a zero trust environment receives authorization requests and then sends them to the policy decision point. They are used anywhere that authorization controls are needed. They do not make decisions for the policy engine, can exist beyond workstations and mobile devices, and use policies set at the zero trust control layer rather than just at the endpoint device.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Voice pattern recognition is what type of authentication factor?",
    "options": [
      "Something you know",
      "Something you have",
      "Something you are",
      "Somewhere you are"
    ],
    "correctAnswer": ["Something you are"],
    "explanation": "Voice pattern recognition is “something you are,” a biometric authentication factor, because it measures a physical characteristic of the individual authenticating.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "If Susan's organization requires her to log in with her username, a PIN, a password, and a retina scan, how many distinct authentication factor types has she used?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": ["Two"],
    "explanation": "Susan has used two distinct types of factors: the PIN and password are both Type 1 factors, and the retina scan is a Type 3 factor. Her username is not a factor.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Charles wants to deploy a credential management system (CMS). He wants to keep the keys as secure as possible. Which of the following is the best design option for his CMS implementation?",
    "options": [
      "Use AES-256 instead of 3DES.",
      "Use long keys.",
      "Use an HSM.",
      "Change passphrases regularly."
    ],
    "correctAnswer": ["Use an HSM."],
    "explanation": "Hardware Security Modules, or HSMs, are the most secure way to store keys associated with a CMS. They provide enhanced key management capabilities and are often required to be FIPS certified. In addition to these advantages, an HSM can improve cryptographic performance for the organization due to dedicated hardware designed for just that purpose. Long keys and using AES-256 are good practices, but an HSM provides greater security and will require appropriate cryptographic controls already. Changing passphrases can be challenging across an organization; instead, securing the passphrases and keys is more important and reasonable for most organizations.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Brian is a researcher at a major university. As part of his research, he logs into a computing cluster hosted at another institution using his own university's credentials. Once logged in, he is able to access the cluster and use resources based on his role in a research project, as well as using resources and services in his home organization. What has Brian's home university implemented to make this happen?",
    "options": [
      "Domain stacking",
      "Federated identity management",
      "Domain nesting",
      "Hybrid login"
    ],
    "correctAnswer": ["Federated identity management"],
    "explanation": "Brian's organization is using a federated identity management approach where multiple organizations allow identities to be used across the organizations. Each organization needs to conduct identity proofing of their own staff members' identities and provide them with rights and role information that will allow them to use resources within the federated identity environment.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "When Sally attempts to authenticate to her organization's services, she knows that the organization uses a mobile device management tool to check her location and whether she's logging in from her company-issued mobile device. What type of authentication is this?",
    "options": [
      "Context-aware",
      "Knowledge-based",
      "Identity factoring",
      "Zero trust"
    ],
    "correctAnswer": ["Context-aware"],
    "explanation": "Authentication that takes attributes such as location, device, and time of day into account is context-aware authentication. This allows organizations to make choices about whether the authentication is appropriate and allowed in addition to the use of credentials. The decision is based on contextual information, not user knowledge or identity factors, which are used only to authenticate. Zero trust may leverage context information, but context-aware authentication alone does not indicate zero trust.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What major issue often results from decentralized access control?",
    "options": [
      "Access outages may occur.",
      "Control is not consistent.",
      "Control is too granular.",
      "Training costs are high."
    ],
    "correctAnswer": ["Control is not consistent."],
    "explanation": "Decentralized access control can result in less consistency because the individuals tasked with control may interpret policies and requirements differently and may perform their roles in different ways. Access outages, overly granular control, and training costs may occur, depending on specific implementations, but they are not commonly identified issues with decentralized access control.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Callback to a landline phone number is an example of what type of factor?",
    "options": [
      "Something you know",
      "Somewhere you are",
      "Something you have",
      "Something you are"
    ],
    "correctAnswer": ["Somewhere you are"],
    "explanation": "A callback to a landline phone number is an example of a “somewhere you are” factor because of the fixed physical location of a wired phone. A callback to a mobile phone would be a “something you have” factor.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What common behavior drives the NIST recommendation that passwords should not expire?",
    "options": [
      "Attackers would not have enough time to compromise passwords if they expired.",
      "Users often make minimal changes to passwords to handle change requirements.",
      "Password expiration leads to too little support overhead.",
      "Re-hashing passwords when changes are required is computationally intensive."
    ],
    "correctAnswer": ["Users often make minimal changes to passwords to handle change requirements."],
    "explanation": "The NIST recommendation to not expire passwords recognizes that users often make minimal changes to their passwords when they are required to change them. In addition, password changes drive significant support overhead as users forget their passwords or otherwise face challenges with them. Longer password lives do create the potential for attackers to have longer to compromise them, but modern password recommendations look for multifactor authentication, which means a compromised password is less of a threat. Hashing new passwords does require computation, but not a significant amount using modern hardware.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What three functions make up the AAA model?",
    "options": [
      "Access control, authentication, and authorization",
      "Access, administration, and authorization",
      "Authentication, authorization, and accounting",
      "Accounting, auditing, and assessment"
    ],
    "correctAnswer": ["Authentication, authorization, and accounting"],
    "explanation": "AAA refers to a set of security protocols that are used to identify and authorize users and record their activities. The acronym stands for authentication, authorization, and accounting.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What directory-based technology underlies Microsoft Active Directory single sign-on?",
    "options": [
      "LDAP",
      "zero trust",
      "Shibboleth",
      "RADIUS"
    ],
    "correctAnswer": ["LDAP"],
    "explanation": "Active Directory relies on the Lightweight Directory Access Protocol (LDAP) as part of its single sign-on (SSO) implementation. Zero trust is not a SSO implementation, and Shibboleth is an open-source identity management system. RADIUS is not a single sign-on implementation, although some vendors use it behind the scenes to provide authentication for proprietary SSO.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Sameer's organization needs to perform identity proofing for new customers. What type of authentication is best suited to identity proofing in this scenario?",
    "options": [
      "Cognitive passwords",
      "Knowledge-based authentication",
      "Palm scans",
      "USB tokens"
    ],
    "correctAnswer": ["Knowledge-based authentication"],
    "explanation": "Knowledge-based authentication relies on information that only the individual who wants to prove their identity is likely to know. This might include a mortgage payment amount, vehicle information, or driver's license number among many options. Cognitive passwords, or security questions, are created by users, which means they aren't suited to this type of identity proofing. Palm scans and USB tokens both require prior engagement with the user as well and thus aren't suited for identity proofing with users who are new customers.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What type of access controls allow the owner of a file to grant other users access to it using an access control list?",
    "options": [
      "Role-based",
      "Nondiscretionary",
      "Rule-based",
      "Discretionary"
    ],
    "correctAnswer": ["Discretionary"],
    "explanation": "When the owner of a file makes the decisions about who has rights or access privileges to it, they are using discretionary access control. Role-based access controls would grant access based on a subject's role, while rule-based controls would base the decision on a set of rules or requirements. Nondiscretionary access controls apply a fixed set of rules to an environment to manage access. Nondiscretionary access controls include rule-, role-, and lattice-based access controls.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alex's job requires him to see protected health information (PHI) to ensure proper treatment of patients. His access to their medical records does not provide access to patient addresses or billing information. What access control concept best describes this control?",
    "options": [
      "Separation of duties",
      "Constrained interfaces",
      "Context-dependent control",
      "Need to know"
    ],
    "correctAnswer": ["Need to know"],
    "explanation": "Need to know is applied when subjects like Alex have access to only the data they need to accomplish their job. Separation of duties is used to limit fraud and abuse by having multiple employees perform parts of a task. Constrained interfaces restrict what a user can see or do and would be a reasonable answer if need to know did not describe his access more completely in this scenario. Context-dependent control relies on the activity being performed to apply controls, and this question does not specify a workflow or process.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ifeoma wants to ensure that users in her organization cannot change their password to a previously used password. What setting should she configure?",
    "options": [
      "Password length",
      "Maximum password age",
      "An MFA requirement",
      "Password history"
    ],
    "correctAnswer": ["Password history"],
    "explanation": "Password history tracks what passwords have been set previously and will not allow reuse. A specific number of past passwords is typically set, and passwords themselves should not be retained. Instead, properly secured hashes are retained and compared to hashes of the new passwords. Length, maximum age, and MFA do not solve the issue of password reuse.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "With a password history set, Ifeoma wants to prevent users from resetting their password multiple times to allow them to return to their original password. What setting should she apply?",
    "options": [
      "A password complexity requirement",
      "A maximum password age",
      "A minimum password age",
      "A password length requirement"
    ],
    "correctAnswer": ["A minimum password age"],
    "explanation": "Ifeoma knows that a minimum password age of one day will discourage users from resetting their passwords to attempt to return to their original password. Length and complexity do not prevent this if the original password met these requirements, and a maximum age is set in organizations that require password changes on a recurring basis.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "With her organization's password behavior under control, Ifeoma wants to ensure that a lost password will not result in easy compromise of her company's accounts. Which of the following controls provides the best protection against password loss or exposure-related compromise?",
    "options": [
      "MFA",
      "SSO",
      "Federation",
      "Password rotation"
    ],
    "correctAnswer": ["MFA"],
    "explanation": "Requiring multifactor authentication (MFA) is a common security measure used to prevent unauthorized access to an account in case of password loss or exposure. SSO allows the use of an account throughout systems or services. Federation connects different organizations together, allowing the use of credentials between trusted partners, and password rotation can help, but lost passwords remain dangerous until the rotation happens allowing days, weeks, or even months of potential vulnerable time.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jacob is planning his organization's biometric authentication system and is considering retina scans. What concern may be raised about retina scans by others in his organization?",
    "options": [
      "Retina scans can reveal information about medical conditions.",
      "Retina scans are painful because they require a puff of air in the user's eye.",
      "Retina scanners are the most expensive type of biometric device.",
      "Retina scanners have a high false positive rate and will cause support issues."
    ],
    "correctAnswer": ["Retina scans can reveal information about medical conditions."],
    "explanation": "Retina scans can reveal additional information, including high blood pressure and pregnancy, causing privacy concerns. Newer retina scans don't require a puff of air, and retina scanners are not the most expensive biometric factor. Their false positive rate can typically be adjusted in software, allowing administrators to adjust their acceptance rate as needed to balance usability and security.",
    "domain": "Identity and Access Management",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Mandatory access control is based on what type of model?",
    "options": [
      "Discretionary",
      "Group-based",
      "Lattice-based",
      "Rule-based"
    ],
    "correctAnswer": ["Lattice-based"],
    "explanation": "Mandatory access control systems are based on a lattice-based model. Lattice-based models use a matrix of classification labels to compartmentalize data. Discretionary access models allow object owners to determine access to the objects they control, role-based access controls are often group-based, and rule-based access controls like firewall ACLs apply rules to all subjects they apply to.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Greg wants to control access to iPads used throughout his organization as point-of-sale terminals. Which of the following methods should he use to allow logical access control for the devices in a shared environment?",
    "options": [
      "Use a shared PIN for all point-of-sale terminals to make them easier to use.",
      "Use OAuth to allow cloud logins for each user.",
      "Issue a unique PIN to each user for the iPad they are issued.",
      "Use Active Directory and user accounts for logins to the iPads using the AD user ID and password."
    ],
    "correctAnswer": ["Use Active Directory and user accounts for logins to the iPads using the AD user ID and password."],
    "explanation": "Using an enterprise authentication system like Active Directory that requires individuals to log in with their credentials provides the ability to determine who was logged in if a problem occurs and also allows Greg to quickly and easily remove users who are terminated or switch roles. Using a shared PIN provides no accountability, while unique PINs per user on specifically issued iPads mean that others will not be able to log in. OAuth alone does not provide the services and features Greg needs—it is an authorization service, not an authentication service.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What is the best way to provide accountability for the use of identities?",
    "options": [
      "Logging",
      "Authorization",
      "Digital signatures",
      "Type 1 authentication"
    ],
    "correctAnswer": ["Logging"],
    "explanation": "Logging systems can provide accountability for identity systems by tracking the actions, changes, and other activities a user or account performs. Authorization does not provide accountability because it validates that a person can perform an action, not who is using the identity. Digital signatures can be used to validate an identity, not to provide accountability by proving who is using it, and Type 1 authentication is something you know. Again, logging is the best way to provide accountability for the use of an identity.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jim has worked in human relations, payroll, and customer service roles in his company over the past few years. What type of process should his company perform to ensure that he has appropriate rights?",
    "options": [
      "Re-provisioning",
      "Account review",
      "Privilege creep",
      "Account revocation"
    ],
    "correctAnswer": ["Account review"],
    "explanation": "As an employee's role changes, they often experience privilege creep, which is the accumulation of old rights and roles. Account review is the process of reviewing accounts and ensuring that their rights match their owners' role and job requirements. Account revocation removes accounts, while re-provisioning might occur if an employee was terminated and returned or took a leave of absence and returned.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Biba is what type of access control model?",
    "options": [
      "MAC",
      "DAC",
      "Role BAC",
      "ABAC"
    ],
    "correctAnswer": ["MAC"],
    "explanation": "Biba uses a lattice to control access and is a form of the mandatory access control (MAC) model. It does not use rules, roles, or attributes, nor does it allow user discretion. Users can create content at their level or lower but cannot decide who gets access, levels are not roles, and attributes are not used to make decisions on access control.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which of the following is a client-server protocol designed to allow network access servers to authenticate remote users by sending access request messages to a central server?",
    "options": [
      "Kerberos",
      "EAP",
      "RADIUS",
      "OAuth"
    ],
    "correctAnswer": ["RADIUS"],
    "explanation": "RADIUS is an AAA protocol used to provide authentication and authorization; it's often used for modems, wireless networks, and network devices. It uses network access servers to send access requests to central RADIUS servers. Kerberos is a ticket-based authentication protocol; OAuth is an open standard for authentication allowing the use of credentials from one site on third-party sites; and EAP is the Extensible Authentication Protocol, an authentication framework often used for wireless networks.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Henry is working with a web application development team on their authentication and authorization process for his company's new application. The team wants to make session IDs as secure as possible. Which of the following is not a best practice that Henry should recommend?",
    "options": [
      "The session ID token should be predictable.",
      "The session ID should have at least 64 bits of entropy.",
      "The session length should be at least 128 bits.",
      "The session ID should be meaningless."
    ],
    "correctAnswer": ["The session ID token should be predictable."],
    "explanation": "Session identifiers should not be predictable to ensure that attackers can't simply guess or easily brute force session IDS. Web application development best practices currently recommend the use of long session IDs (128 bits or longer) that have sufficient entropy (randomness) to ensure that they will not be easily duplicated or brute-forced. It is also a best practice to make sure the session ID itself is meaningless to prevent information disclosure attacks. Session IDs should expire, however, because a session that never expires could eventually be brute-forced even if all of these recommendations were met.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Angela uses her smartphone's built-in biometric authentication and an application provided by her employer to log into her account. What type of authentication has she used?",
    "options": [
      "Extended",
      "Passwordless",
      "Alternative",
      "SPOT"
    ],
    "correctAnswer": ["Passwordless"],
    "explanation": "Passwordless authentication leverages applications and capabilities such as built-in biometric authentication mechanisms. Extended and alternative authentication are not terms used on the exam. The Fast Identity Online Alliance (FIDO) is an open industry association that provides frameworks for passwordless authentication, but SPOT is not a type of passwordless authentication.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What type of access control best describes NAC's posture assessment capability?",
    "options": [
      "A mandatory access control",
      "A risk-based access control",
      "A discretionary access control",
      "A role-based access control"
    ],
    "correctAnswer": ["A risk-based access control"],
    "explanation": "The posturing capability of network access control (NAC) determines if a system is sufficiently secure and compliant enough to connect to a network. This is a form of risk-based access control, as systems that are not compliant are considered higher risk and either are placed in a quarantine and remediation network or zone or are prohibited from connecting to the network until they are compliant.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "When an application or system allows a logged-in user to perform specific actions, it is an example of what?",
    "options": [
      "Roles",
      "Group management",
      "Logins",
      "Authorization"
    ],
    "correctAnswer": ["Authorization"],
    "explanation": "Authorization provides a user with capabilities or rights. Roles and group management are both methods that could be used to match users with rights. Logins are used to validate a user.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alex has been employed by his company for more than a decade and has held a number of positions in the company. During an audit, it is discovered that he has access to shared folders and applications because of his former roles. What issue has Alex's company encountered?",
    "options": [
      "Excessive provisioning",
      "Unauthorized access",
      "Privilege creep",
      "Account review"
    ],
    "correctAnswer": ["Privilege creep"],
    "explanation": "Privilege creep occurs when users retain rights they do not need to accomplish their current job from roles they held previously. Unauthorized access occurs when an unauthorized user accesses files. Excessive provisioning is not a term used to describe permissions issues, and account review would help find issues like this.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Geoff wants to prevent privilege escalation attacks in his organization. Which of the following practices is most likely to prevent horizontal privilege escalation?",
    "options": [
      "Multifactor authentication",
      "Limiting permissions for groups and accounts",
      "Disabling unused ports and services",
      "Sanitizing user inputs to applications"
    ],
    "correctAnswer": ["Multifactor authentication"],
    "explanation": "Multifactor authentication is most likely to limit horizontal privilege escalation by making it difficult to access user accounts and to authenticate to a compromised account. Limiting permissions for groups and accounts can also help, but disabling unused ports and services and sanitizing user inputs both address threats that are most frequently associated with vertical privilege escalation attacks.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jim's Microsoft Exchange environment includes servers that are located in local data centers at multiple business offices around the world as well as an Office 365 deployment for employees who are not located at one of those offices. Identities are created and used in both environments and will work in both. What type of federated system is Jim running?",
    "options": [
      "A primary cloud system",
      "A primary on-premises system",
      "A hybrid system",
      "A multitenant system"
    ],
    "correctAnswer": ["A hybrid system"],
    "explanation": "Hybrid systems use both on-premises and cloud identity and services to provide resources and tools in both environments. While they can be complex, hybrid systems also provide a migration path to a full cloud deployment or for a fault-tolerant design that can handle on-premises or cloud outages while remaining functional.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a lattice-based access control table] What type of access control scheme is shown in the following table?",
    "options": [
      "RBAC",
      "DAC",
      "MAC",
      "TBAC"
    ],
    "correctAnswer": ["MAC"],
    "explanation": "Mandatory access controls (MAC) use a lattice or matrix to describe how classification labels relate to each other. In this image, classification levels are set for each of the labels shown. A discretionary access control (DAC) system would show how the owner of the objects allows access. RBAC could be either rule- or role-based access control and would use either system-wide rules or roles. Task-based access control (TBAC) would list tasks for users.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Michelle's company is creating a new division by splitting the marketing and communications departments into two separate groups. She wants to create roles that provide access to resources used by each group. What should she do to maintain the appropriate security and rights for each group?",
    "options": [
      "Put both the marketing and communications teams into the existing group because they will have similar access requirements.",
      "Keep the marketing team in the existing group and create a new communications group based on their specific needs.",
      "Keep the communications' team in the existing group and create a new marketing group based on their specific needs.",
      "Create two new groups, assess which rights they need to perform their roles, and then add additional rights if required."
    ],
    "correctAnswer": ["Create two new groups, assess which rights they need to perform their roles, and then add additional rights if required."],
    "explanation": "Copying existing rights to new groups that have different needs will often result in overly broad privileges. Michelle should create new groups, move all staff into the appropriate groups, and then ensure that they have the access and permissions they need.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "When a subject claims an identity, what process is occurring?",
    "options": [
      "Login",
      "Identification",
      "Authorization",
      "Token presentation"
    ],
    "correctAnswer": ["Identification"],
    "explanation": "The process of a subject claiming or professing an identity is known as identification. Authorization verifies the identity of a subject by checking a factor like a password. Logins typically include both identification and authorization, and token presentation is a type of authentication.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which of the following is a common account setting for a service account?",
    "options": [
      "Disable password expiration.",
      "Set maximum password age to 90 days.",
      "Set minimum password age to 1 day.",
      "Disable complexity requirements."
    ],
    "correctAnswer": ["Disable password expiration."],
    "explanation": "Service accounts are commonly set to not have expiring passwords to prevent service outages. Organizations may choose to rotate passwords on a regular basis using automation tools as part of their password management strategy to help avoid issues with exposed or compromised service passwords. Disabling complexity requirements and setting a minimum password age are not commonly done for service accounts.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Susan's organization is updating its password policy and wants to use the strongest possible passwords. What password requirement will have the highest impact in preventing brute-force attacks?",
    "options": [
      "Change the maximum age from 1 year to 180 days.",
      "Increase the minimum password length from 8 characters to 16 characters.",
      "Increase the password complexity so that at least three character classes (such as uppercase, lowercase, numbers, and symbols) are required.",
      "Retain a password history of at least four passwords to prevent reuse."
    ],
    "correctAnswer": ["Increase the minimum password length from 8 characters to 16 characters."],
    "explanation": "Password complexity is driven by length, and a longer password will be more effective against brute-force attacks than a shorter password. Each character of additional length increases the difficulty by the size of the potential character set (for example, a single lowercase character makes the passwords 26 times more difficult to crack). While each of the other settings is useful for a strong password policy, they won't have the same impact on brute-force attacks.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alaina is performing a regularly scheduled review for service accounts. Which of the following events should she be most concerned about?",
    "options": [
      "An interactive login for the service account",
      "A password change for the service account",
      "Limitations placed on the service account's rights",
      "Local use of the service account"
    ],
    "correctAnswer": ["An interactive login for the service account"],
    "explanation": "Interactive login for a service account is a critical warning sign, either of compromise or bad administrative practices. In either case, Alaina should immediately work to determine why the account logged in, what occurred, and if the interactive login was done remotely or locally. A remote interactive login for a service account in any professionally maintained environment is an almost guaranteed sign of compromise. Password changes for service accounts may be done as part of ongoing password expiration processes, limitations should always be placed on service accounts rights to ensure that they are only those required, and a local use of the service account as part of the service is a normal event.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "When might an organization using biometrics choose to allow a higher FRR instead of a higher FAR?",
    "options": [
      "When security is more important than usability",
      "When false rejection is not a concern due to data quality",
      "When the CER of the system is not known",
      "When the CER of the system is very high"
    ],
    "correctAnswer": ["When security is more important than usability"],
    "explanation": "Organizations that have very strict security requirements that don't have a tolerance for false acceptance want to lower the false acceptance rate, or FAR, to be as near to zero as possible. That often means that the false rejection rate, or FRR, increases. Different biometric technologies or a better registration method can help improve biometric performance, but false rejections due to data quality are not typically a concern with modern biometric systems. In this case, knowing the crossover error rate, or CER, or having a very high CER doesn't help the decision.",
    "domain": "Identity and Access Management",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "After recent reports of undesired access to workstations after hours, Derek has been asked to find a way to ensure that maintenance staff cannot log into workstations in business offices. The maintenance staff members do have systems in their break rooms and their offices for the organization, which they still need access to. What should Derek do to meet this need?",
    "options": [
      "Require multifactor authentication and allow only office staff to have multifactor tokens.",
      "Use rule-based access control to prevent logins after hours in the business area.",
      "Use role-based access control by setting up a group that contains all maintenance staff and then give that group rights to log into only the designated workstations.",
      "Use geofencing to only allow logins in maintenance areas."
    ],
    "correctAnswer": ["Use role-based access control by setting up a group that contains all maintenance staff and then give that group rights to log into only the designated workstations."],
    "explanation": "The most efficient use of Derek's time would be to create a group that is populated with all maintenance staff and then to give that group login rights only to the designated PCs. While time-based constraints might help, in this case, it would continue to allow maintenance staff to log in to PCs that are not intended for use during business hours, leaving a gap in the control. Multifactor authentication, as described, does not meet the requirements of the scenario but may be a good idea overall for greater security for authentication across the organization. Geofencing is typically not accurate enough to rely on inside buildings for specific PCs.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Nick wants to do session management for his web application. Which of the following are common web application session management techniques or methods? (Select all that apply.)",
    "options": [
      "IP tracking",
      "Cookies",
      "URL rewriting",
      "TLS tokens"
    ],
    "correctAnswer": ["Cookies", "URL rewriting"],
    "explanation": "Common session management techniques include the use of cookies, hidden form fields, URL rewriting, and built-in frameworks like Java's HTTPS session. IP tracking may be included in session information but is not itself a complete session identifier, and TLS token binding is used to make TLS sessions more secure, not to provide session identification.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null,
    "questionType": "multi-response"
  },
  {
    "text": "[Image of a SAML integration workflow diagram] Alex is in charge of SAML integration with a major third-party partner. Alex is concerned about eavesdropping on the SAML traffic and also wants to ensure that forged assertions will not be successful. What should he do to prevent these potential attacks?",
    "options": [
      "Use SAML's secure mode to provide secure authentication.",
      "Implement TLS using a strong cipher suite, which will protect against both types of attacks.",
      "Implement TLS using a strong cipher suite and use digital signatures.",
      "Implement TLS using a strong cipher suite and message hashing."
    ],
    "correctAnswer": ["Implement TLS using a strong cipher suite and use digital signatures."],
    "explanation": "TLS provides message confidentiality and integrity, which can prevent eavesdropping. When paired with digital signatures, which provide integrity and authentication, forged assertions can also be defeated. SAML does not have a security mode and relies on TLS and digital signatures to ensure security if needed. Message hashing without a signature would help prevent modification of the message but won't necessarily provide authentication.",
    "domain": "Identity and Access Management",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a SAML integration workflow diagram] If Alex's organization is one that is primarily made up of off-site, traveling users, what availability risk does integration of critical business applications to on-site authentication create, and how could he solve it?",
    "options": [
      "Third-party integration may not be trustworthy; use SSL and digital signatures.",
      "If the home organization is offline, traveling users won't be able to access third-party applications; implement a hybrid cloud/local authentication system.",
      "Local users may not be properly redirected to the third-party services; implement a local gateway.",
      "Browsers may not properly redirect; use host files to ensure that issues with redirects are resolved."
    ],
    "correctAnswer": ["If the home organization is offline, traveling users won't be able to access third-party applications; implement a hybrid cloud/local authentication system."],
    "explanation": "Integration with cloud-based third parties that rely on local authentication can fail if the local organization's Internet connectivity or servers are offline. Adopting a hybrid cloud and local authentication system can ensure that Internet or server outages are handled, allowing authentication to work regardless of where the user is or if their home organization is online. Using encrypted and signed communication does not address availability, redirects are a configuration issue with the third party, and a local gateway won't handle remote users. Also, host files don't help with availability issues with services other than DNS.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a SAML integration workflow diagram] What solution can best help address concerns about third parties that control SSO redirects as shown in step 2 in the diagram?",
    "options": [
      "An awareness campaign about trusted third parties",
      "TLS",
      "Handling redirects at the local site",
      "Implementing an IPS to capture SSO redirect attacks"
    ],
    "correctAnswer": ["An awareness campaign about trusted third parties"],
    "explanation": "While many solutions are technical, if a trusted third party redirects to an unexpected authentication site, awareness is often the best defense. Using TLS would keep the transaction confidential but would not prevent the redirect. Handling redirects locally works only for locally hosted sites, and using a third-party service requires off-site redirects. An IPS might detect an attacker's redirect, but tracking the multitude of load-balanced servers most large providers use can be challenging, if not impossible. In addition, an IPS relies on visibility into the traffic, and SAML integrations should be encrypted for security, which would require a man-in-the-middle type of IPS to be configured.",
    "domain": "Identity and Access Management",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Susan has been asked to recommend whether her organization should use a MAC scheme or a DAC scheme. If flexibility and scalability are important requirements for implementing access controls, which scheme should she recommend and why?",
    "options": [
      "MAC, because it provides greater scalability and flexibility because you can simply add more labels as needed",
      "DAC, because allowing individual administrators to make choices about the objects they control provides scalability and flexibility",
      "MAC, because compartmentalization is well suited to flexibility and adding compartments will allow it to scale well",
      "DAC, because a central decision process allows quick responses and will provide scalability by reducing the number of decisions required and flexibility by moving those decisions to a central authority"
    ],
    "correctAnswer": ["DAC, because allowing individual administrators to make choices about the objects they control provides scalability and flexibility"],
    "explanation": "Discretionary access control (DAC) can provide greater scalability by leveraging many administrators, and those administrators can add flexibility by making decisions about access to their objects without fitting into an inflexible mandatory access control system (MAC). MAC is more secure due to the strong set of controls it provides, but it does not scale as well as DAC and is relatively inflexible in comparison.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which of the following tools is not typically used to verify that a provisioning process was followed in a way that ensures that the organization's security policy is being followed?",
    "options": [
      "Log review",
      "Manual review of permissions",
      "Signature-based detection",
      "Review the audit trail"
    ],
    "correctAnswer": ["Signature-based detection"],
    "explanation": "While signature-based detection is used to detect attacks, review of provisioning processes typically involves checking logs, reviewing the audit trail, or performing a manual review of permissions granted during the provisioning process.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jessica wants to adopt an open standard to provide authentication, authorization, and attribute information as part of her cloud identity federation efforts. What standard should she adopt to leverage the flexibility of XML as part of her efforts?",
    "options": [
      "SAML",
      "SOAP",
      "OAuth",
      "OpenID Connect"
    ],
    "correctAnswer": ["SAML"],
    "explanation": "SAML is an open, XML-based standard used to provide authorization, attribute information, and authentication data. SOAP, or Simple Object Access Protocol, is a messaging protocol and could be used for any XML messaging but is not a markup language itself. OAuth is an authorization framework that exchanges information using APIs, and OpenID Connect is an authentication layer using OAuth that provides both authentication and authorization, but not attribute information.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "During a penetration test, Chris recovers a file containing hashed passwords for the system he is attempting to access. What type of attack is most likely to succeed against the hashed passwords?",
    "options": [
      "A brute-force attack",
      "A pass-the-hash attack",
      "A rainbow table attack",
      "A salt recovery attack"
    ],
    "correctAnswer": ["A rainbow table attack"],
    "explanation": "Rainbow tables are databases of pre-hashed passwords paired with high-speed lookup functions. Since they can quickly compare known hashes against those in a file, using rainbow tables is the fastest way to quickly determine passwords from hashes. A brute-force attack may eventually succeed but will be very slow against most hashes. Pass-the-hash attacks rely on sniffed or otherwise acquired NTLM or LanMan hashes being sent to a system to avoid the need to know a user's password. Salts are data added to a hash to avoid the use of tools like rainbow tables. A salt added to a password means the hash won't match a rainbow table generated without the same salt.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Google's identity integration with a variety of organizations and applications across domains is an example of which of the following?",
    "options": [
      "PKI",
      "Federation",
      "Single sign-on",
      "Provisioning"
    ],
    "correctAnswer": ["Federation"],
    "explanation": "Google's federation with other applications and organizations allows single sign-on as well as management of their electronic identity and its related attributes. While this is an example of SSO, it goes beyond simple single sign-on. Provisioning provides accounts and rights, and a public key infrastructure is used for certificate management.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Amanda starts at her new job and finds that she has access to a variety of systems that she does not need to accomplish her job. What problem has she encountered?",
    "options": [
      "Privilege creep",
      "Rights collision",
      "Least privilege",
      "Excessive privileges"
    ],
    "correctAnswer": ["Excessive privileges"],
    "explanation": "When users have more rights than they need to accomplish their job, they have excessive privileges. This is a violation of the concept of least privilege. Unlike privilege creep, this is a provisioning or rights management issue rather than a problem of retention of rights the user needed but no longer requires. Rights collision is a made-up term and thus is not an issue here.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "When Chris verifies an individual's identity and adds a unique identifier like a user ID to an identity system, what process has occurred?",
    "options": [
      "Identity proofing",
      "Registration",
      "Directory management",
      "Session management"
    ],
    "correctAnswer": ["Registration"],
    "explanation": "Registration is the process of adding a user to an identity management system. This includes creating their unique identifier and adding any attribute information that is associated with their identity. Proofing occurs when the user provides information to prove who they are. Directories are managed to maintain lists of users, services, and other items. Session management tracks application and user sessions.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Selah wants to provide accountability for actions performed via her organization's main line-of-business application. What controls are most frequently used to provide accountability in a situation like this? (Select all that apply.)",
    "options": [
      "Enable audit logging.",
      "Provide every staff member with a unique account and enable multifactor authentication.",
      "Enable time- and location-based login requirements.",
      "Provide every staff member with a unique account and require a self-selected password."
    ],
    "correctAnswer": ["Enable audit logging.", "Provide every staff member with a unique account and enable multifactor authentication."],
    "explanation": "Audit logging when combined with user accounts that can reliably be expected to be accessible only to a specific user due to the use of multifactor authentication is frequently used to provide strong accountability for actions taken via systems and applications. A password can be shared, making it less reliable, and time and location requirements are useful security controls but do not impact accountability.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null,
    "questionType": "multi-response"
  },
  {
    "text": "Charles wants to provide authorization services as part of his web application. What standard should he use if he wants to integrate easily with other web identity providers?",
    "options": [
      "OpenID",
      "TACACS+",
      "RADIUS",
      "OAuth"
    ],
    "correctAnswer": ["OAuth"],
    "explanation": "OAuth is the most widely used open standard for authorization and delegation of rights for cloud services. OpenID is used for authentication, and TACACS+ and RADIUS are primarily used on-site for authentication and authorization for network devices.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "The company that Cameron works for uses a system that allows users to request privileged access to systems when necessary. Cameron requests access, and the request is pre-approved due to his role. He is then able to access the system to perform the task. Once he is done, the rights are removed. What type of system is he using?",
    "options": [
      "Zero trust",
      "Federated identity management",
      "Single sign-on",
      "Just-in-time access"
    ],
    "correctAnswer": ["Just-in-time access"],
    "explanation": "Cameron is using a just-in-time (JIT) system that provides the access needed when it is needed. A zero trust system requires authentication and authorization when actions are performed but does not necessarily require privileges to be granted and removed when they are needed.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Elle is responsible for building a banking website. She needs proof of the identity of the users who register for the site. How should she validate user identities?",
    "options": [
      "Require users to create unique questions that only they will know.",
      "Require new users to bring their driver's license or passport in person to the bank.",
      "Use information that both the bank and the user have such as questions pulled from their credit report.",
      "Call the user on their registered phone number to verify that they are who they claim to be."
    ],
    "correctAnswer": ["Use information that both the bank and the user have such as questions pulled from their credit report."],
    "explanation": "Identity proofing can be done by comparing user information that the organization already has, like account numbers or personal information. Requiring users to create unique questions can help with future support by providing a way for them to do password resets. Using a phone call only verifies that the individual who created the account has the phone that they registered and won't prove their identity. In-person verification would not fit the business needs of most websites.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Susan's organization is part of a federation that allows users from multiple organizations to access resources and services at other federated sites. When Susan wants to use a service at a partner site, which identity provider is used?",
    "options": [
      "Susan's home organization's identity provider.",
      "The service provider's identity provider.",
      "Both their identity provider and the service provider's identity provider.",
      "The service provider creates a new identity."
    ],
    "correctAnswer": ["Susan's home organization's identity provider."],
    "explanation": "In federated systems, a user's access to services is authenticated through their own organization's identity provider (IDP). Service providers query those IDPs when the user attempts to authenticate to the service and, if the request is validated, allow access based on the rules and policies set for the service based on attributes that may be relevant that are provided by the IDP.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "A new customer at a bank that uses fingerprint scanners to authenticate its users is surprised when he scans his fingerprint and is logged into another customer's account. What type of biometric factor error occurred?",
    "options": [
      "A registration error",
      "A Type 1 error",
      "A Type 2 error",
      "A time of use, method of use error"
    ],
    "correctAnswer": ["A Type 2 error"],
    "explanation": "Type 2 errors occur in biometric systems when an invalid subject is incorrectly authenticated as a valid user. In this case, nobody except the actual customer should be validated when fingerprints are scanned. Type 1 errors occur when a valid subject is not authenticated; if the existing customer is rejected, it is a Type 1 error. Registration is the process of adding users, but registration errors and time of use, method of use errors are not specific biometric authentication terms.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What type of access control is typically used by firewalls?",
    "options": [
      "Discretionary access controls",
      "Rule-based access controls",
      "Task-based access control",
      "Mandatory access controls"
    ],
    "correctAnswer": ["Rule-based access controls"],
    "explanation": "Firewalls use rule-based access control, or Rule-BAC, in their access control lists and apply rules created by administrators to all traffic that passes through them. DAC, or discretionary access control, allows owners to determine who can access objects they control, while task-based access control lists tasks for users. MAC, or mandatory access control, uses classifications to determine access.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "When you input a user ID and password, you are performing what important identity and access management activity?",
    "options": [
      "Authorization",
      "Validation",
      "Authentication",
      "Login"
    ],
    "correctAnswer": ["Authentication"],
    "explanation": "When you input a username and password, you are authenticating yourself by providing a unique identifier and a verification that you are the person who should have that identifier (the password). Authorization is the process of determining what a user is allowed to do. Validation and login both describe elements of what is happening in the process; however, they aren't the most important identity and access management activity.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Kathleen works for a data center hosting facility. Until recently, each client was given a magnetic-strip-based keycard to access their server section. In the past month, a number of servers have been stolen, but the logs for the passcards show only valid IDs. What is Kathleen's best option to make sure that the users of the passcards are who they are supposed to be?",
    "options": [
      "Add a reader that requires a PIN for passcard users.",
      "Add a camera system to the facility to observe who is accessing servers.",
      "Add a biometric factor.",
      "Replace the magnetic stripe keycards with smartcards."
    ],
    "correctAnswer": ["Add a biometric factor."],
    "explanation": "Kathleen should implement a biometric factor. The cards and keys are an example of a Type 2 factor, or “something you have.” Using a smart card replaces this with another Type 2 factor, but the cards could still be loaned out or stolen. Adding a PIN would address the problem by adding a second authentication factor, but PINs may be written down and are prone to theft or even guessing for shorter PINs, so a biometric factor is preferable if it is available. Adding cameras doesn't prevent access to the facility and thus doesn't solve the immediate problem (but it is a good idea!).",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Theresa wants to allow her staff to securely store and manage passwords for systems including service accounts and other rarely used administrative credentials. What type of tool should she implement to enable this?",
    "options": [
      "Single sign-on",
      "A federated identity system",
      "A password vault",
      "A multifactor authentication system"
    ],
    "correctAnswer": ["A password vault"],
    "explanation": "Enterprise credential management tools, often called password vaults, allow passwords to be securely generated, stored, and managed. They can provide logs of who uses passwords, when they were updated, and if they meet complexity and other requirements. Of course, this means the keys to your environment are all in one place, so securing and managing the enterprise password manager is very important!",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Olivia wants to limit the commands that a user can run via sudo to limit the potential for privilege escalation attacks. What Linux file should she modify to allow this?",
    "options": [
      "The bash .bin configuration file",
      "The sudoers file",
      "The bash .allowed configuration file",
      "The sudont file"
    ],
    "correctAnswer": ["The sudoers file"],
    "explanation": "The sudoers file can list the specific users who can use sudo as well as the commands or directories that are allowed for them.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which objects and subjects have a label in a MAC model?",
    "options": [
      "Objects and subjects that are classified as Confidential, Secret, or Top Secret have a label.",
      "All objects have a label, and all subjects have a compartment.",
      "All objects and subjects have a label.",
      "All subjects have a label and all objects have a compartment."
    ],
    "correctAnswer": ["All objects and subjects have a label."],
    "explanation": "In a mandatory access control system, all subjects and objects have a label. Compartments may or may not be used, but there is not a specific requirement for either subjects or objects to be compartmentalized. The specific labels of Confidential, Secret, and Top Secret are not required by MAC.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of an OAuth 2.0 workflow diagram between a client, an e-commerce application, and Google servers] In an OAuth 2.0 integration, when the e-commerce application creates an account for a Google user, where should that user's password be stored?",
    "options": [
      "The password is stored in the e-commerce application's database.",
      "The password is stored in memory on the e-commerce application's server.",
      "The password is stored in Google's account management system.",
      "The password is never stored; instead, a salted hash is stored in Google's account management system."
    ],
    "correctAnswer": ["The password is stored in Google's account management system."],
    "explanation": "Passwords are never stored for web applications in a well-designed environment. Instead, salted hashes are stored and compared to passwords after they are salted and hashed. If the hashes match, the user is authenticated.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of an OAuth 2.0 workflow diagram] Which of the following is responsible for user authentication for Google users in this OAuth 2.0 integration scenario?",
    "options": [
      "The e-commerce application.",
      "Both the e-commerce application and Google servers.",
      "Google servers.",
      "The diagram does not provide enough information to determine this."
    ],
    "correctAnswer": ["Google servers."],
    "explanation": "When a third-party site integrates via OAuth 2.0, authentication is handled by the service provider's servers. In this case, Google is acting as the service provider for user authentication. Authentication for local users who create their own accounts would occur in the e-commerce application (or a related server), but that is not the question that is asked here.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of an OAuth 2.0 workflow diagram] What type of attack is the creation and exchange of state tokens intended to prevent?",
    "options": [
      "XSS",
      "CSRF",
      "SQL injection",
      "XACML"
    ],
    "correctAnswer": ["CSRF"],
    "explanation": "The anti-forgery state token exchanged during OAuth sessions is intended to prevent cross-site request forgery (CSRF). This makes sure that the unique session token with the authentication response from Google's OAuth service is available to verify that the user, not an attacker, is making a request. XSS attacks focus on scripting and would have script tags involved, SQL injection would have SQL code included, and XACML is the eXtensible Access Control Markup Language, not a type of attack.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Questions like “What is your pet's name?” are examples of what type of identity proofing?",
    "options": [
      "Knowledge-based authentication",
      "Dynamic knowledge-based authentication",
      "Out-of-band identity proofing",
      "A Type 3 authentication factor"
    ],
    "correctAnswer": ["Knowledge-based authentication"],
    "explanation": "Knowledge-based authentication relies on preset questions such as “What is your pet's name?” and the answers. It can be susceptible to attacks because of the availability of the answers on social media or other sites. Dynamic knowledge-based authentication relies on facts or data that the user already knows that can be used to create questions they can answer on an as-needed basis (for example, a previous address or a school they attended). Out-of-band identity proofing relies on an alternate channel like a phone call or text message. Finally, Type 3 authentication factors are biometric, or “something you are,” rather than knowledge-based.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Madhuri creates a table that includes assigned privileges, objects, and subjects to manage access control for the systems she is responsible for. Each time a subject attempts to access an object, the systems check the table to ensure that the subject has the appropriate rights to the object. What type of access control system is Madhuri using?",
    "options": [
      "A capability table",
      "An access control list",
      "An access control matrix",
      "A subject/object rights management system"
    ],
    "correctAnswer": ["An access control matrix"],
    "explanation": "An access control matrix is a table that lists objects, subjects, and their privileges. Access control lists focus on objects and which subjects can access them. Capability tables list subjects and what objects they can access. Subject/object rights management systems are not based on an access control model.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "During a review of support tickets, Ben's organization discovered that password changes accounted for more than a quarter of its help desk's cases. Which of the following options would be most likely to decrease that number significantly?",
    "options": [
      "Two-factor authentication",
      "Biometric authentication",
      "Self-service password reset",
      "Passphrases"
    ],
    "correctAnswer": ["Self-service password reset"],
    "explanation": "Self-service password reset tools typically have a significant impact on the number of password reset contacts that a help desk has. Two-factor and biometric authentication both add complexity and may actually increase the number of contacts. Passphrases can be easier to remember than traditional complex passwords and may decrease calls, but they don't have the same impact that a self-service system does.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Brian's large organization has used RADIUS for AAA services for its network devices for years and has recently become aware of security issues with the unencrypted information transferred during authentication. How should Brian implement encryption for RADIUS?",
    "options": [
      "Use the built-in encryption in RADIUS.",
      "Implement RADIUS over its native UDP using TLS for protection.",
      "Implement RADIUS over TCP using TLS for protection.",
      "Use an AES256 pre-shared cipher between devices."
    ],
    "correctAnswer": ["Implement RADIUS over TCP using TLS for protection."],
    "explanation": "RADIUS supports TLS over TCP. RADIUS does not have a supported TLS mode over UDP. AES pre-shared symmetric ciphers are not a supported solution and would be difficult to both implement and maintain in a large environment, and the built-in encryption in RADIUS only protects passwords.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jim wants to allow cloud-based applications to act on his behalf to access information from other sites. Which of the following tools can allow that?",
    "options": [
      "Kerberos",
      "OAuth",
      "OpenID",
      "LDAP"
    ],
    "correctAnswer": ["OAuth"],
    "explanation": "OAuth provides the ability to access resources from another service and would meet Jim's needs. OpenID would allow him to use an account from another service with his application, and Kerberos and LDAP are used more frequently for in-house services.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ben's organization has had an issue with unauthorized access to applications and workstations during the lunch hour when employees aren't at their desk. What are the best types of session management solutions for Ben to recommend to help prevent this type of access?",
    "options": [
      "Use session IDs for all access and verify system IP addresses of all workstations.",
      "Set session timeouts for applications and use password-protected screensavers with inactivity timeouts on workstations.",
      "Use session IDs for all applications, and use password-protected screensavers with inactivity timeouts on workstations.",
      "Set session timeouts for applications and verify system IP addresses of all workstations."
    ],
    "correctAnswer": ["Set session timeouts for applications and use password-protected screensavers with inactivity timeouts on workstations."],
    "explanation": "Since physical access to the workstations is part of the problem, setting application timeouts and password-protected screensavers with relatively short inactivity timeouts can help prevent unauthorized access. Using session IDs for all applications and verifying system IP addresses would be helpful for online attacks against applications.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a hybrid federation diagram showing a client authenticating to an on-premises data center, which has a trust relationship with a cloud service provider] What type of authentication scenario is shown in the following diagram?",
    "options": [
      "Hybrid federation",
      "On-premise federation",
      "Cloud federation",
      "Kerberos federation"
    ],
    "correctAnswer": ["Hybrid federation"],
    "explanation": "This diagram shows an example of hybrid federation where authentication occurs on-premises and services are provided through a federated identity service in the cloud.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Chris wants to control access to his facility while still identifying individuals. He also wants to ensure that the individuals are the people who are being admitted without significant ongoing costs. Which solutions from the following options would meet all of these requirements? (Select all that apply.)",
    "options": [
      "Security guards and photo identification badges",
      "RFID badges and readers with PIN pads",
      "Magstripe badges and readers with PIN pads",
      "Security guards and magstripe readers"
    ],
    "correctAnswer": ["RFID badges and readers with PIN pads", "Magstripe badges and readers with PIN pads"],
    "explanation": "The best answers in the scenario that Chris faces are either RFID or magstripe readers and PIN pads. Guards create ongoing expenses, and any solution without a PIN will allow a stolen or cloned badge to be used without validating that the person accessing the building is a legitimate user. While a guard can prevent a stolen badge and PIN combination, this is only used in environments where the cost is justifiable.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null,
    "questionType": "multi-response"
  },
  {
    "text": "A device like Yubikey or Titan Security Key is what type of Type 2 authentication factor?",
    "options": [
      "A token",
      "A biometric identifier",
      "A smart card",
      "A PIV"
    ],
    "correctAnswer": ["A token"],
    "explanation": "Yubikeys, Titan Security Keys, and similar devices are examples of tokens. PIV stands for personal identity verification and is a full multifactor authentication solution, not a device. Biometric identifiers are something you are, and a smart card is a card with an embedded chip.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What authentication technology can be paired with OAuth to perform identity verification and obtain user profile information using a RESTful API?",
    "options": [
      "SAML",
      "Shibboleth",
      "OpenID Connect",
      "Higgins"
    ],
    "correctAnswer": ["OpenID Connect"],
    "explanation": "OpenID Connect is a RESTful, JSON-based authentication protocol that, when paired with OAuth, can provide identity verification and basic profile information. SAML is the Security Assertion Markup Language, Shibboleth is a federated identity solution designed to allow web-based SSO, and Higgins is an open-source project designed to provide users with control over the release of their identity information.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jim wants to implement an access control scheme that will ensure that users cannot delegate access. He also wants to enforce access control at the operating system level. What access control mechanism best fits these requirements?",
    "options": [
      "Role-based access control",
      "Discretionary access control",
      "Mandatory access control",
      "Attribute-based access control"
    ],
    "correctAnswer": ["Mandatory access control"],
    "explanation": "In a mandatory access control system, the operating system enforces access control, and users cannot delegate rights. Discretionary access control allows users to delegate rights, and neither attribute nor role-based access control specifically meets these requirements.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jesse wants to access a resource protected by a zero trust solution. What component of the system will he connect through to conduct a transaction?",
    "options": [
      "The constrained interface",
      "The policy engine",
      "The policy decision point",
      "A policy enforcement point"
    ],
    "correctAnswer": ["A policy enforcement point"],
    "explanation": "In a zero trust reference model-based design, subjects connect through a policy enforcement point. The policy engine makes policy decisions based on rules that are then acted on by the policy administrator, granting or denying access to enterprise resources. Constrained interfaces limit user actions but are not the component connected through to conduct transactions.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ben uses a software-based token that changes its code every minute. What type of token is he using?",
    "options": [
      "Asynchronous",
      "Smart card",
      "Synchronous",
      "Static"
    ],
    "correctAnswer": ["Synchronous"],
    "explanation": "Synchronous soft tokens, such as Google Authenticator, use a time-based algorithm that generates a constantly changing series of codes. Asynchronous tokens typically require a challenge to be entered on the token to allow it to calculate a response, which the server compares to the response it expects. Smartcards typically present a certificate but may have other token capabilities built-in. Static tokens are physical devices that can contain credentials and include smart cards and memory cards.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which of the following is not a commonly used single sign-on solution for internal networks?",
    "options": [
      "Kerberos",
      "SENTRY",
      "RADIUS",
      "TACACS+"
    ],
    "correctAnswer": ["SENTRY"],
    "explanation": "Kerberos, RADIUS, and TACACS+ are all commonly used for internal networks. SENTRY was made up for this question.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Michelle works for a financial services company and wants to register customers for her web application. What type of authentication mechanism could she use for the initial login if she wants to quickly and automatically verify that the person is who they claim to be without having a previous relationship with them?",
    "options": [
      "Request their Social Security number.",
      "Use knowledge-based authentication.",
      "Perform manual identity verification.",
      "Use a biometric factor."
    ],
    "correctAnswer": ["Use knowledge-based authentication."],
    "explanation": "Knowledge-based authentication is used by some financial institutions to validate the identity of new users. It uses information from tax and financial records that is unlikely to be available to others, allowing new users to provide details like their last credit card payment, mortgage payment, or other information to validate their identity. A Social Security number is somewhat trivial to acquire via paid services or other means, and manually validating identities is neither quick nor automatic. A biometric factor would require a previous enrollment, making this unsuitable for new customers.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Megan's company wants to use Google accounts to allow users to quickly adopt their web application. What common cloud federation technologies will Megan need to implement? (Select all that apply.)",
    "options": [
      "Kerberos",
      "OpenID",
      "OAuth",
      "RADIUS"
    ],
    "correctAnswer": ["OpenID", "OAuth"],
    "explanation": "Google accounts, like many cloud identity providers, rely on OpenID and OAuth. Kerberos is used for on-premises environments, and RADIUS is frequently used for authentication and authorization for network devices and services like VPN.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null,
    "questionType": "multi-response"
  },
  {
    "text": "Session ID length and session ID entropy are both important to prevent what type of attack?",
    "options": [
      "Denial of service",
      "Cookie theft",
      "Session guessing",
      "Man-in-the-middle attacks"
    ],
    "correctAnswer": ["Session guessing"],
    "explanation": "Best practices for session management involve a long session ID (often 128 bits or longer) and enough randomness or entropy to make it hard to guess session IDs. This makes brute-force or algorithmic guessing attacks unlikely unless there is a flaw in the implementation. These do not prevent denial-of-service or man-in-the-middle attacks, and cookie attacks are focused on acquiring and reading or reusing cookies in most scenarios.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Naomi's organization employs an access control system that evaluates the security readiness of a device before granting network access. The system checks whether the device is fully patched, if the latest antimalware scans are clean, and if the firewall is active. If there are potential issues that may indicate a compromise, she is not permitted to connect and must contact support. What type of access control scheme best describes this type of process?",
    "options": [
      "MAC",
      "Rule-based access control",
      "Role-based access control",
      "Risk-based access control"
    ],
    "correctAnswer": ["Risk-based access control"],
    "explanation": "Risk-based access control models risk using information that is available when the access request is created. Information about the request and the risk it may create is calculated based on risk values and compared to access policies. If the risk value is acceptable, access is granted. One of the most common examples of this in organizations is NAC, or network access control, where a system is profiled to determine security risk and compliance before admission to a network. This can be seen as a more specific example of rule-based access control. Role-based access control bases its decisions on the roles of the individuals, whereas mandatory access control is enforced by the operating system.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Isabelle wants to prevent privilege escalation attacks via her organization's service accounts. Which of the following security practices is best suited to this?",
    "options": [
      "Remove unnecessary rights.",
      "Disable interactive login for service accounts.",
      "Limit when accounts can log in.",
      "Use meaningless or randomized names for service accounts."
    ],
    "correctAnswer": ["Remove unnecessary rights."],
    "explanation": "The most important step in securing service accounts is to ensure that they have only the rights that are absolutely needed to accomplish the task they are designed for. Disabling interactive logins is important as well and would be the next best answer. Limiting when accounts can log in and using randomized or meaningless account names can both be helpful in some circumstances but are far less important.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of the NIST zero trust architecture diagram with the policy decision point highlighted] In the NIST zero trust model, what component includes the Policy Engine and the Policy Administrator as shown here?",
    "options": [
      "The control plane module",
      "The policy decision point",
      "The enterprise management console",
      "The zero trust engine"
    ],
    "correctAnswer": ["The policy decision point"],
    "explanation": "The NIST zero trust reference design includes both the Policy Engine and the Policy Administrator as part of the policy decision point. The terms control plane module, enterprise management console, and zero trust engine are not used in this context.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jim's organization has joined a federation and has begun to allow users from other organizations in the federation to use their services. What services will the members of other organizations be able to use?",
    "options": [
      "All of the services provided by Jim's company",
      "Only the services their own organization provides",
      "Services that Jim's company grants access to on a per-user or per-organization basis",
      "Only services that they pay for that Jim's company provides"
    ],
    "correctAnswer": ["Services that Jim's company grants access to on a per-user or per-organization basis"],
    "explanation": "Federation does not necessarily guarantee that services will be shared or made accessible. Member organizations can choose which services they provide and can use more granular controls like role- or organization-based permissions to grant access to services. Payment may be part of a federation agreement or service access, but simply federating does not create or prevent a financial requirement.",
    "domain": "Identity and Access Management",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Kristen wants to control access to an application in her organization based on a combination of staff member's job titles, the permissions each group of titles need for the application, and the time of day and location. What type of control scheme should she select?",
    "options": [
      "ABAC",
      "DAC",
      "MAC",
      "Role BAC"
    ],
    "correctAnswer": ["ABAC"],
    "explanation": "Attributes used for ABAC often fall into one of four categories: subject attributes such as department or title; action attributes such as the ability to view, edit, or delete; object attributes that describe the object that can be impacted; and contextual attributes such as location, time, or elements. Discretionary access control would place these decisions in the hands of trusted subjects, MAC would enforce it at the operating system level, and role BAC would use only roles instead of the full set of criteria Kristen wants to apply.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image showing Linux command line output from 'chmod 731 alex.txt' and 'ls -la'] When Alex sets the permissions shown here as one of many users on a Linux server, what type of access control model is he leveraging?",
    "options": [
      "Role-based access control",
      "Rule-based access control",
      "Mandatory access control (MAC)",
      "Discretionary access control (DAC)"
    ],
    "correctAnswer": ["Discretionary access control (DAC)"],
    "explanation": "The Linux filesystem allows the owners of objects to determine the access rights that subjects have to them. This means that it is a discretionary access control. If the system enforced a role-based access control, Alex wouldn't set the controls; they would be set based on the roles assigned to each subject. A rule-based access control system would apply rules throughout the system, and a mandatory access control system uses classification labels.",
    "domain": "Identity and Access Management",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  }
 ]