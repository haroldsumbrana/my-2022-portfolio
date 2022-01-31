import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            key: 1,
            id: "featured",
            title: "Featured",
        },
        {
            key: 2,
            id: "web",
            title: "All",
        },
        //{
        //    key: 3,
        //    id: "mobile",
        //    title: "Mobile App",
        //},
        //{
        //    key: 4,
        //    id: "design",
        //    title: "Design",
        //},
        //{
        //    key: 5,
        //    id: "content",
        //    title: "Content",
        //},
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            //case "mobile":
            //    setData(mobilePortfolio);
            //    break;
            //case "design":
            //    setData(designPortfolio);
            //    break;
            //case "content":
            //    setData(contentPortfolio);
            //    break;
            //default:
            //    setData(featuredPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (

                    <PortfolioList
                        key={item.key}
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}

                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img
                            src={d.img}
                            alt=""
                            onClick={() => window.open(d.link, "_blank")}
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
