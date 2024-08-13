import React from 'react';
import '@/app/styles/globals.css';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/footer';

const Terms = () => {
    return (
        <>
            <Navbar />

            <div class="dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 min-h-screen p-6">
                <div class="max-w-6xl mx-auto bg-white dark:bg-zinc-800 p-8 ">
                    <div class="bg-zinc-900 text-white py-12 px-4 sm:px-6 lg:px-8">
                        <div class="w-full mx-auto text-center">
                            <h1 class="text-4xl font-bold">Terms of Use</h1>
                            <div class="border-b-4 border-red-500 w-24 mx-auto my-4"></div>
                            <p class="text-lg">Last Update: 10/06/2025</p>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <section>
                            <h2 class="text-xl font-semibold mb-2 mt-12 ">1. About Our Terms</h2>
                            <ol class="list-decimal list-inside space-y-2">
                                <li>By registering an account on the website of <span class="font-semibold">Educaliste</span>, you are agreeing to be bound by these terms of service (Terms), all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</li>
                                <li>We are <span class="font-semibold">Educaliste</span> Ltd, a company registered in England and Wales under company registration number 12345678. Our registered office is at Kemp House, 160 City Road, London, United Kingdom, EC1V 2NX.</li>
                                <li>These terms explain how you may use this Site and any of its content including the learning modules that we make available on it (Room). By using the Site, you agree to be bound by the Terms. If you do not agree with any of the Terms, you should stop using the Site immediately.</li>
                                <li>Our agreement with you is comprised of these Terms, our Acceptable Use Policy (see below), and our Privacy Notice (see below), which together constitute the entire agreement between us (Agreement).</li>
                            </ol>
                        </section>

                        <section>
                            <h2 class="text-xl font-semibold mb-2">2. Using the Site</h2>
                            <ol class="list-decimal list-inside space-y-2">
                                <li>The Site is for your personal use only. You must not use it for business purposes or provide access to it through your account to any other person.</li>
                                <li>As a condition of using the Site, you must not, except as permitted by the rules of specific Rooms and only to the extent within a Room:
                                    <ol class="list-decimal list-inside ml-6 space-y-2">
                                        <li>misuse or attack the Site by knowingly introducing viruses, trojans, worms, logic bombs, or other material that is malicious or technologically harmful to the Site;</li>
                                        <li>share, offer, or communicate instructions and/or instructions, user codes and/or materials available on the Site (such as by way of denial-of-service attack);</li>
                                        <li>attempt to gain unauthorized access to the Site and/or Room, the server on which the Site is stored or any server, computer or database connected to the Site; and</li>
                                        <li>use the Site in any way that breaches any applicable local, national, or international law or regulation.</li>
                                    </ol>
                                </li>
                                <li>We may prevent or suspend your access to the Site if you fail to comply with this Agreement or any applicable law.</li>
                                <li>Data without a supported account cannot be shared through the Site.</li>
                            </ol>
                        </section>

                        <section>
                            <h2 class="text-xl font-semibold mb-2">3. Registration and Password Security</h2>
                            <ol class="list-decimal list-inside space-y-2">
                                <li>To use the Site, you must register for an account. You are responsible for making sure that your account details are kept secure and confidential. If we have reason to believe that there is likely to be a breach of security or misuse of the Site through your account or use of your password, we may require you to change your password or we may suspend your account.</li>
                            </ol>
                        </section>

                        <section>
                            <h2 class="text-xl font-semibold mb-2">4. Ownership, Use and Intellectual Property Rights</h2>
                            <ol class="list-decimal list-inside space-y-2">
                                <li>We grant you an irrevocable, royalty-free, global, sub-licensable, unrestricted license over all media, code, designs, templates, graphics, or other content that you upload to the Site (User Generated Content) to use that User Generated Content. For the purpose of enabling us to use your User Generated Content within the Site, you grant us a non-exclusive, royalty-free, global, sub-licensable, unrestricted license to use, copy, reproduce, distribute, and make available your User Generated Content.</li>
                                <li>You are solely responsible and liable for ensuring that your User Generated Content does not infringe any third party rights and indemnify us against any claims, damages, expenses, and/or losses arising out of or related to claims that the User Generated Content infringes any third party rights.</li>
                                <li>We have the right to remove, edit, or refuse to post any User Generated Content that we consider to be inappropriate or that we believe may infringe the rights of others.</li>
                                <li>All intellectual property rights in the Site and any content provided by us (other than User Generated Content) are owned by us. You have no rights in or to the Site or the information or material contained in it other than the right to use it in accordance with this Agreement.</li>
                            </ol>
                        </section>

                        <section>
                            <h2 class="text-xl font-semibold mb-2">5. Disclaimers</h2>
                            <ol class="list-decimal list-inside space-y-2">
                                <li>The information on the Site is provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>
                                <li>Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on the Site or otherwise relating to such materials or on any sites linked to this Site.</li>
                            </ol>
                        </section>

                        <section>
                            <h2 class="text-xl font-semibold mb-2">6. Hyperlinks and Third Party Sites</h2>
                            <ol class="list-decimal list-inside space-y-2">
                                <li>The Site may contain hyperlinks or references to third party advertising and websites other than the Site. We have no control over third party advertising or websites and accept no legal responsibility for any content, material, or information contained in them. The display of any hyperlink and reference to any third party website, product, or service does not mean that we endorse that third party's website, products, or services. Your use of a third party site may be governed by the terms and conditions of that third party site.</li>
                            </ol>
                        </section>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Terms;
