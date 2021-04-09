import Link from 'next/link';

export default function logoColor() {
  return  <Link href="/board">
            <a className="sidebar-brand d-flex align-items-center justify-content-center">
              <div className="sidebar-brand-icon">
                <img src="img/logo.png" width="80px" />
              </div>
              <div className="sidebar-brand-text mx-3"> <sup></sup>
              </div>
            </a>
          </Link>
}