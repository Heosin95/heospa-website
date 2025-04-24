import Image from "next/image";
import Button from "@/app/components/button";

export default function Home() {
    return (
        <>
            <header>
                <p>Whether you are a busy doctor or my king Heo, this spa always has a special place just for my dear
                    husband! 🐷❤️🐷 </p>
            </header>
            <main>
                <section id="welcome">
                    <div>
                        <h1>Welcome to</h1>
                        <h1 className="alternateTextColor">HEO SPA</h1>

                    </div>
                    <Image src="/hh1.png" alt=".." width="244" height="244"></Image>
                </section>
                <section id="King">
                    <p>" My Heo, want to feel like a 'King' today? Come to my spa and let me pamper you! From a relaxing
                        hair wash to a refreshing blowout and facial, you’ll feel like new. Plus, enjoy a stress-free
                        bath time after a long day. You’ll be my handsome man in no time! 💌 🐷 😌 " </p>

                </section>
                <div id="menu">
                    <section id="services">
                        <h1>Our services</h1>
                        <div id="serviceMenu">
                            <div className="serviceMenu">
                                <a href="mailto:heospaa@gmail.com?subject=One hair wash, please!&body=Hi Heo, I’d like to book a hair wash. I’m ready for some bubbles and head massage vibes 😌./" target="_blank">
                                    <Image
                                        src="/logo 1.png"
                                        alt="logo 1"
                                        width={150}
                                        height={150}/>
                                </a>
                                <p className="serviceText">Hair Wash & Drying </p>
                            </div>
                            <div className="serviceMenu">
                                <a href="mailto:heospaa@gmail.com?subject=Time for a trim! ✂️&body=Hi Heo, Booking a haircut. My hair’s trying to join a rock band – gotta tame it a bit 😅./" target="_blank">
                                    <Image
                                        src="/logo 3.png"
                                        alt="logo 3"
                                        width={150}
                                        height={150}/>
                                </a>
                                <p className="serviceText">Hair Cut </p>
                            </div>
                            <div className="serviceMenu">
                                <a href="mailto:heospaa@gmail.com?subject=Face needs some love 🌸&body=Hi Heo, Adding a facial to the list. My skin could use a little reset and some TLC 💆‍♂️./" target="_blank">
                                    <Image
                                        src="/logo 4.png"
                                        alt="logo 4"
                                        width={150}
                                        height={150}/>
                                </a>
                                <p className="serviceText">Facial Treatment </p>
                            </div>
                            <div className="serviceMenu">
                                <a href="mailto:heospaa@gmail.com?subject=Bathtub mood: ON 🛁&body=Hi Heo, Saving a slot for a bathtub session. Steam, peace, and me doing absolutely nothing. Perfect! 😄./" target="_blank">
                                    <Image
                                        src="/logo 5.png"
                                        alt="logo 5"
                                        width={150}
                                        height={150}/>
                                </a>
                                <p className="serviceText">Bathtub Time </p>
                            </div>
                            <div className="serviceMenu">
                                <a href="mailto:heospaa@gmail.com?subject=I’m going all in – full spa mode on! ✨&body=Hi Heo, Please book me the full relaxation package. Hair wash, blow-dry, haircut, facial, and that cozy bathtub session – all of it. I’m ready to be pampered from head to toe 🧖‍♂️✨./" target="_blank">
                                    <Image
                                        src="/logo 6.png"
                                        alt="logo 6"
                                        width={150}
                                        height={150}/>
                                </a>
                                <p className="serviceText">King Package </p>
                            </div>
                        </div>
                    </section>
                    <section id="Slogan">
                        <p>" Don’t forget to PAY me in full - LOVE doesn’t cover the bill! 🧾 " </p>

                    </section>
                    <section id="contact">
                        <div className="archedFrameContainer">
                            <div className="archedFrame">
                                <p> Look here for </p>
                                <p> the damage 💰</p>
                                <p className="alternateTextColor"> Hair Wash & Drying ....... 10€ </p>
                                <p className="alternateTextColor"> Haircut ............................. 10€ </p>
                                <p className="alternateTextColor"> Facial Treatment ............... 5€ </p>
                                <p className="alternateTextColor"> Bathtub Time .................. 15€ </p>
                                <p className="alternateTextColor"> King Package .................. 40€ </p>
                            </div>
                        </div>
                        <div id="contactDetails">
                            <img src="hh7.png" alt="Profile Image"
                                 width={300}
                                 height='auto'/>
                            <div id="contactMe">
                                <h3>Contact Me</h3>
                                <p>📞 You’re on your own</p>
                                <p>💌 <a href="mailto:heospaa@gmail.com">heospaa@gmail.com</a></p>
                                <p>📍 Well duh, of course it’s our home </p>

                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <footer>
                <p>This page is mine – but every service here is meant just for you. OK 🐷 !!!</p>
            </footer>
        </>
    );
}
