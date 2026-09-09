import React from "react";
import Header from "./Components/Header";
import { Link } from "react-router-dom";
import FreezerImage from "./images/registryImages/FreezerImage.png";
import WashingMachine from "./images/registryImages/WashingMachine.png";
import SolarFan from "./images/registryImages/SolarFan.png";
import SmartTv from "./images/registryImages/SmartTv.png";
import InverterAc from "./images/registryImages/InverterAc.png";
import IronSkillet from "./images/registryImages/IronSkillet.png";
import IronCookware from "./images/registryImages/IronCookware.png";
import StorageBowl from "./images/registryImages/StorageBowl.png";
import PowerStation from "./images/registryImages/PowerStation.png";
import StainlessSteel from "./images/registryImages/StainlessSteel.png";
import PremiumGlassCup from "./images/registryImages/PremiumGlassCup.png";
import FoodProcessorSteel from "./images/registryImages/FoodProcessorSteel.png";
import ChampagneGlass from "./images/registryImages/ChampagneGlass.png";
import BreadToaster from "./images/registryImages/BreadToaster.png";
import FoodProcessorBlender from "./images/registryImages/FoodProcessorBlender.png";
import PortableSteamer from "./images/registryImages/PortableSteamer.png";
import BorosilicateGlass from "./images/registryImages/BorosilicateGlass.png";






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
    src: SmartTv,
    alt: "Tv-Image",
    title: "Google Smart TV",
    jumiaLink:
      "https://www.jumia.com.ng/tcl-55-inches-uhd-4k-google-smart-tv-55v6b-1-year-warranty-402815548.html",
  },

  {
    src: InverterAc,
    alt: "InverterAc-Image",
    title: "Inverter 1.5HP AC",
    jumiaLink:
      "https://www.jumia.com.ng/tcl-savein-ai-inverter-1.5hp-ac-419677012.html",
  },
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
   {
    src: PremiumGlassCup,
    alt: "Premium Glass Cup Set-Image",
    title: "Premium Glass Cup Set",
    jumiaLink:
      "https://www.jumia.com.ng/premium-glass-cup-set-6-pieces-66108859.html",
  },
   {
    src: FoodProcessorSteel,
    alt: "Food Processor with Stainless Steel Bowl-Image",
    title: "Food Processor with Stainless Steel Bowl",
    jumiaLink:
      "https://www.jumia.com.ng/raf-r.7032-1000w-food-processor-3l-capacity-with-stainless-steel-bowl-418214854.html",
  },
   {
    src: ChampagneGlass,
    alt: "Slim Stemmed Champagne Glasses-Image",
    title: "Slim Stemmed Champagne Glasses",
    jumiaLink:
      "https://www.jumia.com.ng/generic-6-pcs-slim-stemmed-champage-glasses-419274763.html",
  },
   {
    src: BreadToaster,
    alt: "Bread Toaster/Sandwich Machine-Image",
    title: "Bread Toaster/Sandwich Machine",
    jumiaLink:
      "https://www.jumia.com.ng/generic-bread-toastersandwich-machine-2-slice-314471112.html",
  },
   {
    src: FoodProcessorBlender,
    alt: "Food Processor-Yam Pounder/Blender/Grinder-Image",
    title: "Food Processor-Yam Pounder/Blender/Grinder",
    jumiaLink:
      "https://www.jumia.com.ng/6-l-food-processor-yam-pounder-blendergrinderkey-holder-generic-mpg1997484.html",
  },
   {
    src: PortableSteamer,
    alt: "Portable Handheld Garment Steamer-Image",
    title: "Portable Handheld Garment Steamer",
    jumiaLink:
      "https://www.jumia.com.ng/addigoes-portable-handheld-garment-steamer-1500w-fast-heat-steam-iron-2-in-1-flat-hanging-ironing-300ml-water-tank-wrinkle-remover-for-home-travel-419085498.html",
  },
   {
    src: BorosilicateGlass,
    alt: "Borosilicate glass, nontoxic, lead-free-Image",
    title: "Borosilicate glass, nontoxic, lead-free",
    jumiaLink:
      "https://www.jumia.com.ng/generic-4pcs-borosilicate-glass-nontoxic-lead-free-and-100-food-safe-glass-freezer-safe-storage-bowls-419886183.html",
  },
  //  {
  //   src: StainlessSteel,
  //   alt: "Stainless-Steel-Cookware-Image",
  //   title: "Tri-Ply Set Durable Versatile Stainless Steel Cookware Set",
  //   jumiaLink:
  //     "https://www.jumia.com.ng/oraimo-home-tri-ply-set-durable-versatile-stainless-steel-cookware-set-419530024.html",
  // },
  //  {
  //   src: StainlessSteel,
  //   alt: "Stainless-Steel-Cookware-Image",
  //   title: "Tri-Ply Set Durable Versatile Stainless Steel Cookware Set",
  //   jumiaLink:
  //     "https://www.jumia.com.ng/oraimo-home-tri-ply-set-durable-versatile-stainless-steel-cookware-set-419530024.html",
  // },
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
          <p className="delivery-instructions">
            For delivery of the gift items, please use the following address:
          </p>
          <h2 className="delivery-title"> Delivery Address</h2>
          <p>
            <span className="location">Location: </span> Lagos State
          </p>
          <p>
            <span className="location">Address: </span>31, Ladoke Akintola,
            Ikeja GRA
          </p>
          <p>
            <span className="location">Phone Number: </span> 08060179099
          </p>
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
