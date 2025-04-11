import Image from "next/image";
import Button from "@/app/components/button";

export default function Home() {
    return (
        <>
            <header>
                <h1>Welcome to Heospa</h1>
                <p>Your right choice Silviusun!</p>
            </header>
            <main>
                <div id="menu">
                    <section id="services">
                        <h2>Our hair services</h2>
                        <div id="serviceMenu">
                            <div className="serviceItem"><a href="https://shopee.vn">color</a></div>
                            <div className="serviceItem">haircut</div>
                            <div className="serviceItem">3</div>
                            <div className="serviceItem">4</div>
                            <div className="serviceItem">5</div>
                        </div>


                    </section>
                    <section id="mission">
                        <Image src="/hinh.jpg" alt=".." width="244" height="244"></Image>
                        <div>
                            <h2>Our mission to you</h2>
                            <p>
                                Our mission is to provide you with innovative styles with the amenities of a
                                full-service, city style salon and spa in a local setting. Our dedication to our clients
                                drives our passion to deliver five star service to everyone who walks through our door.
                            </p>
                            <Button text="your text" link="https://google.de"/>
                        </div>
                    </section>
                    <section id="gift">
                        <div>
                            <h2>Gift Card</h2>
                            <p>
                                Our mission is to provide you with innovative styles with the amenities of a
                                full-service, city style salon and spa in a local setting. Our dedication to our clients
                                drives our passion to deliver five star service to everyone who walks through our door.
                            </p>
                            <Button text="Buy a Gift" link="https://google.de"/>

                        </div>
                        <Image src="/hinh.jpg" alt=".." width="244" height="244"></Image>
                    </section>
                    <section id="info">
                        <Image src="/haircut.jpg" alt=".." width="300" height="244"></Image>

                        <div>
                            <h2>Info</h2>
                            <p>
                                Our mission is to provide you with innovative styles with the amenities of a
                                full-service, city style salon and spa in a local setting. Our dedication to our clients
                                drives our passion to deliver five star service to everyone who walks through our door.
                            </p>
                            <Button text="Some Info" link="https://google.de"/>

                        </div>
                    </section>
                    <section>
                        <div className="sectionHeader">
                            <Image src="/haircut.jpg" alt=".." width="44" height="44"></Image>
                            <p> what this service is</p>
                        </div>

                        <p>
                            a lot of text
                        </p>
                        <p>
                            price: 100EUR
                        </p>
                    </section>
                </div>
            </main>
            <footer>
                <p>Thank you for trusting us and dont forget to pay!</p>
            </footer>
        </>
    );
}
