[
  {
    "text": "During a port scan, Susan discovers a system running services on TCP and UDP 137–139 and TCP 445, as well as TCP 1433. What type of system is she likely to find if she connects to the machine?",
    "options": [
      "A Linux email server",
      "A Windows SQL server",
      "A Linux file server",
      "A Windows workstation"
    ],
    "correctAnswer": ["A Windows SQL server"],
    "explanation": "TCP and UDP ports 137–139 are used for NetBIOS services, whereas 445 is used for Active Directory. TCP 1433 is the default port for Microsoft SQL, indicating that this is probably a Windows server providing SQL services.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which of the following is a method used to automatically design new software tests and to ensure the quality of tests?",
    "options": [
      "Code auditing",
      "Static code analysis",
      "Regression testing",
      "Mutation testing"
    ],
    "correctAnswer": ["Mutation testing"],
    "explanation": "Mutation testing modifies a program in small ways and then tests that mutant to determine if it behaves as it should or if it fails. This technique is used to design and test software tests through mutation. Static code analysis and regression testing are both means of testing code, whereas code auditing is an analysis of source code rather than a means of designing and testing software tests.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "During a port scan, Naomi found TCP port 443 open on a system. Which tool is best suited to scanning the service that is most likely running on that port?",
    "options": [
      "zzuf",
      "Nikto",
      "Metasploit",
      "Sqlmap"
    ],
    "correctAnswer": ["Nikto"],
    "explanation": "TCP port 443 normally indicates an HTTPS server. Nikto is useful for vulnerability scanning web servers and applications and is the best choice listed for a web server. Metasploit includes some scanning functionality but is not a purpose-built tool for vulnerability scanning. zzuf is a fuzzing tool and isn't relevant for vulnerability scans, whereas sqlmap is a SQL injection testing tool.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What message logging standard is commonly used by network devices, Linux and Unix systems, and many other enterprise devices?",
    "options": [
      "Syslog",
      "Netlog",
      "Eventlog",
      "Remote Log Protocol (RLP)"
    ],
    "correctAnswer": ["Syslog"],
    "explanation": "Syslog is a widely used protocol for event and message logging. Eventlog, netlog, and Remote Log Protocol are all made-up terms.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alex wants to use an automated tool to fill web application forms to test for format string vulnerabilities. What type of tool should he use?",
    "options": [
      "A black box",
      "A brute-force tool",
      "A fuzzer",
      "A static analysis tool"
    ],
    "correctAnswer": ["A fuzzer"],
    "explanation": "Fuzzers are tools designed to provide invalid or unexpected input to applications, testing for vulnerabilities like format string vulnerabilities, buffer overflow issues, and other problems. A static analysis relies on examining code without running the application or code and thus would not fill forms as part of a web application. Brute-force tools attempt to bypass security by trying every possible combination for passwords or other values. A black box is a type of penetration test where the testers do not know anything about the environment.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Susan needs to scan a system for vulnerabilities, and she wants to use an open-source tool to test the system remotely. Which of the following tools will meet her requirements and allow vulnerability scanning?",
    "options": [
      "Nmap",
      "OpenVAS",
      "MBSA",
      "Nessus"
    ],
    "correctAnswer": ["OpenVAS"],
    "explanation": "OpenVAS is an open-source vulnerability scanning tool that will provide Susan with a report of the vulnerabilities that it can identify from a remote, network-based scan. Nmap is an open-source port scanner. Both the Microsoft Baseline Security Analyzer (MBSA) and Nessus are closed-source tools, although Nessus was originally open source.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Morgan is implementing a vulnerability management system that uses standards-based components to score and evaluate the vulnerabilities it finds. Which of the following is most commonly used to provide a severity score for vulnerabilities?",
    "options": [
      "CCE",
      "CVSS",
      "CPE",
      "OVAL"
    ],
    "correctAnswer": ["CVSS"],
    "explanation": "CVSS, the Common Vulnerability Scoring System, is used to describe the severity of security vulnerabilities. CCE is Common Configuration Enumeration, a naming system for configuration issues. CPE is Common Platform Enumeration, which names operating systems, applications, and devices. OVAL is a language for describing security testing procedures.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jim has been contracted to perform a penetration test of a bank's primary branch. To make the test as real as possible, he has not been given any information about the bank other than its name and address. What type of penetration test has Jim agreed to perform?",
    "options": [
      "A crystal-box penetration test",
      "A gray-box penetration test",
      "A black-box penetration test",
      "A white-box penetration test"
    ],
    "correctAnswer": ["A black-box penetration test"],
    "explanation": "Jim has agreed to a black-box penetration test, which provides no information about the organization, its systems, or its defenses. A crystal- or white-box penetration test provides all of the information an attacker needs, whereas a gray-box penetration test provides some, but not all, information.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "In a response to a request for proposal, Susan receives an SSAE 18 SOC report. If she wants a report that includes details on operating effectiveness, what should Susan ask for as follow-up, and why?",
    "options": [
      "A SOC 2 Type II report, because Type I does not cover operating effectiveness",
      "A SOC 1 Type I report, because SOC 2 does not cover operating effectiveness",
      "A SOC 2 Type I report, because SOC 2 Type II does not cover operating effectiveness",
      "A SOC 3 report, because SOC 1 and SOC 2 reports are outdated"
    ],
    "correctAnswer": ["A SOC 2 Type II report, because Type I does not cover operating effectiveness"],
    "explanation": "The key to answering this question correctly is understanding the difference between SOC 1 and SOC 2 reports, and Type I and Type II audits. SOC 1 reports cover financial reporting, and SOC 2 reports look at security. Type I audits cover only a single point in time and are based on management descriptions of controls. They do not include an assessment of operating effectiveness. Type II audits cover a period of time and include an assessment of operating effectiveness.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "During a wireless network penetration test, Susan runs aircrack-ng against the network intending to capture a password as part of the four-way handshake and then crack the password offline. What might cause her to fail in her password-cracking efforts if the target is using WPA3 in Personal network mode?",
    "options": [
      "WPA3 uses complex passwords.",
      "WPA3 uses SAE and does not transfer the password over the air.",
      "WPA3 requires multifactor, making a password alone insufficient.",
      "The password crack will work due to flaws in WPA3."
    ],
    "correctAnswer": ["WPA3 uses SAE and does not transfer the password over the air."],
    "explanation": "WPA3 uses SAE, or simultaneous authentication of equals, and does not send the password over the air. Traditional cracking methods used against previous versions of WPA and WPA2 no longer work. This is not because of complex passwords or MFA, but because of how the handshake's elements are created to avoid sending the password.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "A zero-day vulnerability is announced for the popular Apache web server in the middle of a workday. In Jacob's role as an information security analyst, he needs to quickly scan his network to determine what servers are vulnerable to the issue. What is Jacob's best route to quickly identify vulnerable systems?",
    "options": [
      "Immediately run Nessus against all of the servers to identify which systems are vulnerable.",
      "Review the CVE database to find the vulnerability information and patch information.",
      "Create a custom IDS or IPS signature.",
      "Identify affected versions and check systems for that version number using an automated scanner."
    ],
    "correctAnswer": ["Identify affected versions and check systems for that version number using an automated scanner."],
    "explanation": "In many cases when an exploit is initially reported, there are no prebuilt signatures or detections for vulnerability scanners, and the CVE database may not immediately have information about the attack. Jacob's best option is to quickly gather information and review potentially vulnerable servers based on their current configuration. As more information becomes available, signatures and CVE information are likely to be published. Unfortunately for Jacob, IDS and IPS signatures will detect only attacks and won't detect whether systems are vulnerable unless he sees the systems being exploited.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What type of testing is used to ensure that separately developed software modules properly exchange data?",
    "options": [
      "Fuzzing",
      "Dynamic testing",
      "Interface testing",
      "API checksums"
    ],
    "correctAnswer": ["Interface testing"],
    "explanation": "Interface testing is used to ensure that software modules properly meet interface specifications and thus will properly exchange data. Dynamic testing tests software in a running environment, whereas fuzzing is a type of dynamic testing that feeds invalid input to running software to test error and input handling. API checksums are not a testing technique.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Selah wants to provide security assessment information to customers who want to use her organization's cloud services. Which of the following options should she select to ensure that the greatest number of customers are satisfied with the assessment information?",
    "options": [
      "Use an internal audit team to self-assess against internal metrics.",
      "Use a third-party auditor.",
      "Use internal technical staff who know the systems.",
      "Use an internal audit team to self-assess against a common standard like COBIT."
    ],
    "correctAnswer": ["Use a third-party auditor."],
    "explanation": "Using a third-party auditor from a well-known and well-regarded firm is often the best option when providing audit and compliance information to third parties. Selah could engage an appropriate vendor for a SOC 2 Type II engagement as one example of a reasonable option to provide detail to her customers. Internal staff assessing against a common standard like COBIT would be the next most acceptable option on this list, with an internal standard less useful than that. Finally, relying on internal personnel not specialized in audits proves to be the least effective strategy in this context.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Yasmine has been asked to consider a breach and attack simulation system. What type of system should she look for?",
    "options": [
      "A ticket and change management system designed to help manage incidents",
      "A system that runs incident response simulations for blue teams to test their skills",
      "A system that combines red and blue team techniques with automation",
      "A security operations and response (SOAR) system"
    ],
    "correctAnswer": ["A system that combines red and blue team techniques with automation"],
    "explanation": "Breach and attack simulation (BAS) systems combine red team (attack) and blue team (defense) techniques together with automation to simulate advanced persistent threats and other advanced threat actors when run against your environment. This allows a variety of threats to be replicated and assessed in an environment without as much overhead as a fully staffed purple team would.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Monica wants to gather information about security awareness in her organization. What technique is most frequently used to assess the broad range elements that make up security awareness?",
    "options": [
      "Phishing simulations",
      "Gamified applications",
      "Assessment tests",
      "Surveys"
    ],
    "correctAnswer": ["Surveys"],
    "explanation": "Most organizations use surveys to assess security awareness. Phishing simulators are also frequently used, but only test awareness of phishing issues and techniques, not general security awareness. Gamified applications are continuing to grow in popularity, but the ease of use and availability of surveys make them the most popular. Finally, assessment tests may be used when compliance knowledge assessments are required to meet a specific standard, but testing is not as common as surveying.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jim has been contracted to conduct a gray-box penetration test, and his clients have provided him with the following information about their networks so that he can scan them: Data center: 10.10.10.0/24; Sales: 10.10.11.0/24; Billing: 10.10.12.0/24; Wireless: 192.168.0.0/16. What problem will Jim encounter if he is contracted to conduct a scan from off-site?",
    "options": [
      "The IP ranges are too large to scan efficiently.",
      "The IP addresses provided cannot be scanned.",
      "The IP ranges overlap and will cause scanning issues.",
      "The IP addresses provided are RFC 1918 addresses."
    ],
    "correctAnswer": ["The IP addresses provided are RFC 1918 addresses."],
    "explanation": "The IP addresses that his clients have provided are RFC 1918 nonroutable IP addresses, and Jim will not be able to scan them from off-site. To succeed in his penetration test, he will have to either first penetrate their network border or place a machine inside their network to scan from the inside. IP addresses overlapping is not a real concern for scanning, and the ranges can easily be handled by current scanning systems.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Mark's company has been notified of a flaw in their web application. The anonymous individual has notified them that they have two weeks to fix it before the details of the flaw are published along with example exploit code. What industry norm is the individual who contacted Mark's company violating?",
    "options": [
      "Zero-day reporting",
      "Ethical disclosure",
      "Ethical hacking",
      "The ISC2 vulnerability disclosure ethics statement"
    ],
    "correctAnswer": ["Ethical disclosure"],
    "explanation": "Ethical (or responsible) disclosure practices will provide companies and organizations with a reasonable period of time to fix a flaw and to get that fix into the hands of their customers. Two weeks is unlikely to be a reasonable amount of time for this. Unfortunately, Mark may not be able to persuade the individual to make a different decision, and Mark's company will need to determine what to do about the issue.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a centralized logging infrastructure diagram showing various devices sending logs to a SIEM] Jennifer needs to ensure that all Windows systems provide identical logging information to the SIEM. How can she best ensure that all Windows desktops have the same log settings?",
    "options": [
      "Perform periodic configuration audits.",
      "Use Group Policy.",
      "Use Local Policy.",
      "Deploy a Windows syslog client."
    ],
    "correctAnswer": ["Use Group Policy."],
    "explanation": "Group Policy enforced by Active Directory can ensure consistent logging settings and can provide regular enforcement of policy on systems. Periodic configuration audits won't catch changes made between audits, and local policies can drift due to local changes or differences in deployments. A Windows syslog client will enable the Windows systems to send syslog to the SIEM appliance but won't ensure consistent logging of events.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a centralized logging infrastructure diagram] During normal operations, Jennifer's team uses the SIEM appliance to monitor for exceptions received via syslog. What system shown does not natively have support for syslog events?",
    "options": [
      "Enterprise wireless access points",
      "Windows desktop systems",
      "Linux web servers",
      "Enterprise firewall devices"
    ],
    "correctAnswer": ["Windows desktop systems"],
    "explanation": "Windows systems generate logs in the Windows native logging format. To send syslog events, Windows systems require a helper application or tool. Enterprise wireless access points, firewalls, and Linux systems all typically support syslog.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a centralized logging infrastructure diagram] What technology should an organization use for each of the devices shown in the diagram to ensure that logs can be time sequenced across the entire infrastructure?",
    "options": [
      "Syslog",
      "NTP",
      "Logsync",
      "SNAP"
    ],
    "correctAnswer": ["NTP"],
    "explanation": "Network Time Protocol (NTP) can ensure that systems are using the same time, allowing time sequencing for logs throughout a centralized logging infrastructure. Syslog is a way for systems to send logs to a logging server and won't address time sequencing. Neither logsync nor SNAP is an industry term.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "During a penetration test, Michelle needs to identify systems, but she hasn't gained sufficient access on the system she is using to generate raw packets. What type of scan should she run to verify the most open services?",
    "options": [
      "A TCP connect scan",
      "A TCP SYN scan",
      "A UDP scan",
      "An ICMP scan"
    ],
    "correctAnswer": ["A TCP connect scan"],
    "explanation": "When a tester does not have raw packet creation privileges, such as when they have not escalated privileges on a compromised host, a TCP connect scan can be used. TCP SYN scans require elevated privileges on most Linux systems due to the need to write raw packets. A UDP scan will miss most services that are provided via TCP, and an ICMP is merely a ping sweep of systems that respond to pings and won't identify services at all.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "During a port scan using nmap, Joseph discovers that a system shows two ports open that cause him immediate worry: 21/open and 23/open. What services are likely running on those ports?",
    "options": [
      "SSH and FTP",
      "FTP and Telnet",
      "SMTP and Telnet",
      "POP3 and SMTP"
    ],
    "correctAnswer": ["FTP and Telnet"],
    "explanation": "Joseph may be surprised to discover FTP (TCP port 21) and Telnet (TCP port 23) open on his network since both services are unencrypted and have been largely replaced by SSH, and SCP or SFTP. SSH uses port 22, SMTP uses port 25, and POP3 uses port 110.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Aaron wants to validate his compliance with PCI-DSS. His company is a large commercial organization with millions of dollars in transactions a year. What is the most common method of conducting this type of testing for large organizations?",
    "options": [
      "Self-assessment",
      "To conduct a thirty-party assessment using COBIT",
      "To partner with another company and trade assessments between the organizations",
      "To conduct a third-party assessment using a qualified security assessor"
    ],
    "correctAnswer": ["To conduct a third-party assessment using a qualified security assessor"],
    "explanation": "Large organizations hire QSAs, or qualified security assessors, to conduct compliance checks. Third-party certification is required for large organizations by PCI-DSS, although smaller organizations can self-certify.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What method is commonly used to assess how well software testing covered the potential uses of an application?",
    "options": [
      "A test coverage analysis",
      "A source code review",
      "A fuzz analysis",
      "A code review report"
    ],
    "correctAnswer": ["A test coverage analysis"],
    "explanation": "A test coverage analysis is often used to provide insight into how well testing covered the set of use cases that an application is being tested for. Source code reviews look at the code of a program for bugs, not necessarily at a use case analysis, whereas fuzzing tests invalid inputs. A code review report might be generated as part of a source code review.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Testing that is focused on functions that a system should not allow is an example of what type of testing?",
    "options": [
      "Use case testing",
      "Manual testing",
      "Misuse case testing",
      "Dynamic testing"
    ],
    "correctAnswer": ["Misuse case testing"],
    "explanation": "Testing how a system could be misused, or misuse testing, focuses on behaviors that are not what the organization desires or that are counter to the proper function of a system or application. Use case testing is used to verify whether a desired functionality works. Dynamic testing is used to determine how code handles variables that change over time, whereas manual testing is just what it implies: testing code by hand.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What type of monitoring uses simulated traffic to a website to monitor performance?",
    "options": [
      "Log analysis",
      "Synthetic transaction monitoring",
      "Passive monitoring",
      "Simulated transaction analysis"
    ],
    "correctAnswer": ["Synthetic transaction monitoring"],
    "explanation": "Synthetic transaction monitoring uses emulated or recorded transactions to monitor for performance changes in response time, functionality, or other performance monitors. Passive monitoring uses a span port or other method to copy traffic and monitor it in real time. Log analysis is typically performed against actual log data but can be performed on simulated traffic to identify issues. Simulated transaction analysis is not an industry term.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Derek wants to ensure that his organization tracks all changes to accounts through their life cycle. What type of tool should he invest in for his organization?",
    "options": [
      "A directory service like LDAP",
      "An IAM system",
      "A SIEM",
      "An EDR system"
    ],
    "correctAnswer": ["An IAM system"],
    "explanation": "Identity and access management (IAM) systems combine life-cycle management and monitoring tools to ensure that identity and authorization are properly handled throughout an organization. Derek should invest in a capable IAM system and ensure that it is configured to use appropriate workflows and to generate the logs and reports that he needs. EDR systems are endpoint detection and response tools and are used to protect against compromise by advanced attackers.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jim uses a tool that scans a system for available services and then connects to them to collect banner information to determine what version of the service is running. It then provides a report detailing what it gathers, basing results on service fingerprinting, banner information, and similar details it gathers combined with CVE information. What type of tool is Jim using?",
    "options": [
      "A port scanner",
      "A service validator",
      "A vulnerability scanner",
      "A patch management tool"
    ],
    "correctAnswer": ["A vulnerability scanner"],
    "explanation": "Vulnerability scanners that do not have administrative rights to access a machine or that are not using an agent to scan remote machines to gather information, including fingerprints from responses to queries and connections, banner information from services, and related data. CVE information is Common Vulnerability and Exposure information, or vulnerability information. A port scanner gathers information about what service ports are open, although some port scanners blur the line between port and vulnerability scanners. Patch management tools typically run as an agent on a system to allow them to both monitor patch levels and update the system as needed. Service validation typically involves testing the functionality of a service, not its banner and response patterns.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Emily builds a script that sends data to a web application that she is testing. Each time the script runs, it sends a series of transactions with data that fits the expected requirements of the web application to verify that it responds to typical customer behavior. What type of transactions is she using, and what type of test is this?",
    "options": [
      "Synthetic, passive monitoring",
      "Synthetic, use case testing",
      "Actual, dynamic monitoring",
      "Actual, fuzzing"
    ],
    "correctAnswer": ["Synthetic, use case testing"],
    "explanation": "Emily is using synthetic transactions, which can use recorded or generated transactions, and is conducting use-case testing to verify that the application responds properly to actual use cases. Neither actual data nor dynamic monitoring is an industry term. Fuzzing involves sending unexpected inputs to a program to see how it responds. Passive monitoring uses a network tap or other capture technology to allow monitoring of actual traffic to a system or application.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What passive monitoring technique records all user interaction with an application or website to ensure quality and performance?",
    "options": [
      "Client-server testing",
      "Real user monitoring",
      "Synthetic user monitoring",
      "Passive user recording"
    ],
    "correctAnswer": ["Real user monitoring"],
    "explanation": "Real user monitoring (RUM) is a passive monitoring technique that records user interaction with an application or system to ensure performance and proper application behavior. RUM is often used as part of a predeployment process using the actual user interface. The other answers are all made up—synthetic monitoring uses simulated behavior, but synthetic user monitoring is not a testing method. Similarly, passive monitoring monitors actual traffic, but passive user recording is not an industry term or technique. Client-server testing merely describes one possible architecture.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Earlier this year, the information security team at Jim's employer identified a vulnerability in the web server that Jim is responsible for maintaining. He immediately applied the patch and is sure that it installed properly, but the vulnerability scanner has continued to incorrectly flag the system as vulnerable. To prevent the issue from being flagged incorrectly in the future, what is the next step?",
    "options": [
      "Uninstall and reinstall the patch.",
      "Ask the information security team to flag the system as patched and not vulnerable to that particular flaw.",
      "Update the version information in the web server's configuration.",
      "Review the vulnerability report and use alternate remediation options."
    ],
    "correctAnswer": ["Ask the information security team to flag the system as patched and not vulnerable to that particular flaw."],
    "explanation": "Jim should ask the information security team to flag the issue as resolved if he is sure the patch was installed. Many vulnerability scanners rely on version information or banner information and may flag patched versions if the software provider does not update the information they see. Uninstalling and reinstalling the patch will not change this. Changing the version information may not change all of the details that are being flagged by the scanner and may cause issues at a later date. Reviewing the vulnerability information for a workaround may be a good idea but should not be necessary if the proper patch is installed; it can create maintenance issues later.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Angela wants to test a web browser's handling of unexpected data using an automated tool. What tool should she choose?",
    "options": [
      "Nmap",
      "zzuf",
      "Nessus",
      "Nikto"
    ],
    "correctAnswer": ["zzuf"],
    "explanation": "zzuf is the only fuzzer on the list, and zzuf is specifically designed to work with tools like web browsers, image viewers, and similar software by modifying network and file input to applications. Nmap is a port scanner, Nessus is a vulnerability scanner, and Nikto is a web server scanner.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Kara wants to conduct a security audit of her cloud IaaS vendor's systems, infrastructure, and practices. What type of audit is she most likely to be able to conduct?",
    "options": [
      "A third-party audit.",
      "She cannot conduct an audit.",
      "An internal audit.",
      "She may request the vendor's third-party audit results."
    ],
    "correctAnswer": ["She may request the vendor's third-party audit results."],
    "explanation": "Most IaaS vendors will not allow customers to conduct an audit of their systems and infrastructure. Kara is likely to be able to obtain third-party audit reports from her vendor, and the major IaaS vendors typically either make these available publicly or to paying or prospective customers. An internal audit will not assess the underlying infrastructure and services, only those that the organization uses.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Why should passive scanning be conducted in addition to implementing wireless security technologies like wireless intrusion detection systems?",
    "options": [
      "It can help identify rogue devices.",
      "It can test the security of the wireless network via scripted attacks.",
      "Their short dwell time on each wireless channel can allow them to capture more packets.",
      "They can help test wireless IDS or IPS systems."
    ],
    "correctAnswer": ["It can help identify rogue devices."],
    "explanation": "Passive scanning can help identify rogue devices by capturing MAC address vendor IDs that do not match deployed devices, by verifying that systems match inventories of organizationally owned hardware by hardware address and by monitoring for rogue SSIDs or connections. Scripted attacks are part of active scanning rather than passive scanning, and active scanning is useful for testing IDS or IPS systems, whereas passive scanning will not be detected by detection systems. Finally, a shorter dwell time can actually miss troublesome traffic, so balancing dwell time versus coverage is necessary for passive wireless scanning efforts.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Paul is reviewing the approval process for a penetration test and wants to ensure that it has appropriate management review. Who should he ensure has approved the request for a penetration test for a business system?",
    "options": [
      "The change advisory board",
      "Senior management",
      "The systems administrator for the system",
      "The service owner"
    ],
    "correctAnswer": ["Senior management"],
    "explanation": "In most organizations, senior management needs to approve penetration tests because of the risk to the organization and the potential impact of the test. In a small number of organizations, the service owner may be able to make this decision, but penetration tests often have broader impacts than a single service, meaning that senior management is the proper path. Change advisory boards approve changes, not penetration tests, and system administrators may be advised of the test but do not have the authority in most organizations to sign off on a penetration test.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What term describes software testing that is intended to uncover new bugs introduced by patches or configuration changes?",
    "options": [
      "Nonregression testing",
      "Evolution testing",
      "Smoke testing",
      "Regression testing"
    ],
    "correctAnswer": ["Regression testing"],
    "explanation": "Regression testing, which is a type of functional or unit testing, tests to ensure that changes have not introduced new issues. Nonregression testing checks to see whether a change has had the effect it was supposed to, smoke testing focuses on simple problems with impact on critical functionality, and evolution testing is not a software testing technique.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which of the following tools cannot identify a target's operating system for a penetration tester?",
    "options": [
      "Nmap",
      "Nessus",
      "Nikto",
      "Sqlmap"
    ],
    "correctAnswer": ["Sqlmap"],
    "explanation": "Nmap, Nessus, and Nikto all have OS fingerprinting or other operating system identification capabilities. Sqlmap is designed to perform automated detection and testing of SQL injection flaws and does not provide OS detection.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Susan needs to predict high-risk areas for her organization and wants to use metrics to assess risk trends as they occur. What should she do to handle this?",
    "options": [
      "Perform yearly risk assessments.",
      "Hire a penetration testing company to regularly test organizational security.",
      "Identify and track key risk indicators.",
      "Monitor logs and events using a SIEM device."
    ],
    "correctAnswer": ["Identify and track key risk indicators."],
    "explanation": "Key risk indicators are used to tell those in charge of risk management how risky an activity is and how much impact changes are having on that risk profile. Identifying and monitoring key risk indicators can help track high-risk areas earlier in their life cycle. Yearly risk assessments may be a good idea but provide only a point-in-time view, whereas penetration tests may miss out on risks that are not directly security-related. Monitoring logs and events using a SIEM device can help detect issues as they occur but won't necessarily show trends in risk.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What major difference separates synthetic and passive monitoring?",
    "options": [
      "Synthetic monitoring works only after problems have occurred.",
      "Passive monitoring cannot detect functionality issues.",
      "Passive monitoring works only after problems have occurred.",
      "Synthetic monitoring cannot detect functionality issues."
    ],
    "correctAnswer": ["Passive monitoring works only after problems have occurred."],
    "explanation": "Passive monitoring works only after issues have occurred because it requires actual traffic. Synthetic monitoring uses simulated or recorded traffic and thus can be used to proactively identify problems. Both synthetic and passive monitoring can be used to detect functionality issues.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a five-step cyclical diagram for penetration testing: Planning -> Information Gathering and Discovery -> Vulnerability Scanning -> Exploitation -> Reporting -> back to Planning] What task is the most important during Phase 1, planning?",
    "options": [
      "Building a test lab",
      "Getting authorization",
      "Gathering appropriate tools",
      "Determining if the test is white, black, or gray box"
    ],
    "correctAnswer": ["Getting authorization"],
    "explanation": "Getting authorization is the most critical element in the planning phase. Permission, and the “get-out-of-jail-free card” that demonstrates that organizational leadership is aware of the issues that a penetration test could cause, is the first step in any penetration test. Gathering tools and building a lab, as well as determining what type of test will be conducted, are all important, but nothing should happen without permission.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a five-step cyclical diagram for penetration testing] Which of the following tools is most likely to be used during discovery?",
    "options": [
      "Nessus",
      "John",
      "Nmap",
      "Nikto"
    ],
    "correctAnswer": ["Nmap"],
    "explanation": "Discovery can include both active and passive discovery. Port scanning is commonly done during discovery to assess what services the target provides, and nmap is one of the most popular tools used for this purpose. Nessus and Nikto might be used during the vulnerability scanning phase, and john, a password cracker, can be used to recover passwords during the exploitation phase.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a five-step cyclical diagram for penetration testing] Which of these concerns is the most important to address during planning to ensure that the reporting phase does not cause problems?",
    "options": [
      "Which CVE format to use",
      "How the vulnerability data will be stored and sent",
      "Which targets are off-limits",
      "How long the report should be"
    ],
    "correctAnswer": ["How the vulnerability data will be stored and sent"],
    "explanation": "Penetration test reports often include information that could result in additional exposure if they were accidentally released or stolen. Therefore, determining how vulnerability data should be stored and sent is critical. Problems with off-limits targets are more likely to result in issues during the vulnerability assessment and exploitation phase, and reports should not be limited in length but should be as long as they need to be to accomplish the goals of the test.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What four types of coverage criteria are commonly used when validating the work of a code testing suite?",
    "options": [
      "Input, statement, branch, and condition coverage",
      "Function, statement, branch, and condition coverage",
      "API, branch, bounds, and condition coverage",
      "Bounds, branch, loop, and condition coverage"
    ],
    "correctAnswer": ["Function, statement, branch, and condition coverage"],
    "explanation": "Code coverage testing most frequently requires that every function has been called, that each statement has been executed, that all branches have been fully explored, and that each condition has been evaluated for all possibilities. API, input, and loop testing are not common types of code coverage testing measures.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a line chart titled 'Time to Remediate in Days vs. Number of Vulnerabilities' showing a downward trend] As part of his role as a security manager, Jacob provides the following chart to his organization's management team. What type of measurement is he providing for them?",
    "options": [
      "A coverage rate measure",
      "A key performance indicator",
      "A time to live metric",
      "A business criticality indicator"
    ],
    "correctAnswer": ["A key performance indicator"],
    "explanation": "Time to remediate a vulnerability is a commonly used key performance indicator for security teams. Time to live measures how long a packet can exist in hops, business criticality is a measure used to determine how important a service or system is to an organization, and coverage rates are used to measure how effective code testing is.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What does using unique user IDs for all users provide when reviewing logs?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Accountability"
    ],
    "correctAnswer": ["Accountability"],
    "explanation": "Unique user IDs provide accountability when paired with auditable logs to provide that a specific user took any given action. Confidentiality, availability, and integrity can be provided through other means like encryption, systems design, and digital signatures.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which of the following is not an interface that is typically tested during the software testing process?",
    "options": [
      "APIs",
      "Network interfaces",
      "UIs",
      "Physical interfaces"
    ],
    "correctAnswer": ["Network interfaces"],
    "explanation": "Application programming interfaces (APIs), user interfaces (UIs), and physical interfaces are all important to test when performing software testing. Network interfaces are not part of the typical list of interfaces tested in software testing.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alan's organization uses the Security Content Automation Protocol (SCAP) to standardize its vulnerability management program. Which component of SCAP can Alan use to reconcile the identity of vulnerabilities generated by different security assessment tools?",
    "options": [
      "OVAL",
      "XCCDF",
      "CVE",
      "SCE"
    ],
    "correctAnswer": ["CVE"],
    "explanation": "The Common Vulnerabilities and Exposures (CVE) database provides a consistent reference for identifying security vulnerabilities. The Open Vulnerability and Assessment Language (OVAL) is used to describe the security condition of a system. The Extensible Configuration Checklist Description Format (XCCDF) is used to create security checklists in a standardized fashion. The Script Check Engine (SCE) is designed to make scripts interoperable with security policy definitions.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of a bar chart showing software test results for four tests, with Test 2 showing 100% failure] Susan is reviewing software testing coverage data and sees the information shown here. What can she determine about this testing process? (Select all answers that apply.)",
    "options": [
      "The testing does not have full coverage.",
      "Test 4 completed with no failures.",
      "Test 2 failed to run successfully.",
      "The testing needs to be run a fifth time."
    ],
    "correctAnswer": ["Test 4 completed with no failures.", "Test 2 failed to run successfully."],
    "explanation": "Test 2's total failure is likely due to a failed test run, but the tests overall show continued improvement with full success in test 4. At this point, most testing processes would consider the testing complete. This does not show coverage, and there is no reason to run a fifth run if the fourth test was successful.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "questionType": "multi-response",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which of the following strategies is not a reasonable approach for remediating a vulnerability identified by a vulnerability scanner?",
    "options": [
      "Install a patch.",
      "Use a workaround fix.",
      "Update the banner or version number.",
      "Use an application layer firewall or IPS to prevent attacks against the identified vulnerability."
    ],
    "correctAnswer": ["Update the banner or version number."],
    "explanation": "Simply updating the version that an application provides may stop the vulnerability scanner from flagging it, but it won't fix the underlying issue. Patching, using workarounds, or installing an application layer firewall or IPS can all help to remediate or limit the impact of the vulnerability.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "During a penetration test, Selah calls her target's help desk claiming to be the senior assistant to an officer of the company. She requests that the help desk reset the officer's password because of an issue with his laptop while traveling and persuades them to do so. What type of attack has she successfully completed?",
    "options": [
      "Zero knowledge",
      "Help-desk spoofing",
      "Social engineering",
      "Black box"
    ],
    "correctAnswer": ["Social engineering"],
    "explanation": "Selah's social engineering attack succeeded in persuading a staff member at the help desk to change a password for someone who they not only couldn't see but who they couldn't verify actually needed their password reset. Black box and zero knowledge are both terms describing penetration tests without information about the organization or system, and help-desk spoofing is not an industry term.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image of Windows Log Properties window, with 'Archive the log when full, do not overwrite events' selected] In this image, what issue may occur due to the log handling settings?",
    "options": [
      "Log data may be lost when the log is archived.",
      "Log data may be overwritten.",
      "Log data may not include needed information.",
      "Log data may fill the system disk."
    ],
    "correctAnswer": ["Log data may fill the system disk."],
    "explanation": "The menu shown will archive logs when they reach the maximum size allowed (20 MB). These archives will be retained, which could fill the disk. Log data will not be overwritten, and log data should not be lost when the data is archived. The question does not include enough information to determine if needed information may not be logged.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which of the following is not a hazard associated with penetration testing?",
    "options": [
      "Application crashes",
      "Denial of service",
      "Blackouts",
      "Data corruption"
    ],
    "correctAnswer": ["Blackouts"],
    "explanation": "Penetration tests typically do not involve blackouts. Application crashes, denial of service due to system, network, or application failures, and even data corruption can all be hazards of penetration tests.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which NIST special publication covers the assessment of security and privacy controls?",
    "options": [
      "800-12",
      "800-53A",
      "800-34",
      "800-86"
    ],
    "correctAnswer": ["800-53A"],
    "explanation": "NIST SP 800-53A is titled “Assessing Security and Privacy Controls in Federal Information Systems and Organizations: Building Effective Assessment Plans” and covers methods for assessing and measuring controls. NIST 800-12 is an introduction to computer security, 800-34 covers contingency planning, and 800-86 is the “Guide to Integrating Forensic Techniques into Incident Response.”",
    "domain": "Security Assessment and Testing",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Michelle wants to assess her organization's disaster recovery readiness. What type of test could she run to most effectively assess readiness without the potential for disruption?",
    "options": [
      "Conduct a tabletop exercise.",
      "Conduct a failover test.",
      "Conduct a simulation.",
      "Conduct a plan review."
    ],
    "correctAnswer": ["Conduct a simulation."],
    "explanation": "Simulations are the most complete test that can be conducted without the risk that a full failover test creates. Michelle should conduct a simulation to validate as much of her organization's plan as possible. Tabletop exercises and plan reviews provide less complete coverage.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Lucca wants to conduct an audit of a hybrid cloud environment. What potential challenge should he identify for his management team?",
    "options": [
      "On-premises audits are difficult to complete.",
      "Hybrid audits cannot be conducted by third parties.",
      "Underlying cloud infrastructure may not be auditable.",
      "There are no differences between hybrid and cloud audits."
    ],
    "correctAnswer": ["Underlying cloud infrastructure may not be auditable."],
    "explanation": "Hybrid environment audits involve the complexity of both cloud and on-premises audits. That means that the underlying cloud infrastructure may not be auditable, although Lucca's organization's use and configuration of the cloud will be. On-premises audits are not any more challenging to complete than other audits, hybrid audits can be conducted by third parties, and hybrid audits include both on-premises and cloud auditing challenges and requirements as they are not the same as a cloud-only audit.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "If Kara's primary concern is preventing administrative connections to the server, which port should she block?",
    "options": [
      "22",
      "80",
      "443",
      "1433"
    ],
    "correctAnswer": ["22"],
    "explanation": "Port 22 is used by the Secure Shell (SSH) protocol for administrative connections. If Kara wants to restrict administrative connections, she should block access on this port. Port 80 is used for HTTP, 443 for HTTPS, and 1433 for Microsoft SQL.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "During a third-party audit, Jim's company receives a finding that states, “The administrator should review backup success and failure logs on a daily basis and take action in a timely manner to resolve reported exceptions.” What potential problem does this finding indicate?",
    "options": [
      "Administrators will not know if the backups succeeded or failed.",
      "The backups may not be properly logged.",
      "The backups may not be usable.",
      "The backup logs may not be properly reviewed."
    ],
    "correctAnswer": ["The backups may not be usable."],
    "explanation": "The audit finding indicates that the backup administrator may not be monitoring backup logs and taking appropriate action based on what they report, thus resulting in potentially unusable backups. Issues with review, logging, or being aware of the success or failure of backups are less important than not having usable backups.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jim is helping his organization decide on audit standards for use throughout their international organization. Which of the following is not an IT standard that Jim's organization is likely to use as part of its audits?",
    "options": [
      "COBIT",
      "SSAE-18",
      "ITIL",
      "ISO 27001"
    ],
    "correctAnswer": ["ITIL"],
    "explanation": "ITIL, which originally stood for IT Infrastructure Library, is a set of practices for IT service management and is not typically used for auditing. The Control Objectives for Information and Related Technology (COBIT), ISO 27001, and the Statement on Standards for Attestation Engagements number 18 (SSAE-18) are all used for auditing.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Nicole wants to conduct a standards-based audit of her organization. Which of the following is commonly used to describe common requirements for information systems?",
    "options": [
      "IEC",
      "COBIT",
      "FISA",
      "DMCA"
    ],
    "correctAnswer": ["COBIT"],
    "explanation": "COBIT, the Control Objectives for Information and Related Technologies, is commonly used as an audit framework for evaluating the governance and management of enterprise IT in an organization. The DMCA is the Digital Millennium Copyright Act, IEC is the International Electrotechnical Commission that defines standards for electrotechnology, and FISA is the Federal Intelligence Surveillance Act, not an audit standard.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Kelly's team conducts regression testing on each patch they release. What key performance measure should they maintain to measure the effectiveness of their testing?",
    "options": [
      "Time to remediate vulnerabilities",
      "A measure of the rate of defect recurrence",
      "A weighted risk trend",
      "A measure of the specific coverage of their testing"
    ],
    "correctAnswer": ["A measure of the rate of defect recurrence"],
    "explanation": "Kelly's team is using regression testing, which is intended to prevent the recurrence of issues. This means measuring the rate of defect recurrence is appropriate for their work. Time to remediate vulnerabilities is associated with activities such as patching, rather than preparing the patch, whereas a weighted risk trend is used to measure risk over time to an organization. Finally, specific coverage may be useful to determine if they are fully testing their effort, but regression testing is more specifically covered by defect recurrence rates.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which of the following types of code review is not typically performed by a human?",
    "options": [
      "Software inspections",
      "Pair programming",
      "Static program analysis",
      "Software walk-throughs"
    ],
    "correctAnswer": ["Static program analysis"],
    "explanation": "Static program reviews are typically performed by an automated tool. Program understanding, program comprehension, pair programming, software inspections, and software walk-throughs are all human-centric methods for reviewing code.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Susan is the lead of a quality assurance team at her company. Her team is required to test every code path, including those that will be used only when an error condition occurs. What type of testing environment does her team need to ensure complete code coverage?",
    "options": [
      "White box",
      "Gray box",
      "Black box",
      "Dynamic"
    ],
    "correctAnswer": ["White box"],
    "explanation": "To fully test code, a white-box test is required. Without full visibility of the code, error conditions or other code could be missed, making a gray-box or black-box test an inappropriate solution. Using dynamic testing that runs against live code could also result in some conditions being missed due to sections of code not being exposed to typical usage.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "As part of the continued testing of their new application, Susan's quality assurance team has designed a set of test cases for a series of black-box tests. These functional tests are then run, and a report is prepared explaining what has occurred. What type of report is typically generated during this testing to indicate test metrics?",
    "options": [
      "A test coverage report",
      "A penetration test report",
      "A code coverage report",
      "A line coverage report"
    ],
    "correctAnswer": ["A test coverage report"],
    "explanation": "A test coverage report measures how many of the test cases have been completed and is used as a way to provide test metrics when using test cases. A penetration test report is provided when a penetration test is conducted—this is not a penetration test. A code coverage report covers how much of the code has been tested, and a line coverage report is a type of code coverage report, both of which cannot be created in a black-box test since the code is not accessible to testers.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "As part of their code coverage testing, Susan's team runs the analysis in a nonproduction environment using logging and tracing tools. Which of the following type of code issues is most likely to be missed during testing due to this change in the operating environment?",
    "options": [
      "Improper bounds checking",
      "Input validation",
      "A race condition",
      "Pointer manipulation"
    ],
    "correctAnswer": ["A race condition"],
    "explanation": "The changes from a testing environment with instrumentation inserted into the code and the production environment for the code can mask timing-related issues like race conditions. Bounds checking, input validation, and pointer manipulation are all related to coding issues rather than environmental issues and are more likely to be discoverable in a test environment.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Robin recently conducted a vulnerability scan and found a critical vulnerability on a server that handles sensitive information. What should Robin do next?",
    "options": [
      "Patching",
      "Reporting",
      "Remediation",
      "Validation"
    ],
    "correctAnswer": ["Validation"],
    "explanation": "Once a vulnerability scanner identifies a potential problem, validation is necessary to verify that the issue exists. Reporting, patching, or other remediation actions can be conducted once the vulnerability has been confirmed.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "The automated code testing and integration that Andrea ran as part of her organization's CI/CD pipeline errored out. What should Andrea do with the code if the company needs the code to go live immediately?",
    "options": [
      "Manually bypass the test.",
      "Review error logs to identify the problem.",
      "Rerun the test to see if it works.",
      "Send the code back to the developer for a fix."
    ],
    "correctAnswer": ["Review error logs to identify the problem."],
    "explanation": "While handling errors and exceptions can be something of an art, the first thing to do in circumstances like these is to review error logs and notifications to try to find out what went wrong. From there, Andrea can make a decision to remediate a problem, send the code back for a fix, or take another action. She might even opt to send the code forward if the error occurred after testing was completed and was with the process flow or another noncritical element, but would do so only if she was absolutely certain that was the case.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Michelle wants to compare vulnerabilities she has discovered in her data center based on how exploitable they are, if exploit code exists, and how hard they are to remediate. What scoring system should she use to compare vulnerability metrics like these?",
    "options": [
      "CSV",
      "NVD",
      "VSS",
      "CVSS"
    ],
    "correctAnswer": ["CVSS"],
    "explanation": "The Common Vulnerability Scoring System (CVSS) includes metrics and calculation tools for exploitability, impact, how mature exploit code is, and how vulnerabilities can be remediated, as well as a means to score vulnerabilities against users' unique requirements. NVD is the National Vulnerability Database, CSV is short for comma-separated values, and Visual SourceSafe (VSS) is an irrelevant term related to software development rather than vulnerability management.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "During a port scan of his network, Alex finds that a number of hosts respond on TCP ports 80, 443, 515, and 9100 in offices throughout his organization. What type of devices is Alex likely discovering?",
    "options": [
      "Web servers",
      "File servers",
      "Wireless access points",
      "Printers"
    ],
    "correctAnswer": ["Printers"],
    "explanation": "Network-enabled printers often provided services via TCP 515 and 9100 and have both nonsecure and secure web-enabled management interfaces on TCP 80 and 443. Web servers, access points, and file servers would not typically provide service on the LPR and LPD ports (515 and 9100).",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Nikto, Burp Suite, and Wapiti are all examples of what type of tool?",
    "options": [
      "Web application vulnerability scanners",
      "Code review tools",
      "Vulnerability scanners",
      "Port scanners"
    ],
    "correctAnswer": ["Web application vulnerability scanners"],
    "explanation": "Nikto, Burp Suite, and Wapiti are all web application vulnerability scanners, tools designed specifically to scan web servers and applications. While they share some functionality with broader vulnerability scanners and port scanning tools, they have a narrower focus and typically have deeper capabilities than vulnerability scanners.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Frank's team is testing a new API that his company's developers have built for their application infrastructure. Which of the following is not a common API issue that you would expect Frank's team to find?",
    "options": [
      "Improper encryption",
      "Object-level authorization issues",
      "User authentication issues",
      "Lack of rate limiting"
    ],
    "correctAnswer": ["Improper encryption"],
    "explanation": "APIs typically transfer data for web applications via HTTPS, meaning that the API itself is not responsible for encryption. If Frank's team discovers that TLS is not enabled, they will need to work with the infrastructure or systems administration team to ensure that TLS is enabled and in use rather than making API changes. Authorization for object access, authentication weaknesses, and rate limiting are all common API issues. If you're not familiar with the types of issues you might encounter in APIs, you can read more about them in the OWASP API security top 10.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jim is working with a penetration testing contractor who proposes using Metasploit as part of her penetration testing effort. What should Jim expect to occur when Metasploit is used?",
    "options": [
      "Systems will be scanned for vulnerabilities.",
      "Systems will have known vulnerabilities exploited.",
      "Services will be probed for buffer overflow and other unknown flaws.",
      "Systems will be tested for zero-day exploits."
    ],
    "correctAnswer": ["Systems will have known vulnerabilities exploited."],
    "explanation": "Metasploit is an exploitation package that is designed to assist penetration testers. A tester using Metasploit can exploit known vulnerabilities for which an exploit has been created or can create their own exploits using the tool. While Metasploit provides built-in access to some vulnerability scanning functionality, a tester using Metasploit should primarily be expected to perform actual tests of exploitable vulnerabilities. Similarly, Metasploit supports creating buffer overflow attacks, but it is not a purpose-built buffer overflow testing tool, and of course, testing systems for zero-day exploits doesn't work unless they have been released.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Susan needs to ensure that the interactions between the components of her e-commerce application are all handled properly. She intends to verify communications, error handling, and session management capabilities throughout her infrastructure. What type of testing is she planning to conduct?",
    "options": [
      "Misuse case testing",
      "Fuzzing",
      "Regression testing",
      "Interface testing"
    ],
    "correctAnswer": ["Interface testing"],
    "explanation": "Susan is conducting interface testing. Interface testing involves testing system or application components to ensure that they work properly together. Misuse case testing focuses on how an attacker might misuse the application and would not test normal cases. Fuzzing attempts to send unexpected input and might be involved in interface testing, but it won't cover the full set of concerns. Regression testing is conducted when testing changes and is used to ensure that the application or system functions as it did before the update or change.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jim is designing his organization's log management systems and knows that he needs to carefully plan to handle the organization's log data. Which of the following is not a factor that Jim should be concerned with?",
    "options": [
      "The volume of log data",
      "A lack of sufficient log sources",
      "Data storage security requirements",
      "Network bandwidth"
    ],
    "correctAnswer": ["A lack of sufficient log sources"],
    "explanation": "Not having enough log sources is not a common consideration in log management system design, although it may be a worry for security managers who can't capture the data they need. Log management system designs must take into account the volume of log data and the network bandwidth it consumes, the security of the data, and the amount of effort required to analyze the data.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ryan's organization wants to ensure that proper account management is occurring but does not have a central identity and access management tool in place. Ryan has a limited amount of time to do his verification process. What is his best option to test the account management process as part of an internal audit?",
    "options": [
      "Validate all accounts changed in the past 90 days.",
      "Select high-value administrative accounts for validation.",
      "Validate all account changes in the past 180 days.",
      "Validate a random sample of accounts."
    ],
    "correctAnswer": ["Validate a random sample of accounts."],
    "explanation": "Random sampling of accounts is the recommended best practice if all accounts cannot be validated. Selecting only recently changed accounts will not identify long-term issues or historic issues, and checking only high-value accounts will not show if there are issues or bad practices with other account types.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "When a Windows system is rebooted, what type of log is generated?",
    "options": [
      "Error",
      "Warning",
      "Information",
      "Failure audit"
    ],
    "correctAnswer": ["Information"],
    "explanation": "Rebooting a Windows machine results in an information log entry. Windows defines five types of events: errors, which indicate a significant problem; warnings, which may indicate future problems; information, which describes successful operation; success audits, which record successful security accesses; and failure audits, which record failed security access attempts.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "During a review of access logs, Alex notices that Michelle logged into her workstation in New York at 8 a.m. daily, but then she was recorded as logging into her department's main web application shortly after 3 a.m. daily. What common logging issue has Alex likely encountered?",
    "options": [
      "Inconsistent log formatting",
      "Modified logs",
      "Inconsistent timestamps",
      "Multiple log sources"
    ],
    "correctAnswer": ["Inconsistent timestamps"],
    "explanation": "Inconsistent timestamps are a common problem, often caused by improperly set time zones or due to differences in how system clocks are set. In this case, a consistent time difference often indicates that one system uses local time, and the other is using Greenwich mean time (GMT). Logs from multiple sources tend to cause problems with centralization and collection, whereas different log formats can create challenges in parsing log data. Finally, modified logs are often a sign of intrusion or malicious intent.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What type of vulnerability scan accesses configuration information from the systems it is run against as well as information that can be accessed via services available via the network?",
    "options": [
      "Authenticated scans",
      "Web application scans",
      "Unauthenticated scans",
      "Port scans"
    ],
    "correctAnswer": ["Authenticated scans"],
    "explanation": "Authenticated scans use a read-only account to access configuration files, allowing more accurate testing of vulnerabilities. Web application scans, unauthenticated scans, and port scans don't have access to configuration files unless they are inadvertently exposed.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Brian has discovered a vulnerability in a website and has notified the company that owns the website about the issue. What has he done?",
    "options": [
      "A penetration test",
      "Ethical disclosure",
      "A web application test",
      "OSINT"
    ],
    "correctAnswer": ["Ethical disclosure"],
    "explanation": "Notifying third parties of security issues and vulnerabilities in a confidential manner to allow them to address the issues is considered ethical disclosure. There is not enough information in the question to determine how it was found, and disclosure is not necessarily part of either penetration tests or application tests. How the information as found is not listed, so OSINT is not a useful answer either.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ben's organization has begun to use STRIDE to assess its software and has identified threat agents and the business impacts that these threats could have. Now they are working to identify appropriate controls for the issues they have identified. Ben's team is attempting to categorize a transaction identification issue that is caused by using a symmetric key shared by multiple servers. What STRIDE category should this fall into?",
    "options": [
      "Information disclosure",
      "Denial of service",
      "Tampering",
      "Repudiation"
    ],
    "correctAnswer": ["Repudiation"],
    "explanation": "Since a shared symmetric key could be used by any of the servers, transaction identification problems caused by a shared key are likely to involve a repudiation issue. If encrypted transactions cannot be uniquely identified by a server, they cannot be proved to have come from a specific server.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ben wants to use a third-party service to help assess denial-of-service attack vulnerabilities due to the amount of traffic during denial-of-service attacks. What type of engagement should he suggest to his organization?",
    "options": [
      "A social engineering engagement",
      "A penetration test",
      "Load or stress testing",
      "Testing using a fuzzer"
    ],
    "correctAnswer": ["Load or stress testing"],
    "explanation": "Ben should engage a company that can perform a load or stress test to validate how the application performs under both expected and extreme loads so that he knows what a denial-of-service attack based on load will look like. Social engineering does not test the ability of sites to handle load, and penetration testers may conduct denial-of-service attacks but typically do not. Fuzzers send random input to test how applications handle unexpected input rather than relying on extreme load. They might help test for flaws that could result in a denial-of-service condition, but the question specifically asks about load-based conditions, not software flaws.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Chris is troubleshooting an issue with his organization's SIEM reporting. After analyzing the issue, he believes that the timestamps on log entries from different systems are inconsistent. What protocol can he use to resolve this issue?",
    "options": [
      "SSH",
      "FTP",
      "TLS",
      "NTP"
    ],
    "correctAnswer": ["NTP"],
    "explanation": "The Network Time Protocol (NTP) allows the synchronization of system clocks with a standardized time source. The Secure Shell (SSH) protocol provides encrypted administrative connections to servers. The File Transfer Protocol (FTP) is used for data exchange. Transport Layer Security (TLS) is an encryption process used to protect information in transit over a network.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ryan is considering the use of fuzz testing in his web application testing program. Which one of the following statements about fuzz testing should Ryan consider when making his decision?",
    "options": [
      "Fuzzers only find complex faults.",
      "Testers must manually generate input.",
      "Fuzzers may not fully cover the code.",
      "Fuzzers can't reproduce errors."
    ],
    "correctAnswer": ["Fuzzers may not fully cover the code."],
    "explanation": "Fuzz testers are capable of automatically generating input sequences to test an application. Therefore, testers do not need to manually generate input, although they may do so if they want. Fuzzers can reproduce errors (and thus, “fuzzers can't reproduce errors” is not an issue) but typically don't fully cover the code—code coverage tools are usually paired with fuzzers to validate how much coverage was possible. Fuzzers are often limited to simple errors because they won't handle business logic or attacks that require knowledge from the application user.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ken is designing a testing process for software developed by his team. He is designing a test that verifies that every line of code was executed during the test. What type of analysis is Ken performing?",
    "options": [
      "Branch coverage",
      "Condition coverage",
      "Function coverage",
      "Statement coverage"
    ],
    "correctAnswer": ["Statement coverage"],
    "explanation": "Statement coverage tests verify that every line of code was executed during the test. Branch coverage verifies that every if statement was executed under all if and else conditions. Condition coverage verifies that every logical test in the code was executed under all sets of inputs. Function coverage verifies that every function in the code was called and returns results.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image showing an Nmap scan report with many open TCP ports like ftp, ssh, telnet, smtp, etc.] If Ben is conducting a penetration test, what should his next step be after receiving these results?",
    "options": [
      "Connect to the web server using a web browser.",
      "Connect via Telnet to test for vulnerable accounts.",
      "Identify interesting ports for further scanning.",
      "Use sqlmap against the open databases."
    ],
    "correctAnswer": ["Identify interesting ports for further scanning."],
    "explanation": "After scanning for open ports using a port scanning tool like nmap, penetration testers will identify interesting ports and then conduct vulnerability scans to determine what services may be vulnerable. This will perform many of the same activities that connecting via a web server will and will typically be more useful than trying to manually test for vulnerable accounts via Telnet. Sqlmap would typically be used after a vulnerability scanner identifies additional information about services, and the vulnerability scanner will normally provide a wider range of useful information.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image showing an Nmap scan report with many open TCP ports like ftp, ssh, telnet, smtp, etc.] Based on the scan results, what operating system (OS) was the system that was scanned most likely running?",
    "options": [
      "Windows Desktop",
      "Linux",
      "Network device",
      "Windows Server"
    ],
    "correctAnswer": ["Linux"],
    "explanation": "The system is likely a Linux system. The system shows X11, as well as login, shell, and nfs ports, all of which are more commonly found on Linux systems than Windows systems or network devices. This system is also very poorly secured; many of the services running on it should not be exposed in a modern secure network.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image showing an Nmap scan report with many open TCP ports like ftp, ssh, telnet, smtp, etc.] Ben's manager expresses concern about the coverage of his scan. Why might his manager have this concern?",
    "options": [
      "Ben did not test UDP services.",
      "Ben did not discover ports outside the “well-known ports.”",
      "Ben did not perform OS fingerprinting.",
      "Ben tested only a limited number of ports."
    ],
    "correctAnswer": ["Ben tested only a limited number of ports."],
    "explanation": "Nmap scans only 1000 TCP and UDP ports by default, including ports outside the 0–1024 range of “well-known” ports. By using the defaults for nmap, Ben missed 64,535 ports. OS fingerprinting won't cover more ports but would have provided a best guess of the OS running on the scanned system.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Lucca is reviewing his organization's disaster recovery process data and notes that the MTD for the business's main website is two hours. What does he know about the RTO for the site when he does testing and validation?",
    "options": [
      "It needs to be less than two hours.",
      "It needs to be at least two hours.",
      "The MTD is too short and needs to be longer.",
      "The RTO is too short and needs to be longer."
    ],
    "correctAnswer": ["It needs to be less than two hours."],
    "explanation": "When Lucca reviews the recovery time objective (RTO) data, he needs to ensure that the organization can recover from an outage in less than two hours based on the maximum tolerable downtime (MTD) of two hours.",
    "domain": "Security Assessment and Testing",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  }
 ]