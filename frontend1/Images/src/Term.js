import { Typography, Grid } from '@mui/material';
import React,{useEffect} from 'react';
import Footer from './Footer';
import Header from './Header';
import Mobileheader from './Mobileheader';
import useMediaQuery from '@mui/material/useMediaQuery';

const Terms = () => {
	const mobile = useMediaQuery('(max-width:600px)');
	useEffect(() => {
		window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
	  }, []);
  return (
    <>
 {mobile?<Mobileheader/>:<Header/>}
<Grid container lg={12} xs={12}>
        <Grid container lg={10} xs={12} sx={{margin:'auto'}}>
        <Grid item lg={12} xs={9.8} sx={{margin:"auto"}}>
       <Typography variant='h2' sx={{textAlign:'initial',fontSize:mobile?'20px':'24px',marginTop:mobile?'35px':'80px'}}><b>Terms and Conditions</b></Typography> 
        </Grid>
      
       
        <Grid item lg={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'28px':"16px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
			All users of this Website (located at https://gorails.tech/) agree that access to, and use of this
						  Website is subject to the following terms and conditions and other applicable law.
					  </Typography>
            </Grid>
            <Grid item lg={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"16px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
			The services
available on the Website are offered and are available to the users who are 18 years of age or
older. By using this Website, Users represent and warrant that they are of legal age to form a
						  binding contract.
					  </Typography>
            </Grid>
            <Grid item lg={12} xs={10} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"16px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
			If user does not meet these requirements, they must not access or use the
Website. </Typography>
            </Grid>
            <Grid container lg={12} xs={10} sx={{margin:mobile?'auto':'0px'}}>
        <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"16px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            I.   &nbsp; &nbsp;<b>General Information:</b> Hubhawks Marketing India Private Limited, a Private Limited Company registered under the
Companies Act, 2013 having its registered office at Haryana is the proprietor of this Website having domain name and
style of “GorailsTech” (“GorailsTech”, “Platform”, “We”, “Our” or “Us”).
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"16px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
             &nbsp; &nbsp;By accessing the Website, the registered customer/user and/or viewer of the Website (“User”,
“You”, or “Your”) agree to be bound by these Terms of Use and to use the Website in
accordance with these Terms of Use, privacy policy and any additional terms and conditions that
may apply to specific sections of the Website or to Services available through the Website
(“Services”).
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"16px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
			If You object to Our Terms regarding Your use of the Website and Services provided by GorailsTech,
kindly refrain from further usage and registration on the Platform.   </Typography>
           
            </Grid>
        <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            II.   &nbsp; &nbsp;<b>Intellectual Property Right</b>  All contents on this Website including but not limited to the manuscript, chapter text, graphics,
videos, and image are governed and protected by the Copyright Act, 1957 and subsequent
amendments, the Trademark Act, 1999 and subsequent amendments, moral rights and other
laws relating to the intellectual property rights. The contents and the chapters of manuscript
displayed on the Website are the property of GorailsTech and/or of respective authors.
						  </Typography>
						  <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
						  No part of the content of the Website may be downloaded, copied, reproduced, republished,
posted, transmitted, stored, sold, captured by way of screenshot, or distributed without the prior
express consent of the copyright holder.
            </Typography>
          
        <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            III.   &nbsp; &nbsp;<b>Fee and Payment:</b>  
										  </Typography>
			<Grid container xs={12}
											  lg={12}>
											  <Grid item lg={12} xs={12} sx={{ margin: "auto" }}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
			A fee is applicable on the Website for access to the premium version of GorailsTech. By choosing the
premium version of GorailsTech, you agree to remit the applicable subscription fee. In the event that
legal action becomes necessary to collect outstanding balances, You consent to indemnify GorailsTech
or its designated representative for all costs associated with recovering the owed amounts,
including attorney&#39;s fees and other legal expenses.         </Typography>
                     {/* <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            b.   &nbsp; &nbsp;Unused funds in the Hubhawks Balance will expire after 2 years of inactivity in the Business Account.
											  </Typography> */}
											  </Grid>
											  </Grid>
                     
        <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            IV. &nbsp;<b>Accessing Our Services:</b> The User would be able to access the services of Sluhsie by creating an account on the website
via their E-mail ID. User also has an option to sign up with their Social Media account. GorailsTech
reserves the right to refuse registration of, or cancel the registration of a User at its sole discretion. User is solely responsible for making all arrangements necessary to have access to
Our services.
            </Typography>
            <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            V. &nbsp;<b>Account and Password:</b> 
													  </Typography>
													
														  <Grid item xs={12} lg={12} sx={{ margin: "auto" }}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            You are responsible for safeguarding the password that You use to access the services and for
any activities or actions under Your password. We encourage you to use “strong” passwords
(passwords that use a combination of upper and lower case letters, numbers and symbols) with
your account. You must treat such information as confidential. You must not disclose it to any
third party.</Typography>
                     {/* <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            b.   &nbsp; &nbsp; You acknowledge and agree that a violation of this non-circumvention requirement is a material breach of the Hubhawks Terms and may lead to a permanent suspension of the violating Account.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            c.   &nbsp; &nbsp; In light of the difficulties in measuring or estimating the damage which may be incurred by Hubhawks as a consequence of any non-circumvention breach, you hereby agree to pay Hubhawks liquidated damages in the amount of ____________ (the “Liquidated Damages “) if Hubhawks determines, in its sole discretion, that you have violated this Non-Circumvention Section. You acknowledge and agree that the Liquidated Damages are a reasonable approximation of such damages and do not constitute a penalty.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            d.   &nbsp; &nbsp; Hubhawks may, to the maximum extent permitted by law (i) charge your Hubhawks Balance and/or payment method the Liquidated Damages or send you an invoice for the Liquidated Damages, which you agree to pay within 30 days, and (ii) charge you (in the same manner) for all reasonable expenses, including legal fees, related to investigating such breach and collecting such fees.
                     </Typography> */}
													  </Grid>
													 
                     <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
															  VI. &nbsp;<b>Change or Modification of Terms</b> 
													  
									
														  </Typography>
						 </Grid>
			<Grid item xs={12} lg={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
			We may amend the Terms of Use from time to time at our sole discretion without notice or
liability to You. By continuing to access the Website following such amendments to the Terms
of Use, You agree to be bound by such amendments.     </Typography>
                     {/* <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            b.   &nbsp; &nbsp;Hubhawks accredits Collaborators once a service has been provided and completed at the end of the Collaborator.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            c.   &nbsp; &nbsp;If an order is cancelled (for any reason), the funds paid will be returned to the User’s Hubhawks Balance subject to any cancellation fee at the sole discretion of Hubhawks;
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            d.   &nbsp; &nbsp;Collaborators are responsible for paying any direct or indirect taxes, including any GST, VAT or income tax, which may apply to them depending on residency, location or otherwise, under provisions of their jurisdiction. Collaborators represent and warrant that they comply, and will comply at all times, with their obligations under income tax provisions in their jurisdiction. The prices shown in the Rate Schedule for the available Services are inclusive of all such taxes and charges that may apply to the Collaborators.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            e.   &nbsp; &nbsp;Appointment as Payment Collection Agent: Collaborator hereby appoints Hubhawks as Collaborator’s limited authorized payment collection agent solely for the purpose of accepting payments (via its Payment Services Provider, if applicable) from User, and remitting those payments to Collaborator. Collaborator agrees that payment from User to Hubhawks shall be considered the same as made directly to Collaborator. User’s payment obligation to Collaborator will be satisfied upon receipt of payment by Hubhawks (or its Payment Services Provider, as applicable), and Hubhawks (via its Payment Services Provider, as applicable) is responsible for remitting the funds to the Collaborator in the manner described in these Payment Terms. Collaborator agrees that Hubhawks may describe or otherwise reflect the terms contained herein in any Terms of Service, receipts, disclosures, or notices including, but not limited to, receipts provided to Users that Hubhawks may deem necessary or prudent.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            f.   &nbsp; &nbsp;Hubhawks partners with Payment Services Providers for purposes of collecting payments from Users, transferring such payments from Users to Collaborators, and holding funds in connection with Hubhawks Balances. All payment services in connection with the withdrawal of funds on the Hubhawks platform are performed by Hubhawks’ Payment Services Providers.
                     </Typography> */}
                     </Grid>
                     
            <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            VII. &nbsp;<b>Changes to Our Services</b> 
															  </Typography>
														  </Grid>
                              
			 <Grid item lg={12} xs={12} sx={{margin:"auto"}}>									  
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
											  The services that We provide may change from time to time without prior notice to You.
										  </Typography>
                     
														  </Grid>
                    
                     <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            VIII. &nbsp;<b>Limited Liability and Warranty</b> 
										  </Typography>
										  <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
										  8.1   &nbsp; &nbsp;This clause limits the liability of GorailsTech and its parent, affiliates, related companies, officers,
directors, employees, agents, representatives, partners and licensors. Your access to and use of
Our services is at Your sole risk and Service is provided “as is”, “as available” and all warranties,
express or implied are disclaimed including but not limited to quality and fitness for a particular
purpose with respect to the Website. The information may contain bugs, errors, problems or
other limitations. We have no liability whatsoever for Your use of any information or service.
The services provided by GorailsTech are for Your personal use only and GorailsTech make no
representation or warranty of any kind, expressed or implied, including without limitation, any
warranties on merchantability for any particular purpose.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
					 8.2.   &nbsp; &nbsp;We do not provide any guarantees or assume any responsibility for the following:
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
					 8.2.1.   &nbsp; &nbsp;The information presented in Our Services is accurate, adequate, current or reliable, or
may be used for any purpose other than for general reference;
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
					 8.2.2.   &nbsp; &nbsp;The information presented in Our Services is free of defect, error, omission, virus or
anything which may change, erase, add to or damage your software, data or equipment; </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
					 8.2.3.   &nbsp; &nbsp;Messages sent through the internet including in connection with the services will be free
from interception, corruption, error, delay or loss;
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
					 8.2.4.   &nbsp; &nbsp;Access to the Services will be available or be uninterrupted;
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
					 8.2.5.   &nbsp; &nbsp;Withdrawals are final and cannot be undone. We will not be able to reverse this process once it has begun.
                     </Typography>
                     <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
					 8.2.6.   &nbsp; &nbsp;Use of the Services will achieve any particular result; or	  </Typography>
                                  </Grid>
                               
       									  
				<Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            8.3. &nbsp;Without limiting the generality of the foregoing, in no event will GorailsTech be liable to You or any
other person for any direct, indirect, incidental, special, punitive or consequential loss or
damages, including any loss of business, profit, goodwill or reputation arising out of any use, or inability to use, the information or the services including any loss of business, profit, goodwill or
reputation arising out of any use, or inability to use, the information or the services.
																	  </Typography>
																	  </Grid>
																	  <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            8.4. &nbsp;You will exercise and rely solely on Your own skill and judgment in Your use and interpretation
of the information and use of the Services provided by GorailsTech. You are responsible to ensure
that Your use of the information and the Services of the Platform complies with all applicable
legal requirements.
																	  </Typography>
									  </Grid>
									  <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            8.5. &nbsp;The limitation of liability contained in these Terms of Use will apply to the fullest extent
permitted by applicable laws.
																	  </Typography>
									  </Grid>
									  <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            8.6. &nbsp;Notwithstanding anything contained herein or elsewhere, in case of a non-paid User i.e., the
User not having access to the premium version of the Platform, We completely disclaim any
kind of liability whether under this Terms of Use or applicable law.
																	  </Typography>
									  </Grid>
									  <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            8.7. &nbsp;In case of paid Users i.e., Users having access to the premium version of the Platform, GorailsTech
shall be held liable only for its breach of these terms or any additional service-specific terms, if
applicable, in accordance with the governing laws. GorailsTech&#39;s total liability howsoever arising due
to (i) Your usage of the Website, or (ii) any services availed, or (iii) otherwise, arising from or
relating to these Terms of Use, is limited to an amount not exceeding 100% of the fee last paid
by the User for the utilization of the Services provided via the platform.
																	  </Typography>
																	  </Grid>  
                                   
									  <Grid item lg={12} xs={12} sx={{ margin: "auto" }}>
									  <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            IX. &nbsp;<b>Content on the Platform</b> 
										  </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            9.1.   &nbsp; &nbsp;Manuscript or chapters thereof, which are posted publically or privately transmitted is the sole
responsibility of the person who originated such content.</Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            9.2   &nbsp; &nbsp;You will be liable to Us and indemnify Us for any breach of warranty and You will be
responsible for any loss or damage We suffer as a result of Your breach of warranty.</Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            9.3  &nbsp; &nbsp;By using Our Platform, You hereby grant Your consent for Us to share the information You
provide, with third-party service providers, such as publishers, when such disclosure is deemed
necessary to facilitate the provision of the services You intend to access on or through the
Platform.</Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            9.4.   &nbsp; &nbsp; GorailsTech will not be responsible or liable to any third party, for the content or accuracy of any
content published/posted by any User of our Website. </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            9.5.   &nbsp; &nbsp; The views expressed by other Users on the 3 chapters chosen by You, which is published on the
social media for the purpose of getting votes do not represent Our views or values. GorailsTech
maintains the right to remove any post on the Website or social media account.</Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            9.6.   &nbsp; &nbsp; We do not endorse, support, represent or guarantee the completeness, truthfulness, accuracy, or
reliability of any content of manuscript of the Users/authors posted on the Website. </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            9.7.   &nbsp; &nbsp;Under no circumstances, We will be liable in any way for any content, including, but not limited
to, any errors or omissions in any content, or any loss or damage of any kind, incurred directly or
indirectly as a result of the use of the Platform by any third party, including without limitation
any defamatory, offensive, or illegal conduct of the third party, or the use of any chapters or
manuscript posted, emailed, transmitted, or otherwise made available via the Platform or social
media account.</Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            9.8.   &nbsp; &nbsp;We do not endorse objectionable content that does not adhere to the terms and conditions of
											  Google accounts or any social media accounts, including but not limited to:	  </Typography>
											  <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            9.8.1.   &nbsp; &nbsp;Defamatory, discriminatory, or mean-spirited manuscripts or chapters thereof, including
references or commentary about religion, race, sexual orientation, gender,
national/ethnic origin, or other targeted groups, particularly if the app is likely to humiliate, intimidate, or place a targeted individual or group in harm’s way. Professional
political satirists and humorists are generally exempt from this requirement.  </Typography>
<Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            9.8.2.   &nbsp; &nbsp;Manuscript or chapters thereof, depicting realistic acts of harm, cruelty, or violence
towards people or animals, or content that promotes violence.	  </Typography>
											  <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            9.8.3.   &nbsp; &nbsp;Explicitly sexual or pornographic material.	  </Typography>
											  <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            9.8.4.   &nbsp; &nbsp;Inflammatory religious commentary or inaccurate or misleading quotations of religious
											  texts.	  </Typography>
											  <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            9.9.   &nbsp; &nbsp;If We reasonably believe that any of Your content, manuscript or chapters thereof (i) violates the
applicable law, (ii) could harm Our other Users, and third party, and/or (iii) if the content is of
the description as mentioned in the clause 9.8, then we reserve the right to take down the
manuscript or the chapters thereof published on the Website or social media account. Examples
include child pornography, content that facilitates human trafficking or harassment, terrorist
content, and the content that infringes someone else’s intellectual property rights.	  </Typography>
						
										  
															  </Grid>
         
            <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            X. &nbsp;<b>Undertaking from User</b> 
            </Typography>
			  </Grid>
       
        <Grid item lg={12} xs={12} sx={{margin:"auto"}}>									  
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            10.1.   &nbsp; &nbsp;<u>User&#39;s Certification of Manuscript Originality and Proper Attribution:</u> By submitting the
manuscript for the purpose of publication, the User certifies that the manuscript is a product of
their independent and original work. The User further affirms that they have duly acknowledged
											  all sources from which ideas and excerpts have been incorporated in the manuscript. </Typography>
											  <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            10.2.   &nbsp; &nbsp;<u>User&#39;s Certification of Non- Infringement, Non-Plagiarism and Exclusive Submission:</u> The User
by submitting the manuscript for the purpose of publication also certifies that the manuscript is
free from Intellectual Property Right Infringement including copyright infringement, free from
plagiarism and has not been submitted for publication elsewhere. The User certifies that the
manuscript does not violate any laws of India or beyond. The User agrees that, following
manuscript submission and subsequent approval for publication, they will not engage with any
other entity or individual for the purpose of publication of the same manuscript. </Typography>
											  <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            10.3.   &nbsp; &nbsp;<u>User&#39;s Responsibility:</u>The User acknowledges and agrees that they bear sole responsibility for
the manuscript they submit. GorailsTech shall not be held responsible for the manuscript or any
potential violations of Indian laws or those of any other country as a result of the manuscript’s
publication. GorailsTech operates solely as a platform to facilitate and promote the manuscript
publication and does not assume any liability stemming from the content of the manuscript. </Typography>
											  <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            10.4.   &nbsp; &nbsp;<u>Exclusive Publication Commitment:</u> The User expressly agrees that, upon manuscript
submission and subsequent approval for publication through Our platform, User shall commit
to exclusive publication with GorailsTech and shall not enter into any agreements or arrangements
with other parties for the publication of the same manuscript. GorailsTech shall have the exclusive
right to publish and distribute the manuscript in print, digital or any other format as agreed by
both the User and GorailsTech. By submission of the manuscript, User warrants that they have right
to grant the exclusive rights herein to GorailsTech. In the event that the User contravenes this
exclusivity clause by publishing or distributing the manuscript to any other party including but
not limited to any third party publisher, without prior written consent of GorailsTech, the User shall
be liable for damages. </Typography>
           
            </Grid>
         	
            <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            XI. &nbsp;<b>Rights of the Author</b> 
            </Typography>
            </Grid>
          
            <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
			Author retains the rights to the manuscript or chapters thereof submitted on the Website or on
the social media account. By submitting manuscript at the Website, You grant us the right to use,copy, reproduce, process, adapt, modify, publish, transmit, display and distribute such
manuscripts or chapters thereof at the Website or at social media platform when such acts are
deemed necessary to facilitate the provision of the services You intend to access on or through
the Website. </Typography>
            </Grid>

            <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            XII. &nbsp;<b>Third Party Website</b> 
            </Typography>
            </Grid>
           
            <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            While using Our Website, you are subject to the rules, terms, conditions, and other policies,
including privacy policies. While using Our Website, it may take you to the other third-party
websites to which We provide links. Please be aware that we do not assume responsibility for the
content, accuracy, or opinions expressed on these linked third party websites. Furthermore, these
websites are not subject to Our investigation, monitoring, or verification for accuracy or
											  completeness.</Typography>
											  <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
											  The inclusion of any linked website on our site does not signify Our endorsement or approval of
that website. It is important to note that Our website and the third-party linked websites operate
independently, and neither party possesses the authority to make representations or
commitments on behalf of the other.
If You choose to leave Our site and access these third-party linked sites, it is at your own risk.</Typography>
            </Grid>
    
            <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            XIII. &nbsp;<b>Indemnity</b> 
            
            </Typography>
            </Grid>
         
            <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
			You agree to defend, indemnify and hold Us harmless from and against all liabilities, damages,
claims, actions, costs (including the legal fee) and expenses, in connection with or arising from
Your breach of any of these Terms of Use and/or Your use of the Website. No settlement that
might have an adverse impact on Our rights or obligations shall be executed without Our prior
written consent. We retain the right, at Our own expense and with notice to You, to assume
exclusive defense and control of any claim or legal action. </Typography>
            {/* <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            b.   &nbsp; &nbsp;Indirect taxes are in addition to the price shown on the Platform, and in any event, any such taxes will always be displayed to the User before payment.
            </Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            c.   &nbsp; &nbsp;Users are responsible for paying any direct or indirect taxes, including any GST, VAT, or income tax, which may apply to them depending on residency, location or otherwise, under provisions of their jurisdiction.
            </Typography> */}
            </Grid>
          
            <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            XIV. &nbsp;<b>Severance</b> 
            </Typography>
            </Grid>
         
            <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
			If any term of this Terms of Use is, in whole or in part, held to be illegal or unenforceable to any
extent under any enactment or rule of law, that term or part shall to that extent be deemed not to
form part of this agreement and the enforceability of the remainder of this agreement shall not
be affected.  </Typography>
            </Grid>
          
            <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            XV. &nbsp;<b>Termination</b> 
            </Typography>
            </Grid>
           
            <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            15.1.   &nbsp; &nbsp; The Terms of Use will continue to apply until terminated by either You or Us. You may
terminate Your agreement with Us at Your discretion, for any reason, by deactivating Your
accounts and ceasing Your use of the Services. Please be sure to provide us with specific notice
when You discontinue Your use of the Services so that We can appropriately terminate the
associated services.</Typography>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            15.2.   &nbsp; &nbsp;We reserve the right to terminate Your account or discontinue providing all or part of the
Services at any time for any reason, including but not limited to the following circumstances: (i)
your breach of these Terms of Use; (ii) the creation of risk or potential legal exposure for us; or
(iii) when the provision of Services to you is no longer commercially feasible. We will make
diligent efforts to notify you through the email address associated with your account or upon
your next attempt to access your account. </Typography>
         
            </Grid>
          
            <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            XVI. &nbsp;<b>Waiver</b> 
            </Typography>
            </Grid>
          
            <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            16.1.   &nbsp; &nbsp;No failure or delay by a party to exercise any right or remedy provided under this agreement or
by law shall be deemed a waiver of that or any other right or remedy, nor shall it impede or limit
the subsequent exercise of that or any other right or remedy. Furthermore, no single or partial
exercise of such right or remedy shall hinder or restrict the future exercise of that or any other
right or remedy.</Typography>
          
            </Grid>
            
            <Grid item lg={12} xs={12} sx={{margin:"auto"}}>
            <Typography sx={{marginTop:mobile?'12px':"26px",fontSize:mobile?'14px':'18px',lineHeight:mobile?'20px':'28px',textAlign:'initial'}}>
            XVII. &nbsp;<b>Governing Law and Jurisdiction</b>   These Terms of Use shall be governed and construed in accordance with the laws of the
Republic of India and the Parties agree to submit to the jurisdiction of courts of Delhi, India.
            </Typography>
            </Grid>
           
          
        
            
       
          
            
        
          
           
           


          
            </Grid>
           
      
          
   
       
        
   
     
            </Grid>
         
     
   
    
       
   
        
       
            
    
       
      
     
         
         
      
      
           
          
     
     
       
      
     
     
          
     
      
        
        
     
    
       
     
       
       
   
      
       
           
     
      
     
     
     
   
    
      
      
    
 
      
     
       </Grid>
    
       </Grid>
      
       </Grid>
  
       
       </Grid>
      </Grid>
      <Footer/>
    </>
  )
}

export default Terms