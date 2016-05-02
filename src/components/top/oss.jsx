import React from "react";
import ReactDOM from "react-dom";
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'

export class OSSObject {

    constructor(name, description, URL) {
        this.key = name
        this.name = name
        this.description = description
        this.URL = URL
    }
}

export interface OSSListProps {

}

export interface OSSListState {
    ossObjects: OSSObject[]
}

export class OSSList extends React.Component<OSSListProps, OSSListState> {

    constructor() {
        super();
        this.state = { ossObjects: [
            new OSSObject('NextGrowingTextView', 'The next in the generations of \'growing textviews\' optimized for iOS 7 and above.', 'https://github.com/muukii/NextGrowingTextView'),
            new OSSObject('TextAttributesUtil', 'Quickly create NSAttributedString with TextAttributes', 'https://github.com/muukii/TextAttributesUtil'),
            new OSSObject('AppVersionMonitor', 'Monitor iOS app version easily.', 'https://github.com/eure/AppVersionMonitor'),
            new OSSObject('LightRoom', 'Easy Chaining ImageFilter with CoreImage', 'https://github.com/muukii/LightRoom'),
            new OSSObject('RxAssert', 'Check element in Stream', 'https://github.com/muukii/RxAssert'),
            new OSSObject('Presenter', '', 'https://github.com/muukii/Presenter'),
            new OSSObject('HTTPLogger', '', 'https://github.com/muukii/HTTPLogger'),
            new OSSObject('RealmDefaults', 'RealmDefaults is a Simple value store. Replacement for NSUserDefaults', 'https://github.com/muukii/RealmDefaults'),
            new OSSObject('Realm-EasyBackground', '', 'https://github.com/muukii/Realm-EasyBackground'),
            new OSSObject('BrickRequest', '', 'https://github.com/muukii/BrickRequest'),
            new OSSObject('RESTRequest', '', 'https://github.com/muukii/RESTRequest'),
            new OSSObject('ViewFinder', '', 'https://github.com/muukii/ViewFinder'),
            new OSSObject('RxUnsplashSource', '', 'https://github.com/muukii/RxUnsplashSource')
        ] };
    }

    componentWillMount() {

    }

    render() {
        const oss = this.state.ossObjects.map((ossObject) => {
          return (
            <li>
              <h3 key={ossObject.key}><a key={ossObject.key} target="_blank" href={ossObject.URL}>{ossObject.name}</a></h3>
              <p key={ossObject.key}>{ossObject.description}</p>
            </li>
          )
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
