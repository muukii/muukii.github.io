import React from 'react'
import ReactDOM from 'react-dom'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'

class OSSObject {
  constructor(name, description, URL) {
    this.key = name
    this.name = name
    this.description = description
    this.URL = URL
  }
}

class OSSList extends React.Component {

  constructor() {
    super()
    this.state = { ossObjects: [
      new OSSObject('RxAssert', '', 'https://github.com/muukii/RxAssert'),
      new OSSObject('Presenter', '', 'https://github.com/muukii/Presenter'),
      new OSSObject('AppVersionMonitor', '', 'https://github.com/eure/AppVersionMonitor'),
      new OSSObject('NextGrowingTextView', '', 'https://github.com/muukii/NextGrowingTextView'),
      new OSSObject('TextAttributesUtil', '', 'https://github.com/muukii/TextAttributesUtil'),
      new OSSObject('LightRoom', '', 'https://github.com/muukii/LightRoom'),
      new OSSObject('HTTPLogger', '', 'https://github.com/muukii/HTTPLogger'),
      new OSSObject('RealmDefaults', '', 'https://github.com/muukii/RealmDefaults'),
      new OSSObject('Realm-EasyBackground', '', 'https://github.com/muukii/Realm-EasyBackground'),
      new OSSObject('BrickRequest', '', 'https://github.com/muukii/BrickRequest'),
      new OSSObject('RESTRequest', '', 'https://github.com/muukii/RESTRequest'),
      new OSSObject('ViewFinder', '', 'https://github.com/muukii/ViewFinder'),
      new OSSObject('RxUnsplashSource', '', 'https://github.com/muukii/RxUnsplashSource')
     ] }
    }

  componentWillMount() {

  }

  render() {
    var oss = this.state.ossObjects.map((ossObject) => {
      return <ListGroupItem key={ossObject.key} header={ossObject.name} onClick={() => { this._onClick(ossObject) }}>{ossObject.description}</ListGroupItem>
    })
    return (
      <ListGroup>
        {oss}
      </ListGroup>
    )
  }

  _onClick(ossObject) {
    console.log(this);
    console.log(ossObject.URL);
  }
}

ReactDOM.render(<OSSList />, document.getElementById('oss'));


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
