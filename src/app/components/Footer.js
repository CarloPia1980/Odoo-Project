export default function Footer() {
  return (
    <footer className="mt-10 bg-black text-white safe-bottom">
      <div className="max-w-[430px] mx-auto px-4 py-8">
        <img src="/ugr-logo.svg" alt="UGR" className="h-5 opacity-90" />
        <div className="grid grid-cols-2 gap-8 mt-6">
          <div>
            <h4 className="text-[12px] font-semibold mb-3 opacity-90">
              Support
            </h4>
            <ul className="space-y-2 text-[12px] opacity-80">
              <li>Military & First Responder Discount</li>
              <li>Warranty & Parts</li>
              <li>Order Status Request</li>
              <li>Find Installer</li>
              <li>FAQ</li>
              <li>CARB EO Stickers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold mb-3 opacity-90">
              Support
            </h4>
            <ul className="space-y-2 text-[12px] opacity-80">
              <li>About UGR</li>
              <li>Wholesale, Dealer</li>
              <li>Ambassadors</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="text-[12px] font-semibold mb-3 opacity-90">
              Resources
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-[12px] opacity-80">
              <li>Shipping & Return Policy</li>
              <li>Refund Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Do not sell my personal information</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <a
            aria-label="Facebook"
            className="w-8 h-8 rounded-full bg-white/10 grid place-items-center"
          >
            f
          </a>
          <a
            aria-label="Instagram"
            className="w-8 h-8 rounded-full bg-white/10 grid place-items-center"
          >
            in
          </a>
          <a
            aria-label="YouTube"
            className="w-8 h-8 rounded-full bg-white/10 grid place-items-center"
          >
            ▶
          </a>
        </div>
        <div className="mt-6 text-[11px] opacity-60">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
