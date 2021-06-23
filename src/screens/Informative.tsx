import React, {FunctionComponent, useEffect} from 'react';
import {ScrollView, StyleSheet} from "react-native";
// @ts-ignore
import {Block, Text, theme, Button} from "galio-framework";
import materialTheme from '../constants/Theme';

type Props = {
    navigation?:any,
    route?: any,
};

const Informative: FunctionComponent<Props> =
    ({
        navigation,
        route
     }) => {
    let data = ''
        switch (route.params.name) {
            case 'About Us':
                data = 'Welcome to Sampriti Online, your number one source for all daily use products. We\'re dedicated to giving you the very best of grocery, with a focus on three characteristics: dependability, customer service and uniqueness.\n' +
                    'Founded in 2015 by Suprabhat Dey, Sampriti Online has come a long way from its beginnings in Storepoint: Bidhanagar, DGR-713212. When Suprabhat Dey first started out, his passion for Grocery delivery system drove him to start this store and gave him the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over the city, and are thrilled to be a part of the wing of the Grocery industry.\n' +
                    '\n' +
                    'We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don\'t hesitate to contact us.\n' +
                    '\n' +
                    'Sincerely,\n' +
                    'Name, Suprabhat Dey, CEO'
                break
            case 'Policy':
                data = 'This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from (Store URL).\n' +
                    '\n' +
                    'WHAT PERSONAL INFORMATION WE COLLECT\n' +
                    '\n' +
                    'When you visit the App, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.\n' +
                    '\n' +
                    'Additionally, as you use the App, we collect information about the individual  pages or products that you view, and information about how you interact with the App. We refer to this automatically collected information as Device Information.\n' +
                    '\n' +
                    'We collect Device Information using the following technologies:\n' +
                    '\n' +
                    'Cookies are data files that are placed on your device or computer and often include an anonymous unique identifier.\n' +
                    '\n' +
                    'Log files track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.\n' +
                    '\n' +
                    'Also, when you make a purchase or attempt to make a purchase through the App, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers Mention all types of accepted payments, email address, and phone number. This is called Order Information.\n' +
                    '\n' +
                    'By Personal Information in this Privacy Policy, we are talking both about Device Information and Order Information.\n' +
                    '\n' +
                    'HOW DO WE USE YOUR PERSONAL INFORMATION\n' +
                    '\n' +
                    'We use the Order Information that we collect generally to fulfil any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).\n' +
                    '\n' +
                    'Additionally, we use this Order Information to: - Communicate with you. - Screen our orders for potential risk or fraud. - When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.\n' +
                    '\n' +
                    'We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site.\n' +
                    '\n' +
                    'SHARING YOUR PERSONAL INFORMATION\n' +
                    '\n' +
                    'We share your Personal Information with third parties to help us use your Personal Information, as described above.\n' +
                    '\n' +
                    'We also use Google Analytics to help us understand how our customers use Sampriti Online. How Google uses your Personal Information.\n' +
                    '\n' +
                    'Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful requests for information we receive, or to otherwise protect our rights.\n' +
                    '\n' +
                    'BEHAVIOURAL ADVERTISING\n' +
                    '\n' +
                    'We use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.\n' +
                    '\n' +
                    'Mention opt-out links from external services such as:\n' +
                    '\n' +
                    'Facebook\n' +
                    'Google\n' +
                    'You can opt out of targeted advertising...\n' +
                    '\n' +
                    'YOUR RIGHTS\n' +
                    '\n' +
                    'If you are a Indian resident, you have the right to access the personal information we hold about you and to ask that your personal information is corrected, updated, or deleted. If you would like to exercise this right, please contact us.\n' +
                    '\n' +
                    'Additionally, if you are a Indian resident we note that we are processing your information in order to fulfil contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above.\n' +
                    'Please note that your information will be transferred outside of Europe, including to Canada and the United States.\n' +
                    '\n' +
                    'DATA RETENTION\n' +
                    '\n' +
                    'When you place an order through the App, we will maintain your Order Information for our records unless and until you ask us to delete this information.\n' +
                    '\n' +
                    'MINORS\n' +
                    '\n' +
                    'The Site is not intended for individuals under the age of 10.\n' +
                    '\n' +
                    'CHANGES\n' +
                    '\n' +
                    'We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.\n' +
                    '\n' +
                    'If you have questions and/or require more information, do not hesitate to contact us.'
                break
            case 'Terms and Conditions':
                data = 'THIS DOCUMENT IS AN ELECTRONIC RECORD IN TERMS OF THE INFORMATION TECHNOLOGY ACT, 2000 AND RULES MADE THEREUNDER. THIS ELECTRONIC RECORD IS GENERATED BY A COMPUTER SYSTEM AND DOES NOT REQUIRE ANY PHYSICAL OR DIGITAL SIGNATURES. PLEASE CAREFULLY READ THESE TERMS OF USE. BY USING THIS PLATFORM YOU INDICATE YOUR UNDERSTANDING AND ACCEPTANCE OF THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS YOU MAY NOT USE THIS PLATFORM.\n' +
                    '\n' +
                    'sampriti PRIVATE LIMITED is a company registered under companies act, 2013 operating www.sampriti.com & sampriti app under the brand name of sampriti. sampriti provides for an online marketplace (“Application”) where registered suppliers (“Suppliers”) can offer to sell their respective products to registered users of the Application (“Buyers”). The terms and conditions (the “Agreement”) set forth below and the standard terms and conditions that apply to and governs your use of the website www.sampriti.com, sampriti application and the services available thereon constitute a legally binding agreement between sampriti Pvt. Ltd. (the “Company”) and you . This Agreement contains provisions that define limits, legal rights and obligations with respect to the use of the website sampriti.com and app that is conceptualized, developed and hosted by the Company (hereinafter collectively referred to as the “Platform”) including its classified services, forums, chats, classified advertisements, related sites including the mobile application (the “Content”) that applies to all the users of the Platform including without limitation users who are browsers, Suppliers, Resellers, merchants, or contributors of content (collectively, “User”). References to the User in these Terms must be construed in the context in which the term is used. For instance, in these Terms, a User placing an order should be read as the Buyer placing an order. The Platform is currently owned, operated and controlled by sampriti.Pvt. Ltd. By installing, downloading or even merely visiting or accessing any part of the Platform or utilising any services offered on the Platform the Terms of Use described below incorporate the Privacy Policy and apply to all Users of the Platform .\n' +
                    '\n' +
                    'ACCEPTANCE OF TERMS OF USE: User acknowledge and understand that the Platform serves as an online marketplace where registered suppliers can offer to sell their respective products to registered users of the Application and by using, visiting, registering and/or otherwise accessing the Platform and by confirming that you have read the Terms of Use, you hereby certify that:\n' +
                    '\n' +
                    '(i) you have the authority to enter into these Terms of Use\n' +
                    '\n' +
                    '(ii) you agree to be bound by the Terms of Use and any other documents incorporated herein.\n' +
                    '\n' +
                    '(ii) that you are of legal age to form a binding contract and are not a person barred from receiving services under the laws of any applicable jurisdiction in which the Company conducts business. IF THE USER DOES NOT AGREE WITH THESE TERMS, THE USER IS ADVISED TO REFRAIN FROM USING THE PLATFORM. BY ACCESSING OR USING THE PLATFORM, THE USER IRREVOCABLY ACCEPTS THE AGREEMENT AND AGREES TO ABIDE BY THE SAME (AS UPDATED FROM TIME TO TIME).\n' +
                    '\n' +
                    'USER ELIGIBILITY:\n' +
                    '(i) User(s) represent and warrant that they have the right to access or use the Platform. Persons who are “incompetent to contract” within the meaning of the Indian Contract Act, 1872 including minors, un-discharged insolvents etc. are not eligible to access and use the Platform.\n' +
                    '(ii) The Platform can be accessed and used by those individuals or business entities, including sole proprietorship firms, companies and partnerships, which can form legally binding contracts under Indian Contract Act, 1872. Only individuals who are eighteen (18) years of age or older may use the Platform and avail Services. The Company reserves the right to terminate the Users account and / or deny access to the Platform if it is brought to the Company’s notice or if is discovered that the User does not meet the conditions herein.\n' +
                    'ACCOUNT REGISTRATION\n' +
                    '(i) Users may access the Platform by registering to create an account and become a member. The membership is limited for the purpose of buying or selling products, is subject to these Terms, and strictly not transferable.\n' +
                    '(ii) As part of The Company’s registration process, User will select a username and password and be asked to submit, among other things, User email address, telephone number and other contact details. User may also create an account or login using your social networking pages such as Facebook and Google. By logging in and creating an account through these social networking sites, User allows the Company access to your public profile, friend lists, likes and other activities that may determine social behaviour. User will also have to provide additional optional information to the Company for providing User with a more customized experience when using the Platform.\n' +
                    '(iii) Users agrees and warrant that all information provided to the Company for purposes of creating a user account (the “User Information”) will be true, accurate, current and complete and to update such information to keep it accurate, current and complete. User’s failure to provide such information will constitute a breach\n' +
                    '\n' +
                    'of these Terms of Service and may result in the immediate termination of User’s account. All information about User including User Information, any information obtained by the Company as a result of User’s use of the Websites, and any information stored or transmitted in any way on or through the use of\n' +
                    'the Platform is subject to the Company’s Privacy Policy, which can be found here. The Company’s Privacy Policy is incorporated into these terms of Use by this reference.\n' +
                    '(iv) User understands that User may not\n' +
                    '• select or use a name of another person with the intent to impersonate that person;\n' +
                    '• use the rights of any person without authorization; or\n' +
                    '• use a name that the Company, in its sole discretion, deems inappropriate.\n' +
                    'User agrees that any information that User provides to the Platform, including but not limited to User Information, shall be true and accurate and current, and User is responsible for updating such information to keep it true, accurate and current. If User creates a user account with the Platform, User accepts responsibility for all activities that occur under User’s account or password and User agrees that the User will not sell, transfer or assign user account. User is responsible for maintaining the confidentiality of User’s password, if any, and for restricting access to User’s computer so that others may not access any password-protected portion of the Platform using User’s name, user name or password in whole or in part.\n' +
                    '\n' +
                    'Each user name permits one person to access the password-protected portion of the Platform and User shall not share the user name and password with any third party. User shall be solely responsible for any and all use of the Platform, including without limitation, any and all charges incurred by a third party, under or using User’s user name and password. If at any time, User suspects that User’s password has been compromised, User shall promptly notify the Company of the same at info@sampriti.com and confirm such notice in writing. Upon receiving such telephonic and written notice, the Company will assign a new password to User without charge.\n' +
                    'User agrees that any unauthorized use of the Platform, (or any Content derived therefrom) by User or by anyone using User’s user name or password may result in immediate suspension or termination of User’s user account by the Company, in its sole and absolute discretion, without refund of any pre-paid fees. The Company reserves the right to terminate or suspend User’s account ,User’s access, to and use of the Platform in the event that the information provided by the User during the registration process or thereafter proves to be inaccurate, not current or incomplete; and/or if the Users are found to be non-compliant with the Terms, Policies and/or the Privacy Policy as the case may be.In the event of such termination, User will continue to be liable for applicable fees for the period prior to termination, together with such other remedies as to which the Company may be entitled.\n' +
                    '(v) The Users are required to enter a valid phone number while registering on the Company’s Platforms. By registering their phone numbers with the Company, the Users consent to be contacted by the Company via phone calls, SMS notifications\n' +
                    'or instant messages, in case of verifications and in case of subscription/service/promotional updates. The Users may opt of subscription/service/promotional updates.\n' +
                    '(vi) Upon registration, the Users may be required to complete a verification process as part of setting up their accounts.\n' +
                    '(vii) It is the responsibility of the Users to provide correct mobile number so that the Company can communicate with the Users via SMS. The Users understand and agree that if the Company sends an SMS but the Users do not receive it because the Users’ mobile number is incorrect or out of date or blocked by the Users; service provider, or the Users are otherwise unable to receive SMS, the Company shall be deemed to have provided the communication to the Users effectively.\n' +
                    '(viii) Notwithstanding anything to the contrary herein, the Users acknowledge and agree that they shall have no ownership or other property interest in their account, and further acknowledge and agree that all rights in and to their account are and shall forever be owned by and inure to the benefit of the Company. However, any and every activity undertaken by a User under his/her account shall be the sole responsibility of such User and the Company shall not be liable for such activity in any manner.\n' +
                    'MODIFICATION OF TERMS OF USE:\n' +
                    'The Company reserves the right to change these Terms of Use and or the Agreement at its sole discretion and at any time without personal notice to the User. If the Company makes a material change to these Terms of Use and or the Agreement it will update this page and post a notice on the Platform for a reasonable period of time, and will indicate the effective date of the changes at the top of both pages. It is the User’s responsibility to review these Terms of Use for any changes, and User’s access or use of the Platform after any changes made in the said Terms of Use constitutes User’s acceptance of and agreement to be bound by all changes. If User do not agree to be bound by the changes, User must immediately stop using the Platform. Any amendments to these Terms of Use shall apply prospectively from the date on which it is made or added to the Terms of Use and or Agreement. EXCLUSION OF LIABILITY : (i) The platform provides an online market place enabling Users to place orders for the products sold by various Suppliers and the Company will, subject to the terms and conditions set out herein, facilitate the placement of orders for the products to the Users. The Users acknowledges herewith, that the Company does not own,sell or resell products on it’s own nor does control the Suppliers. However the company reserves the right to delist any product from the Platform in it’s sole discretion. (ii) The Supplier shall solely be responsible for procurement of each and all of the permits, licenses, passes etc, as required by the applicable laws for each of the products listed or sold through the Platform. The responsibility for ensuring that\n' +
                    'all the products being listed and or sold on the Platform are permitted for advertising, listing and sales under applicable laws solely lies with the Supplier.\n' +
                    '(iii) On receipt of an order from a User, the Company shall send electronically a confirmation of such order to the Supplier and the User concerned. Further, the Company may inform the Users about the availability or unavailability or change in price of the order as informed by the Supplier concerned. User’s order is an offer to the Company to buy the product(s) in your order. When you place an order to purchase a product from us, you will receive an e-mail confirming receipt of User’s order and containing the details of User’s order (the “Order Confirmation E-mail”). The Order Confirmation E-mail is acknowledgement that we have received User’s order, and does not confirm acceptance of User’s offer to buy the product(s) ordered. We only accept User’s offer, and conclude the contract of sale for a product ordered by the User, when the product is dispatched to the User and an e-mail confirmation is sent to the User that the product has been dispatched (the “Dispatch Confirmation E-mail”). If User’s order is dispatched in more than one package, User may receive a separate Dispatch Confirmation E-mail for each package, and each Dispatch Confirmation E-mail and corresponding dispatch will conclude a separate contract of sale between User and the Company for the product(s) specified in that Dispatch Confirmation E-mail. User can cancel order for a product at no cost any time before the Company send the Dispatch Confirmation E-mail relating to that product. (iv) It’s the Suppliers sole responsibility to not list or sell anything that is not permitted under applicable laws at the said point of time. Suppliers undertakes and warrants that nothing but not limited to anything mentioned below in the list will be listed or sold by the Supplier on the Platform: • Adult products and pornographic materials (including child pornography) in any form (print, audio/video, multimedia messages, images, photographs, etc.); • Alcohol; • Animals and wildlife products – examples include live animals, mounted specimens, and ivory; • Artifacts; • Counterfeit goods and services infringing the IP (as defined below); o Crude oil; o Electronic surveillance equipment prohibited by law; ▪ Embargoed goods from prohibited countries; ▪ Endangered species of animals and plants, whether alive or dead; ▪ Event tickets which are exempted from resale by law; ▪ Firearms, weapons, and knives – examples include pepper spray, replicas, and stun guns; • Any financial services; • Food and healthcare items without holding requisite permits; • Grey market products;\n' +
                    '• Government related items/ equipment (like wireless equipment with frequency used by the police, uniforms of Government officials including but not limited to the use by the police/ the Indian army, etc.) • Government issued documents like passports etc.; • Hazardous, restricted, or regulated materials – examples include batteries, fireworks, and refrigerants; • Human remains and body parts; • IP in any form (including but not limited to music, movies, books, designs) for which the Merchant do not hold the distribution rights; • Invoices and receipts (including blank and pre-filled); • Liquefied petroleum gas cylinder; • Lottery tickets; • Mailing lists and personal information; • Maps and literature where Indian external boundaries have been shown incorrectly; • Medicines, drugs and drug paraphernalia that require a registered medical practitioner’s prescription; • Narcotic drugs and psychotropic substances as defined under the Narcotic Drugs and Psychotropic Substances Act, 1985; • Offensive material which is likely to offend the sentiments of people whether on the grounds of religion, race, caste, sex or place of birth, race, ethnicity, or culture; • Radioactive materials; • Reptile skins; • Sex determination Kit as under the Pre-Conception and Pre-Natal Diagnostic Techniques Act, 1994; • Stocks and securities; • Real estate; • Radioactive materials; • Stolen property; • Tobacco; • Any other sanctioned or prohibited items or services as per applicable laws; and • Any other item deemed unfit by Company. (v) The Users acknowledge and agree that the Company may, at the request of the Supplier, act as the payment agent for the limited purpose of accepting payments from them on behalf of the Supplier. Upon payment of the amounts to the Company, which are due to the Supplier, the payment obligation to the Supplier for such amounts is completed, and the Company will be responsible for remitting such amounts, to the seller. The Users understand, accept and agree that the payment facility provided by the Company is neither a banking nor financial service but is merely a facilitator providing a third party payment processor for the transactions on the Application. Further, by providing payment facility, the Company is neither acting as a trustee nor acting in a fiduciary capacity with respect to the transaction or the transaction price. The Company will not be liable for any charges made by the Users bank in relation to payment of the total amount. (vi) The Supplier shall endeavour that images of the Products exactly reflect the appearance of the Products in real life and the store display as accurately as possible the colors and images of the Products; and\n' +
                    '(vii) The Supplier shall bear full liability and responsibility for dealing with any returns or refunds. The responsibility for communicating, managing and arranging for any refunds or returns lies entirely with You. The Company shall not be responsible for dealing with any returns or refunds.\n' +
                    '(viii) The Company lists availability information for products sold by the Company on the Platform, including on each product information page. Beyond what the Company says on that page or otherwise on the platform, the Company cannot be more specific about availability. Please note that dispatch estimates are just that. They are not guaranteed dispatch times and should not be relied upon as such. As the Company process User’s order, User will be informed by e-mail if any products User order turn out to be unavailable. Company is not liable if the product dispatched does not get delivered with in the estimated time displayed. All prices are inclusive of VAT/CST, service tax, Goods and Services Tax (“GST”), duties and cesses as applicable – unless stated otherwise. (ix) The transaction is bilateral between the Suppliers and the Users and, the Company is not liable to charge or deposit any taxes applicable on such transaction. (x) The Suppliers are bound by, including without limitation, the following laws:\n' +
                    '\n' +
                    'a. Metrology Act and Legal Metrology (Packaged Commodities) Rules, 2011 (Packaging Rules);\n' +
                    '\n' +
                    'b. Drugs and Cosmetics Act, 1940 (D&C Act) and Drugs and Cosmetics Rules, 1945 (D&C Rules); c. Food Safety and standard Act, 2006, Food Safety and Standard (Packaging and labelling) Regulation 2011, (FSS Packaging Regulation) Food Safety and Standard (Food Product Standard and Food Addictive) Regulation, 2011 (FSS Standard Regulations) and Food Safety and Standard (food or Health Supplements, Nutraceuticals, Food for Special Special Medical Purpose, Functional Food and Novel Food) Regulation 2016 (FSS Supplement Regulation). (xi) As per above mentioned acts and regulations and any other relevant law in place during the tenure of this association, the Company understands that there is an obligation on the Supplier to ensure that the package in which the products are sold complies with labelling and packing requirements and other laws that may be prescribed in this regard. Hence, it shall be the sole responsibility of the Supplier to comply with applicable laws and the Company or the shall not be held responsible in any manner. Suppliers shall indemnify the Company and the Platform for any harm or loss in relation to contravention of above regulations.\n' +
                    '\n' +
                    'USE OF THE PLATFORM BY THE BUYER:\n' +
                    '(i) The Users understands that any order that they place shall be subject to the terms and conditions set out in these Terms.\n' +
                    '\n' +
                    '(ii) The Users agree to provide current, complete and accurate purchase and account information for all purchases made at on the Application. The Company endeavours to promptly update the Users account and other information, including email addresses and credit card numbers and expiration dates, so that the Company can complete the transactions.\n' +
                    '(iii) In connection with any order, information such as name, billing address and credit card information will have to be provided either to the Company or the third party payment processor. If the Users are directed to the third party payment processor, they may be subject to terms and conditions governing use of that third party’s service and that third party’s personal information collection practices. Users are requested to review such terms and conditions and privacy policy before using the Application.\n' +
                    '(iv) The User understands that all the discounts and offers offered by the Company can be subject to any other terms in addition to these terms & conditions.\n' +
                    'RESTRICTIONS ON USE\n' +
                    'Platform is provided for lawful purposes only. By accessing or using the platform, you agree and warrant that in connection with your use of the Platform you will not:\n' +
                    '• Manipulate the Platform in any way not intended and directed by the Company. • Copy or seek to copy or “rip” any content from the Platform.\n' +
                    '• Exploit any part of the Platform for commercial gain or undertake any commercial activity utilizing the contents of the Platform in any way not intended and directed by the Company without the prior written consent of the Company.\n' +
                    '• Upload, post, e-mail, transmit, display, copy, distribute, promote, or otherwise communicate to the public:\n' +
                    '▪ Any material that is false, unlawful, threatening, disparaging, abusive,libelous, defamatory, obscene, vulgar, offensive, pornographic, profane, racist, sexually explicit, ethnically or culturally offensive, indecent, harassing, or that promotes violence, racial hatred, terrorism, or illegal acts, or anything that in The Company’s sole discretion is otherwise objectionable information, software, content or other material that violates, plagiarizes, misappropriates or infringes the rights of third parties including, without limitation, copyright,\n' +
                    'trademark, patent, trade secret, rights of privacy or publicity, confidential information or any other proprietary right; or\n' +
                    '▪ Material of any kind that restricts or inhibits any other user’s uninhibited use and enjoyment of the Platform or interferes with, overburdens, impairs or disrupts the Platform, including material that contains a virus, Trojan horse, time bomb, worm, spyware, adware, malware, bot, any automated system, such as scripts, or any other harmful component; or\n' +
                    '▪ Use or attempt to use another person’s information, account, password, service or system except as expressly permitted; or\n' +
                    '▪ Impersonate another person or entity; or\n' +
                    '▪ Engage in any conduct that in the Company’s sole discretion restricts the ability of any other person to enjoy the use of the Platform; or\n' +
                    '▪ Solicit or collect personal data including telephone numbers, addresses, last names, email addresses, or any other kind of information about Users except unless provided by the User to another.\n' +
                    '▪ directly or indirectly, offers, attempts to offer, trades or attempts to trade in any item, the dealing of which is prohibited or restricted in any manner under the provisions of any applicable law, rule, regulation or guideline for the time being in force\n' +
                    '▪ violates any law for the time being in force;\n' +
                    '\n' +
                    'DISCLAIMERS OF WARRANTY AND LIMITATION OF LIABILITY:\n' +
                    '• The Company endeavours to make the Platform available during the Company’s working hours. However, the Company does not represent that access to the Platform will be uninterrupted, timely, error free, free of viruses or other harmful components or that such defects will be corrected.\n' +
                    '\n' +
                    '• The Company does not warrant that the Application will be compatible with all hardware and software which is used by the Users. The Company shall not be liable for damage to, or viruses or other code that may affect, any equipment, software, data or other property as a result of downloading and installing the Application.\n' +
                    '\n' +
                    '• The Company does not represent or warrant that the information available on the Application will be correct, accurate or otherwise reliable.\n' +
                    '\n' +
                    '• The Suppliers shall be solely responsible about the details pertaining to specifics (such as quality, value, saleability, etc) of the products proposed to be sold or offered to be sold or purchased on the Application. The Company does not implicitly or explicitly support or endorse the sale or purchase of any products nor provide any\n' +
                    'warrantee/guarantee of the products sold to the Users, and in no event shall such products be the responsibility of the Company.\n' +
                    '\n' +
                    '• The Company does not make any representation or warranty as to the item-specifics (such as legal title, creditworthiness, identity, etc) of any of its Users.\n' +
                    '\n' +
                    '• The Company does not at any point of time during any transaction between any Supplier and a User take possession of any of the products offered nor does it at any point gain title to or have any rights or claims over such products. At no time shall the Company hold any right, title or interest over the products. The Company is not responsible for damages or delays as a result of products which are out of stock, unavailable or back ordered.\n' +
                    '\n' +
                    '• The Company only provides a Platform for communication and it is agreed that the contract for sale of any of the products shall be a strictly bipartite contract between the Suppliers and the Users concerned.\n' +
                    '\n' +
                    '• The Company shall not be liable for any misuse of the information shared by the Users with it; or through the Users profile; or with a third party on the Platform, chat rooms, forums, or comments.\n' +
                    '• The Platform may be under constant upgrades, and some functions and features may not be fully operational.\n' +
                    '\n' +
                    '• The Platform is provided on an “as is” and “as available” basis. The Company expressly disclaims all warranties of any kind, whether express or implied with respect to the records and other data that is made available by it to the Users.\n' +
                    '\n' +
                    '• The Company makes no representation or warranty that:\n' +
                    '\n' +
                    '(i) the Platform will be accurate or reliable;\n' +
                    '\n' +
                    '(ii) the Platform will be uninterrupted, timely, secure, or error-free;\n' +
                    '\n' +
                    '(iii) any information that may be obtained from the use of the Platform will be accurate, timely or complete; or\n' +
                    '\n' +
                    '(iv) any errors in any software used on the site or in connection with the Platform will be corrected. • The Company does not represent any of the Users or Suppliers, and disclaims any liability with respect to any error or inconsistency with respect to any information relating to such Suppliers or Users displayed on the site. Any information provided with respect to the Users and fees payable is subject to change without notice. Any trademark, word mark or intellectual property of any Users or Suppliers belongs to such Users/Suppliers alone, and the Company has no right or claim over the same. • Users acknowledge and agree that the Company is not an arbitrator or judge of disputes concerning intellectual property and it cannot, by any means, verify that any Supplier selling or supplying merchandise on the Platform have the right to sell the products. The Company encourages Users to assist it in identifying listings on the Platform, which, according to the Users’ knowledge or belief infringe their rights or third party rights.\n' +
                    '\n' +
                    '• The Users further acknowledge and agree that by taking down a listing, the Company does not and cannot be deemed to be endorsing a claim of infringement and further in those instances in which the Company declines to take down a listing, the Company does not and cannot be deemed to be endorsing that the listing is not infringing of third party rights or endorsing any sale or supply of merchandise or services pursuant to or on account of such listing.\n' +
                    '\n' +
                    '• The Company reserves the right in its sole discretion to remove any material/content/photos/offers displayed on the Platform which in the Company’s reasonable belief is unlawful or could subject the Company to liability or is in violation of these Terms or is otherwise found inappropriate in the Company’s opinion. The Company reserves the right to cooperate with any investigation in this regard.\n' +
                    '\n' +
                    '• The Company reserves the right to suspend or terminate the account of a User as deemed appropriate by it. Users agree that the Company shall have no liability to any Users, including liability in respect of consequential or any other damages, in the event the Company takes any of the actions mentioned in this clause.\n' +
                    '\n' +
                    '• The Company is not responsible and will have no liability for:\n' +
                    '\n' +
                    '(i) any content or products provided by any persons or entities other than the Company;\n' +
                    '\n' +
                    '(ii) damages of any kind that result from the downloading of any data or any other materials on the site or through the Application; or\n' +
                    '\n' +
                    '(iii) the failures of the internet or any data or telecommunications equipment, system or network used in connection with the Application.\n' +
                    '\n' +
                    '• The Company shall not be liable for: any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation any financial losses, loss of data, replacement costs, or any similar damages, whether based in contract, tort, strict liability or otherwise, arising from the use of the Platform, or for any other claim related in any way to the use of the Platform, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the Platform or any content posted, transmitted, or otherwise made available via the Platform, even if advised of their possibility.\n' +
                    '\n' +
                    '• The Company or its employees, affiliates, authors or agents shall not be liable to any party for any losses or injury arising out of or relating to the information provided on the Platform. In no event will the Company or its employees, affiliates, authors or agents be liable to the Users or any third party for any decision made or action taken by the Users.\n' +
                    '\n' +
                    '• Interlia, the Company does not guarantee that: o The Platform will meet the Users’ expectations; or o The Platform will be accessible without interruption or in a timely, reliable, or fault-free manner; or o The results obtained through use of the Platform will be correct and reliable; or o The quality of the products, services, information, or other material purchased or obtained by the User through the Platform will meet the User’s expectations.\n' +
                    '\n' +
                    '• The Users shall be solely responsible for damages to their data system or for loss of data arising from download of content from the Application.\n' +
                    '• No guidance or information, written or oral, obtained from the Company or via the Platform, shall constitute any warranty, unless stated otherwise.\n' +
                    '\n' +
                    'Losses The Company will not be responsible for any business loss (including loss of profits, revenue, contracts, anticipated savings, data, goodwill or wasted expenditure) or any other indirect or consequential loss that is not reasonably foreseeable to both the User and the Company when the User commenced using the Platform. Events beyond our reasonable control The Company will not be held responsible for any delay or failure to comply with our obligations under these conditions if the delay or failure arises from any cause which is beyond our reasonable control. This condition does not affect Users statutory rights.\n' +
                    'PROPRIETARY RIGHTS:\n' +
                    '• The Company owns, operates, licenses, controls, and provides access to the Platform. User acknowledges and agree that the Company and its licensors, retain all right, title and interest in and to all past, present and future Content, (excluding User Provided Content, i.e., materials, photographs, portfolios that Users uploads on the Platform), applications, software, content and materials provided on or through the Platform (including, without limitation, the audiovisual works, text, images, photographs, videos, graphics, page headers, editorial and contextual information, the selection and arrangement of elements displayed on or through the Platform the compilation of all content and materials on the Platform and the business process, procedures, methods and techniques used in the Platform) and all associated copyright rights, trademark rights, trade secret rights and other intellectual property and proprietary rights recognized anywhere in the world.\n' +
                    '• “sampriti ” logo is a registered trademarks of sampriti Pvt. Ltd., and all other proprietary trademarks, service marks, trade names, trade dress, slogans, logos, and other indicia of origin that appear on or in connection with the Platform are the property of the Company unless otherwise noted and are protected by applicable copyright, trademark, intellectual property and other laws. The Company’s intellectual property, including, without limitation, its trademarks and trade dress, may not be used in any manner that is likely to cause confusion among users, or in any manner that disparages the Company and/or its name, image and goodwill.\n' +
                    '• All third-party trademarks, logos, photographs, images, audio and audio- visual content, programming, excluding other intellectual property contained on or within the Platform are the property of the respective third parties, including the respective content owners, and may be protected by\n' +
                    'applicable copyright, trademark or other intellectual property laws. Each such third party expressly reserves all rights into such intellectual property. Use of third party software or services is subject to the terms and conditions of the applicable third party license agreements, and the User agrees to look solely to the applicable third party and not to the Company to enforce any of User’s rights in relation thereto. Except as expressly set forth in these Terms of Use or otherwise expressly granted to User in writing by the Company, no rights (either by implication, estoppel or otherwise) in or to the Platform or their contents are granted to User.\n' +
                    '\n' +
                    'USER PROVIDED CONTENT :\n' +
                    '• Portions of the Platform may allow User to upload information including but not limited to data, information, text, images, software, audio, photographs, graphics, video, messages, tags, or other materials to or through the Platform (“User Provided Content”). For User Provided Content (such as portfolio, announcements,pricings,offers etc), the Company is merely hosting and providing access to the same to its different Users.\n' +
                    '• The decision to submit User Provided Content to the Platform is Users responsibility and User should only submit content that belongs to the User or that will not violate the rights of others. Be aware that content belongs to the creator of that content and you should not reproduce or submit anything without permission of the owner. By submitting User Provided Content, you represent, acknowledge, and warrant\n' +
                    '• that you have the right to do so or that you have obtained any necessary third party consents (e.g., under privacy or intellectual property laws), • that the User Provided Content does not infringe on the copyrights, trademarks, moral rights, rights of privacy or publicity, or the intellectual property rights of any person or entity, and\n' +
                    '• that no other party has any right, title, claim, or interest in the User Provided Content that would be infringed upon as a result of uploading the User Provided Content. If User submits User Provided Content to the Platform on behalf of a group, organization or business entity, User represents that the User have the right to do so and that User have obtained any consents from the group, organization or business. Upon the request of the Company, User agrees to furnish the Company with any documentation, substantiation and releases necessary and reasonably required to verify and substantiate Users compliance with this provision.\n' +
                    '• The Company does not vouch for the validity, accuracy or credibility of any User Provided Content on the Platform, and does not take any responsibility or assume any liability for any actions Users may take as a result of viewing, reading or listening to User Provided Content on the Platform. Through Users use of the Platform User may be exposed to content that User may find offensive, objectionable, harmful, inaccurate or deceptive. There may also be risks of dealing with underage persons, people acting under false pretenses, international trade issues and foreign\n' +
                    'nationals. The Company does not endorse any User Provided Content or any opinion, recommendation, or advice expressed therein. By using the Platform, User assumes all associated risks, and the Company expressly disclaims any and all liability in connection with User Provided Content, addition to the above, User grants to the Company, without any credit or compensation to the User, a royalty-free, non-exclusive, worldwide, perpetual, unrestricted, irrevocable, and fully transferable, assignable and sub-licensable license to host, use, modify, display, copy, reproduce, disclose, sell, translate, create derivative works of, distribute, and export any User Provided Content, in whole or in part, or to incorporate it in other works in any form, media, software or technology of any kind now known or hereafter developed or discovered for any purposes whatsoever. You agree that the Company may publish or otherwise disclose your name in connection with the User’s User Provided Content.\n' +
                    '• User acknowledges, consents and agrees that the Company may access,preserve and disclose account information and User Provided Content that the User provides if the Company is required to do so by law or if it believes in good faith that such access, preservation or disclosure is reasonably necessary to\n' +
                    'o comply with legal process,\n' +
                    'o enforce these Terms of Service,\n' +
                    'o respond to claims that any User Provided Content violates the rights of third parties,\n' +
                    'o respond to your requests for customer services, or\n' +
                    'o protect the rights, property or personal safety of The Company, its employees, partners and agents or members of the public.\n' +
                    '• The Company undertakes no obligation to pre-screen User Provided Content, but reserves the right to, and may from time to time, monitor any and all information transmitted or received through the Platform. User acknowledge, consent and agrees that the Company may, at its sole discretion and without notice to User, review, censor, delete, move, edit,block access to or prohibit the transmission or receipt of any User Provided Content or other information, in whole or in part, that the Company deems obscene, defamatory or libelous in nature, that invades the right of privacy or infringes any right of any person or entity, is unlawful, is offensive or otherwise inappropriate, or that the Company believes to be in violation of these Terms of Use.\n' +
                    '• User is solely responsible for all User Provided Content that the User makes available via the Platform. Under no circumstances will the Company be liable to the User in any way for any User Provided Content that User uploads, post, or otherwise make available via the Platform, including, but not limited to, any errors or omissions in User Provided Content, or for any loss or damage of any kind incurred as a result of User Uploaded Information. In addition, User hereby release the Company from any and all claims, liens, demands, actions or suits in connection with the User Provided Content, including, without limitation, any and all liability for any use or nonuse of your User Provided Content, claims for\n' +
                    'defamation, invasion of privacy, right of publicity, emotional distress or economic loss. Except for the rights granted by the Agreement, the Company acquires no title or ownership rights in or to any User Provided Content that the User submits and nothing in the Agreement conveys any ownership rights in the User Provided Content that User submits to the Company.\n' +
                    'ACCURACY, COMPLETENESS AND TIMLINESS OF INFORMATION:\n' +
                    '• The Company is not responsible for any inaccuracy, incompleteness or outdated information made available on the Platform, either provided by the Users or otherwise. The material on the Platform is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or timelier sources of information. The Users agree that the Company does not own any responsibility or obligation whatsoever towards either ensuring the accuracy of the information provided by the Users. Any reliance on the material on the Platform is at the Users own risk.\n' +
                    '\n' +
                    '• The Platform may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. The Company reserves the right to modify the contents of the Platform at any time, but has no obligation to update any information on the Platform. The Users agree that it is their responsibility to monitor changes to the Platform.\n' +
                    '\n' +
                    '• Occasionally there may be information on the Platform that contains typographical errors, inaccuracies or omissions that may relate to information pertaining to the products, pricing, promotions, offers, shipping charges, transit times and availability. The Company reserves the right to correct any errors, inaccuracies or omissions, and to change or update information if any information on the Platform is inaccurate at any time without prior notice. The Company undertakes no obligation to update, amend or clarify information in the Platform, including without limitation, pricing information, except as required by law. No specified update or refresh date applied to the Platform, should be taken to indicate that all information on the Platform or pertaining to the Services have been modified or updated.\n' +
                    '\n' +
                    'PRIVACY: Please review our Privacy Policy, which also governs your visit to the Platform, to understand our practices. The personal information / data provided by the User during the course of usage of the Platform will be treated as strictly confidential and in accordance with the Privacy Notice and applicable laws and regulations. If you object to your information being transferred or used, please do not use the Platform.\n' +
                    'DISCLOSURE:\n' +
                    '\n' +
                    '• REQUESTS FOR INFORMATION; DISCLOSURE FOR ENFORCEMENT PURPOSES We may disclose Personal Information when we are required to or we believe it is appropriate to comply with the law; to enforce or apply this Policy or our other policies or agreements; to initiate, render, bill, and collect for amounts owed to us; to protect our or our users’ rights, property or safety; to protect our users from fraudulent, abusive, or unlawful use of the Services; or if we believe that an emergency involving the danger of death or serious physical injury to any person requires or justifies disclosure of Personal Information.\n' +
                    '\n' +
                    '• SECURITY MEASURES sampriti endeavours to secure your Personal Information from unauthorized access, use or disclosure by putting into place reasonable physical, electronic and managerial procedures to safeguard the information we collect. However, no security measures are perfect or impenetrable. To protect the confidentiality of your Personal Information, you must keep your password confidential and not disclose it to any other person. You are responsible for all use of the Services by any person using your password. Please advise us immediately by emailing us if you believe your password has been misused. You should also note that email is not secure, and you should not send any confidential or sensitive information to us via an unsecured email. THIRD PARTY\n' +
                    '\n' +
                    '• WEBSITES AND PRACTICES The Services may contain links to other websites or make available third party services, including ad platforms and technologies. We are not responsible for the privacy practices of such third parties. We encourage you to be aware and to read the privacy policies of any website or service that collects your information. Similarly, if you accessed the Services through another website, we are not responsible for the privacy practices of that website, and you should review the privacy policy of the originating website before providing any information to that website. This Policy applies solely to information collected by us\n' +
                    '\n' +
                    '• TRANSFERS OF INFORMATION Information about our customers, including Personal Information, may be disclosed as part of any merger, acquisition, debt financing, sale of company assets, as well as in the event of an insolvency, bankruptcy or receivership in which Personal Information could be transferred to third parties as one of sampriti business assets. In such an event, we will attempt to notify you before your Personal Information is transferred, but you may not have the right to opt out of any such transfer.\n' +
                    'THIRD PARTY LINKS:\n' +
                    '• Certain content or products available via the Platform may include materials from third-parties.\n' +
                    '\n' +
                    '• Where the Platform contains hyperlinks to websites operated by third parties these linked websites are not under the control of the Company and the Company is not responsible for the contents of any linked website. The Company provides these hyperlinks to User for convenience only and the inclusion of any link does not imply any endorsement of the linked website by the Company. Users link to any such website entirely at User’s own risk.\n' +
                    '\n' +
                    '• The Company does not:\n' +
                    '\n' +
                    '(a) Make any warranty, express or implied, with respect to the use of the links provided on, or to, the Platform;\n' +
                    '\n' +
                    '(b) Guarantee the accuracy, completeness, usefulness or adequacy of any other website, services, goods or advertisements that may be linked to the Platform; or\n' +
                    '\n' +
                    '(c) Make any endorsement, express or implied, of any other websites, services, goods or advertisements that may be linked to the Platform.\n' +
                    '\n' +
                    '• The Platform may also contain third party advertisements which contain embedded hyperlinks to websites operated by third parties. All third party advertising is paid for by the relevant third party advertiser, which User can accept by linking to the third party advertisers and are not recommendations or endorsements by the Company. The third party advertiser is solely responsible for any representations or offers made by it and for the delivery of goods or services User agrees to purchase from the third party website.\n' +
                    '\n' +
                    '• The Company is also not responsible for the reliability or continued availability of the telephone lines, wireless services, communications media and equipment User use to access the Platform.\n' +
                    '• User understands that the Company and/or third party contributors to the Platform may choose at any time to inhibit or prohibit their content from being accessed under the Terms of Use. • Please review carefully the third-party’s policies and practices and make sure to understand them before engaging in any transactions. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.\n' +
                    '\n' +
                    'OPTIONAL TOOLS:\n' +
                    '• The Company may provide you with access to third-party tools over which Company neither monitors nor has any control nor input.\n' +
                    '\n' +
                    '• The Users acknowledge and agree that access to such tools is in an “as is” and “as available” basis, without any warranties, representations or conditions of any kind and\n' +
                    'without any endorsement. The Company shall have no liability whatsoever arising from or relating to your use of optional third-party tools.\n' +
                    '\n' +
                    '• Any use by the Users of the optional tools offered through the Application is entirely at their own risk and discretion and it is the responsibility of the Users that they ensure that they are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).\n' +
                    '\n' +
                    '• The Company may also, in the future, offer new features through the Application (including, the release of new tools and resources). Such new features shall also be subject to these Terms of Service.\n' +
                    '\n' +
                    'SECURITY COMPONENTS:\n' +
                    '• The Users understand that the Platform and software embodied within the Platform may include security components that permit digital materials to be protected, and that use of these materials is subject to usage rules set by the Company or other parties that facilitate the same. The Users agree that they will not attempt to override, disable, circumvent or otherwise interfere with any such security components and usage rules embedded in the Platform. USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS:\n' +
                    '\n' +
                    '• If, at the Company’s request, User sends certain specific submissions (for example contest entries) or without a request from the Company User sends creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, ‘comments’), User agrees that the Company may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that User forwards to the Company. The Company is and shall be under no obligation\n' +
                    '\n' +
                    '(1) to maintain any comments in confidence;\n' +
                    '\n' +
                    '(2) to pay compensation for any comments; or\n' +
                    '\n' +
                    '(3) to respond to any comments.\n' +
                    '\n' +
                    '• The Company may, but have no obligation to, monitor, edit or remove content that the Company determines in sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.\n' +
                    '\n' +
                    '• User agrees that their comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. User further agrees that Users comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. User may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. Users are solely responsible for any comments User makes and their accuracy. The Company takes no responsibility and assume no liability for any comments posted by Users or any third-party.\n' +
                    'FORCE MAJEURE:\n' +
                    '\n' +
                    '• The Company shall not be liable for any damages whatsoever arising out of force majeure or other similar circumstances, directly or indirectly affecting the Company and/or the Platform. Examples of force majeure events include without limitation real or potential labour disputes, governmental actions, war or threat of war, sabotage, civil unrest, demonstrations, fire, storm, flooding, explosion, earthquake, provisions or limitations of materials or resources, inability to obtain the relevant authorization, accident, and defect in electricity or telecommunication network. Force majeure or other events beyond the Company’s control. Hindrance, delay or complication in the maintenance of the Platform entitles the Company to suspend or limit the Platform until further notice.\n' +
                    '\n' +
                    'EQUIPMENT AND INTERNET ACCESS:\n' +
                    '\n' +
                    '• User understand and agree that User is responsible for providing all telephone, modem, Internet connection, intranet connection, extranet connection and other equipment necessary for you to access the platform. Users are solely responsible for and shall bear the costs of any such equipment and any fees or charges incurred to access the Platform through an Internet access provider or other third-party service, including any applicable taxes\n' +
                    '\n' +
                    'TERMS OF USE GOVERNS :\n' +
                    '\n' +
                    '• It is understood and agreed by and between the parties that if there is any conflict between the Agreement and any other document not signed by the Company, these Terms and conditions will govern\n' +
                    '\n' +
                    'MODIFICATION OR TERMINATION OF THE PLATFORM:\n' +
                    '\n' +
                    '• The Company reserves the right at any time and from time to time to modify, discontinue, temporarily or permanently the Platform or any part thereof, with or without notice and in its sole discretion. You agree that the Company shall not be liable to you or to any third party for any modification, suspension or discontinuance of its Services. You hereby acknowledge that the Company, in its sole and absolute discretion, has the right to delete, terminate or deactivate your account, block your email or IP address or otherwise terminate your access to or participation in the use of the Platform, or remove or guard any content on the website, immediately and without notice for any reason, including without limitation, account inactivity, or if the Company has the reason to believe that you have violated any provision of the Agreement. Upon termination of your Account, your right to participate in the Platform, including but not limited to, to offer or avail of Services shall automatically terminate. In the event of termination, your account will be disabled and you may not be granted access to your Account or any files or other data contained therein. Notwithstanding the above, residual data may remain in and with the Company system. Upon Termination of your account, all licenses granted to you hereunder, will\n' +
                    'immediately terminate and you shall promptly destroy all copies of the Company’s data, marks and other content in your possession or control\n' +
                    'WAIVER:\n' +
                    '• The failure of the Company to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. LIMITATION OF LIABILITY; EXCLUSIVE REMEDY: The Company, its Directors, Officers, Employees, Agents, Representatives, Members, Joint Venturers, Licensors, Suppliers, Vendors, Distributors, Advertisers and other Contracting Parties, shall not Be liable to you for any claims arising from or related to the Agreement, the Privacy policy or your use of the Platform or any content, whether in Contract, Tort, Strict Liability or otherwise, or for any actual, incidental, indirect or consequential loss or damage. Howsoever,caused, provided that nothing herein will be interpreted so as to limit or exclude any liability which may not be excluded or limited by law. To the maximum extent permissible under applicable law, the aggregate liability of the Company and its Directors, Officers, Employees, Agents, representatives, members, joint venturers, Licensors, Suppliers, Vendors, Distributors, Advertisers and other contracting parties, or any of them, to you or any third party in any circumstance shall be limited to and in no event exceed an amount equal to the amount you paid to the Company for paid services in the 12 months immediately preceding the event giving rise to such claim. You specifically acknowledge that the Company shall not be liable for user submissions or the defamatory, offensive, or illegal conduct of any third party and that the risk of harm or damage from the foregoing rests entirely with you. INDEMNIFICATION: User agrees to indemnify, defend and hold harmless sampriti Pvt. Ltd. and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party. SEVERABILITY: • In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.\n' +
                    '\n' +
                    '\n' +
                    'TERMINATION:\n' +
                    '\n' +
                    '• The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.\n' +
                    '\n' +
                    '• These Terms of Service are effective unless and until terminated by either User or the Company. User may terminate these Terms of Service at any time by notifying us that User no longer wishes to use the Company’s Services, or when User cease using the Platform.\n' +
                    '\n' +
                    '• If in the Company’s sole judgment User fails, or the Company suspects that the User have failed, to comply with any term or provision of these Terms of Service, The Company also may terminate this agreement at any time without notice and the User will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny the User access to the Services (or any part thereof). ENTIRE AGREEMENT :\n' +
                    '\n' +
                    '• The failure of the Company to exercise or enforce any right or provision of these Terms & Conditions shall not constitute a waiver of such right or provision.\n' +
                    '\n' +
                    '• These Terms & Conditions and any policies or operating rules posted by the Company on the Platform or in respect to The Service constitutes the entire agreement and understanding between the User and the Company and governs User’s use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between the User and the Company (including, but not limited to, any prior versions of the Terms of Service).\n' +
                    '\n' +
                    '• Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party. GOVERNING LAW: • User’s rights and obligations, and all matters contemplated by these Terms & Conditions shall be governed by the laws of India and the courts at New Delhi shall have exclusive jurisdiction with respect to any claims or matters arising out of or in relation to the terms and conditions herein.\n' +
                    '\n' +
                    'POLICIES:\n' +
                    '\n' +
                    '• Policies related to returns/ exchanges, penalties, refunds, cancellation will be updated in the Application from time to time. The Company holds the right to change these policies as required in the Application without any permission from the Users.\n' +
                    'NOTICES:\n' +
                    '\n' +
                    '• All notices or demands to or upon the Company shall in writing and shall be deemed to be duly made when sent the Company’s registered address\n' +
                    '\n' +
                    '• All notices or demands to or upon a User(s) shall be effective if either delivered personally, sent by courier, certified mail, by facsimile or email to the last-known correspondence, fax or email address provided by the User(s) on the Platform, or by posting such notice or demand on an area of the Platform that is publicly accessible.\n' +
                    '\n' +
                    '• Notice to a User(s) shall be deemed to be received by such User(s) if and when the Platform is able to demonstrate that communication, whether in physical or electronic form, has been sent to such User(s), or immediately upon Platform’s posting such notice on an area of the Platform that is publicly accessible.\n' +
                    '\n' +
                    'MISCELLANEOUS:\n' +
                    '\n' +
                    '• Headings for any section of these Terms are for reference purposes only and in no way define, limit, construe or describe the scope or extent of such section.\n' +
                    '\n' +
                    '• The Company shall have the right to assign its obligations and duties in these Terms to any person or entity.\n' +
                    '\n' +
                    '• All calls to the Company are completely confidential. However, the Users’ calls may be recorded to ensure quality of service. Further, for training purpose and to ensure excellent customer service, calls from the Company may be monitored and recorded.\n' +
                    '\n' +
                    '• Any complaints or concerns with regard to the Platform or any breach of these Terms or Privacy Policy can be directed to the Company in writing at the Company’s registered address or through an email signed with electronic signature sent to info@sampriti.com'
                break
            case 'FAQ':
                data= 'To shop at Sampriti Online.Com do I have to register? If yes, why?\n' +
                    '\n' +
                    'You need to register at Sampriti Online.Com so that we can enhance your shopping experience every time you visit us. We keep you updated on your orders and refunds through email. Though we allow you to shop as a guest, we automatically register you.\n' +
                    '\n' +
                    'How do I register myself?\n' +
                    '\n' +
                    'You can register yourself by clicking on this Registration Link. Once registered, you can enjoy regular updates and services from Sampriti Online.Com.\n' +
                    '\n' +
                    'Do I need to give my email ID and mobile number for registration?\n' +
                    '\n' +
                    'Yes we will ask you for the details so that we can have your purchase delivered to you at your doorstep.\n' +
                    '\n' +
                    'Is my personal information secure at Sampriti Online.Com?\n' +
                    '\n' +
                    'Please be rest assured that your information is secured with us. Please do refer to Privacy policy for further information.\n' +
                    '\n' +
                    'Do I need to pay for registration?\n' +
                    '\n' +
                    'It is absolutely free and you only pay for your purchases.\n' +
                    '\n' +
                    'For how long is my registration valid?\n' +
                    '\n' +
                    'Once registered, you can come back to us anytime you want.\n' +
                    '\n' +
                    'I forgot my password, what do I do?\n' +
                    '\n' +
                    'Simply generate a new password by clicking on “Forgot Password” option at sign in/log in page. An email with link to generate a new password will be sent to your registered email Id.\n' +
                    '\n' +
                    'If I need to update my account information, what steps do I follow?\n' +
                    '\n' +
                    'Login in to Sampriti Online.Com, click on “My Account” and update information under your profile.\n' +
                    '\n' +
                    'How do I unsubscribe from your promotional Emails?\n' +
                    '\n' +
                    'Login in to Sampriti Online.Com, click on “My Account” and unsubscribe from my profile.\n' +
                    '\n' +
                    'I am based out of India and I want to place an order with a delivery address in India. Is it possible?\n' +
                    '\n' +
                    'We will be happy to ship you the product/s if the pin code you have selected is serviceable by our courier partners.\n' +
                    '\n' +
                    'Which category products do you sell online?\n' +
                    '\n' +
                    'Sampriti Online.Com is online fashion store catering to men and women fashion categories like apparels, shoes, accessories from brands and our own brand Sampriti Online.\n' +
                    '\n' +
                    'How do I know my size?\n' +
                    '\n' +
                    'We have provided size chart for each and every category which can be used for making a purchase. The size chart has US, UK and European sizes with conversions for easy references.\n' +
                    '\n' +
                    'Do you provide warranty/guarantee for merchandise?\n' +
                    '\n' +
                    'All products are authentic and sourced directly from vendors/brands. If manufacture provides warranty/guarantee for product then it is mentioned specifically.\n' +
                    '\n' +
                    'I have placed an order but it’s not appearing in the ‘My Account’ section. Why is that so?\n' +
                    '\n' +
                    'Do not worry! You might be experiencing some slight delay in the updating of your order details to the ‘My Account’ section, for sometimes our systems are flooded with new orders. So please be patient—Your order details will be automatically updated soon.\n' +
                    '\n' +
                    'How do I add more products to my order?\n' +
                    '\n' +
                    'Unfortunately you can’t do that but you can always place a new order and we will be happy to deliver the same to you.\n' +
                    '\n' +
                    'How can I use a voucher in the ‘My Account’ section to place an order?\n' +
                    '\n' +
                    'Add product/s to your cart and proceed to check out, and enter voucher code in apply promo code section.\n' +
                    '\n' +
                    'What are the shipping charges I need to pay for an order under INR 1199?\n' +
                    '\n' +
                    'All orders below INR 1199 will be levied a shipping charges of INR 199 which is non-refundable. In case of partial cancellation by customer if total cart value goes below the free shipping amount , Sampriti Online.Com reserves the right to recover the shipping charges of Rs. 199/-.\n' +
                    '\n' +
                    'Is there a limit to the quantity that I can order?\n' +
                    '\n' +
                    'We do not want to restrict you from shopping at your favourite online fashion store and thus there are no restrictions on quantity that you can order.\n' +
                    '\n' +
                    'How do I apply the refund voucher provided to me?\n' +
                    '\n' +
                    'Add product/s to your cart and proceed to check out, and enter voucher code in apply promo code section.\n' +
                    '\n' +
                    'Do you take orders over phone?\n' +
                    '\n' +
                    'We are happy to do so and at present place only Cash On Delivery orders for you.\n' +
                    '\n' +
                    'My order is placed. What happens next?\n' +
                    '\n' +
                    'You will receive a CONFIRMATION email and SMS .We will try to dispatch your order within 24 to 48 hours from our warehouse and will keep you informed at every step. You can also track your order through our website from ‘My Account’ section. It sometimes takes up to 24 hours for the tracking to be updated after an order is handed over to the delivery service provider.\n' +
                    '\n' +
                    'Why do I sometime see price variations on same product? What is the Sampriti Online.Com pricing policy?\n' +
                    '\n' +
                    'There are a number of factors that determine a product’s price. Prices and discounts are predefined for certain products in accordance with the brand guidelines. Any change in brand’s price shall be reflected on our website as and when fresh stocks are purchased. Thus you may see certain products may be available at different prices at the same time. For our own Sampriti Online brand we keep on adding stocks to bestsellers and thus you may see price variations on the same product within a short span of time.\n' +
                    '\n' +
                    'We regularly launch End of Season Sales and promotional campaigns for our customers, where the prices may appear different for that period of time. Once the campaign is over the prices will be either restored back or may change again.\n' +
                    '\n' +
                    'Sampriti Online.Com reserves the rights to change prices at its sole discretion.\n' +
                    '\n' +
                    'What payment methods are accepted at Sampriti Online.Com?\n' +
                    '\n' +
                    'We accept Master/Visa credit cards and all major Debit Cards. We also have an option of net banking and Cash on Delivery for our customers.\n' +
                    '\n' +
                    'Why is tax being charged?\n' +
                    '\n' +
                    'Tax is levied on the sale of any commodity, which here represents Good and Service Tax (GST). This tax is collected and deposited by Sampriti Online.Com to the relevant government authorities.\n' +
                    '\n' +
                    'Is it safe to shop online using my debit/credit card?\n' +
                    '\n' +
                    'When you shop with us you can conveniently keep all your worries and concerns behind. We strive to ensure a safe and secure shopping experience to our customers. To make sure that our customers’ shopping experience is private, safe and secure, all Credit Card, Debit Card and Net Banking transactions are processed using a secure encrypted connection to keep your transaction details confidential at all times. We do not keep your details on file; this is why we ask you for your card details each time you make a purchase.\n' +
                    '\n' +
                    'What happens if my debit/credit card has been compromised while making a payment online?\n' +
                    '\n' +
                    'We do not collect or store your credit card information. If you suspect any such thing, then please report this to your bank immediately.\n' +
                    '\n' +
                    'What happens to my money deducted from my debit card/credit card/Net Banking for an unsuccessful order?\n' +
                    '\n' +
                    'If your card is debited and no order placed, no need to panic at all!\n' +
                    '\n' +
                    'Please check your bank/credit card account, as if the money is debited on a failed transaction, it will be rolled back into your account within 7 business days. The time taken can vary from bank to bank and we unfortunately won’t be able to expedite this. Please contact your bank for updates.\n' +
                    '\n' +
                    'If the transaction is successful and the money has been credited to our account we would initiate refund within 3 days of your request.\n' +
                    '\n' +
                    'What happens if the merchandise added to cart goes out of stock?\n' +
                    '\n' +
                    'If a product goes out of stock while adding it to your shopping cart or after you have added to your cart, you will be updated immediately. You will not be able to place order with out of stock product/s\n' +
                    '\n' +
                    'Can I cancel an order?\n' +
                    '\n' +
                    'Yes, you may cancel an order within 24 hours from the time of placing the order. Login in to Sampriti Online.Com, click on “My Account” and select the order which you wish to cancel. Cancel the order by clicking on “cancel order” button.\n' +
                    '\n' +
                    'Can I cancel my exchange order?\n' +
                    '\n' +
                    'Once your exchange order is confirmed then simply cancel the order by following above steps. To cancel on-hold exchange orders, contact our customer care team and they will assist you with same.\n' +
                    '\n' +
                    'Why was my order cancelled by Sampriti Online.Com?\n' +
                    '\n' +
                    'Though we would love to deliver you your purchase every time you order from us but sometimes due to product failing quality checks at our end we would be forced to cancel your order.\n' +
                    '\n' +
                    'Can I cancel a partial order?\n' +
                    '\n' +
                    'Yes, you may cancel a partial order before the order is processed. To cancel partial orders log into your account on and cancel transaction that you no longer require. You might not be able to do partial cancellation in some promotional offers.\n' +
                    '\n' +
                    'Do you deliver out of India?\n' +
                    '\n' +
                    'At present we deliver only in India.\n' +
                    '\n' +
                    'What happens if I am not available when you deliver the merchandise?\n' +
                    '\n' +
                    'For all Online Order our Delivery service providers will make three attempts to deliver before the product will be returned to our warehouse. After this it may be re-dispatched as per customer’s request.\n' +
                    '\n' +
                    'In case of Cash on Delivery Order, the Delivery Service provider normally calls before making delivery attempt. If customer is not present when our delivery service provider attempts to deliver the order, three more attempts are made automatically and after that product is returned to our warehouse.\n' +
                    '\n' +
                    'Can I book an order for delivery to more than one address?\n' +
                    '\n' +
                    'Each order is shipped only to a single address. However if you wish to ship products to different addresses, you may do so by placing multiple orders.\n' +
                    '\n' +
                    'What are the shipping charges and/or are there any additional charges?\n' +
                    '\n' +
                    'Free shipping is available on all products, subject to a minimum order value. A Non-refundable charge of Rs. 199/- will be applied to all orders below Rs. 1199/-.\n' +
                    '\n' +
                    'How can I track my order?\n' +
                    '\n' +
                    'You can track your order status in the “My Account” section. Once it is dispatched, the shipment details are updated in your account, which you can track on the respective courier’s website.\n' +
                    '\n' +
                    'What is the stipulated delivery time for an order?\n' +
                    '\n' +
                    'Depending upon your location delivery may take 3 to 5 working days after the order is dispatched from our warehouse.\n' +
                    '\n' +
                    'Where do I apply the promotional voucher?\n' +
                    '\n' +
                    'Add product/s to your cart and proceed to check out, and enter voucher code in apply promo code section.\n' +
                    '\n' +
                    'How do I return the product/s?\n' +
                    '\n' +
                    'At present due to COVID-19 we are not accepting returns/exchange.\n' +
                    '\n' +
                    'How do I exchange the product/s?\n' +
                    '\n' +
                    'At present due to COVID-19 we are not accepting returns/exchange.\n' +
                    '\n' +
                    'When will my exchange item be shipped?\n' +
                    '\n' +
                    'Exchange items are shipped within 24 hours after the item returned has passed quality checks.\n' +
                    '\n' +
                    'What should I do if my order is received in a damaged condition?\n' +
                    '\n' +
                    'We apologize for this however in a rare case you happen to receive a damaged/defective product, please notify us within 24 hours of receipt. We might request you to share a photograph at info@Sampriti Online.com.\n' +
                    '\n' +
                    'What should I do if I receive a different item from the one that I have ordered?\n' +
                    '\n' +
                    'We apologize for this, however in a rare case where you happen to receive a different product from what you had ordered, please notify us within 24 hours of receipt. We might request you to share a photograph at info@Sampriti Online.com.\n' +
                    '\n' +
                    'Why do I need to self-ship?\n' +
                    '\n' +
                    'In case your pin code is not serviced by our courier partner, you will have to self-ship the product(s) back to us, to reach our Returns Department.\n' +
                    '\n' +
                    'Where do I need to self-ship my products?\n' +
                    '\n' +
                    'Shipping Address for self-ship product/s:-\n' +
                    '\n' +
                    'Marble E-Retail Pvt. Ltd.,\n' +
                    'Plot number 54 B,\n' +
                    'Sector 18, Gurugram,\n' +
                    'Haryana – 122015\n' +
                    '\n' +
                    'My return request was initiated but the reverse pick-up has not yet been done. What should I do?\n' +
                    '\n' +
                    'Normally it takes 3 to 4 working days for a reverse pick but in case no courier partner has contacted you please feel free to contact us at 0124-6770000 10 am to 7 pm (Monday to Saturday) or email us at info@Sampriti Online.com\n' +
                    '\n' +
                    'I need to return more than one product, so can I hand over all the products to the reverse pick-up person in one go?\n' +
                    '\n' +
                    'At present for every product’s reverse pick up is done separately, thus we request you to only hand over the product for which the return was initiated.\n' +
                    '\n' +
                    'I ordered the same product in more than one quantity. How do I do a partial return?\n' +
                    '\n' +
                    'Please contact us at 0124-6770000 10 am to 7 pm (Monday to Saturday) or email us at info@Sampriti Online.com and our team member will help you.\n' +
                    '\n' +
                    'What are the refund options available to me?\n' +
                    '\n' +
                    'You can choose to get your refund in the following ways:\n' +
                    '\n' +
                    'Cash refund via bank transfer into your account for all COD orders\n' +
                    'Money back to the paid account/ credit card for all online orders.\n' +
                    'A Coupon Code of the refund value in your Sampritionline.Com account, which can be redeemed against any purchase. You may check the issued Coupon Code under the ‘Coupons’ section, by clicking on ‘My Account’ at Sampriti Online.Com.\n' +
                    'How do I get my balance refund-voucher amount?\n' +
                    '\n' +
                    'Please contact us at 0124-6770000 10 am to 7 pm (Monday to Saturday) or email us at info@Sampriti Online.com and our team member will help you.\n' +
                    '\n' +
                    'Will I get refund of my Shipping Charges in case of return?\n' +
                    '\n' +
                    'No. Shipping charges are non-refundable.\n' +
                    '\n' +
                    'What are the Customer Care working hours?\n' +
                    '\n' +
                    'We work 10 am to 7 pm Monday to Saturday.\n' +
                    '\n' +
                    'I want to sell my products on Sampritionline.Com. Whom do I get in touch with?\n' +
                    '\n' +
                    'Write to us on info@Sampritionline.com and we will assist you further.\n' +
                    '\n' +
                    'Is there a bug bounty program at Sampriti Online?\n' +
                    '\n' +
                    'Sampriti Online will give a Certificate of Recognition for every bug found and reported to us. In case you have a found an issue, you can email us at info@Sampritionline.com. Cash or in-kind rewards are not supported currently.\n' +
                    '\n'
                break
            default :
                data = ''
        }
    useEffect(() => {
        navigation.setOptions({ title: route.params && route.params.name ? route.params.name  : 'Informative' });
        return () => {}
    }, [])

        return <Block style={{padding:theme.SIZES.BASE}}>
            <ScrollView>
                <Text size={24} color={materialTheme.COLORS.TEXT} style={{marginBottom: theme.SIZES.BASE, fontWeight:'700'}} >{route.params && route.params.name ? route.params.name  : 'Informative'}</Text>
                <Text size={18} color={materialTheme.COLORS.TEXT} style={{marginBottom: theme.SIZES.BASE, fontWeight:'500'}}>
                    {data}
                </Text>
            </ScrollView>
        </Block>;
    };

export default Informative;

const styles = StyleSheet.create({
    Heading:{

    }
})
