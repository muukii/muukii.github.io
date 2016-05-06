import React from 'react'
import ReactDOM from 'react-dom'
// var cheerio = require('cheerio')
import cheerio from 'cheerio'
import axios from 'axios'

const GitHubRequest = axios.create({
  baseURL: 'https://api.github.com',
});

const GitHubPageRequest = axios.create({
  baseURL: 'https://github.com'
});

export class OSSObject {

    constructor(name) {
        this.name = name
    }
}

class OSSItem extends React.Component {

  constructor() {
    super()
    this.state = {
      language: "",
      name: "",
      URL: "",
      description: "",
    }
  }

  componentWillMount() {
    this.getInfo()
  }

  render() {
    if (this.state.name !== "") {
      return (
        <li>
          <h3 key={this.state.name}><a target="_blank" href={this.state.URL}>{this.state.name}</a></h3>
          <p>{this.state.description}</p>
        </li>
      )
    } else {
      return false
    }
  }

  // - Private
  getInfo() {
    GitHubRequest.get('/repos/muukii/' + this.props.ossObject.name + '?access_token=16a953b32933229e6f7b33d3237d3ca2793f29a2')
    .then(r => {
      let data = r.data
      let url = data.html_url
      let language = data.language
      let name = data.name
      let description = data.description

      this.setState(
        {
          URL: url,
          language: language,
          name: name,
          description: description,
        }
      )
      console.log(r)
    })
    .catch(r => {
      console.log(r)
    });
  }
}

export class OSSList extends React.Component {

    constructor() {
        super();
        this.state = { ossObjects: [
            new OSSObject('MusicalScaleKit'),
            new OSSObject('NextGrowingTextView'),
            new OSSObject('TextAttributesUtil'),
            new OSSObject('AppVersionMonitor'),
            new OSSObject('LightRoom'),
            new OSSObject('RxAssert'),
            new OSSObject('Presenter'),
            new OSSObject('HTTPLogger'),
            new OSSObject('RealmDefaults'),
            new OSSObject('Realm-EasyBackground'),
            new OSSObject('BrickRequest'),
            new OSSObject('RESTRequest'),
            new OSSObject('ViewFinder'),
            new OSSObject('RxUnsplashSource'),
        ] };
    }

    componentWillMount() {

    }

    render() {
        const oss = this.state.ossObjects.map((ossObject) => {
          return <OSSItem ossObject={ossObject} />
        });
        return (
          <div>
          <h1>Open Source Libraries</h1>
          <ul>
            {oss}
          </ul>
        </div>
        );
    }

    _onClick(ossObject) {
        console.log(this);
        console.log(ossObject.URL);
        window.open(ossObject.URL, '_blank');
    }
}

/*
export class ShotListBox extends React.Component {
get initialState() {
return {data: []}
}
constructor() {
super()
this.state = {
data: []
}
}
componentWillMount() {
var service = new ShotService()
service.fetchShots((shots) => {
this.setState({data: shots})
})
}
render() {
return (<ShotList data={this.state.data}/>)
}
}
*/
