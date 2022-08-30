import React, { Component } from "react";
import NewsCard from "./components/NewsCard";

export default class App extends Component {
  state = {
    count: 0,
    text: ["Hello World", "Hello Guys"],
  };

  onCount() {
    this.setState({
      count: this.state.count + 1,
      text: "Hey guys",
    });
  }

  render() {
    const listNews = [
      {
        image:
          "https://awsimages.detik.net.id/community/media/visual/2019/11/20/00b91aa6-26e3-4c8b-ad2d-054c3c1a268b_169.jpeg?w=700&q=90",
        title: "Berita Tentang Ahok",
      },
      {
        image:
          "https://cdn0-production-images-kly.akamaized.net/YGiTbLOOMlCc6Qjed6OxA95oxOE=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/thumbnails/1889746/original/020508900_1518397990-20180212-enam-plus-jaksel-dan-jakbar-masih-berpotensi-hujan-kilat-hari-ini-87886d.jpg",
        title: "Berita Tentang Cuaca",
      },
      {
        image:
          "https://cdn1.katadata.co.id/media/images/thumb/2022/07/01/Perjalanan_Tjahjo_Kumolo-2022_07_01-13_02_30_4fbad6461b17655db0f9ed751440d203_426x240_thumb.jpg",
        title: "Berita Tentang Politik",
      },
    ];

    return (
      <div>
        <p>Count on State</p>
        <p>
          Result :
          {this.state.count > 11 ? (
            <div>
              <p>
                {this.setState({
                  count: 0,
                })}
              </p>
            </div>
          ) : (
            <>{this.state.count >= 11 ? <p>Ini rusak</p> : this.state.count}</>
          )}
        </p>
        <button onClick={(item) => this.onCount(item)}>Count on Me!</button>
        {listNews.map((item) => {
          return <NewsCard src={item.image} title={item.title} />;
        })}
        <NewsCard />
      </div>
    );
  }
}
