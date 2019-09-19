import * as React from 'react';
import './Hello.css';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

function getExclam(numChars: number){
    return Array(numChars + 1).join('!');
}
export default class Hello extends React.PureComponent<Props, object> {
    public render(){
        const { name, enthusiasmLevel = 1 } = this.props;
        if (enthusiasmLevel <= 0){
            throw new Error('You could be a little more enthusiasmLevel.');
        }
        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclam(enthusiasmLevel)}
                </div>
            </div>
        );
    }

}