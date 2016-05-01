import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Greeting } from './greeting.tsx'
import { OSSList } from './oss.tsx'

export interface TopProps {
}

export interface TopState {
}

export class Top extends React.Component<TopProps, TopState> {
    render() {
        return (
            <div>
            {Greeting}
            <OSSList />
            </div>
        )
    }
}
