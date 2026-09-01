import React from "react";
import Header from "./Components/Header";
import { Link } from "react-router-dom";
import FreezerImage from "./images/registryImages/FreezerImage.png";
import WashingMachine from "./images/registryImages/WashingMachine.png";
import SolarFan from "./images/registryImages/SolarFan.png";
import MicroWave from "./images/registryImages/Microwave.png";
import SmartTv from "./images/registryImages/SmartTv.png";
// import UtensilsSet from "./images/registryImages/UtensilsSet.png";
import InverterAc from "./images/registryImages/InverterAc.png";
import BinatoneIron from "./images/registryImages/BinatoneIron.png";
import IronSkillet from "./images/registryImages/IronSkillet.png";
// import IronCookware from "./images/registryImages/IronCookware.png";
import StorageBowl from "./images/registryImages/StorageBowl.png";
import PowerStation from "./images/registryImages/PowerStation.png";
import StainlessSteel from "./images/registryImages/StainlessSteel.png";


const registryItems = [
  {
    src: FreezerImage,
    alt: "Freezer-Image",
    title: "Haier Thermocool 146 Litres Chest Freezer",
    jumiaLink:
      "https://www.jumia.com.ng/haier-thermocool-146-litres-chest-freezer-htf-150-silver-3-years-warranty-110318763.html",
  },
  {
    src: WashingMachine,
    alt: "Washing Machine-Image",
    title: "TCL 9KG Top Load Automatic Washing Machine",
    jumiaLink:
      "https://www.jumia.com.ng/tcl-9kg-top-load-automatic-washing-machine-419238701.html",
  },
  {
    src: SolarFan,
    alt: "Solar Fan-Image",
    title: "Rechargeable fan with Solar panel Standing Fan",
    jumiaLink:
      "https://www.jumia.com.ng/solar-fan-18-rechargeable-with-solar-panel-standing-fan-compare-with-binatone-lumin-mpg11493548.html",
  },
  {
    src: MicroWave,
    alt: "Microwave-Image",
    title: "Hisense 20 Litres Microwave",
    jumiaLink:
      "https://www.jumia.com.ng/hisense-20-litres-microwave-h20mows14-white-with-1-year-warranty-400871962.html",
  },
  {
    src: SmartTv,
    alt: "Tv-Image",
    title: "Google Smart TV",
    jumiaLink:
      "https://www.jumia.com.ng/tcl-55-inches-uhd-4k-google-smart-tv-55v6b-1-year-warranty-402815548.html",
  },
  // {
  //   src: UtensilsSet,
  //   alt: "Utensils-Set-Image",
  //   title: "Silicone Cooking Utensils Set",
  //   jumiaLink:
  //     "https://www.jumia.com.ng/kitcha-12pcs-silicone-cooking-utensils-set-for-nonstick-cookware-230c-heat-resistant-kitchen-utensil-set-with-wooden-handle-spatula-turner-spoon-tongs-whisk-419125663.html",
  // },
  {
    src: InverterAc,
    alt: "InverterAc-Image",
    title: "Inverter 1.5HP AC",
    jumiaLink:
      "https://www.jumia.com.ng/tcl-savein-ai-inverter-1.5hp-ac-419677012.html",
  },
  {
    src: BinatoneIron,
    alt: "BinatoneIron-Image",
    title: "Binatone Steam Iron",
    jumiaLink:
      "https://www.jumia.com.ng/smoother-gliding-steam-iron-si-1605-blue-2-years-warranty-binatone-mpg10684125.html",
  },
  {
    src: IronSkillet,
    alt: "IronSkillet-Image",
    title: "Cast Iron Skillet 3-Piece Set",
    jumiaLink:
      "https://www.jumia.com.ng/kitcha-cast-iron-skillet-3-piece-set-heavy-duty-16cm-20cm-26cm-pans-for-frying-saute-cooking-pizza-more-419120533.html",
  },
  // {
  //   src: IronCookware,
  //   alt: "Iron-Cookware-Image",
  //   title: "Enamelled Cast Iron Cookware Set: 5pcs",
  //   jumiaLink:
  //     "https://www.jumia.com.ng/generic-enamelled-cast-iron-cookware-set-5pcs-420174680.html",
  // },
  {
    src: StorageBowl,
    alt: "Glass-Storage-Bowl-Image",
    title: "Food Glass Storage Bowl Containers",
    jumiaLink:
      "https://www.jumia.com.ng/generic-12-pcs-food-glass-storage-bowl-containers-food-fresh-borosilicate-presevation-storage-419699685.html",
  },
  {
    src: PowerStation,
    alt: "Power-Station-Image",
    title: "Portable Power Supply Power Station",
    jumiaLink:
      "https://www.jumia.com.ng/hithium-heroee-2kwh-portable-power-supply-power-station-for-home-backup-outdoor-411309791.html",
  },
   {
    src: StainlessSteel,
    alt: "Stainless-Steel-Cookware-Image",
    title: "Tri-Ply Set Durable Versatile Stainless Steel Cookware Set",
    jumiaLink:
      "https://www.jumia.com.ng/oraimo-home-tri-ply-set-durable-versatile-stainless-steel-cookware-set-419530024.html",
  },
];

const GiftPage = () => {
  return (
    <main>
      <Header />
      <main className="gift-page">
        <section className="gift-hero">
          <p className="eyebrow">WITH LOVE</p>
          <h1>
            Our <em>gift</em>
            <br />
            page.
          </h1>
          <p>
            Your presence is already more than enough. But if you’d like to give
            us something for our new chapter, we’ve created a simple registry.
          </p>
        </section>

        <section className="delivery-address">
        <h2 className="delivery-title"> Delivery Address</h2>
        <p><span className="location">Location: </span> Lagos State</p>
        <p><span className="location">Address: </span>31, Ladoke Akintola, Ikeja GRA</p>
        <p><span className="location">Phone Number: </span> 08060179099</p>
        </section>

        <section className="gift-card-section">
          {registryItems.map((item, index) => (
            <div className="gift-card" key={index}>
              <div className="gift-card-content">
                <div className="gift-image-container">
                  <img src={item.src} alt={item.alt} className="gift-image" />
                </div>
                <div className="gift-card-text">
                  <h2 className="gift-card-title">{item.title}</h2>

                  <a
                    className="button"
                    href={item.jumiaLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Jumia ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="gift-footer-message">
          <h2>
            Thank you
            <br />
            <em>from the heart.</em>
          </h2>
          <Link to="/" className="text-link">
            ← Back to our wedding
          </Link>
        </section>
      </main>
    </main>
  );
};

export default GiftPage;
