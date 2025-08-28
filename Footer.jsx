export default function Footer() {
  return (
    <footer className="mt-10 bg-black text-white safe-bottom">
      <div className="max-w-full mx-auto px-4 py-8">
        {/* Logo */}
        <img src="/ugrlogo.png" alt="UGR" className="h-5 opacity-90" />

        {/* Link groups */}
        <div className="grid grid-cols-2 gap-8 mt-6">
          <div>
            <h4 className="text-[12px] font-semibold mb-3 opacity-90">
              Support
            </h4>
            <ul className="space-y-2 text-[12px] opacity-80">
              <li>
                <a href="#">Military & First Responder Discount</a>
              </li>
              <li>
                <a href="#">Warranty & Parts</a>
              </li>
              <li>
                <a href="#">Order Status Request</a>
              </li>
              <li>
                <a href="#">Find Installer</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">CARB EO Stickers</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold mb-3 opacity-90">
              Company
            </h4>
            <ul className="space-y-2 text-[12px] opacity-80">
              <li>
                <a href="#">About UGR</a>
              </li>
              <li>
                <a href="#">Wholesale, Dealer</a>
              </li>
              <li>
                <a href="#">Ambassadors</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          <div className="col-span-2">
            <h4 className="text-[12px] font-semibold mb-3 opacity-90">
              Resources
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-[12px] opacity-80">
              <li>
                <a href="#">Shipping & Return Policy</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Do not sell my personal information</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-6 flex items-center gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="w-8 h-8 rounded-full bg-white/10 grid place-items-center"
          >
            f
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="w-8 h-8 rounded-full bg-white/10 grid place-items-center"
          >
            in
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="w-8 h-8 rounded-full bg-white/10 grid place-items-center"
          >
            ▶
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-[11px] opacity-60">
          © {new Date().getFullYear()} UGR. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
