import { Component } from "react";
import Content from "./components/Content";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
// import "./styleseet.css";
import webimg from "./img/web.jpg";
import IPimg from "./img/INFP.jpg";
import IJimg from "./img/INFJ.jpg";
import EPimg from "./img/ENFP.jpg";
import EJimg from "./img/ENFJ.jpg";
import SCimg from "./img/SCORE.png";
import "./App.css";
import "./components/Subject.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      selected_content_id: 1,
      subject: { title: "MBTI-NF", sub: "NF기질은 아폴론기질로 불리며 타인과의 관계 중요시 생각하고, 커뮤니케이션능력을 가지며, 통일성을 이루는 아폴론같은 기질입니다." },
      welcome: { title: "welcome", desc: "NF기질을 배우러 온 당신 반갑습니다!",image: webimg },
      contents: [
        { id: 1, title: "INFP", desc: "최악의 상황에서도 좋은 면만 보며 긍정적이고 더 나은 상황을 만들고자 노력하지만 꾸준한 관심을 가지고 이들을 지켜보지 않으면 은둔자 생활을 하게됩니다. 꾸준한 노력이 필요합니다.",image: IPimg },
        { id: 2, title: "INFJ", desc: "정신의 건축가 형사람으로 통찰혁, 기발한 아이디어 등 능력을 가지며 아이디어나 계획을 뒤집고 재수립하는 과정을 잘하는 유형, 혹시나 말이 없다고 느껴지만 그건 생각을 정리하고 있는겁니다.", image: IJimg },
        { id: 3, title: "ENFP", desc: "활동가형 사람으로 자유로운 사고의 소유자, 분위기 메이커역할을 하며 이들은 인생의 즐거움이나 일시적 만족이 아닌 타인과 사회적 정서적으로 싶은 관계를 통해 행복을 느낌니다. 스파크 유형으로 갑자기 주제가 바뀔 수 있는 건 주의해주세요. ", image:EPimg },
        { id: 4, title: "ENFJ", desc: "제일 적은 유형이지만 카리스마와 충만한 열정을 지닌 타고난 리더형, 세상의 빛과 소금이 될 수 있도록 사람들을 독려도 잘하고 봉사정신이 투철합니다.", image: EJimg },
        { id: 5, title: "Korea", desc: "ENFP: 8% INFP: 5.9% INFJ:2.8% ENFJ:1.5%으로 총 18.2%로 세계 나라중 NF비율이 높다 ", image:SCimg}, 
      ],
    };    
  }
  render() {
    var _title,
      _desc,
      _image = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _image = this.state.welcome.image
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          _image = data.image;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
        ></TOC>
        <Content title={_title} desc={_desc} img= {_image}></Content>       
      </div>
    );
  }
}

export default App;
