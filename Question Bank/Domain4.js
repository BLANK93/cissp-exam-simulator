[
  {
    "text": "Gary wants to distribute a large file and prefers a peer-to-peer content delivery network (CDN). Which of the following is the most common example of this type of technology?",
    "options": [
      "CloudFlare",
      "BitTorrent",
      "Amazon CloudFront",
      "Akamai Edge"
    ],
    "correctAnswer": ["BitTorrent"],
    "explanation": "BitTorrent is an example of a peer-to-peer (P2P) content delivery network. It is commonly used for legitimate purposes to distribute large files like Linux ISOs and other freely distributed software packages and files in addition to its less legitimate uses. CloudFlare, CloudFront, and Akamai's Edge are all hosted CDNs.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What is the purpose of a virtual domain (VDOM)?",
    "options": [
      "They combine multiple virtual instances into a single domain.",
      "They divide a firewall device or appliance into two or more virtual firewalls.",
      "They create a virtual domain controller.",
      "They allow the hosting of multiple domain names for a single host."
    ],
    "correctAnswer": ["They divide a firewall device or appliance into two or more virtual firewalls."],
    "explanation": "VDOMs are instances of firewalls, each with their own interfaces and rulesets allowing granular configurations based on security requirements. VDOMs are commonly used to accommodate different purposes, customers, or other needs where separately managed firewall instances are desirable. They don't combine instances; instead, they create separate instances, they aren't domain controllers, and hosting multiple domain names does not require a VDOM.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ben has connected his laptop to his tablet PC using an 802.11ac connection. What wireless network mode has he used to connect these devices?",
    "options": [
      "Infrastructure mode",
      "Wired extension mode",
      "Ad hoc mode",
      "Stand-alone mode"
    ],
    "correctAnswer": ["Ad hoc mode"],
    "explanation": "Ben is using ad hoc mode, which directly connects two clients. It can be easy to confuse this with stand-alone mode, which connects clients using a wireless access point but not to wired resources like a central network. Infrastructure mode connects endpoints to a central network, not directly to each other. Finally, wired extension mode uses a wireless access point to link wireless clients to a wired network.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Selah's and Nick's PCs simultaneously send traffic by transmitting at the same time. What network term describes the range of systems on a network that could be affected by this same issue?",
    "options": [
      "The subnet",
      "The supernet",
      "A collision domain",
      "A broadcast domain"
    ],
    "correctAnswer": ["A collision domain"],
    "explanation": "A collision domain is the set of systems that could cause a collision if they transmitted at the same time. Systems outside a collision domain cannot cause a collision if they send at the same time. This is important, as the number of systems in a collision domain increases the likelihood of network congestion due to an increase in collisions. A broadcast domain is the set of systems that can receive a broadcast from each other. A subnet is a logical division of a network, while a supernet is made up of two or more networks.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Sarah is manually reviewing a packet capture of TCP traffic and finds that a system is setting the RST flag in the TCP packets it sends repeatedly during a short period of time. What does this flag mean in the TCP packet header?",
    "options": [
      "RST flags mean “Rest.” The server needs traffic to briefly pause.",
      "RST flags mean “Relay-set.” The packets will be forwarded to the address set in the packet.",
      "RST flags mean “Resume Standard.” Communications will resume in their normal format.",
      "RST means “Reset.” The TCP session will be disconnected."
    ],
    "correctAnswer": ["RST means “Reset.” The TCP session will be disconnected."],
    "explanation": "The RST flag is used to reset or disconnect a session. It can be resumed by restarting the connection via a new three-way handshake.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Gary is deploying a wireless network and wants to deploy the fastest possible wireless technology. Which one of the following wireless networking standards should he use?",
    "options": [
      "802.11ac",
      "802.11g",
      "802.11n",
      "802.11ax"
    ],
    "correctAnswer": ["802.11ax"],
    "explanation": "He should choose 802.11ax, which supports theoretical speeds up to 9.6 Gbps. 802.11ac supports up to 5.9 Gbps, 802.11n supports up to 600 Mbps, and 802.11g is only capable up to 54 Mbps.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Michele wants to replace FTP traffic with a secure replacement. What secure protocol should she select instead?",
    "options": [
      "TFTP",
      "HFTPS",
      "SecFTP",
      "SFTP"
    ],
    "correctAnswer": ["SFTP"],
    "explanation": "Both FTP/S and SFTP are commonly used as replacement insecure FTP services. SFTP offers the advantage of using SSH for transfers, making it easy to use existing firewall rules. TFTP is trivial FTP, an insecure quick transfer method often used to transfer files for network devices, among other uses. HFTPS and SecFTP were made up for this question.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jake has been told that there is a layer 3 problem with his network. Which of the following is associated with layer 3 in the OSI model?",
    "options": [
      "IP addresses",
      "TCP and UDP protocols",
      "MAC addresses",
      "Sending and receiving bits via hardware"
    ],
    "correctAnswer": ["IP addresses"],
    "explanation": "The Network layer, or layer 3, uses IP addresses for logical addressing. TCP and UDP protocols are used at the Transport layer, which is layer 4. Hardware addresses are used at layer 2, the Data Link layer, and sending and receiving bits via hardware is done at the Physical layer (layer 1).",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Frank is responsible for ensuring that his organization has reliable, supported network hardware. Which of the following is not a common concern for network administrators as they work to ensure their network continues to be operational?",
    "options": [
      "If the devices have vendor support",
      "If the devices are under warranty",
      "If major devices support redundant power supplies",
      "If all devices support redundant power supplies"
    ],
    "correctAnswer": ["If all devices support redundant power supplies"],
    "explanation": "Most networks include many edge devices like wireless access points and edge switches. These devices often have a single power supply to balance cost against reliability and will simply be replaced if they fail. More critical devices like routers and core switches are typically equipped with redundant power supplies to ensure that larger segments of the network do not fail if a component fails. Of course, making sure devices are supported so they get updates and that they are under warranty are both common practices for supportable networks.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Brian is analyzing his network traffic and is focused on the variance of the delay between packets of data that are sent between two of his sites. What is he analyzing?",
    "options": [
      "Latency",
      "Jitter",
      "Throughput",
      "Signal-to-noise ratio"
    ],
    "correctAnswer": ["Jitter"],
    "explanation": "Brian is analyzing the jitter, which is the variance in delay between packets. This can indicate issues along the path the packets take. Latency is the time it takes a packet to reach its destination, throughput is a measure of the volume of traffic that can be sent, and signal to noise ratios compare the amount of desired information that is received versus the level of background noise or unwanted data.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which one of the following protocols is commonly used to provide back-end authentication services for a VPN?",
    "options": [
      "HTTPS",
      "RADIUS",
      "ESP",
      "AH"
    ],
    "correctAnswer": ["RADIUS"],
    "explanation": "The Remote Access Dial In User Service (RADIUS) protocol was originally designed to support dial-up modem connections but is still commonly used for VPN-based authentication. HTTPS is not an authentication protocol. ESP and AH are IPsec protocols but do not provide authentication services for other systems.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Isaac wants to ensure that his VoIP session initialization is secure. What protocol should he ensure is enabled and required?",
    "options": [
      "SVOIP",
      "PBSX",
      "SIPS",
      "SRTP"
    ],
    "correctAnswer": ["SIPS"],
    "explanation": "SIPS, the secure version of the Session Initialization Protocol for VoIP, adds TLS encryption to keep the session initialization process secure. SVOIP and PBSX are not real protocols, but SRTP is the secure version of RTP, the Real time Transport Protocol.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": " What type of firewall design is shown in the diagram?",
    "options": [
      "A single-tier firewall",
      "A two-tier firewall",
      "A three-tier firewall",
      "A four-tier firewall"
    ],
    "correctAnswer": ["A two-tier firewall"],
    "explanation": "The firewall in the diagram has two protected zones behind it, making it a two-tier firewall design.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": " If the VPN grants remote users the same access to network and system resources as local workstations have, what security issue should Chris raise?",
    "options": [
      "VPN users will not be able to access the web server.",
      "There is no additional security issue; the VPN concentrator's logical network location matches the logical network location of the workstations.",
      "Web server traffic is not subjected to stateful inspection.",
      "VPN users should only connect from managed PCs."
    ],
    "correctAnswer": ["VPN users should only connect from managed PCs."],
    "explanation": "Segmentation is a critical concept for network designers. Remote PCs that connect to a protected network need to comply with security settings and standards that match those required for the internal network. The VPN concentrator logically places remote users in the protected zone behind the firewall, but that means user workstations (and users) must be trusted in the same way that local workstations are.",
    "domain": "Communication and Network Security",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Chris wants to implement security controls in his data center at the level of individual services and workloads. He plans to use firewall rules and other controls as well as on-demand access to services as part of his security design. What design concept is he implementing?",
    "options": [
      "Converged protocols",
      "Physical segmentation",
      "Edge network-based design",
      "Micro-segmentation"
    ],
    "correctAnswer": ["Micro-segmentation"],
    "explanation": "Micro-segmentation is used to logically separate systems and services by defining boundaries between them. This is often part of a zero trust architecture including the use of on-demand access to services. Converged protocols implement other protocols over another protocol like iSCSI or InfiniBand over Ethernet. Physical segmentation uses separate physical devices and infrastructure to provide segmentation. Edge networks place computation and storage closer to the end user.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "As part of his segmentation approach, Chris also wants to segment network routes. What type of solution should he select?",
    "options": [
      "VPCs",
      "VRF",
      "VLANs",
      "A CDN"
    ],
    "correctAnswer": ["VRF"],
    "explanation": "Virtual routing and forwarding (VRF) is used to allow multiple routing tables to exist in a virtual router, all working simultaneously as defined by network traffic rules. A VPC may include VRF capabilities, but VRF would still be required to complete this requirement. VLANs are used to separate network segments, not to provide routing, and a content distribution network is used to provide high-performance, denial-of-service-resistant content replication and access from a large-scale network of replicas.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ben has configured his network to not broadcast an SSID. Why might Ben disable SSID broadcast, and how could his SSID be discovered?",
    "options": [
      "Disabling SSID broadcast prevents attackers from discovering the encryption key. The SSID can be recovered from decrypted packets.",
      "Disabling SSID broadcast hides networks from unauthorized personnel. The SSID can be discovered using a wireless sniffer.",
      "Disabling SSID broadcast prevents issues with beacon frames. The SSID can be recovered by reconstructing the BSSID.",
      "Disabling SSID broadcast helps avoid SSID conflicts. The SSID can be discovered by attempting to connect to the network."
    ],
    "correctAnswer": ["Disabling SSID broadcast hides networks from unauthorized personnel. The SSID can be discovered using a wireless sniffer."],
    "explanation": "Disabling SSID broadcast can help prevent unauthorized personnel from attempting to connect to the network. Since the SSID is still active, it can be discovered by using a wireless sniffer. Encryption keys are not related to SSID broadcast, beacon frames are used to broadcast the SSID, and it is possible to have multiple networks with the same SSID.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Chuck is in charge of a commercial data center that handles many customers who host their servers there. He wants to be able to configure his data center network to adjust to traffic pattern changes and to manage bandwidth and other options. What technology should he implement to allow central, programmatic control of his network?",
    "options": [
      "SDN",
      "SD-WAN",
      "Proxy routing",
      "Agile networking"
    ],
    "correctAnswer": ["SDN"],
    "explanation": "Software-defined networking (SDN) uses code to configure and control the network. This allows for agile, programmatic control and configuration as needed from a central control point. SD-WAN provides the same sort of control for wide area network links, which aren't mentioned in this question. Proxy routing occurs when a proxy server routes traffic between clients and other systems, and agile networking is not a commonly used term.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Susan wants to access her company's SAN via Ethernet and knows that she can access it as a block-level storage device. What converged protocol is she most likely to use?",
    "options": [
      "CXL",
      "SDWAN",
      "iSCSI",
      "Zigbee"
    ],
    "correctAnswer": ["iSCSI"],
    "explanation": "iSCSI is a converged protocol that supports SCSI storage access via Ethernet. CXL is Compute Express Link, often used to interconnect memory, CPUs, and accelerators. SD-WAN is a software-defined wide area network, and Zigbee is a low-power wireless protocol.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Melissa wants to leverage a cloud service provider's edge services. What will peering allow her to do in this scenario?",
    "options": [
      "Ensure that a copy of any data stored in the cloud is also replicated in her local data center.",
      "Provide a direct path from her on-premises network to the cloud provider's services.",
      "Control traffic flows via software-defined routes.",
      "Host copies of her sites at multiple locations hosted by her cloud computing service provider."
    ],
    "correctAnswer": ["Provide a direct path from her on-premises network to the cloud provider's services."],
    "explanation": "Peering allows you to connect directly to a provider's network at a peering location where they provide edge facilities. This can reduce ingress/egress costs as well as provide direct paths to their networks and services. Replication of data is not an artifact of or a result of peering. Controlling traffic flows via software-defined routes is done using SD-WAN, and hosting copies of sites at multiple locations is a typical result of using a CDN.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jake wants to describe traffic sent between servers in his data center. What common terminology should he use to describe this?",
    "options": [
      "North/South",
      "Privilege/Unprivileged",
      "East/West",
      "Store/Forward"
    ],
    "correctAnswer": ["East/West"],
    "explanation": "Traffic sent between systems in the same data center is called east/west traffic since it does not flow across network boundaries. Traffic that is external to the data center, either inbound or outbound, is called north/south traffic. Privileged/unprivileged and store/forward are not typically used to describe the traffic flows in the question.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "During a security assessment, Jim discovers that the organization he is working with uses a multilayer protocol to handle SCADA systems and recently connected the SCADA network to the rest of the organization's production network. What concern should he raise about serial data transfers carried via TCP/IP?",
    "options": [
      "SCADA devices that are now connected to the network can be attacked over the network.",
      "Serial data over TCP/IP cannot be encrypted.",
      "Serial data cannot be carried in TCP packets.",
      "TCP/IP's throughput can allow for easy denial-of-service attacks against serial devices."
    ],
    "correctAnswer": ["SCADA devices that are now connected to the network can be attacked over the network."],
    "explanation": "Multilayer protocols like Distributed Network Protocol (DNP3) allow SCADA and other systems to use TCP/IP-based networks to communicate. Many SCADA devices were never designed to be exposed to a network, and adding them to a potentially insecure network can create significant risks. TLS or other encryption can be used on TCP packets, meaning that even serial data can be protected. Serial data can be carried via TCP packets because TCP packets don't care about their content; it is simply another payload. Finally, TCP/IP does not have a specific throughput as designed, so issues with throughput are device-level issues.",
    "domain": "Communication and Network Security",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ben provides networking and security services for a small chain of coffee shops. The coffee shop chain wants to provide secure, free wireless for customers. Which of the following is the best option available to Ben to allow customers to connect securely to his wireless network without needing a user account if Ben does not need to worry about protocol support issues?",
    "options": [
      "Use WPA2 in PSK mode.",
      "Use WPA3 in SAE mode.",
      "Use WPA2 in Enterprise mode.",
      "Use a captive portal."
    ],
    "correctAnswer": ["Use WPA3 in SAE mode."],
    "explanation": "WPA3's simultaneous authentication of equals (SAE) mode improves on WPA2's pre-shared key (PSK) mode by allowing for secure authentication between clients and the wireless network without enterprise user accounts. If Ben needed to worry about support for WPA3, which may not be available to all systems that may want to connect, he might have to choose WPA2. A captive portal is often used with open guest networks but requires additional work to maintain, and Enterprise mode requires user accounts.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alicia's company has implemented multifactor authentication using SMS messages to provide a numeric code. What is the primary security concern that Alicia may want to express about this design?",
    "options": [
      "SMS messages are not encrypted.",
      "SMS messages can be spoofed by senders.",
      "SMS messages may be received by more than one phone.",
      "SMS messages may be stored on the receiving phone."
    ],
    "correctAnswer": ["SMS messages are not encrypted."],
    "explanation": "SMS messages are not encrypted, meaning that they could be sniffed and captured. While using two factors is more secure than a single factor, SMS is one of the less secure ways to implement two-factor authentication because of this. SMS messages can be spoofed, can be received by more than one phone, and are typically stored on the recipient's phone. The primary threat here, however, is the unencrypted message itself.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What speed and frequency range are used by 802.11ac?",
    "options": [
      "5 GHz only",
      "900 MHz and 2.4 GHz",
      "2.4 GHz and 5 GHz",
      "2.4 GHz only"
    ],
    "correctAnswer": ["5 GHz only"],
    "explanation": "802.11ac operates in the 5 GHz range. The 900 MHz range has frequently been used for phones and non-Wi-Fi wireless networks as well as other amateur radio uses, and 2.4 GHz is used by 802.11n and other protocols. Knowing that multiple ranges are available and that they may behave differently based on how many access points are in use and whether other devices that may cause interference on that band are in the area can be important for wireless network deployments.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "The Address Resolution Protocol (ARP) and the Reverse Address Resolution Protocol (RARP) operate at what layer of the OSI model?",
    "options": [
      "Layer 1",
      "Layer 2",
      "Layer 3",
      "Layer 4"
    ],
    "correctAnswer": ["Layer 2"],
    "explanation": "ARP and RARP operate at the Data Link layer, the second layer of the OSI model. Both protocols deal with physical hardware addresses, which are used above the Physical layer (layer 1) and below the Network layer (layer 3), thus falling at the Data Link layer.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which of the following is a converged protocol that allows storage mounts over TCP, and which is frequently used as a lower-cost alternative to Fibre Channel?",
    "options": [
      "MPLS",
      "SDN",
      "VoIP",
      "iSCSI"
    ],
    "correctAnswer": ["iSCSI"],
    "explanation": "Internet Small Computer Systems Interface (iSCSI) is a converged protocol that allows location-independent file services over traditional network technologies. It costs less than traditional Fibre Channel. VoIP is Voice over IP, SDN is software-defined networking, and MPLS is Multiprotocol Label Switching, a technology that uses path labels instead of network addresses.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Chris is building an Ethernet network and knows that he needs to span a distance of more than 150 meters with his 1000BaseT network. What network technology should he use to help with this?",
    "options": [
      "Install a repeater, a switch, or a concentrator before 100 meters.",
      "Use Category 7 cable, which has better shielding for higher speeds.",
      "Install a gateway to handle the distance.",
      "Use STP cable to handle the longer distance at high speeds."
    ],
    "correctAnswer": ["Install a repeater, a switch, or a concentrator before 100 meters."],
    "explanation": "A repeater, switch, or concentrator will amplify the signal, ensuring that the 100-meter distance limitation of 1000BaseT is not an issue. A gateway would be useful if network protocols were changing, while Cat7 cable is appropriate for a 10 Gbps network at much shorter distances. STP cable is limited to 155 Mbps and 100 meters, which would leave Chris with network problems.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": " What protocol is the messaging traffic most likely to use based on the diagram?",
    "options": [
      "SLACK",
      "HTTP",
      "SMTP",
      "HTTPS"
    ],
    "correctAnswer": ["HTTP"],
    "explanation": "The use of TCP port 80 indicates that the messaging service is using the HTTP protocol. Slack is a messaging service that runs over HTTPS, which uses port 443. SMTP is an email protocol that uses port 25.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": " What security concern does sending internal communications from workstation A to external system B raise?",
    "options": [
      "The firewall does not protect system B.",
      "System C can see the broadcast traffic from system A to B.",
      "It is traveling via an unencrypted protocol.",
      "Messaging does not provide nonrepudiation."
    ],
    "correctAnswer": ["It is traveling via an unencrypted protocol."],
    "explanation": "HTTP traffic is typically sent via TCP80. Unencrypted HTTP traffic can be easily captured at any point between A and B, meaning that the messaging solution chosen does not provide confidentiality for the organization's corporate communications.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": " How could Selah's company best address a desire for secure messaging for users of internal systems A and C?",
    "options": [
      "Use a third-party messaging service.",
      "Implement and use a locally hosted service.",
      "Use HTTPS.",
      "Discontinue use of messaging and instead use email, which is more secure."
    ],
    "correctAnswer": ["Implement and use a locally hosted service."],
    "explanation": "If a business need requires messaging, using a local messaging server is the best option. This prevents traffic from traveling to a third-party server and can offer additional benefits such as logging, archiving, and control of security options like the use of encryption.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which of the following drawbacks is a concern when multilayer protocols are allowed?",
    "options": [
      "A range of protocols may be used at higher layers.",
      "Covert channels are allowed.",
      "Filters cannot be bypassed.",
      "Encryption can't be incorporated at multiple layers."
    ],
    "correctAnswer": ["Covert channels are allowed."],
    "explanation": "Multilayer protocols create three primary concerns for security practitioners: they can conceal covert channels (and thus covert channels are allowed), filters can be bypassed by traffic concealed in layered protocols, and the logical boundaries put in place by network segments can be bypassed under some circumstances. Multilayer protocols allow encryption at various layers and support a range of protocols at higher layers.",
    "domain": "Communication and Network Security",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which of the following is not an example of a converged protocol?",
    "options": [
      "MIME",
      "FCoE",
      "iSCSI",
      "VoIP"
    ],
    "correctAnswer": ["MIME"],
    "explanation": "Fibre Channel over Ethernet (FCoE), Internet Small Computer Systems Interface (iSCSI), and Voice over Internet Protocol (VoIP) are all examples of converged protocols that combine specialized protocols with standard protocols like TCP/IP. Multipurpose Internet Mail Extensions (MIIME) is not a converged protocol.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Chris uses a cellular hot spot to provide Internet access when he is traveling. If he leaves the hot spot connected to his PC while his PC is on his organization's corporate network, what security issue might he cause?",
    "options": [
      "Traffic may not be routed properly, exposing sensitive data.",
      "His system may act as a bridge from the Internet to the local network.",
      "His system may be a portal for a reflected DDoS attack.",
      "Security administrators may not be able to determine his IP address if a security issue occurs."
    ],
    "correctAnswer": ["His system may act as a bridge from the Internet to the local network."],
    "explanation": "When a workstation or other device is connected simultaneously to both a secure network and a nonsecure network like the Internet, it may act as a bridge, bypassing the security protections located at the edge of a corporate network. It is unlikely that traffic will be routed improperly, leading to the exposure of sensitive data, as traffic headed to internal systems and networks is unlikely to be routed to the external network. Reflected DDoS attacks are used to hide identities rather than to connect through to an internal network, and security administrators of managed systems should be able to determine both the local and wireless IP addresses his system uses.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Sarah has been asked to improve the observability of her network. Which of the following is not a common step to improve observability?",
    "options": [
      "Aggregate and centralize data.",
      "Enable alerts for critical errors.",
      "Implement logging using a standardized format.",
      "Avoid feedback loops."
    ],
    "correctAnswer": ["Avoid feedback loops."],
    "explanation": "Observability focuses on the ability to see how an entire system, service, or environment is performing and behaving based on its external outputs. That means that telemetry data—information about what components are doing—is critical and will be gathered using logs, metrics, and real-time analysis. This means that centralizing and aggregating data, enabling alerts for critical errors, and implementing logging using standardized formats are all common practices. Feedback loops are also important, allowing administrators and others to take action when problems or issues are detected.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What features can IPsec provide for secure communication?",
    "options": [
      "Encryption, access control, nonrepudiation, and message authentication",
      "Protocol convergence, content distribution, micro-segmentation, and network virtualization",
      "Encryption, authorization, nonrepudiation, and message integrity checking",
      "Micro-segmentation, network virtualization, encryption, and message authentication"
    ],
    "correctAnswer": ["Encryption, access control, nonrepudiation, and message authentication"],
    "explanation": "IPsec can provide encryption, access control, nonrepudiation, and message authentication using public key cryptography. It does not provide authorization, protocol convergence, content distribution, or the other items listed.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Casey has been asked to determine if Zigbee network traffic can be secured in transit. What security mechanism does Zigbee use to protect data traffic?",
    "options": [
      "3DES encryption",
      "AES encryption",
      "ROT13 encryption",
      "Blowfish encryption"
    ],
    "correctAnswer": ["AES encryption"],
    "explanation": "Zigbee uses AES to protect network traffic, providing integrity and confidentiality controls. It does not use 3DES, and ROT13 is a simple rotational cipher you might find in a cereal box or secret decoder ring.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Sue modifies her MAC address to one that is allowed on a network that uses MAC filtering to provide security. What is the technique Sue used, and what nonsecurity issue could her actions cause?",
    "options": [
      "Broadcast domain exploit, address conflict",
      "Spoofing, token loss",
      "Spoofing, address conflict",
      "Sham EUI creation, token loss"
    ],
    "correctAnswer": ["Spoofing, address conflict"],
    "explanation": "The process of using a fake Media Access Control (MAC) address is called spoofing, and spoofing a MAC address already in use on the network can lead to an address collision, preventing traffic from reaching one or both systems. Tokens are used in token ring networks, which are outdated, and EUI refers to an Extended Unique Identifier, another term for MAC address, but token loss is still not the issue. Broadcast domains refer to the set of machines a host can send traffic to via a broadcast message.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Joanna wants to deploy 4G LTE as an out-of-band management solution for devices at remote sites. Which of the following security capabilities is not commonly available from 4G service providers?",
    "options": [
      "Encryption capabilities",
      "Device-based authentication",
      "Dedicated towers and antennas for secure service subscribers",
      "SIM-based authentication"
    ],
    "correctAnswer": ["Dedicated towers and antennas for secure service subscribers"],
    "explanation": "While security features vary from provider to provider, encryption, device-based authentication (for example, using certificates), and SIM-based authentication are all common options for 4G connectivity solutions. Joanna should work with her provider to determine what capabilities are available and assess whether they meet her needs.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "SMTP, HTTP, and SNMP all occur at what layer of the OSI model?",
    "options": [
      "Layer 4",
      "Layer 5",
      "Layer 6",
      "Layer 7"
    ],
    "correctAnswer": ["Layer 7"],
    "explanation": "Application-specific protocols are handled at layer 7, the Application layer of the OSI model.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Mark's organization hosts their infrastructure in a cloud IaaS environment. They operate in a private, isolated, and secure cloud that they configure. What term best describes this?",
    "options": [
      "VLAN",
      "VPC",
      "SDN",
      "CXL"
    ],
    "correctAnswer": ["VPC"],
    "explanation": "AVPC, or virtual private cloud, is the environment many organizations operate inside of public clouds. They provide on-demand access to configurable, shared resources operated by the cloud provider inside of their isolated boundaries. VLANs are used to logically separate networks; SDN is software-defined networking, which is typically part of how a VPC is implemented; and CXL, or Compute Express Link, is a converged protocol used to connect CPUs, GPUs, accelerators, and other components at high speeds.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Selah wants to provide port-based authentication on her network to ensure that clients must authenticate before using the network. What technology is an appropriate solution for this requirement?",
    "options": [
      "802.11a",
      "802.3",
      "802.15.1",
      "802.1x"
    ],
    "correctAnswer": ["802.1x"],
    "explanation": "802.1x provides port-based authentication and can be used with technologies like the Extensible Authentication Protocol (EAP). 802.11a is a wireless standard, 802.3 is the standard for Ethernet, and 802.15.1 was the original Bluetooth IEEE standard.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ben has deployed a 1000BaseT gigabit network and needs to run a cable across a large building. If Ben is running his link directly from a switch to another switch in that building, what is the maximum distance Ben can cover according to the 1000BaseT specification?",
    "options": [
      "2 kilometers",
      "500 meters",
      "185 meters",
      "100 meters"
    ],
    "correctAnswer": ["100 meters"],
    "explanation": "1000BaseT is capable of a 100-meter run according to its specifications. For longer distances and exterior runs, a fiber-optic cable is typically used in modern networks.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What security control does MAC cloning attempt to bypass for wired networks?",
    "options": [
      "Port security",
      "VLAN hopping",
      "802.1q trunking",
      "Etherkiller prevention"
    ],
    "correctAnswer": ["Port security"],
    "explanation": "Port security prevents unrecognized or unpermitted systems from connecting to a network port based on their MAC address. Cloning a permitted or legitimate MAC address attempts to bypass this. VLAN hopping and 802.1q trunking attacks attempt to access other subnets by encapsulating packets so they will be unwrapped and directed to the other subnet. Etherkiller prevention is not a security setting or control.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "The company that Kathleen works for has moved to remote work for most employees and wants to ensure that the multimedia collaboration platform that they use for voice, video, and text-based collaboration is secure. Which of the following security options will provide the best user experience while providing appropriate security for communications?",
    "options": [
      "Require software-based VPN to the corporate network for all use of the collaboration platform.",
      "Require the use of SIPS and SRTP for all communications.",
      "Use TLS for all traffic for the collaboration platform.",
      "Deploy secure VPN endpoints to each remote location and use a point-to-point VPN for communications."
    ],
    "correctAnswer": ["Use TLS for all traffic for the collaboration platform."],
    "explanation": "Most modern applications support TLS throughout their communications allowing clients to securely connect to the service and to encrypt communications. VPN, either in software or hardware form, will be more complex and unwieldy. Software-based VPN would be more flexible, and hardware-based VPN would be more expensive and more complex. SIPS and SRTP are appropriate for a VoIP environment but are not generally a complete solution for a modern multimedia collaboration platform like Microsoft Teams, Zoom, or WebEx.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Chris wants to use a low-power, personal area network (PAN) wireless protocol for a device he is designing. Which of the following wireless protocols is best suited to creating small, low-power devices that can connect to each other at relatively short distances across buildings or rooms?",
    "options": [
      "Wi-Fi",
      "Zigbee",
      "NFC",
      "Infrared"
    ],
    "correctAnswer": ["Zigbee"],
    "explanation": "Zigbee is designed for this type of low-power, Internet of Things network, and would be the best option for Chris. Some versions of Bluetooth are designed to operate in low-power mode as well, but Bluetooth isn't in this list of answers. Wi-Fi requires more power, NFC is very short range and would not work across a building or room, and infrared requires line of sight and is rarely used for that reason.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Olga wants to provide out-of-band management for her SCADA devices, which are deployed across her organization's large physical infrastructure in multiple distinct production facilities. Which of the following is an appropriate solution to meet her needs?",
    "options": [
      "Administrative access via a web client installed on each system that requires Windows-based domain authentication",
      "Administrative access via nonstandard ports using a secure protocol like SSH",
      "Administrative access via a second, physically separate Ethernet network with access controlled via VPN and multifactor authentication",
      "Administrative access via physical access to the devices when needed"
    ],
    "correctAnswer": ["Administrative access via a second, physically separate Ethernet network with access controlled via VPN and multifactor authentication"],
    "explanation": "Separate, physically isolated Ethernet networks that require strong authentication are a commonly used out-of-band (OOB) option. While direct physical access is also an acceptable out-of-band option, it does not work well in a complex, production-oriented environment where devices may not be safe or easy to access. Web clients and nonstandard ports are not out-of-band options as described.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Cameron is worried about distributed denial-of-service attacks against his company's primary web application. Which of the following options will provide the most resilience against large-scale DDoS attacks?",
    "options": [
      "A CDN",
      "Increasing the number of servers in the web application server cluster",
      "Contract for DDoS mitigation services via the company's ISP",
      "Increasing the amount of bandwidth available from one or more ISPs"
    ],
    "correctAnswer": ["A CDN"],
    "explanation": "A content delivery network run by a major provider can handle large-scale DDoS attacks more easily than any of the other solutions. Using DDoS mitigation techniques via an ISP is the next most useful capability, followed by both increases in bandwidth and increases in the number of servers in the web application cluster.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "There are four common VPN protocols. Which group listed contains all of the common VPN protocols?",
    "options": [
      "PPTP, LTP, L2TP, IPsec",
      "PPP, L2TP, IPsec, VNC",
      "PPTP, L2F, L2TP, IPsec",
      "PPTP, L2TP, IPsec, SPAP"
    ],
    "correctAnswer": ["PPTP, L2F, L2TP, IPsec"],
    "explanation": "PPTP, L2F, L2TP, and IPsec are the most common VPN protocols. TLS is also used for an increasingly large percentage of VPN connections and may appear at some point in the CISSP exam. PPP is a dial-up protocol, LTP is not a protocol, and SPAP is the Shiva Password Authentication Protocol sometimes used with PPTP.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Wayne wants to deploy a secure voice communication network. Which of the following techniques should he consider? (Select all that apply.)",
    "options": [
      "Use a dedicated VLAN for VoIP phones and devices.",
      "Require the use of SIPS and SRTP.",
      "Require the use of VPN for all remote VoIP devices.",
      "Implement a VoIP IPS."
    ],
    "correctAnswer": ["Use a dedicated VLAN for VoIP phones and devices.", "Require the use of SIPS and SRTP."],
    "explanation": "Wayne should consider the use of a dedicated VLAN for VoIP devices to help separate them from other networked devices, and he should also require the use of SIPS and SRTP, both secure protocols that will keep his VoIP traffic encrypted. Requiring the use of VPN for all remote VoIP devices is not necessary if SIPS and SRTP are in use, and a specific IPS for VoIP is not a typical deployment in most organizations.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null,
    "questionType": "multi-response"
  },
  {
    "text": "Which OSI layer includes electrical specifications, protocols, and interface standards?",
    "options": [
      "The Transport layer",
      "The Device layer",
      "The Physical layer",
      "The Data Link layer"
    ],
    "correctAnswer": ["The Physical layer"],
    "explanation": "The Physical layer includes electrical specifications, protocols, and standards that allow control of throughput, handling line noise, and a variety of other electrical interface and signaling requirements. The OSI layer doesn't have a Device layer. The Transport layer connects the Network and Session layers, and the Data Link layer packages packets from the network layer for transmission and receipt by devices operating on the Physical layer.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ben is designing a Wi-Fi network and has been asked to choose the most secure option for the network. Which wireless security standard should he choose?",
    "options": [
      "WPA2",
      "WPA",
      "WEP",
      "WPA3"
    ],
    "correctAnswer": ["WPA3"],
    "explanation": "WPA3, the replacement for WPA2, adds security features including a new mode called simultaneous authentication of equals that replaces the pre-shared key mode from WPA2 with a more secure option. Overall, it provides security improvements but may not be immediately implemented due to time for hardware and software to fully support it. WPA2 has been the most commonly deployed wireless security standard having replaced WPA and WEP.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What mode of switching is best suited to low-latency, high-throughput data transfer?",
    "options": [
      "Store-and-forward switching",
      "Blind switching",
      "Forward switching",
      "Cut-through switching"
    ],
    "correctAnswer": ["Cut-through switching"],
    "explanation": "Cut-through switching forwards packets as soon as the destination address is known without waiting for the rest of the frame to arrive. This means that packets are not checked for integrity before being forwarded, optimizing throughput and reducing latency at the expense of error checking. Store-and-forward waits for the entire frame to allow it to be checked using a cyclic redundancy check (CRC) before forwarding it. Blind and forward switching were made up for this question.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Segmentation, sequencing, and error checking all occur at what layer of the OSI model that is associated with SSL, TLS, and UDP?",
    "options": [
      "The Transport layer",
      "The Network layer",
      "The Session layer",
      "The Presentation layer"
    ],
    "correctAnswer": ["The Transport layer"],
    "explanation": "The Transport layer provides logical connections between devices, including end-to-end transport services to ensure that data is delivered. Transport layer protocols include TCP, UDP, SSL, and TLS.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "The Windows ipconfig command displays the following information: BC-5F-F4-7B-4B-7D. What term describes this, and what information can usually be gathered from it?",
    "options": [
      "The IP address, the network location of the system",
      "The MAC address, the network interface card's manufacturer",
      "The MAC address, the media type in use",
      "The IPv6 client ID, the network interface card's manufacturer"
    ],
    "correctAnswer": ["The MAC address, the network interface card's manufacturer"],
    "explanation": "Machine Access Control (MAC) addresses are the hardware address the machine uses for layer 2 communications. The MAC addresses include an organizationally unique identifier (OUI), which identifies the manufacturer. MAC addresses can be changed, so this is not a guarantee of accuracy, but under normal circumstances you can tell what manufacturer made the device by using the MAC address.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Chris wants to ensure that traffic sent via his backhaul networks provided by third-party telecom providers is secure. Which of the following options is best suited to ensuring that all traffic sent through the connection is secure?",
    "options": [
      "Use TLS for all web services.",
      "Use an on-demand, client-based VPN.",
      "Use a point-to-point VPN.",
      "Tunnel traffic via SSH."
    ],
    "correctAnswer": ["Use a point-to-point VPN."],
    "explanation": "For long-term connections like backhaul networks, a point-to-point VPN that is connected at all times is the most common choice to ensure all traffic is secured. TLS and SSH are commonly used to tunnel data but require additional attention to ensure that all traffic is tunneled. On-demand VPNs are more commonly used by users than for a connection like a backhaul network link.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ben is troubleshooting a network and discovers that the NAT router he is connected to has the 192.168.x.x subnet as its internal network and that its external IP is 192.168.1.40. What problem is he encountering?",
    "options": [
      "192.168.x.x is a nonroutable network and will not be carried to the Internet.",
      "192.168.1.40 is not a valid address because it is reserved by RFC 1918.",
      "Double NATing is not possible using the same IP range.",
      "The upstream system is unable to de-encapsulate his packets, and he needs to use PAT instead."
    ],
    "correctAnswer": ["Double NATing is not possible using the same IP range."],
    "explanation": "Double NATing isn't possible with the same IP range; the same IP addresses cannot appear inside and outside a NAT router. RFC 1918 addresses are reserved, but only so they are not used and routable on the Internet, and changing to PAT would not fix the issue.",
    "domain": "Communication and Network Security",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What is the default subnet mask for a Class B network?",
    "options": [
      "255.0.0.0",
      "255.255.0.0",
      "255.254.0.0",
      "255.255.255.0"
    ],
    "correctAnswer": ["255.255.0.0"],
    "explanation": "A Class B network holds 2^16 systems, and its default network mask is 255.255.0.0.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Kim wants to protect her Zoom meetings from Zoom bombing. What security option should she enable?",
    "options": [
      "Require HTTPS connections.",
      "Turn on the waiting room.",
      "Randomize meeting links.",
      "Require a meeting passcode."
    ],
    "correctAnswer": ["Turn on the waiting room."],
    "explanation": "Enabling waiting rooms allows hosts to allow only intended attendees for events and meetings. Unfortunately, passcodes are easily shared, resulting in Zoom bombing despite the security they appear to offer. Meeting links are automatically generated and randomized, preventing brute forcing, and HTTPS is enabled by default for meetings.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Olivia wants to use a network fault management tool that can provide real-time fault detection. What capabilities are most commonly associated with this type of monitoring?",
    "options": [
      "SNMP and ICMP-based monitoring and diagnostic data retrieval",
      "Netflow and syslog-based monitoring",
      "SNMP and Netflow-based monitoring",
      "ICMP and syslog-based monitoring"
    ],
    "correctAnswer": ["SNMP and ICMP-based monitoring and diagnostic data retrieval"],
    "explanation": "Real-time fault monitoring for network devices and connections often relies on SNMP and ICMP-based monitoring capabilities. Netflow and syslog are more commonly used for diagnostic and analysis tasks.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Selah's organization has deployed VoIP phones on the same switches that the desktop PCs are on. What security issue could this create, and what solution would help?",
    "options": [
      "VLAN hopping; use physically separate switches.",
      "VLAN hopping; use encryption.",
      "Caller ID spoofing; MAC filtering.",
      "Denial-of-service attacks; use a firewall between networks."
    ],
    "correctAnswer": ["VLAN hopping; use physically separate switches."],
    "explanation": "VLAN hopping between the voice and computer VLANs can be accomplished when devices share the same switch infrastructure. Using physically separate switches can prevent this attack. Encryption won't help with VLAN hopping because it relies on header data that the switch needs to read (and this is unencrypted), while Caller ID spoofing is an inherent problem with VoIP systems. A denial of service is always a possibility, but it isn't specifically a VoIP issue, and a firewall may not stop the problem if it's on a port that must be allowed through.",
    "domain": "Communication and Network Security",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Susan wants to use a set of nonroutable IP addresses for her location's internal network addresses. Using your knowledge of secure network design principles and IP networking, which of the following IP ranges are usable for that purpose? (Select all that apply.)",
    "options": [
      "172.16.0.0/12",
      "192.168.0.0/16",
      "128.192.0.0/24",
      "10.0.0.0/8"
    ],
    "correctAnswer": ["172.16.0.0/12", "192.168.0.0/16", "10.0.0.0/8"],
    "explanation": "RFC 1918 defines three address ranges as private (nonroutable) IP address ranges: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. Any of these would work, but many organizations use the 192.168.0.0/16 range for smaller sites or opt to carve out sections of the 10.0.0.0/8 range for multiple remote sites.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null,
    "questionType": "multi-response"
  },
  {
    "text": "Susan knows that she will need to implement a Wi-Fi network for her customers and wants to gather information about the customers, such as their email address, without having to provide them with a wireless network password or key. What type of solution would provide this combination of features?",
    "options": [
      "NAC",
      "A captive portal",
      "Pre-shared keys",
      "WPA3's SAE mode"
    ],
    "correctAnswer": ["A captive portal"],
    "explanation": "A captive portal is a popular solution that you may be familiar with from hotels and coffee shops. They combine the ability to gather data from customers with an open network, so customer data will not be encrypted. This avoids the need to distribute network passwords but means that customers must ensure their own traffic is encrypted if they are worried about security.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "With her wireless network set up, Susan moves on to ensuring that her network will remain operational even if disruptions occur. What is the simplest way she can ensure that her network devices, including her router, access points, and network switches, stay on if a brownout or other temporary power issue occurs?",
    "options": [
      "Purchase and install a generator with an automatic start.",
      "Deploy dual power supplies for all network devices.",
      "Install UPS systems to cover all network devices that must remain online.",
      "Contract with multiple different power companies for redundant power."
    ],
    "correctAnswer": ["Install UPS systems to cover all network devices that must remain online."],
    "explanation": "A UPS system, or uninterruptible power supply, is designed to provide backup power during brief power disruptions ranging from power sags and brownouts to temporary power failures. For a longer outage, Susan will still want a generator or even a secondary power feed from another power grid or provider if possible, but for this specific scenario, a UPS will meet her needs. Dual power supplies help when the concern is losing power from one power supply and would be a great idea for her most critical network devices, but it is rare to have dual power supplies for edge devices like access points or edge switches.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Susan wants to provide 100 gigabit network connections to devices in the facility where the new branch will operate. What connectivity options does she have for structured wiring that can meet those speeds? (Select all that apply.)",
    "options": [
      "Cat5e",
      "Fiber",
      "Cat6",
      "Coaxial cable"
    ],
    "correctAnswer": ["Fiber"],
    "explanation": "Fiber-optic cable is best suited to running 100 gigabit speeds. Cat5e, Cat6, and coaxial cable are not rated to those speeds.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null,
    "questionType": "multi-response"
  },
  {
    "text": "Data streams occur at what three layers of the OSI model?",
    "options": [
      "Application, Presentation, and Session",
      "Presentation, Session, and Transport",
      "Physical, Data Link, and Network",
      "Data Link, Network, and Transport"
    ],
    "correctAnswer": ["Application, Presentation, and Session"],
    "explanation": "Data streams are associated with the Application, Presentation, and Session layers. Once they reach the Transport layer, they become segments (TCP) or datagrams (UDP). From there, they are converted to packets at the Network layer, frames at the Data Link layer, and bits at the Physical layer.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Lucca wants to protect endpoints that are in production use but that are no longer supported and cannot be patched from network attacks. What should he do to best protect these devices?",
    "options": [
      "Install a firewall on the device.",
      "Disable all services and open ports on the devices.",
      "Place a hardware network security device in front of the devices.",
      "Unplug the devices from the network because they cannot be properly secured."
    ],
    "correctAnswer": ["Place a hardware network security device in front of the devices."],
    "explanation": "If the devices still need to be in production but cannot be patched, Lucca's best option is to use a separate security device to protect them. It may be tempting to simply install a firewall on the device or to disable all the services it exposes to the network, but some devices may not have firewall software available, and even if they do, the underlying operating system may have vulnerabilities in its implementation of its network stack or other software that even a firewall could not protect. Unplugging devices that are needed for protection does not resolve the need to keep them online.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Selah's networking team has been asked to identify a technology that will allow them to separate the routing process for the network from the packet switching process while increasing centralization?",
    "options": [
      "A network that follows the 5-4-3 rule",
      "A converged network",
      "A software-defined network",
      "A hypervisor-based network"
    ],
    "correctAnswer": ["A software-defined network"],
    "explanation": "Software-defined networking provides a network architecture that can be defined and configured as code or software and separates routing processes from packet switching while centralizing control. The 5-4-3 rule is an old design rule for networks that relied on repeaters or hubs. A converged network carries multiple types of traffic like voice, video, and data. A hypervisor-based network may be software defined, but it could also use traditional network devices running as virtual machines.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jason knows that protocols using the OSI model rely on encapsulation as data moves from layer to layer. What is added at each layer as data flows up the OSI layers such as from layer 3 to 4 and layer 4 to 5?",
    "options": [
      "Information is added to the header.",
      "Information is added to the main body of the data.",
      "The data is encrypted with a new secret key.",
      "A security envelope that provides perfect forward secrecy."
    ],
    "correctAnswer": ["Information is added to the header."],
    "explanation": "Encapsulation adds to the header (and sometimes to the footer) of the data provided by the previous layer. The main body of the data is not modified, and encryption may happen but does not always happen.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "During a troubleshooting process, the support technician that Alyssa is talking to states that the problem is a layer 3 problem. Which of the following possible issues is not a layer 3 problem?",
    "options": [
      "A TTL mismatch",
      "An MTU mismatch",
      "An incorrect ACL",
      "A broken network cable"
    ],
    "correctAnswer": ["A broken network cable"],
    "explanation": "A broken network cable is a layer 1 problem. If you encounter a problem like this and aren't sure, look for the answer that has a different situation or set of assumptions. Here you have three questions that occur at the network (layer 3), all of which have software or protocol implications. A broken network cable is a completely different type of issue and should stand out. Be careful, though! The exam is likely to give you two potentially valid answers to choose from, so work to get rid of the two least likely answers and spend your time on the remaining options.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "During a review of her organization's network, Angela discovered that it was suffering from broadcast storms and that contractors, guests, and organizational administrative staff were on the same network segment. What design change should Angela recommend?",
    "options": [
      "Require encryption for all users.",
      "Install a firewall at the network border.",
      "Enable spanning tree loop detection.",
      "Segment the network based on functional requirements."
    ],
    "correctAnswer": ["Segment the network based on functional requirements."],
    "explanation": "Network segmentation can reduce issues with performance as well as diminish the chance of broadcast storms by limiting the number of systems in a segment. This decreases broadcast traffic visible to each system and can reduce congestion. Segmentation can also help provide security by separating functional groups that don't need to be able to access each other's systems. Installing a firewall at the border would only help with inbound and outbound traffic, not cross-network traffic. Spanning tree loop prevention helps prevent loops in Ethernet networks (for example, when you plug a switch into a switch via two ports on each), but it won't solve broadcast storms that aren't caused by a loop or security issues. Encryption might help prevent some problems between functional groups, but it won't stop them from scanning other systems, and it definitely won't stop a broadcast storm!",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Lisa wants to explain the difference between network throughput and bandwidth to her team. Which of the following best describes the difference between the two terms?",
    "options": [
      "Bandwidth describes the number of parallel data channels available to a network, and throughput describes how many can be used at once.",
      "Bandwidth is the maximum amount of data that can be sent via a channel or connection, and throughput is the actual amount of data that is sent via the channel or connection in a given period of time.",
      "Bandwidth and throughput are the same and can be used interchangeably.",
      "Bandwidth is a measure of the amount of data sent over a given period of time, and throughput is the maximum amount of data that could be sent via the channel."
    ],
    "correctAnswer": ["Bandwidth is the maximum amount of data that can be sent via a channel or connection, and throughput is the actual amount of data that is sent via the channel or connection in a given period of time."],
    "explanation": "Bandwidth describes the maximum amount of data that can be sent via a connection or network in a given period of time, and throughput describes the actual amount of traffic that is sent via the network or connection in a given period of time. The terms are not interchangeable but are closely related.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ben is an information security professional at an organization that is replacing its physical servers with cloud-hosted virtual machines. Ben wants to ensure that the instance-to-instance (system-to-system) traffic in his cloud-hosted infrastructure-as-a-service environment is secure. What can he do to fully ensure that the virtualized network traffic is not being captured and analyzed?",
    "options": [
      "Prevent the installation of a packet sniffer on all hosts.",
      "Disable promiscuous mode for all virtual network interfaces.",
      "Disallow the use of any virtual taps.",
      "Encrypt all traffic between hosts."
    ],
    "correctAnswer": ["Encrypt all traffic between hosts."],
    "explanation": "In an IaaS environment, the company that provides the cloud environment has final control of all the virtual machines and networks. Thus, to protect data, the best option is to encrypt the data. Unfortunately, Ben cannot fully ensure that traffic in his environment is not being captured and must rely on the cloud hosting provider for that assurance. While preventing the installation of packet sniffers and taps and ensuring that promiscuous mode cannot be enabled are useful habits in an environment that you control, this will not provide the same control in a cloud environment.",
    "domain": "Communication and Network Security",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "[Image showing a data center network (10.0.0.0/24) connected to a VPC network (10.0.0.0/24)] What issue is most likely to occur due to the subnets configured for the data center and VPC?",
    "options": [
      "IP address conflicts",
      "Routing loops",
      "MAC address conflicts",
      "All of the above"
    ],
    "correctAnswer": ["IP address conflicts"],
    "explanation": "Using the same IP range for an on-site and cloud-hosted data center can be helpful when designing a flat network, but addresses must be carefully managed and allocated even in a space as big as the 10.0.0.0/24 range. If addresses are not properly managed, conflicts may arise that could disrupt production services. MAC address conflicts should not arise unless addresses are manually changed or virtual machines are replicated without changing their MAC addresses. There is nothing in the problem to suggest routing issues.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Ben wants to use multiple Internet service providers (ISPs) to connect to his cloud VPC to ensure reliable access and bandwidth. What technology can he use to manage and optimize those connections?",
    "options": [
      "FCoE",
      "VXLAN",
      "SD-WAN",
      "LiFi"
    ],
    "correctAnswer": ["SD-WAN"],
    "explanation": "A software-defined wide area network, or SD-WAN, is commonly used to manage multiple ISPs and other connectivity options to ensure speed, reliability, and bandwidth design goals are all met. Ben can use SD-WAN capabilities to accomplish his goals to make his hybrid cloud environment successful. Fibre Channel over Ethernet (FCoE) is a storage protocol; VXLAN is used for extensible virtual LANs, not WANs; and LiFi uses visible and infrared light to transfer data.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Traffic entering and leaving a network through a WAN link is often described as what sort of traffic?",
    "options": [
      "Foreign/domestic",
      "North/south",
      "East/west",
      "Trusted/untrusted"
    ],
    "correctAnswer": ["North/south"],
    "explanation": "Traffic entering and leaving a network is often called north/south traffic. East/west traffic is traffic between systems inside of a network. Foreign/domestic is not a commonly used term, and trusted/untrusted cannot be determined without additional information.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What converged protocol is designed to allow high-speed communication to devices like CPUs, GPUs, and accelerators?",
    "options": [
      "CXL",
      "VoIP",
      "CDN",
      "iSCSI"
    ],
    "correctAnswer": ["CXL"],
    "explanation": "CXL, or Compute Express Link, is a converged protocol that is an open standard for high-speed communications with accelerators, GPUs, CPUs, and similar devices. VoIP is a telephony protocol, CDNs are content distribution networks, and iSCSI is a converged storage protocol.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Mark is concerned about the physical security of his network cables. What type of network connection would be the hardest to tap without specialized equipment?",
    "options": [
      "Wi-Fi",
      "Bluetooth",
      "Cat5/Cat6 twisted pair",
      "Fiber optic"
    ],
    "correctAnswer": ["Fiber optic"],
    "explanation": "Fiber-optic cable is the most difficult of the listed types of network to capture data from without specialized equipment. Given access to a fiber-optic cable and specialized equipment to tap it, or with access to the endpoints of a fiber-optic cable and an optical tap, access can still be obtained. In either case, disruption may be observed when the cable is cut, spliced, or disconnected, and many attackers will not have access, skills, or the tools needed to do so. Wi-Fi and Bluetooth traffic can be captured using standard wireless cards and tools, and data carried by twisted-pair Ethernet cables is easily captured using commodity tools.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Rich wants to connect his network to a building a half-mile away from his current location. There are trees and terrain features along the way, but a road passes between the trees to the other location. What type of transmission media is best suited to this type of deployment?",
    "options": [
      "Ethernet cable with repeaters every 200 to 300 yards",
      "A Wi-Fi directional antenna",
      "Fiber-optic cable",
      "A LiFi system"
    ],
    "correctAnswer": ["Fiber-optic cable"],
    "explanation": "Buried fiber-optic cable is best suited to long distances, particularly when there are trees or other obstacles blocking line of sight that may interfere with Wi-Fi or LiFi deployments. Ethernet's distance limitations mean that repeaters would need to be powered, and there is no description of other structures or power along the path.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What challenge is most common for endpoint security system deployments?",
    "options": [
      "Compromises",
      "The volume of data",
      "Monitoring encrypted traffic on the network",
      "Handling non-TCP protocols"
    ],
    "correctAnswer": ["The volume of data"],
    "explanation": "Endpoint security solutions face challenges due to the sheer volume of data that they can create. When each workstation is generating data about events, this can be a massive amount of data. Endpoint security solutions should reduce the number of compromises when properly implemented, and they can also help by monitoring traffic after it is decrypted on the local host. Finally, non-TCP protocols are relatively uncommon on modern networks, making this a relatively rare concern for endpoint security system implementations.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What type of address is 127.0.0.1?",
    "options": [
      "A public IP address",
      "An RFC 1918 address",
      "An APIPA address",
      "A loopback address"
    ],
    "correctAnswer": ["A loopback address"],
    "explanation": "The IP address 127.0.0.1 is a loopback address and will resolve to the local machine. Public addresses are non–RFC 1918, nonreserved addresses. RFC 1918 addresses are reserved and include ranges like 10.x.x.x. An APIPA address is a self-assigned address used when a DHCP server cannot be found.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Susan is writing a best practices statement for her organizational users who need to use Bluetooth. She knows that there are many potential security issues with Bluetooth and wants to provide the best advice she can. Which of the following sets of guidance should Susan include?",
    "options": [
      "Use Bluetooth's built-in strong encryption, change the default PIN on your device, turn off discovery mode, and turn off Bluetooth when it's not in active use.",
      "Use Bluetooth only for those activities that are not confidential, change the default PIN on your device, turn off discovery mode, and turn off Bluetooth when it's not in active use.",
      "Use Bluetooth's built-in strong encryption, use extended (eight digits or longer) Bluetooth PINs, turn off discovery mode, and turn off Bluetooth when it's not in active use.",
      "Use Bluetooth only for those activities that are not confidential, use extended (eight digits or longer) Bluetooth PINs, turn off discovery mode, and turn off Bluetooth when it's not in active use."
    ],
    "correctAnswer": ["Use Bluetooth only for those activities that are not confidential, change the default PIN on your device, turn off discovery mode, and turn off Bluetooth when it's not in active use."],
    "explanation": "Since Bluetooth doesn't provide strong encryption, it should only be used for activities that are not confidential. Bluetooth PINs are four-digit codes that often default to 0000. Turning it off and ensuring that your devices are not in discovery mode can help prevent Bluetooth attacks.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What type of networking device is most commonly used to assign endpoint systems to VLANs?",
    "options": [
      "Firewall",
      "Router",
      "Switch",
      "Hub"
    ],
    "correctAnswer": ["Switch"],
    "explanation": "The assignment of endpoint systems to VLANs is normally performed by a network switch.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Srini is building a high-performance computing cluster that requires very high bandwidth and very low latency. What converged protocol is he most likely to select for this purpose?",
    "options": [
      "iSCSI",
      "VoIP",
      "Infiniband over Ethernet",
      "CXL"
    ],
    "correctAnswer": ["Infiniband over Ethernet"],
    "explanation": "Infiniband over Ethernet is commonly used for purposes like this, allowing direct memory access over Ethernet while providing high bandwidth and low latency. iSCSI is used for storage, VoIP is used for telephony, and Compute Express Link (CXL) is used for CPU to device and CPU to memory connections.",
    "domain": "Communication and Network Security",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Michelle is told that the organization that she is joining uses an SD-WAN controller architecture to manage their WAN connections. What can she assume about how the network is managed and controlled? (Select all that apply.)",
    "options": [
      "The network uses predefined rules to optimize performance.",
      "The network conducts continuous monitoring to support better performance.",
      "The network uses self-learning techniques to respond to changes in the network.",
      "All connections are managed by the organization's primary Internet service provider."
    ],
    "correctAnswer": ["The network uses predefined rules to optimize performance.", "The network conducts continuous monitoring to support better performance.", "The network uses self-learning techniques to respond to changes in the network."],
    "explanation": "SD-WAN implementations typically perform all of these functions, combining active data collection via monitoring and response via self-learning and machine intelligence techniques and then applying predefined rules to take action to make the network perform as desired. SD-WAN does not imply or require that all connections are managed by the organization's primary Internet service provider. In fact, SD-WANs are often used to handle multiple ISPs to allow for failover and redundancy.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null,
    "questionType": "multi-response"
  },
  {
    "text": "Which of the following shows the layers of the OSI model in correct order, from layer 1 to layer 7? Place the layers of the OSI model shown here in the appropriate order, from layer 1 to layer 7.",
    "options": [
      "Layer 1 = Data Link; Layer 2 = Physical; Layer 3 = Network; Layer 4 = Transport; Layer 5 = Session; Layer 6 = Presentation; Layer 7 = Applications",
      "Layer 1 = Physical; Layer 2 = Data Link; Layer 3 = Network; Layer 4 = Transport; Layer 5 = Session; Layer 6 = Presentation; Layer 7 = Applications",
      "Layer 1 = Physical; Layer 2 = Data Link; Layer 3 = Network; Layer 4 = Transport; Layer 5 = Session; Layer 6 = Applications; Layer 7 = Presentation",
      "Layer 1 = Physical; Layer 2 = Data Link; Layer 3 = Network; Layer 4 = Session; Layer 5 = Transport; Layer 6 = Presentation; Layer 7 = Applications"
    ],
    "correctAnswer": ["Layer 1 = Physical; Layer 2 = Data Link; Layer 3 = Network; Layer 4 = Transport; Layer 5 = Session; Layer 6 = Presentation; Layer 7 = Applications"],
    "explanation": "The OSI layers in order from layer 1 to layer 7 are as follows: 1. Physical 2. Data Link 3. Network 4. Transport 5. Session 6. Presentation 7. Application",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Valerie enables port security on the switches on her network. What type of attack is she most likely trying to prevent?",
    "options": [
      "IP spoofing",
      "MAC aggregation",
      "CAM table flooding",
      "VLAN hopping"
    ],
    "correctAnswer": ["CAM table flooding"],
    "explanation": "Valerie is most likely trying to prevent content addressable memory (CAM) table or MAC address table flooding by preventing large numbers of MAC addresses from being used on a single port. If CAM table flooding is successful, switches will not know where to send traffic and resort to sending all traffic to every port, potentially exposing traffic to attackers. IP spoofing and VLAN hopping are not prevented by port security, which focuses on hardware (MAC) addresses. MAC aggregation was made up for this question.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Alaina wants to ensure that systems are compliant with her network security settings before they are allowed on the network and wants to ensure that she can test and validate system settings as soon as possible. What type of NAC system should she deploy?",
    "options": [
      "A pre-admit, clientless NAC system",
      "A postadmission, client-based NAC system",
      "A pre-admit, client-based NAC system",
      "A postadmission, clientless NAC system"
    ],
    "correctAnswer": ["A pre-admit, client-based NAC system"],
    "explanation": "A pre-admit, client-based NAC system will test systems before they are allowed on the network using a client that can determine more about a system than a clientless model can. Postadmission tests after clients are already on the network and clientless versions are useful when installing clients isn't possible for systems.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": " Derek wants to deploy redundant core routers, as shown in the diagram. What model of high availability clustering will provide him with the greatest throughput?",
    "options": [
      "Active/active",
      "Line interactive",
      "Active/passive",
      "Nearline"
    ],
    "correctAnswer": ["Active/active"],
    "explanation": "An active/active pair can use the full throughput capability of both devices, but normal deployment models will design to the maximum throughput of a single device to avoid disruption in the event that one of the pair fails. Active/passive designs can only handle the throughput of a single device and allow the secondary device to remain ready to operate but not passing traffic until it is needed. Line interactive is a term often used to describe UPS systems that filter power instead of passing it through, and near-line is a term used to describe backups that are not online but can be retrieved relatively quickly.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Angela needs access to manage IoT devices at multiple sites that her organization manages. What solution should she suggest to ensure access and security for the devices?",
    "options": [
      "VPNs to protected VLANs",
      "An IDS located at the network edge protecting a network using only private IP addresses",
      "A DLP system configured to prevent attacks against IoT devices",
      "An iSCSI-based security solution accessed using a VPN and jump boxes"
    ],
    "correctAnswer": ["VPNs to protected VLANs"],
    "explanation": "A VPN that allows access to secured VLANs is the most common security design for this type of infrastructure. This allows secured remote access while protecting IoT devices that are often unable to be properly secured and thus cannot be trusted on a more exposed network. IPS does not provide remote access, and private IP addresses alone do not provide a protected network. DLP is used to prevent data exfiltration and won't stop other attacks or provide remote management access. iSCSI is a storage protocol, not a security solution. A VPN and jump boxes are useful, but the devices would not be provided with additional security by iSCSi.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What is a frequent concern for systems that require high-performing Internet connectivity when satellite Internet is the only available option?",
    "options": [
      "Security",
      "Compatibility with protocols like LiFi",
      "Compatibility with protocols like Zigbee",
      "Latency"
    ],
    "correctAnswer": ["Latency"],
    "explanation": "Most existing satellite internet systems have relatively high latency. Newer low Earth orbit satellites like Starlink appear to provide better latency than higher orbits, but latency and susceptibility to interference from weather are both common concerns for satellite-based systems.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What layer of an SDN implementation uses programs to communicate needs for resources via APIs?",
    "options": [
      "The data plane",
      "The control plane",
      "The application plane",
      "The monitoring plane"
    ],
    "correctAnswer": ["The application plane"],
    "explanation": "The application plane of a software-defined network (SDN) is where applications run that use application programming interfaces (APIs) to communicate with the SDN about needed resources. The control plane receives instructions and sends them to the network. The last common plane is the data plane, which forwards devices handling data and takes inputs from the control plane. The monitoring plane is not a common layer in an SDN environment.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Which of the following is not a drawback of multilayer protocols?",
    "options": [
      "They can allow filters and rules to be bypassed.",
      "They can operate at higher OSI levels.",
      "They can allow covert channels.",
      "They can allow network segment boundaries to be bypassed."
    ],
    "correctAnswer": ["They can operate at higher OSI levels."],
    "explanation": "Common drawbacks of multilayer protocols are that they can bypass filters, allow or create covert channels, and allow network segment boundaries to be bypassed. The ability to operate at higher OSI layer levels is normally considered a benefit.",
    "domain": "Communication and Network Security",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Place the following layers of the TCP/IP model in order, starting with the Application layer and moving down the stack.",
    "options": [
      "1, 2, 3, 4",
      "1, 4, 2, 3",
      "1, 4, 3, 2",
      "4, 1, 3, 2"
    ],
    "correctAnswer": ["1, 4, 3, 2"],
    "explanation": "In order, the layers are Application layer (1), Transport layer (4), Internet layer (3), and Network Access layer (2).",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Aadita's company wants to ensure that their website is highly available and resistant to potential denial-of-service attacks. What type of solution would be best suited to this if the company operates an e-commerce site that serves multiple countries and regions with a very large number of customers?",
    "options": [
      "A load-balanced web server cluster",
      "A CDN",
      "Micro-segmentation of virtual servers",
      "A VPC"
    ],
    "correctAnswer": ["A CDN"],
    "explanation": "Content distribution networks are used to both improve performance and reduce the impacts of denial-of-service attacks. Load-balanced server clusters may be part of the underlying design, but a CDN will more completely address Aadita's needs at the scale described. Micro-segmentation is used to isolate systems and services, not to address multiregion content accessibility and denial-of-service issues. A VPC may be part of a solution, but nothing about a VPC makes it a sufficient solution on its own.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "What are two primary advantages that 5G networks have over 4G networks? (Select all that apply.)",
    "options": [
      "Anti-jamming features",
      "Enhanced subscriber identity protection",
      "Mutual authentication capabilities",
      "Multifactor authentication"
    ],
    "correctAnswer": ["Enhanced subscriber identity protection", "Mutual authentication capabilities"],
    "explanation": "5G technology includes both a new mutual authentication capability and additional protections for subscriber identities. It does not have specific anti-jamming security features and does not specifically use multifactor authentication.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null,
    "questionType": "multi-response"
  },
  {
    "text": "What function does VXLAN perform in a data center environment? (Select all that apply.)",
    "options": [
      "It removes limitations due to maximum distance for Ethernet cables.",
      "It allows multiple subnets to exist in the same IP space with hosts using the same IP addresses.",
      "It tunnels layer 2 connections over a layer 3 network, stretching them across the underlying layer 3 network.",
      "All of the above."
    ],
    "correctAnswer": ["It tunnels layer 2 connections over a layer 3 network, stretching them across the underlying layer 3 network."],
    "explanation": "Virtual eXtensible LAN (VXLAN) tunnels layer 2 connections over a layer 3 network, in essence extending a LAN over distances or networks that it might not otherwise function over. It does not remove the distance limitations of Ethernet cables, nor does it allow multiple subnets to use the same IP space—that requires NAT or other technologies that remap addresses to avoid conflicts.",
    "domain": "Communication and Network Security",
    "difficulty": "Hard",
    "isActive": true,
    "lastUsed": null,
    "questionType": "multi-response"
  },
  {
    "text": "Chris is setting up a hotel network and needs to ensure that systems in each room or suite can connect to each other, but systems in other suites or rooms cannot. At the same time, he needs to ensure that all systems in the hotel can reach the Internet. What solution should he recommend as the most effective business solution?",
    "options": [
      "Per-room VPNs",
      "VLANs",
      "Port security",
      "Firewalls"
    ],
    "correctAnswer": ["VLANs"],
    "explanation": "VLANs can be used to logically separate groups of network ports while still providing access to an uplink. Per-room VPNs would create significant overhead for support as well as create additional expenses. Port security is used to limit what systems can connect to ports, but it doesn't provide network security between systems. Finally, while firewalls might work, they would add expense and complexity without adding any benefits over a VLAN solution.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "During a forensic investigation, Charles is able to determine the Media Access Control (MAC) address of a system that was connected to a compromised network. Charles knows that MAC addresses are tied back to a manufacturer or vendor and are part of the fingerprint of the system. To which OSI layer does a MAC address belong?",
    "options": [
      "The Application layer",
      "The Session layer",
      "The Physical layer",
      "The Data Link layer"
    ],
    "correctAnswer": ["The Data Link layer"],
    "explanation": "MAC addresses and their organizationally unique identifiers are used at the Data Link layer to identify systems on a network. The Application and Session layers don't care about physical addresses, while the Physical layer involves electrical connectivity and handling physical interfaces rather than addressing.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": " Mikayla is reviewing her organization's VoIP environment configuration and finds a diagram that shows the following design. What concern should she express?",
    "options": [
      "The voice connection is unencrypted and could be listened to.",
      "There are no security issues in this diagram.",
      "The session initialization connection is unencrypted and could be viewed.",
      "Both the session initialization and voice data connection are unencrypted and could be captured and analyzed."
    ],
    "correctAnswer": ["The session initialization connection is unencrypted and could be viewed."],
    "explanation": "This diagram shows the use of the Session Initialization Protocol (SIP) instead of SIP Secure (SIPS), meaning that SIP is not encrypted. Fortunately, the voice data via the Secure Real-time Transport Protocol (SRTP) is encrypted. Mikayla should look into using SIPS in addition to SRTP.",
    "domain": "Communication and Network Security",
    "difficulty": "Medium",
    "isActive": true,
    "lastUsed": null
  },
  {
    "text": "Jake's company keeps their certificate signing server disconnected from the network to prevent it from being compromised by network attacks. What is this type of solution called?",
    "options": [
      "Store-and-forward",
      "Out-of-band",
      "In-band",
      "Air-gapping"
    ],
    "correctAnswer": ["Air-gapping"],
    "explanation": "Air-gaps are physical separations between systems or devices that prevent communications or connections between them. This prevents network-based attacks and limits the ways that attackers could access the devices. Store-and-forward stores communications and send them after checking for errors. In-band administration occurs over existing interfaces or connections; out-of-band administration uses a separate network or management interface.",
    "domain": "Communication and Network Security",
    "difficulty": "Easy",
    "isActive": true,
    "lastUsed": null
  }
]