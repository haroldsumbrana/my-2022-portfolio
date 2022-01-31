import "./topbar.scss";
import { Mail, PhoneIphone } from "@material-ui/icons";
const codetext = "</>"
export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        H{codetext}rold
          </a>
                    <div className="itemContainer">
                        <PhoneIphone className="icon" />
                        <span>+63 976 033 8638</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>haroldsumbrana93@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
