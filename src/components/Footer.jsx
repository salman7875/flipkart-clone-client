import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-xs font-semibold">
      <div className="px-16 py-10 grid grid-cols-6">
        <div>
          <span className="text-slate-400 mb-2 inline-block">ABOUT</span>
          <ul className="flex  flex-col gap-1">
            <li>
              <a href="#" className="hover:underline">Contact U</a>
            </li>
            <li>
              <a href="#" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Careers</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Flipkart Stories</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Press</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Flipkart Wholesale</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Cleartrip</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Corporate Information</a>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-slate-400 mb-2 inline-block">Help</span>
          <ul className="flex  flex-col gap-1">
            <li>
              <a href="#" className="hover:underline">Payment</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Shipping</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Cancellation & Returns</a>
            </li>
            <li>
              <a href="#" className="hover:underline">FAQ</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Press</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Report Integration</a>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-slate-400 mb-2 inline-block">
            Consumer Policy
          </span>
          <ul className="flex  flex-col gap-1">
            <li>
              <a href="#" className="hover:underline">Cancellation & Returns</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Terms Of Use</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Security</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Privacy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Sitemap</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Grievance Redressed</a>
            </li>
            <li>
              <a href="#" className="hover:underline">EPR Complience</a>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-slate-400 mb-2 inline-block">Social</span>
          <ul className="flex  flex-col gap-1">
            <li>
              <a href="https://github.com/salman7875" target="_blank" className="hover:underline">Github</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mohammad-salman-ansari-6b8929253/" target="_blank" className="hover:underline">Linkedin</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Youtube</a>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-slate-400 mb-2 inline-block">Mail us: </span>
          <p className="pr-10">
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103,{" "}
          </p>
        </div>
        <div>
          <span className="text-slate-400 mb-2 inline-block">Mail us: </span>
          <p className="pr-10">
            Registered Office Address:Flipkart Internet Private Limited,
            Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring
            Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka,
            India CIN : U51109KA2012PTC066107
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
